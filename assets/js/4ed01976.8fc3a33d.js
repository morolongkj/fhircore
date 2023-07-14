"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[202],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return r?a.createElement(d,o(o({ref:t},c),{},{components:r})):a.createElement(d,o({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={},o="Testing FHIR Resources",l={unversionedId:"engineering-android-app/writing-fhir/testing-resources",id:"engineering-android-app/writing-fhir/testing-resources",title:"Testing FHIR Resources",description:"Step 1 - Creating Patient Resources",source:"@site/docs/engineering-android-app/writing-fhir/testing-resources.md",sourceDirName:"engineering-android-app/writing-fhir",slug:"/engineering-android-app/writing-fhir/testing-resources",permalink:"/engineering-android-app/writing-fhir/testing-resources",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering-android-app/writing-fhir/testing-resources.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Smart Vaccination Certificates",permalink:"/engineering-android-app/writing-fhir/smart-vax-certs"},next:{title:"App Features",permalink:"/features/app-features/"}},s={},p=[{value:"Step 1 - Creating Patient Resources",id:"step-1---creating-patient-resources",level:2},{value:"Pre-requisite",id:"pre-requisite",level:3},{value:"Exercise",id:"exercise",level:3},{value:"Setup VSCode to begin FHIR",id:"setup-vscode-to-begin-fhir",level:3},{value:"Creating a patient resource",id:"creating-a-patient-resource",level:3},{value:"Step 2 - Searching",id:"step-2---searching",level:2},{value:"Pre-requisite",id:"pre-requisite-1",level:3},{value:"Exercise",id:"exercise-1",level:3},{value:"Search Exercise",id:"search-exercise",level:3},{value:"Step 3 - Bundles",id:"step-3---bundles",level:2}],c={toc:p};function h(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"testing-fhir-resources"},"Testing FHIR Resources"),(0,n.kt)("h2",{id:"step-1---creating-patient-resources"},"Step 1 - Creating Patient Resources"),(0,n.kt)("h3",{id:"pre-requisite"},"Pre-requisite"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"VS Code"),(0,n.kt)("li",{parentName:"ol"},"Browser"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://insomnia.rest/"},"Insomnia")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.postman.com/downloads/"},"Postman"))),(0,n.kt)("h3",{id:"exercise"},"Exercise"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Convert the below patient record (unstructured) to a FHIR patient resource")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Name: Pablo Emilio Escobar Gaviria\nGender: Male\nDOB: 1, December 1949\nPhone: 2908409234\nEmail: pablo@narcos.mx\nAddress : 213, Rionegro, Medell\xedn, Colombia\n")),(0,n.kt)("h3",{id:"setup-vscode-to-begin-fhir"},"Setup VSCode to begin FHIR"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir"},"FHIR website"),". Everything you need to know about FHIR standard and also the source of truth"),(0,n.kt)("li",{parentName:"ol"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/fhir.schema.json.zip"},"FHIR JSON Schema")),(0,n.kt)("li",{parentName:"ol"},"Add a File with fhir.schema.json to your project folder"),(0,n.kt)("li",{parentName:"ol"},"Congifgure the workspace settings by clicking ctr+shift+p or cmd+shit+p then type workspace settings, then add the following code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'{\n  "json.schemas": [\n      {\n          "fileMatch": [\n              "*.fhir.json"\n          ],\n          "url": "./fhir.schema.json"\n      }\n  ]\n}\n')),(0,n.kt)("h3",{id:"creating-a-patient-resource"},"Creating a patient resource"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In the project folder, create a resource (patient.fhir.json)"),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("a",{parentName:"li",href:"https://www.hl7.org/fhir/patient.html"},"patient resource")," to learn more about the patient resources"),(0,n.kt)("li",{parentName:"ol"},"Start by adding the braces {}"),(0,n.kt)("li",{parentName:"ol"},"Use autocomplete to fill in the resource (patient) attributes - Press ctrl+space and press enter once you get the key for the resource"),(0,n.kt)("li",{parentName:"ol"},"Manually add/type value for the key"),(0,n.kt)("li",{parentName:"ol"},"VSCode will let you know of any errors/validation/type for the key selected in the problems pane")),(0,n.kt)("p",null,"Creating a patient resource extensions and ",(0,n.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/patient-profiles.html"},"profiles"),"."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NB. The use of extensions should be controlled to avoid duplication or corruption of the file")),(0,n.kt)("p",null,"Also check out ",(0,n.kt)("a",{parentName:"p",href:"https://simplifier.net/"},"Simplifier")," to do it online :)"),(0,n.kt)("h2",{id:"step-2---searching"},"Step 2 - Searching"),(0,n.kt)("h3",{id:"pre-requisite-1"},"Pre-requisite"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"HL7 has ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.hl7.org/Publicly_Available_FHIR_Servers_for_testing"},"publicly available servers")),(0,n.kt)("li",{parentName:"ol"},"We shall be using ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4"},"HAPI R4")," for the API test"),(0,n.kt)("li",{parentName:"ol"},"You can use ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/resource?encoding=null&pretty=true&resource=Patient"},"this GUI")," to do the same. Select the Health Intersection R4 server."),(0,n.kt)("li",{parentName:"ol"},"We can use Insomnia to test our resources")),(0,n.kt)("h3",{id:"exercise-1"},"Exercise"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"In Insomnia/Postman you can create a FHIR project folder"),(0,n.kt)("li",{parentName:"ol"},"You can use the following operations on the base url : in this case using publicly available HAPI server url",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4"},(0,n.kt)("inlineCode",{parentName:"a"},"OPTIONS"))," - Get the capability statement for the FHIR server"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Patient/id"},(0,n.kt)("inlineCode",{parentName:"a"},"GET"))," - Get resource or search"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Patient"},(0,n.kt)("inlineCode",{parentName:"a"},"POST"))," - Create a resource"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Patient/id"},(0,n.kt)("inlineCode",{parentName:"a"},"PUT"))," - Update a resource"))),(0,n.kt)("li",{parentName:"ol"},"Resources to create",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Create a Patient"),(0,n.kt)("li",{parentName:"ol"},"Create a Patient with extension"),(0,n.kt)("li",{parentName:"ol"},"Get Patient"),(0,n.kt)("li",{parentName:"ol"},"Create Patient Observation"),(0,n.kt)("li",{parentName:"ol"},"Update Patient Observation"),(0,n.kt)("li",{parentName:"ol"},"Search Patient Observation")))),(0,n.kt)("h3",{id:"search-exercise"},"Search Exercise"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"NB. Add your patient_id where id is given or value for xxx")),(0,n.kt)("p",null,"We can also perform search examples via URL as described in the ",(0,n.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/searchparameter.html"},"search parameters doc"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"All patient whose name starts with X - ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Patient?name=xxx"},"http://hapi.fhir.org/baseR4/Patient?name=xxx")),(0,n.kt)("li",{parentName:"ol"},"All patient whose family name starts with X - ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Patient?family=xxx"},"http://hapi.fhir.org/baseR4/Patient?family=xxx")),(0,n.kt)("li",{parentName:"ol"},"All patient observations by patient name  - ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Observation?subject.name=xxx"},"http://hapi.fhir.org/baseR4/Observation?subject.name=xxx")),(0,n.kt)("li",{parentName:"ol"},"All patient observations by patient id  - ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Observation?patient=Patient/id"},"http://hapi.fhir.org/baseR4/Observation?patient=Patient/id")),(0,n.kt)("li",{parentName:"ol"},"All BP observations by code - ",(0,n.kt)("a",{parentName:"li",href:"http://hapi.fhir.org/baseR4/Observation?patient=Patient/id&code=http://lonic.org%7C15074-8"},"http://hapi.fhir.org/baseR4/Observation?patient=Patient/id&code=http://lonic.org|15074-8"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"NB. the BP code used was ",(0,n.kt)("a",{parentName:"p",href:"http://lonic.org%7C15074-8"},"http://lonic.org|15074-8"))))),(0,n.kt)("h2",{id:"step-3---bundles"},"Step 3 - Bundles"),(0,n.kt)("p",null,"We are going to work on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.hl7.org/fhir/bundle.html"},"Transaction Bundle")," with a conditional update."),(0,n.kt)("p",null,"This takes multiple resources to POST concurrently to the FHIR server. It's an all or nothing success scenario."),(0,n.kt)("p",null,"Example TBC"))}h.isMDXComponent=!0}}]);