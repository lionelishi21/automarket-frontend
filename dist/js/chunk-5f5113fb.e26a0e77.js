(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5113fb"],{"5a61":function(t,e,n){t.exports=n.p+"img/checked-icon.1b591c91.svg"},"990e":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"content",role:"main"}},[t.isCompleted?n("div",{staticClass:"container space-2 space-lg-3"},[n("div",{staticClass:"w-md-80 w-lg-50 text-center mx-md-auto"},[t._m(0),t._m(1),n("router-link",{staticClass:"btn btn-primary btn-pill transition-3d-hover px-5",attrs:{to:"/cars",href:"classic.html"}},[t._v("Continue Browsing")])],1)]):n("div",{staticClass:"container",staticStyle:{height:"100vh"}},[n("div",{staticClass:"row"},[t._v(" strip "),n("stripe-checkout",{ref:"checkoutRef",attrs:{pk:t.publishableKey,items:t.items,successUrl:t.successUrl,cancelUrl:t.cancelUrl}},[n("template",{slot:"checkout-button"},[n("button",{on:{click:t.checkout}},[t._v("Shutup and take my money!")])])],2)],1),t._v("qew ")])])},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("figure",{staticClass:"ie-height-90 max-width-11 mx-auto mb-3",attrs:{id:"iconChecked"}},[o("img",{staticClass:"js-svg-injector",attrs:{src:n("5a61"),alt:"SVG","data-parent":"#iconChecked"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5"},[n("h1",{staticClass:"h3 font-weight-medium"},[t._v("Your order is completed!")]),n("p",[t._v("Thank you for your order! your order is completed.")])])}],a=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),s=n("afb1"),r=n("82eb"),c=n.n(r),l=n("2f62"),p=n("bc3a"),u=n.n(p),h=n("bce0");function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(n,!0).forEach((function(e){Object(a["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={components:{PayPal:s["a"],StripeCheckout:h["StripeCheckout"]},data:function(){return{isCompleted:!1,isLoading:!1,creditcard_method:!1,paymentmethod:"card",braintreeSdk:c.a,experience:{input_fields:{no_shipping:1}},myStyle:{label:"checkout",size:"responsive",shape:"rect",color:"black"},paypal:{sandbox:"AbUMmsT4JJSCUg86MP4SV1-iA3jjCtPYpqkrV3xrU2ZrAZ17FkFHA_AuI2LVe2xhu-nYBZB5ezKN2Y9z",production:"AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl"},publishableKey:"pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P",items:[{sku:"sk_test_Yha4F4mAhvGfsvZSvvCDgbBy00nMLLAhkJ",quantity:1}],successUrl:"http://working",cancelUrl:"http://working"}},computed:m({},Object(l["b"])(["CarDetails","getPlanDetails"])),created:function(){this.$store.dispatch("PLAN_DETAILS",this.$route.params.plan)},methods:{checkoutstripe:function(){this.$refs.checkoutRef.redirectToCheckout()},paymentAuthorized:function(t){},paymentCompleted:function(t){var e=this;if(this.isLoading=!0,console.log(t),"approved"==t["state"]){var n={plan_id:this.getPlanDetails.id},o=new FormData;o.append("payments",t),o.append("car",JSON.stringify(n)),console.log(o);var i={payments:t,car:n},a=localStorage.getItem("access_token");u.a.defaults.headers.common["Authorization"]="Bearer "+a,this.$store.dispatch("BUY_CREDIT",i).then((function(t){console.log(t),e.isLoading=!1;setTimeout((function(){}),1e3)}),(function(t){console.log(t.response)}))}},paymentCancelled:function(t){},placeorder:function(){var t=this;this.isLoading=!0;var e={car_id:this.CarDetails.id,plan_id:this.getPlanDetails.id};if(this.paymentmethod,"paypal"==this.paymentmethod){console.log(e);var n=localStorage.getItem("access_token");u.a.defaults.headers.common["Authorization"]="Bearer "+n,u.a.post("http://18.206.230.202/api//api/payment",e).then((function(e){console.log(e),t.isLoading=!1,window.location=e.data.paypal_link}),(function(t){console.log(t.response)}))}},goToPricing:function(){this.$router.push("/credits")},checkout:function(t,e){var n=this;this.isLoading=!0;var o={car_id:t,plan_id:e};u.a.post("http://18.206.230.202/api//api/subscriptions/create",o).then((function(t){console.log(t),n.isLoading=!1;setTimeout((function(){}),1e3)}),(function(t){console.log(t.response)}))}}},b=f,g=n("2877"),v=Object(g["a"])(b,o,i,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-5f5113fb.e26a0e77.js.map