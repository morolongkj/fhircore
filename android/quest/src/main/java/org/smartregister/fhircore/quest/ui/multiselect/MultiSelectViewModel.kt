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

package org.smartregister.fhircore.quest.ui.multiselect

import androidx.compose.runtime.MutableState
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.snapshots.SnapshotStateList
import androidx.compose.runtime.snapshots.SnapshotStateMap
import androidx.compose.ui.state.ToggleableState
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.google.android.fhir.logicalId
import dagger.hilt.android.lifecycle.HiltViewModel
import javax.inject.Inject
import kotlinx.coroutines.flow.firstOrNull
import kotlinx.coroutines.launch
import org.smartregister.fhircore.engine.data.local.DefaultRepository
import org.smartregister.fhircore.engine.datastore.PreferenceDataStore
import org.smartregister.fhircore.engine.domain.model.MultiSelectViewConfig
import org.smartregister.fhircore.engine.ui.multiselect.TreeMap
import org.smartregister.fhircore.engine.ui.multiselect.TreeNode
import org.smartregister.fhircore.engine.util.extension.extractLogicalIdUuid
import org.smartregister.fhircore.engine.util.fhirpath.FhirPathDataExtractor

@HiltViewModel
class MultiSelectViewModel
@Inject
constructor(
  val defaultRepository: DefaultRepository,
  val fhirPathDataExtractor: FhirPathDataExtractor,
  val preferenceDataStore: PreferenceDataStore,
) : ViewModel() {

  val searchTextState: MutableState<String> = mutableStateOf("")
  val rootNodeIds: SnapshotStateList<String> = SnapshotStateList()
  val selectedNodes: SnapshotStateMap<String, ToggleableState> = SnapshotStateMap()
  val lookupMap = SnapshotStateMap<String, TreeNode<String>>()

  fun populateLookupMap(multiSelectViewConfig: MultiSelectViewConfig) {
    // Mark previously selected nodes
    viewModelScope.launch {
      val previouslySelectedNodes =
        preferenceDataStore.read(PreferenceDataStore.SYNC_LOCATION_IDS).firstOrNull()
      if (!previouslySelectedNodes.isNullOrEmpty()) {
        previouslySelectedNodes
          .split(",")
          .asSequence()
          .map { it.split(":") }
          .filter { it.size == 2 }
          .map { Pair(it.first(), it.last()) }
          .forEach { selectedNodes[it.first] = ToggleableState.valueOf(it.second) }
      }

      val repositoryResourceDataList =
        defaultRepository.searchResourcesRecursively(
          fhirResourceConfig = multiSelectViewConfig.resourceConfig,
          filterActiveResources = null,
          secondaryResourceConfigs = null,
          configRules = null,
        )

      val lookupItems: List<TreeNode<String>> =
        repositoryResourceDataList.map {
          val parentId =
            fhirPathDataExtractor
              .extractValue(
                it.resource,
                multiSelectViewConfig.parentIdFhirPathExpression,
              )
              .extractLogicalIdUuid()
          val data =
            fhirPathDataExtractor
              .extractValue(
                it.resource,
                multiSelectViewConfig.contentFhirPathExpression,
              )
              .extractLogicalIdUuid()
          if (parentId.isEmpty()) {
            rootNodeIds.add(it.resource.logicalId)
          }
          TreeNode(id = it.resource.logicalId, parentId = parentId, data = data)
        }

      TreeMap.populateLookupMap(lookupItems, lookupMap)
    }
  }

  fun onTextChanged(searchTerm: String) {
    searchTextState.value = searchTerm
  }

  fun onSelectionDone(dismiss: () -> Unit) {
    viewModelScope.launch {
      // Consider using a proto-datastore here
      preferenceDataStore.write(
        PreferenceDataStore.SYNC_LOCATION_IDS,
        selectedNodes.map { "${it.key}:${it.value}" }.joinToString(","),
      )
      dismiss()
    }
  }
}
