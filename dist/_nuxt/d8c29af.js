(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{633:function(e,t,n){"use strict";n.r(t);var l=n(31),c=(n(29),n(25),n(62),n(304),n(5),n(79),n(32),n(43),n(45),n(452),n(303),n(94),{props:["isOpen","items","isAdd"],watch:{items:function(){}},data:function(){return{ads_quantity:[],other_label:[],other_price:[],ads_label:[],ads_price:[],ads_list:[],room_list:["Standard","Deluxe","Suite"],events:[],discount_label:[],discount_price:[],fullscreenImage:!1,adsAll:[],buttonLoad:!1,img_holder:"image_placeholder.png"}},created:function(){this.adsGetall()},methods:{changeAds:function(e,t){for(var n in this.adsAll)e==this.adsAll[n].label&&(this.ads_price[t]=this.adsAll[n].price)},adsGetall:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/ads/",{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}).then((function(t){console.log(t.data),e.adsAll=t.data,e.isLoading=!1}));case 2:t.sent;case 3:case"end":return t.stop()}}),t)})))()},removeSize:function(e){this.$delete(this.ads_label,e),this.$delete(this.ads_price,e),this.$delete(this.ads_quantity,e)},addSize:function(){this.ads_label.push(""),this.ads_price.push(""),this.ads_quantity.push("1")},removeOther:function(e){this.$delete(this.other_label,e),this.$delete(this.other_price,e)},addOther:function(){this.other_label.push(""),this.other_price.push("")},removeDiscount:function(e){this.$delete(this.discount_label,e),this.$delete(this.discount_price,e)},addDiscount:function(){this.discount_label.push(""),this.discount_price.push("")},addEvents:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n,l,c,o,r,d,v,_,h,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(v in e.buttonLoad=!0,n=[],l=[],c=0,o=0,r=0,d=[],e.ads_label)n.push("".concat(e.ads_label[v]," - ").concat(e.ads_price[v]," (").concat(e.ads_quantity[v],"x = ").concat(parseInt(e.ads_price[v]*parseInt(e.ads_quantity[v]))," )")),o+=parseInt(e.ads_price[v]*parseInt(e.ads_quantity[v]));for(_ in e.discount_label)l.push("".concat(e.discount_label[_]," - ").concat(e.discount_price[_])),c+=parseInt(e.discount_price[_]);for(h in e.other_label)d.push("".concat(e.other_label[h]," - ").concat(e.other_price[h])),r+=parseInt(e.other_price[h]);f={ads:n,total:o,discount:l,total_discount:c,other:d,total_other:r},e.$emit("save",f);case 12:case"end":return t.stop()}}),t)})))()},formatPrice:function(e){return(e/1).toFixed(2).replace(",",".").toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},onFileUpload:function(e){if(this.image=e,(e=e.target.files[0]).name.length>100)alert("255 characters exceeded filename.");else{try{if(e.size>16e6)return void alert("Only 15mb file can be accepted.")}catch(e){return void alert(e)}this.image=e,null==e||(this.url,this.img_holder=URL.createObjectURL(e))}},cancel:function(){this.$emit("cancel")}}}),o=n(93),r=n(134),d=n.n(r),v=n(218),_=n(206),h=n(174),f=n(443),m=n(444),x=n(205),k=n(447),w=n(727),$=n(600),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"1000",persistent:""},model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}},[n("v-card",{staticClass:"pa-16",attrs:{align:"start"}},[n("div",[n("div",{attrs:{align:"center"}},[e._v("\n          BEFORE CHECK IN ADDITIONAL PAYMENT\n      ")]),e._v(" "),n("v-row",[n("v-col",[n("div",[e._v("AD ONS")])]),e._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:e.addSize}},[e._v("mdi-plus")])],1)])],1)],1)],1),e._v(" "),n("div",e._l(e.ads_label,(function(t,l){return n("v-row",{key:l},[n("v-col",[n("v-select",{attrs:{outlined:"",items:e.adsAll,"item-text":"label","item-value":"label"},on:{change:function(t){return e.changeAds(e.ads_label[l],l)}},model:{value:e.ads_label[l],callback:function(t){e.$set(e.ads_label,l,t)},expression:"ads_label[index]"}},[e._v(">")])],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{readonly:"",label:"Price",outlined:""},model:{value:e.ads_price[l],callback:function(t){e.$set(e.ads_price,l,t)},expression:"ads_price[index]"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Quantity",outlined:""},model:{value:e.ads_quantity[l],callback:function(t){e.$set(e.ads_quantity,l,t)},expression:"ads_quantity[index]"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.removeSize(l)}}},[e._v("mdi-delete")])],1)])],1)})),1),e._v(" "),n("v-row",[n("v-col",[n("div",[e._v("Others")])]),e._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:e.addOther}},[e._v("mdi-plus")])],1)])],1)],1)],1),e._v(" "),n("div",e._l(e.other_label,(function(t,l){return n("v-row",{key:l},[n("v-col",[n("v-text-field",{attrs:{label:"Label",outlined:""},model:{value:e.other_label[l],callback:function(t){e.$set(e.other_label,l,t)},expression:"other_label[index]"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Price",outlined:""},model:{value:e.other_price[l],callback:function(t){e.$set(e.other_price,l,t)},expression:"other_price[index]"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.removeOther(l)}}},[e._v("mdi-delete")])],1)])],1)})),1),e._v(" "),n("v-row",[n("v-col",[n("div",[e._v("Discount")])]),e._v(" "),n("v-col",{attrs:{align:"end",cols:"auto"}},[n("v-row",[n("v-col",[n("div",[n("v-icon",{on:{click:e.addDiscount}},[e._v("mdi-plus")])],1)])],1)],1)],1),e._v(" "),n("div",e._l(e.discount_label,(function(t,l){return n("v-row",{key:l},[n("v-col",[n("v-text-field",{attrs:{label:"Label",outlined:""},model:{value:e.discount_label[l],callback:function(t){e.$set(e.discount_label,l,t)},expression:"discount_label[index]"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Price",outlined:""},model:{value:e.discount_price[l],callback:function(t){e.$set(e.discount_price,l,t)},expression:"discount_price[index]"}})],1),e._v(" "),n("v-col",{staticClass:"pt-0",attrs:{cols:"2","align-self":"center"}},[n("div",[n("v-icon",{attrs:{color:"red"},on:{click:function(t){return e.removeDiscount(l)}}},[e._v("mdi-delete")])],1)])],1)})),1)],1),e._v(" "),n("v-card-actions",[n("v-row",[n("v-col",[n("v-btn",{on:{click:e.cancel}},[e._v("Back")])],1),e._v(" "),n("v-col",[n("v-btn",{on:{click:e.addEvents}},[e._v("Save")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:_.a,VCardActions:h.a,VCol:f.a,VDialog:m.a,VIcon:x.a,VRow:k.a,VSelect:w.a,VTextField:$.a})}}]);