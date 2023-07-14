"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[2313],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),g=o,m=u["".concat(l,".").concat(g)]||u[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a="Code Testing",p={unversionedId:"engineering-android-app/developer-setup/code-testing",id:"engineering-android-app/developer-setup/code-testing",title:"Code Testing",description:"Unit Tests",source:"@site/docs/engineering-android-app/developer-setup/code-testing.mdx",sourceDirName:"engineering-android-app/developer-setup",slug:"/engineering-android-app/developer-setup/code-testing",permalink:"/engineering-android-app/developer-setup/code-testing",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering-android-app/developer-setup/code-testing.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Code Standards",permalink:"/engineering-android-app/developer-setup/code-standards"},next:{title:"Keycloak Auth Token Configuration",permalink:"/engineering-android-app/developer-setup/keycloak-auth-token-config"}},l={},s=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"Spotless",id:"spotless",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"code-testing"},"Code Testing"),(0,o.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,o.kt)("h3",{id:"naming-conventions"},"Naming Conventions"),(0,o.kt)("p",null,"We follow the following naming convention for our test cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<methodName><ConditionUnderTest><ExpectedBehavior>\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example:")," for a sample method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},"fun isNumberEven(value:Int):Bool{\n")),(0,o.kt)("p",null,"Sample test case:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"isNumberEvenWithParameterFiveShouldReturnFalse\n")),(0,o.kt)("h2",{id:"spotless"},"Spotless"),(0,o.kt)("p",null,"We use Spotless to maintain the Java/Kotlin coding style in the codebase. Run the following command to check the codebase:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew spotlessCheck\n")),(0,o.kt)("p",null,"and run the following command to apply fixes to the violations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew spotlessApply\n")))}d.isMDXComponent=!0}}]);