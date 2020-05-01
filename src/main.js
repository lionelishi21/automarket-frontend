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

// import vuetify from '@/plugins/vuetify' // path to vuetify export

// import VueStripeCheckout from 'vue-stripe-checkout'

// base/global options
// these options can be overridden 
// by the options in the .open(options) 
// function.

// Vue.use(VueStripeCheckout, options)


Vue.use(PrettyCheckbox);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBu71MBgcQ-RQjYup9H3ftk78lyHoC7eeM",
    libraries: "places" // necessary for places input
  }
});


Vue.use(VueCurrencyFilter, {
  symbol : 'JMD $',
  thousandsSeparator: ',',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: true
})

Vue.use(VueCurrencyInput)
Vue.use(VueResource);
Vue.use(ImageUploader);
Vue.use(VModal)
Vue.mixin(Car);
Vue.use(VuePageTransition)
Vue.config.productionTip = false


// inject a handler for `myOption` custom option
Vue.mixin({
   methods: {
    showCarImage(image) {
       return 'http://18.206.230.202/storage/images/'+image
    },
    showCarThumbnail(thumbnail) {
       return 'http://18.206.230.202/storage/thumbnail/'+thumbnail
    },
    avatar(value) {
      var name = value.split(" ");
      return name
    }
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
