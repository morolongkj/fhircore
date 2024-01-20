/*
 * Copyright 2021-2024 Ona Systems, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.smartregister.fhircore.engine.sync

import androidx.datastore.preferences.core.stringPreferencesKey
import androidx.test.core.app.ApplicationProvider
import com.google.android.fhir.FhirEngine
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import dagger.hilt.android.testing.HiltTestApplication
import io.mockk.MockKAnnotations
import io.mockk.mockk
import io.mockk.spyk
import javax.inject.Inject
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.test.runTest
import org.hl7.fhir.r4.model.ResourceType
import org.junit.Assert
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.smartregister.fhircore.engine.app.fakes.Faker
import org.smartregister.fhircore.engine.configuration.ConfigurationRegistry
import org.smartregister.fhircore.engine.configuration.app.ConfigService
import org.smartregister.fhircore.engine.datastore.PreferencesDataStore
import org.smartregister.fhircore.engine.robolectric.RobolectricTest
import org.smartregister.fhircore.engine.rule.CoroutineTestRule
import org.smartregister.fhircore.engine.util.DispatcherProvider
import org.smartregister.fhircore.engine.util.extension.isIn

@ExperimentalCoroutinesApi
@HiltAndroidTest
class SyncBroadcasterTest : RobolectricTest() {

  @get:Rule(order = 0) val hiltAndroidRule = HiltAndroidRule(this)

  @get:Rule(order = 1) val coroutineTestRule = CoroutineTestRule()

  @Inject lateinit var preferencesDataStore: PreferencesDataStore

  @Inject lateinit var configService: ConfigService

  @Inject lateinit var dispatcherProvider: DispatcherProvider
  private val configurationRegistry: ConfigurationRegistry = Faker.buildTestConfigurationRegistry()
  private val fhirEngine = mockk<FhirEngine>()
  private lateinit var syncListenerManager: SyncListenerManager
  private lateinit var syncBroadcaster: SyncBroadcaster
  private val context = ApplicationProvider.getApplicationContext<HiltTestApplication>()

  @Before
  fun setup() {
    hiltAndroidRule.inject()
    MockKAnnotations.init(this)
    syncListenerManager =
      SyncListenerManager(
        configService = configService,
        preferencesDataStore = preferencesDataStore,
        configurationRegistry = configurationRegistry,
      )

    syncBroadcaster =
      spyk(
        SyncBroadcaster(
          configurationRegistry = configurationRegistry,
          fhirEngine = fhirEngine,
          dispatcherProvider = dispatcherProvider,
          syncListenerManager = syncListenerManager,
          context = context,
        ),
      )
  }

  @Test fun testRunSyncWorksAsExpected() = runTest {}

  @Test
  fun testLoadSyncParamsShouldLoadFromConfiguration() {
    runTest {
      preferencesDataStore.write<List<String>>(
        PreferencesDataStore.CARE_TEAM_IDS,
        listOf("1"),
        encodeWithGson = true,
      )
      preferencesDataStore.write(
        PreferencesDataStore.ORGANIZATION_IDS,
        listOf("2"),
        encodeWithGson = true,
      )
      preferencesDataStore.write(
        PreferencesDataStore.LOCATION_IDS,
        listOf("2"),
        encodeWithGson = true,
      )
      preferencesDataStore.write(
        PreferencesDataStore.REMOTE_SYNC_RESOURCES,
        arrayOf(
            ResourceType.CarePlan.name,
            ResourceType.Condition.name,
            ResourceType.Encounter.name,
            ResourceType.Group.name,
            ResourceType.Library.name,
            ResourceType.Observation.name,
            ResourceType.Patient.name,
            ResourceType.PlanDefinition.name,
            ResourceType.Questionnaire.name,
            ResourceType.QuestionnaireResponse.name,
            ResourceType.StructureMap.name,
            ResourceType.Task.name,
          )
          .sorted(),
        encodeWithGson = true,
      )
    }
    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    Assert.assertTrue(syncParam.isNotEmpty())

    val resourceTypes =
      arrayOf(
          ResourceType.CarePlan,
          ResourceType.Condition,
          ResourceType.Encounter,
          ResourceType.Group,
          ResourceType.Library,
          ResourceType.Observation,
          ResourceType.Patient,
          ResourceType.PlanDefinition,
          ResourceType.Questionnaire,
          ResourceType.QuestionnaireResponse,
          ResourceType.StructureMap,
          ResourceType.Task,
        )
        .sorted()

    Assert.assertEquals(resourceTypes, syncParam.keys.toTypedArray().sorted())

    syncParam.keys
      .asSequence()
      .filter { it.isIn(ResourceType.Binary, ResourceType.StructureMap) }
      .forEach { Assert.assertTrue(syncParam[it]!!.containsKey("_count")) }

    syncParam.keys
      .asSequence()
      .filter { it.isIn(ResourceType.Patient) }
      .forEach {
        Assert.assertTrue(syncParam[it]!!.containsKey("organization"))
        Assert.assertTrue(syncParam[it]!!.containsKey("_count"))
      }

    syncParam.keys
      .asSequence()
      .filter {
        it.isIn(
          ResourceType.Encounter,
          ResourceType.Condition,
          ResourceType.MedicationRequest,
          ResourceType.Task,
          ResourceType.QuestionnaireResponse,
          ResourceType.Observation,
        )
      }
      .forEach {
        Assert.assertTrue(syncParam[it]!!.containsKey("subject.organization"))
        Assert.assertTrue(syncParam[it]!!.containsKey("_count"))
      }

    syncParam.keys
      .asSequence()
      .filter { it.isIn(ResourceType.Questionnaire) }
      .forEach { Assert.assertTrue(syncParam[it]!!.containsKey("_count")) }
  }

  @Test
  fun `loadSyncParams() should load configuration when remote sync preference is missing`() {
    runTest {
      preferencesDataStore.write(
        PreferencesDataStore.CARE_TEAM_IDS,
        listOf("1"),
        encodeWithGson = true,
      )
      preferencesDataStore.write(
        PreferencesDataStore.ORGANIZATION_IDS,
        listOf("2"),
        encodeWithGson = true,
      )
      preferencesDataStore.write(
        PreferencesDataStore.LOCATION_IDS,
        listOf("3"),
        encodeWithGson = true,
      )
    }
    runTest { preferencesDataStore.clear() }

    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    Assert.assertTrue(syncParam.isNotEmpty())

    val resourceTypes =
      arrayOf(
          ResourceType.CarePlan,
          ResourceType.Condition,
          ResourceType.Encounter,
          ResourceType.Group,
          ResourceType.Library,
          ResourceType.Observation,
          ResourceType.Measure,
          ResourceType.Patient,
          ResourceType.PlanDefinition,
          ResourceType.Questionnaire,
          ResourceType.QuestionnaireResponse,
          ResourceType.StructureMap,
          ResourceType.Task,
        )
        .sorted()

    Assert.assertEquals(resourceTypes, syncParam.keys.toTypedArray().sorted())
  }

  @Test
  fun loadSyncParamsShouldHaveOrganizationId() {
    val organizationId = "organization-id"
    runTest {
      preferencesDataStore.write(
        stringPreferencesKey(ResourceType.Organization.name),
        listOf(organizationId),
      )
    }
    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    // Resource types that can be filtered based on Organization
    val resourceTypes =
      arrayOf(
        ResourceType.CarePlan,
        ResourceType.Condition,
        ResourceType.Encounter,
        ResourceType.Group,
        ResourceType.Observation,
        ResourceType.Patient,
        ResourceType.RelatedPerson,
        ResourceType.QuestionnaireResponse,
        ResourceType.Task,
      )

    Assert.assertTrue(syncParam.isNotEmpty())
    syncParam
      .filterKeys { it.isIn(*resourceTypes) }
      .values
      .forEach { Assert.assertTrue(it.containsValue(organizationId)) }
  }

  // TODO: Not supported yet; need to refactor sync implementation to be based on tags.
  @Test
  fun loadSyncParamsShouldHaveCareTeamIdNotSupported() {
    val careTeamId = "care-team-id"
    runTest {
      preferencesDataStore.write(
        PreferencesDataStore.CARE_TEAM_IDS,
        listOf(careTeamId),
        encodeWithGson = true,
      )
    }
    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    Assert.assertTrue(syncParam.isNotEmpty())
    syncParam.values.forEach { Assert.assertFalse(it.containsValue(careTeamId)) }
  }

  // TODO: Not supported yet; need to refactor sync implementation to be based on tags.
  @Test
  fun loadSyncParamsShouldNotHaveLocationIdNotSupported() {
    val locationId = "location-id"
    runTest {
      preferencesDataStore.write(
        PreferencesDataStore.LOCATION_IDS,
        listOf(locationId),
        encodeWithGson = true,
      )
    }

    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    Assert.assertTrue(syncParam.isNotEmpty())
    syncParam.values.forEach { Assert.assertFalse(it.containsValue(locationId)) }
  }

  // TODO: Not supported yet; need to refactor sync implementation to be based on tags.
  @Test
  fun loadSyncParamsShouldNotHavePractitionerIdNotSupported() {
    val practitionerId = "practitioner-id"
    runTest {
      preferencesDataStore.write(
        PreferencesDataStore.PRACTITIONER_ID,
        listOf(practitionerId),
        encodeWithGson = true,
      )
    }

    val syncParam = syncBroadcaster.syncListenerManager.loadSyncParams()

    Assert.assertTrue(syncParam.isNotEmpty())
    syncParam.values.forEach { Assert.assertFalse(it.containsValue(practitionerId)) }
  }
}
