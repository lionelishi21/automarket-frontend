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
    <!-- End Cart Section -->
    <!-- Checkout Section -->
    <div class="container sp" v-else>
      <div class="row">
        <div class="col-lg-4 order-lg-2 mb-7 mb-lg-0">
          <div class="pl-lg-4">
            <!-- Order Summary -->
            <div class="border shadow-soft rounded p-5 mb-4 mt">
              <!-- Title -->
              <div class="border-bottom pb-4 mb-4 mt-5 mt-5">
                <h2 class="h5 mb-0">Order summary</h2>
              </div>
              <!-- End Title -->

              <!-- Product Content -->
              <div class="">
                <div class="">
					<div class="card-sm-columns">
						<!-- Item -->
						<div class="card mb-3" >
					        <!-- Car Item -->
					    <!-- Gallery -->
					        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;"
					           :data-src="'http://127.0.0.1:8000/storage/thumbnail/'+CarDetails.image" 
					           data-fancybox="fancyboxGalleryExample1"
					           data-caption="Front in frames - image #01"
					           data-speed="700"
					           data-is-infinite="true">
					          <img class="img-fluid w-100" :src="'http://127.0.0.1:8000/storage/thumbnail/'+CarDetails.image" alt="Image Description">

					          <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
					            <span class="btn btn-icon btn-sm btn-white">
					              <span class="fas fa-images btn-icon__inner"></span>
					            </span>
					          </div>
					        </a>


					        <img class="js-fancybox d-none" v-for="img in CarDetails.images" alt="Image Description"
					             data-fancybox="fancyboxGalleryExample1"
					             :data-src="'http://127.0.0.1:8000/storage/images/'+img.image"
					             data-caption="Front in frames - image #02"
					             data-speed="700"
					             data-is-infinite="true">

						    <div class="card-body p-4">
							 
							  <!-- Name -->
						      <div class="mb-1">
					     		 <h2 class="h5">
					              <a href="property-description.html">{{CarDetails.year}} {{CarDetails.make}} {{CarDetails.model}} | <small>{{CarDetails.milage}}</small></a>
					            </h2>
						      </div>
						      <!-- End Name -->

						      <!-- Location -->
						      <div class="mb-1">
						        <a class="font-size-1" href="property-description.html">
						          <span class="fas fa-map-marker-alt mr-1"></span>
						          {{CarDetails.location}}
						        </a>
						      </div>
						      <!-- End Location -->
						        <!-- Category -->
						        <div>
						          <a class="font-size-1" href="property-description.html">
						          	 <span class="fas fa-list-alt mr-1"></span>
						             {{CarDetails.make}} > {{CarDetails.model}}
						          </a>
						        </div>
						        <!-- Category -->
					      <!-- End Options -->
						    </div>
						  <!-- End Car Item -->
						</div>
						<!-- End Item -->
					</div>
                </div>
              </div>
              <!-- End Product Content -->


              <!-- Fees -->
              <div class="border-bottom pb-4 mb-4">
                <div class="media align-items-center mb-3">
                  <h3 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Item subtotal</h3>
                  <div class="media-body text-right">
                    <span class="font-weight-medium">{{getPlanDetails.cost}}</span>
                  </div>
                </div>
              </div>
              <!-- End Fees -->

              <!-- Total -->
              <div class="media align-items-center">
                <h4 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Total</h4>
                <div class="media-body text-right">
                  <span class="font-weight-semi-bold">{{getPlanDetails.cost}}</span>
                </div>
              </div>
              <!-- End Total -->
            </div>
            <!-- End Order Summary -->

            <!-- Accordion -->
            <div id="shopCartAccordion" class="accordion rounded shadow-soft mb-4">
              <!-- Card -->
              <div class="card rounded">
                <div class="card-header card-collapse" id="shopCartHeadingOne">
                  <h3 class="mb-0">
                  	  <!-- <button type="submit" ">Place order</button> -->
                	   <PayPal
                	        v-if="paymentmethod == 'paypal'"
                	        class="btn btn-link btn-block card-btn font-weight-medium"
						    env="sandbox"
						    :amount="getPlanDetails.cost"
						    currency="JMD"
						    v-bind:client="paypal">
						</PayPal>
					     <button type="button" v-if="getPlanDetails.cost == 'free'" @click="checkout(getPlanDetails.id, getPlanDetails.id)" class="btn btn-block btn-primary font-weight-medium ">
	                      Checkout
	                    </button>
                  </h3>
                </div>
            
              </div>
              <!-- End Card -->
            </div>
            <!-- End Accordion -->

            <!-- End Help Link -->
          </div>
        </div>

        <div class="col-lg-8 order-lg-1">
          <form class="js-validate">
            <!-- Payment -->
            <div class="mb-7">
              <!-- Title -->
              <div class="mb-4 mt-5">
                <h2 class="h4">Select Payment method</h2>
              </div>
              <!-- End Title -->
			  <div class="row"">
			  	  <div class="col-md-6">
			  	  	 <div class="custom-control custom-radio custom-control-inline checkbox-outline bg-white">
		              <input v-model="paymentmethod" value="debit" type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input checkbox-outline__input">
		              <label class="checkbox-outline__label rounded p-1 mb-0" for="customRadioInline2">
		               <div class="">
						    <div class="card-body">
					    	      <span class="d-inline-block bg-white border rounded pb-4">
						              <img class="max-width-8" src="../../assets/img/100x60/img1.jpg" alt="Image Description">
						           </span>
						           <span class="d-inline-block bg-white border rounded pb-4">
						              <img class="max-width-8" src="../../assets/img/100x60/img2.jpg" alt="Image Description">
						           </span>
						           <p class="card-text">Choose this if yuo want to pay with your Debit/Credit card</p>
						    </div>
						  </div>
		              </label>
		            </div>
			  	 </div>
			  	  <div class="col-md-6">
			  	  	 <div class="custom-control custom-radio custom-control-inline checkbox-outline bg-white">
		              <input v-model="paymentmethod" value="paypal" type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input checkbox-outline__input">
		              <label class="checkbox-outline__label rounded p-1 mb-0" for="customRadioInline1">
		                  <div class="">
							    <div class="card-body">
						    	     <img class="max-width-9 pb-4" src="@/assets/img/100x60/img5.jpg" alt="Image Description">
							          <p class="card-text">Choose this if yuo want to pay with your PayPal Account</p>
							    </div>
					      </div>
		              </label>
		            </div>
			  	 </div>
			 
			  </div>
			  <div class="row" v-if="paymentmethod == 'paypal'">

			  	<div class="col-md-12">
			  	
			    </div>
			  </div>

		<!-- 	
          
              <!-- Button -->
           <!--    <div class="d-flex justify-content-between align-items-center">
                <button type="submit" class="btn btn-primary btn-sm-wide btn-pill transition-3d-hover">Place order</button>
              </div> -->
              <!-- End Button -->
            </div>
            <!-- End Payment -->
          </form>
        </div>
      </div>
    </div>
    <!-- End Checkout Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
