<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">

          <!-- Page Preloader -->
      <div id="jsPreloader" class="page-preloader" v-show="loading">
        <div class="page-preloader__content-centered">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <!-- End Page Preloader -->
    <!-- Hero Section -->
    <div id="SVGwave1BottomSMShape" class=" position-relative bg-dark">
      <div class="container space-top-2 space-top-md-4 space-bottom-4">
        <div class="w-md-80 w-lg-60 text-center mx-auto">
          <div class="mb-6">
            <h1 class="text-white">Sell your Car Fast and Easy - Online Listing</h1>
          </div>
        </div>
      </div>

      <!-- SVG Background -->
      <figure class="position-absolute right-0 bottom-0 left-0">
        <img class="js-svg-injector" src="../../assets/svg/components/wave-1-bottom-sm.svg" alt="Image Description"
             data-parent="#SVGwave1BottomSMShape">
      </figure>
      <!-- End SVG Background -->
    </div>
    <!-- End Hero Section -->

    <!-- Pricing Section -->
    <div class="position-relative mt-n23 z-index-2">
      <div class="container">
        <div class="space-bottom-2 space-bottom-md-3">
          <!-- Pricing Carousel -->
          <div id="pricingMonthly" data-target-group="idPricing">
            <div class="js-slick-carousel u-slick u-slick--gutters-2 z-index-2"
                 data-slides-show="4"
                 data-adaptive-height="true"
                 data-slides-scroll="1"
                 data-pagi-classes="d-lg-none text-center u-slick__pagination mt-7 mb-0"
                 data-responsive='[{
                   "breakpoint": 1200,
                   "settings": {
                     "slidesToShow": 3
                   }
                 }, {
                   "breakpoint": 992,
                   "settings": {
                     "slidesToShow": 2
                   }
                 }, {
                   "breakpoint": 768,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }, {
                   "breakpoint": 554,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }]'>
              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h2 class="h6 text-primary mb-3">Starter</h2>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        Free
                      </span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">1 Listing</li>
                      <li class="list-group-item">Up to 5 Photos</li>
                      <li class="list-group-item">20 Days of Run Time</li>
                    </ul>

                    <button type="button" @click="selectPlan('starter-plan')" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Starter</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h3 class="h6 text-warning mb-3">Basic</h3>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        <span class="align-top font-size-2">$</span>1000
                      </span>
                      <span class="d-block text-secondary font-size-1">per month</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Up to 3 Listing</li>
                      <li class="list-group-item">Premium Placement</li>
                      <li class="list-group-item">30 Days Run Time</li>
                      <li class="list-group-item">Up to 15 Photos</li>
                    </ul>
                    <button  @click="selectPlan('basic-plan')"  type="button" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Basic</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-success mb-3">Dealer Plan</h4>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        <span class="align-top font-size-2">$</span>5000
                      </span>
                      <span class="d-block text-secondary font-size-1">per month</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
             <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Up to 10 Listing</li>
                      <li class="list-group-item">Premium Placement</li>
                      <li class="list-group-item">40 Days Run Time</li>
                      <li class="list-group-item">Up to 40 Photos</li>
                    </ul>

                    <button  @click="selectPlan('dealer-plan')" type="button" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Dealer</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-danger mb-3">Premium</h4>
                    <span class="d-block">
                      <span class="h2 text-dark font-weight-normal">
                        Contact Us
                      </span>
                      <span class="d-block text-secondary font-size-1">no user limit</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Unlimited listing</li>
                      <li class="list-group-item">Premium Placement</li>
                      <li class="list-group-item">60 Days Run Time</li>
                      <li class="list-group-item">Up to 100 Photos</li>
                    </ul>

                    <button  @click="selectPlan('premium-dealer-plan')"  type="button" class="btn btn-sm btn-block btn-success transition-3d-hover">Contact Us</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>
            </div>
          </div>
          <!-- End Pricing Carousel -->

          <!-- Pricing Carousel -->
          <div id="pricingYearly" style="display: none; opacity: 0;" data-target-group="idPricing">
            <div class="js-slick-carousel u-slick u-slick--gutters-2 z-index-2"
                 data-slides-show="4"
                 data-slides-scroll="1"
                 data-pagi-classes="d-lg-none text-center u-slick__pagination mt-7 mb-0"
                 data-responsive='[{
                   "breakpoint": 1200,
                   "settings": {
                     "slidesToShow": 3
                   }
                 }, {
                   "breakpoint": 992,
                   "settings": {
                     "slidesToShow": 2
                   }
                 }, {
                   "breakpoint": 768,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }, {
                   "breakpoint": 554,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }]'>
              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-primary mb-3">Starter</h4>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        <span class="align-top font-size-2">$</span>242
                      </span>
                      <span class="d-block text-secondary font-size-1">per year</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Community support</li>
                      <li class="list-group-item">400+ pages</li>
                    </ul>

                    <button type="button" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Starter</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-warning mb-3">Basic</h4>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        <span class="align-top font-size-2">$</span>442
                      </span>
                      <span class="d-block text-secondary font-size-1">per year</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Community support</li>
                      <li class="list-group-item">400+ pages</li>
                      <li class="list-group-item">100+ header variations</li>
                    </ul>

                    <button type="button" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Basic</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-success mb-3">Company</h4>
                    <span class="d-block">
                      <span class="display-4 text-dark font-weight-normal">
                        <span class="align-top font-size-2">$</span>1089
                      </span>
                      <span class="d-block text-secondary font-size-1">per year</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Community support</li>
                      <li class="list-group-item">400+ pages</li>
                      <li class="list-group-item">100+ header variations</li>
                      <li class="list-group-item">20+ home page options</li>
                    </ul>

                    <button type="button" class="btn btn-sm btn-block btn-soft-primary transition-3d-hover">Start Free Trial</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>

              <div class="js-slide">
                <!-- Pricing -->
                <div class="card transition-3d-hover mt-1">
                  <!-- Header -->
                  <header class="card-header text-center p-5">
                    <h4 class="h6 text-danger mb-3">Enterprise</h4>
                    <span class="d-block">
                      <span class="h2 text-dark font-weight-normal">
                        Contact Us
                      </span>
                      <span class="d-block text-secondary font-size-1">no user limit</span>
                    </span>
                  </header>
                  <!-- End Header -->

                  <!-- Content -->
                  <div class="card-body p-5">
                    <ul class="list-group list-group-flush list-group-borderless mb-4">
                      <li class="list-group-item">Community support</li>
                      <li class="list-group-item">400+ pages</li>
                      <li class="list-group-item">100+ header variations</li>
                      <li class="list-group-item">20+ home page options</li>
                      <li class="list-group-item">Priority Support</li>
                      <li>{{getPlans}}</li>
                    </ul>

                    <button type="button" class="btn btn-sm btn-block btn-success transition-3d-hover">Contact Us</button>
                  </div>
                  <!-- End Content -->
                </div>
                <!-- End Pricing -->
              </div>
            </div>
          </div>
          <!-- End Pricing Carousel -->
        </div>

        <!-- Divider -->
        <div class="w-80 mx-auto">
          <hr class="my-0">
        </div>
        <!-- End Divider -->
      </div>
    </div>
    <!-- End Pricing Section -->
  
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
 import { mapGetters } from 'vuex';
 export default {
  data() {
    return {
        loading: false,
         cars: [
           {
              id: 1,
              milage: 'N/A',
              make: 'Subaru',
              model: 'G4',
              year: '2015',
              location: 'Half Way Tree, Kingston, Jamaica',
              extcolor: 'Black',
              intcolor: 'Black',
              desc: 'THis is a description for buyers',
              name: 'Subaru',
              transmission: 'Automatic',
              price: '1,000,000.00', 
              img: '../../assets/img/480x320/car1.jpg',
              lrgimg: '../../assets/img/1920x1080/car1.jpg'
            },{
              id: 2,
              name: 'Honda Fit',
              milage: '20,123 mi',
              make: 'Honda',
              model: 'Fit',
              year: '2017',
              location: 'Half Way Tree, Kingston, Jamaica',
              extcolor: 'Black',
              intcolor: 'Black',
              desc: 'THis is a description for buyers',
              transmission: 'Automatic',
              price: '2,000,000.00', 
              img: '../../assets/img/480x320/car2.jpg',
              lrgimg: '../../assets/img/1920x1080/car2.jpg'
            }
      ],
    }
  },
  created(){
      this.$store.dispatch('GET_ALL_PLANS');
  },
  computed: {
    ...mapGetters([
      'getPlans',
     ])
  },
  mounted() {
     $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
     $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
  },
  methods: {
    selectPlan(plan) {
      this.loading = true
       var self = this
       setTimeout(function(){
          self.$router.push('/build/'+plan)
       }, 1500);

      // this.$store.dispatch('SELECT_USER_PLAN', plan_id)
      //   .then( response => {
      //       this.loading = false
      //       this.$router.push('/payment-methods')
      //   }, error => {
      //     this.loading = false
      //     // console.log(error.message)
      //   })
    }
  }
 }
</script>