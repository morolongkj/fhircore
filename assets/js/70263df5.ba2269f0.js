"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[948],{3557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(5893),i=n(1151);const s={sidebar_position:2,sidebar_label:"App Features"},r="App Features",o={id:"features/app-features/readme",title:"App Features",description:"As of release v1.0.1 (September 21st, 2023)",source:"@site/docs/features/app-features/readme.mdx",sourceDirName:"features/app-features",slug:"/features/app-features/",permalink:"/features/app-features/",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/features/app-features/readme.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"App Features"},sidebar:"defaultSidebar",previous:{title:"Project Information",permalink:"/project-information/"},next:{title:"Admin Dashboard Features",permalink:"/features/admin-dashboard-features/"}},d={},l=[{value:"Patient and family registration",id:"patient-and-family-registration",level:2},{value:"Editing submitted data",id:"editing-submitted-data",level:3},{value:"Finding patients",id:"finding-patients",level:2},{value:"Patient records",id:"patient-records",level:2},{value:"Recording services",id:"recording-services",level:2},{value:"Input fields",id:"input-fields",level:4},{value:"Field styling",id:"field-styling",level:4},{value:"Progress bar",id:"progress-bar",level:4},{value:"Care plans",id:"care-plans",level:2},{value:"Offline mode",id:"offline-mode",level:2},{value:"Data syncing",id:"data-syncing",level:4},{value:"Fully offline record sync",id:"fully-offline-record-sync",level:4},{value:"Tasks",id:"tasks",level:2},{value:"In-app reports",id:"in-app-reports",level:2},{value:"Stock and commodity management",id:"stock-and-commodity-management",level:2},{value:"Multi-language support",id:"multi-language-support",level:2},{value:"Peer-to-peer data transfer",id:"peer-to-peer-data-transfer",level:2},{value:"Sync insights",id:"sync-insights",level:2},{value:"Known limitations and potential risks",id:"known-limitations-and-potential-risks",level:2},{value:"Roadmap features",id:"roadmap-features",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"app-features",children:"App Features"}),"\n",(0,a.jsxs)(t.p,{children:["As of release ",(0,a.jsx)(t.a,{href:"https://github.com/opensrp/fhircore/releases/tag/v1.0.1-opensrp-rc1",children:(0,a.jsx)(t.strong,{children:"v1.0.1"})})," (September 21st, 2023)"]}),"\n",(0,a.jsx)(t.h2,{id:"patient-and-family-registration",children:"Patient and family registration"}),"\n",(0,a.jsx)(t.p,{children:"A common step in community health programs is creating a list of all persons and households in a health worker's area. OpenSRP supports registering households and people quickly using simple forms."}),"\n",(0,a.jsx)(t.p,{children:"Patients and households are associated to a health worker through a location. A health worker is assigned to a specific area or set of areas, and every person they register is assigned to the same area or set of areas."}),"\n",(0,a.jsx)(t.p,{children:"In cases where patients visit or health workers cover multiple clinics across area, both the patient and the health worker would be assigned to a higher level location. For example, instead of being assigned to a village, they would be assigned to a facility area or county. That would result in a patient showing up on any of the facility patient lists in that higher level area, and for that patients medical record to be synced to the health worker's device."}),"\n",(0,a.jsx)(t.h3,{id:"editing-submitted-data",children:"Editing submitted data"}),"\n",(0,a.jsx)(t.p,{children:"You can configure the app to allow data editing to fix mistakes or account for changes to information like name or address. Configuration options give you the flexibility to specify what fields can be edited. It is important to assess the downstream impacts of edits when designing your app."}),"\n",(0,a.jsx)(t.h2,{id:"finding-patients",children:"Finding patients"}),"\n",(0,a.jsx)(t.p,{children:"Navigating to a patient quickly is paramount for health work, especially when in the community. Because it is common for OpenSRP to be used in places where many people may share similar names, we offer many ways for patient look-up."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(9030).Z+"",width:"1280",height:"737"})}),"\n",(0,a.jsx)(t.p,{children:'Patients can be searched by NAME or ID. This is a manual search where the patient list is updated after two characters are entered (the results update without pressing "enter"). The search will display patients only assigned to the health worker (Read: how patients are assigned to health workers - this is linked to the appropriate management section)'}),"\n",(0,a.jsx)(t.p,{children:"The ID can be a national ID number, a local ID number, or an app-generated ID. For a national ID number or local ID number, there is an option to either have the IDs be non-unique (there is no restriction on reusing IDs) or system-unique (it is enforced that IDs are not shared across the system). App-generated IDs are 32 character long strings that are always unique."}),"\n",(0,a.jsx)(t.p,{children:"Patients are listed in order of time overdue in each patient register, and can be configured to be listed according to other criteria. For households and patients, that means households with more tasks and more overdue tasks are listed first, and households with fewer tasks and fewer overdue tasks are listed last."}),"\n",(0,a.jsx)(t.h2,{id:"patient-records",children:"Patient records"}),"\n",(0,a.jsx)(t.p,{children:"Patient records can be configured to show specific information about the patient, such as their demographic details, as well as upcoming Tasks and list of recent visits. What information is shown, the order in which it is shown, and the color and highlighting of the information show are configurable."}),"\n",(0,a.jsx)(t.h2,{id:"recording-services",children:"Recording services"}),"\n",(0,a.jsx)(t.p,{children:"Patient and health service information is captured using forms with questions and fields. The app keeps the interaction as simple as possible and has error-checking to keep entered data accurate."}),"\n",(0,a.jsx)(t.h4,{id:"input-fields",children:"Input fields"}),"\n",(0,a.jsx)(t.p,{children:"A range of input fields are available: text/string, , number, boolean, single choice, multiple choice, dropdown, date picker, date and time picker, slider, attachment, display an image and display a label. Fields can be restricted to specific related entires \u2014 for example if there is a number entry used for phone number, it can be set to only accept a certain number of digits or else show an error message. Fields can also be set to required, which highlights the field with an error if the user tries to save the form without filling in that field. Each fIeld can have helper text which is accessible when the user taps a question mark icon."}),"\n",(0,a.jsx)(t.h4,{id:"field-styling",children:"Field styling"}),"\n",(0,a.jsx)(t.p,{children:"Field styling is flexible with regards to font size and styling. Labels for form can use any font (applying to the entire form), and individual words or sections can have fonts be styled as italic, bold, underline, and color. The back and next button colors and font can also be configured."}),"\n",(0,a.jsx)(t.p,{children:"To style without any changes in the FHIRCore/SDK, use HTML tags as part of the question text. The following tags are supported:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Bold:  ",(0,a.jsx)(t.code,{children:"<b>text </b>"})]}),"\n",(0,a.jsxs)(t.li,{children:["Italic: ",(0,a.jsx)(t.code,{children:"<i>text</i>"})]}),"\n",(0,a.jsxs)(t.li,{children:["Underline: ",(0,a.jsx)(t.code,{children:"<u>text</u>"})]}),"\n",(0,a.jsxs)(t.li,{children:["Strikethrough: ",(0,a.jsx)(t.code,{children:"<s>text</s>"})]}),"\n",(0,a.jsxs)(t.li,{children:["Coloring: ",(0,a.jsx)(t.code,{children:'<span style="color:#006EB8">text</span>'})]}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"progress-bar",children:"Progress bar"}),"\n",(0,a.jsx)(t.p,{children:"A form progress bar can be configured to show or not. A progress bar is helpful in multi-page forms. It shows how far into a form a user is based on the current question viewed within the current total number of questions \u2014 and not based on the number of fields answered."}),"\n",(0,a.jsx)(t.h2,{id:"care-plans",children:"Care plans"}),"\n",(0,a.jsx)(t.p,{children:"Care plans are the health service tasks and protocols a patient should receive depending on their status or condition, with the purpose of making sure the right services are provided to patients when they are supposed to be given. The tasks in the care plan are scheduled at the patient receives the updated status."}),"\n",(0,a.jsx)(t.p,{children:"For example, a patient who has just been recorded as pregnant will receive a schedule of antenatal visit tasks associated with their gestational age. Each task is completed based on completing a form associated with that task. For example, an antenatal visit in pregnancy week 32 might include a form to check for pregnant danger signs, baby heart beats per minute, and a counseling session, which the health worker can fill out."}),"\n",(0,a.jsx)(t.p,{children:"Tasks can be constrained with dates that make them inactive, active/due, overdue, and expired. Taking the example pregnancy scenario above, the week 32 pregnancy visit task can be inactive until week 30, then become active for weeks 30\u201332, then overdue in weeks 32-35, and expire after week 35."}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP has prebuilt care plans for antenatal care, postnatal care, childhood health, and maternal health."}),"\n",(0,a.jsx)(t.h2,{id:"offline-mode",children:"Offline mode"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP stores patient records entirely offline and is able to register patients and record services without internet or data access."}),"\n",(0,a.jsx)(t.h4,{id:"data-syncing",children:"Data syncing"}),"\n",(0,a.jsx)(t.p,{children:"When a user is offline and then gets access to the internet with the app is open, records sync automatically with the centralized cloud-based server. Syncing can take place at specific intervals (in order to save battery life) or triggered manually by the user."}),"\n",(0,a.jsx)(t.p,{children:"When offline, the most up-to-date patient data exists on the user's device. If a patient record is recorded on another offline device, the data from the more recent encounter is used."}),"\n",(0,a.jsx)(t.h4,{id:"fully-offline-record-sync",children:"Fully offline record sync"}),"\n",(0,a.jsx)(t.p,{children:"Sometimes, community health workers or other devices can be so remote as to never be connected to the internet or data connection. In this scenario, OpenSRP supports device-to-device data transfer to update a centralized cloud-based server. The way it works is a person with a device who does access the internet meets with the person with a device who never connects to the internet. Patient records are transferred up the line, from device to device, until records can be synced to the cloud to an internet-connected device."}),"\n",(0,a.jsx)(t.p,{children:"Data can be transferred without exposing the patient records in the OpenSRP app. For example, if a health worker does not have access to another health worker's patient data because they are assigned to a different location, data can still be transferred through their device and to the cloud."}),"\n",(0,a.jsx)(t.h2,{id:"tasks",children:"Tasks"}),"\n",(0,a.jsx)(t.p,{children:"Tasks are used to identify patients that are due for health services. They are meant to help health workers prioritize who to visit at any given time by prominently appearing in the register list views."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"task management",src:n(134).Z+"",width:"1280",height:"721"})}),"\n",(0,a.jsx)(t.p,{children:"Tasks in OpenSRP can fit into five categories: (1) inactive and not completable, (2) inactive but completable, (3) active and due, (4) overdue, and (5) expired. Tasks are represented in the app in both register lists and profiles in configurable colors. They are listed in order of due date, and can be configured to be listed according to other criteria stored in the Task."}),"\n",(0,a.jsx)(t.p,{children:"Tasks can be due on a specific day or for a time period. The primary settings for a task are the health service form that closes the task and time periods for when the task becomes active, remains active, becomes overdue, and expires."}),"\n",(0,a.jsx)(t.h2,{id:"in-app-reports",children:"In-app reports"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP can generate easy-to-understand indicators used by community health workers to track progress, celebrate successes, and learn about gaps in coverage.\nIndicators are calculated from a user's patient list (and so show a health worker's achievements) and are often tied to goals or targets set by health supervisors."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"in-app reporting",src:n(2303).Z+"",width:"1280",height:"687"})}),"\n",(0,a.jsx)(t.h2,{id:"stock-and-commodity-management",children:"Stock and commodity management"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP makes stock and commodity management easier for health workers to anticipate how much they need and thus avoid stock outs."}),"\n",(0,a.jsx)(t.p,{children:"When stock is received by a health worker, they use a consumption log form to document commodities received. As commodities are provided or used with patients during health services, stock is automatically deducted. If a stock level reaches a predetermined threshold, the app will highlight that commodity so the health worker can obtain more. During the next commodity refill, the app can calculate the correct balance the health worker should receive."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"stock management",src:n(2838).Z+"",width:"1280",height:"874"})}),"\n",(0,a.jsx)(t.h2,{id:"multi-language-support",children:"Multi-language support"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP supports multiple languages through translatable built in content and user managed translations of form and configuration content."}),"\n",(0,a.jsx)(t.h2,{id:"peer-to-peer-data-transfer",children:"Peer-to-peer data transfer"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP supports peer-to-peer data transfer using \u201cWiFi-direct\u201d technology so that 2 off-line devices can connect to each other and synchronize information from one device to another. The receiving device will only be able to view devices it has permission to view, even though it may receive and store in its device database information it does not have permission to view."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"p2p data transfer",src:n(8676).Z+"",width:"1280",height:"569"})}),"\n",(0,a.jsx)(t.h2,{id:"sync-insights",children:"Sync insights"}),"\n",(0,a.jsx)(t.p,{children:"Through sync insights OpenSRP makes it possible to understand which data has been synced back to the remote server and what data remains unsynced on your device. These insights help provide assurances that data is synced securely and timely. Sync insights also helps the health worker navigate and troubleshoot data connectivity issues, and is invaluable to teams when providing remote support."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"sync insights",src:n(6879).Z+"",width:"1280",height:"906"})}),"\n",(0,a.jsx)(t.h2,{id:"known-limitations-and-potential-risks",children:"Known limitations and potential risks"}),"\n",(0,a.jsx)(t.p,{children:"OpenSRP 2 allows a large amount of flexiblity in the creation of apps that run on it. This means that an app's correctness, usability, and effectiveness is dependent upon the content written for that app. To address this it is important to have a comprehensive testing and quality assurance process for the app's content."}),"\n",(0,a.jsx)(t.p,{children:"Relatedly, an app's content is run through the various software layers of OpenSRP 2, including the Android FHIR SDK and it's underlying libraries, e.g. cql-ruler. A change in these components may affect the way the content is interpreted, and it is therefore essential to validate existing app content against new releases of OpenSRP 2 before upgrading."}),"\n",(0,a.jsx)(t.h2,{id:"roadmap-features",children:"Roadmap features"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Draft and in-progress forms"}),"\n",(0,a.jsx)(t.li,{children:"Content versioning linked to release versioning"}),"\n",(0,a.jsx)(t.li,{children:"Questionnaire widget to capture GPS"}),"\n",(0,a.jsx)(t.li,{children:"Background capture of GPS linked to stored with specific actions"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9030:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/finding-patients-0738248d2c574dfcea6ad07ae4547e6f.png"},2303:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/in-app-reporting-71a570bb4141a56cf29bf445f5bcbcf1.png"},8676:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/p2p-7115a3f55d1404b0bb3d3f05dda733a7.png"},2838:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stock-1119bde45fab4a8c42c330d9777d1609.png"},6879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sync-insights-3a2e9c6026a941af494f15bedc891f14.png"},134:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tasks-6f8765872169644d905ab2c8346b37d4.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);