import PayPal from 'vue-paypal-checkout'
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
components: {
  PayPal
},
data() {
	return {
		isCompleted: false,
		isLoading: false,
		paymentmethod: '',
	    paypal: {
	      sandbox: 'AWi18rxt26-hrueMoPZ0tpGEOJnNT4QkiMQst9pYgaQNAfS1FLFxkxQuiaqRBj1vV5PmgHX_jA_c1ncL',
          production: 'AVZhosFzrnZ5Mf3tiOxAD0M6NHv8pcB2IFNHAfp_h69mmbd-LElFYkJUSII3Y0FPbm7S7lxBuqWImLbl'
	    }
	}
  },
  computed: {
  	...mapGetters([
  		'CarDetails',
  		'getPlanDetails'
  	])
  },
  created() {
  	this.$store.dispatch('GET_CAR_DETAILS', this.$route.params.batch_id)
	this.$store.dispatch('PLAN_DETAILS', this.$route.params.plan)
  }, 
  methods: {
  	checkout(car_id, plan_id) {
  		this.isLoading = true
  		let checkout = {
  			car_id: car_id,
  			plan_id: plan_id
  		}

		axios.post('http://127.0.0.1:8000/api/subscriptions/create', checkout)
			.then(response => {
				console.log(response)
				this.isLoading = false
				
				var self = this
				setTimeout(function() {
					self.isCompleted = true
				}, 1000)
			}, error => {
				console.log(error.response)
			})
  		}
  	}
  
}
</script>