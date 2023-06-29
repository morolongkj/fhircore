"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[109],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),g=a,m=d["".concat(s,".").concat(g)]||d[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8786:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Questionnaires"},o="Questionnaire configuration",l={unversionedId:"configurations/questionnaire-config",id:"configurations/questionnaire-config",title:"Questionnaires",description:"This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a Questionnaire",source:"@site/docs/configurations/questionnaire-config.mdx",sourceDirName:"configurations",slug:"/configurations/questionnaire-config",permalink:"/configurations/questionnaire-config",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/configurations/questionnaire-config.mdx",tags:[],version:"current",frontMatter:{title:"Questionnaires"},sidebar:"defaultSidebar",previous:{title:"Geowidget",permalink:"/configurations/geowidget-config"},next:{title:"In-app reporting",permalink:"/configurations/reporting/in-app-reporting"}},s={},p=[{value:"A general questionnaire config",id:"a-general-questionnaire-config",level:2},{value:"Config properties",id:"config-properties",level:2},{value:"Questionnaire config actions",id:"questionnaire-config-actions",level:3},{value:"Questionnaire block config properties",id:"questionnaire-block-config-properties",level:2},{value:"Sample questionnaire with a planDefinition",id:"sample-questionnaire-with-a-plandefinition",level:2},{value:"Extra config properties",id:"extra-config-properties",level:2},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow",level:2},{value:"Sample questionnaire with an event workflow",id:"sample-questionnaire-with-an-event-workflow-1",level:2},{value:"Extra eventWorkflows properties",id:"extra-eventworkflows-properties",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"questionnaire-configuration"},"Questionnaire configuration"),(0,a.kt)("p",null,"This configuration is used to configure a Questionnaire. A Questionnaire is a data entry form used that is compliant to the FHIR specifications for a ",(0,a.kt)("a",{parentName:"p",href:"https://www.hl7.org/FHIR/questionnaire.html"},"Questionnaire")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use this configuration in other configs like profile and register.")),(0,a.kt)("p",null,"FHIR Core reads user data from label fields, date pickers, radiobutton, checkboxes  e.t.c through forms called Questionnaires\nWe can group these into 3 categories.fields"),(0,a.kt)("h2",{id:"a-general-questionnaire-config"},"A general questionnaire config"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id":"recordAsSick",\n  "title": "Record as Sick",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isChildUnder2months}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record sick child",\n        "resourceIdentifier": "@{patientId}"\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The above is a simple question that can be used to record a sick patient."),(0,a.kt)("h2",{id:"config-properties"},"Config properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Questionnaire Unique String"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"Display text shown as on the button"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"titleColor"),(0,a.kt)("td",{parentName:"tr",align:null},"Display text color"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"visible"),(0,a.kt)("td",{parentName:"tr",align:null},"A string to show if the questionnaire button should be shown"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"A string to show if the questionnaire button should be clickable"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actions"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of actions that you would like to be executed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes if you are using a questionnaire"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actions (trigger)"),(0,a.kt)("td",{parentName:"tr",align:null},"Defines when you want to launch the questions"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"actions(workflow)"),(0,a.kt)("td",{parentName:"tr",align:null},"Import to execute logic related to the questionnaire"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"questionnaire-config-actions"},"Questionnaire config actions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"questionnaire": {\n  "id": "questionnaire-uuid",\n  "title": "Record sick child",\n  "resourceIdentifier": "@{patientId}"\n}\n')),(0,a.kt)("h2",{id:"questionnaire-block-config-properties"},"Questionnaire block config properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"id"),(0,a.kt)("td",{parentName:"tr",align:null},"Unique uuid that determines what questionnaire i.e form to launch"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"title"),(0,a.kt)("td",{parentName:"tr",align:null},"label text of the questionnaire"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"resourceIdentifier"),(0,a.kt)("td",{parentName:"tr",align:null},"FHIR resource to pull/add or update"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("p",null,"The questionnaire id inside the questionnaire block"),(0,a.kt)("h2",{id:"sample-questionnaire-with-a-plandefinition"},"Sample questionnaire with a planDefinition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Register Pregnancy",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{canRegisterPregnancy}",\n  "enabled": "@{patientActive}",\n  "actions": [\n    {\n      "trigger": "ON_CLICK",\n      "workflow": "LAUNCH_QUESTIONNAIRE",\n      "questionnaire": {\n        "id": "questionnaire-uuid",\n        "title": "Record to ANC",\n        "resourceIdentifier": "@{patientId}",\n        "planDefinitions": [\n          "planDefinition-uuid"\n        ]\n      }\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"The above questionnaire JSON config adds planDefinition in an array. For each item in the array, we pull related plan Definitions.\nThese are used when generating other tasks, CarePlans and related resources.See ",(0,a.kt)("a",{parentName:"p",href:"https://fhircore.smartregister.org/writing-fhir/plan-definiton"},"https://fhircore.smartregister.org/writing-fhir/plan-definiton")),(0,a.kt)("h2",{id:"extra-config-properties"},"Extra config properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"planDefinitions"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of questionnaire planDefinition uuids"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null")))),(0,a.kt)("h2",{id:"sample-questionnaire-with-an-event-workflow"},"Sample questionnaire with an event workflow"),(0,a.kt)("p",null,"Suppose you wanted to close above mentioned generated resources. For example, when moving a patient from ANC to PNC you would like to close exsiting Tasks and Careplans generated for ANC, the below configs shows how to do this."),(0,a.kt)("h2",{id:"sample-questionnaire-with-an-event-workflow-1"},"Sample questionnaire with an event workflow"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Pregnancy Outcome",\n  "titleColor": "@{patientTextColor}",\n  "visible": "@{isPregnant}",\n  "enabled": "@{patientActive}",\n  "actions": [\n   {\n     "trigger": "ON_CLICK",\n     "workflow": "LAUNCH_QUESTIONNAIRE",\n     "questionnaire": {\n       "id": "questionnaire-uuid",\n       "title": "Pregnancy outcome",\n       "resourceIdentifier": "@{patientId}",\n       "planDefinitions": [\n         "planDefinitions-uuid"\n       ],\n       "eventWorkflows": [\n         {\n           "eventType": "RESOURCE_CLOSURE",\n           "triggerConditions": [\n             {\n               "eventResourceId": "carePlanToBeClosed",\n               "matchAll": false,\n               "conditionalFhirPathExpressions": [\n                 "condition-to-check"\n               ]\n             }\n           ],\n           "eventResources": [\n             {\n               "id": "carePlanToBeClosed",\n               "resource": "CarePlan",\n               "configRules": [\n                 {\n                   "name": "patientId",\n                   "condition": "true",\n                   "actions": [\n                     "data.put(\'patientId\', fhirPath.extractValue(Patient, \'Patient.id\'))"\n                   ]\n                 }\n               ],\n               "dataQueries": [\n                 {\n                   "paramName": "instantiates-canonical",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "value": "PlanDefinition/planDefinition-uuid-used-to-generate-the-resources"\n                     }\n                   ]\n                 },\n                 {\n                   "paramName": "subject",\n                   "filterCriteria": [\n                     {\n                       "dataType": "REFERENCE",\n                       "computedRule": "patientId"\n                     }\n                   ]\n                 }\n               ],\n               "relatedResources": [\n                 {\n                   "resource": "Task",\n                   "searchParameter": "based-on"\n                 }\n               ]\n             }\n           ]\n         }\n       ]\n     },\n     "params": [\n       {\n         "paramType": "PREPOPULATE",\n         "linkId": "linkId-uuid",\n         "dataType": "STRING",\n         "key": "key",\n         "value": "@{value-before-interpolation}"\n       }\n     ]\n   }\n  ]\n}\n')),(0,a.kt)("h2",{id:"extra-eventworkflows-properties"},"Extra eventWorkflows properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventType"),(0,a.kt)("td",{parentName:"tr",align:null},"The intention of the eventWorkflow. E.g close resources"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"},"RESOURCE_CLOSURE is supported for now")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"triggerConditions"),(0,a.kt)("td",{parentName:"tr",align:null},"This defines an array of condition for to be met for the event to run"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no"),(0,a.kt)("td",{parentName:"tr",align:"center"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventResourceId"),(0,a.kt)("td",{parentName:"tr",align:null},"uniqueId of resource id to be closed"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"eventResources"),(0,a.kt)("td",{parentName:"tr",align:null},"A list of resources to close(Type of ResourceConfig)"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes"),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);