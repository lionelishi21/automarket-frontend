(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21f85b"],{d9d4:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"container space-2"},[t("form",{staticClass:"js-validate w-md-75 w-lg-50 mx-md-auto",on:{submit:function(e){return e.preventDefault(),s.login(s.user)}}},[s._m(0),t("div",{directives:[{name:"show",rawName:"v-show",value:s.successMsg,expression:"successMsg"}],staticClass:"alert alert-success",attrs:{role:"alert"}},[t("h4",{staticClass:"alert-heading"},[s._v("Well done!")]),t("p",{staticClass:"alert-text"},[s._v("Thank you for registering.")]),t("p",{staticClass:"alert-text mb-0"},[s._v("Check your email for verification.")])]),t("div",{staticClass:"js-form-message form-group"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.email,expression:"user.email"}],staticClass:"form-control",class:s.is_valid,attrs:{type:"email",name:"email",id:"signinSrEmailExample1",placeholder:"Email address","aria-label":"Email address","data-msg":"Please enter a valid email address.","data-error-class":"u-has-error","data-success-class":"u-has-success",required:""},domProps:{value:s.user.email},on:{input:function(e){e.target.composing||s.$set(s.user,"email",e.target.value)}}}),t("div",{staticClass:"invalid-feedback"},[s._v(" "+s._s(s.error.message["error"])+" "),t("a",{attrs:{href:"#"}},[s._v(" resend verification code")])])]),t("div",{staticClass:"js-form-message form-group"},[s._m(1),t("input",{directives:[{name:"model",rawName:"v-model",value:s.user.password,expression:"user.password"}],staticClass:"form-control",class:s.is_valid,attrs:{type:"password",name:"password",id:"signinSrPassword",placeholder:"********","aria-label":"********","data-msg":"Your password is invalid. Please try again.","data-error-class":"u-has-error","data-success-class":"u-has-success",required:""},domProps:{value:s.user.password},on:{input:function(e){e.target.composing||s.$set(s.user,"password",e.target.value)}}})]),t("div",{staticClass:"row align-items-center mb-5"},[t("div",{staticClass:"col-6"},[t("span",{staticClass:"small text-muted"},[s._v("Don't have an account?")]),t("router-link",{attrs:{to:"/user-onboarding",tag:"a"}},[s._v("signup")])],1),s._m(2)])])])},r=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"mb-7"},[t("h2",{staticClass:"h3 text-primary font-weight-normal mb-0"},[s._v("Welcome "),t("span",{staticClass:"font-weight-semi-bold"},[s._v("back")])]),t("p",[s._v("Login to manage your account.")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("label",{staticClass:"form-label",attrs:{for:"signinSrPassword"}},[t("span",{staticClass:"d-flex justify-content-between align-items-center"},[s._v(" Password "),t("a",{staticClass:"link-muted text-capitalize font-weight-normal",attrs:{href:"recover-account-simple.html"}},[s._v("Forgot Password?")])])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"col-6 text-right"},[t("button",{staticClass:"btn btn-primary transition-3d-hover",attrs:{type:"submit"}},[s._v("Login")])])}],i=t("81c3"),o=t("d94c"),n=i["a"].PushNotifications,l=new o["a"],c=(i["a"].FCMPlugin,{data:function(){return{user:{email:"",password:"",fcmToken:""},successMsg:!1,validationErr:"",is_valid:"",error:{message:""}}},created:function(){this.successMsg=!1,void 0!=this.$route.query.user&&(this.successMsg=!0)},mounted:function(){$.HSCore.components.HSValidation.init(".js-validate")},methods:{login:function(s){var e=this;this.is_valid="",this.error.message="",this.$store.dispatch("login",s).then((function(s){console.log(s),console.log("getting user.."),e.$store.dispatch("getCurrentUser").then((function(s){e.$router.push("/")})).catch((function(s){console.log(s.response)}))})).catch((function(s){console.log(s.response);s.response.data.message;e.is_valid="is-invalid",e.error.message=s.response.data}))},getUserToken:function(){var s=this;n.register().then((function(){l.getToken().then((function(e){alert("Token ".concat(e.token)),s.user.fcmToken=e.token})).catch((function(s){return console.log(s)}))}))}}}),u=c,d=t("2877"),m=Object(d["a"])(u,a,r,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21f85b.c3bc2c41.js.map