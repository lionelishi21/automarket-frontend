<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="mb-9">
          <!-- Title -->
          <div class="mb-3">
            <h2 class="h5 mb-0">Your current plans</h2>
          </div>

          <div class="row" v-if="getActivePlans">
          <!-- End Title -->
              <div class="col-md-6">
                   <div class="card mb-4 mb-md-0">
                  <!-- Card -->
                  <div class="card-body p-5">
                    <h4 class="h6">{{getActivePlans.subscription.plan.name}} - {{getActivePlans.subscription.start_time}} <span class="btn btn-xs btn-soft-success">{{getActivePlans.subscription.plan.cost}} for 20 days</span></h4>
                      <p class="font-size-1 mb-0">Payment method: <span class="text-dark font-weight-medium">Card ending in 9050</span></p>
                    <p class="font-size-1">Will end on: <span class="text-dark font-weight-medium">July 15, 2019</span></p> 
                    <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Change plan</a>
                    <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Edit Payment</a>
                     <a class="btn btn-xs btn-soft-secondary transition-3d-hover" href="#">View Invoices</a>  
                  </div>
                  <!-- End Card -->
                </div>
              </div>
            </div>
        </div>
        <!-- Title -->
        <div class="row justify-content-between align-items-center mb-3">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h2 class="h5 mb-0">Subscription plans</h2>
          </div>
        </div>
        <!-- End Title -->

        <!-- Subscription -->
        <div class="row">
          <div class="col-md-4">
           <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                <input type="radio" id="pricingRadio4" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio4">
                  <h4 class="h6 text-primary mb-3">Basic</h4>
                  <span class="d-block mb-2">
                    <span class="h1 font-weight-normal">$1000 JMD</span>
                    <span class="font-size-1">/ mon</span>
                  </span>
                  <p class="font-size-1 mb-0">For a single car to get started</p>
                </label>
              </div>
            </div>
              <div class="col-md-4">
               <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                    <input type="radio" id="pricingRadio2" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                    <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio2">
                      <h4 class="h6 text-primary mb-3">Dealer</h4>
                      <span class="d-block mb-2">
                        <span class="h1 font-weight-normal">$50000 JMD</span>
                        <span class="font-size-1">/ mon</span>
                      </span>
                      <p class="font-size-1 mb-0">For Dealer, a limit amount a cars</p>
                    </label>
                  </div>
               </div>
             <div class="col-md-4">
               <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                    <input type="radio" id="pricingRadio3" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                    <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio3">
                      <h4 class="h6 text-primary mb-3">Premium</h4>
                      <span class="d-block mb-2">
                        <span class="h1 font-weight-normal">Contact Us</span>
                      </span>
                      <p class="font-size-1 mb-0">For deailer post unlimited amount cars</p>
                    </label>
                  </div>
               </div>
        </div>
        <!-- End Subscription -->
      </div>
    </div>
    <!-- End Content Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return{
        userplans: {}
      }
    },
    computed: {
      ...mapGetters([
        'getActivePlans'
      ])
    },
    created() {
      console.log('createing view user plan view')
      this.$store.dispatch('FETCH_USER_ACTIVE_PLANS')

       // initialization of show animations
    $.HSCore.components.HSShowAnimation.init('.js-animation-link', {
      afterShow: function() {
        $('.js-slick-carousel').slick('setPosition');
      }
    });
    },
    methods: {
      showUserInvoice() {},
      changePlan() {}
    }
  }
</script>