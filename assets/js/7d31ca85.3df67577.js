"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[3932],{5356:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var s=t(5893),i=t(1151);const o={},r="Code Testing",d={id:"engineering/android-app/developer-setup/code-testing",title:"Code Testing",description:"Unit Tests",source:"@site/docs/engineering/android-app/developer-setup/code-testing.mdx",sourceDirName:"engineering/android-app/developer-setup",slug:"/engineering/android-app/developer-setup/code-testing",permalink:"/engineering/android-app/developer-setup/code-testing",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/developer-setup/code-testing.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Code Standards",permalink:"/engineering/android-app/developer-setup/code-standards"},next:{title:"Publishing SDK Artifacts",permalink:"/engineering/android-app/developer-setup/publishing-fhir-sdk-artifacts"}},l={},a=[{value:"Unit Tests",id:"unit-tests",level:2},{value:"Naming Conventions",id:"naming-conventions",level:3},{value:"Spotless",id:"spotless",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"code-testing",children:"Code Testing"}),"\n",(0,s.jsx)(n.h2,{id:"unit-tests",children:"Unit Tests"}),"\n",(0,s.jsx)(n.h3,{id:"naming-conventions",children:"Naming Conventions"}),"\n",(0,s.jsx)(n.p,{children:"We follow the following naming convention for our test cases:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"<methodName><ConditionUnderTest><ExpectedBehavior>\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example:"})," for a sample method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-kotlin",children:"fun isNumberEven(value:Int):Bool{\n"})}),"\n",(0,s.jsx)(n.p,{children:"Sample test case:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"isNumberEvenWithParameterFiveShouldReturnFalse\n"})}),"\n",(0,s.jsx)(n.h2,{id:"spotless",children:"Spotless"}),"\n",(0,s.jsx)(n.p,{children:"We use Spotless to maintain the Java/Kotlin coding style in the codebase. Run the following command to check the codebase:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./gradlew spotlessCheck\n"})}),"\n",(0,s.jsx)(n.p,{children:"and run the following command to apply fixes to the violations:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"./gradlew spotlessApply\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>r});var s=t(7294);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);