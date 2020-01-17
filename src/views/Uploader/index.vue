<template>
<div id="app">
   <header-cmp></header-cmp>
      <router-view/>
   <footer-cmp></footer-cmp>
</div>
</template>
<script>
import HeaderCmp from './components/header.vue'
import FooterCmp from './components/footer.vue'
export default {
  components: {
    HeaderCmp,
    FooterCmp
  }
}
</script>