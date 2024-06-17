"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[9665],{962:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=i(5893),r=i(1151);const s={title:"Registers"},d="Register configuration",l={id:"engineering/app/configuring/config-types/register",title:"Registers",description:"Registers are the entry point to OpenSRP applications. Typically this is a list used to displayed the configured FHIR resources. Clicking on a register item directs the user to the configured profile.",source:"@site/docs/engineering/app/configuring/config-types/register.mdx",sourceDirName:"engineering/app/configuring/config-types",slug:"/engineering/app/configuring/config-types/register",permalink:"/engineering/app/configuring/config-types/register",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/app/configuring/config-types/register.mdx",tags:[],version:"current",frontMatter:{title:"Registers"},sidebar:"defaultSidebar",previous:{title:"Profiles",permalink:"/engineering/app/configuring/config-types/profile"},next:{title:"Syncronization",permalink:"/engineering/app/configuring/config-types/sync"}},o={},c=[{value:"Working with dynamic data queries",id:"working-with-dynamic-data-queries",level:3},{value:"Config properties",id:"config-properties",level:2},{value:"Dynamic data pass between Registers and Profiles",id:"dynamic-data-pass-between-registers-and-profiles",level:2},{value:"Practitioner LAUNCH_REGISTER",id:"practitioner-launch_register",level:3},{value:"Sample JSON",id:"sample-json",level:4},{value:"Sample JSON",id:"sample-json-1",level:4},{value:"Household_config.json",id:"household_configjson",level:3},{value:"Sample JSON",id:"sample-json-2",level:4},{value:"Practitioner LAUNCH_PROFILE (Register and Profile use same type of Resource)",id:"practitioner-launch_profile-register-and-profile-use-same-type-of-resource",level:3},{value:"Sample JSON",id:"sample-json-3",level:4},{value:"Sample JSON",id:"sample-json-4",level:4},{value:"Task Register launch Patient Profile (Register and Profile use different Resource types)",id:"task-register-launch-patient-profile-register-and-profile-use-different-resource-types",level:3},{value:"Sample JSON",id:"sample-json-5",level:4},{value:"Sample JSON",id:"sample-json-6",level:4},{value:"Dynamic data pass between registers config properties",id:"dynamic-data-pass-between-registers-config-properties",level:2},{value:"Filter register data",id:"filter-register-data",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"register-configuration",children:"Register configuration"}),"\n",(0,t.jsxs)(n.p,{children:["Registers are the entry point to OpenSRP applications. Typically this is a list used to displayed the configured ",(0,t.jsx)(n.a,{href:"https://www.hl7.org/FHIR/resourcelist.html",children:"FHIR resources"}),". Clicking on a register item directs the user to the configured profile."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"For every register in the application there should at least be one profile configuration. Similar registers can re-use the same profile configuration."})}),"\n",(0,t.jsx)(n.h3,{id:"working-with-dynamic-data-queries",children:"Working with dynamic data queries"}),"\n",(0,t.jsxs)(n.p,{children:["Assume you would like to filter resource data based on a criteria that needs computation before application. e.g show patients who are under 5 years or over 18 below, then this is the config to use.\nBefore you use this rule on a dataQuery, you need  to execute it first. The rules are executed within a ",(0,t.jsx)(n.code,{children:"configRules"})," block which follows rules engine standard and default priority of 1 which can be change based on requirement.\nBelow is a JSON config that shows how to execute rules.Refer to working with rules section."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n "appId": "appId",\n  "configType": "register",\n  "id": "childRegister",\n  "configRules": [\n    {\n      "name": "under5",\n      "condition": "true",\n      "actions": [\n        "data.put(\'under5\', dateService.addOrSubtractTimeUnitFromCurrentDate(5,\'-\',\'YEAR\'))"\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Below is a sample dataQuery config to filter register data by configRules"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"fhirResource": {\n    "baseResource": {\n      "resource": "Patient",\n      "dataQueries": [\n        {\n          "paramName": "birthdate",\n          "filterCriteria": [\n            {\n              "dataType": "DATE",\n              "computedRule": "under5",\n              "prefix": "GREATERTHAN_OR_EQUALS"\n            }\n          ]\n        }\n      ]\n    }\n    }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"appId"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," - unique identifier for the application"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"configType"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," - type of configuration"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ConfigType.Register.name"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"id"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"String"})," - register's unique identifier"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"registerTitle"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"String"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fhirResource"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"FhirResourceConfig"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"secondaryResources"})}),(0,t.jsxs)(n.td,{children:["List of ",(0,t.jsx)(n.code,{children:"FhirResourceConfig"}),"s"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"searchBar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RegisterContentConfig"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"registerCard"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RegisterCardConfig"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RegisterCardConfig()"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fabActions"})}),(0,t.jsxs)(n.td,{children:["List of ",(0,t.jsx)(n.code,{children:"NavigationMenuConfig"}),"s"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"emptyList()"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"noResults"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"NoResultsConfig"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"pageSize"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Int"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"10"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"activeResourceFilters"})}),(0,t.jsxs)(n.td,{children:["List of ",(0,t.jsx)(n.code,{children:"ActiveResourceFilterConfig"}),"s"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"listOf(ActiveResourceFilterConfig(resourceType = ResourceType.Patient, active = true), ActiveResourceFilterConfig(resourceType = ResourceType.Group, active = true))"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"configRules"})}),(0,t.jsxs)(n.td,{children:["List of ",(0,t.jsx)(n.code,{children:"RuleConfig"}),"s"]}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"registerFilter"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RegisterFilterConfig"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"topScreenSection"})}),(0,t.jsx)(n.td,{children:"Optional configuration for register screen toolbar"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"No"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"filterDataByRelatedEntityLocation"})}),(0,t.jsx)(n.td,{children:"Configuration that indicates whether to filter register data with Related Entity Location meta tag"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:(0,t.jsx)(n.code,{children:"No"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"false"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-data-pass-between-registers-and-profiles",children:"Dynamic data pass between Registers and Profiles"}),"\n",(0,t.jsxs)(n.p,{children:["For you to pass data between registers you can make use of ",(0,t.jsx)(n.strong,{children:"action config params"})," which are executed when ",(0,t.jsx)(n.strong,{children:"LAUNCH_REGISTER"})," is invoked.registers\nData extraction happens during rules execution and is persisted in computedValuesMap which is later using to interpolated values annotated with @value.registers\nFor example, assume the LAUNCH_REGISTER onClick function of practition_register_config takes you to household_profile screen and you would like pass send practitionerId from practition_register_config to household_profile, define it as described below"]}),"\n",(0,t.jsx)(n.h3,{id:"practitioner-launch_register",children:"Practitioner LAUNCH_REGISTER"}),"\n",(0,t.jsx)(n.h4,{id:"sample-json",children:"Sample JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Write rules to extract the data you need."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"rules":[\n     {\n      "name": "practitionerId",\n      "condition": "true",\n      "actions": [\n        "data.put(\'practitionerId\', fhirPath.extractValue(Practitioner, \'Practitioner.id.replace(\\"Practitioner/\\",\\"\\")\').split(\\"/\\").get(0))"\n      ]\n    }\n  ]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["add your params at ",(0,t.jsx)(n.strong,{children:"LAUNCH_REGISTER"})," section of practition_register_config.json"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-1",children:"Sample JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'     {\n                          "trigger": "ON_CLICK",\n                          "workflow": "LAUNCH_REGISTER",\n                          "id": "householdRegister",\n                          "display": "@{practitionerName} - Household Register",\n                          "params": [\n                            {\n                              "paramType": "PARAMDATA",\n                              "key": "practitionerId",\n                              "value": "@{practitionerId}"\n                            }\n                          ]\n                        }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"household_configjson",children:"Household_config.json"}),"\n",(0,t.jsx)(n.p,{children:"A dataquery config to filter by practitionerId. For more info refer to dataquery section"}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-2",children:"Sample JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'      {\n          "id": "householdQueryPractitionerId",\n          "filterType": "TOKEN",\n          "key": "_tag",\n          "valueType": "CODING",\n          "valueCoding": {\n            "system": "https://smartregister.org/",\n            "code": "@{practitionerId}"\n          }\n        }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"practitioner-launch_profile-register-and-profile-use-same-type-of-resource",children:"Practitioner LAUNCH_PROFILE (Register and Profile use same type of Resource)"}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-3",children:"Sample JSON"}),"\n",(0,t.jsxs)(n.p,{children:["Add your params at ",(0,t.jsx)(n.strong,{children:"SERVICE_CARD actions"})," section of practitioner_register_config.json\nSet the value of the ",(0,t.jsx)(n.code,{children:"trigger"})," to ",(0,t.jsx)(n.code,{children:"ON_CLICK"}),".\nSet the value of ",(0,t.jsx)(n.code,{children:"workflow"})," to ",(0,t.jsx)(n.code,{children:"LAUNCH_PROFILE"}),"\nSet the value of ",(0,t.jsx)(n.code,{children:"id"})," to the id of the profile configuration to be launched e.g ",(0,t.jsx)(n.code,{children:"practitionerProfile"}),"\nThe default implementation opens the profile using the ",(0,t.jsx)(n.code,{children:"id"})," of the base resource used to load the register row"]}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-4",children:"Sample JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'             {\n               "trigger": "ON_CLICK",\n               "workflow": "LAUNCH_PROFILE",\n               "id": "practitionerProfile"\n             }\n'})}),"\n",(0,t.jsx)(n.h3,{id:"task-register-launch-patient-profile-register-and-profile-use-different-resource-types",children:"Task Register launch Patient Profile (Register and Profile use different Resource types)"}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-5",children:"Sample JSON"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Write rules to extract the data you need."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"rules":[\n            {\n                "name": "patientId",\n                "condition": "true",\n                "actions": [\n                    "data.put(\'patientId\', fhirPath.extractValue(Patient.get(0), \\"Patient.id\\"))"\n                ]\n             }\n  ]\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Add your params at ",(0,t.jsx)(n.strong,{children:"SERVICE_CARD actions"})," section of task_register_config.json\nSet the value of the ",(0,t.jsx)(n.code,{children:"trigger"})," to ",(0,t.jsx)(n.code,{children:"ON_CLICK"}),".\nSet the value of ",(0,t.jsx)(n.code,{children:"workflow"})," to ",(0,t.jsx)(n.code,{children:"LAUNCH_PROFILE"}),"\nSet the value of ",(0,t.jsx)(n.code,{children:"id"})," to the id of the profile configuration to be launched e.g ",(0,t.jsx)(n.code,{children:"practitionerProfile"}),"\nAdd an action parameter with the following values","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"paramType"})," set to ",(0,t.jsx)(n.code,{children:"RESOURCE_ID"}),". This allows the user to specify the id of the resource used to open the profile"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"})," user defined value for the key e.g ",(0,t.jsx)(n.code,{children:"patientId"})]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"value"})," Set the value of the resource id to be used to open the profile"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"sample-json-6",children:"Sample JSON"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'        {\n            "trigger": "ON_CLICK",\n            "workflow": "LAUNCH_PROFILE",\n            "id": "patientProfile",\n            "params": [\n                {\n                    "paramType": "RESOURCE_ID",\n                    "key": "patientId",\n                    "value": "@{patientId}"\n                }\n            ]\n        }\n'})}),"\n",(0,t.jsx)(n.h2,{id:"dynamic-data-pass-between-registers-config-properties",children:"Dynamic data pass between registers config properties"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Default"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rules name"}),(0,t.jsx)(n.td,{children:"Unique identifier for the rules"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"empty string"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"condition"}),(0,t.jsx)(n.td,{children:"specification of execution"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"false"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"actions"}),(0,t.jsx)(n.td,{children:"an array of the rule logic with a fhirPathExpression"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"trigger"}),(0,t.jsx)(n.td,{children:"application workflow action"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no default"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"workflow"}),(0,t.jsx)(n.td,{children:"An application event that can trigger a workflow"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"params"}),(0,t.jsx)(n.td,{children:"An array of actionParameters to pass to another register"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"emptyArray"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"paramType"}),(0,t.jsx)(n.td,{children:"Action ParameterType to use e.g PREPOPULATE OR PARAMDATA"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"no"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"null"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"key"}),(0,t.jsx)(n.td,{children:"Action ParameterType unique key if defined but not tag is given"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"application throws exception"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"value"}),(0,t.jsx)(n.td,{children:"Action ParameterType corresponding key's value"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"yes"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"application throws exception"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"filter-register-data",children:"Filter register data"}),"\n",(0,t.jsxs)(n.p,{children:["Data rendered in a register can be filter based on ",(0,t.jsx)(n.code,{children:"RegisterConfiguration.registerFilter"})," configuration. The process for filtering records in a register involves: launching a questionnaire that\ncontains the fields for filtering data, converting the answers from the QuestionanireResponse into relevant values for data filter queries and finally applying the new queries in load register data function."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"RegisterConfiguration.registerFilter"})," contains two required properties: ",(0,t.jsx)(n.code,{children:"dataFilterActions"})," and ",(0,t.jsx)(n.code,{children:"dataFilterFields"}),". The ",(0,t.jsx)(n.code,{children:"dataFilterActions"})," is used to declare the action to launch the questionnaire used to capture the Data\nfilter fields. ",(0,t.jsx)(n.code,{children:"dataFilterFields"})," is used to map the filter queries to the configured resources used in the register. The filter queries MUST be used against the register resources, this relationship is achieved by setting the ",(0,t.jsx)(n.code,{children:"filterId"}),"\non any of the configured register (base or related) resource."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"registerFilter": {\n    "dataFilterActions": [\n      {\n        "trigger": "ON_CLICK",\n        "workflow": "LAUNCH_QUESTIONNAIRE",\n        "questionnaire": {\n          "id": "questionnaireId",\n          "title": "Filter register",\n          "saveButtonText": "Apply Filters",\n          "saveQuestionnaireResponse": false,\n          "showClearAll": true\n        }\n      }\n    ],\n    "dataFilterFields": [\n      {\n        "filterId": "task",\n        "dataQueries": [\n          {\n            "paramName": "status",\n            "operation": "OR",\n            "filterCriteria": [\n              {\n                "dataFilterLinkId": "43e41fdb-7b84-420c-9210-c10dbae5f77b",\n                "dataType": "CODE"\n              }\n            ]\n          }\n        ]\n      }\n    ]\n  }\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["NOTE: The questionanire MUST be launched with the property ",(0,t.jsx)(n.code,{children:"saveQuestionnaireResponse"})," set to false for data filtering to work. The response should not be saved. ",(0,t.jsx)(n.code,{children:"showClearAll"})," will display an action button that will execute and action to resetting of all the answered fields for the ",(0,t.jsx)(n.code,{children:"Questionnaire"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"filterId"})," is a unique identifier applied to the configured ",(0,t.jsx)(n.code,{children:"baseResource"})," or  ",(0,t.jsx)(n.code,{children:"relatedResources"})," in the ",(0,t.jsx)(n.code,{children:"RegisterConfiguration.fhirResource"})," to indicate the resource to which the filter data queries are to be applied. The ",(0,t.jsx)(n.code,{children:"QuestionanireResponse"})," answer value is mapped to a ",(0,t.jsx)(n.code,{children:"DataQuery"})," filterCriteria value using the unique property ",(0,t.jsx)(n.code,{children:"dataFilterLinkId"}),". This is the linkId for the\nQuestionanireResponse item."]}),"\n",(0,t.jsxs)(n.p,{children:["Example if the base resource is ",(0,t.jsx)(n.code,{children:"Task"})," the configuration below will be used in the resource config:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "fhirResource": {\n    "baseResource": {\n      "resource": "Task",\n      "filterId": "task",\n      "dataQueries": [\n        {\n          "paramName": "status",\n          "operation": "OR",\n          "filterCriteria": [\n            {\n              "dataFilterLinkId": "43e41fdb-7b84-420c-9210-c10dbae5f77b",\n              "dataType": "CODE"\n            }\n          ]\n        }\n      ]\n    }\n  }\n}\n\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>d});var t=i(7294);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);