"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[7060],{2445:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var a=i(5893),r=i(1151);const t={},s="Internationalization (i18n)",o={id:"engineering/android-app/configuring/internationalization",title:"Internationalization (i18n)",description:"On FHIR Core, we have three categories of entities that need localization:",source:"@site/docs/engineering/android-app/configuring/internationalization.mdx",sourceDirName:"engineering/android-app/configuring",slug:"/engineering/android-app/configuring/internationalization",permalink:"/engineering/android-app/configuring/internationalization",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/engineering/android-app/configuring/internationalization.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"In-app reporting",permalink:"/engineering/android-app/configuring/in-app-reporting"},next:{title:"Specific use cases",permalink:"/engineering/android-app/configuring/specific-use-cases"}},l={},c=[{value:"Application localization",id:"application-localization",level:2},{value:"Android Views",id:"android-views",level:3},{value:"App Configs",id:"app-configs",level:3},{value:"Content Configs",id:"content-configs",level:3},{value:"Rule engine rules",id:"rule-engine-rules",level:3},{value:"Translation Process via Transifex",id:"translation-process-via-transifex",level:2},{value:"Tooling",id:"tooling",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"internationalization-i18n",children:"Internationalization (i18n)"}),"\n",(0,a.jsx)(n.p,{children:"On FHIR Core, we have three categories of entities that need localization:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Android views"}),"\n",(0,a.jsx)(n.li,{children:"App configs"}),"\n",(0,a.jsx)(n.li,{children:"Content configs (FHIR Resources)"}),"\n",(0,a.jsx)(n.li,{children:"Rule engine rules"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"application-localization",children:"Application localization"}),"\n",(0,a.jsx)(n.h3,{id:"android-views",children:"Android Views"}),"\n",(0,a.jsxs)(n.p,{children:["The translations for these are found in the android app's ",(0,a.jsx)(n.code,{children:"res/values/strings-*xml"})," files. These need to follow the [",(0,a.jsx)(n.a,{href:"https://developer.android.com/guide/topics/resources/localization%5D(android",children:"https://developer.android.com/guide/topics/resources/localization](android"})," developer guidelines as documented here).\nAs an example, for an app with English and French translations, the folder will contain ",(0,a.jsx)(n.code,{children:"res/values/strings.xml"}),", the default english file and ",(0,a.jsx)(n.code,{children:"res/values/strings-fr.xml"})," for the corresponding French translations.\nNote, for FHIR Core"]}),"\n",(0,a.jsx)(n.p,{children:"Default file in English."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'#res/values/strings.xml\n<string name="first_name">First Name</string>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Translated file in Swahili"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-xml",children:'#res/values/strings-sw.xml\n<string name="first_name">Jina la kwanza</string>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"app-configs",children:"App Configs"}),"\n",(0,a.jsxs)(n.p,{children:["App config localization is required for the configuration files that define the UI and workflow of the configurable views we have on FHIR Core e.g. the Profile and Register configs. The language files are of the ",(0,a.jsx)(n.code,{children:".properties"})," format. By convention, the files are stored in the ",(0,a.jsx)(n.code,{children:"project/app_configs/translations"})," folder for versioning. Once translations are in place they are then uploaded as Binary's and are therefore are encoded in Base64 format in line with the HL7 FHIR Spec here ",(0,a.jsx)(n.a,{href:"https://www.hl7.org/fhir/binary.html",children:"https://www.hl7.org/fhir/binary.html"}),". These are then linked to the application via the Composition resource. Files are named in the format ",(0,a.jsx)(n.code,{children:"strings_config.properties"})," for the default and ",(0,a.jsx)(n.code,{children:"strings_sw_config.properties"})," for the swahili translations e.g."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'#app_configs/profiles/profile.json\n\n"searchBar": {\n    "visible": true,\n    "display": "{{ first.name }}",\n    "computedRules": [\n        "familyName",\n        "familyId"\n    ]\n}\n\n'})}),"\n",(0,a.jsx)(n.p,{children:"Default"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"first.name=First Name\n"})}),"\n",(0,a.jsx)(n.p,{children:"Swahili"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"first.name=Jina la kwanza\n"})}),"\n",(0,a.jsx)(n.h3,{id:"content-configs",children:"Content Configs"}),"\n",(0,a.jsxs)(n.p,{children:["This covers Internationalization in the FHIR Resources e.g. Questionnaires. The FHIR Spec defines how localization is supported - ",(0,a.jsx)(n.a,{href:"https://www.hl7.org/fhir/languages.html",children:"https://www.hl7.org/fhir/languages.html"}),". FHIR Core via the FHIR SDK Standard Data Capture library supports this implementation via the ",(0,a.jsx)(n.em,{children:"Translation Extension"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"An example of the First Name field in a Questionnaires that is localized in Swahili."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'              "text": "First Name",\n              "_text": {\n                "extension": [\n                  {\n                    "extension": [\n                      {\n                        "url": "lang",\n                        "valueCode": "sw"\n                      },\n                      {\n                        "url": "content",\n                        "valueString": "Jina la kwanza"\n                      }\n                    ],\n                    "url": "http://hl7.org/fhir/StructureDefinition/translation"\n                  }\n                ]\n              }\n'})}),"\n",(0,a.jsx)(n.h3,{id:"rule-engine-rules",children:"Rule engine rules"}),"\n",(0,a.jsxs)(n.p,{children:["Special note for rules. Sometimes you need to have one part of the output as a calculated value before display. FHIR Core i18n supports wrapping the calculated expression variable using ",(0,a.jsx)(n.code,{children:"@{"}),"and ",(0,a.jsx)(n.code,{children:"}"})," characters. e.g."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "viewType": "COMPOUND_TEXT",\n  "primaryText": "{{ task.start.date }}",\n  "primaryTextColor": "#5A5A5A",\n  "fontSize": 14.0\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Default"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"task.start.date=Start date: @{taskStartDate}\n"})}),"\n",(0,a.jsx)(n.p,{children:"Swahili"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-properties",children:"task.start.date=Siku ya kuanza: @{taskStartDate}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"translation-process-via-transifex",children:"Translation Process via Transifex"}),"\n",(0,a.jsxs)(n.p,{children:["We use the Transifex service to manage the translation process. ",(0,a.jsx)(n.a,{href:"https://www.transifex.com/",children:"Transifex"})," is a well known platform that supports localization for many stacks including Android and is able to process files in different formats/extensions as used on FHIR Core. The process is such that we upload the default language files in the ",(0,a.jsx)(n.code,{children:"xml"}),", ",(0,a.jsx)(n.code,{children:"properties"})," formats and then the manual translators perform the localiztion on Transifex. The files are then synced back to the codebase for versioning."]}),"\n",(0,a.jsx)(n.h2,{id:"tooling",children:"Tooling"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Efsity - FHIR Core Tooling supports the localization process for the App and Content configs by automating some aspects of it. For more see the documentation here : ",(0,a.jsx)(n.a,{href:"https://github.com/onaio/fhir-tooling/tree/main/efsity#localization",children:"FHIR Core Tooling Localization"})]}),"\n",(0,a.jsxs)(n.li,{children:["Transifex - This is the tool describe in the above section - Also check out ",(0,a.jsx)(n.a,{href:"https://www.transifex.com/",children:"https://www.transifex.com/"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>s});var a=i(7294);const r={},t=a.createContext(r);function s(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);