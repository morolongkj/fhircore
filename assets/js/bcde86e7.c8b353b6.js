"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[41],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=c(n),m=r,u=g["".concat(l,".").concat(m)]||g[m]||s[m]||i;return n?a.createElement(u,o(o({ref:t},d),{},{components:n})):a.createElement(u,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Application"},o="Application configuration",p={unversionedId:"engineering-android-app/Configurations/system-components/application-config",id:"engineering-android-app/Configurations/system-components/application-config",title:"Application",description:"These are app wide configurations used to control the application behaviour globally e.g. application theme, app language etc.",source:"@site/docs/engineering-android-app/Configurations/system-components/application-config.mdx",sourceDirName:"engineering-android-app/Configurations/system-components",slug:"/engineering-android-app/Configurations/system-components/application-config",permalink:"/engineering-android-app/Configurations/system-components/application-config",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering-android-app/Configurations/system-components/application-config.mdx",tags:[],version:"current",frontMatter:{title:"Application"},sidebar:"defaultSidebar",previous:{title:"Measure reporting",permalink:"/engineering-android-app/Configurations/reporting/measure-report-config"},next:{title:"Syncronization",permalink:"/engineering-android-app/Configurations/system-components/sync-config"}},l={},c=[{value:"Sample JSON",id:"sample-json",level:2},{value:"Config properties",id:"config-properties",level:2}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"application-configuration"},"Application configuration"),(0,r.kt)("p",null,"These are app wide configurations used to control the application behaviour globally e.g. application theme, app language etc."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"There can only one instance of application configuration for the entire application")),(0,r.kt)("h2",{id:"sample-json"},"Sample JSON"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "appId": "app",\n    "configType": "application",\n    "appTitle": "eCBIS (CHA & CHSS)",\n    "remoteSyncPageSize": 100,\n    "languages": [\n        "en"\n    ],\n    "useDarkTheme": false,\n    "syncInterval": 15,\n    "syncStrategy": [\n        "Location",\n        "Organization",\n        "CareTeam",\n        "Practitioner"\n    ],\n    "loginConfig": {\n        "showLogo": true,\n        "enablePin": true\n    },\n    "deviceToDeviceSync": {\n        "resourcesToSync": [\n            "Group",\n            "Patient",\n            "CarePlan",\n            "Task",\n            "Encounter",\n            "Observation",\n            "Condition",\n            "Questionnaire",\n            "QuestionnaireResponse"\n        ]\n    }\n}\n')),(0,r.kt)("h2",{id:"config-properties"},"Config properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the application"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"configType"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of configuration"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"application"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the application displayed on side menu (drawer)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},'""')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"remoteSyncPageSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Sync batch size"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"languages"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported languages"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"['en']"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"useDarkTheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicate whether to apply dark theme"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncInterval"),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration duration for periodic sync"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"30"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"syncStrategy"),(0,r.kt)("td",{parentName:"tr",align:null},"Tag every resource with the values for the resource types indicated here"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"emptyList()"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loginConfig.showLogo"),(0,r.kt)("td",{parentName:"tr",align:null},"Display logo in login page"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"true"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loginConfig.enablePin"),(0,r.kt)("td",{parentName:"tr",align:null},"Request user for pin after login; to be used for subsequent logins"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deviceToDeviceSync.resourcesToSync"),(0,r.kt)("td",{parentName:"tr",align:null},"Types of resource to be synced from one device to another during peer connection"),(0,r.kt)("td",{parentName:"tr",align:"center"},"No"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))))}s.isMDXComponent=!0}}]);