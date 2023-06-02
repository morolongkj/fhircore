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

package org.smartregister.fhircore.engine.util.extension

import ca.uhn.fhir.context.FhirContext
import ca.uhn.fhir.parser.IParser
import ca.uhn.fhir.rest.gclient.ReferenceClientParam
import com.google.android.fhir.datacapture.extensions.createQuestionnaireResponseItem
import com.google.android.fhir.logicalId
import java.time.Duration
import java.util.Date
import java.util.LinkedList
import java.util.Locale
import java.util.UUID
import kotlin.math.abs
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonObject
import kotlinx.serialization.json.jsonPrimitive
import org.hl7.fhir.exceptions.FHIRException
import org.hl7.fhir.r4.model.Base
import org.hl7.fhir.r4.model.BaseDateTimeType
import org.hl7.fhir.r4.model.CodeableConcept
import org.hl7.fhir.r4.model.Coding
import org.hl7.fhir.r4.model.Composition
import org.hl7.fhir.r4.model.Condition
import org.hl7.fhir.r4.model.Encounter
import org.hl7.fhir.r4.model.Extension
import org.hl7.fhir.r4.model.Group
import org.hl7.fhir.r4.model.HumanName
import org.hl7.fhir.r4.model.Immunization
import org.hl7.fhir.r4.model.Observation
import org.hl7.fhir.r4.model.Patient
import org.hl7.fhir.r4.model.Practitioner
import org.hl7.fhir.r4.model.PrimitiveType
import org.hl7.fhir.r4.model.Quantity
import org.hl7.fhir.r4.model.Questionnaire
import org.hl7.fhir.r4.model.QuestionnaireResponse
import org.hl7.fhir.r4.model.Reference
import org.hl7.fhir.r4.model.Resource
import org.hl7.fhir.r4.model.ResourceType
import org.hl7.fhir.r4.model.StructureMap
import org.hl7.fhir.r4.model.Task
import org.hl7.fhir.r4.model.Timing
import org.json.JSONException
import org.json.JSONObject
import org.smartregister.fhircore.engine.data.local.DefaultRepository
import timber.log.Timber

private val fhirR4JsonParser = FhirContext.forR4Cached().getCustomJsonParser()

fun Base?.valueToString(): String {
  return when {
    this == null -> return ""
    this.isDateTime -> (this as BaseDateTimeType).value.makeItReadable()
    this.isPrimitive -> (this as PrimitiveType<*>).asStringValue()
    this is Coding -> display ?: code
    this is CodeableConcept -> this.stringValue()
    this is Quantity -> this.value.toPlainString()
    this is Timing ->
      this.repeat.let {
        it.period
          .toPlainString()
          .plus(" ")
          .plus(
            it.periodUnit.display.replaceFirstChar { char ->
              if (char.isLowerCase()) char.titlecase(Locale.getDefault()) else char.toString()
            }
          )
          .plus(" (s)")
      }
    this is HumanName ->
      this.given.firstOrNull().let {
        (if (it != null) "${it.valueToString()} " else "").plus(this.family)
      }
    this is Patient ->
      this.nameFirstRep.nameAsSingleString +
        ", " +
        this.gender.name.first() +
        ", " +
        this.birthDate.yearsPassed()
    this is Practitioner -> this.nameFirstRep.nameAsSingleString
    this is Group -> this.name
    else -> this.toString()
  }
}

fun CodeableConcept.stringValue(): String =
  this.text ?: this.codingFirstRep.display ?: this.codingFirstRep.code

fun Resource.encodeResourceToString(parser: IParser = fhirR4JsonParser): String =
  parser.encodeResourceToString(this.copy())

fun StructureMap.encodeResourceToString(parser: IParser = fhirR4JsonParser): String =
  parser
    .encodeResourceToString(this)
    .replace("'months'", "\\\\'months\\\\'")
    .replace("'days'", "\\\\'days\\\\'")
    .replace("'years'", "\\\\'years\\\\'")
    .replace("'weeks'", "\\\\'weeks\\\\'")

fun <T> String.decodeResourceFromString(parser: IParser = fhirR4JsonParser): T =
  parser.parseResource(this) as T

fun <T : Resource> T.updateFrom(updatedResource: Resource): T {
  var extensionUpdateForm = listOf<Extension>()
  if (updatedResource is Patient) {
    extensionUpdateForm = updatedResource.extension
  }
  var extension = listOf<Extension>()
  if (this is Patient) {
    extension = this.extension
  }
  val jsonParser = fhirR4JsonParser
  val stringJson = encodeResourceToString(jsonParser)
  val originalResourceJson = JSONObject(stringJson)

  originalResourceJson.updateFrom(JSONObject(updatedResource.encodeResourceToString(jsonParser)))
  return jsonParser.parseResource(this::class.java, originalResourceJson.toString()).apply {
    val meta = this.meta
    val metaUpdateForm = this@updateFrom.meta
    if ((meta == null || meta.isEmpty)) {
      if (metaUpdateForm != null) {
        this.meta = metaUpdateForm
        this.meta.tag = metaUpdateForm.tag
      }
    } else {
      val setOfTags = mutableSetOf<Coding>()
      setOfTags.addAll(meta.tag)
      setOfTags.addAll(metaUpdateForm.tag)
      this.meta.tag = setOfTags.distinctBy { it.code + it.system }
    }
    if (this is Patient && this@updateFrom is Patient && updatedResource is Patient) {
      if (extension.isEmpty()) {
        if (extensionUpdateForm.isNotEmpty()) {
          this.extension = extensionUpdateForm
        }
      } else {
        val setOfExtension = mutableSetOf<Extension>()
        setOfExtension.addAll(extension)
        setOfExtension.addAll(extensionUpdateForm)
        this.extension = setOfExtension.distinct()
      }
    }
  }
}

