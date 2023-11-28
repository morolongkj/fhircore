"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[8025],{3295:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>d});var r=s(5893),i=s(1151);const t={},a="Releases",o={id:"engineering/android-app/developer-setup/automated-releases",title:"Releases",description:"OpenSRP FHIR Core releases occur at most once every 2 weeks, i.e. at the conclusion of a sprint. The release process follows the gitlab flow style described in the following diagram:",source:"@site/docs/engineering/android-app/developer-setup/automated-releases.mdx",sourceDirName:"engineering/android-app/developer-setup",slug:"/engineering/android-app/developer-setup/automated-releases",permalink:"/engineering/android-app/developer-setup/automated-releases",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/developer-setup/automated-releases.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Developer setup",permalink:"/engineering/android-app/developer-setup/"},next:{title:"Code Reviews",permalink:"/engineering/android-app/developer-setup/code-reviews"}},l={},d=[{value:"Release notes",id:"release-notes",level:2},{value:"How to write release notes",id:"how-to-write-release-notes",level:3},{value:"Adding release notes to the repository",id:"adding-release-notes-to-the-repository",level:3},{value:"Viewing release notes",id:"viewing-release-notes",level:3},{value:"Code releases",id:"code-releases",level:2},{value:"APK releases",id:"apk-releases",level:2},{value:"Flavors",id:"flavors",level:2},{value:"Release automation with tags",id:"release-automation-with-tags",level:2},{value:"Deleting a tag",id:"deleting-a-tag",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"releases",children:"Releases"}),"\n",(0,r.jsxs)(n.p,{children:["OpenSRP FHIR Core releases occur at most once every 2 weeks, i.e. at the conclusion of a sprint. The release process follows the ",(0,r.jsx)(n.a,{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#release-branches-with-gitlab-flow",children:"gitlab flow"})," style described in the following diagram:"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(9855).Z+"",width:"600",height:"245"})}),"\n",(0,r.jsx)(n.p,{children:"This allows changes to occur on the code release branch while unrelated code continues being merged into main."}),"\n",(0,r.jsx)(n.h2,{id:"release-notes",children:"Release notes"}),"\n",(0,r.jsx)(n.p,{children:"Release notes provide a summary of the changes, improvements, and bug fixes in each new release. They are an essential resource for developers and users to understand what has been updated and any potential impacts on their implementations."}),"\n",(0,r.jsx)(n.h3,{id:"how-to-write-release-notes",children:"How to write release notes"}),"\n",(0,r.jsx)(n.p,{children:"To write effective release notes, follow these guidelines:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Be concise and clear:"})," Summarize the changes in a way that is easy to understand by users and developers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Categorize changes:"})," Group changes into categories like 'New Features', 'Improvements', and 'Bug Fixes' for easy navigation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Highlight breaking changes:"})," Clearly indicate any breaking changes that may impact existing implementations or require special attention."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Include relevant issue numbers:"})," Link to the related GitHub issues or pull requests for more context and easier tracking."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"adding-release-notes-to-the-repository",children:"Adding release notes to the repository"}),"\n",(0,r.jsxs)(n.p,{children:["Before a new release is created, the release notes must be added to the ",(0,r.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/blob/main/CHANGELOG.md",children:"changelog"}),". The changelog is ordered from newest release at the top to oldest releases at the bottom. Follow these steps to add a changelog entry for your new release:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Update, verify, add to the latest changelog section","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'If there is an "unreleased" header, update this to the new release version following the document format'}),"\n",(0,r.jsx)(n.li,{children:'If there is no "unreleased" header, add one for this new release version'}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Update and add to the release notes in this section following the guidelines mentioned above.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"At a minimum, the release notes must link to and include the title text from the the newly closed issues, excluding any testing, doc, or cleanup issues that are uninformative or immaterial to the changes."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Commit and open a PR for your updates to the changelog."}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"viewing-release-notes",children:"Viewing release notes"}),"\n",(0,r.jsxs)(n.p,{children:["Release notes can be viewed in the ",(0,r.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/blob/main/CHANGELOG.md",children:"changelog"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"code-releases",children:"Code releases"}),"\n",(0,r.jsx)(n.p,{children:"To conduct a code release follow the below steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["Open and merge a PR to update the project version to the current release version","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["e.g. change the ",(0,r.jsx)(n.code,{children:"versionName"})," in the ",(0,r.jsx)(n.code,{children:"opensrp"})," module ",(0,r.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/blob/main/android/opensrp/build.gradle#L28",children:"build.gradle"})," file to ",(0,r.jsx)(n.code,{children:"v0.2.0"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Code freeze: create a branch for the code release version as well as the first code release candidate (labeled RC1).","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For example, for code release version ",(0,r.jsx)(n.code,{children:"v0.2.0"}),", create a branch ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0"}),", a pre-release ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0-rc1"}),", and a tag ",(0,r.jsx)(n.code,{children:"v0.2.0-opensrp-rc1"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Candidate progression: This is followed by 1-2 weeks of QA and error fixing","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Whenever we find an error in the candidate, open a pull request with a fix for the error against the code release branch (e.g.  ",(0,r.jsx)(n.code,{children:"v0.2.0"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["Once the error is fixed and merged into the code release branch (multiple errors can be batched), create a new tag, e.g. ",(0,r.jsx)(n.code,{children:"v0.2.0-opensrp-rc2"}),", the update the pre-release to point to this tag and reflect the RC2 name."]}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["You must also either a) open a PR with the same fix against the ",(0,r.jsx)(n.code,{children:"main"})," branch, b) open a PR from the release branch into the ",(0,r.jsx)(n.code,{children:"main"})," branch after merging the fix into the release branch."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["Repeat step (2.) until QA passes, e.g. with more tags, e.g. ",(0,r.jsx)(n.code,{children:"v0.2.0-opensrp-rc3"})," ..., and updated pre-releases."]}),"\n",(0,r.jsxs)(n.li,{children:["Final code release: when the release passes QA, create a final release tag ",(0,r.jsx)(n.code,{children:"v0.2.0"})," and update the release to point to this tag and reflect the ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0"})," name."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"apk-releases",children:"APK releases"}),"\n",(0,r.jsxs)(n.p,{children:["Once a final code release is created, attach a generic flavor APK release e.g. ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0.apk"})," to the release. In addition, attach APK releases for any specific flavors requested, e.g. ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0-bunda.apk"}),", ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0-ecbis.apk"}),", ",(0,r.jsx)(n.code,{children:"opensrp-0.2.0-wdf.apk"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"flavors",children:"Flavors"}),"\n",(0,r.jsx)(n.p,{children:"Flavors define custom names, icons, and default local properties (such as server versions). We use flavors when a particular project or use-cases requires this customization, such as a branded icon and name. When creating flavors do NOT include version numbers. The version of the flavor is defined by the code version."}),"\n",(0,r.jsxs)(n.p,{children:["To add a flavor, add an entry to the ",(0,r.jsx)(n.code,{children:"productFlavors"})," map in ",(0,r.jsx)(n.a,{href:"https://github.com/opensrp/fhircore/blob/main/android/opensrp/build.gradle",children:(0,r.jsx)(n.code,{children:"android/opensrp/build.gradle"})}),". For example, to add a flavor called ",(0,r.jsx)(n.code,{children:"new-flavor"})," add the map:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'create("new-flavor") {\n    dimension = "apps"\n    applicationIdSuffix = ".new-flavor"\n    versionNameSuffix = "-new-flavor"\n    manifestPlaceholders["appLabel"] = "New Flavor App Name"\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can add the follow resources:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Location"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"App icon"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"android/opensrp/src/new-flavor/res/drawable/ic_app_logo.png"})})]})})]}),"\n",(0,r.jsx)(n.p,{children:"Where the app icon is an image of the appropriate size"}),"\n",(0,r.jsx)(n.h2,{id:"release-automation-with-tags",children:"Release automation with tags"}),"\n",(0,r.jsx)(n.p,{children:"As part of integrating Continuous Delivery(CD) into the development lifecycle, CI is set up to generate an APK."}),"\n",(0,r.jsx)(n.p,{children:"The configuration requires the tag to have the following parts/sections in order:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["The prefix ",(0,r.jsx)(n.code,{children:"v"})]}),"\n",(0,r.jsxs)(n.li,{children:["Followed by the ",(0,r.jsx)(n.em,{children:"version"})," in the format ",(0,r.jsx)(n.code,{children:"[0-9]+.[0-9]+.[0-9]+[0-9a-zA-Z.-]+"})]}),"\n",(0,r.jsxs)(n.li,{children:["Followed by the product name: ",(0,r.jsx)(n.code,{children:"-opensrp"})]}),"\n",(0,r.jsxs)(n.li,{children:["Followed by an optional ",(0,r.jsx)(n.em,{children:"suffix"})," depending on the release e.g. ",(0,r.jsx)(n.code,{children:"-alpha"}),", ",(0,r.jsx)(n.code,{children:"-rc"}),", ",(0,r.jsx)(n.code,{children:"-beta"})," e.t.c"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The following are all valid tags that will trigger the generation of the OpenSRP release APK"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"v1.2.0-opensrp"}),"\n",(0,r.jsx)(n.li,{children:"v1.2.0-opensrp-alpha"}),"\n",(0,r.jsx)(n.li,{children:"v1.2.0-opensrp-beta"}),"\n",(0,r.jsx)(n.li,{children:"v1.2.0-opensrp-rc1"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," When creating a tag for the ",(0,r.jsx)(n.em,{children:"OpenSRP Version 1.2.0 RC 5 release variant"}),", use the command:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git tag -a v1.2.0-opensrp-rc5 -s && git push origin v1.2.0-opensrp-rc5\n"})}),"\n",(0,r.jsxs)(n.p,{children:["When you run the command, you will be prompted to ",(0,r.jsx)(n.em,{children:"add a message"}),". The message should be of the format:"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Template"}),(0,r.jsx)(n.th,{children:"Sample"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsxs)("pre",{children:[" TITLE ",(0,r.jsx)("br",{})," - Release note 1",(0,r.jsx)("br",{})," - Release note 2"]})}),(0,r.jsx)(n.td,{children:(0,r.jsxs)("pre",{children:[" BETA RELEASE ",(0,r.jsx)("br",{})," - Adds Login by PIN functionality ",(0,r.jsx)("br",{})," - Fixes sync bug causing crash on install "]})})]})})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," For convention, the TITLE should be ",(0,r.jsx)(n.em,{children:"Capitalized"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"deleting-a-tag",children:"Deleting a tag"}),"\n",(0,r.jsx)(n.p,{children:"Sometimes you may want to delete a tag, e.g. if you push an incorrect tag, need to update the tag message etc."}),"\n",(0,r.jsx)(n.p,{children:"For example, to delete the v1.2.0-opensrp-rc1 tag run the command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"git push --delete origin v1.2.0-opensrp-rc1 && git tag --delete v1.2.0-opensrp-rc1\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9855:(e,n,s)=>{s.d(n,{Z:()=>r});const r=s.p+"assets/images/gitlabflow-d004f34eb8bed99cce0dade9bb835d70.png"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var r=s(7294);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);