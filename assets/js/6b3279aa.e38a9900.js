"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[898],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1853:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const l={},o="Releases",i={unversionedId:"developer-setup/automated-releases",id:"developer-setup/automated-releases",title:"Releases",description:"OpenSRP FHIR Core releases occur at most once every 2 weeks, i.e. at the conclusion of a sprint. The release process follows the gitlab flow style described in the following diagram:",source:"@site/docs/developer-setup/automated-releases.mdx",sourceDirName:"developer-setup",slug:"/developer-setup/automated-releases",permalink:"/developer-setup/automated-releases",draft:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/developer-setup/automated-releases.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Developer setup",permalink:"/developer-setup/"},next:{title:"Code Reviews",permalink:"/developer-setup/code-reviews"}},s={},p=[{value:"Release notes",id:"release-notes",level:2},{value:"How to write release notes",id:"how-to-write-release-notes",level:3},{value:"Adding release notes to the repository",id:"adding-release-notes-to-the-repository",level:3},{value:"Viewing release notes",id:"viewing-release-notes",level:3},{value:"Code releases",id:"code-releases",level:2},{value:"APK releases",id:"apk-releases",level:2},{value:"Flavors",id:"flavors",level:2},{value:"Release automation with tags",id:"release-automation-with-tags",level:2},{value:"Deleting a tag",id:"deleting-a-tag",level:3}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"releases"},"Releases"),(0,r.kt)("p",null,"OpenSRP FHIR Core releases occur at most once every 2 weeks, i.e. at the conclusion of a sprint. The release process follows the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html#release-branches-with-gitlab-flow"},"gitlab flow")," style described in the following diagram:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(8406).Z,width:"600",height:"245"})),(0,r.kt)("p",null,"This allows changes to occur on the code release branch while unrelated code continues being merged into main."),(0,r.kt)("h2",{id:"release-notes"},"Release notes"),(0,r.kt)("p",null,"Release notes provide a summary of the changes, improvements, and bug fixes in each new release. They are an essential resource for developers and users to understand what has been updated and any potential impacts on their implementations."),(0,r.kt)("h3",{id:"how-to-write-release-notes"},"How to write release notes"),(0,r.kt)("p",null,"To write effective release notes, follow these guidelines:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Be concise and clear:")," Summarize the changes in a way that is easy to understand by users and developers."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Categorize changes:")," Group changes into categories like 'New Features', 'Improvements', and 'Bug Fixes' for easy navigation."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Highlight breaking changes:")," Clearly indicate any breaking changes that may impact existing implementations or require special attention."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Include relevant issue numbers:")," Link to the related GitHub issues or pull requests for more context and easier tracking.")),(0,r.kt)("h3",{id:"adding-release-notes-to-the-repository"},"Adding release notes to the repository"),(0,r.kt)("p",null,"Before a new release is created, the release notes must be added to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhircore/blob/main/CHANGELOG.md"},"changelog"),". The changelog is ordered from newest release at the top to oldest releases at the bottom. Follow these steps to add a changelog entry for your new release:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Update, verify, add to the latest changelog section",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'If there is an "unreleased" header, update this to the new release version following the document format'),(0,r.kt)("li",{parentName:"ul"},'If there is no "unreleased" header, add one for this new release version'))),(0,r.kt)("li",{parentName:"ol"},"Update and add to the release notes in this section following the guidelines mentioned above.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"At a minimum, the release notes must link to and include the title text from the the newly closed issues, excluding any testing, doc, or cleanup issues that are uninformative or immaterial to the changes."))),(0,r.kt)("li",{parentName:"ol"},"Commit and open a PR for your updates to the changelog.")),(0,r.kt)("h3",{id:"viewing-release-notes"},"Viewing release notes"),(0,r.kt)("p",null,"Release notes can be viewed in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhircore/blob/main/CHANGELOG.md"},"changelog"),"."),(0,r.kt)("h2",{id:"code-releases"},"Code releases"),(0,r.kt)("p",null,"To conduct a code release follow the below steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open and merge a PR to update the project version to the current release version",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"e.g. change the ",(0,r.kt)("inlineCode",{parentName:"li"},"versionName")," in the Quest ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/opensrp/fhircore/blob/main/android/quest/build.gradle#L28"},"build.gradle")," file to ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.2.0")))),(0,r.kt)("li",{parentName:"ol"},"Code freeze: create a branch for the code release version as well as the first code release candidate (labeled RC1).",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, for code release version ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.2.0"),", create a branch ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0"),", a pre-release ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0-rc1"),", and a tag ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0-rc1")))),(0,r.kt)("li",{parentName:"ol"},"Candidate progression: This is followed by 1-2 weeks of QA and error fixing",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Whenever we find an error in the candidate, open a pull request with a fix for the error against the code release branch (e.g.  ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.2.0"),")"),(0,r.kt)("li",{parentName:"ul"},"Once the error is fixed and merged into the code release branch (multiple errors can be batched), create a new tag, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0-rc2"),", the update the pre-release to point to this tag and reflect the RC2 name.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"You must also either a) open a PR with the same fix against the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch, b) open a PR from the release branch into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," branch after merging the fix into the release branch."))))),(0,r.kt)("li",{parentName:"ol"},"Repeat step (2.) until QA passes, e.g. with more tags, e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0-rc3")," ..., and updated pre-releases."),(0,r.kt)("li",{parentName:"ol"},"Final code release: when the release passes QA, create a final release tag ",(0,r.kt)("inlineCode",{parentName:"li"},"v0.2.0")," and update the release to point to this tag and reflect the ",(0,r.kt)("inlineCode",{parentName:"li"},"opensrp-0.2.0")," name.")),(0,r.kt)("h2",{id:"apk-releases"},"APK releases"),(0,r.kt)("p",null,"Once a final code release is created, attach a generic flavor APK release e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"opensrp-0.2.0.apk")," to the release. In addition, attach APK releases for any specific flavors requested, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"opensrp-0.2.0-bunda.apk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opensrp-0.2.0-ecbis.apk"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"opensrp-0.2.0-wdf.apk"),"."),(0,r.kt)("h2",{id:"flavors"},"Flavors"),(0,r.kt)("p",null,"Flavors define custom names, icons, and default local properties (such as server versions). We use flavors when a particular project or use-cases requires this customization, such as a branded icon and name. When creating flavors do NOT include version numbers. The version of the flavor is defined by the code version."),(0,r.kt)("p",null,"To add a flavor, add an entry to the ",(0,r.kt)("inlineCode",{parentName:"p"},"productFlavors")," map in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/opensrp/fhircore/blob/main/android/quest/build.gradle"},(0,r.kt)("inlineCode",{parentName:"a"},"android/quest/build.gradle")),". For example, to add a flavor called ",(0,r.kt)("inlineCode",{parentName:"p"},"new-flavor")," add the map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'new-flavor  {\n    dimension "apps"\n    applicationIdSuffix ".new-flavor"\n    versionNameSuffix "new-flavor"\n}\n')),(0,r.kt)("p",null,"You can add the follow resources:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Location"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App icon"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"android/quest/src/new-flavor/res/drawable/ic_app_logo.png"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App name"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"android/quest/src/new-flavor/res/values/strings.xml"))))),(0,r.kt)("p",null,"Where the app icon is an image of the appropriate size and the app name is an XML file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<resources>\n    <string name="app_name" translatable="false">New Flavor App Name</string>\n    <string name="authenticator_account_type" translatable="false">org.smartregister.fhircore.new-flavor</string>\n</resources>\n')),(0,r.kt)("h2",{id:"release-automation-with-tags"},"Release automation with tags"),(0,r.kt)("p",null,"As part of integrating Continuous Delivery(CD) into the development lifecycle, CI is set up to generate an APK."),(0,r.kt)("p",null,"The configuration requires the tag to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The product name: ",(0,r.kt)("em",{parentName:"li"},"opensrp")),(0,r.kt)("li",{parentName:"ul"},"Followed by the ",(0,r.kt)("em",{parentName:"li"},"version")," in the format ",(0,r.kt)("inlineCode",{parentName:"li"},"[0-9]+.[0-9]+.[0-9]+[0-9a-zA-Z.-]+")),(0,r.kt)("li",{parentName:"ul"},"Followed by an optional ",(0,r.kt)("em",{parentName:"li"},"suffix")," depending on the release e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"-alpha"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-rc"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-beta")," e.t.c")),(0,r.kt)("p",null,"The following are all valid tags that will trigger the generation of a release APK"),(0,r.kt)("blockquote",null,(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"opensrp-1.2.0"),(0,r.kt)("li",{parentName:"ul"},"opensrp-1.2.0-alpha"),(0,r.kt)("li",{parentName:"ul"},"opensrp-1.2.0-beta"),(0,r.kt)("li",{parentName:"ul"},"opensrp-1.2.0-rc1"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," e.g. when creating a tag for the ",(0,r.kt)("em",{parentName:"p"},"OpenSRP Version 1.2.0"),", use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git tag -a opensrp-1.2.0 -s  && git push origin opensrp-1.2.0\n")),(0,r.kt)("p",null,"When you run the command, you will be prompted to ",(0,r.kt)("em",{parentName:"p"},"add a message"),". The message should be of the format:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Template"),(0,r.kt)("th",{parentName:"tr",align:null},"Sample"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("pre",null," TITLE ",(0,r.kt)("br",null)," - Release note 1",(0,r.kt)("br",null)," - Release note 2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("pre",null," BETA RELEASE ",(0,r.kt)("br",null)," - Adds Login by PIN functionality ",(0,r.kt)("br",null)," - Fixes sync bug causing crash on install "))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For convention, the TITLE should be ",(0,r.kt)("em",{parentName:"p"},"Capitalized"),"."),(0,r.kt)("h3",{id:"deleting-a-tag"},"Deleting a tag"),(0,r.kt)("p",null,"Sometimes you may want to delete a tag, e.g. if you push an incorrect tag, need to update the tag message etc."),(0,r.kt)("p",null,"For example, to delete the opensrp-1.2.0 tag run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git push --delete origin opensrp-1.2.0 && git tag --delete opensrp-1.2.0\n")))}u.isMDXComponent=!0},8406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gitlabflow-d004f34eb8bed99cce0dade9bb835d70.png"}}]);