@Throws(JSONException::class)
fun JSONObject.updateFrom(updated: JSONObject) {
  val keys =
    mutableListOf<String>().apply {
      keys().forEach { add(it) }
      updated.keys().forEach { add(it) }
    }

  keys.forEach { key -> updated.opt(key)?.run { put(key, this) } }
}

fun QuestionnaireResponse.generateMissingItems(questionnaire: Questionnaire) =
  questionnaire.item.generateMissingItems(this.item)

fun List<Questionnaire.QuestionnaireItemComponent>.generateMissingItems(
  qrItems: MutableList<QuestionnaireResponse.QuestionnaireResponseItemComponent>
) {
  this.forEachIndexed { index, qItem ->
    // generate complete hierarchy if response item missing otherwise check for nested items
    if (qrItems.isEmpty() || (index < qrItems.size && qItem.linkId != qrItems[index].linkId)) {
      qrItems.add(index, qItem.createQuestionnaireResponseItem())
    } else if (index < qrItems.size) {
      qItem.item.generateMissingItems(qrItems[index].item)
    }
  }
}
/**
 * Set all questions that are not of type [Questionnaire.QuestionnaireItemType.GROUP] to readOnly if
 * [readOnly] is true. This also generates the correct FHIRPath population expression for each
 * question when mapped to the corresponding [QuestionnaireResponse]
 */
fun List<Questionnaire.QuestionnaireItemComponent>.prepareQuestionsForReadingOrEditing(
  path: String,
  readOnly: Boolean = false,
  readOnlyLinkIds: List<String>? = emptyList()
) {
  forEach { item ->
    if (item.type != Questionnaire.QuestionnaireItemType.GROUP) {
      item.readOnly = readOnly || item.readOnly || readOnlyLinkIds?.contains(item.linkId) == true
      item.item.prepareQuestionsForReadingOrEditing(
        "$path.where(linkId = '${item.linkId}').answer.item",
        readOnly
      )
    } else {
      item.item.prepareQuestionsForReadingOrEditing(
        "$path.where(linkId = '${item.linkId}').item",
        readOnly
      )
    }
  }
}

/** Delete resources in [QuestionnaireResponse.contained] from the database */
suspend fun QuestionnaireResponse.deleteRelatedResources(defaultRepository: DefaultRepository) {
  contained.forEach { defaultRepository.delete(it) }
}

fun QuestionnaireResponse.retainMetadata(questionnaireResponse: QuestionnaireResponse) {
  author = questionnaireResponse.author
  authored = questionnaireResponse.authored
  id = questionnaireResponse.logicalId

  val versionId = Integer.parseInt(questionnaireResponse.meta.versionId ?: "1") + 1

  questionnaireResponse.meta.apply {
    lastUpdated = Date()
    setVersionId(versionId.toString())
  }
}

fun QuestionnaireResponse.getEncounterId(): String? {
  return this.contained
    ?.find { it.resourceType == ResourceType.Encounter }
    ?.logicalId
    ?.replace("#", "")
}

fun Resource.generateMissingId() {
  if (logicalId.isBlank()) id = UUID.randomUUID().toString()
}

fun Resource.updateLastUpdated() {
  meta.lastUpdated = Date()
}

fun Resource.isPatient(patientId: String) =
  this.resourceType == ResourceType.Patient && this.logicalId == patientId

fun Resource.asReference(): Reference {
  val referenceValue = "${fhirType()}/$logicalId"
  return Reference().apply { this.reference = referenceValue }
}

fun Resource.referenceValue(): String = "${fhirType()}/$logicalId"

fun Resource.referenceParamForCondition(): ReferenceClientParam =
  when (resourceType) {
    ResourceType.Patient -> Condition.PATIENT
    ResourceType.Encounter -> Condition.ENCOUNTER
    else ->
      throw IllegalStateException("Do not know how to use $resourceType for Condition resource")
  }

fun Resource.referenceParamForObservation(): ReferenceClientParam =
  when (resourceType) {
    ResourceType.Patient -> Observation.PATIENT
    ResourceType.Encounter -> Observation.ENCOUNTER
    ResourceType.QuestionnaireResponse -> Observation.FOCUS
    else ->
      throw IllegalStateException("Do not know how to use $resourceType for Observation resource")
  }

fun Resource.setPropertySafely(name: String, value: Base) =
  kotlin.runCatching { this.setProperty(name, value) }.onFailure { Timber.w(it) }.getOrNull()

