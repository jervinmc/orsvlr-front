(window.webpackJsonp=window.webpackJsonp||[]).push([[23,15],{633:function(t,e,n){"use strict";n.r(e);var o=n(31),c=(n(29),n(25),n(62),n(304),n(5),n(79),n(32),n(43),n(45),n(452),n(303),n(94),{props:["isOpen","items","isAdd"],watch:{items:function(){}},data:function(){return{ads_quantity:[],other_label:[],other_price:[],ads_label:[],ads_price:[],ads_list:[],room_list:["Standard","Deluxe","Suite"],events:[],discount_label:[],discount_price:[],fullscreenImage:!1,adsAll:[],buttonLoad:!1,img_holder:"image_placeholder.png"}},created:function(){this.adsGetall()},methods:{changeAds:function(t,e){for(var n in this.adsAll)t==this.adsAll[n].label&&(this.ads_price[e]=this.adsAll[n].price)},adsGetall:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/ads/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(e){console.log(e.data),t.adsAll=e.data,t.isLoading=!1}));case 2:e.sent;case 3:case"end":return e.stop()}}),e)})))()},removeSize:function(t){this.$delete(this.ads_label,t),this.$delete(this.ads_price,t),this.$delete(this.ads_quantity,t)},addSize:function(){this.ads_label.push(""),this.ads_price.push(""),this.ads_quantity.push("1")},removeOther:function(t){this.$delete(this.other_label,t),this.$delete(this.other_price,t)},addOther:function(){this.other_label.push(""),this.other_price.push("")},removeDiscount:function(t){this.$delete(this.discount_label,t),this.$delete(this.discount_price,t)},addDiscount:function(){this.discount_label.push(""),this.discount_price.push("")},addEvents:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,r,l,d,v,_,m,h;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(v in t.buttonLoad=!0,n=[],o=[],c=0,r=0,l=0,d=[],t.ads_label)n.push("".concat(t.ads_label[v]," - ").concat(t.ads_price[v]," (").concat(t.ads_quantity[v],"x = ").concat(parseInt(t.ads_price[v]*parseInt(t.ads_quantity[v]))," )")),r+=parseInt(t.ads_price[v]*parseInt(t.ads_quantity[v]));for(_ in t.discount_label)o.push("".concat(t.discount_label[_]," - ").concat(t.discount_price[_])),c+=parseInt(t.discount_price[_]);for(m in t.other_label)d.push("".concat(t.other_label[m]," - ").concat(t.other_price[m])),l+=parseInt(t.other_price[m]);h={ads:n,total:r,discount:o,total_discount:c,other:d,total_other:l},t.$emit("save",h);case 12:case"end":return e.stop()}}),e)})))()},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$emit("cancel")}}}),r=n(93),l=n(134),d=n.n(l),v=n(218),_=n(206),m=n(174),h=n(443),f=n(444),x=n(205),k=n(447),y=n(727),w=n(600),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("v-card",{staticClass:"pa-16",attrs:{align:"start"}},[n("div",[n("div",{attrs:{align:"center"}},[t._v("\n          BEFORE CHECK IN ADDITIONAL PAYMENT\n      ")]),t._v(" "),n("v-row",[n("v-col",[n("div",[t._v("AD ONS")])]),t._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:t.addSize}},[t._v("mdi-plus")])],1)])],1)],1)],1),t._v(" "),n("div",t._l(t.ads_label,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("v-select",{attrs:{outlined:"",items:t.adsAll,"item-text":"label","item-value":"label"},on:{change:function(e){return t.changeAds(t.ads_label[o],o)}},model:{value:t.ads_label[o],callback:function(e){t.$set(t.ads_label,o,e)},expression:"ads_label[index]"}},[t._v(">")])],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{readonly:"",label:"Price",outlined:""},model:{value:t.ads_price[o],callback:function(e){t.$set(t.ads_price,o,e)},expression:"ads_price[index]"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Quantity",outlined:""},model:{value:t.ads_quantity[o],callback:function(e){t.$set(t.ads_quantity,o,e)},expression:"ads_quantity[index]"}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.removeSize(o)}}},[t._v("mdi-delete")])],1)])],1)})),1),t._v(" "),n("v-row",[n("v-col",[n("div",[t._v("Others")])]),t._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:t.addOther}},[t._v("mdi-plus")])],1)])],1)],1)],1),t._v(" "),n("div",t._l(t.other_label,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("v-text-field",{attrs:{label:"Label",outlined:""},model:{value:t.other_label[o],callback:function(e){t.$set(t.other_label,o,e)},expression:"other_label[index]"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Price",outlined:""},model:{value:t.other_price[o],callback:function(e){t.$set(t.other_price,o,e)},expression:"other_price[index]"}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.removeOther(o)}}},[t._v("mdi-delete")])],1)])],1)})),1),t._v(" "),n("v-row",[n("v-col",[n("div",[t._v("Discount")])]),t._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:t.addDiscount}},[t._v("mdi-plus")])],1)])],1)],1)],1),t._v(" "),n("div",t._l(t.discount_label,(function(e,o){return n("v-row",{key:o},[n("v-col",[n("v-text-field",{attrs:{label:"Label",outlined:""},model:{value:t.discount_label[o],callback:function(e){t.$set(t.discount_label,o,e)},expression:"discount_label[index]"}})],1),t._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Price",outlined:""},model:{value:t.discount_price[o],callback:function(e){t.$set(t.discount_price,o,e)},expression:"discount_price[index]"}})],1),t._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(e){return t.removeDiscount(o)}}},[t._v("mdi-delete")])],1)])],1)})),1)],1),t._v(" "),n("v-card-actions",[n("v-row",[n("v-col",[n("v-btn",{on:{click:t.cancel}},[t._v("Back")])],1),t._v(" "),n("v-col",[n("v-btn",{on:{click:t.addEvents}},[t._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:_.a,VCardActions:m.a,VCol:h.a,VDialog:f.a,VIcon:x.a,VRow:k.a,VSelect:y.a,VTextField:w.a})},672:function(t,e,n){"use strict";n.r(e);var o=n(31),c=(n(25),n(62),n(304),n(5),n(79),n(32),n(43),n(45),n(452),n(303),n(94),n(655)),r=n.n(c),l={components:{CheckIn:n(633).default},props:["isOpen","items","isAdd"],watch:{items:function(){}},created:function(){},data:function(){return{amountReceived:0,dialogCheckin:!1,room_list:["Standard","Deluxe","Suite"],events:[],fullscreenImage:!1,buttonLoad:!1,ads:[],ad_total:0,img_holder:"image_placeholder.png",discount:[],discount_total:0,others:[],total_others:0}},methods:{downloadPdf:function(){var t=new r.a;t.text("Receipt Form",70,10),t.text("Contact Number : ".concat(this.items.contact_number),10,20),t.text("Accommodation Type : ".concat(this.items.service_type),10,25),t.text("Email : ".concat(this.items.email),10,30),t.text("Accommodation Type : ".concat(this.items.service_type),10,35),t.text("Package Type : ".concat(this.items.package),10,40),t.text("Date of Schedule : ".concat(this.items.date_start),10,45),t.text("Discount : ".concat(this.items.ad_discount),10,55),t.text("Other : ".concat(this.items.ad_other),10,60),t.text("Add Ons : ".concat(this.items.ad_ons),10,65),t.text("Total Paid : ".concat(this.items.total_paid),10,70),t.save("test.pdf")},checkedOut:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(parseInt(t.items.to_pay)+(t.ad_total+t.total_others-t.discount_total)>parseInt(t.amountReceived))){e.next=3;break}return alert("Not enough money"),e.abrupt("return");case 3:return t.buttonLoad=!0,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("ad_discount",t.discount),n.append("ad_ons",t.ads),n.append("others",t.others),n.append("status","Checked Out"),n.append("ad_ons_total",t.ad_total),n.append("ad_discount_total",t.discount_total),n.append("ad_other",t.others),n.append("to_pay",0),n.append("total_paid",parseInt(t.items.price)+parseInt(t.ad_total+t.total_others-t.discount_total)),n.append("ad_other_total",t.total_others),n.append("checkout_time",t.timestamp()),e.next=19,t.$axios.patch("/book/".concat(t.items.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("refresh"),t.$emit("cancel")}));case 19:e.sent;case 20:case"end":return e.stop()}}),e)})))()},timestamp:function(){var t=new Date;return t.getFullYear()+"-"+(t.getMonth()+1)+"-"+t.getDate()+" "+(t.getHours()+":"+t.getMinutes())},save:function(t){this.ads=t.ads,this.ad_total=t.total,this.discount=t.discount,this.discount_total=t.total_discount,this.others=t.other,this.total_others=t.total_other,this.dialogCheckin=!1,console.log(t)},checkin:function(){this.dialogCheckin=!0},checkedIn:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(parseInt(t.items.to_pay)>parseInt(t.amountReceived))){e.next=3;break}return alert("Not enough money"),e.abrupt("return");case 3:return t.buttonLoad=!0,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("status","Checked In"),n.append("to_pay",0),n.append("checkin_time",t.timestamp()),e.next=11,t.$axios.patch("/book/".concat(t.items.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$emit("refresh")}));case 11:e.sent;case 12:case"end":return e.stop()}}),e)})))()},addEvents:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.buttonLoad=!0,e.prev=1,n=new FormData,null!=t.image&&""!=t.image&&n.append("image",t.image),n.append("package",t.events.package),n.append("price",t.events.price),n.append("descriptions",t.events.descriptions),!t.isAdd){e.next=13;break}return e.next=10,t.$axios.post("/events/",n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.$refs.form.reset(),t.buttonLoad=!1,t.$emit("cancel"),t.$emit("refresh")}));case 10:e.sent,e.next=16;break;case 13:return e.next=15,t.$axios.patch("/discussions/".concat(t.discussions.id,"/"),n,{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(){t.buttonLoad=!1,t.$emit("cancel"),t.$emit("refresh")}));case 15:e.sent;case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(1),t.buttonLoad=!1;case 21:case"end":return e.stop()}}),e,null,[[1,18]])})))()},formatPrice:function(t){return(t/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},onFileUpload:function(t){if(this.image=t,(t=t.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(t.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(t){return void alert(t)}this.image=t,null==t||(this.url,this.img_holder=URL.createObjectURL(t))}},cancel:function(){this.$emit("cancel")}}},d=n(93),v=n(134),_=n.n(v),m=n(218),h=n(206),f=n(443),x=n(444),k=n(433),y=n(205),w=n(171),C=n(208),O=n(447),I=n(600),R=n(602),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:t.isOpen,callback:function(e){t.isOpen=e},expression:"isOpen"}},[n("check-in",{attrs:{isOpen:t.dialogCheckin,items:t.events},on:{cancel:function(e){t.dialogCheckin=!1},save:t.save,refresh:t.loadData}}),t._v(" "),n("v-overlay",{attrs:{absolute:!0,value:t.fullscreenImage}},[n("v-img",{attrs:{src:t.items.proofOfPayment,height:"800",width:"800"}},[n("div",{staticClass:"pa-10",attrs:{align:"end"}},[n("v-icon",{attrs:{color:"red",size:"40"},on:{click:function(e){t.fullscreenImage=!1}}},[t._v("\n          mdi-close\n        ")])],1)])],1),t._v(" "),n("v-card",{staticClass:"pa-16",attrs:{align:"start"}},[n("div",[n("div",{staticClass:"text-h5 pb-10",attrs:{align:"center"}},[n("b",[t._v("COMPLETED TRANSACTION FOR")])]),t._v(" "),n("div",[n("v-row",[n("v-col",[n("v-card",{staticClass:"pa-5 mb-10",attrs:{elevation:"5"}},[n("div",[t._v("Reference Code : "+t._s(t.items.code))]),t._v(" "),n("div",[t._v("\n                Customer Name : "+t._s(t.items.firstname)+" "+t._s(t.items.firstname)+"\n              ")]),t._v(" "),n("div",[t._v("Contact : "+t._s(t.items.contact_number))]),t._v(" "),n("div",[t._v("Email : "+t._s(t.items.email))]),t._v(" "),n("div",[t._v("Total Price : "+t._s(t.items.price))]),t._v(" "),n("div",[t._v("\n                Remaining Balance :\n                "+t._s("To Pay"==t.items.status?t.items.price:t.items.to_pay)+"\n              ")]),t._v(" "),n("div",[n("v-row",[n("v-col",{attrs:{cols:"auto"}},[n("div",[t._v("Reservation Information:")])]),t._v(" "),n("v-col",{attrs:{align:"start"}},[n("div",[t._v("\n                      "+t._s("undefined"==t.items.pool_type?"":t.items.pool_type)+"\n                    ")]),t._v(" "),n("div",[t._v("\n                      "+t._s("undefined"==t.items.package?"":t.items.package)+"\n                    ")]),t._v(" "),n("div",[t._v("\n                      "+t._s(t.items.date_start)+"\n                    ")]),t._v(" "),n("div",{staticClass:"text-h6"},[t._v("\n                      "+t._s(t.items.total_price)+"\n                    ")])])],1)],1)])],1),t._v(" "),n("v-col",[n("div",{attrs:{align:"center"}},[n("div",[n("b",[t._v(" PROOF OF PAYMENT")])]),t._v(" "),n("div",[n("b",[t._v(" For Online Reservation")])])]),t._v(" "),n("v-card",{staticClass:"pa-5",attrs:{elevation:"5"}},[n("v-img",{attrs:{src:t.items.proofOfPayment,height:"300",width:"300"},on:{click:function(e){t.fullscreenImage=!0}}})],1),t._v(" "),"Checked In"==t.items.status?n("v-btn",{on:{click:t.checkin}},[t._v("Ad ons")]):t._e(),t._v(" "),"Checked In"==t.items.status?n("div",[t._v("\n              Checked In : "+t._s(t.items.checkin_time)+"\n            ")]):t._e(),t._v(" "),"Checked Out"==t.items.status?n("div",[t._v("\n              Checked Out : "+t._s(t.items.checkout_time)+"\n            ")]):t._e()],1)],1)],1),t._v(" "),n("div",[n("div",[t._v("Ad Ons : "+t._s(t.items.ad_ons))]),t._v(" "),n("div",[t._v("Others : "+t._s(t.items.ad_other))]),t._v(" "),n("div",[t._v("Discount : "+t._s(t.items.ad_discount))]),t._v(" "),n("div",[t._v("Total Paid : "+t._s(t.items.total_paid))]),t._v(" "),n("v-divider")],1),t._v(" "),"Request For Cancellation"==t.items.status?n("div",[t._v("\n        Reason For Cancellation:\n      ")]):t._e(),t._v(" "),"Request For Cancellation"==t.items.status||"Cancelled"==t.items.status?n("div",[n("v-textarea",{attrs:{outlined:"",readonly:""},model:{value:t.items.cancellation_description,callback:function(e){t.$set(t.items,"cancellation_description",e)},expression:"items.cancellation_description"}})],1):t._e(),t._v(" "),"reschedule"==t.items.status?n("div",[t._v("Reason For Reschedule:")]):t._e(),t._v(" "),"reschedule"==t.items.status||"Cancelled"==t.items.status?n("div",[n("v-textarea",{attrs:{outlined:"",readonly:""},model:{value:t.items.reason_reschedule,callback:function(e){t.$set(t.items,"reason_reschedule",e)},expression:"items.reason_reschedule"}})],1):t._e(),t._v(" "),"reschedule"==t.items.status?n("div",[t._v("\n        Preferred Schedule: "+t._s(t.items.date_reschedule)+"\n      ")]):t._e()]),t._v(" "),n("div",{staticClass:"red--text"}),t._v(" "),n("v-col",{staticClass:"px-0",attrs:{cols:"12",align:"center"}},["Checked In"==t.items.status?n("div",[n("v-row",[n("v-col",{attrs:{align:"start"}},[n("div",[t._l(t.ads,(function(e){return n("div",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("div",[t._v("total ad ons : "+t._s(t.ad_total))])],2)])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"start"}},[n("div",[t._l(t.others,(function(e){return n("div",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("div",[t._v("total other payment : "+t._s(t.total_others))])],2)])],1),t._v(" "),n("v-row",[n("v-col",{attrs:{align:"start"}},[n("div",[t._l(t.discount,(function(e){return n("div",{key:e},[t._v("\n                "+t._s(e)+"\n              ")])})),t._v(" "),n("div",[t._v("total discount : "+t._s(t.discount_total))])],2)])],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),"Checked In"==t.items.status?n("div",{attrs:{align:"start"}},[t._v("\n        Other Payment "+t._s(t.ad_total+t.total_others-t.discount_total)+"\n\n        "),n("div",[t._v("Remaining Balance : "+t._s(t.items.to_pay))]),t._v(" "),n("div",[t._v("\n          To be paid:\n          "+t._s(parseInt(t.items.to_pay)+(t.ad_total+t.total_others-t.discount_total))+"\n        ")])]):t._e(),t._v(" "),"confirmed"==t.items.status||"Checked In"==t.items.status?n("v-row",[n("v-col",["confirmed"==t.items.status?n("div",[t._v("\n            To Pay : "+t._s(t.items.to_pay)+"\n          ")]):t._e(),t._v(" "),n("div",[t._v("\n            Amount Received:\n            "),n("v-text-field",{attrs:{outlined:""},model:{value:t.amountReceived,callback:function(e){t.amountReceived=e},expression:"amountReceived"}})],1)])],1):t._e(),t._v(" "),n("v-row",[n("v-col",[n("v-btn",{attrs:{color:"transparent"},on:{click:t.cancel}},[t._v(" Go back ")])],1),t._v(" "),n("v-col",["confirmed"==t.items.status?n("v-btn",{attrs:{color:"transparent",loading:t.buttonLoad},on:{click:t.checkedIn}},[t._v("\n            Check In\n          ")]):t._e(),t._v(" "),"Checked In"==t.items.status?n("v-btn",{attrs:{color:"transparent",loading:t.buttonLoad},on:{click:t.checkedOut}},[t._v("\n            Check Out\n          ")]):t._e()],1),t._v(" "),"completed"==t.items.status?n("v-col",[n("v-btn",{attrs:{color:"success",text:"",loading:t.buttonLoad},on:{click:t.downloadPdf}},[t._v("\n            Print\n          ")]),t._v(" "),n("div",{ref:"content",staticClass:"d-none"},[n("div",{staticStyle:{"font-size":"5px","text-align":"start","padding-bottom":"20px"},attrs:{align:"start"}},[n("div",{staticStyle:{padding:"10px",width:"100px","font-size":"10px"}},[n("b",[t._v(" Receipt Form")])]),t._v(" "),n("div",{staticStyle:{"padding-left":"20px"}},[n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Contact : "+t._s(t.items.contact_number)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Email : "+t._s(t.items.email)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Accommodation Type : "+t._s(t.items.service_type)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Package Type : "+t._s(t.items.package)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Date of Schedule : "+t._s(t.items.date_start)+" ")]),t._v(" "),n("div",{staticStyle:{"padding-top":"10px"}}),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Discount : "+t._s(t.items.ad_discount)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Other : "+t._s(t.items.ad_other)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Add Ons : "+t._s(t.items.ad_ons)+" ")]),t._v(" "),n("div",{staticStyle:{padding:"0px",width:"100px","font-size":"5px"}},[t._v("Total Paid : "+t._s(t.items.total_paid)+" ")])])])])],1):t._e()],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VBtn:m.a,VCard:h.a,VCol:f.a,VDialog:x.a,VDivider:k.a,VIcon:y.a,VImg:w.a,VOverlay:C.a,VRow:O.a,VTextField:I.a,VTextarea:R.a})}}]);