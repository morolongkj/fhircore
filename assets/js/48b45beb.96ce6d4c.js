"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,d=u["".concat(s,".").concat(m)]||u[m]||h[m]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8132:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},i=void 0,l={unversionedId:"report/cql-to-library-conversion",id:"report/cql-to-library-conversion",title:"cql-to-library-conversion",description:"CQL Logic/Decision Library",source:"@site/docs/report/cql-to-library-conversion.mdx",sourceDirName:"report",slug:"/report/cql-to-library-conversion",permalink:"/report/cql-to-library-conversion",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/report/cql-to-library-conversion.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Platform Components",permalink:"/getting-started/platform-components"},next:{title:"Writing FHIR",permalink:"/writing-fhir/"}},s={},c=[{value:"CQL Logic/Decision Library",id:"cql-logicdecision-library",level:2},{value:"Other possible but not recommended ways to get the translated elm+json",id:"other-possible-but-not-recommended-ways-to-get-the-translated-elmjson",level:5}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"cql-logicdecision-library"},"CQL Logic/Decision Library"),(0,o.kt)("p",null,"The CQL( Clinical Quality Language Specification) provides a way to define data querying, processing and logical expressions in a simplified and user friendly way. ",(0,o.kt)("a",{parentName:"p",href:"https://cql.hl7.org/01-introduction.html"},"Here")," is a detailed guide on CQL. Some example CQL scripts can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/tree/main/ecbis/measure_cql"},"here"),".\nSince the CQL itself is a user friendly script rather than a parseable configuration or program, it needs a json or xml form that can be lexically parsed and understood by parser. Hence it is transformed into a json form called ELM(Expression Logical Model) aka json+elm. An xml form xml+elm is also used by we use json+elm for parsing fhircore libraries. See below to find the convertors.\nThe translated elm and cql is then added to fhir Library resource ",(0,o.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/library.html"},"Library")," as base64 data to allow code to get the calculation for each variable and be able to be used by fhir compatible softwares."),(0,o.kt)("p",null,"Some resources to get details on CQL writing are below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CQL brief authoring guide ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/02-authorsguide.html"},"https://cql.hl7.org/02-authorsguide.html")),(0,o.kt)("li",{parentName:"ul"},"CQL operators and functions ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/04-logicalspecification.html"},"https://cql.hl7.org/04-logicalspecification.html")," and ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/09-b-cqlreference.html"},"https://cql.hl7.org/09-b-cqlreference.html")),(0,o.kt)("li",{parentName:"ul"},"Fhirpath mapping in CQL ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/16-i-fhirpathtranslation.html"},"https://cql.hl7.org/16-i-fhirpathtranslation.html")),(0,o.kt)("li",{parentName:"ul"},"Examples ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/15-h-timeintervalcalculations.html"},"Time Interval")," and ",(0,o.kt)("a",{parentName:"li",href:"https://cql.hl7.org/03-developersguide.html#conditional-expressions"},"Detail on Queries")),(0,o.kt)("li",{parentName:"ul"},"CQL Sandbox is ","[here]","(",(0,o.kt)("a",{parentName:"li",href:"https://sandbox.cqlab.io/"},"https://sandbox.cqlab.io/")," CQL sandbox)"),(0,o.kt)("li",{parentName:"ul"},"CQL android editor app is ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Path-Check/cql-editor-app/"},"here"))),(0,o.kt)("p",null,"A working example of CQL for a Measure is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/blob/main/ecbis/measure_cql/household_measure_reporting.cql"},"here"),". Some notable lines are"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'library HOUSEHOLDIND01 version \'1\'\n...\ninclude "FHIRHelpers" version \'4.0.1\' called FHIRHelpers\n...\n// The Measure interval has closed boundaries. Read details https://cql.hl7.org/02-authorsguide.html#interval-values\nparameter "Measurement Period" Interval<DateTime>\ncontext Patient\n...\ndefine "All Groups": [Group] G where G.type = \'person\'\ndefine "All Group Members": flatten("All Groups" G return (G.member M return M.entity))\ndefine "Group": "All Groups" G return G.id\ndefine "Group Member": "All Group Members" G where "Patient Id" = Split(G.reference, \'/\')[1]\ndefine "Patients": {Patient}\n\ndefine "Males": Patient.gender=\'male\'\ndefine "Females": Patient.gender=\'female\'\n\ndefine "Age": CalculateAgeInYearsAt(Patient.birthDate, ToDate("Measurement Period".high))\n\ndefine "Age Stratifier":\n  case\n    when "Age" < 1 then \'P0Y\'\n    ....\n  end\n')),(0,o.kt)("p",null,"The variables in CQL can be referenced into Measure and/or PlanDefinition after adding the Library containing CQL as referenced Library."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Android FHIR SDK CQL Builder")),(0,o.kt)("p",null,"SDK workflow testing module has ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir/blob/master/workflow-testing/src/main/java/com/google/android/fhir/workflow/testing/CqlBuilder.kt"},"com.google.android.fhir.workflow.testing.CqlBuilder")," which can do translation from a CQL to Library resource. This automatically does the elm conversion for you internally. "),(0,o.kt)("p",null,"Example usage can be seen in tests which can also be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir/blob/master/workflow/src/test/java/com/google/android/fhir/workflow/FhirOperatorTest.kt#L150"},"here")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"val library = CqlBuilder.compileAndBuild(cqlScriptInputStream)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"FhirCore CQL Testing Module")),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing"},"fhir-resources")," repository has a testing module which allows to not only get the complete Library resource to directly save to server but also allows to test the output and make changes on the fly.\nCheck the cucumber tests ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/resources/measure-report/household-members.feature"},"Feature File"),", the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/kotlin/com/fhircore/resources/testing/measure/HouseholdMembersMeasureTest.kt#L28"},"Test Code File")," and the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhir-resources/blob/main/fhircore-testing/fhircore-tests/src/androidTest/kotlin/com/fhircore/resources/testing/CqlUtils.kt"},"Convertor Util Method")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fhircore Tooling Library")),(0,o.kt)("p",null,"Fhircore tooling library can also be used to get a Library by running commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fct convert -t cql -i /some/path/Patient-1.0.0.cql\n")),(0,o.kt)("p",null,"Details on tool can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhircore-tooling#converting-library-cql-to-json"},"here")),(0,o.kt)("h5",{id:"other-possible-but-not-recommended-ways-to-get-the-translated-elmjson"},"Other possible but not recommended ways to get the translated elm+json"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CQL to ELM REST Translator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cqframework/cql-translation-service/blob/master/README.md"},"elm REST app")," that can be used to run elm microservice and convert CQL via a REST API."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CQL to ELM JAVA Translator")),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cqframework/clinical_quality_language/blob/master/Src/java/READM.md"},"elm java app")," that can be used to elm translator on files and get an output. Instructions can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cqframework/cql-execution#to-execute-your-cql"},"here")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"*Note")," : Above approaches output a json elm which then need to be base64 decoded and copied to the ",(0,o.kt)("a",{parentName:"p",href:"http://hl7.org/fhir/R4/library.html"},"Library")," content as Attachment.*"))}h.isMDXComponent=!0}}]);