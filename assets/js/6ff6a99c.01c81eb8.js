"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[6362],{1438:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(5893),r=i(1151);const s={title:"Questionnaires"},o="Questionnaire configuration",a={id:"engineering/app/configuring/config-types/forms/questionnaire",title:"Questionnaires",description:"This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a Questionnaire",source:"@site/docs/engineering/app/configuring/config-types/forms/questionnaire.mdx",sourceDirName:"engineering/app/configuring/config-types/forms",slug:"/engineering/app/configuring/config-types/forms/questionnaire",permalink:"/engineering/app/configuring/config-types/forms/questionnaire",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/configuring/config-types/forms/questionnaire.mdx",tags:[],version:"current",frontMatter:{title:"Questionnaires"},sidebar:"defaultSidebar",previous:{title:"Application",permalink:"/engineering/app/configuring/config-types/application"},next:{title:"Validation",permalink:"/engineering/app/configuring/config-types/forms/validation"}},d={},l=[{value:"A general questionnaire config",id:"a-general-questionnaire-config",level:2},{value:"Config properties",id:"config-properties",level:2},{value:"Questionnaire config actions",id:"questionnaire-config-actions",level:3},{value:"Questionnaire block config properties",id:"questionnaire-block-config-properties",level:2},{value:"Sample questionnaire with a planDefinition",id:"sample-questionnaire-with-a-plandefinition",level:2},{value:"Extra config properties",id:"extra-config-properties",level:2},{value:"Dynamic data pass between Profiles and Questionnaires",id:"dynamic-data-pass-between-profiles-and-questionnaires",level:2},{value:"Cancer LAUNCH_QUESTIONAIRE",id:"cancer-launch_questionaire",level:3},{value:"Sample JSON",id:"sample-json",level:4},{value:"Sample JSON",id:"sample-json-1",level:4},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow",level:2},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow-1",level:2},{value:"Extra eventWorkflows properties",id:"extra-eventworkflows-properties",level:2},{value:"Unique ID assignment",id:"unique-id-assignment",level:2},{value:"Characteristic-based Group resource for unique IDs",id:"characteristic-based-group-resource-for-unique-ids",level:2},{value:"Sample Group resource with unique IDs",id:"sample-group-resource-with-unique-ids",level:2},{value:"Hiding characters in a questionnaire",id:"hiding-characters-in-a-questionnaire",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"questionnaire-configuration",children:"Questionnaire configuration"}),"\n",(0,t.jsxs)(n.p,{children:["This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a ",(0,t.jsx)(n.a,{href:"https://www.hl7.org/FHIR/questionnaire.html",children:"Questionnaire"})]}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"Use this configuration in other configs like profile and register."})}),"\n",(0,t.jsx)(n.p,{children:"FHIR Core reads user data from label fields, date pickers, radiobutton, checkboxes  e.t.c through forms called Questionnaires\nWe can group these into 3 categories.fields"}),"\n",(0,t.jsx)(n.h2,{id:"a-general-questionnaire-config",children:"A general questionnaire config"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "id":"recordAsSick",\n  "title": "Record as Sick",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isChildUnder2months}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record sick child",\n        "resourceIdentifier": "@{patientId}"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The above is a simple question that can be used to record a sick patient."}),"\n",(0,t.jsx)(n.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"Questionnaire Unique String"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsx)(n.td,{children:"Display text shown as on the button"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"titleColor"}),(0,t.jsx)(n.td,{children:"Display text color"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"visible"}),(0,t.jsx)(n.td,{children:"A string to show if the questionnaire button should be shown"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"enabled"}),(0,t.jsx)(n.td,{children:"A string to show if the questionnaire button should be clickable"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"A list of actions that you would like to be executed"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes if you are using a questionnaire"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"actions (trigger)"}),(0,t.jsx)(n.td,{children:"Defines when you want to launch the questions"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"actions(workflow)"}),(0,t.jsx)(n.td,{children:"Import to execute logic related to the questionnaire"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"linkIds"}),(0,t.jsxs)(n.td,{children:["Contains configurations for linkIds for fields in the Questionnaires that are used to control application workflow and content; ranging from read only fields to fields used to capure location/barcode details. Each linkId is identified by a type (",(0,t.jsx)(n.code,{children:"READ_ONLY"}),", ",(0,t.jsx)(n.code,{children:"LOCATION"}),", ",(0,t.jsx)(n.code,{children:"BARCODE"}),", ",(0,t.jsx)(n.code,{children:"IDENTIFIER"}),")"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"type"}),(0,t.jsxs)(n.td,{children:["The item type, e.g. ",(0,t.jsx)(n.code,{children:"date"}),", ",(0,t.jsx)(n.code,{children:"choice"})," or ",(0,t.jsx)(n.code,{children:"group"}),". A ",(0,t.jsx)(n.code,{children:"group"})," type allows you to create a section within a questionnaire that controls and treats the items within the ",(0,t.jsx)(n.code,{children:"group"})," as a single item. This is suitable for block sections that can be toggled based on condition or answer expression logic"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"repeats"}),(0,t.jsx)(n.td,{children:"Boolean that controls whether an item is repeated or not, used to control a single item or group item that creates a repeated group"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"false"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"questionnaire-config-actions",children:"Questionnaire config actions"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"questionnaire": {\n  "id": "questionnaire-uuid",\n  "title": "Record sick child",\n  "resourceIdentifier": "@{patientId}",\n  "linkIds": [\n    {\n      "linkId": "122d7ffe-3137-46b5-a28d-5c1a335c4899",\n      "type": "READ_ONLY",\n    },\n    {\n      "linkId": "145fb5a7-66b0-455d-9cff-a0d0d5994caf",\n      "type": "LOCATION",\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"questionnaire-block-config-properties",children:"Questionnaire block config properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"id"}),(0,t.jsx)(n.td,{children:"Unique uuid that determines what questionnaire i.e form to launch"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"title"}),(0,t.jsx)(n.td,{children:"label text of the questionnaire"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resourceIdentifier"}),(0,t.jsx)(n.td,{children:"FHIR resource to pull/add or update"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"The questionnaire id inside the questionnaire block"}),"\n",(0,t.jsx)(n.h2,{id:"sample-questionnaire-with-a-plandefinition",children:"Sample questionnaire with a planDefinition"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Register Pregnancy",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{canRegisterPregnancy}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record to ANC",\n        "resourceIdentifier": "@{patientId}",\n        "planDefinitions": [\n          "planDefinition-uuid"\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The above questionnaire JSON config adds planDefinition in an array. For each item in the array, we pull related plan Definitions.\nThese are used when generating other tasks, CarePlans and related resources.See ",(0,t.jsx)(n.a,{href:"https://fhircore.smartregister.org/writing-fhir/plan-definiton",children:"https://fhircore.smartregister.org/writing-fhir/plan-definiton"})]}),"\n",(0,t.jsx)(n.h2,{id:"extra-config-properties",children:"Extra config properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"planDefinitions"}),(0,t.jsx)(n.td,{children:"A list of questionnaire planDefinition uuids"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"cqlInputResources"}),(0,t.jsxs)(n.td,{children:["A list of CQL Library ",(0,t.jsx)(n.code,{children:"id"}),"'s. The referenced Libraries are executed after questionnaire submission"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"barcodeLinkId"}),(0,t.jsx)(n.td,{children:"The link ID for barcode widget used in the Questionnaire"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"saveQuestionnaireResponse"}),(0,t.jsx)(n.td,{children:"Indicate whether to save QuestionnaireResponse or not"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"onSubmitActions"}),(0,t.jsx)(n.td,{children:"Configurations for actions invoked post Questionnaire submission"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"extractedResourceUniquePropertyExpressions"}),(0,t.jsx)(n.td,{children:"Configurations for unique properties used to identify resources during Questionnaire edit"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"uniqueIdAssignment"}),(0,t.jsx)(n.td,{children:"Configuration for unique identifier assignment"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-data-pass-between-profiles-and-questionnaires",children:"Dynamic data pass between Profiles and Questionnaires"}),"\n",(0,t.jsxs)(n.p,{children:["For you to pass data between profiles and questionnaires you can make use of ",(0,t.jsx)(n.strong,{children:"action config params"})," which are executed when ",(0,t.jsx)(n.strong,{children:"LAUNCH_QUESTIONNAIRE"})," is invoked."]}),"\n",(0,t.jsxs)(n.p,{children:["Data extraction happens during rules execution and is persisted in ",(0,t.jsx)(n.code,{children:"computedValuesMap"})," which is later used to interpolate values annotated with ",(0,t.jsx)(n.code,{children:"@value"}),". See [working with rules] (",(0,t.jsx)(n.a,{href:"https://docs.opensrp.io/engineering/android-app/configuring/working-with-rules",children:"https://docs.opensrp.io/engineering/android-app/configuring/working-with-rules"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, in the ",(0,t.jsx)(n.code,{children:"underlying_conditions"})," questionnaire you would like to show or hide the Cancer option based on whether the patient has cancer or not. The solution would be to pass ",(0,t.jsx)(n.code,{children:"has-cancer"})," BOOLEAN from ",(0,t.jsx)(n.code,{children:"adult_profile_config"})," to ",(0,t.jsx)(n.code,{children:"underlying_conditions"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Assuming that the ",(0,t.jsx)(n.code,{children:"LAUNCH_QUESTIONAIRE"})," ",(0,t.jsx)(n.code,{children:"onClick"})," function of ",(0,t.jsx)(n.code,{children:"adult_profile_config"})," takes you to ",(0,t.jsx)(n.code,{children:"underlying_conditions"})," questionnaire screen, below is a practical example of how the data would be passed."]}),"\n",(0,t.jsx)(n.h3,{id:"cancer-launch_questionaire",children:"Cancer LAUNCH_QUESTIONAIRE"}),"\n",(0,t.jsx)(n.h4,{id:"sample-json",children:"Sample JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Write rules to extract the data you need."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"rules":[\n      {\n      "name": "hasCancer",\n      "condition": "true",\n      "priority": 1,\n      "actions": [\n        "data.put(\'hasCancer\', service.evaluateToBoolean(availableConditions, \\"Condition.code.coding.code = \'363346000\' and Condition.clinicalStatus.coding.code = \'active\'\\", false))"]\n    },\n  ]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["add your params at ",(0,t.jsx)(n.strong,{children:"LAUNCH_QUESTIONNAIRE"})," section of adult_profile_config.json"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-1",children:"Sample JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'    { "trigger": "ON_CLICK",\n          "workflow": "LAUNCH_QUESTIONNAIRE",\n          "questionnaire": {\n            "id": "54497",\n            "title": "Record Comorbidity",\n            "resourceIdentifier": "@{patientId}",\n            "params": [\n              {\n                "key": "familyLogicalId",\n                "value": "@{familyLogicalId}",\n                "paramType": "UPDATE_DATE_ON_EDIT"\n              }\n            ]\n          },\n          "params": [\n            {\n              "paramType": "PREPOPULATE",\n              "linkId": "has-cancer",\n              "dataType": "BOOLEAN",\n              "key": "hasCancer",\n              "value": "@{hasCancer}"\n            }],\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["On the ",(0,t.jsx)(n.code,{children:"underlying_conditions"})," questionnaire side, we will then call the ",(0,t.jsx)(n.code,{children:"has-cancer"})," linkId that was declared in the ",(0,t.jsx)(n.code,{children:"adult_profile_config"}),", as shown in the example below."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "extension": [ {\n      "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-hidden",\n      "valueBoolean": true\n    } ],\n    "linkId": "has-cancer",\n    "definition": "http://hl7.org/fhir/StructureDefinition/Resource#Resource.id",\n    "type": "boolean"\n  }, {\n    "linkId": "e4b02bd1-faa3-415e-84e7-378b8cc84d92",\n    "text": "Cancer",\n    "type": "choice",\n    "enableWhen": [ {\n      "question": "9f320854-7677-4ecb-9886-d323b7161a2e",\n      "operator": "=",\n      "answerCoding": {\n        "system": "urn:uuid:5fddcabd-9ae1-412a-e591-8fb6089a4f26",\n        "code": "yes"\n      }\n    }, {\n      "question": "has-cancer",\n      "operator": "=",\n      "answerBoolean": false\n    } ],\n    "enableBehavior": "all",\n    "required": false,\n    "answerOption": [ {\n      "valueCoding": {\n        "id": "727795dd-2870-4bc2-e057-4aa8518405dd",\n        "system": "urn:uuid:5fddcabd-9ae1-412a-e591-8fb6089a4f26",\n        "code": "yes",\n        "display": "Yes"\n      }\n    }, {\n      "valueCoding": {\n        "id": "944752c4-b116-4bca-8bc0-7e2889219565",\n        "system": "urn:uuid:5fddcabd-9ae1-412a-e591-8fb6089a4f26",\n        "code": "no",\n        "display": "No"\n      }\n    } ]\n  }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"sample-questionnaire-with-an-event-workflow",children:"Sample questionnaire with an event workflow"}),"\n",(0,t.jsx)(n.p,{children:"Suppose you wanted to close above mentioned generated resources. For example, when moving a patient from ANC to PNC you would like to close exsiting Tasks and Careplans generated for ANC, the below configs shows how to do this."}),"\n",(0,t.jsx)(n.h2,{id:"sample-questionnaire-with-an-event-workflow-1",children:"Sample questionnaire with an event workflow"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Pregnancy Outcome",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isPregnant}",\n  "enabled": "@{patientActive}",\n  "actions": [\n   {\n     "trigger": "ON_CLICK",\n     "workflow": "LAUNCH_QUESTIONNAIRE",\n     "questionnaire": {\n       "id": "questionnaire-uuid",\n       "title": "Pregnancy outcome",\n       "resourceIdentifier": "@{patientId}",\n       "planDefinitions": [\n         "planDefinitions-uuid"\n       ],\n       "eventWorkflows": [\n         {\n           "eventType": "RESOURCE_CLOSURE",\n           "triggerConditions": [\n             {\n               "eventResourceId": "carePlanToBeClosed",\n               "matchAll": false,\n               "conditionalFhirPathExpressions": [\n                 "condition-to-check"\n               ]\n             }\n           ],\n           "eventResources": [\n             {\n               "id": "carePlanToBeClosed",\n               "resource": "CarePlan",\n               "configRules": [\n                 {\n                   "name": "patientId",\n                   "condition": "true",\n                   "actions": [\n                     "data.put(\'patientId\', fhirPath.extractValue(Patient, \'Patient.id\'))"\n                   ]\n                 }\n               ],\n               "dataQueries": [\n                 {\n                   "paramName": "instantiates-canonical",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "value": "PlanDefinition/planDefinition-uuid-used-to-generate-the-resources"\n                     }\n                   ]\n                 },\n                 {\n                   "paramName": "subject",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "computedRule": "patientId"\n                     }\n                   ]\n                 }\n               ],\n               "relatedResources": [\n                 {\n                   "resource": "Task",\n                   "searchParameter": "based-on"\n                 }\n               ]\n             }\n           ]\n         }\n       ]\n     },\n     "params": [\n       {\n         "paramType": "PREPOPULATE",\n         "linkId": "linkId-uuid",\n         "dataType": "STRING",\n         "key": "key",\n         "value": "@{value-before-interpolation}"\n       }\n     ]\n   }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"extra-eventworkflows-properties",children:"Extra eventWorkflows properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventType"}),(0,t.jsx)(n.td,{children:"The intention of the eventWorkflow. E.g close resources"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"RESOURCE_CLOSURE is supported for now"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"triggerConditions"}),(0,t.jsx)(n.td,{children:"This defines an array of condition for to be met for the event to run"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventResourceId"}),(0,t.jsx)(n.td,{children:"uniqueId of resource id to be closed"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"eventResources"}),(0,t.jsx)(n.td,{children:"A list of resources to close(Type of ResourceConfig)"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"unique-id-assignment",children:"Unique ID assignment"}),"\n",(0,t.jsx)(n.p,{children:"Unique IDs are unique identifier values assigned to a resource (e.g. Patient) and are associated with a single entity."}),"\n",(0,t.jsx)(n.p,{children:"Unique ID assignment configs determine how pre-generated unique IDs are retrieved from a Group FHIR resource and subsequently populated in a Questionnaire field."}),"\n",(0,t.jsx)(n.p,{children:"Here is a sample configuration for the unique identifier assignment:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "uniqueIdAssignment": {\n    "linkId": "phn",\n    "idFhirPathExpression": "Group.characteristic.where(exclude=false and code.text=\'phn\').first().value.text",\n    "readOnly": false,\n    "resource": "Group",\n    "sortConfigs": [\n      {\n        "paramName": "_lastUpdated",\n        "dataType": "DATE",\n        "order": "DESCENDING"\n      }\n    ],\n    "resourceFilterExpression": {\n      "conditionalFhirPathExpressions": [\n        "Group.active = true and Group.type = \'device\' and Group.name = \'Unique IDs\'"\n      ],\n      "matchAll": true\n    }\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"The configuration contains the following properties:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"linkId"})," - The linkId for the targeted Questionnaire item\n",(0,t.jsx)(n.strong,{children:"idFhirPathExpression"})," - The FHIR path expression used to extract ID from a resource\n",(0,t.jsx)(n.strong,{children:"readOnly"})," - Enable or disable editing of the field. Defaults to ",(0,t.jsx)(n.code,{children:"true"}),"\n",(0,t.jsx)(n.strong,{children:"resource"})," - FHIR resource used to store generated unique IDs\n",(0,t.jsx)(n.strong,{children:"sortConfigs"})," - For ordering resources. It is important to ensure the resources are ordered by last updated\n",(0,t.jsx)(n.strong,{children:"resourceFilterExpression"})," - Extra configurations to apply filter via code on the declared Resource"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"NOTE:"})," If the ",(0,t.jsx)(n.code,{children:"readOnly"})," configuration is set to false, the ID field in the Questionnaire becomes editable. If the prepopulated ID\nis modified and a different ID is submitted with the Questionnaire, the prepopulated ID will not be marked as used.\nThis means that it will still be prepopulated the next time the Questionnaire is launched."]}),"\n",(0,t.jsx)(n.h2,{id:"characteristic-based-group-resource-for-unique-ids",children:"Characteristic-based Group resource for unique IDs"}),"\n",(0,t.jsxs)(n.p,{children:["IDs are stored as ",(0,t.jsx)(n.code,{children:"text"})," in a ",(0,t.jsx)(n.code,{children:"valueCodeableConcept"})," in the ",(0,t.jsx)(n.code,{children:"characteristic"})," field.\nThe batch of IDs is assigned to a Practitioner using the ",(0,t.jsx)(n.code,{children:"managingEntity"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["When an ID is used, the characteristic entry with that ID is updated to be excluded by setting ",(0,t.jsx)(n.code,{children:'"exclude": true'}),". Once all IDs in the Group are used, the group is set to inactive."]}),"\n",(0,t.jsx)(n.h2,{id:"sample-group-resource-with-unique-ids",children:"Sample Group resource with unique IDs"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "resourceType": "Group",\n  "id": "37312ad4-538e-4535-82d2-ea14f40deeb9",\n  "meta": {\n    "versionId": "9",\n    "lastUpdated": "2023-12-22T06:43:35.986+00:00",\n    "source": "#04a1c85fb6adf0cc",\n    "tag": [\n      {\n        "system": "https://smartregister.org/care-team-tag-id",\n        "code": "3e005baf-854b-40a7-bdd5-9b73f63aa9a3",\n        "display": "Practitioner CareTeam"\n      },\n      {\n        "system": "https://smartregister.org/organisation-tag-id",\n        "code": "41eae946-bdc4-4179-b404-6503ff12f59c",\n        "display": "Practitioner Organization"\n      },\n      {\n        "system": "https://smartregister.org/location-tag-id",\n        "code": "3816",\n        "display": "Practitioner Location"\n      },\n      {\n        "system": "https://smartregister.org/practitioner-tag-id",\n        "code": "49b72a3d-44cd-4a74-9459-4dc9f6b543fa",\n        "display": "Practitioner"\n      },\n      {\n        "system": "https://smartregister.org/app-version",\n        "code": "Not defined",\n        "display": "Application Version"\n      }\n    ]\n  },\n  "identifier": [\n    {\n      "system": "http://smartregister.org",\n      "value": "37312ad4-538e-4535-82d2-ea14f40deeb9"\n    }\n  ],\n  "active": true,\n  "type": "device",\n  "actual": true,\n  "name": "Unique IDs",\n  "managingEntity": {\n    "reference": "Practitioner/49b72a3d-44cd-4a74-9459-4dc9f6b543fa"\n  },\n  "characteristic": [\n    {\n      "code": {\n        "text": "phn"\n      },\n      "valueCodeableConcept": {\n        "text": "1000010001"\n      },\n      "exclude": false\n    },\n    {\n      "code": {\n        "text": "phn"\n      },\n      "valueCodeableConcept": {\n        "text": "1000020002"\n      },\n      "exclude": false\n    },\n    {\n      "code": {\n        "text": "phn"\n      },\n      "valueCodeableConcept": {\n        "text": "1000030003"\n      },\n      "exclude": false\n    },\n    {\n      "code": {\n        "text": "phn"\n      },\n      "valueCodeableConcept": {\n        "text": "1000040004"\n      },\n      "exclude": false\n    },\n    {\n      "code": {\n        "text": "phn"\n      },\n      "valueCodeableConcept": {\n        "text": "1000050005"\n      },\n      "exclude": false\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"hiding-characters-in-a-questionnaire",children:"Hiding characters in a questionnaire"}),"\n",(0,t.jsx)(n.p,{children:"Sensitive information typed on a questionnaire can be hidden through adding a linkId extension. A sample linkId with password-widget extension looks like"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "extension": [\n    {\n      "url": "https://github.com/google/android-fhir/StructureDefinition/questionnaire-itemControl",\n      "valueString": "password-widget"\n    },\n    {\n      "url": "http://hl7.org/fhir/StructureDefinition/minLength",\n      "valueInteger": 16\n    },\n    {\n      "url": "http://ehelse.no/fhir/StructureDefinition/validationtext",\n      "valueString": "NIK number should be of 16 digits"\n    },\n    {\n      "url": "http://hl7.org/fhir/StructureDefinition/regex",\n      "valueString": "^\\\\+?(?:[()\\\\h-]*\\\\d[()\\\\h-]*){16}$"\n    },\n    {\n      "url": "http://hl7.org/fhir/StructureDefinition/questionnaire-displayCategory",\n      "valueCodeableConcept": {\n        "coding": [\n          {\n            "system": "http://hl7.org/fhir/questionnaire-display-category",\n            "code": "instructions"\n          }\n        ]\n      }\n    }\n  ],\n  "linkId": "82a80049-8d2d-4008-81aa-55356b9d6628",\n  "text": "NIK number",\n  "_text": {\n    "extension": [\n      {\n        "url": "http://hl7.org/fhir/StructureDefinition/translation",\n        "extension": [\n          {\n            "url": "lang",\n            "valueCode": "id"\n          },\n          {\n            "url": "content",\n            "valueString": "Nomor Induk Kependudukan (NIK)"\n          }\n        ]\n      }\n    ]\n  },\n  "type": "string",\n  "required": false,\n  "maxLength": 16\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Below is the specific extension for this. The extension is validated in this class ",(0,t.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/blob/main/android/quest/src/main/java/org/smartregister/fhircore/quest/ui/sdc/PasswordViewHolderFactory.kt",children:"PasswordViewHolderFactory"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'  {\n    "url": "https://github.com/google/android-fhir/StructureDefinition/questionnaire-itemControl",\n    "valueString": "password-widget"\n  }\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);