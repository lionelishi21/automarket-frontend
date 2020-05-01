<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main" >

      <!-- Page Preloader -->
      <div id="jsPreloader" class="page-preloader" v-show="loading">
        <div class="page-preloader__content-centered">
          <div class="spinner-grow text-primary" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <!-- End Page Preloader -->
    <div v-if="isCredit" >
    <!-- Hero Section -->
    <div id="SVGwave1BottomSMShape" class=" position-relative bg-primary">
      <div class="container space-top-2 space-bottom-2">
        <div class="w-md-80 w-lg-60 text-center mx-auto">
          <div class="">
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
       <div class="position-relative mt-23 z-index-2 space-bottom-2 space-bottom-md-3">
          <div class="container">
            <div class="row">
                <div class="col-md-12">
                      <!-- Pricing Section -->
                    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll bg-white" data-options='{direction: "normal"}'>
                      <!-- Apply your Parallax background image here -->
                      <div class="container space-2">
                        <!-- Card Group -->
                        <div class="card-group card-group-md-break rounded shadow-soft">
                          <div class="card">
                            <div class="card-body text-center pt-9 px-7">
                              <!-- Button Group -->
                      
                              <!-- End Button Group -->

                              <!-- Monthly Plans -->
                              <div id="pricingMonthly">
                                <!-- Range Slider -->
                                <div class="text-secondary font-weight-semi-bold mb-4">
                                   <span class="mr-2"> <img src="@/assets/automarket.png" width="50">Credits </span>
                                  <span class="ml-n2"> <b>{{credits}} </b></span>
                                </div>
                                <div class="display-4 text-primary font-weight-semi-bold mb-5">
                                  <span>$</span>
                                  {{cost}}
                                </div>
                                
                                  <range-slider
                                        style="width: 100%"
                                        class="slider js-range-slider u-range-slider"
                                        min="1"
                                        max="10"
                                        step="1"
                                        v-model="credits">
                                      </range-slider>
                                <!-- End Range Slider -->
                              </div>
                              <!-- End Monthly Plans -->
                            </div>
                            <div class="card-footer border-0 pt-0 px-7">
                              <!-- Icon Blocks -->
                              <div class="media align-items-center">
                                <figure id="icon13" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                                  <img class="js-svg-injector" src="../../assets/svg/icons/icon-13.svg" alt="SVG"
                                       data-parent="#icon13">
                                </figure>
                                <div class="media-body">
                                  <h4 class="h6 mb-1">Info</h4>
                                  <p class="small mb-0"><a class="font-size-1" href="../pages/contacts-start-up.html">Contact us</a> for information regarding our credits system</p>
                                </div>
                              </div>
                              <!-- End Icon Blocks -->
                            </div>
                          </div>

                          <div class="card">
                            <div class="card-body py-9 px-7">
                              <!-- Icon Blocks -->
                              <div class="media align-items-center border-bottom pb-4 mb-4">
                                <figure id="icon21" class="svg-preloader ie-height-56 w-100 max-width-8 mr-4">
                                  <img class="js-svg-injector" src="../../assets/svg/icons/icon-21.svg" alt="SVG"
                                       data-parent="#icon21">
                                </figure>
                                <div class="media-body">
                                  <h3 class="h5">Buy AutoMarket Credit</h3>
                                  <p class="mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                  </p>
                                </div>
                              </div>
                              <!-- End Icon Blocks -->

                              <!-- Icon Blocks -->
                              <div class="media align-items-center">
                                <div class="media-body">
                                <button @click="buyCredits()" type="button" class="btn btn-soft-twitter mb-1 btn-block">Buy {{credits}} Credits</button>
                                </div>
                              </div>
                              <!-- End Icon Blocks -->
                            </div>
                          </div>
                        </div>
                        <!-- End Card Group -->
                      </div>
                    </div>
                    <!-- End Pricing Section -->           
                </div>
            </div>
          </div>
        <!-- Divider -->
        <div class="w-80 mx-auto">
          <hr class="my-0">
        </div>
        <!-- End Divider -->
       </div>
    </div>
  </div>
    <!-- End Pricing Section -->
         <!-- Checkout Section -->
    <div  v-else class="container" v-else style="height: 100vh;">
      <div class="row">
        <div class="col-md-6 p-10">
          <!-- Item -->
              <div class="content-centered p-3 mb-0">


              <div class="mb-5">
                <i class="fa fa-arrow-left"></i>
                <a href="#" @click.prevent="isCredit = false"> Back</a>
              </div>
              <!-- Name -->
                <div class="mb-10">
                    <h5 class="h6">
                      <a href="property-description.html"></a>
                    </h5>
                    <h2> 
                      <b>{{cost}} JMD</b>
                    </h2>
                </div>
                <!-- End Name -->
                <div class="mb-1 mt-10">
                  <div class="card shadow-lg text-center mt-10">
                   <h1 class="pt-5">{{credits}}<br> <small>Credit(s)</small> </h1> 
                  </div>
                </div>
              </div>
            <!-- End Car Item -->
        </div>
        <div class="col-md-6 shadow" style="height: 100vh;">
          <div class="row">
              <div class="p-5" style="margin-top: 20%;">

                
                  <!-- TODO add invoice id -->
                 <button type="button" class="btn btn-dark btn-block mb-1">GPay</button>
                  <PayPal
                     currency="USD"
                     env="sandbox"
                     :button-style="myStyle"
                     :amount="cost"
                     :client="paypal"
                     :experience="experience"
                     v-on:payment-authorized="paymentAuthorized"
                     v-on:payment-completed="paymentCompleted"
                     v-on:payment-cancelled="paymentCancelled">

                  </PayPal>
             <!--     <div class="text-center mt-2">
                    <span class="divider divider-xs divider-text">Bank Deposite</span>
                </div>

                 <div class="form-row mt-10">
                      <p>Bank Name: NCB</p>
                 </div> -->


                <div class="text-center mt-2">
                    <span class="divider divider-xs divider-text">Or pay with card</span>
                </div>

               <!-- Input Group -->
                    <div class="form-row mt-10">
                     
                       <div class="col-md-12">
                         <label>Card informaton</label>
                         <div class="input-group input-group-sm">
                           <input class="form-control" type="number" name="cardNumber" placeholder="1234 1234 1234 1234">
                         </div>
                       </div> 
                       <div class="col-md-6">
                           <div class="input-group input-group-sm">
                             <input class="form-control" type="number" name="cardNumber" placeholder="MM / YY" aria-label="Card number" aria-describedby="cardNumberLabel">
                           </div>
                       </div>
                      <div class="col-md-6">
                         <div class="input-group input-group-sm">
                           <input class="form-control" type="number" name="cardNumber" placeholder="CVC" aria-label="Card number" aria-describedby="cardNumberLabel">
                         </div>
                      </div>

                      <div class="col-md-12 mt-5">
                         <label><small>Name on card</small></label>
                         <div class="input-group input-group-sm">
                           <input class="form-control" type="text" name="cardNumber">
                         </div>
                      </div>

                      <button type="button" class="btn btn-dark btn-block mt-10">Pay {{cost}} JMD </button>
                 </div>
                 <div class="form-row">

                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
    <!-- End Checkout Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
