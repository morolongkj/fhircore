"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[4373],{3570:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=i(5893),r=i(1151);const o={title:"Navigation"},s="Navigation configuration",d={id:"engineering/android-app/configuring/config-types/navigation",title:"Navigation",description:"These configurations are used to control how to navigate between different screens in the app. Navigation happens mostly from the side menu (aka app drawer)",source:"@site/docs/engineering/android-app/configuring/config-types/navigation.mdx",sourceDirName:"engineering/android-app/configuring/config-types",slug:"/engineering/android-app/configuring/config-types/navigation",permalink:"/engineering/android-app/configuring/config-types/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/configuring/config-types/navigation.mdx",tags:[],version:"current",frontMatter:{title:"Navigation"},sidebar:"defaultSidebar",previous:{title:"Measure reports",permalink:"/engineering/android-app/configuring/config-types/measure-report"},next:{title:"Profiles",permalink:"/engineering/android-app/configuring/config-types/profile"}},c={},a=[{value:"Sample JSON",id:"sample-json",level:2},{value:"Config properties",id:"config-properties",level:2}];function l(n){const e={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"navigation-configuration",children:"Navigation configuration"}),"\n",(0,t.jsx)(e.p,{children:"These configurations are used to control how to navigate between different screens in the app. Navigation happens mostly from the side menu (aka app drawer)"}),"\n",(0,t.jsx)(e.admonition,{type:"note",children:(0,t.jsxs)(e.p,{children:["An application should only have one ",(0,t.jsx)(e.code,{children:"navigation"})," configuration"]})}),"\n",(0,t.jsx)(e.h2,{id:"sample-json",children:"Sample JSON"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-json",children:'{\n  "appId": "map",\n  "configType": "navigation",\n  "menuActionButton": {\n    "id": "mainActionButton",\n    "visible": true,\n    "display": "{{ add.new.household }}",\n    "actions": [\n      {\n        "trigger": "ON_CLICK",\n        "workflow": "LAUNCH_QUESTIONNAIRE",\n        "id": "householdRegister",\n        "questionnaire": {\n          "id": "f210a832-857f-49e6-93f5-399eec4f4edb",\n          "title": "{{add.family}}",\n          "saveButtonText": "Add Household",\n          "setPractitionerDetails": true,\n          "setOrganizationDetails": true\n        }\n      }\n    ]\n  },\n  "staticMenu": [\n    {\n      "id": "maps",\n      "visible": true,\n      "display": "Maps",\n      "actions": [\n        {\n          "trigger": "ON_CLICK",\n          "workflow": "LAUNCH_MAP",\n          "id": "householdRegistrationMap"\n        }\n      ]\n    },\n    {\n      "id": "profile",\n      "visible": true,\n      "display": "{{ profile }}",\n      "actions": [\n        {\n          "trigger": "ON_CLICK",\n          "workflow": "LAUNCH_SETTINGS",\n          "id": "navigateToSettingsScreen"\n        }\n      ]\n    }\n  ],\n  "clientRegisters": [\n    {\n      "id": "householdRegister",\n      "display": "{{ all.households }}",\n      "icon": "",\n      "showCount": true,\n      "actions": [\n        {\n          "trigger": "ON_CLICK",\n          "workflow": "LAUNCH_REGISTER",\n          "id": "householdRegister"\n        },\n        {\n          "trigger": "ON_COUNT",\n          "id": "householdRegister"\n        }\n      ]\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(e.h2,{id:"config-properties",children:"Config properties"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Property"}),(0,t.jsx)(e.th,{children:"Description"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(e.th,{children:"Default"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"appId"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"String"})," - unique identifier for the application"]}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"configType"})}),(0,t.jsxs)(e.td,{children:[(0,t.jsx)(e.code,{children:"String"})," - type of configuration"]}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"ConfigType.Navigation.name"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"menuActionButton"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"NavigationMenuConfig"})}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"null"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"staticMenu"})}),(0,t.jsxs)(e.td,{children:["List of ",(0,t.jsx)(e.code,{children:"NavigationMenuConfig"}),"s"]}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"emptyList()"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"clientRegisters"})}),(0,t.jsxs)(e.td,{children:["List of ",(0,t.jsx)(e.code,{children:"NavigationMenuConfig"}),"s"]}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"Yes"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"emptyList()"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"bottomSheetRegisters"})}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"NavigationBottomSheetRegisterConfig"})}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"No"}),(0,t.jsx)(e.td,{children:(0,t.jsx)(e.code,{children:"null"})})]})]})]})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(l,{...n})}):l(n)}},1151:(n,e,i)=>{i.d(e,{Z:()=>d,a:()=>s});var t=i(7294);const r={},o=t.createContext(r);function s(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);