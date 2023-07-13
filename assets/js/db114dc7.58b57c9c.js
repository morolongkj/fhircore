"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[198],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6955:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2,sidebar_label:"Technical Overview"},i="Technical Overview",p={unversionedId:"readme",id:"readme",title:"Technical Overview",description:"OpenSRP is a platform for delivering digital health services. It has been used in projects ranging from single location research studies to national health systems caring for over a hundred million patients.",source:"@site/docs/readme.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/readme.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Technical Overview"},sidebar:"defaultSidebar",previous:{title:"Supported Domains",permalink:"/about-opensrp/supported-health-domains/"},next:{title:"Android App",permalink:"/android-app/"}},s={},c=[],l={toc:c};function d(e){let{components:r,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"technical-overview"},"Technical Overview"),(0,a.kt)("p",null,"OpenSRP is a platform for delivering digital health services. It has been used in projects ranging from single location research studies to national health systems caring for over a hundred million patients."),(0,a.kt)("p",null,"The Android app is primarily written in Kotlin\u200b, architected as a FHIR-native platform, and powered by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/google/android-fhir"},"Android FHIR SDK"),". Find OpenSRP on Github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhircore"},"OpenSRP Android App"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/opensrp/web"},"OpenSRP Admin Dashboard")),(0,a.kt)("p",null,"The OpenSRP platform consists of three components: (1) ",(0,a.kt)("a",{parentName:"p",href:"/android-app"},"OpenSRP Android App"),", (2) ",(0,a.kt)("a",{parentName:"p",href:"/about-opensrp/admin-dashboard-features"},"OpenSRP Admin Dashboard"),", and (3) OpenSRP Analytics Dashboard. In addition, OpenSRP relies on a number of other modular tools as described in the diagram below."),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(3541).Z,width:"2090",height:"917"})))}d.isMDXComponent=!0},3541:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/opensrp-platform-flow-3c5b9c409a57d06a21c31afa2f0e6aa4.png"}}]);