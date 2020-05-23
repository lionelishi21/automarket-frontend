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
        <!-- Title Section -->

    <div class="bg-light">
      <div class="container py-5">
        <div class="row align-items-sm-center">
          <div class="col-sm-6 mb-sm-0">
            <h1 class="h4 mb-0">Dealer <abbr> Rep </abbr> Register</h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><router-link tag="a" to="/">Home</router-link></li>
                <li class="breadcrumb-item"><a href="#">Dealer Rep Register</a></li>
              </ol>
            </nav>
            <!-- End Breadcrumb -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Title Section -->

      <!-- Team Section -->
    <div class="container space-2">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <span class="btn btn-xs btn-soft-success btn-pill mb-2">AutoMarket (DR)</span>
        <h2 class="text-primary">Dealer <span class="font-weight-semi-bold">Rep</span></h2>
        <p>Earn commission from Car Dealers</p>
      </div>
      <!-- End Title -->

      <!-- Icon Blocks Section -->
      <div class="row justify-content-center mx-gutters-2">
        <div class="col-sm-6 col-lg-4 mb-7 mb-lg-0">
         
          <!-- Icon Blocks -->
          <div class="text-center px-5">
            <figure id="exampleFeaturesSVG1" class="max-width-27 w-100 mx-auto mb-4">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/server-woman.svg" alt="Image Description"
                   data-parent="#exampleFeaturesSVG1">
            </figure>

            <div class="mb-4">
              <h3 class="h5">AutoMarket Credit</h3>
              <p class="mb-md-0">Buy Advertising Credits</p>
            </div>

            <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
              more info
              <span class="fas fa-angle-right ml-2"></span>
            </a>
          </div>
          <!-- End Icon Blocks -->

        </div>

        <div class="col-sm-6 col-lg-4 mb-7 mb-lg-0">
          <!-- Icon Blocks -->
          <div class="text-center px-5">
            <figure id="exampleFeaturesSVG2" class="max-width-27 w-100 mx-auto mb-4">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/full-stack.svg" alt="Image Description"
                   data-parent="#exampleFeaturesSVG2">
            </figure>

            <div class="mb-4">
              <h3 class="h5">Authorized</h3>
              <p class="mb-md-0">Be an Authorized AutoMarket Rep with an AutoMarket (AM) Business Card </p>
            </div>

            <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="@/starter/index.html">
              read more
              <span class="fas fa-angle-right ml-2"></span>
            </a>
          </div>
          <!-- End Icon Blocks -->
        </div>

        <div class="col-sm-6 col-lg-4">
            <!-- Icon Blocks -->
            <div class="text-center px-5">
              <figure id="exampleFeaturesSVG3" class="max-width-27 w-100 mx-auto mb-4">
                <img class="js-svg-injector" src="@/assets/svg/illustrations/business-woman.svg" alt="Image Description"
                     data-parent="#exampleFeaturesSVG3">
              </figure>

              <div class="mb-4">
                <h3 class="h5">Post Ads</h3>
                <p class="mb-md-0">Post auto ads on AutoMarket ( AM ) for Car Dealers Island wide</p>
              </div>

              <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="../pages/hire-us.html">
                more info  
                <span class="fas fa-angle-right ml-2"></span>
              </a>
            </div>
            <!-- End Icon Blocks -->
        </div>
      <!-- End -->
     </div>
     <!-- End Icon Blocks Section -->
  
     <div class="row justify-content-center mx-gutters-2 mt-10">
       <div class="col-sm-6 col-lg-4 mb-lg-0">
          <!-- Icon Blocks -->
          <div class="text-center px-5">
            <figure id="exampleFeaturesSVG1" class="max-width-27 w-100 mx-auto mb-4">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/server-woman.svg" alt="Image Description"
                   data-parent="#exampleFeaturesSVG1">
            </figure>

            <div class="mb-4">
              <h3 class="h5">Earn $$$</h3>
              <p class="mb-md-0">Earn $$$ from Dealers when you have made succesfull refferal</p>
            </div>

            <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
              more info
              <span class="fas fa-angle-right ml-2"></span>
            </a>
          </div>
          <!-- End Icon Blocks -->
       </div>
       <div class="col-sm-6 col-lg-4 mb-lg-0">
            <!-- Icon Blocks -->
          <div class="text-center px-5">
            <figure id="exampleFeaturesSVG1" class="max-width-27 w-100 mx-auto mb-4">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/server-woman.svg" alt="Image Description"
                   data-parent="#exampleFeaturesSVG1">
            </figure>

            <div class="mb-4">
              <h3 class="h5">Dealer Commission</h3>
              <p class="mb-md-0">Visit and agree commission with car dealer</p>
            </div>

            <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/" target="_blank">
              more info
              <span class="fas fa-angle-right ml-2"></span>
            </a>
          </div>
          <!-- End Icon Blocks -->
       </div>

     </div>
      <div class="row justify-content-center mx-gutters-2 mt-10">
         <button class="btn btn-success">Sign up and get started</button>
      </div>
    </div>
    <!-- End Team Section -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>
import ValidationError from '@/components/ValidationError.vue'
export default {
  components: {
    ValidationError
  },
  data() {
    return {
      loading: false,
      user: {
        name: null,
        email: null,
        password: null,
        password_confimation: null,
        referral_id: ''
      },
      validationErrors: "",
      errors: {
        name: [],
        email: [],
        password: [],
        password_confimation: [],
      }
    }
  },
  created() {
      if (this.$route.query.referral_id != undefined ) {
         this.user.referral_id = this.$route.query.referral_id
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
   register(user) {
      console.log(user)
        this.validationErrors = ''
        this.loading = true;
        this.$store.dispatch('AUTH_REGISTER', user)
          .then(response => {
            
            this.resetUser()
            
            var self = this
           
            setTimeout(function() {
              
               self.loading = false
              
               let successMessage = response.data.message
              
               self.$router.push('/signin?user=registered')
            }, 1000)
           
           
          })
          .catch(error => {
             this.loading = false
             console.log(error.response.data)
             let data = error.response.data.errors
             if (error.response.status == 422){
                 this.validationErrors = error.response.data.errors;
               }
          })
      }
  }
}
</script>