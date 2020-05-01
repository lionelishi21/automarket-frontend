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
    <div class="bg-light mb-10">
      <div class="container py-5">
        <div class="row align-items-sm-center">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h1 class="h4 mb-0">Register</h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><router-link tag="a" to="/">Home</router-link></li>
                <li class="breadcrumb-item"><a href="#">Register</a></li>
              </ol>
            </nav>
            <!-- End Breadcrumb -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Title Section -->

    <!-- End Page Preloader -->
    <!-- Login Form -->
    <div class="container">
      <div class="row">
      <div class="col-md-6">
          <div id="stickyBlockStartPoint" class="col-md-12">
        <!-- Sticky Block -->
        <div class="js-sticky-block"
             data-has-sticky-header="true"
             data-offset-target="#logoAndNav"
             data-sticky-view="md"
             data-start-point="#stickyBlockStartPoint"
             data-end-point="#stickyBlockEndPoint"
             data-offset-top="24"
             data-offset-bottom="24">
          <!-- Pricing -->
          <div class="position-relative bg-primary shadow-primary-lg text-white rounded z-index-2 p-7">
            <span class="d-block">
              <span class="align-top">$</span>
              <span class="display-4 font-weight-semi-bold">JMD 1,000</span>
              <span class="font-size-3">.00</span>
              <span class="d-block">Per Credit</span>
            </span>

            <hr class="opacity-md my-4">

            <div class="mb-5">
              <p class="text-light">Sign up and get one AutoMarketJM Credit free.</p>
            </div>


            <div class="mb-5">
              <p class="text-light">What is a credit?</p>
               <p class="text-light">A credit is use to create premium adds that will ensure that your vehilces are solid fast and seasy</p>
            </div>
            </div>

              <div class="mb-5">
             

            <!-- <a class="btn btn-white btn-pill transition-3d-hover mb-2" href="https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/">
              Get Started
              <span class="fas fa-arrow-right text-primary font-size-1 ml-2"></span>
            </a> -->

            <p class="small text-white-70">No credit card required.</p>

            <!-- SVG Shape -->
            <div class="position-absolute bottom-0 right-0 w-100 max-width-15 z-index-n1">
              <figure class="ie-abstract-shapes-11">
                <img class="js-svg-injector rounded-bottom" src="../../assets/svg/components/abstract-shapes-11.svg" alt="Image Description"
                     data-parent="#pricingSection">
              </figure>
            </div>
            <!-- End SVG Shape -->
          </div>
          <!-- End Pricing -->
        </div>
        <!-- End Sticky Block -->
      </div>
      </div>
      <div class="col-md-6">
        <form class=""  @submit.prevent="register(user)">
          <!-- Title -->
          <div class="mb-7">
            <h1 class="h3 text-primary font-weight-normal mb-0">Welcome to <span class="font-weight-semi-bold">AutoMarketJM</span></h1>
            <p>Fill out the form to get started.</p>
          </div>
          <!-- End Title -->
          {{validationErrors}}
          <validation-error :errors="validationErrors"></validation-error>
            <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrEmail">Full Name</label>
            <input type="text" class="form-control" name="name" v-model="user.name" id="signinSrEmail" placeholder="Full name" aria-label="Full name" 
                   data-msg="Please enter a valid email address."
                   data-error-class="u-has-error"
                   data-success-class="u-has-success">

                   <div class="invalid-feedback">
                      {{errors.name}}
                   </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrEmail">Email address</label>
            <input type="email" class="form-control" name="email" id="signinSrEmail" v-model="user.email" placeholder="Email address" aria-label="Email address" 
                   data-msg="Please enter a valid email address."
                   data-error-class="u-has-error"
                   data-success-class="u-has-success">

                   <div class="invalid-feedback">
                      {{errors.email}}
                   </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrPassword">Password</label>
            <input type="password" class="form-control" name="password" v-model="user.password" id="signinSrPassword" placeholder="********" aria-label="********" 
                   data-msg="Your password is invalid. Please try again."
                   data-error-class="u-has-error"
                   data-success-class="u-has-success">


                   <div class="invalid-feedback">
                      {{errors.password}}
                   </div>
          </div>
          <!-- End Form Group -->

          <!-- Form Group -->
          <div class="js-form-message form-group">
            <label class="form-label" for="signinSrConfirmPassword">Confirm password</label>
            <input type="password" class="form-control" name="confirmPassword" v-model="user.password_confimation" id="signinSrConfirmPassword" placeholder="********" aria-label="********" 
                   data-msg="Password does not match the confirm password."
                   data-error-class="u-has-error"
                   data-success-class="u-has-success">


                   <div class="invalid-feedback">
                      {{errors.password_confimation}}
                   </div>
          </div>
          <!-- End Form Group -->

          <!-- Checkbox -->
          <div class="js-form-message mb-5">
            <div class="custom-control custom-checkbox d-flex align-items-center text-muted">
              <input type="checkbox" class="custom-control-input" id="termsCheckbox" name="termsCheckbox" 
                     data-msg="Please accept our Terms and Conditions."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success">
              <label class="custom-control-label" for="termsCheckbox">
                <small>
                  I agree to the
                  <a class="link-muted" href="#">Terms and Conditions</a>
                </small>
              </label>
            </div>
          </div>
          <!-- End Checkbox -->

          <!-- Button -->
          <div class="row align-items-center mb-5">
            <div class="col-5 col-sm-6">
              <span class="small text-muted">Already have an account?</span>
              <router-link to="/signin" tag="a" class="small">Login</router-link>
            </div>

            <div class="col-7 col-sm-6 text-right">
              <button type="submit" class="btn btn-primary transition-3d-hover">Get Started</button>
            </div>
          </div>
          <!-- End Button -->
        </form>
       </div>
     </div>
    </div>
    <!-- End Login Form -->
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