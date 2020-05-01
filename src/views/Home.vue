<template>
  <div id="app">
    <header-component></header-component>
    <vue-page-transition name="fade">
        <router-view/>
    </vue-page-transition>
    <footer-component></footer-component>
  </div>
</template>
<script>
import HeaderComponent from '@/components/header/index.vue';
import FooterComponent from '@/components/footer/index.vue';

import { Plugins } from "@capacitor/core";
const { PushNotifications } = Plugins;
 
// with type support
import { FCM } from "capacitor-fcm";
const fcm = new FCM();
 
// alternatively - without types
const { FCMPlugin } = Plugins;

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  mounted() {
    // this.subscribe()
  },
  data() {
    return {
      info: 'Tesint info'
    }
  },
  methods: {
     subscribe() {
        PushNotifications.register()
        .then(() => {

        fcm
          .subscribeTo({ topic: "test"})
          .then(r => alert(`subscrib to topic`))
          .catch(err => console.log(err));  
       })
     } 
  }
}
</script>

