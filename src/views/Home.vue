<template>
  <div id="app">
     <!-- Page Preloader -->
<!--       <div id="jsPreloader" class="page-preloader" v-show="preloader">
        <div class="page-preloader__content-centered">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div> -->
      <!-- End Page Preloader -->
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
export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data() {
    return {

    }
  }
}
</script>

