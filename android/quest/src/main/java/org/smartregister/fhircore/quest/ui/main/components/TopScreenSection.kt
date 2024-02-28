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

package org.smartregister.fhircore.quest.ui.main.components

import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Badge
import androidx.compose.material.BadgedBox
import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.OutlinedTextField
import androidx.compose.material.Text
import androidx.compose.material.TextFieldDefaults
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.FilterAlt
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material.icons.filled.Notifications
import androidx.compose.material.icons.filled.Search
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.stringResource
import androidx.compose.ui.text.style.TextOverflow
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import org.smartregister.fhircore.engine.R
import org.smartregister.fhircore.engine.domain.model.ToolBarHomeNavigation
import org.smartregister.fhircore.engine.ui.theme.GreyTextColor
import org.smartregister.fhircore.engine.util.annotation.PreviewWithBackgroundExcludeGenerated
import org.smartregister.fhircore.quest.event.ToolbarClickEvent

const val DRAWER_MENU = "Drawer Menu"
const val SEARCH = "Search"
const val CLEAR = "Clear"
const val FILTER = "Filter"
const val NOTIFICATION = "Notification"
const val TITLE_ROW_TEST_TAG = "titleRowTestTag"
const val TOP_ROW_ICON_TEST_TAG = "topRowIconTestTag"
const val TOP_ROW_TEXT_TEST_TAG = "topRowTextTestTag"
const val TOP_ROW_FILTER_ICON_TEST_TAG = "topRowFilterIconTestTag"
const val TOP_ROW_NOTIFICATION_ICON_TEST_TAG = "topRowNotificationIconTestTag"
const val OUTLINED_BOX_TEST_TAG = "outlinedBoxTestTag"
const val TRAILING_ICON_TEST_TAG = "trailingIconTestTag"
const val TRAILING_ICON_BUTTON_TEST_TAG = "trailingIconButtonTestTag"
const val LEADING_ICON_TEST_TAG = "leadingIconTestTag"
const val SEARCH_FIELD_TEST_TAG = "searchFieldTestTag"

