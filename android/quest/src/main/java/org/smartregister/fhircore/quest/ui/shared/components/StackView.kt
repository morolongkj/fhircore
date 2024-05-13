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

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.size
import androidx.compose.material.Text
import androidx.compose.runtime.Composable


import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.navigation.NavController
import org.smartregister.fhircore.engine.configuration.view.BoxViewAlignment
import org.smartregister.fhircore.engine.configuration.view.StackViewProperties
import org.smartregister.fhircore.engine.configuration.view.ViewAlignment
import org.smartregister.fhircore.engine.domain.model.ResourceData
import org.smartregister.fhircore.engine.util.annotation.PreviewWithBackgroundExcludeGenerated
import org.smartregister.fhircore.engine.util.extension.parseColor

@Composable
fun ComposeLayouts() {
  Box(
    Modifier
      .background(Color.Green.copy(alpha = 0.2f))
      .size(250.dp)
  ) {
    Text("Center", Modifier.align(Alignment.Center))
    Text("Top Start", Modifier.align(Alignment.TopStart))
    Text("Top End", Modifier.align(Alignment.TopEnd))
    Text("Bottom Start", Modifier.align(Alignment.BottomStart))
    Text("Bottom End", Modifier.align(Alignment.BottomEnd))
  }
}
@Composable
fun StackViewTest(
  modifier: Modifier,
  stackViewProperties: StackViewProperties,
  resourceData: ResourceData,
  navController: NavController
) {
  val alpha = stackViewProperties.opacity
  val backgroundColor = stackViewProperties.backgroundColor.parseColor()
  val size = stackViewProperties.size

  Box(
    modifier = modifier.background(backgroundColor.copy(alpha = alpha)).size(size!!.dp),
  ) {
    stackViewProperties.children.forEach { child ->
      GenerateView(
        modifier = Modifier
          .align(determineAlignment(child.alignment)),
        properties = child,
        resourceData = resourceData,
        navController = navController,
      )
    }
  }
}

fun determineAlignment(viewAlignment: ViewAlignment) : Alignment{
  return when (viewAlignment) {
    ViewAlignment.TOPSTART-> Alignment.TopStart
    ViewAlignment.TOPEND -> Alignment.TopEnd
    ViewAlignment.CENTER -> Alignment.Center
    ViewAlignment.BOTTOMSTART-> Alignment.BottomStart
    ViewAlignment.BOTTOMEND-> Alignment.BottomEnd
    else -> {
      Alignment.Center
    }
  }
}

@PreviewWithBackgroundExcludeGenerated
@Composable
private fun StackViewPreview() {
  ComposeLayouts()
}