import axios from 'axios'
import PayPal from 'vue-paypal-checkout'
import braintree from 'braintree-web'
import RangeSlider from 'vue-range-slider'
import { StripeCheckout } from 'vue-stripe-checkout';
// you probably need to import built-in style
import 'vue-range-slider/dist/vue-range-slider.css'
import { mapGetters } from 'vuex';

 export default {
  components: {
      RangeSlider,
        PayPal,
   StripeCheckout
  },
  data() {
    return {
      isCompleted: false,
      isCredit: true,
      loading: false,
      credits: 1,
      isCompleted: false,
      isLoading: false,
      creditcard_method: false,
      paymentmethod: 'card',
       braintreeSdk: braintree,
      experience: {
        input_fields: {
          no_shipping: 1,
        },
      },
      myStyle: {
          label: 'checkout',
          size:  'responsive',
          shape: 'rect',
          color: 'black'
      },
      paypal: {
        sandbox: 'AbUMmsT4JJSCUg86MP4SV1-iA3jjCtPYpqkrV3xrU2ZrAZ17FkFHA_AuI2LVe2xhu-nYBZB5ezKN2Y9z',
        production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
      },
      publishableKey: 'pk_test_Yfe8V58F3Kw8aZUWqLtXqNnl00Bv7eXD7P',
      items: [
        {
          sku: 'sk_test_Yha4F4mAhvGfsvZSvvCDgbBy00nMLLAhkJ',
          quantity: 1
        }
      ],
      successUrl: 'http://working',
      cancelUrl: 'http://working',
    }
  },
  created(){
      this.$store.dispatch('GET_ALL_PLANS');
  },
  computed: {
    ...mapGetters([
      'getPlans',
     ]),
    cost: function() {

      if (this.credits >= 5 && this.credits < 8) {
         return this.credits * 1000 - 1000
      }

      if (this.credits >= 8) {
         return this.credits * 1000 - 2000
      }

      return this.credits * 1000
    }
  },
  mounted() {
     $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
     $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
  },
  methods: {
    buyCredits() {

      this.loading = true
      
      var self = this
      
      setTimeout(function(){ 
       
        self.isCredit = false
      
        self.loading = false
     
      }, 1000);

    },
    paymentAuthorized: function (data) {
      // console.log(data);
    },
    paymentCompleted: function (data) {
     
      this.isLoading = true;
      console.log(data);

      if (data['state'] == 'approved') {

        let form = {
          payments: data,
          amount: this.credits,
          cost: this.cost
        }

        this.$store.dispatch('BUY_CREDIT', form)
          .then( res => {
            console.log(res)
             // Alert message must goes here
              this.isLoading = false
              var self = this
              setTimeout(function() {
                self.$router.go('/order-complete')
              }, 1000)
          }, error => {
            console.log(error.response)
          })
      }
    },
    paymentCancelled: function (data) {
      // console.log(data);
    },
  }
 }
</script>
