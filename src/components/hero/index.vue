<template>
<!-- Hero Section -->
<div class="bg-img-hero" style="background-image: url(../../assets/img/1920x800/img17.jpg);">
  <div class="container space-2 space-md-3">
    <div class="row justify-content-end">
      <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div class="shadow-sm text-center">

            <p class="text-white">Welcome to AutoMarket JM ( Jamaica ) </p>
             <!-- Content -->
            <div class="card-body pt-0 px-5 pb-1">
                 <button type="button" @click="goToRegister()" class="btn btn-block btn-primary transition-3d-hover">Sell my Car</button>
            </div>
            <!-- End Content -->
            <small class="text-white ">or</small>
            <!-- Content -->
            <div class="card-body pt-0 px-5 pb-1">
                 <button type="button" @click="goToCars()" class="btn btn-danger btn-block  transition-3d-hover">Buy my Car</button>
            </div>
            <!-- End Content -->
          </div>
          <!-- End Pricing -->
      </div>
    </div>
  </div>
</div>
<!-- End Hero Section -->
    <!-- End Hero Section -->
</template>
<script>
  export default {
      data() {
        return{

        }
      },
      mounted(){
      // Initialization of svg injector
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

      // initialization of google map
      $.HSCore.components.HSGMap.init('.js-g-map');
    },
    created() {

    },
    methods: {
      goToRegister() {
        this.$router.push('/dealer-register')
      },
      goToCars() {
        this.$router.push('/cars')
      }
    }
  }
</script>