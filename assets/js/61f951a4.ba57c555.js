"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[379],{4380:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=t(5893),r=t(1151);const a={sidebar_position:1,sidebar_label:"Introduction"},o="Introduction",s={id:"engineering/android-app/introduction/readme",title:"Introduction",description:"This documentation covers the OpenSRP Android App. This is a Kotlin application for delivering configurable, offline-capable, and mobile-first healthcare project implementations.",source:"@site/docs/engineering/android-app/introduction/readme.mdx",sourceDirName:"engineering/android-app/introduction",slug:"/engineering/android-app/introduction/",permalink:"/engineering/android-app/introduction/",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/introduction/readme.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"defaultSidebar",previous:{title:"Supported Domains",permalink:"/features/supported-health-domains/"},next:{title:"Developer setup",permalink:"/engineering/android-app/developer-setup/"}},d={},c=[{value:"Programming Language",id:"programming-language",level:3},{value:"Android Libraries",id:"android-libraries",level:3},{value:"Architecture",id:"architecture",level:3},{value:"Data Access",id:"data-access",level:3},{value:"Configurations",id:"configurations",level:3},{value:"Testing",id:"testing",level:3},{value:"Style and coverage tests",id:"style-and-coverage-tests",level:4},{value:"Unit tests",id:"unit-tests",level:4},{value:"User interface and integration tests",id:"user-interface-and-integration-tests",level:4},{value:"Performance tests",id:"performance-tests",level:4}];function l(e){const n={a:"a",h1:"h1",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This documentation covers the OpenSRP Android App. This is a Kotlin application for delivering configurable, offline-capable, and mobile-first healthcare project implementations."}),"\n",(0,i.jsxs)(n.p,{children:["OpenSRP is architected as a FHIR-native platform powered by Google's ",(0,i.jsx)(n.a,{href:"https://github.com/google/android-fhir",children:"Android FHIR SDK"})," and ",(0,i.jsx)(n.a,{href:"https://hapifhir.io/",children:"HAPI FHIR"}),". OpenSRP users experience a module-oriented design based on over a decade of real world experience implementing digital health projects."]}),"\n",(0,i.jsx)(n.p,{children:"This repository contains the Android mobile application built to:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Load configuration data as FHIR resources"}),"\n",(0,i.jsx)(n.li,{children:"Support the WHO Smart Guidelines"}),"\n",(0,i.jsx)(n.li,{children:"Manage the identities of healthcare workers (HCWs), community health workers (CHWs), care teams, patients, and clients"}),"\n",(0,i.jsxs)(n.li,{children:["Collect, view, and edit healthcare data with dynamic forms using FHIR's ",(0,i.jsx)(n.a,{href:"https://hl7.org/fhir/us/sdc/index.html",children:"Structured Data Capture"})," (SDC) implementation"]}),"\n",(0,i.jsx)(n.li,{children:"Securely store healthcare data encrypted at rest and securely transmit healthcare data using TLS"}),"\n",(0,i.jsx)(n.li,{children:"Manage location hierarchies defined by community to national and international administrative boundaries"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"For remote data storage and login, the mobile application requires:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://www.keycloak.org/",children:"Keycloak"})," server to manage identity, authentication, and authorization;"]}),"\n",(0,i.jsxs)(n.li,{children:["A ",(0,i.jsx)(n.a,{href:"https://hapifhir.io/",children:"HAPI FHIR"})," server to store operation and configuration data that includes the ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/hapi-fhir-keycloak",children:"HAPI FHIR to Keycloak integration"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"programming-language",children:"Programming Language"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://kotlinlang.org/",children:"Kotlin v1.7.10"})}),"\n",(0,i.jsx)(n.h3,{id:"android-libraries",children:"Android Libraries"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.android.com/training/dependency-injection/hilt-multi-module",children:"Hilt"}),"- for dependency injection"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/documentation",children:"Jetpack Compose"})," - for building sharable declarative Android UI"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.android.com/jetpack/compose/navigation",children:"Jetpack Compose navigation"})," - to navigate between compose screens"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://developer.android.com/guide/navigation",children:"Android navigation component"})," - to navigate between activities and fragments"]}),"\n",(0,i.jsx)(n.li,{children:"Android Livedata and ViewModel"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.p,{children:"The app is architectured in the following manner:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The app is built around MVVM architecuture with the data layer implemented using the Repository pattern."}),"\n",(0,i.jsx)(n.li,{children:"The entry point of the application also follows Single-Activity architecture after the user is logged in."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Generated documentation is available ",(0,i.jsx)(n.a,{href:"https://docs.opensrp.io/dokka/",children:"here"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"data-access",children:"Data Access"}),"\n",(0,i.jsxs)(n.p,{children:["The application uses FHIR Engine APIs from Google's ",(0,i.jsx)(n.a,{href:"https://github.com/google/android-fhir",children:"Android FHIR SDK"})," (which internally uses\n",(0,i.jsx)(n.a,{href:"https://developer.android.com/jetpack/androidx/releases/room",children:"Room"})," libary) to access the local Sqlite database."]}),"\n",(0,i.jsx)(n.h3,{id:"configurations",children:"Configurations"}),"\n",(0,i.jsx)(n.p,{children:"The application syncs particular resources (conventionally, Composition and Binary) from the HAPI FHIR server to configure the app. The configurations control application workflows as well as the look and feel of the app."}),"\n",(0,i.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,i.jsx)(n.p,{children:"The OpenSRP Android app includes automated style, coverage, unit, user inteface / integartion, and performance testing. All tests are run through github actions on pull request and must be passed for a pull request to be merged without an admin override."}),"\n",(0,i.jsx)(n.h4,{id:"style-and-coverage-tests",children:"Style and coverage tests"}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://github.com/pinterest/ktlint",children:"ktlint"})," via ",(0,i.jsx)(n.a,{href:"https://github.com/diffplug/spotless",children:"spotless"})," to run style checks against the entire codebase. We target to make these style checks as strict as possible in order to reduce bikeshedding in code reviews."]}),"\n",(0,i.jsxs)(n.p,{children:["We use ",(0,i.jsx)(n.a,{href:"https://www.jacoco.org/jacoco/",children:"Jacoco"})," for code coverage report generation and then ",(0,i.jsx)(n.a,{href:"https://app.codecov.io/gh/opensrp/fhircore",children:"codecov"})," to track changes in coverage over time. We enforce a minimum coverage percent on the new code added in a pull request and a minimum reduction in overall coverage percentage change when consider the changes introduced through a pull request."]}),"\n",(0,i.jsx)(n.h4,{id:"unit-tests",children:"Unit tests"}),"\n",(0,i.jsxs)(n.p,{children:["Unit tests are divided among the ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/tree/main/android/engine/src/test",children:"engine"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/tree/main/android/geowidget/src/test/java/org/smartregister/fhircore/geowidget",children:"geowidget"}),", and ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/tree/main/android/quest/src/test",children:"quest"})," modules. These can be run locally and are run automatically through github actions when you submit a pull request. All tests must pass for a pull request to be merged."]}),"\n",(0,i.jsx)(n.h4,{id:"user-interface-and-integration-tests",children:"User interface and integration tests"}),"\n",(0,i.jsxs)(n.p,{children:["We run tests against screen renderings that function as user interface and integations tests. These are defined in the ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/tree/main/android/quest/src/test",children:"quest"})," module. These can be run locally and are run automatically through github actions when you submit a pull request. All tests must pass for a pull request to be merged."]}),"\n",(0,i.jsx)(n.h4,{id:"performance-tests",children:"Performance tests"}),"\n",(0,i.jsxs)(n.p,{children:["We include a set of ",(0,i.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/tree/main/android/quest/src/androidTest/java/org/smartregister/fhircore/performance",children:"performance tests"})," to verify that the time taken to perform operations is not changing significantly as the code changes. These measure relative performance when running on the hosted continuous integration testing system and are not meant to reflect the amount of time an operation takes in a real world on-device scenario."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(7294);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);