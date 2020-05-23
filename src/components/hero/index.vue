<template>
<!-- Hero Section -->
<div class="bg-img-hero" style="background-image: url(../../assets/img/1920x800/img17.jpg);">
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

        <div class="col-lg-10 col-sm-12 col-xs-12">
          <!-- Monthly Plans -->
          <div id="pricingMonthlyExample1" class="row align-items-center mb-3">
            <div class="col-sm-4">
              <!-- Pricing -->
              <div class="card border-0 shadow-sm">
                <header id="SVGwave1BottomShapeID1" class="svg-preloader card-header border-0 position-relative bg-danger
                 text-white p-5 text-center">
                     <h3>
                      Sell My Car(s)
                    </h3>
                  <span class="d-block">
                      <!-- SVG Icon -->
                      <figure class="ie-for-sale">
                        <img class="js-svg-injector" src="../../assets/img/crossover.png" alt="SVG"
                             width="130px" 
                           data-parent="#SVGkeyFeatures">
                      </figure>
                    <!-- End SVG Icon -->
                  </span>

                  <div class="position-absolute right-0 bottom-0 left-0">
                    <figure class="ie-wave-1-bottom">
                      <img class="js-svg-injector" src="../../assets/svg/components/wave-1-bottom.svg" alt="Image Description"
                           data-parent="#SVGwave1BottomShapeID1">
                    </figure>
                  </div>
                </header>

                <!-- Content -->
                <div class="card-body pt-0 px-2 pb-1">
                  <button 
                    type="button" 
                    @click="goToOnboarding()" 
                    class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">
                        Get Started
                   </button>
                </div>
                <!-- End Content -->
              </div>
              <!-- End Pricing -->
            </div>

            <div class="col-sm-4">
              <!-- Pricing -->
              <div class="card border-0 shadow-sm">
                <header id="SVGwave1BottomShapeID2" class="svg-preloader card-header border-0 position-relative bg-wanrning  p-5 text-center ">
                     <h3>
                      Find My Car
                    </h3>
                  <span class="d-block">
                      <figure class="ie-buyer">
                         <img class="js-svg-injector" src="../../assets/img/car.png" alt="SVG"
                             width="130px" 
                           data-parent="#SVGkeyFeatures">
                      </figure>
                  </span>

                  <div class="position-absolute right-0 bottom-0 left-0">
                    <figure class="ie-wave-1-bottom">
                      <img class="js-svg-injector" src="../../assets/svg/components/wave-1-bottom.svg" alt="Image Description"
                           data-parent="#SVGwave1BottomShapeID2">
                    </figure>
                  </div>
                </header>

                <!-- Content -->
                <div class="card-body pt-0 px-2 pb-">
                  <button type="button" @click="goToCars()" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Get Started</button>
                </div>
                <!-- End Content -->
              </div>
              <!-- End Pricing -->
            </div>

            <div class="col-sm-4">
              <!-- Pricing -->
              <div class="card border-0 shadow-sm">
                <header class="card-header border-0 position-relative bg-wanrning  p-4 text-center ">
                    <h3>
                      Dealer Rep
                      <small class="text-muted">(DR)</small>
                      <!-- <small class="text-muted">Earn $$$</small> -->
                    </h3>
                  <span class="d-block">
                      <figure class="ie-buyer">
                         <img class="js-svg-injector" src="../../assets/img/car.png" alt="SVG"
                             width="130px" >
                      </figure>
                  </span>

                  <div class="position-absolute right-0 bottom-0 left-0">
                    <figure class="ie-wave-1-bottom">
                      <img class="js-svg-injector" src="../../assets/svg/components/wave-1-bottom.svg" alt="Image Description"
                           data-parent="#SVGwave1BottomShapeID2">
                    </figure>
                  </div>
                </header>

                <!-- Content -->
                <div class="card-body pt-0 px-2">
                  <button type="button" @click="goToDeailerRep()" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Get Started</button>
                </div>
                <!-- End Content -->
              </div>
              <!-- End Pricing -->
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