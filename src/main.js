import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VuePageTransition from 'vue-page-transition'
import Car from './mixins/Car';
import VModal from 'vue-js-modal'
import ImageUploader from 'vue-image-upload-resize'
import VueResource from 'vue-resource';
import VueCurrencyInput from 'vue-currency-input'
import VueCurrencyFilter from 'vue-currency-filter'
import * as VueGoogleMaps from "vue2-google-maps";
import PrettyCheckbox from 'pretty-checkbox-vue';
import Croppa from 'vue-croppa';
import CripNotice from 'crip-vue-notice'
import SocialSharing from 'vue-social-sharing'
 
Vue.use(SocialSharing);
Vue.use(CripNotice)
Vue.config.productionTip = false
Vue.use(Croppa);
Vue.use(PrettyCheckbox);
Vue.use(VueCurrencyInput)
Vue.use(VueResource);
Vue.use(ImageUploader);
Vue.use(VModal)
Vue.mixin(Car);
Vue.use(VuePageTransition)

Vue.use(VueCurrencyFilter, {
  symbol : 'JMD $',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBu71MBgcQ-RQjYup9H3ftk78lyHoC7eeM",
    libraries: "places" // necessary for places input
  }
});

// inject a handler for `myOption` custom option
Vue.mixin({
   methods: {
    showCarImage(image) {
       return 'http://18.206.230.202/storage/images/'+image
       // return 'http://127.0.0.1:8000/storage/images/'+image
    },
    showCarThumbnail(thumbnail) {
       return 'http://18.206.230.202/storage/thumbnail/'+thumbnail
      // return 'http://127.0.0.1:8000/storage/thumbnail/'+thumbnail
    },
    avatar(value) {
      var name = value.split(" ");
      return name
    },
    normal() {
        this.notice = new CripNotice({
          title: "Normal notice",
          description:
            "This notification has a class 'open-normal' and duration " +
            "in 20 seconds. So you can use button close to discard it.",
          className: "open-normal",
          duration: 20,
        })
      },

      close() {
        if (this.notice !== null) this.notice.close()
      },

      error_message(msg) {
        this.$notice.error({
          title: "Error notice",
          description: msg,
        })
      },

      info_message() {
        this.$notice.info({
          title: "Informational notice",
          description: "This notification has no close button",
          closable: false,
        })
      },

      success_message(msg) {
        this.$notice.success({
          title: "Success notice",
          description: msg,
          onClose() {
            // tslint:disable-next-line:no-console
            console.log("Success notice now is closed")
          },
        })
      },

      warning_message() {
        this.$notice.warning({
          title: "Warning notice",
          description: "This notice should be 500px wide",
          styles: { width: "500px", marginLeft: "-175px" },
        })
      },
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