@Composable
fun TopScreenSection(
  modifier: Modifier = Modifier,
  title: String,
  searchText: String,
  filteredRecordsCount: Long? = null,
  unreadNotificationsCount: Long? = null,
  searchPlaceholder: String? = null,
  toolBarHomeNavigation: ToolBarHomeNavigation = ToolBarHomeNavigation.OPEN_DRAWER,
  onSearchTextChanged: (String) -> Unit,
  isFilterIconEnabled: Boolean = false,
  isNotificationIconEnabled: Boolean = false,
  onClick: (ToolbarClickEvent) -> Unit,
) {
  Column(
    modifier = modifier.fillMaxWidth().background(MaterialTheme.colors.primary),
  ) {
    Row(
      modifier =
        modifier
          .fillMaxWidth()
          .padding(horizontal = 16.dp, vertical = 16.dp)
          .testTag(
            TITLE_ROW_TEST_TAG,
          ),
      verticalAlignment = Alignment.CenterVertically,
    ) {
      Icon(
        when (toolBarHomeNavigation) {
          ToolBarHomeNavigation.OPEN_DRAWER -> Icons.Filled.Menu
          ToolBarHomeNavigation.NAVIGATE_BACK -> Icons.Filled.ArrowBack
        },
        contentDescription = DRAWER_MENU,
        tint = Color.White,
        modifier =
          modifier.clickable { onClick(ToolbarClickEvent.Navigate) }.testTag(TOP_ROW_ICON_TEST_TAG),
      )
      Text(
        text = title,
        fontSize = 20.sp,
        color = Color.White,
        modifier = modifier.padding(start = 8.dp).weight(1f).testTag(TOP_ROW_TEXT_TEST_TAG),
      )
      if (isFilterIconEnabled) {
        BadgedBox(
          modifier = Modifier.padding(end = 8.dp),
          badge = {
            if (filteredRecordsCount != null && filteredRecordsCount > -1) {
              Badge {
                Text(
                  text = if (filteredRecordsCount > 99) "99+" else filteredRecordsCount.toString(),
                  overflow = TextOverflow.Clip,
                  maxLines = 1,
                )
              }
            }
          },
        ) {
          Icon(
            imageVector = Icons.Default.FilterAlt,
            contentDescription = FILTER,
            tint = Color.White,
            modifier =
              modifier
                .clickable { onClick(ToolbarClickEvent.FilterData) }
                .testTag(TOP_ROW_FILTER_ICON_TEST_TAG),
          )
        }
      }

      if (isNotificationIconEnabled) {
        BadgedBox(
          modifier = Modifier.padding(end = 8.dp),
          badge = {
            if (unreadNotificationsCount != null && unreadNotificationsCount > 0) {
              Badge {
                Text(
                  text =
                    if (unreadNotificationsCount > 99) {
                      "99+"
                    } else unreadNotificationsCount.toString(),
                  overflow = TextOverflow.Clip,
                  maxLines = 1,
                )
              }
            }
          },
        ) {
          Icon(
            imageVector = Icons.Default.Notifications,
            contentDescription = NOTIFICATION,
            tint = Color.White,
            modifier =
              modifier
                .clickable { onClick(ToolbarClickEvent.ShowNotification) }
                .testTag(TOP_ROW_NOTIFICATION_ICON_TEST_TAG),
          )
        }
      }
    }

    OutlinedTextField(
      colors = TextFieldDefaults.outlinedTextFieldColors(textColor = Color.DarkGray),
      value = searchText,
      onValueChange = { onSearchTextChanged(it) },
      maxLines = 1,
      singleLine = true,
      placeholder = {
        Text(
          color = GreyTextColor,
          text = searchPlaceholder ?: stringResource(R.string.search_hint),
          modifier = modifier.testTag(SEARCH_FIELD_TEST_TAG),
        )
      },
      modifier =
        modifier
          .padding(start = 8.dp, bottom = 8.dp, end = 8.dp)
          .fillMaxWidth()
          .clip(RoundedCornerShape(size = 10.dp))
          .background(Color.White)
          .testTag(OUTLINED_BOX_TEST_TAG),
      leadingIcon = {
        Icon(
          imageVector = Icons.Filled.Search,
          SEARCH,
          modifier = modifier.testTag(LEADING_ICON_TEST_TAG),
        )
      },
      trailingIcon = {
        if (searchText.isNotEmpty()) {
          IconButton(
            onClick = { onSearchTextChanged("") },
            modifier = modifier.testTag(TRAILING_ICON_BUTTON_TEST_TAG),
          ) {
            Icon(
              imageVector = Icons.Filled.Clear,
              CLEAR,
              tint = Color.Gray,
              modifier = modifier.testTag(TRAILING_ICON_TEST_TAG),
            )
          }
        }
      },
    )
  }
}

@PreviewWithBackgroundExcludeGenerated
@Composable
fun TopScreenSectionWithFilterItemOverNinetyNinePreview() {
  TopScreenSection(
    title = "All Clients",
    searchText = "Eddy",
    filteredRecordsCount = 120,
    onSearchTextChanged = {},
    toolBarHomeNavigation = ToolBarHomeNavigation.NAVIGATE_BACK,
    isFilterIconEnabled = true,
    onClick = {},
  )
}

@PreviewWithBackgroundExcludeGenerated
@Composable
fun TopScreenSectionWithFilterCountNinetyNinePreview() {
  TopScreenSection(
    title = "All Clients",
    searchText = "Eddy",
    filteredRecordsCount = 99,
    onSearchTextChanged = {},
    toolBarHomeNavigation = ToolBarHomeNavigation.NAVIGATE_BACK,
    isFilterIconEnabled = true,
    onClick = {},
  )
}

@PreviewWithBackgroundExcludeGenerated
@Composable
fun TopScreenSectionNoFilterIconPreview() {
  TopScreenSection(
    title = "All Clients",
    searchText = "Eddy",
    onSearchTextChanged = {},
    toolBarHomeNavigation = ToolBarHomeNavigation.NAVIGATE_BACK,
    isFilterIconEnabled = false,
    onClick = {},
  )
}
