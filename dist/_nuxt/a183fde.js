(window.webpackJsonp=window.webpackJsonp||[]).push([[85,45,46,50],{603:function(e,t,o){"use strict";o.r(t);var l=o(31),n=o(1),r=(o(32),o(5),o(43),o(45),o(452),o(303),o(25),o(62),o(304),o(79),o(94),{created:function(){this.loadData()},data:function(){var e;return e={privacy:!1,faq:!1,buttonLoad:!1,image:"",account_type:"",deleteConfirmation:!1,selectedItem:[],events:[]},Object(n.a)(e,"selectedItem",{}),Object(n.a)(e,"isLoading",!1),Object(n.a)(e,"users",[]),Object(n.a)(e,"dialogAdd",!1),Object(n.a)(e,"isEdit",!1),Object(n.a)(e,"image",""),Object(n.a)(e,"img_holder",""),Object(n.a)(e,"openTerms",!1),Object(n.a)(e,"address",""),Object(n.a)(e,"contacts",""),Object(n.a)(e,"email",""),Object(n.a)(e,"settings",[]),Object(n.a)(e,"isAdd",!0),Object(n.a)(e,"headers",[{text:"ID",value:"id"},{text:"Page",value:"page"},{text:"Image",value:"image"},{text:"Actions",value:"opt"},,]),e},methods:{routeto:function(){window.location.href="https://facebook.com/villaleonoraresort"},settingsGetall:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/settings/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){e.settings=t.data,e.settings.history=t.data[0].history,e.settings.contacts=t.data[0].contacts,e.settings.address=t.data[0].address,e.settings.email=t.data[0].email,e.carousel1_holder=t.data[0].carousel1,e.carousel2_holder=t.data[0].carousel2,e.carousel3_holder=t.data[0].carousel3,e.history_images.push(e.carousel1_holder),e.history_images.push(e.carousel2_holder),e.history_images.push(e.carousel3_holder),e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()},editValue:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.buttonLoad=!0,o=new FormData,null!=e.image&&""!=e.image&&o.append("image",e.image),t.next=5,e.$axios.patch("/content/".concat(e.selectedItem.id,"/"),o,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.buttonLoad=!1,e.isEdit=!1,e.loadData()}));case 5:t.sent;case 6:case"end":return t.stop()}}),t)})))()},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}},route:function(e){this.$router.push("/".concat(e))},deleteValue:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.buttonLoad=!0,e.$axios.delete("/events/".concat(e.selectedItem.id,"/"),{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){e.deleteConfirmation=!1,e.buttonLoad=!1,alert("Successfully Deleted!"),e.loadData()}));case 2:case"end":return t.stop()}}),t)})))()},deleteItem:function(e){this.selectedItem=e,this.deleteConfirmation=!0},formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},editItem:function(e){this.selectedItem=e,this.isEdit=!0},addItem:function(){this.isAdd=!0,this.dialogAdd=!0},status:function(data,e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t.isLoading=!0,o.next=3,t.$axios.patch("/announcement/".concat(data.id,"/"),{is_active:"Deactivate"!=e},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){t.loadData()}));case 3:o.sent;case 4:case"end":return o.stop()}}),o)})))()},loadData:function(){this.settingsGetall(),this.account_type=localStorage.getItem("account_type"),this.eventsGetall()},eventsGetall:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/content/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){for(var o in console.log(t.data),e.events=t.data,e.events)"pool"==e.events[o].page&&(e.image=e.events[o].image);e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}),d=o(93),v=o(134),c=o.n(v),_=o(218),h=o(206),k=o(174),m=o(443),f=o(444),x=o(205),y=o(447),component=Object(d.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"black--text",staticStyle:{width:"100%"}},[o("v-dialog",{model:{value:e.privacy,callback:function(t){e.privacy=t},expression:"privacy"}},[o("v-card",{staticClass:"pa-16"},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, laoreet a orci nec, rhoncus sodales ipsum. Cras dignissim vitae elit quis suscipit. Sed suscipit dolor lectus, sit amet dapibus tellus aliquet eu. Nunc nec mi feugiat, ultrices dolor vitae, maximus turpis. Aenean varius diam massa, a condimentum erat tempus et. Fusce fermentum porttitor est et molestie. Aliquam consequat purus sed ligula auctor semper. Ut laoreet ex nulla, et rutrum leo dapibus vel. In hac habitasse platea dictumst. Etiam vehicula vitae massa vitae imperdiet. Morbi non ligula diam. In bibendum, ex in mattis vestibulum, tortor arcu blandit urna, vitae facilisis dui tellus nec arcu. Etiam in tellus urna.\n       "),o("v-col",{attrs:{align:"end"}},[o("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.privacy=!1}}},[e._v("Back ")])],1)],1)],1),e._v(" "),o("v-dialog",{model:{value:e.faq,callback:function(t){e.faq=t},expression:"faq"}},[o("v-card",[o("div",{staticClass:"pa-16"},[e._v("\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean odio nulla, laoreet a orci nec, rhoncus sodales ipsum. Cras dignissim vitae elit quis suscipit. Sed suscipit dolor lectus, sit amet dapibus tellus aliquet eu. Nunc nec mi feugiat, ultrices dolor vitae, maximus turpis. Aenean varius diam massa, a condimentum erat tempus et. Fusce fermentum porttitor est et molestie. Aliquam consequat purus sed ligula auctor semper. Ut laoreet ex nulla, et rutrum leo dapibus vel. In hac habitasse platea dictumst. Etiam vehicula vitae massa vitae imperdiet. Morbi non ligula diam. In bibendum, ex in mattis vestibulum, tortor arcu blandit urna, vitae facilisis dui tellus nec arcu. Etiam in tellus urna.\n      ")]),e._v(" "),o("v-col",{attrs:{align:"end"}},[o("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.faq=!1}}},[e._v("Back ")])],1)],1)],1),e._v(" "),o("v-dialog",{attrs:{width:"900",persistent:""},model:{value:e.openTerms,callback:function(t){e.openTerms=t},expression:"openTerms"}},[o("v-card",{staticClass:"pa-10"},[o("div",{staticClass:"text-h6",attrs:{align:"center"}},[o("b",[e._v("VILLA LEONORA TERMS AND CONDITIONS")])]),e._v(" "),o("div",{staticClass:"px-10 pt-10",attrs:{align:"start"}},[o("b",[e._v(" 1. PAYMENT TERMS")])]),e._v(" "),o("div",{staticClass:"pa-10"},[o("div",[e._v("\n          Provisional bookings must be confirmed with 50% of the total Fee due\n          as your booking deposit made payable to the Business. We reserve the\n          right to keep this deposit if you cancel. If we are able to re-let\n          the Venue for the same values we will refund this deposit or part of\n          it at our discretion, but may keep a sum to cover administration\n          time.\n        ")]),e._v(" "),o("div",{staticClass:"pt-10"},[e._v("\n          b. One month before the event, the following is due:\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("i. The balance of the Fee;")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          ii. Damages deposit depending on the damage.We will return your\n          deposit within 3 Working Days after the event, subject to any\n          deductions we may require for Damage out of this sum. We will charge\n          the Client for any additional Damage caused by Guests and others\n          attending the Event. Note, this is only in the case of Student\n          Events.\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          iii. Any additional costs(including without limitation, additional\n          heating days, wedding planner services).\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          c. A Statutory Right to Interest (SRI) will be chargeable at seven\n          per cent (7%) over the payment mode base rate on all sums unpaid on\n          the due date of payment.\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          d. The Client shall not be entitled to any reduction in the cost if\n          the number of Guests attending the event is less than originally\n          booked.\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          e. At the time of booking, the Client shall provide details of the\n          estimated number of Guests attending the event.\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("f. All payments are in pounds sterling.")]),e._v(" "),o("div",{staticClass:"pt-5"},[o("b",[e._v("2. CANCELLATION BY CLIENT")])]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          a. A confirmed booking shall only be deemed to be cancelled when the\n          Business receives written notification of the cancellation from the\n          Client.\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          b. The period of notice cancellation fee will be:\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          i. 90 days or more –deposit only (subject to paragraph 1(a) above);\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          ii. Between 30 and 90 days– 75% of pre-booked total Fee; and\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          iii. Less than 30 days –100% of pre-booked total Fee.\n        ")]),e._v(" "),o("div",{staticClass:"pt-5"},[o("b",[e._v("3. CANCELLATION BY THE BUSINESS")])]),e._v(" "),o("div",{staticClass:"pt-5"},[e._v("\n          a. The business reserves the right to cancel the event if:\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          i. the Venue has to be closed due to Force Majeure;\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          ii. the Client is in arrears with any payment due to the Business;\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          iii. the Business has reasonable grounds to believe that the Client\n          may not pay the Business the balance of the Fee by the due date and\n          the Business has requested the Client to explain the position and\n          the Client has not done so satisfactorily;\n        ")]),e._v(" "),o("div",{staticClass:"pl-16 pt-5"},[e._v("\n          iv. the Business discovers, before the Client has paid the balance\n          of the Fee, that the Client has deliberately concealed information,\n          or deliberately given the Business incorrect information, about the\n          Event in circumstances where (if the Client had not done so) it\n          would have been reasonably foreseeable that the Business would not\n          have accepted the booking\n        ")])]),e._v(" "),o("v-card-actions",[o("v-row",{attrs:{align:"center"}},[o("v-col",{attrs:{align:"end"}},[o("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.openTerms=!1}}},[e._v("Back ")])],1)],1)],1)],1)],1),e._v(" "),o("div",{staticClass:"pb-5 pt-5",attrs:{align:"center"}},[e._m(0),e._v(" "),o("div",[e._v("\n      "+e._s(e.settings.address)+"\n    ")]),e._v(" "),o("div",{staticClass:"pb-5"},[e._v(e._s(e.settings.contacts))]),e._v(" "),o("div",{staticClass:"pb-5"},[e._v("\n      "+e._s(e.settings.email)+"\n    ")]),e._v(" "),o("div",[o("div",{attrs:{align:"center"}},[o("v-icon",{on:{click:e.routeto}},[e._v(" mdi-facebook ")]),e._v(" "),o("span",[e._v("villaleonoraresort")])],1)])]),e._v(" "),o("v-card",{staticClass:"d-flex justify-center align-center",attrs:{width:"100vw",color:"#003853",height:"100"}},[o("v-row",[o("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"},on:{click:function(t){return e.route("contacts")}}},[o("b",{staticStyle:{cursor:"pointer"}},[e._v("CONTACTS")])]),e._v(" "),o("v-col",{staticClass:"white--text",attrs:{"align-self":"center",align:"center"}},[o("b",{staticStyle:{cursor:"pointer"},on:{click:function(t){e.openTerms=!0}}},[e._v("TERMS AND CONDITIONS")])]),e._v(" "),o("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(t){e.privacy=!0}}},[o("b",[e._v("PRIVACY")])]),e._v(" "),o("v-col",{staticClass:"white--text",staticStyle:{cursor:"pointer"},attrs:{"align-self":"center",align:"center"},on:{click:function(t){e.faq=!0}}},[o("b",[e._v("FAQS")])])],1)],1)],1)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-h4 pb-5"},[o("b",[e._v("Villa Leonora")])])}],!1,null,null,null);t.default=component.exports;c()(component,{VBtn:_.a,VCard:h.a,VCardActions:k.a,VCol:m.a,VDialog:f.a,VIcon:x.a,VRow:y.a})},606:function(e,t,o){var content=o(607);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(20).default)("5f757930",content,!0,{sourceMap:!1})},607:function(e,t,o){var l=o(19)(!1);l.push([e.i,'.theme--light.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3),hsla(0,0%,100%,0))}.theme--light.v-skeleton-loader .v-skeleton-loader__avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__button,.theme--light.v-skeleton-loader .v-skeleton-loader__chip,.theme--light.v-skeleton-loader .v-skeleton-loader__divider,.theme--light.v-skeleton-loader .v-skeleton-loader__heading,.theme--light.v-skeleton-loader .v-skeleton-loader__image,.theme--light.v-skeleton-loader .v-skeleton-loader__text{background:rgba(0,0,0,.12)}.theme--light.v-skeleton-loader .v-skeleton-loader__actions,.theme--light.v-skeleton-loader .v-skeleton-loader__article,.theme--light.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__card-text,.theme--light.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--light.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--light.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--light.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--light.v-skeleton-loader .v-skeleton-loader__table-thead{background:#fff}.theme--dark.v-skeleton-loader .v-skeleton-loader__bone:after{background:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.05),hsla(0,0%,100%,0))}.theme--dark.v-skeleton-loader .v-skeleton-loader__avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__button,.theme--dark.v-skeleton-loader .v-skeleton-loader__chip,.theme--dark.v-skeleton-loader .v-skeleton-loader__divider,.theme--dark.v-skeleton-loader .v-skeleton-loader__heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__image,.theme--dark.v-skeleton-loader .v-skeleton-loader__text{background:hsla(0,0%,100%,.12)}.theme--dark.v-skeleton-loader .v-skeleton-loader__actions,.theme--dark.v-skeleton-loader .v-skeleton-loader__article,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__card-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__date-picker,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-text,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__list-item-two-line,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-heading,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tbody,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-tfoot,.theme--dark.v-skeleton-loader .v-skeleton-loader__table-thead{background:#1e1e1e}.v-skeleton-loader{border-radius:4px;position:relative;vertical-align:top}.v-skeleton-loader__actions{padding:16px 16px 8px;text-align:right}.v-skeleton-loader__actions .v-skeleton-loader__button{display:inline-block}.v-application--is-ltr .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-right:12px}.v-application--is-rtl .v-skeleton-loader__actions .v-skeleton-loader__button:first-child{margin-left:12px}.v-skeleton-loader .v-skeleton-loader__list-item,.v-skeleton-loader .v-skeleton-loader__list-item-avatar,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader .v-skeleton-loader__list-item-text,.v-skeleton-loader .v-skeleton-loader__list-item-three-line,.v-skeleton-loader .v-skeleton-loader__list-item-two-line{border-radius:4px}.v-skeleton-loader .v-skeleton-loader__actions:after,.v-skeleton-loader .v-skeleton-loader__article:after,.v-skeleton-loader .v-skeleton-loader__card-avatar:after,.v-skeleton-loader .v-skeleton-loader__card-heading:after,.v-skeleton-loader .v-skeleton-loader__card-text:after,.v-skeleton-loader .v-skeleton-loader__card:after,.v-skeleton-loader .v-skeleton-loader__date-picker-days:after,.v-skeleton-loader .v-skeleton-loader__date-picker-options:after,.v-skeleton-loader .v-skeleton-loader__date-picker:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-avatar:after,.v-skeleton-loader .v-skeleton-loader__list-item-text:after,.v-skeleton-loader .v-skeleton-loader__list-item-three-line:after,.v-skeleton-loader .v-skeleton-loader__list-item-two-line:after,.v-skeleton-loader .v-skeleton-loader__list-item:after,.v-skeleton-loader .v-skeleton-loader__paragraph:after,.v-skeleton-loader .v-skeleton-loader__sentences:after,.v-skeleton-loader .v-skeleton-loader__table-cell:after,.v-skeleton-loader .v-skeleton-loader__table-heading:after,.v-skeleton-loader .v-skeleton-loader__table-row-divider:after,.v-skeleton-loader .v-skeleton-loader__table-row:after,.v-skeleton-loader .v-skeleton-loader__table-tbody:after,.v-skeleton-loader .v-skeleton-loader__table-tfoot:after,.v-skeleton-loader .v-skeleton-loader__table-thead:after,.v-skeleton-loader .v-skeleton-loader__table:after{display:none}.v-application--is-ltr .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 0 16px 16px}.v-application--is-rtl .v-skeleton-loader__article .v-skeleton-loader__heading{margin:16px 16px 0}.v-skeleton-loader__article .v-skeleton-loader__paragraph{padding:16px}.v-skeleton-loader__bone{border-radius:inherit;overflow:hidden;position:relative}.v-skeleton-loader__bone:after{-webkit-animation:loading 1.5s infinite;animation:loading 1.5s infinite;content:"";height:100%;left:0;position:absolute;right:0;top:0;transform:translateX(-100%);z-index:1}.v-skeleton-loader__avatar{border-radius:50%;height:48px;width:48px}.v-skeleton-loader__button{border-radius:4px;height:36px;width:64px}.v-skeleton-loader__card .v-skeleton-loader__image{border-radius:0}.v-skeleton-loader__card-heading .v-skeleton-loader__heading{margin:16px}.v-skeleton-loader__card-text{padding:16px}.v-skeleton-loader__chip{border-radius:16px;height:32px;width:96px}.v-skeleton-loader__date-picker{border-radius:inherit}.v-skeleton-loader__date-picker .v-skeleton-loader__list-item:first-child .v-skeleton-loader__text{max-width:88px;width:20%}.v-skeleton-loader__date-picker .v-skeleton-loader__heading{max-width:256px;width:40%}.v-skeleton-loader__date-picker-days{display:flex;flex-wrap:wrap;padding:0 12px;margin:0 auto}.v-skeleton-loader__date-picker-days .v-skeleton-loader__avatar{border-radius:4px;flex:1 1 auto;margin:4px;height:40px;width:40px}.v-skeleton-loader__date-picker-options{align-items:center;display:flex;padding:16px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:auto}.v-application--is-ltr .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-right:8px}.v-application--is-rtl .v-skeleton-loader__date-picker-options .v-skeleton-loader__avatar:nth-child(2){margin-left:8px}.v-skeleton-loader__date-picker-options .v-skeleton-loader__text.v-skeleton-loader__bone:first-child{margin-bottom:0;max-width:50%;width:456px}.v-skeleton-loader__divider{border-radius:1px;height:2px}.v-skeleton-loader__heading{border-radius:12px;height:24px;width:45%}.v-skeleton-loader__image{height:200px;border-radius:0}.v-skeleton-loader__image~.v-skeleton-loader__card-heading{border-radius:0}.v-skeleton-loader__image::first-child,.v-skeleton-loader__image::last-child{border-radius:inherit}.v-skeleton-loader__list-item{height:48px}.v-skeleton-loader__list-item-three-line{flex-wrap:wrap}.v-skeleton-loader__list-item-three-line>*{flex:1 0 100%;width:100%}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__list-item-avatar{height:48px}.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-two-line{height:72px}.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-three-line{height:88px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar{align-self:flex-start}.v-skeleton-loader__list-item,.v-skeleton-loader__list-item-avatar,.v-skeleton-loader__list-item-avatar-three-line,.v-skeleton-loader__list-item-avatar-two-line,.v-skeleton-loader__list-item-three-line,.v-skeleton-loader__list-item-two-line{align-content:center;align-items:center;display:flex;flex-wrap:wrap;padding:0 16px}.v-application--is-ltr .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-ltr .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-right:16px}.v-application--is-rtl .v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-avatar .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-three-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item-two-line .v-skeleton-loader__avatar,.v-application--is-rtl .v-skeleton-loader__list-item .v-skeleton-loader__avatar{margin-left:16px}.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-avatar .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-three-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item-two-line .v-skeleton-loader__text:only-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:last-child,.v-skeleton-loader__list-item .v-skeleton-loader__text:only-child{margin-bottom:0}.v-skeleton-loader__paragraph,.v-skeleton-loader__sentences{flex:1 0 auto}.v-skeleton-loader__paragraph:not(:last-child){margin-bottom:6px}.v-skeleton-loader__paragraph .v-skeleton-loader__text:first-child{max-width:100%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(2){max-width:50%}.v-skeleton-loader__paragraph .v-skeleton-loader__text:nth-child(3),.v-skeleton-loader__sentences .v-skeleton-loader__text:nth-child(2){max-width:70%}.v-skeleton-loader__sentences:not(:last-child){margin-bottom:6px}.v-skeleton-loader__table-heading{align-items:center;display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-heading .v-skeleton-loader__heading{max-width:15%}.v-skeleton-loader__table-heading .v-skeleton-loader__text{max-width:40%}.v-skeleton-loader__table-thead{display:flex;justify-content:space-between;padding:16px}.v-skeleton-loader__table-thead .v-skeleton-loader__heading{max-width:5%}.v-skeleton-loader__table-tbody{padding:16px 16px 0}.v-skeleton-loader__table-tfoot{align-items:center;display:flex;justify-content:flex-end;padding:16px}.v-application--is-ltr .v-skeleton-loader__table-tfoot>*{margin-left:8px}.v-application--is-rtl .v-skeleton-loader__table-tfoot>*{margin-right:8px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__avatar{height:40px;width:40px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:first-child{max-width:128px}.v-skeleton-loader__table-tfoot .v-skeleton-loader__text:nth-child(2){max-width:64px}.v-skeleton-loader__table-row{display:flex;justify-content:space-between}.v-skeleton-loader__table-cell{align-items:center;display:flex;height:48px;width:88px}.v-skeleton-loader__table-cell .v-skeleton-loader__text{margin-bottom:0}.v-skeleton-loader__text{border-radius:6px;flex:1 0 auto;height:12px;margin-bottom:6px}.v-skeleton-loader--boilerplate .v-skeleton-loader__bone:after{display:none}.v-skeleton-loader--is-loading{overflow:hidden}.v-skeleton-loader--tile,.v-skeleton-loader--tile .v-skeleton-loader__bone{border-radius:0}@-webkit-keyframes loading{to{transform:translateX(100%)}}@keyframes loading{to{transform:translateX(100%)}}',""]),e.exports=l},632:function(e,t,o){"use strict";o(10),o(13),o(12),o(5),o(15),o(11),o(16);var l=o(21),n=o(1),r=(o(25),o(80),o(71),o(63),o(43),o(62),o(606),o(136)),d=o(97),v=o(27),c=o(7),_=o(0);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(r.a,d.a,v.a).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:k({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return k(k({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return k({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(text,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(text," v-skeleton-loader__bone")},e)},genBones:function(e){var t=this,o=e.split("@"),n=Object(l.a)(o,2),r=n[0],d=n[1];return Array.from({length:d}).map((function(){return t.genStructure(r)}))},genStructure:function(e){var t=[];e=e||this.type||"";var o=this.rootTypes[e]||"";if(e===o);else{if(e.indexOf(",")>-1)return this.mapBones(e);if(e.indexOf("@")>-1)return this.genBones(e);o.indexOf(",")>-1?t=this.mapBones(o):o.indexOf("@")>-1?t=this.genBones(o):o&&t.push(this.genStructure(o))}return[this.genBone(e,t)]},genSkeleton:function(){var e=[];return this.isLoading?e.push(this.genStructure()):e.push(Object(_.t)(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},e):e},mapBones:function(e){return e.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(e){this.resetStyles(e),this.isLoading&&(e._initialStyle={display:e.style.display,transition:e.style.transition},e.style.setProperty("transition","none","important"))},onBeforeLeave:function(e){e.style.setProperty("display","none","important")},resetStyles:function(e){e._initialStyle&&(e.style.display=e._initialStyle.display||"",e.style.transition=e._initialStyle.transition,delete e._initialStyle)}},render:function(e){return e("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},655:function(e,t,o){"use strict";o.r(t);var l=o(31),n=(o(94),o(25),o(62),o(304),o(5),o(79),{data:function(){return{isLoading:!1,events:[]}},created:function(){this.loadData()},methods:{formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},route:function(){this.$router.push("/contacts")},loadData:function(){this.eventsGetall()},eventsGetall:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isLoading=!0,t.next=3,e.$axios.get("/events/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),e.events=t.data,e.isLoading=!1}));case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}}),r=o(93),d=o(134),v=o.n(d),c=o(218),_=o(206),h=o(443),k=o(433),m=o(171),f=o(447),x=o(632),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),e._m(1),e._v(" "),e._l(5,(function(t){return e.isLoading?o("v-skeleton-loader",{key:t,staticClass:"my-2",attrs:{type:"list-item-avatar-two-line"}}):e._e()})),e._v(" "),e._l(e.events,(function(i){return o("v-row",{key:i},[o("v-col",{attrs:{cols:"6"}},[o("v-img",{attrs:{src:i.image,height:"400"}})],1),e._v(" "),o("v-col",{attrs:{"align-self":"center"}},[o("v-card",{staticClass:"pa-5",attrs:{elevation:"5",height:"300"}},[o("div",{staticClass:"text-h4 pb-5",attrs:{align:"center"}},[o("b",[e._v(e._s(i.package))])]),e._v(" "),o("v-divider"),e._v(" "),o("div",[e._v("\n          "+e._s(i.descriptions)+"\n        ")]),e._v(" "),o("div",{staticClass:"pt-16",attrs:{align:"end"}},[o("v-row",[o("v-col",[o("div",[o("div",{staticClass:"text-h6"},[e._v("\n                  Php "+e._s(e.formatPrice(i.price))+"/ per night\n                ")])])]),e._v(" "),o("v-col",[o("v-btn",{attrs:{depressed:"",color:"#2E2E2E",dark:""},on:{click:function(t){return e.route(i.id)}}},[e._v("\n                Inquire")])],1)],1)],1)],1)],1)],1)}))],2)}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"py-10",attrs:{align:"center"}},[o("div",{staticClass:"text-h4 pt-5"},[o("b",[e._v("Villa Leonara")])]),e._v(" "),o("div",{staticStyle:{color:"#ff0909"}},[e._v("Resort and Event Venue")]),e._v(" "),o("div",{staticStyle:{"font-size":"30px"}},[e._v("DEBUT & WEDDING & BIRTHDAY")]),e._v(" "),o("div",[e._v("We offer memorable events")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-h4 mb-10"},[o("b",[e._v("Packages")])])}],!1,null,null,null);t.default=component.exports;v()(component,{VBtn:c.a,VCard:_.a,VCol:h.a,VDivider:k.a,VImg:m.a,VRow:f.a,VSkeletonLoader:x.a})},702:function(e,t,o){"use strict";o.r(t);var l={},n=o(93),r=o(134),d=o.n(r),v=o(443),c=o(205),_=o(447),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"pa-16",attrs:{align:"center"}},[o("v-row",[o("v-col",{attrs:{cols:"6"}},[o("v-row",[o("v-col",[o("v-icon",{attrs:{size:"100"}},[e._v("\n                        mdi-silverware-fork-knife\n                    ")])],1),e._v(" "),o("v-col",{attrs:{align:"start",cols:"9"}},[o("div",{staticClass:"text-h6"},[o("b",[o("u",[e._v(" Event Packages")])])]),e._v("\n                       Hungry? You can now order in the AL FRESCO DINING in the \n                       Villa Leonora Resort and Venue. The AL FRESCO DINING is\n                        the new business venture of the owners of the Villa Leonora\n                         Resort and Venue. The customers can avail for the services\n                          of the AL FRESCO DINING while having fun at the resort. \n                          The customers are also allowed to order outside of the resort.\n\n                ")])],1),e._v(" "),o("v-row",{staticClass:"pt-10"},[o("v-col",{attrs:{cols:"3"}},[o("v-icon",{attrs:{size:"100"}},[e._v("\n                        mdi-broom\n                    ")])],1),e._v(" "),o("v-col",{attrs:{align:"start"}},[o("div",{staticClass:"text-h6"},[o("b",[o("u",[e._v(" Room Service")])])]),e._v("\n                   Resorts offer room service for the customer and there \n                   are different kinds of rooms to avail in the resorts.\n                    Each room has different amenities and has a different \n                    kind of design and one (1) example of amenities that the customer\n                     has free access to in the public pool. Each room is cleaned after\n                      being used by the customer to maintain cleanliness in the rooms.\n                ")])],1)],1),e._v(" "),o("v-col",{attrs:{cols:"6"}},[o("v-row",[o("v-col",[o("v-icon",{attrs:{size:"100"}},[e._v("\n                        mdi-air-filter\n                    ")])],1),e._v(" "),o("v-col",{attrs:{align:"start",cols:"9"}},[o("div",{staticClass:"text-h6"},[o("b",[o("u",[e._v(" Refreshment")])])]),e._v("\n                         Feeling hot during the summer? or just want to hangout with\n                          friends or family and swim. The resort offers pool \n                          services and currently have three (3) pools one (2) of\n                           them is public and one (1) is private. You can reserve \n                           the pools for morning hours 08:00am to 05:00 pm and night \n                           swimming 06:00 pm to 12:00 am and overnight from 12:00 am to 05:00 am in the morning.\n                ")])],1),e._v(" "),o("v-row",{staticClass:"pt-10"},[o("v-col",{attrs:{cols:"3"}},[o("v-icon",{attrs:{size:"100"}},[e._v("\n                        mdi-door\n                    ")])],1),e._v(" "),o("v-col",{attrs:{align:"start"}},[o("div",{staticClass:"text-h6"},[o("b",[o("u",[e._v(" Event Packages")])])]),e._v("\n                        Are you and your friends or family looking for a place\n                         to rent? A place for a party? A debut? A wedding? Or just want to hang out? you don't\n                         need to look anymore.The resorts offers different kind of \n                         packages for different kind of events and have a lot of\n                          amenities on it. But the resorts also offer venues for\n                           renting so that the customer can host an event.\n                ")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:v.a,VIcon:c.a,VRow:_.a})},772:function(e,t,o){"use strict";o.r(t);var l=o(655),n=o(702),r=o(603),d={components:{ServicesContainer:n.default,FooterAll:r.default,EventsContainer:l.default}},v=o(93),component=Object(v.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._m(0),e._v(" "),o("div",[o("services-container")],1),e._v(" "),o("div",{staticClass:"pa-10"},[o("events-container")],1),e._v(" "),o("div",[o("footer-all")],1)])}),[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text-h4 pl-10"},[o("b",[e._v("Services")])])}],!1,null,null,null);t.default=component.exports;installComponents(component,{EventsContainer:o(655).default})}}]);