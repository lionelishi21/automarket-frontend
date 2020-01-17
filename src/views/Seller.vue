<template>
  <div id="app">
    <vue-page-transition name="fade">
        <router-view/>
    </vue-page-transition>
  </div>
</template>
<script>
import HeaderComponent from '@/components/header/index.vue';
import FooterComponent from '@/components/footer/index.vue';
export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  data() {
    return {

    }
  }
}
</script>

