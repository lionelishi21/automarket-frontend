(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d75f7"],{7712:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container space-top-1 space-top-sm-2"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"page-preloader"},[t._m(0)]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("a",{staticClass:"js-fancybox u-media-viewer mb-3",attrs:{href:"javascript:;","data-src":t.showCarImage(t.CarDetails.image),"data-fancybox":"fancyboxGalleryExample1","data-caption":"image #01","data-speed":"700","data-is-infinite":"true"}},[a("img",{staticClass:"img-fluid w-100",attrs:{src:t.showCarThumbnail(t.CarDetails.image)+"?"+Date.now(),alt:"Image Description"}}),t._m(1)]),t._l(t.CarDetails.images,(function(e){return a("img",{staticClass:"js-fancybox d-none",attrs:{alt:"Image Description","data-fancybox":"fancyboxGalleryExample1","data-src":t.showCarImage(e.image),"data-caption":"Front in frames - image #02","data-speed":"700","data-is-infinite":"true"}})})),a("div",{staticClass:"row"},t._l(t.CarDetails.images,(function(e){return a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"card mb-4 mb-md-0"},[a("img",{key:e.id,staticClass:"img-fluid",attrs:{alt:"Image Description",src:t.showCarImage(e.image)+"?"+Date.now()}}),a("div",{staticClass:"position-absolute bottom-0 right-0 pb-2 pr-2"},[a("span",{staticClass:"btn btn-icon btn-sm btn-white",on:{click:function(a){return t.rotateImage(e.id)}}},[a("span",{staticClass:"fas fa-undo btn-icon__inner"})]),a("span",{staticClass:"btn btn-icon btn-sm btn-white",on:{click:function(a){return t.removeImage(e.id)}}},[a("span",{staticClass:"fas fa-trash btn-icon__inner"})])])])])})),0)],2),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.make_id,expression:"CarDetails.make_id"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"make_id",e.target.multiple?a:a[0])}}},t._l(t.AllMakes,(function(e,s,i){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.model_id,expression:"CarDetails.model_id"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"model_id",e.target.multiple?a:a[0])}}},t._l(t.AllModels,(function(e,s,i){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name)+" - "+t._s(e.class))])})),0)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.year_id,expression:"CarDetails.year_id"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"year_id",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:t.CarDetails.year_id}},[t._v(t._s(t.CarDetails.year))]),t._l(t.AllYears,(function(e,s,i){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.year))])}))],2)])]),a("div",{staticClass:"col-md-6"}),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.milage,expression:"CarDetails.milage"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Milage"},domProps:{value:t.CarDetails.milage},on:{input:function(e){e.target.composing||t.$set(t.CarDetails,"milage",e.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[t._v(" "+t._s(t.CarDetails.bodystyle)+" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.bodystyle,expression:"bodystyle"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.bodystyle=e.target.multiple?a:a[0]}}},t._l(t.getBodystyles,(function(e){return a("option",{domProps:{value:e.id}},[t._v(t._s(e.name))])})),0)])])]),t._m(2),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.exterior_color,expression:"CarDetails.exterior_color"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"exterior_color",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"CarDetails.exterior_color"}},[t._v(t._s(t.CarDetails.exterior_color)+" ")]),t._l(t.colors,(function(e){return a("option",{domProps:{value:e.color}},[t._v(t._s(e.color))])}))],2)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.interior_color,expression:"CarDetails.interior_color"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"interior_color",e.target.multiple?a:a[0])}}},[a("option",{attrs:{value:"CarDetails.interior_color"}},[t._v(t._s(t.CarDetails.interior_color)+" ")]),t._l(t.colors,(function(e){return a("option",{domProps:{value:e.color}},[t._v(t._s(e.color))])}))],2)])])]),t._m(3),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{staticClass:"custom-select"},[a("option",{attrs:{value:"CarDetails.parish"}},[t._v(t._s(t.CarDetails.parish))]),t._l(t.parishes,(function(e){return a("option",{domProps:{value:e.name}},[t._v(t._s(e.name))])}))],2)])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.district,expression:"CarDetails.district"}],staticClass:"form-control",attrs:{type:"text",name:""},domProps:{value:t.CarDetails.district},on:{input:function(e){e.target.composing||t.$set(t.CarDetails,"district",e.target.value)}}})])])]),t._m(4),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.doors,expression:"CarDetails.doors"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"doors",e.target.multiple?a:a[0])}}},[a("option",[t._v("Number of Doors")]),a("option",{attrs:{selected:""},domProps:{value:t.CarDetails.doors}},[t._v(t._s(t.CarDetails.doors)+" door")]),a("option",{attrs:{value:"2"}},[t._v(" 2 door")]),a("option",{attrs:{value:"3"}},[t._v(" 3 door")]),a("option",{attrs:{value:"4"}},[t._v(" 4 door")]),a("option",{attrs:{value:"5"}},[t._v(" 5 door")]),a("option",{attrs:{value:"6"}},[t._v(" 6 door")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.drive_type,expression:"CarDetails.drive_type"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"drive_type",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:t.CarDetails.drive_type}},[t._v(t._s(t.CarDetails.drive_type))]),a("option",{attrs:{value:"4x4/4-wheel drive"}},[t._v("4x4/4-wheel drive")]),a("option",{attrs:{value:"AWD"}},[t._v("AWD")]),a("option",{attrs:{value:"FWD"}},[t._v("FWD")]),a("option",{attrs:{value:"RWD"}},[t._v("RWD")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.fuel_type,expression:"CarDetails.fuel_type"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"fuel_type",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:t.CarDetails.fuel_type}},[t._v(t._s(t.CarDetails.fuel_type))]),a("option",{attrs:{value:"Compressed Natural Gas"}},[t._v("Compressed Natural Gas")]),a("option",{attrs:{value:"Diesel"}},[t._v("Diesel")]),a("option",{attrs:{value:"E85 Flex Fuel"}},[t._v("E85 Flex Fuel")]),a("option",{attrs:{value:"Electric"}},[t._v("Electric")]),a("option",{attrs:{value:"Gasoline"}},[t._v("Gasoline")]),a("option",{attrs:{value:"Hybrid"}},[t._v("Hybrid")])])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.steering,expression:"CarDetails.steering"}],staticClass:"custom-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.CarDetails,"steering",e.target.multiple?a:a[0])}}},[a("option",{domProps:{value:t.CarDetails.steering}},[t._v(t._s(t.CarDetails.steering))]),a("option",{attrs:{value:"Right Hand"}},[t._v("Righ Hand Drive")]),a("option",{attrs:{value:"Left Hand"}},[t._v("Left Hand Drive")])])])])]),t._m(5),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("small",[a("span",{staticClass:"text-primary"},[t._v("Price: ")]),t._v(t._s(t._f("currency")(t.CarDetails.price)))]),a("div",{staticClass:"input-group"},[t._m(6),a("input",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.price,expression:"CarDetails.price"}],staticClass:"form-control",attrs:{name:"price",id:"listingPrice",placeholder:"Price"},domProps:{value:t.CarDetails.price},on:{input:function(e){e.target.composing||t.$set(t.CarDetails,"price",e.target.value)}}})])])]),a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"form-group"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.CarDetails.desc,expression:"CarDetails.desc"}],staticClass:"form-control",attrs:{rows:"6",placeholder:"Seller Notes"},domProps:{value:t.CarDetails.desc},on:{input:function(e){e.target.composing||t.$set(t.CarDetails,"desc",e.target.value)}}})])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12 "},[a("button",{staticClass:"btn mb-10 btn-primary btn-block transition-3d-hover",attrs:{type:"submit"},on:{click:function(e){return t.updateInformation()}}},[t._v("Update")])])])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-preloader__content-centered"},[a("div",{staticClass:"spinner-grow text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Loading...")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"position-absolute bottom-0 right-0 pb-2 pr-2"},[a("span",{staticClass:"btn btn-icon btn-sm btn-white"},[a("span",{staticClass:"fas fa-images btn-icon__inner"})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"border-bottom"},[a("h2",{staticClass:"h6 text-primary mb-0 ml-3 mb-2"},[t._v("Colors")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"border-bottom"},[a("h2",{staticClass:"h6 text-primary mb-0 ml-3 mb-2"},[t._v("Location")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"border-bottom"},[a("h2",{staticClass:"h6 text-primary mb-0 ml-3 mb-2"},[t._v("Optional Information")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"border-bottom pb-3 mb-2"},[a("h2",{staticClass:"h6 text-primary mb-0"},[t._v("Price and Description")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-group-prepend"},[a("span",{staticClass:"input-group-text",attrs:{id:"listingPriceLabel"}},[a("span",{staticClass:"fas fa-dollar-sign"})])])}],r=(a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("2fa7")),o=a("2f62"),l=a("d413");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function c(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(a,!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(a).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={directives:{currency:l["a"]},data:function(){return{loading:!1,bodystyle:null,formData:{main:{added_by:null,make_id:null,model_id:null,year_id:null,vehicle_id:null,steering:null,district:null,parish:null,doors:null,negotiable:null,drive_type:null,fuel_type:null,interior_color:null,exterior_color:null,milage:null,description:null,price:null},others:[],images:[],profile:[],car_entertainment:[],car_safety:[],car_others:[],car_features:[],car_seats:[]},parishes:[{name:"Kingston"},{name:"St. Andrew"},{name:"Portland"},{name:"St.Thomas"},{name:"St. Catherine"},{name:"St. Mary"},{name:"St. Mary"},{name:"St. Ann"},{name:"Manchester"},{name:"Clarendon"},{name:"Hanover"},{name:"Westmoreland"},{name:"St. James"},{name:"Trelawny"},{name:"St. Elizabeth"}]}},watch:{"CarDetails.make_id":function(){console.log("wathing make ids...."),this.$store.dispatch("GET_VEHICLE_MODEL",this.CarDetails.make_id)},"CarDetails.model_id":function(){console.log("watching model... ");var t={make:this.CarDetails.make_id,model:this.CarDetails.model_id,year:this.CarDetails.year_id};this.$store.dispatch("GET_VEHICLE_YEARS",t)},"CarDetails.year_id":function(){console.log("watching year... ");var t={make:this.CarDetails.make_id,model:this.CarDetails.model_id,year:this.CarDetails.year_id};this.$store.dispatch("GET_VEHICLE_DETAILS",t)}},computed:c({},Object(o["b"])(["CarDetails","UserCarDetails","AllDetails","AllModels","AllMakes","AllYears","getPlanDetails","getBodystyles"]),{bodyStyle:function(){this.bodystyle=CarDetails.bodystyle_id}}),beforeUpdate:function(){$.HSCore.components.HSSVGIngector.init(".js-svg-injector")},created:function(){this.initData()},mounted:function(){console.log("...mounting car models"),this.$store.dispatch("GET_VEHICLE_MODEL",this.CarDetails.make_id);var t={make:this.CarDetails.make_id,model:this.CarDetails.model_id,year:this.CarDetails.year_id};this.$store.dispatch("GET_VEHICLE_YEARS",t),this.$store.dispatch("GET_VEHICLE_DETAILS",t)},methods:{initData:function(){var t=this.$route.params.id;this.$store.dispatch("GET_CAR_DETAILS",t),this.$store.dispatch("GET_VEHICLE_MAKE"),this.$store.dispatch("GET_BODYSTYLES");var e={make:this.CarDetails.make_id,model:this.CarDetails.mode_id,year:this.CarDetails.year};this.$store.dispatch("GET_VEHICLE_YEARS",e),this.formData.main.milage=this.CarDetails.milage},updateInformation:function(){var t=this;this.loading=!0;var e=new FormData;e.append("main",JSON.stringify(this.CarDetails)),e.append("car_safety",this.formData.car_safety),e.append("car_others",this.formData.others),e.append("car_features",this.formData.car_features),e.append("car_seats",this.formData.car_seats),e.append("profile",this.formData.profile),e.append("car_entertainment",this.formData.car_seats);var a={make_id:this.CarDetails.make_id,model_id:this.CarDetails.model_id,year_id:this.CarDetails.year_id,vehicle_id:this.CarDetails.vehicle_id,steering:this.CarDetails.steering,district:this.CarDetails.district,parish:this.CarDetails.parish,doors:this.CarDetails.doors,negotiable:this.CarDetails.negotiable,drive_type:this.CarDetails.drive_type,fuel_type:this.CarDetails.fuel_type,interior_color:this.CarDetails.interior_color,exterior_color:this.CarDetails.exterior_color,milage:this.CarDetails.milage,description:this.CarDetails.desc,price:this.CarDetails.price,body_type:this.bodystyle},s={id:this.$route.params.id,params:a};console.log(s),this.$store.dispatch("UPDATE_USER_CAR",s,{headers:{"content-type":"multipart/form-data"}}).then((function(e){var a=t;setTimeout((function(){a.loading=!1;var t="Vehicle update successfully";a.success(t)}),1e3)})).catch((function(e){console.log(e.response);var a=t;setTimeout((function(){a.loading=!1;var t="Something went wrong went trying to update vichle information";a.error(t)}),1e3)}))},rotateImage:function(t){var e=this;this.loading=!0,this.$store.dispatch("ROTATE_IMAGE",t).then((function(t){e.$nextTick((function(){e.loading=!1,e.initData()})),e.loading=!1})).catch((function(t){console.log(t.response)}))},removeImage:function(t){this.loading=!0,this.$store.dispatch("REMOVE_IMAGE",t)}}},m=d,u=a("2877"),p=Object(u["a"])(m,s,i,!1,null,null,null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d75f7.2482e65a.js.map