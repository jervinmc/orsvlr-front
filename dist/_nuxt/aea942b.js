(window.webpackJsonp=window.webpackJsonp||[]).push([[92,50],{608:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(1),c=(n(32),n(5),n(43),n(45),n(452),n(303),n(25),n(62),n(304),n(79),n(94),{created:function(){this.loadData()},data:function(){var t;return t={faqItems:[],privacy:!1,faq:!1,buttonLoad:!1,image:"",account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(r.a)(t,"selectedItem",{}),Object(r.a)(t,"isLoading",!1),Object(r.a)(t,"users",[]),Object(r.a)(t,"dialogAdd",!1),Object(r.a)(t,"isEdit",!1),Object(r.a)(t,"image",""),Object(r.a)(t,"img_holder",""),Object(r.a)(t,"openTerms",!1),Object(r.a)(t,"address",""),Object(r.a)(t,"contacts",""),Object(r.a)(t,"email",""),Object(r.a)(t,"settings",[]),Object(r.a)(t,"isAdd",!0),Object(r.a)(t,"headers",[{text:"ID",value:"id"},{text:"Page",value:"page"},{text:"Image",value:"image"},{text:"Actions",value:"opt"},,]),t},methods:{routeto:function(){window.location.href="https://facebook.com/villaleonoraresort"},settingsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/settings/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.settings=e.data,t.settings.history=e.data[0].history,t.settings.contacts=e.data[0].contacts,t.settings.address=e.data[0].address,t.settings.email=e.data[0].email,t.carousel1_holder=e.data[0].carousel1,t.carousel2_holder=e.data[0].carousel2,t.carousel3_holder=e.data[0].carousel3,t.history_images.push(t.carousel1_holder),t.history_images.push(t.carousel2_holder),t.history_images.push(t.carousel3_holder),t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},faqGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/faq/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.faqItems=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},editValue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buttonLoad=!0,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),e.next=5,t.$axios.patch("/content/".concat(t.selectedItem.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.isEdit=!1,t.loadData()}));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},route:function(t){this.$router.push("/".concat(t))},deleteValue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonLoad=!0,t.$axios.delete("/events/".concat(t.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.deleteConfirmation=!1,t.buttonLoad=!1,alert("Successfully Deleted!"),t.loadData()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){this.selectedItem=t,this.deleteConfirmation=!0},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(t){this.selectedItem=t,this.isEdit=!0},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=t},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.settingsGetall(),this.account_type=localStorage.getItem("account_type"),this.eventsGetall(),this.faqGetall()},eventsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/content/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){for(var n in console.log(e.data),t.events=e.data,t.events)"pool"==t.events[n].page&&(t.image=t.events[n].image);t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(93),d=n(134),v=n.n(d),h=n(218),f=n(206),m=n(174),_=n(443),C=n(444),w=n(635),y=n(636),x=n(637),k=n(638),I=n(205),E=n(447),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[n("v-dialog",{model:{value:t.privacy,callback:function(e){t.privacy=e},expression:"privacy"}},[n("v-card",{staticClass:"pa-16"},[t._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, laoreet a orci nec, rhoncus sodales ipsum. Cras dignissim vitae elit quis suscipit. Sed suscipit dolor lectus, sit amet dapibus tellus aliquet eu. Nunc nec mi feugiat, ultrices dolor vitae, maximus turpis. Aenean varius diam massa, a condimentum erat tempus et. Fusce fermentum porttitor est et molestie. Aliquam consequat purus sed ligula auctor semper. Ut laoreet ex nulla, et rutrum leo dapibus vel. In hac habitasse platea dictumst. Etiam vehicula vitae massa vitae imperdiet. Morbi non ligula diam. In bibendum, ex in mattis vestibulum, tortor arcu blandit urna, vitae facilisis dui tellus nec arcu. Etiam in tellus urna.\n       "),n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.privacy=!1}}},[t._v("Back ")])],1)],1)],1),t._v(" "),n("v-dialog",{model:{value:t.faq,callback:function(e){t.faq=e},expression:"faq"}},[n("v-card",[n("div",{staticClass:"text-h5 pt-5",attrs:{align:"center"}},[n("b",[t._v(" FAQs ")])]),t._v(" "),n("div",{staticClass:"pa-16"},[n("div",[n("v-expansion-panels",t._l(t.faqItems,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[t._v("\n                "+t._s(e.question)+"\n              ")]),t._v(" "),n("v-expansion-panel-content",[t._v("\n                "+t._s(e.answer)+"\n              ")])],1)})),1)],1)]),t._v(" "),n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.faq=!1}}},[t._v("Back ")])],1)],1)],1),t._v(" "),n("v-dialog",{attrs:{width:"900",persistent:""},model:{value:t.openTerms,callback:function(e){t.openTerms=e},expression:"openTerms"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[n("b",[t._v("VILLA LEONORA TERMS AND CONDITIONS")])]),t._v(" "),n("div",{staticClass:"px-10 pt-10",attrs:{align:"start"}},[n("b",[t._v(" 1. PAYMENT TERMS")])]),t._v(" "),n("div",{staticClass:"pa-10"},[n("div",[t._v("\n          Provisional bookings must be confirmed with 50% of the total Fee due\n          as your booking deposit made payable to the Business. We reserve the\n          right to keep this deposit if you cancel. If we are able to re-let\n          the Venue for the same values we will refund this deposit or part of\n          it at our discretion, but may keep a sum to cover administration\n          time.\n        ")]),t._v(" "),n("div",{staticClass:"pt-10"},[t._v("\n          b. One month before the event, the following is due:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("i. The balance of the Fee;")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. Damages deposit depending on the damage.We will return your\n          deposit within 3 Working Days after the event, subject to any\n          deductions we may require for Damage out of this sum. We will charge\n          the Client for any additional Damage caused by Guests and others\n          attending the Event. Note, this is only in the case of Student\n          Events.\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. Any additional costs(including without limitation, additional\n          heating days, wedding planner services).\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          c. A Statutory Right to Interest (SRI) will be chargeable at seven\n          per cent (7%) over the payment mode base rate on all sums unpaid on\n          the due date of payment.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          d. The Client shall not be entitled to any reduction in the cost if\n          the number of Guests attending the event is less than originally\n          booked.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          e. At the time of booking, the Client shall provide details of the\n          estimated number of Guests attending the event.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("f. All payments are in pounds sterling.")]),t._v(" "),n("div",{staticClass:"pt-5"},[n("b",[t._v("2. CANCELLATION BY CLIENT")])]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          a. A confirmed booking shall only be deemed to be cancelled when the\n          Business receives written notification of the cancellation from the\n          Client.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          b. The period of notice cancellation fee will be:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          i. 90 days or more –deposit only (subject to paragraph 1(a) above);\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. Between 30 and 90 days– 75% of pre-booked total Fee; and\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. Less than 30 days –100% of pre-booked total Fee.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[n("b",[t._v("3. CANCELLATION BY THE BUSINESS")])]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          a. The business reserves the right to cancel the event if:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          i. the Venue has to be closed due to Force Majeure;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. the Client is in arrears with any payment due to the Business;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. the Business has reasonable grounds to believe that the Client\n          may not pay the Business the balance of the Fee by the due date and\n          the Business has requested the Client to explain the position and\n          the Client has not done so satisfactorily;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iv. the Business discovers, before the Client has paid the balance\n          of the Fee, that the Client has deliberately concealed information,\n          or deliberately given the Business incorrect information, about the\n          Event in circumstances where (if the Client had not done so) it\n          would have been reasonably foreseeable that the Business would not\n          have accepted the booking\n        ")])]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.openTerms=!1}}},[t._v("Back ")])],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[t._m(0),t._v(" "),n("div",[t._v("\n      "+t._s(t.settings.address)+"\n    ")]),t._v(" "),n("div",{staticClass:"pb-5"},[t._v(t._s(t.settings.contacts))]),t._v(" "),n("div",{staticClass:"pb-5"},[t._v("\n      "+t._s(t.settings.email)+"\n    ")]),t._v(" "),n("div",[n("div",{attrs:{align:"center"}},[n("v-icon",{on:{click:t.routeto}},[t._v(" mdi-facebook ")]),t._v(" "),n("span",[t._v("villaleonoraresort")])],1)])]),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center",attrs:{width:"100vw",color:"#003853",height:"100"}},[n("v-row",[n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"},on:{click:function(e){return t.route("contacts")}}},[n("b",{staticStyle:{cursor:"pointer"}},[t._v("CONTACTS")])]),t._v(" "),n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n("b",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.openTerms=!0}}},[t._v("TERMS AND CONDITIONS")])]),t._v(" "),n("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(e){t.privacy=!0}}},[n("b",[t._v("PRIVACY")])]),t._v(" "),n("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(e){t.faq=!0}}},[n("b",[t._v("FAQS")])])],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-h4 pb-5"},[n("b",[t._v("Villa Leonora")])])}],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:f.a,VCardActions:m.a,VCol:_.a,VDialog:C.a,VExpansionPanel:w.a,VExpansionPanelContent:y.a,VExpansionPanelHeader:x.a,VExpansionPanels:k.a,VIcon:I.a,VRow:E.a})},665:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(94),n(25),n(62),n(304),n(5),n(79),{data:function(){return{isLoading:!1,events:[]}},created:function(){this.loadData()},methods:{formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},route:function(){this.$router.push("/contacts")},loadData:function(){this.eventsGetall()},eventsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/events/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.events=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(93),l=n(134),d=n.n(l),v=n(218),h=n(206),f=n(443),m=n(433),_=n(171),C=n(447),w=n(652),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._l(5,(function(e){return t.isLoading?n("v-skeleton-loader",{key:e,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}}):t._e()})),t._v(" "),t._l(t.events,(function(i){return n("v-row",{key:i},[n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:i.image,height:"400"}})],1),t._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-card",{staticClass:"pa-5",attrs:{elevation:"5",height:"300"}},[n("div",{staticClass:"text-h4 pb-5",attrs:{align:"center"}},[n("b",[t._v(t._s(i.package))])]),t._v(" "),n("v-divider"),t._v(" "),n("div",[t._v("\n          "+t._s(i.descriptions)+"\n        ")]),t._v(" "),n("div",{staticClass:"pt-16",attrs:{align:"end"}},[n("v-row",[n("v-col",[n("div",[n("div",{staticClass:"text-h6"},[t._v("\n                  Php "+t._s(t.formatPrice(i.price))+"/ per night\n                ")])])]),t._v(" "),n("v-col",[n("v-btn",{attrs:{depressed:"",color:"#2E2E2E",dark:""},on:{click:function(e){return t.route(i.id)}}},[t._v("\n                Inquire")])],1)],1)],1)],1)],1)],1)}))],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-10",attrs:{align:"center"}},[n("div",{staticClass:"text-h4 pt-5"},[n("b",[t._v("Villa Leonara")])]),t._v(" "),n("div",{staticStyle:{color:"#ff0909"}},[t._v("Resort and Event Venue")]),t._v(" "),n("div",{staticStyle:{"font-size":"30px"}},[t._v("DEBUT & WEDDING & BIRTHDAY")]),t._v(" "),n("div",[t._v("We offer memorable events")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-h4 mb-10"},[n("b",[t._v("Packages")])])}],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCol:f.a,VDivider:m.a,VImg:_.a,VRow:C.a,VSkeletonLoader:w.a})},718:function(t,e,n){"use strict";n.r(e);var o={},r=n(93),c=n(134),l=n.n(c),d=n(443),v=n(205),h=n(447),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pa-16",attrs:{align:"center"}},[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-row",[n("v-col",[n("v-icon",{attrs:{size:"100"}},[t._v("\n                        mdi-silverware-fork-knife\n                    ")])],1),t._v(" "),n("v-col",{attrs:{align:"start",cols:"9"}},[n("div",{staticClass:"text-h6"},[n("b",[n("u",[t._v(" Event Packages")])])]),t._v("\n                       Hungry? You can now order in the AL FRESCO DINING in the \n                       Villa Leonora Resort and Venue. The AL FRESCO DINING is\n                        the new business venture of the owners of the Villa Leonora\n                         Resort and Venue. The customers can avail for the services\n                          of the AL FRESCO DINING while having fun at the resort. \n                          The customers are also allowed to order outside of the resort.\n\n                ")])],1),t._v(" "),n("v-row",{staticClass:"pt-10"},[n("v-col",{attrs:{cols:"3"}},[n("v-icon",{attrs:{size:"100"}},[t._v("\n                        mdi-broom\n                    ")])],1),t._v(" "),n("v-col",{attrs:{align:"start"}},[n("div",{staticClass:"text-h6"},[n("b",[n("u",[t._v(" Room Service")])])]),t._v("\n                   Resorts offer room service for the customer and there \n                   are different kinds of rooms to avail in the resorts.\n                    Each room has different amenities and has a different \n                    kind of design and one (1) example of amenities that the customer\n                     has free access to in the public pool. Each room is cleaned after\n                      being used by the customer to maintain cleanliness in the rooms.\n                ")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("v-row",[n("v-col",[n("v-icon",{attrs:{size:"100"}},[t._v("\n                        mdi-air-filter\n                    ")])],1),t._v(" "),n("v-col",{attrs:{align:"start",cols:"9"}},[n("div",{staticClass:"text-h6"},[n("b",[n("u",[t._v(" Refreshment")])])]),t._v("\n                         Feeling hot during the summer? or just want to hangout with\n                          friends or family and swim. The resort offers pool \n                          services and currently have three (3) pools one (2) of\n                           them is public and one (1) is private. You can reserve \n                           the pools for morning hours 08:00am to 05:00 pm and night \n                           swimming 06:00 pm to 12:00 am and overnight from 12:00 am to 05:00 am in the morning.\n                ")])],1),t._v(" "),n("v-row",{staticClass:"pt-10"},[n("v-col",{attrs:{cols:"3"}},[n("v-icon",{attrs:{size:"100"}},[t._v("\n                        mdi-door\n                    ")])],1),t._v(" "),n("v-col",{attrs:{align:"start"}},[n("div",{staticClass:"text-h6"},[n("b",[n("u",[t._v(" Event Packages")])])]),t._v("\n                        Are you and your friends or family looking for a place\n                         to rent? A place for a party? A debut? A wedding? Or just want to hang out? you don't\n                         need to look anymore.The resorts offers different kind of \n                         packages for different kind of events and have a lot of\n                          amenities on it. But the resorts also offer venues for\n                           renting so that the customer can host an event.\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:d.a,VIcon:v.a,VRow:h.a})},787:function(t,e,n){"use strict";n.r(e);var o=n(665),r=n(718),c=n(608),l={components:{ServicesContainer:r.default,FooterAll:c.default,EventsContainer:o.default}},d=n(93),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",[n("services-container")],1),t._v(" "),n("div",{staticClass:"pa-10"},[n("events-container")],1),t._v(" "),n("div",[n("footer-all")],1)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-h4 pl-10"},[n("b",[t._v("Services")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{EventsContainer:n(665).default})}}]);