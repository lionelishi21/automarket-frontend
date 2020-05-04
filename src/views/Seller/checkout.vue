<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">

   	    <!-- Cart Section -->
    <div class="container space-2 space-lg-3" v-if="isCompleted">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <figure id="iconChecked" class="ie-height-90 max-width-11 mx-auto mb-3">
          <img class="js-svg-injector" src="@/assets/svg/components/checked-icon.svg" alt="SVG"
               data-parent="#iconChecked">
        </figure>
        <div class="mb-5">
          <h1 class="h3 font-weight-medium">Your order is completed!</h1>
          <p>Thank you for your order! your order is completed.</p>
        </div>
        <router-link to="/cars" class="btn btn-primary btn-pill transition-3d-hover px-5" href="classic.html">Continue Browsing</router-link>
      </div>
    </div>
    <!-- End Cart Section -->


    <!-- Checkout Section -->
    <div class="container" v-else style="height: 100vh;">

        <div class="row">
                    strip
                      <stripe-checkout
                        ref="checkoutRef"
                        :pk="publishableKey"
                        :items="items"
                        :successUrl="successUrl"
                        :cancelUrl="cancelUrl"
                      >
                        <template slot="checkout-button">
                          <button @click="checkout">Shutup and take my money!</button>
                        </template>
                      </stripe-checkout>
                </div>qew
      <!--  -->
    </div>
    <!-- End Checkout Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
import PayPal from 'vue-paypal-checkout'
import braintree from 'braintree-web'
import { mapGetters } from 'vuex';
import axios from 'axios';
import { StripeCheckout } from 'vue-stripe-checkout';

export default {
components: {
  PayPal,
   StripeCheckout
},
data() {
	return {
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
  computed: {
  	...mapGetters([
  		'CarDetails',
  		'getPlanDetails'
  	])
  },
  created() {
	 this.$store.dispatch('PLAN_DETAILS', this.$route.params.plan)
  },
  methods: {
    checkoutstripe () {
       this.$refs.checkoutRef.redirectToCheckout();
    },
    paymentAuthorized: function (data) {
      // console.log(data);
    },
    paymentCompleted: function (data) {
     
      this.isLoading = true;
      console.log(data);

      if (data['state'] == 'approved') {

        let details = {
          plan_id: this.getPlanDetails.id
        }


        let formData = new FormData()
        formData.append('payments', data)
        formData.append('car', JSON.stringify(details))

               // formData.append('main', JSON.stringify(this.formData.main));

        console.log(formData)
        let form = {
          payments: data,
          car: details
        }

        let token = localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;


        this.$store.dispatch('BUY_CREDIT', form)
          .then( res => {
            console.log(res)
             // Alert message must goes here
              this.isLoading = false
       				var self = this
       				setTimeout(function() {
       					// self.isCompleted = true
       				}, 1000)
          }, error => {
            console.log(error.response)
          })
      }
    },
    paymentCancelled: function (data) {
      // console.log(data);
    },
    placeorder() {

      this.isLoading = true;
      let checkout = {
        car_id: this.CarDetails.id,
        plan_id: this.getPlanDetails.id
      }

      if (this.paymentmethod == 'card'){
        // do something else
      }
      if (this.paymentmethod == 'paypal') {
        console.log(checkout)

        let token = localStorage.getItem('access_token')
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

         axios.post('http://18.206.230.202/api//api/payment', checkout)
          .then ( res => {
            console.log(res)
            this.isLoading = false
            window.location = res.data.paypal_link
          }, error => {
            console.log(error.response)
          })
      }
    },
    goToPricing() {
      this.$router.push('/credits')
    },
  	checkout(car_id, plan_id) {
  		this.isLoading = true
  		let checkout = {
  			car_id: car_id,
  			plan_id: plan_id
  		}

		axios.post('http://18.206.230.202/api//api/subscriptions/create', checkout)
			.then(response => {
				console.log(response)
				this.isLoading = false

				var self = this
				setTimeout(function() {
					// self.isCompleted = true
				}, 1000)
			}, error => {
				console.log(error.response)
			})
  		}
  	}
}
</script>
