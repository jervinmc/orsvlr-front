(window.webpackJsonp=window.webpackJsonp||[]).push([[96,64],{608:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n(1),c=(n(32),n(5),n(43),n(45),n(452),n(303),n(25),n(62),n(304),n(79),n(94),{created:function(){this.loadData()},data:function(){var e;return e={faqItems:[],privacy:!1,faq:!1,buttonLoad:!1,image:"",account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(r.a)(e,"selectedItem",{}),Object(r.a)(e,"isLoading",!1),Object(r.a)(e,"users",[]),Object(r.a)(e,"dialogAdd",!1),Object(r.a)(e,"isEdit",!1),Object(r.a)(e,"image",""),Object(r.a)(e,"img_holder",""),Object(r.a)(e,"openTerms",!1),Object(r.a)(e,"address",""),Object(r.a)(e,"contacts",""),Object(r.a)(e,"email",""),Object(r.a)(e,"settings",[]),Object(r.a)(e,"isAdd",!0),Object(r.a)(e,"headers",[{text:"ID",value:"id"},{text:"Page",value:"page"},{text:"Image",value:"image"},{text:"Actions",value:"opt"},,]),e},methods:{routeto:function(){window.location.href="https://facebook.com/villaleonoraresort"},settingsGetall:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/settings/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.settings=t.data,e.settings.history=t.data[0].history,e.settings.contacts=t.data[0].contacts,e.settings.address=t.data[0].address,e.settings.email=t.data[0].email,e.carousel1_holder=t.data[0].carousel1,e.carousel2_holder=t.data[0].carousel2,e.carousel3_holder=t.data[0].carousel3,e.history_images.push(e.carousel1_holder),e.history_images.push(e.carousel2_holder),e.history_images.push(e.carousel3_holder),e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},faqGetall:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/faq/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.faqItems=t.data,e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},editValue:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.buttonLoad=!0,n=new FormData,null!=e.image&&""!=e.image&&n.append("image",e.image),t.next=5,e.$axios.patch("/content/".concat(e.selectedItem.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.buttonLoad=!1,e.isEdit=!1,e.loadData()}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}},route:function(e){this.$router.push("/".concat(e))},deleteValue:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buttonLoad=!0,e.$axios.delete("/events/".concat(e.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.deleteConfirmation=!1,e.buttonLoad=!1,alert("Successfully Deleted!"),e.loadData()}));case 2:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){this.selectedItem=e,this.deleteConfirmation=!0},formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(e){this.selectedItem=e,this.isEdit=!0},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,t.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=e},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.settingsGetall(),this.account_type=localStorage.getItem("account_type"),this.eventsGetall(),this.faqGetall()},eventsGetall:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/content/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){for(var n in console.log(t.data),e.events=t.data,e.events)"pool"==e.events[n].page&&(e.image=e.events[n].image);e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}),l=n(93),d=n(134),h=n.n(d),v=n(218),m=n(206),f=n(174),y=n(443),_=n(444),w=n(635),C=n(636),I=n(637),x=n(638),k=n(205),O=n(447),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[n("v-dialog",{model:{value:e.privacy,callback:function(t){e.privacy=t},expression:"privacy"}},[n("v-card",{staticClass:"pa-16"},[n("p",[e._v('Villa Leonora Resorts and Venue respects your interest in us. We understand and respect your privacy as part of our partnership. This Privacy Statement ("Privacy Statement") is meant to explain: How Villa Leonora Resorts and Venue collects, uses, processes, secures, and stores information. What kind(s) of information we collect. How you can edit and delete certain information and change preferences. This Privacy Statement does not apply to the company\'s practices outside this website, does not own or control, or to people that Villa Leonora Resorts and Venue does not employ or manage. This Privacy Statement may be updated without prior notice to reflect changes in our information practices or relevant laws. When we make changes, we will post them here. If we make material changes to this Privacy Statement, we will place a notice on our website or send a message to the e-mail address you provided to us. You may revisit this section of our website from time to time since, by doing so, you agree to accept any changes to our Privacy Statement. This Privacy Statement only addresses the use and sharing of information we gather from you on our website unless otherwise stated.')]),e._v(" "),n("p",[e._v("How Do We Use the Information We Receive? Your information is the information that's required when you want to experience the special feature of the system, it is the information you choose to share. Villa Leonora Resorts and Venue uses the information we collect from you for the following purposes:")]),e._v(" "),n("p",[e._v("To provide advertisements to you about our products and services on this website. To provide services to you. To contact or notify you if necessary. To develop new services and products. To satisfy your need and promote healthy eating. To provide you a mock-up plan as a guide to you. To comply with our objectives, policies and procedures.")]),e._v(" "),n("p",[e._v("Data Integrity Villa Leonora Resorts and Venue uses personally identifiable information only for the purposes it was acquired and in line with the terms of this Privacy Statement. We periodically review our data collection, storage, and processing practices to ensure that we are only collecting, storing, and processing personally identifiable information necessary to provide or improve our website, services, and products, or as otherwise permitted by this Privacy Statement. Regardless of the preceding, we rely on you to keep your personally identifiable information up to date and correct it as needed.")]),e._v(" "),n("p",[e._v("We Protect Personal Information We believe we have adequate administrative, technical, and physical safeguards in place to protect the personal information you provide on this website from unintentional, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use, as well as other forms of illegal processing. While we take steps to protect your information using the above and other security measures, please keep in mind that no administrative, technical, or physical safeguards can guarantee that the personal information you provide on this website or data transmitted over the Internet or any other public network is entirely secure. The personal information you provide to Villa Leonora Resorts and Venue will not be sold or rented to anyone else. Villa Leonora Resorts and Venue will not sell or rent the personal information you provide to us online to any third party.")]),e._v(" "),n("p",[e._v("Your Security Obligations It would help if you kept your password and computer safe from unauthorized access. When you've finished using a shared computer, please sign off. Do not include sensitive information in your emails because they are not guaranteed to be safe against interception. We don't ask for passwords in emails very often, and you should presume that it's a phishing attempt if you do. YOU MUST DO WHAT YOU CAN TO ENSURE THE SECURITY OF YOUR PERSONAL INFORMATION IN A REASONABLE MANNER.")]),e._v(" "),n("p",[e._v("Public Forums When you contribute to a public area or feature, such as a chat room, bulletin board, list serve , wall, blog, wiki or other open forum that we may make available on through our website or an authorized third-party website, the information that you submit may be made available to the general public. We do not restrict the distribution of personal information that you voluntarily disclose in these public forums, and so that information can be collected and used by others. For this reason, we recommend that you do not submit any sensitive information, including your full name, home address, phone number, other information that would enable other users to locate you, or financial information on these areas. We cannot prevent such information from being used in a manner that may violate this Privacy Statement or applicable law.")]),e._v(" "),n("p",[e._v("What Kind(s) of Information We Collect? TThe information that you provided us is voluntarily disclose when you choose to book for the site.")]),e._v(" "),n("p",[e._v("Booking information When you sign up for Villa Leonora Resorts and Venue you are required to provide information such as your name, address, contact information, email address.")]),e._v(" "),n("p",[e._v("Other information we receive about you We receive data when you reach us to our contact number or email us when you inquire, suggest, complain or other concern reaching us.")]),e._v(" "),n("p",[e._v("Access and Correction We provide you with access to personal information we have retained about you and the ability to review, correct and update the information where it is inaccurate.")]),e._v(" "),n("p",[e._v(' Your Choices We offer you certain choices about how we communicate with you and what information. You may withdraw any consent you previously provided to us. You can choose not to receive marketing communications from us by clicking on the unsubscribe link in our marketing emails or contacting us as specified in the "How to Contact Us" section below. Please include your name, contact number and email address if you send us your request by email.')]),e._v(" "),n("p",[e._v("How to Contact US If you have any questions or comments about this Privacy Statement please email us at villaleonora00@gmail.com, call us at 09171921876.")]),e._v(" "),n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.privacy=!1}}},[e._v("Back ")])],1)],1)],1),e._v(" "),n("v-dialog",{model:{value:e.faq,callback:function(t){e.faq=t},expression:"faq"}},[n("v-card",[n("div",{staticClass:"text-h5 pt-5",attrs:{align:"center"}},[n("b",[e._v(" FAQs ")])]),e._v(" "),n("div",{staticClass:"pa-16"},[n("div",[n("v-expansion-panels",e._l(e.faqItems,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[e._v("\n                  "+e._s(t.question)+"\n                ")]),e._v(" "),n("v-expansion-panel-content",[e._v("\n                  "+e._s(t.answer)+"\n                ")])],1)})),1)],1)]),e._v(" "),n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.faq=!1}}},[e._v("Back ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{width:"900",persistent:""},model:{value:e.openTerms,callback:function(t){e.openTerms=t},expression:"openTerms"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[n("b",[e._v("VILLA LEONORA TERMS AND CONDITIONS")])]),e._v(" "),n("div",{staticClass:"px-10 pt-10",attrs:{align:"start"}},[n("b",[e._v(" 1. PAYMENT TERMS")])]),e._v(" "),n("div",{staticClass:"pa-10"},[n("div",[e._v("\n            Provisional bookings must be confirmed with 50% of the total Fee due\n            as your booking deposit made payable to the Business. We reserve the\n            right to keep this deposit if you cancel. If we are able to re-let\n            the Venue for the same values we will refund this deposit or part of\n            it at our discretion, but may keep a sum to cover administration\n            time.\n          ")]),e._v(" "),n("div",{staticClass:"pt-10"},[e._v("\n            b. One month before the event, the following is due:\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("i. The balance of the Fee;")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            ii. Damages deposit depending on the damage.We will return your\n            deposit within 3 Working Days after the event, subject to any\n            deductions we may require for Damage out of this sum. We will charge\n            the Client for any additional Damage caused by Guests and others\n            attending the Event. Note, this is only in the case of Student\n            Events.\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            iii. Any additional costs(including without limitation, additional\n            heating days, wedding planner services).\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            c. A Statutory Right to Interest (SRI) will be chargeable at seven\n            per cent (7%) over the payment mode base rate on all sums unpaid on\n            the due date of payment.\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            d. The Client shall not be entitled to any reduction in the cost if\n            the number of Guests attending the event is less than originally\n            booked.\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            e. At the time of booking, the Client shall provide details of the\n            estimated number of Guests attending the event.\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("f. All payments are in pounds sterling.")]),e._v(" "),n("div",{staticClass:"pt-5"},[n("b",[e._v("2. CANCELLATION BY CLIENT")])]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            a. A confirmed booking shall only be deemed to be cancelled when the\n            Business receives written notification of the cancellation from the\n            Client.\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            b. The period of notice cancellation fee will be:\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            i. 90 days or more –deposit only (subject to paragraph 1(a) above);\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            ii. Between 30 and 90 days– 75% of pre-booked total Fee; and\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            iii. Less than 30 days –100% of pre-booked total Fee.\n          ")]),e._v(" "),n("div",{staticClass:"pt-5"},[n("b",[e._v("3. CANCELLATION BY THE BUSINESS")])]),e._v(" "),n("div",{staticClass:"pt-5"},[e._v("\n            a. The business reserves the right to cancel the event if:\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            i. the Venue has to be closed due to Force Majeure;\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            ii. the Client is in arrears with any payment due to the Business;\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            iii. the Business has reasonable grounds to believe that the Client\n            may not pay the Business the balance of the Fee by the due date and\n            the Business has requested the Client to explain the position and\n            the Client has not done so satisfactorily;\n          ")]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[e._v("\n            iv. the Business discovers, before the Client has paid the balance\n            of the Fee, that the Client has deliberately concealed information,\n            or deliberately given the Business incorrect information, about the\n            Event in circumstances where (if the Client had not done so) it\n            would have been reasonably foreseeable that the Business would not\n            have accepted the booking\n          ")])]),e._v(" "),n("div",{staticClass:"px-10 pt-10",attrs:{align:"start"}},[n("b",[e._v(" 4. ADDITIONAL TERMS")])]),e._v(" "),n("div",{staticClass:"pl-16 pt-5"},[n("br"),e._v("\n              I. If a property of the resort is missing or damaged the customer will have to pay."),n("br"),e._v("\n              II. If a customer exceeds the number of people in their package or pax the customer will pay the additional head. (the price Depends on the package)"),n("br"),e._v("\n              III. If there are 12 years old children in a group. There must be a guardian for the child at all times."),n("br"),e._v("\n              IV. Running beside of the pools are strictly prohibited and it might cause an accident."),n("br"),e._v("\n              V. If there are missing items of a customer the staff of the resort are not to blame."),n("br"),e._v("\n              a. The reservation for service is 50% deposit and the other 50% are needed to be pay on the day of the reservation."),n("br"),e._v("\n              VI. Customers have to pay their remaining balance of their reservation upon check-in. "),n("br"),e._v("\n              VII. Add-ons and other payment are paid upon check-out"),n("br")]),e._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.openTerms=!1}}},[e._v("Back ")])],1)],1)],1)],1)],1),e._v(" "),n("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[e._m(0),e._v(" "),n("div",[e._v("\n        "+e._s(e.settings.address)+"\n      ")]),e._v(" "),n("div",{staticClass:"pb-5"},[e._v(e._s(e.settings.contacts))]),e._v(" "),n("div",{staticClass:"pb-5"},[e._v("\n        "+e._s(e.settings.email)+"\n      ")]),e._v(" "),n("div",[n("div",{attrs:{align:"center"}},[n("v-icon",{on:{click:e.routeto}},[e._v(" mdi-facebook ")]),e._v(" "),n("span",[e._v("villaleonoraresort")])],1)])]),e._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center",attrs:{width:"100vw",color:"#003853",height:"100"}},[n("v-row",[n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"},on:{click:function(t){return e.route("contacts")}}},[n("b",{staticStyle:{cursor:"pointer"}},[e._v("CONTACTS")])]),e._v(" "),n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n("b",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.openTerms=!0}}},[e._v("TERMS AND CONDITIONS")])]),e._v(" "),n("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(t){e.privacy=!0}}},[n("b",[e._v("PRIVACY")])]),e._v(" "),n("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(t){e.faq=!0}}},[n("b",[e._v("FAQS")])])],1)],1)],1)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-h4 pb-5"},[n("b",[e._v("Villa Leonora")])])}],!1,null,null,null);t.default=component.exports;h()(component,{VBtn:v.a,VCard:m.a,VCardActions:f.a,VCol:y.a,VDialog:_.a,VExpansionPanel:w.a,VExpansionPanelContent:C.a,VExpansionPanelHeader:I.a,VExpansionPanels:x.a,VIcon:k.a,VRow:O.a})},667:function(e,t,n){"use strict";n.r(t);var o=n(31),r=(n(94),n(25),n(62),n(304),n(5),n(79),{data:function(){return{isLoading:!1,pools:[]}},created:function(){this.loadData()},methods:{cancel:function(){},formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},route:function(e){this.$router.push("/pools_details/"+e)},loadData:function(){this.poolsGetall()},poolsGetall:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/pools/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),e.pools=t.data,e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}),c=n(93),l=n(134),d=n.n(l),h=n(218),v=n(206),m=n(443),f=n(433),y=n(171),_=n(447),w=n(652),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._m(0),e._v(" "),e._l(5,(function(t){return e.isLoading?n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}}):e._e()})),e._v(" "),e._l(e.pools,(function(i){return n("v-row",{key:i},[n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:i.image,height:"400"}})],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-card",{staticClass:"pa-5",attrs:{elevation:"5",height:"300"}},[n("div",{staticClass:"text-h4 pb-5",attrs:{align:"center"}},[n("b",[e._v(e._s(i.package))])]),e._v(" "),n("v-divider"),e._v(" "),n("div",[e._v("\n          "+e._s(i.descriptions)+"\n      ")]),e._v(" "),n("div",{staticClass:"pt-16",attrs:{align:"end"}},[n("v-row",[n("v-col",[n("div",[n("div",{staticClass:"text-h6"},[e._v("Php "+e._s(e.formatPrice(i.price))+"/ per night")])])]),e._v(" "),n("v-col",[n("v-btn",{attrs:{depressed:"",color:"#2E2E2E",dark:""},on:{click:function(t){return e.route(i.id)}}},[e._v(" View Pool")])],1)],1)],1)],1)],1)],1)}))],2)}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-10",attrs:{align:"center"}},[n("div",{staticClass:"text-h4 pt-5"},[n("b",[e._v("Villa Leonara")])]),e._v(" "),n("div",{staticStyle:{color:"#FF0909"}},[e._v("\n      Resort and Event Venue\n    ")]),e._v(" "),n("div",{staticStyle:{"font-size":"30px"}},[e._v("\n      PRIVATE & PUBLIC POOL\n    ")]),e._v(" "),n("div",[e._v("\n      Explore our amazing pools below\n\n    ")])])}],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:h.a,VCard:v.a,VCol:m.a,VDivider:f.a,VImg:y.a,VRow:_.a,VSkeletonLoader:w.a})},719:function(e,t,n){"use strict";n.r(t);var o=n(31),r=n(1),c=(n(32),n(5),n(43),n(45),n(452),n(303),n(25),n(62),n(304),n(79),n(94),{created:function(){this.loadData()},data:function(){var e;return e={buttonLoad:!1,image:"",account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(r.a)(e,"selectedItem",{}),Object(r.a)(e,"isLoading",!1),Object(r.a)(e,"users",[]),Object(r.a)(e,"dialogAdd",!1),Object(r.a)(e,"isEdit",!1),Object(r.a)(e,"image",""),Object(r.a)(e,"img_holder",""),Object(r.a)(e,"isAdd",!0),Object(r.a)(e,"headers",[{text:"ID",value:"id"},{text:"Page",value:"page"},{text:"Image",value:"image"},{text:"Actions",value:"opt"},,]),e},methods:{editValue:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.buttonLoad=!0,n=new FormData,null!=e.image&&""!=e.image&&n.append("image",e.image),t.next=5,e.$axios.patch("/content/".concat(e.selectedItem.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.buttonLoad=!1,e.isEdit=!1,e.loadData()}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}},deleteValue:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buttonLoad=!0,e.$axios.delete("/events/".concat(e.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.deleteConfirmation=!1,e.buttonLoad=!1,alert("Successfully Deleted!"),e.loadData()}));case 2:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){this.selectedItem=e,this.deleteConfirmation=!0},formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(e){this.selectedItem=e,this.isEdit=!0},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.isLoading=!0,n.next=3,t.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=e},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.account_type=localStorage.getItem("account_type"),this.eventsGetall()},eventsGetall:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/content/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){for(var n in console.log(t.data),e.events=t.data,e.events)"pool"==e.events[n].page&&(e.image=e.events[n].image);e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}),l=n(93),d=n(134),h=n.n(d),v=n(443),m=n(171),f=n(447),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-img",{attrs:{align:"start"}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{cols:"12",align:"center"}},[0!=e.events.length?n("v-img",{attrs:{src:e.image,height:"450"}}):e._e()],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;h()(component,{VCol:v.a,VImg:m.a,VRow:f.a})},790:function(e,t,n){"use strict";n.r(t);var o=n(608),r=n(719),c={components:{PoolsContainer:n(667).default,FooterAll:o.default,HeroPool:r.default}},l=n(93),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("hero-pool")],1),e._v(" "),n("pools-container"),e._v(" "),n("div",[n("footer-all")],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{PoolsContainer:n(667).default})}}]);