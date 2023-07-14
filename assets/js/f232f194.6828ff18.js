"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[9230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return n?i.createElement(k,a(a({ref:t},s),{},{components:n})):i.createElement(k,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7885:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const o={},a="Developer setup",l={unversionedId:"engineering-android-app/developer-setup/readme",id:"engineering-android-app/developer-setup/readme",title:"Developer setup",description:"Android Studio",source:"@site/docs/engineering-android-app/developer-setup/readme.mdx",sourceDirName:"engineering-android-app/developer-setup",slug:"/engineering-android-app/developer-setup/",permalink:"/engineering-android-app/developer-setup/",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering-android-app/developer-setup/readme.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Working with rules",permalink:"/engineering-android-app/Configurations/working-with-rules"},next:{title:"Releases",permalink:"/engineering-android-app/developer-setup/automated-releases"}},d={},p=[{value:"Android Studio",id:"android-studio",level:2},{value:"Kotlin style",id:"kotlin-style",level:2}],s={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developer-setup"},"Developer setup"),(0,r.kt)("h2",{id:"android-studio"},"Android Studio"),(0,r.kt)("p",null,"Use Android Studio 4.2+."),(0,r.kt)("h2",{id:"kotlin-style"},"Kotlin style"),(0,r.kt)("p",null,"If you would like Android Studio to help format your code, follow these steps to set up your Android Studio:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install and configure the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/facebookincubator/ktfmt"},"ktfmt plugin")," in Android Studio by following these steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Go to Android Studio's ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"Preferences"),"), select the ",(0,r.kt)("inlineCode",{parentName:"li"},"Plugins")," category, click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Marketplace")," tab, search for the ",(0,r.kt)("inlineCode",{parentName:"li"},"ktfmt")," plugin, and click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Install")," button"),(0,r.kt)("li",{parentName:"ol"},"In Android Studio's ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"Preferences"),"), go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Editor")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"ktfmt Settings"),", tick ",(0,r.kt)("inlineCode",{parentName:"li"},"Enable ktfmt"),", change the ",(0,r.kt)("inlineCode",{parentName:"li"},"Code style")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"Google (Internal)"),", and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK")))),(0,r.kt)("li",{parentName:"ol"},"Indent 2 spaces. In Android Studio's ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"Preferences"),"), go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Editor")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Code Style")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Kotlin")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Tabs and Indents"),", set ",(0,r.kt)("inlineCode",{parentName:"li"},"Tab size"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"Indent")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Continuation indent")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"2"),", and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK"),"."),(0,r.kt)("li",{parentName:"ol"},"Use single name import sorted lexicographically. In Android Studio's ",(0,r.kt)("inlineCode",{parentName:"li"},"Settings")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},"Preferences"),"), go to ",(0,r.kt)("inlineCode",{parentName:"li"},"Editor")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Code Style")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Kotlin")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"Imports"),", in ",(0,r.kt)("inlineCode",{parentName:"li"},"Top-level Symbols")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Java statics and Enum Members")," sections select ",(0,r.kt)("inlineCode",{parentName:"li"},"Use single name import")," option, remove all the rules in ",(0,r.kt)("inlineCode",{parentName:"li"},"Packages to Use Imports with '*'")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"Import Layout")," sections and click ",(0,r.kt)("inlineCode",{parentName:"li"},"OK"),".")),(0,r.kt)("p",null,"Now you can go to ",(0,r.kt)("inlineCode",{parentName:"p"},"Code")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Reformat code"),", or press ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Alt+L")," (",(0,r.kt)("inlineCode",{parentName:"p"},"\u2318+\u2325+L")," for Mac) to automatically format code in Android Studio."),(0,r.kt)("p",null,"Note that you don't have to do any of these. You could rely on spotless to format any code you want to push. For details see below."))}c.isMDXComponent=!0}}]);