fun isValidResourceType(resourceCode: String): Boolean {
  return try {
    ResourceType.fromCode(resourceCode)
    true
  } catch (exception: FHIRException) {
    false
  }
}

/**
 * Composition sections can be nested. This function retrieves all the nested composition sections
 * and returns a flattened list of all [Composition.SectionComponent] for the given [Composition]
 * resource
 */
fun Composition.retrieveCompositionSections(): List<Composition.SectionComponent> {
  val sections = mutableListOf<Composition.SectionComponent>()
  val sectionsQueue = LinkedList<Composition.SectionComponent>()
  this.section.forEach {
    if (!it.section.isNullOrEmpty()) {
      it.section.forEach { sectionComponent -> sectionsQueue.addLast(sectionComponent) }
    }
    sections.add(it)
  }
  while (sectionsQueue.isNotEmpty()) {
    val sectionComponent = sectionsQueue.removeFirst()
    if (!sectionComponent.section.isNullOrEmpty()) {
      sectionComponent.section.forEach { sectionsQueue.addLast(it) }
    }
    sections.add(sectionComponent)
  }
  return sections
}

fun String.resourceClassType(): Class<out Resource> =
  FhirContext.forR4Cached().getResourceDefinition(this).implementingClass as Class<out Resource>

/**
 * A function that extracts only the UUID part of a resource logicalId.
 *
 * Examples:
 *
 * 1. "Group/0acda8c9-3fa3-40ae-abcd-7d1fba7098b4/_history/2" returns
 * "0acda8c9-3fa3-40ae-abcd-7d1fba7098b4".
 *
 * 2. "Group/0acda8c9-3fa3-40ae-abcd-7d1fba7098b4" returns "0acda8c9-3fa3-40ae-abcd-7d1fba7098b4".
 */
fun String.extractLogicalIdUuid() = this.substringAfter("/").substringBefore("/")

fun Resource.addTags(tags: List<Coding>) {
  tags.forEach { this.meta.addTag(it) }
}

/**
 * You provide a suspended function in Kotlin, which updates the due date of a task's dependent
 * tasks based on the date of a related immunization. The function takes a [defaultRepository]
 * parameter that is an instance of [DefaultRepository]. It then loops through all the tasks that
 * this task is a part of, loads the dependent tasks and their related immunization resources from
 * the repository, and updates the start date of the dependent task if it's scheduled to start
 * before the immunization date plus the required number of days.
 *
 * We may potentially extend this function to consider the attributes of resources other than
 * immunizations.
 *
 * @param defaultRepository An instance of DefaultRepository
 */
suspend fun Task.updateDependentTaskDueDate(defaultRepository: DefaultRepository): Task {
  return apply {
    if (hasPartOf()) {
      partOf.forEach { task ->
        val dependentTask =
          defaultRepository.loadResource<Task>(task.reference.extractLogicalIdUuid())
        if (dependentTask != null &&
            dependentTask.hasOutput() &&
            dependentTask.executionPeriod.hasStart() &&
            dependentTask.hasInput() &&
            (dependentTask.isDue() || dependentTask.isOverDue() || dependentTask.isUpcoming())
        ) {
          dependentTask.output?.forEach { dependentTaskOutputValue ->
            if (dependentTaskOutputValue.hasValue()) {
              val dependentTaskReference =
                Reference(
                  Json.decodeFromString<JsonObject>(dependentTaskOutputValue.value.toString())[
                      REFERENCE]
                    ?.jsonPrimitive
                    ?.content
                )
              val encounterResource =
                defaultRepository.loadResource<Encounter>(
                  dependentTaskReference.reference.extractLogicalIdUuid()
                )
              encounterResource?.partOf?.reference?.let { partOfReference ->
                try {
                  val immunizationResource =
                    defaultRepository.loadResource<Immunization>(
                      partOfReference.extractLogicalIdUuid()
                    )
                  immunizationResource?.occurrenceDateTimeType?.dateTimeValue()
                    ?.valueAsCalendar
                    ?.let { immunizationDate ->
                      val dependentTaskStartDate = dependentTask.executionPeriod.start
                      dependentTask.input.forEach {
                        val dependentTaskInputDate = it.value.toString().toInt()
                        val difference =
                          abs(
                            Duration.between(
                                immunizationDate.toInstant(),
                                dependentTaskStartDate.toInstant()
                              )
                              .toDays()
                          )
                        if (difference < dependentTaskInputDate &&
                            dependentTask.executionPeriod.hasStart()
                        ) {
                          dependentTask
                            .apply {
                              executionPeriod.start =
                                Date.from(immunizationDate.toInstant())
                                  .plusDays(dependentTaskInputDate)
                            }
                            .run {
                              defaultRepository.addOrUpdate(
                                addMandatoryTags = true,
                                resource = dependentTask
                              )
                            }
                        }
                      }
                    }
                } catch (e: ClassCastException) {
                  Timber.e(e)
                  return@forEach
                }
              }
            }
          }
        }
      }
    }
  }
}

const val REFERENCE = "reference"