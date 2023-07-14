"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8008:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const i={},o="Working with rules",l={unversionedId:"engineering-android-app/Configurations/working-with-rules",id:"engineering-android-app/Configurations/working-with-rules",title:"Working with rules",description:"Rules are used to define logic and conditions for evaluating and processing healthcare data. FHIR rules can be used to validate data, create alerts and notifications based on certain conditions, or trigger workflows and other automated processes.",source:"@site/docs/engineering-android-app/Configurations/working-with-rules.mdx",sourceDirName:"engineering-android-app/Configurations",slug:"/engineering-android-app/Configurations/working-with-rules",permalink:"/engineering-android-app/Configurations/working-with-rules",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering-android-app/Configurations/working-with-rules.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Widget configurations",permalink:"/engineering-android-app/Configurations/user-interface/widget-config"},next:{title:"Developer setup",permalink:"/engineering-android-app/developer-setup/"}},s={},u=[{value:"Using the <code>extractValue()</code> rule",id:"using-the-extractvalue-rule",level:2},{value:"Configuring the properties of the <code>extractValue()</code>",id:"configuring-the-properties-of-the-extractvalue",level:3},{value:"Using the <code>evaluateToBoolean()</code> rule",id:"using-the-evaluatetoboolean-rule",level:2},{value:"Configuring the properties of the <code>evaluateToBoolean()</code>",id:"configuring-the-properties-of-the-evaluatetoboolean",level:3},{value:"Passing parameters to <code>evaluateToBoolean()</code>",id:"passing-parameters-to-evaluatetoboolean",level:3},{value:"Using the <code>generateTaskServiceStatus()</code> rule",id:"using-the-generatetaskservicestatus-rule",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-rules"},"Working with rules"),(0,r.kt)("p",null,"Rules are used to define logic and conditions for evaluating and processing healthcare data. FHIR rules can be used to validate data, create alerts and notifications based on certain conditions, or trigger workflows and other automated processes.\nRules can also be used to extract specific data from a FHIR resource or to transform data from one format to another."),(0,r.kt)("h2",{id:"using-the-extractvalue-rule"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"extractValue()")," rule"),(0,r.kt)("p",null,"To extract specific data value in the sample JSON below, include ",(0,r.kt)("strong",{parentName:"p"},"extractValue()")," and add the required parameters to the method in order to extract the required value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"rules": [\n    {\n      "name": "familyName",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyName\', fhirPath.extractValue(Group, \'Group.name\'))"\n      ]\n    },\n    {\n      "name": "familyId",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyId\', fhirPath.extractValue(Group, \'Group.identifier[0].value\'))"\n      ]\n    },\n    {\n      "name": "familyLogicalId",\n      "condition": "true",\n      "actions": [\n        "data.put(\'familyLogicalId\', fhirPath.extractValue(Group, \'Group.id\'))"\n      ]\n    }\n  ],\n')),(0,r.kt)("h3",{id:"configuring-the-properties-of-the-extractvalue"},"Configuring the properties of the ",(0,r.kt)("inlineCode",{parentName:"h3"},"extractValue()")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a descriptive name for the rule to be extracted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"condition"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the rule should always be evaluated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the specific operations to be performed when the rule is evaluated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},'"data.put()"')," function is used to store the extracted data in a data object, using a key-value pair format."),(0,r.kt)("h2",{id:"using-the-evaluatetoboolean-rule"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"evaluateToBoolean()")," rule"),(0,r.kt)("p",null,"This rule is used within the rules engine or workflow to be able to determine whether an expression or condition is true or not. To evaluate specific data in the sample JSON below, include ",(0,r.kt)("strong",{parentName:"p"},"evaluateToBoolean()")," and add the required parameters to the method in order to determine whether the output is true or false."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'    {\n      "name": "isPregnant",\n      "condition": "true",\n      "actions": [\n        "data.put(\'isPregnant\', service.evaluateToBoolean(data.get(\'activeConditions\'), \\"Condition.code.text = \'Pregnant\' \\", false))"\n      ]  \n    },\n')),(0,r.kt)("h3",{id:"configuring-the-properties-of-the-evaluatetoboolean"},"Configuring the properties of the ",(0,r.kt)("inlineCode",{parentName:"h3"},"evaluateToBoolean()")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Required"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides a descriptive name for the rule to be extracted"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"condition"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates that the rule should always be evaluated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"actions"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the specific operations to be performed when the rule is evaluated"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,r.kt)("td",{parentName:"tr",align:"center"},"List")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"Provides relevant information about the rule to be evaluated"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the priority of the component. The priority value determines the order in which the components are evaluated and executed. Lower values indicate higher priority"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,r.kt)("h3",{id:"passing-parameters-to-evaluatetoboolean"},"Passing parameters to ",(0,r.kt)("inlineCode",{parentName:"h3"},"evaluateToBoolean()")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"context"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"data.get('activeConditions')"),", specifies the context or data from which the expression is being evaluated"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"FhirPathExpression"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"\"Condition.code.text = 'Pregnant' \\\""),", specifies the expression to be evaluated. It contains the logical operators and variables that refernce values from the context"),(0,r.kt)("li",{parentName:"ol"},"An optional ",(0,r.kt)("inlineCode",{parentName:"li"},"defaultValue"),", e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),", specifies a boolean default to be returned if the expression results in an error or does not produce a boolean value")),(0,r.kt)("h2",{id:"using-the-generatetaskservicestatus-rule"},"Using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"generateTaskServiceStatus()")," rule"),(0,r.kt)("p",null,"This rule is used within the ruels engine or workflow to generate the correct service status when given the ",(0,r.kt)("inlineCode",{parentName:"p"},"Task.status")," . Only one parameter is passed of the type ",(0,r.kt)("inlineCode",{parentName:"p"},"TaskStatus"),". Below is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'\n...\n    {\n      "name": "serviceStatus",\n      "condition": "true",\n      "actions": [\n        "data.put(\'serviceStatus\', service.generateTaskServiceStatus(Task))"\n      ]\n    }\n')))}p.isMDXComponent=!0}}]);