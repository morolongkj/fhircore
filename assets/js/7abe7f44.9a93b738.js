"use strict";(self.webpackChunkfhircore=self.webpackChunkfhircore||[]).push([[9261],{6052:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var t=n(5893),a=n(1151);const r={},o="Smart Vaccination Certificates",c={id:"engineering/android-app/writing-fhir/smart-vax-certs",title:"Smart Vaccination Certificates",description:"OpenSRP FHIR Core for Smart Vaccination Certificates for Android implements the Smart Certificates protocol for recording, storing, validation, and generating certificates verifying vaccination status. All the Patient data is eventually going to be mapped as an  International Patient Summary (IPS) document, i.e. as an electronic health record extract containing essential healthcare information about a subject of care. As specified in EN 17269 and ISO/DIS 27269, it is designed to support 'unplanned, cross border care', but it is not limited to this. It is intended to be international by providing a generic solutions for global application beyond a particular region or country.",source:"@site/docs/engineering/android-app/writing-fhir/smart-vax-certs.mdx",sourceDirName:"engineering/android-app/writing-fhir",slug:"/engineering/android-app/writing-fhir/smart-vax-certs",permalink:"/engineering/android-app/writing-fhir/smart-vax-certs",draft:!1,unlisted:!1,editUrl:"https://github.com/opensrp/fhircore/tree/main/docs/docs/engineering/android-app/writing-fhir/smart-vax-certs.mdx",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Sample FHIR resources",permalink:"/engineering/android-app/writing-fhir/sample-fhir-resources/"},next:{title:"Testing FHIR Resources",permalink:"/engineering/android-app/writing-fhir/testing-resources"}},s={},l=[{value:"Building and running the Android application in Android Studio",id:"building-and-running-the-android-application-in-android-studio",level:2},{value:"Currently supported Smart Vaccination Certificates",id:"currently-supported-smart-vaccination-certificates",level:2},{value:"Covid-19",id:"covid-19",level:3},{value:"In-progress Smart Vaccination Certificates",id:"in-progress-smart-vaccination-certificates",level:2}];function d(e){const i={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"smart-vaccination-certificates",children:"Smart Vaccination Certificates"}),"\n",(0,t.jsxs)(i.p,{children:["OpenSRP FHIR Core for Smart Vaccination Certificates for Android implements the Smart Certificates protocol for recording, storing, validation, and generating certificates verifying vaccination status. All the Patient data is eventually going to be mapped as an  ",(0,t.jsxs)(i.strong,{children:["International Patient Summary (",(0,t.jsx)(i.a,{href:"https://worldhealthorganization.github.io/ddcc/StructureDefinition-Patient-pre-uv-ips.html",children:"IPS"}),") document"]}),", i.e. as an electronic health record extract containing essential healthcare information about a subject of care. As specified in EN 17269 and ISO/DIS 27269, it is designed to support 'unplanned, cross border care', but it is not limited to this. It is intended to be international by providing a generic solutions for global application beyond a particular region or country."]}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["For information on the codebase, contributing, and sample data see the ",(0,t.jsx)(i.a,{href:"https://docs.google.com/drawings/d/1Fg2YeealVMRrRY9tls0BHhF01dScqgfaH280O7l_r9U/edit",children:"code documentation for the FHIR Core application"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"building-and-running-the-android-application-in-android-studio",children:"Building and running the Android application in Android Studio"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Complete the ",(0,t.jsx)(i.a,{href:"https://github.com/opensrp/fhircore/tree/main/android",children:"build instructions for FHIR Core"})," generic to all FHIR Core applications"]}),"\n",(0,t.jsxs)(i.li,{children:["In Android Studio, select the ",(0,t.jsx)(i.code,{children:"app"})," build profile"]}),"\n",(0,t.jsxs)(i.li,{children:["In Android Studio, from the ",(0,t.jsx)(i.code,{children:"Run"})," menu select the ",(0,t.jsx)(i.code,{children:"Run 'app'"})," option"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"currently-supported-smart-vaccination-certificates",children:"Currently supported Smart Vaccination Certificates"}),"\n",(0,t.jsx)(i.h3,{id:"covid-19",children:"Covid-19"}),"\n",(0,t.jsxs)(i.p,{children:["In a mission to help digitize the management of the immunization process against Covid-19, OpenSRP FHIR Core can enroll people in a digital health platform, track their vaccination status, and produce Digital Smart Vaccine Certificates embedded in QR codes. This is inline with the WHO Digital Documentation of COVID-19 Certificates: Vaccination Status (DDCC",":VS",") protocol."]}),"\n",(0,t.jsx)(i.p,{children:"For continuity of care the application supports the following use cases"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Paper first - A guideline-based vaccine administration is recorded on paper. After the vaccination event, data about it can be entered into a Digital Health Solution."}),"\n",(0,t.jsx)(i.li,{children:"Offline digital - A guideline-based vaccine administration is recorded using an offline secure Digital Health Solution, with the content subsequently uploaded to an online Digital Health Solution."}),"\n",(0,t.jsx)(i.li,{children:"Online digital - A guideline-based vaccine administration is recorded using an online secure Digital Health Solution which updates the content in real time."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"While for Proof of Vaccination"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["A Verifier service verifies a DDCC",":VS"," using digital cryptographic processes in an offline/online mode."]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"The application supports the following workflow:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Patient arrives at a clinic or a facility in which they seek to be Immunized against the Covid-19 virus"}),"\n",(0,t.jsx)(i.li,{children:"The patient presents any form of identification at the vaccination clinic and is authenticated by healthcare worker (HCW) (authentication process depends on the country norm, e.g. an ID card or only name and date of birth)."}),"\n",(0,t.jsx)(i.li,{children:"HCW registers the patient by capturing their name and date of birth only."}),"\n",(0,t.jsx)(i.li,{children:"The HCW will first query the system via a search by name (first name or last name) to ensure that the patient details are not preexisting."}),"\n",(0,t.jsx)(i.li,{children:"The HCW retrieves a new paper card with a Health Certificate ID (HCID) which could be in the form of a barcode."}),"\n",(0,t.jsx)(i.li,{children:"The HCW scans the barcode with the HCID and links this to the patient's details."}),"\n",(0,t.jsx)(i.li,{children:"After the details are captured and verified, the HCW will give the patient the  vaccine dose, and record the vaccination details in app"}),"\n",(0,t.jsxs)(i.li,{children:["The following vaccination data elements will be recorded:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Vaccine or prophylaxis,"}),"\n",(0,t.jsx)(i.li,{children:"Vaccine brand,"}),"\n",(0,t.jsx)(i.li,{children:"Vaccine manufacturer,"}),"\n",(0,t.jsx)(i.li,{children:"Vaccine market authorization holder,"}),"\n",(0,t.jsx)(i.li,{children:"Vaccine batch number,"}),"\n",(0,t.jsx)(i.li,{children:"Date of vaccination,"}),"\n",(0,t.jsx)(i.li,{children:"Dose number,"}),"\n",(0,t.jsx)(i.li,{children:"Total doses,"}),"\n",(0,t.jsx)(i.li,{children:"Country of vaccination,"}),"\n",(0,t.jsx)(i.li,{children:"Administering center,"}),"\n",(0,t.jsx)(i.li,{children:"Health worker identifier,"}),"\n",(0,t.jsx)(i.li,{children:"Disease or agent targeted,"}),"\n",(0,t.jsx)(i.li,{children:"Due date of next dose (if applicable)"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Once all the fields are validated, the vaccination bundle is submitted to the health portal that will be used to collect and track the Immunization details"}),"\n",(0,t.jsx)(i.li,{children:"The HCW at the facility can then use the web portal to view certificates generated by the certificate generation service, which also returns a QR code that can be printed on a paper card or sent as a digital receipt."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"in-progress-smart-vaccination-certificates",children:"In-progress Smart Vaccination Certificates"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Yellow Fever"}),"\n",(0,t.jsx)(i.li,{children:"Measles Mumps, and Rubella (MMR)"}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>o});var t=n(7294);const a={},r=t.createContext(a);function o(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);