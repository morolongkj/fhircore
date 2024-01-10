"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[9592],{6735:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=t(5893),r=t(1151);const s={title:"Questionnaires and forms"},o="Questionnaire configuration",l={id:"engineering/android-app/configuring/config-types/questionnaire",title:"Questionnaires and forms",description:"This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a Questionnaire",source:"@site/docs/engineering/android-app/configuring/config-types/questionnaire.mdx",sourceDirName:"engineering/android-app/configuring/config-types",slug:"/engineering/android-app/configuring/config-types/questionnaire",permalink:"/engineering/android-app/configuring/config-types/questionnaire",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/configuring/config-types/questionnaire.mdx",tags:[],version:"current",frontMatter:{title:"Questionnaires and forms"},sidebar:"defaultSidebar",previous:{title:"Profiles",permalink:"/engineering/android-app/configuring/config-types/profile"},next:{title:"Registers and lists",permalink:"/engineering/android-app/configuring/config-types/register"}},d={},c=[{value:"A general questionnaire config",id:"a-general-questionnaire-config",level:2},{value:"Config properties",id:"config-properties",level:2},{value:"Questionnaire config actions",id:"questionnaire-config-actions",level:3},{value:"Questionnaire block config properties",id:"questionnaire-block-config-properties",level:2},{value:"Sample questionnaire with a planDefinition",id:"sample-questionnaire-with-a-plandefinition",level:2},{value:"Extra config properties",id:"extra-config-properties",level:2},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow",level:2},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow-1",level:2},{value:"Extra eventWorkflows properties",id:"extra-eventworkflows-properties",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"questionnaire-configuration",children:"Questionnaire configuration"}),"\n",(0,i.jsxs)(n.p,{children:["This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a ",(0,i.jsx)(n.a,{href:"https://www.hl7.org/FHIR/questionnaire.html",children:"Questionnaire"})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"Use this configuration in other configs like profile and register."})}),"\n",(0,i.jsx)(n.p,{children:"FHIR Core reads user data from label fields, date pickers, radiobutton, checkboxes  e.t.c through forms called Questionnaires\nWe can group these into 3 categories.fields"}),"\n",(0,i.jsx)(n.h2,{id:"a-general-questionnaire-config",children:"A general questionnaire config"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id":"recordAsSick",\n  "title": "Record as Sick",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isChildUnder2months}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record sick child",\n        "resourceIdentifier": "@{patientId}"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The above is a simple question that can be used to record a sick patient."}),"\n",(0,i.jsx)(n.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"Questionnaire Unique String"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title"}),(0,i.jsx)(n.td,{children:"Display text shown as on the button"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"titleColor"}),(0,i.jsx)(n.td,{children:"Display text color"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"visible"}),(0,i.jsx)(n.td,{children:"A string to show if the questionnaire button should be shown"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"enabled"}),(0,i.jsx)(n.td,{children:"A string to show if the questionnaire button should be clickable"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actions"}),(0,i.jsx)(n.td,{children:"A list of actions that you would like to be executed"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes if you are using a questionnaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actions (trigger)"}),(0,i.jsx)(n.td,{children:"Defines when you want to launch the questions"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"actions(workflow)"}),(0,i.jsx)(n.td,{children:"Import to execute logic related to the questionnaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"questionnaire-config-actions",children:"Questionnaire config actions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"questionnaire": {\n  "id": "questionnaire-uuid",\n  "title": "Record sick child",\n  "resourceIdentifier": "@{patientId}"\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"questionnaire-block-config-properties",children:"Questionnaire block config properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"id"}),(0,i.jsx)(n.td,{children:"Unique uuid that determines what questionnaire i.e form to launch"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"title"}),(0,i.jsx)(n.td,{children:"label text of the questionnaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"resourceIdentifier"}),(0,i.jsx)(n.td,{children:"FHIR resource to pull/add or update"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"The questionnaire id inside the questionnaire block"}),"\n",(0,i.jsx)(n.h2,{id:"sample-questionnaire-with-a-plandefinition",children:"Sample questionnaire with a planDefinition"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Register Pregnancy",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{canRegisterPregnancy}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record to ANC",\n        "resourceIdentifier": "@{patientId}",\n        "planDefinitions": [\n          "planDefinition-uuid"\n        ]\n      }\n    }\n  ]\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The above questionnaire JSON config adds planDefinition in an array. For each item in the array, we pull related plan Definitions.\nThese are used when generating other tasks, CarePlans and related resources.See ",(0,i.jsx)(n.a,{href:"https://fhircore.smartregister.org/writing-fhir/plan-definiton",children:"https://fhircore.smartregister.org/writing-fhir/plan-definiton"})]}),"\n",(0,i.jsx)(n.h2,{id:"extra-config-properties",children:"Extra config properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"planDefinitions"}),(0,i.jsx)(n.td,{children:"A list of questionnaire planDefinition uuids"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cqlInputResources"}),(0,i.jsxs)(n.td,{children:["A list of CQL Library ",(0,i.jsx)(n.code,{children:"id"}),"'s. The referenced Libraries are executed after questionnaire submission"]}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"barcodeLinkId"}),(0,i.jsx)(n.td,{children:"The link ID for barcode widget used in the Questionnaire"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"saveQuestionnaireResponse"}),(0,i.jsx)(n.td,{children:"Indicate whether to save QuestionnaireResponse or not"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"true"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"onSubmitActions"}),(0,i.jsx)(n.td,{children:"Configurations for actions invoked post Questionnaire submission"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"extractedResourceUniquePropertyExpressions"}),(0,i.jsx)(n.td,{children:"Configurations for unique properties used to identify resources during Questionnaire edit"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"sample-questionnaire-with-an-event-workflow",children:"Sample questionnaire with an event workflow"}),"\n",(0,i.jsx)(n.p,{children:"Suppose you wanted to close above mentioned generated resources. For example, when moving a patient from ANC to PNC you would like to close exsiting Tasks and Careplans generated for ANC, the below configs shows how to do this."}),"\n",(0,i.jsx)(n.h2,{id:"sample-questionnaire-with-an-event-workflow-1",children:"Sample questionnaire with an event workflow"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "title": "Pregnancy Outcome",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isPregnant}",\n  "enabled": "@{patientActive}",\n  "actions": [\n   {\n     "trigger": "ON_CLICK",\n     "workflow": "LAUNCH_QUESTIONNAIRE",\n     "questionnaire": {\n       "id": "questionnaire-uuid",\n       "title": "Pregnancy outcome",\n       "resourceIdentifier": "@{patientId}",\n       "planDefinitions": [\n         "planDefinitions-uuid"\n       ],\n       "eventWorkflows": [\n         {\n           "eventType": "RESOURCE_CLOSURE",\n           "triggerConditions": [\n             {\n               "eventResourceId": "carePlanToBeClosed",\n               "matchAll": false,\n               "conditionalFhirPathExpressions": [\n                 "condition-to-check"\n               ]\n             }\n           ],\n           "eventResources": [\n             {\n               "id": "carePlanToBeClosed",\n               "resource": "CarePlan",\n               "configRules": [\n                 {\n                   "name": "patientId",\n                   "condition": "true",\n                   "actions": [\n                     "data.put(\'patientId\', fhirPath.extractValue(Patient, \'Patient.id\'))"\n                   ]\n                 }\n               ],\n               "dataQueries": [\n                 {\n                   "paramName": "instantiates-canonical",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "value": "PlanDefinition/planDefinition-uuid-used-to-generate-the-resources"\n                     }\n                   ]\n                 },\n                 {\n                   "paramName": "subject",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "computedRule": "patientId"\n                     }\n                   ]\n                 }\n               ],\n               "relatedResources": [\n                 {\n                   "resource": "Task",\n                   "searchParameter": "based-on"\n                 }\n               ]\n             }\n           ]\n         }\n       ]\n     },\n     "params": [\n       {\n         "paramType": "PREPOPULATE",\n         "linkId": "linkId-uuid",\n         "dataType": "STRING",\n         "key": "key",\n         "value": "@{value-before-interpolation}"\n       }\n     ]\n   }\n  ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"extra-eventworkflows-properties",children:"Extra eventWorkflows properties"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,i.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"eventType"}),(0,i.jsx)(n.td,{children:"The intention of the eventWorkflow. E.g close resources"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"RESOURCE_CLOSURE is supported for now"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"triggerConditions"}),(0,i.jsx)(n.td,{children:"This defines an array of condition for to be met for the event to run"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"eventResourceId"}),(0,i.jsx)(n.td,{children:"uniqueId of resource id to be closed"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"eventResources"}),(0,i.jsx)(n.td,{children:"A list of resources to close(Type of ResourceConfig)"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,i.jsx)(n.td,{style:{textAlign:"center"}})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>o});var i=t(7294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);