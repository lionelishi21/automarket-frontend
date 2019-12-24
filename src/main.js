import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VuePageTransition from 'vue-page-transition'
import Car from './mixins/Car';
import VModal from 'vue-js-modal'

Vue.use(VModal)
Vue.mixin(Car);
Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
