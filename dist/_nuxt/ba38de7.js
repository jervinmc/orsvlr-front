(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{460:function(t,e,n){"use strict";var r=n(1),o=(n(40),n(59),n(217),n(12),n(5),n(11),n(58),n(115),n(10),n(13),n(15),n(16),n(7)),c=n(95),l=n(135);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:m({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},678:function(t,e,n){"use strict";n.r(e);var r=n(31),o=(n(94),n(32),n(5),n(43),n(45),n(452),n(303),{props:["isOpen","items","isAdd"],watch:{items:function(){this.mop.accountNumber=this.items.accountNumber,this.mop.payment=this.items.modeOfPayment,this.mop.name=this.items.accountName,this.mop.id=this.items.id}},data:function(){return{room_list:["Standard","Deluxe","Suite"],mop:[],buttonLoad:!1,img_holder:"image_placeholder.png",image:""}},methods:{addMop:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,(n=new FormData).append("modeOfPayment",t.mop.payment),n.append("accountName",t.mop.name),n.append("accountNumber",t.mop.accountNumber),!t.isAdd){e.next=16;break}return e.next=9,t.$axios.post("/payment/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){}));case 9:e.sent,t.buttonLoad=!1,t.$refs.form.reset(),t.$emit("cancel"),t.$emit("refresh"),e.next=19;break;case 16:return e.next=18,t.$axios.patch("/payment/".concat(t.mop.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$refs.form.reset(),t.$emit("refresh")}));case 18:e.sent;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),t.buttonLoad=!1;case 24:case"end":return e.stop()}}),e,null,[[1,21]])})))()},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$refs.form.reset(),this.$emit("cancel")}}}),c=n(93),l=n(134),d=n.n(l),m=n(218),f=n(206),h=n(174),v=n(443),_=n(444),O=n(460),w=n(447),y=n(599),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{ref:"form",attrs:{"submit.prevent":"addMop"}},[n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-10"},[n("div",{staticClass:"text-h6",attrs:{align:"center"}},[t._v("Add Mode of Payment")]),t._v(" "),n("div",{staticClass:"text-h6"},[t._v("Rooms")]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Mode of Payment")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.payment,callback:function(e){t.$set(t.mop,"payment",e)},expression:"mop.payment"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Name")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.name,callback:function(e){t.$set(t.mop,"name",e)},expression:"mop.name"}})],1)]),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("div",[t._v("Account Number")]),t._v(" "),n("div",[n("v-text-field",{attrs:{outlined:""},model:{value:t.mop.accountNumber,callback:function(e){t.$set(t.mop,"accountNumber",e)},expression:"mop.accountNumber"}})],1)]),t._v(" "),n("v-card-actions",[n("v-row",{attrs:{align:"center"}},[n("v-col",{attrs:{align:"end"}},[n("v-btn",{attrs:{color:"red",text:""},on:{click:t.cancel}},[t._v(" Cancel ")])],1),t._v(" "),n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.addMop}},[t._v("\n              Save\n            ")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:m.a,VCard:f.a,VCardActions:h.a,VCol:v.a,VDialog:_.a,VForm:O.a,VRow:w.a,VTextField:y.a})}}]);