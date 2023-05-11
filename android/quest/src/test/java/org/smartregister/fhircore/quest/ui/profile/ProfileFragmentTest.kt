/*
 * Copyright 2021-2023 Ona Systems, Inc
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

package org.smartregister.fhircore.quest.ui.profile

import androidx.compose.material.ExperimentalMaterialApi
import androidx.compose.material.SnackbarDuration
import androidx.compose.ui.platform.ComposeView
import androidx.core.os.bundleOf
import androidx.fragment.app.commitNow
import androidx.navigation.Navigation
import androidx.navigation.testing.TestNavHostController
import dagger.hilt.android.testing.BindValue
import dagger.hilt.android.testing.HiltAndroidRule
import dagger.hilt.android.testing.HiltAndroidTest
import io.mockk.coEvery
import io.mockk.coVerify
import io.mockk.every
import io.mockk.just
import io.mockk.mockk
import io.mockk.runs
import io.mockk.spyk
import io.mockk.verify
import kotlinx.coroutines.runBlocking
import org.hl7.fhir.r4.model.Patient
import org.hl7.fhir.r4.model.QuestionnaireResponse
import org.junit.Assert
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.robolectric.Robolectric
import org.smartregister.fhircore.engine.configuration.ConfigurationRegistry
import org.smartregister.fhircore.engine.configuration.QuestionnaireConfig
import org.smartregister.fhircore.engine.data.local.register.RegisterRepository
import org.smartregister.fhircore.engine.domain.model.ActionParameter
import org.smartregister.fhircore.engine.domain.model.ActionParameterType
import org.smartregister.fhircore.engine.domain.model.FhirResourceConfig
import org.smartregister.fhircore.engine.domain.model.RepositoryResourceData
import org.smartregister.fhircore.engine.domain.model.ResourceConfig
import org.smartregister.fhircore.engine.domain.model.SnackBarMessageConfig
import org.smartregister.fhircore.quest.R
import org.smartregister.fhircore.quest.app.fakes.Faker
import org.smartregister.fhircore.quest.navigation.NavigationArg
import org.smartregister.fhircore.quest.robolectric.RobolectricTest
import org.smartregister.fhircore.quest.ui.main.AppMainActivity
import org.smartregister.fhircore.quest.ui.shared.models.QuestionnaireSubmission

@OptIn(ExperimentalMaterialApi::class)
@HiltAndroidTest
class ProfileFragmentTest : RobolectricTest() {

  @get:Rule(order = 0) val hiltAndroidRule = HiltAndroidRule(this)

  @BindValue
  val configurationRegistry: ConfigurationRegistry = Faker.buildTestConfigurationRegistry()

  @BindValue val registerRepository: RegisterRepository = mockk(relaxUnitFun = true, relaxed = true)

  @BindValue
  val profileViewModel =
    spyk(
      ProfileViewModel(
        mockk(),
        configurationRegistry = configurationRegistry,
        mockk(),
        mockk(),
        mockk()
      )
    )

  private val activityController = Robolectric.buildActivity(AppMainActivity::class.java)

  private lateinit var navController: TestNavHostController

  private val patient = Faker.buildPatient()

  private val resourceConfig = mockk<FhirResourceConfig>()

  private lateinit var mainActivity: AppMainActivity

  lateinit var profileFragment: ProfileFragment

  @Before
  fun setUp() {
    hiltAndroidRule.inject()

    profileFragment =
      ProfileFragment().apply {
        arguments =
          bundleOf(
            NavigationArg.PROFILE_ID to "defaultProfile",
            NavigationArg.RESOURCE_ID to patient.id,
            NavigationArg.RESOURCE_CONFIG to resourceConfig,
            NavigationArg.PARAMS to
              arrayOf(
                ActionParameter(
                  key = "anyId",
                  paramType = ActionParameterType.PARAMDATA,
                  value = "anyValue"
                )
              )
          )
      }
    activityController.create().resume()
    mainActivity = activityController.get()
    navController =
      TestNavHostController(mainActivity).apply { setGraph(R.navigation.application_nav_graph) }

    // Simulate the returned value of loadProfile
    coEvery { registerRepository.loadProfileData(any(), any(), paramsList = emptyArray()) } returns
      RepositoryResourceData.Search(resource = Faker.buildPatient())
    Navigation.setViewNavController(mainActivity.navHostFragment.requireView(), navController)
    mainActivity.supportFragmentManager.run {
      commitNow { add(profileFragment, ProfileFragment::class.java.simpleName) }
      executePendingTransactions()
    }
  }

  @Test
  fun testProfileFragmentCreation() {
    Assert.assertTrue(profileFragment.view is ComposeView)
    activityController.destroy()
  }

  @Test
  fun testHandleQuestionnaireSubmissionCallsProfileViewModelRetrieveProfileUiStateAndEmitSnackBarState() {
    val snackBarMessageConfig = SnackBarMessageConfig(message = "Family member added")
    val questionnaireConfig =
      QuestionnaireConfig(id = "add-member", snackBarMessage = snackBarMessageConfig)
    val questionnaireResponse = QuestionnaireResponse().apply { id = "1234" }
    val questionnaireSubmission =
      QuestionnaireSubmission(
        questionnaireConfig = questionnaireConfig,
        questionnaireResponse = questionnaireResponse
      )

    coEvery { profileViewModel.retrieveProfileUiState(any(), any(), any(), any()) } just runs
    coEvery { profileViewModel.emitSnackBarState(any()) } just runs

    runBlocking { profileFragment.handleQuestionnaireSubmission(questionnaireSubmission) }

    coVerify {
      profileViewModel.retrieveProfileUiState(
        profileId = "defaultProfile",
        resourceId = "sampleId",
        any(),
        any()
      )
    }
    coVerify { profileViewModel.emitSnackBarState(snackBarMessageConfig) }
  }
  @Test
  fun testOnChangedInvokesRetrievesProfileUiStateAndEmitsSnackBar() {
    val snackBarMessageConfig =
      SnackBarMessageConfig(
        message = "questionnaire message",
        actionLabel = "",
        SnackbarDuration.Short,
        snackBarActions = emptyList())
    val questionnaireSubmission =
      QuestionnaireSubmission(
        questionnaireResponse = mockk(),
        questionnaireConfig =
        QuestionnaireConfig(
          id = "questionnaireId", snackBarMessage = snackBarMessageConfig))

    val profileId = "1234"
    val resourceId = "questionSubmission"
    val resourceConfig =
      ResourceConfig(
        relatedResources = emptyList(),
        id = "",
        sortConfigs = emptyList(),
        resource = Patient.NAME.toString(),
        isRevInclude = false)
    val fhirResourceConfig =
      FhirResourceConfig(baseResource = resourceConfig, relatedResources = emptyList())
    val params = emptyArray<ActionParameter>()
    coEvery {
      profileViewModel.retrieveProfileUiState(profileId, resourceId, fhirResourceConfig, params)
    } just runs

    coEvery { profileViewModel.emitSnackBarState(snackBarMessageConfig = any()) } just runs
    every { profileFragment.onChanged(questionnaireSubmission) } just runs
    coVerify { profileViewModel.emitSnackBarState(snackBarMessageConfig) }
    coVerify {
      profileViewModel.retrieveProfileUiState(profileId, resourceId, fhirResourceConfig, params)
    }
    verify { profileFragment.onChanged(questionnaireSubmission) }
  }
}
