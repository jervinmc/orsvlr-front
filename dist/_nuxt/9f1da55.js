(window.webpackJsonp=window.webpackJsonp||[]).push([[81,37,38,49],{460:function(t,e,n){"use strict";var o=n(1),r=(n(40),n(59),n(217),n(12),n(5),n(11),n(58),n(115),n(10),n(13),n(15),n(16),n(7)),c=n(95),l=n(135);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:v({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},604:function(t,e,n){"use strict";n.r(e);var o=n(31),r=n(1),c=(n(32),n(5),n(43),n(45),n(452),n(303),n(25),n(62),n(304),n(79),n(94),{created:function(){this.loadData()},data:function(){var t;return t={buttonLoad:!1,image:"",account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(r.a)(t,"selectedItem",{}),Object(r.a)(t,"isLoading",!1),Object(r.a)(t,"users",[]),Object(r.a)(t,"dialogAdd",!1),Object(r.a)(t,"isEdit",!1),Object(r.a)(t,"image",""),Object(r.a)(t,"img_holder",""),Object(r.a)(t,"openTerms",!1),Object(r.a)(t,"address",""),Object(r.a)(t,"contacts",""),Object(r.a)(t,"email",""),Object(r.a)(t,"settings",[]),Object(r.a)(t,"isAdd",!0),Object(r.a)(t,"headers",[{text:"ID",value:"id"},{text:"Page",value:"page"},{text:"Image",value:"image"},{text:"Actions",value:"opt"},,]),t},methods:{routeto:function(){window.location.href="https://facebook.com/villaleonoraresort"},settingsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/settings/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.settings=e.data,t.settings.history=e.data[0].history,t.settings.contacts=e.data[0].contacts,t.settings.address=e.data[0].address,t.settings.email=e.data[0].email,t.carousel1_holder=e.data[0].carousel1,t.carousel2_holder=e.data[0].carousel2,t.carousel3_holder=e.data[0].carousel3,t.history_images.push(t.carousel1_holder),t.history_images.push(t.carousel2_holder),t.history_images.push(t.carousel3_holder),t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()},editValue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.buttonLoad=!0,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),e.next=5,t.$axios.patch("/content/".concat(t.selectedItem.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.isEdit=!1,t.loadData()}));case 5:e.sent;case 6:case"end":return e.stop()}}),e)})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},route:function(t){this.$router.push("/".concat(t))},deleteValue:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.buttonLoad=!0,t.$axios.delete("/events/".concat(t.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.deleteConfirmation=!1,t.buttonLoad=!1,alert("Successfully Deleted!"),t.loadData()}));case 2:case"end":return e.stop()}}),e)})))()},deleteItem:function(t){this.selectedItem=t,this.deleteConfirmation=!0},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(t){this.selectedItem=t,this.isEdit=!0},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=t},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.settingsGetall(),this.account_type=localStorage.getItem("account_type"),this.eventsGetall()},eventsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/content/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){for(var n in console.log(e.data),t.events=e.data,t.events)"pool"==t.events[n].page&&(t.image=t.events[n].image);t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(93),d=n(134),v=n.n(d),h=n(218),m=n(206),f=n(174),_=n(443),w=n(444),y=n(205),C=n(447),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[n("v-dialog",{attrs:{width:"900",persistent:""},model:{value:t.openTerms,callback:function(e){t.openTerms=e},expression:"openTerms"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[n("b",[t._v("VILLA LEONORA TERMS AND CONDITIONS")])]),t._v(" "),n("div",{staticClass:"px-10 pt-10",attrs:{align:"start"}},[n("b",[t._v(" 1. PAYMENT TERMS")])]),t._v(" "),n("div",{staticClass:"pa-10"},[n("div",[t._v("\n          Provisional bookings must be confirmed with 50% of the total Fee due\n          as your booking deposit made payable to the Business. We reserve the\n          right to keep this deposit if you cancel. If we are able to re-let\n          the Venue for the same values we will refund this deposit or part of\n          it at our discretion, but may keep a sum to cover administration\n          time.\n        ")]),t._v(" "),n("div",{staticClass:"pt-10"},[t._v("\n          b. One month before the event, the following is due:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("i. The balance of the Fee;")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. Damages deposit depending on the damage.We will return your\n          deposit within 3 Working Days after the event, subject to any\n          deductions we may require for Damage out of this sum. We will charge\n          the Client for any additional Damage caused by Guests and others\n          attending the Event. Note, this is only in the case of Student\n          Events.\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. Any additional costs(including without limitation, additional\n          heating days, wedding planner services).\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          c. A Statutory Right to Interest (SRI) will be chargeable at seven\n          per cent (7%) over the payment mode base rate on all sums unpaid on\n          the due date of payment.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          d. The Client shall not be entitled to any reduction in the cost if\n          the number of Guests attending the event is less than originally\n          booked.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          e. At the time of booking, the Client shall provide details of the\n          estimated number of Guests attending the event.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("f. All payments are in pounds sterling.")]),t._v(" "),n("div",{staticClass:"pt-5"},[n("b",[t._v("2. CANCELLATION BY CLIENT")])]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          a. A confirmed booking shall only be deemed to be cancelled when the\n          Business receives written notification of the cancellation from the\n          Client.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          b. The period of notice cancellation fee will be:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          i. 90 days or more –deposit only (subject to paragraph 1(a) above);\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. Between 30 and 90 days– 75% of pre-booked total Fee; and\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. Less than 30 days –100% of pre-booked total Fee.\n        ")]),t._v(" "),n("div",{staticClass:"pt-5"},[n("b",[t._v("3. CANCELLATION BY THE BUSINESS")])]),t._v(" "),n("div",{staticClass:"pt-5"},[t._v("\n          a. The business reserves the right to cancel the event if:\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          i. the Venue has to be closed due to Force Majeure;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          ii. the Client is in arrears with any payment due to the Business;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iii. the Business has reasonable grounds to believe that the Client\n          may not pay the Business the balance of the Fee by the due date and\n          the Business has requested the Client to explain the position and\n          the Client has not done so satisfactorily;\n        ")]),t._v(" "),n("div",{staticClass:"pl-16 pt-5"},[t._v("\n          iv. the Business discovers, before the Client has paid the balance\n          of the Fee, that the Client has deliberately concealed information,\n          or deliberately given the Business incorrect information, about the\n          Event in circumstances where (if the Client had not done so) it\n          would have been reasonably foreseeable that the Business would not\n          have accepted the booking\n        ")])]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"grey",text:""},on:{click:function(e){t.openTerms=!1}}},[t._v("Back ")])],1)],1)],1)],1)],1),t._v(" "),n("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[t._m(0),t._v(" "),n("div",[t._v("\n      "+t._s(t.settings.address)+"\n    ")]),t._v(" "),n("div",{staticClass:"pb-5"},[t._v(t._s(t.settings.contacts))]),t._v(" "),n("div",{staticClass:"pb-5"},[t._v("\n      "+t._s(t.settings.email)+"\n    ")]),t._v(" "),n("div",[n("div",{attrs:{align:"center"}},[n("v-icon",{on:{click:t.routeto}},[t._v(" mdi-facebook ")]),t._v(" "),n("span",[t._v("villaleonoraresort")])],1)])]),t._v(" "),n("v-card",{staticClass:"d-flex justify-center align-center",attrs:{width:"100vw",color:"#003853",height:"100"}},[n("v-row",[n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"},on:{click:function(e){return t.route("contacts")}}},[n("b",{staticStyle:{cursor:"pointer"}},[t._v("CONTACTS")])]),t._v(" "),n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n("b",{staticStyle:{cursor:"pointer"},on:{click:function(e){t.openTerms=!0}}},[t._v("TERMS AND CONDITIONS")])]),t._v(" "),n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n("b",[t._v("PRIVACY")])]),t._v(" "),n("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[n("b",[t._v("FAQS")])])],1)],1)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-h4 pb-5"},[n("b",[t._v("Villa Leonora")])])}],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:h.a,VCard:m.a,VCardActions:f.a,VCol:_.a,VDialog:w.a,VIcon:y.a,VRow:C.a})},679:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(94),n(32),n(5),n(43),n(45),n(452),n(303),{props:["isOpen","items","isAdd"],watch:{items:function(){this.mop=this.items,this.mop.accountNumber=this.items.accountNumber,this.mop.payment=this.items.modeOfPayment,this.mop.name=this.items.accountName,this.mop.id=this.items.id}},data:function(){return{room_list:["Standard","Deluxe","Suite"],mop:[],buttonLoad:!1,img_holder:"image_placeholder.png",image:""}},methods:{addMop:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,(n=new FormData).append("firstname",t.mop.firstname),n.append("lastname",t.mop.lastname),n.append("email",t.mop.email),n.append("account_type",t.mop.account_type),n.append("password",t.mop.password),!t.isAdd){e.next=18;break}return e.next=11,t.$axios.post("/users/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){}));case 11:e.sent,t.buttonLoad=!1,t.$refs.form.reset(),t.$emit("cancel"),t.$emit("refresh"),e.next=21;break;case 18:return e.next=20,t.$axios.patch("/users/".concat(t.mop.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 20:e.sent;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(1),t.buttonLoad=!1;case 26:case"end":return e.stop()}}),e,null,[[1,23]])})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$refs.form.reset(),this.$emit("cancel")}}}),c=n(93),l=n(134),d=n.n(l),v=n(218),h=n(206),m=n(174),f=n(443),_=n(444),w=n(460),y=n(447),C=n(722),x=n(599),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"submit.prevent":"addMop"}},[n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Add User")]),t._v(" "),n("div",{staticClass:"text-h6"},[t._v("User Management")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("First Name")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.firstname,callback:function(e){t.$set(t.mop,"firstname",e)},expression:"mop.firstname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Last Name")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.lastname,callback:function(e){t.$set(t.mop,"lastname",e)},expression:"mop.lastname"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Email")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.email,callback:function(e){t.$set(t.mop,"email",e)},expression:"mop.email"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Password")]),t._v(" "),n("div",[n("v-text-field",{attrs:{type:"password",outlined:""},model:{value:t.mop.password,callback:function(e){t.$set(t.mop,"password",e)},expression:"mop.password"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Account Type")]),t._v(" "),n("div",[n("v-select",{attrs:{outlined:"",items:["Admin","Staff"]},model:{value:t.mop.account_type,callback:function(e){t.$set(t.mop,"account_type",e)},expression:"mop.account_type"}})],1)]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:t.cancel}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.addMop}},[t._v("\n              Save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCardActions:m.a,VCol:f.a,VDialog:_.a,VForm:w.a,VRow:y.a,VSelect:C.a,VTextField:x.a})},717:function(t,e,n){"use strict";n.r(e);var o=n(31),r=(n(94),{components:{UsermanagementAdd:n(679).default},created:function(){this.loadData()},data:function(){return{selectedItem:{},isLoading:!1,mop:[],dialogAdd:!1,headers:[{text:"ID",value:"id"},{text:"Firstname",value:"firstname"},{text:"Lastname",value:"lastname"},{text:"Email",value:"email"},{text:"Account Type",value:"account_type"},{text:"Actions",value:"opt"},,]}},methods:{editItem:function(t){this.selectedItem=t,this.dialogAdd=!0,this.isAdd=!1},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.next=3,e.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=t},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.loadData()}));case 3:n.sent;case 4:case"end":return n.stop()}}),n)})))()},loadData:function(){this.mopGetall()},mopGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,t.$axios.get("/users/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.mop=e.data,t.isLoading=!1}));case 3:e.sent;case 4:case"end":return e.stop()}}),e)})))()}}}),c=n(93),l=n(134),d=n.n(l),v=n(218),h=n(206),m=n(443),f=n(767),_=n(205),w=n(210),y=n(129),C=n(113),x=n(723),O=n(447),k=n(632),A=n(448),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{elevation:"5"}},[n("usermanagement-add",{attrs:{isOpen:t.dialogAdd,items:t.selectedItem,isAdd:t.isAdd},on:{cancel:function(e){t.dialogAdd=!1},refresh:t.mopGetall}}),t._v(" "),n("v-row",[n("v-col",{staticClass:"pa-10 text-h5",attrs:{align:"start",cols:"auto"}},[n("b",[t._v("User Management")])]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"pr-10",attrs:{"align-self":"center",align:"end"}},[n("v-btn",{staticClass:"rnd-btn",attrs:{rounded:"",large:"",color:"black",depressed:"",dark:"",width:"190"},on:{click:t.addItem}},[n("span",{staticClass:"text-none"},[t._v("Add User")])])],1)],1),t._v(" "),n("v-data-table",{staticClass:"pa-5",attrs:{headers:t.headers,items:t.mop,loading:t.isLoading},scopedSlots:t._u([{key:"loading",fn:function(){return t._l(5,(function(t){return n("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}})}))},proxy:!0},{key:"item.opt",fn:function(e){var o=e.item;return[n("v-menu",{attrs:{"offset-y":"","z-index":"1"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.attrs,r=e.on;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",[t._v("mdi-dots-horizontal")])],1)]}}],null,!0)},[t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.editItem(o)}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Edit")])],1)],1),t._v(" "),n("v-list-item",{on:{click:function(e){return e.stopPropagation(),t.status(o,"Deactivate")}}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Delete")])],1)],1)],1)],1)]}}],null,!0)})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCol:m.a,VDataTable:f.a,VIcon:_.a,VList:w.a,VListItem:y.a,VListItemContent:C.a,VListItemTitle:C.b,VMenu:x.a,VRow:O.a,VSkeletonLoader:k.a,VSpacer:A.a})},791:function(t,e,n){"use strict";n.r(e);var o=n(717),r=n(604),c={components:{UsermanagementContainer:o.default,FooterAll:r.default}},l=n(93),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("usermanagement-container")],1),t._v(" "),n("div",[n("footer-all")],1)])}),[],!1,null,null,null);e.default=component.exports}}]);