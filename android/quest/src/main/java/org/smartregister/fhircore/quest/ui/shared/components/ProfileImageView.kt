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

package org.smartregister.fhircore.quest.ui.shared.components

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.Image
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.ColorFilter
import androidx.compose.ui.graphics.asImageBitmap
import androidx.compose.ui.platform.LocalContext
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.res.painterResource
import androidx.compose.ui.unit.Dp
import androidx.compose.ui.unit.dp
import org.smartregister.fhircore.engine.configuration.navigation.ICON_TYPE_LOCAL
import org.smartregister.fhircore.engine.configuration.navigation.ICON_TYPE_REMOTE
import org.smartregister.fhircore.engine.configuration.view.ProfileImageViewProperties
import org.smartregister.fhircore.engine.util.annotation.PreviewWithBackgroundExcludeGenerated
import org.smartregister.fhircore.engine.util.extension.parseColor
import org.smartregister.fhircore.engine.util.extension.retrieveResourceId

const val IMAGE_VIEW_LOCAL_IMAGE_TEST_TAG = "imageViewLocalImageTestTag"
const val IMAGE_VIEW_REMOTE_IMAGE_TEST_TAG = "imageViewRemoteImageTestTag"

@Composable
fun ImageView(
  modifier: Modifier = Modifier,
  profileImageViewProperties: ProfileImageViewProperties,
) {
  when (profileImageViewProperties.type) {
    ICON_TYPE_LOCAL -> {
      LocalContext.current.retrieveResourceId(profileImageViewProperties.reference)?.let {
        drawableId ->
        Image(
          modifier =
            modifier
              .testTag(IMAGE_VIEW_LOCAL_IMAGE_TEST_TAG)
              .width(Dp(profileImageViewProperties.width))
              .height(Dp(profileImageViewProperties.height))
              .border(
                BorderStroke(1.dp, profileImageViewProperties.borderColor.parseColor()),
                CircleShape,
              )
              .clip(CircleShape)
              .padding(10.dp),
          painter = painterResource(id = drawableId),
          colorFilter = ColorFilter.tint(profileImageViewProperties.color.parseColor()),
          contentDescription = IMAGE_VIEW_LOCAL_IMAGE_TEST_TAG,
        )
      }
    }
    ICON_TYPE_REMOTE ->
      if (profileImageViewProperties.decodedBitmap != null) {
        Image(
          modifier =
            modifier
              .testTag(IMAGE_VIEW_REMOTE_IMAGE_TEST_TAG)
              .padding(10.dp)
              .width(Dp(profileImageViewProperties.width))
              .height(Dp(profileImageViewProperties.height)),
          bitmap = profileImageViewProperties.decodedBitmap!!.asImageBitmap(),
          contentDescription = IMAGE_VIEW_REMOTE_IMAGE_TEST_TAG,
        )
      }
  }
}

@PreviewWithBackgroundExcludeGenerated
@Composable
private fun LocalImageViewPreview() {
  ImageView(
    profileImageViewProperties =
      ProfileImageViewProperties(
        height = 80f,
        width = 80f,
        reference = "ic_households",
      ),
  )
}