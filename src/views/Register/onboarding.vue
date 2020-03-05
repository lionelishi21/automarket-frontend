<template>
  
  <!-- ========== MAIN ========== -->
  <main id="content" role="main" style="background: rgba(34, 49, 63, 1)">
    <!-- Hero Section -->

    <!-- Page Preloader -->
    <div id="jsPreloader" class="page-preloader" v-show="loading">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <!-- End Page Preloader -->

      <!-- Icon Blocks Section -->
    <div class="bg-light">
      <div class="container space-2 space-md-3">
        <!-- Title -->
        <div class="w-md-60 w-lg-35 text-center mx-auto mb-9">
          <h2 class="h5 font-weight-normal">
            Find your new car for sale or sell a car on <span class="text-primary font-weight-semi-bold">JACarMarket.com</span>
          </h2>
        </div>
        <!-- End Title -->

        <div class="w-lg-85 mx-lg-auto">
          <div class="card-deck d-block d-md-flex card-md-gutters-3">
            <!-- Card -->
            <article class="card text-center">
              <div class="card-body p-7">
                <!-- SVG Icon -->
                <div  class=" w-75 mx-auto mb-6">
                  <figure class="ie-for-sale">
                    <img class="js-svg-injector" src="../../assets/img/hotcar.png" alt="SVG"
                         width="250px" 
                       data-parent="#SVGkeyFeatures">
                  </figure>
                </div>
                <!-- End SVG Icon -->

                <h3 class="h4 mb-3">I'm a Seller</h3>
                <p class="mb-4">Discover how easy it is to sell your car right away</p>
                <button @click="goToDealerSignUp()" class="btn btn-sm btn-soft-danger transition-3d-hover">
                  Sell my Car(s)
                  <span class="fas fa-angle-right ml-2"></span>
                </button>
              </div>
            </article>
            <!-- End Card -->

            <!-- Card -->
            <article class="card text-center">
              <div class="card-body p-7">
                <!-- SVG Icon -->
                <div class=" w-75 mx-auto mb-6">
                  <figure class="ie-buyer">
                     <img class="js-svg-injector" src="../../assets/img/car.png" alt="SVG"
                         width="200px" 
                       data-parent="#SVGkeyFeatures">
                  </figure>
                </div>
                <!-- End SVG Icon -->

                <h3 class="h4 mb-3">I'm a Buyer</h3>
                <p class="mb-4">Ensure that you find the rigth car near you right away</p>
                <button @click="goToBuyerSignUp()" class="btn btn-sm btn-soft-primary transition-3d-hover">
                  Buy a Car
                  <span class="fas fa-angle-right ml-2"></span>
                </button>
              </div>
            </article>
            <!-- End Card -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Icon Blocks Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
export default {
	data() {
		return {
       onboard: false,
       loading: false,
			 user: {
				name: null,
				email: null,
				password: null,
        password_confimation: null
			},
      errors: {
        name: [],
        email: [],
        password: [],
        password_confimation: [],
      }
		}
	},
	methods: {
    resetUser() {
      this.user = {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      }
    },
    goToDealerSignUp() {
      
      this.loading = true

      let self = this
      setTimeout(function() {
        self.loading = false
        self.$router.push('/dealer-register')
      }, 1000)
    },
    goToBuyerSignUp() {

      this.loading = true

      let self = this
      setTimeout(function() {
        self.loading = false
        self.$router.push('/register')
      })
    }
	}
}
</script>