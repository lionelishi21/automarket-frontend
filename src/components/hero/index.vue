<template>
<!-- Hero Section -->
<!-- <div class="bg-img-hero" style="background-image: url(../../assets/img/1920x800/img17.jpg);"> -->
<div class="" style="background: grey">
  <div class="container space-2 space-md-3">
   
    <div class="row justify-content-end" v-if="mobile">
      <div class="col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div class="shadow-sm text-center">

            <p class="text-white">Welcome to AutoMarket JM ( Jamaica ) </p>
             <!-- Content -->
            <div class="card-body pt-0 px-5 pb-1">
                 <button type="button" @click="goToOnboarding()" class="btn btn-block btn-primary transition-3d-hover">Sell my Car</button>
            </div>
            <!-- End Content -->
            <small class="text-white ">or</small>
            <!-- Content -->
            <div class="card-body pt-0 px-5 pb-1">
                 <button type="button" @click="goToCars()" class="btn btn-danger btn-block  transition-3d-hover">Buy my Car</button>
            </div>
            <!-- End Content -->
              <small class="text-white ">or</small>
            <!-- Content -->
            <div class="card-body pt-0 px-5 pb-1">
                 <button type="button" @click="goToRegister()" class="btn btn-danger btn-block  transition-3d-hover">Sales Rep.</button>
            </div>
            <!-- End Content -->
          </div>
          <!-- End Pricing -->


      </div>
    </div>

    <div class="container" v-else>
       <!-- Pricing Section -->
      <div class="row">
        <div class="col-lg-2 mb-7">
        </div>

        <div class="col-lg-12 col-sm-12 col-xs-12">
          <!-- Monthly Plans -->
          <div class="row align-items-center">
           <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <!-- Card -->
              <a class="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover" href="#">
                <div class="row align-items-center">
                  <div class="col-8 col-md-6">
                    <div class="py-3 pl-4">
                      <h2 class="h4">Sell my Car</h2>
                      <a href="#" @click="goToOnboarding()" class="font-size-1 font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></a>
                    </div>
                  </div>
                  <div class="col-4 col-md-6 px-0">
                    <img class="img-fluid" src="@/assets/illustrations/sellmycar.png" alt="SVG">
                  </div>
                </div>
              </a>
              <!-- End Card -->
            </div>

            <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <!-- Card -->
              <a class="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover" href="#">
                <div class="row align-items-center">
                  <div class="col-8 col-md-6">
                    <div class="py-3 pl-4">
                      <h2 class="h4">Find my Car</h2>
                      <a href="#" @click="goToCars()" class="font-size-1 font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></a>
                    </div>
                  </div>
                  <div class="col-4 col-md-6 px-0">
                    <img class="img-fluid" src="@/assets/illustrations/findmycar.png" alt="SVG">
                  </div>
                </div>
              </a>
              <!-- End Card -->
            </div>

            <div class="col-md-6 col-lg-4 mb-3 mb-lg-0">
              <!-- Card -->
              <a class="card card-bg-light h-100 shadow-none overflow-hidden transition-3d-hover" href="#">
                <div class="row align-items-center">
                  <div class="col-8 col-md-6">
                    <div class="py-3 pl-4">
                      <h2 class="h4">Earn $$$</h2>
                      <a href="#" @click="goToDeailerRep()" class="font-size-1 font-weight-bold">Learn More <i class="fas fa-angle-right fa-sm ml-1"></i></a>
                    </div>
                  </div>
                  <div class="col-4 col-md-6 px-0">
                    <img class="img-fluid" src="@/assets/illustrations/earn.png" alt="SVG">
                  </div>
                </div>
              </a>
              <!-- End Card -->
            </div>

          </div>
          <!-- End Monthly Plans -->
        </div>
      </div>
       <!-- End Pricing Section -->
    </div>

  </div>
</div>
<!-- End Hero Section -->
    <!-- End Hero Section -->
</template>

<script>
import { isMobile } from 'mobile-device-detect';
  export default {
      data() {
        return{
          mobile: isMobile
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
      goToRegister(value = null) {

        this.$router.push('/dealer-register?user='+value)
      },
      goToOnboarding() {
         this.$router.push('/user-onboarding')
      },
      goToCars() {
        this.$router.push('/cars')
      },
      goToDeailerRep() {
         this.$router.push('/autorep')
      }
    }
  }
</script>