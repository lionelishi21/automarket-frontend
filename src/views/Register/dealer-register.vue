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
            <h1 class="h4 mb-0">Car <abbr> Dealer</abbr></h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><router-link tag="a" to="/">Home</router-link></li>
                <li class="breadcrumb-item"><a href="#">Dealer Registration</a></li>
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

      <div class="row">
        <div class="col-md-6">
               <!-- Title -->
              <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
                <span class="btn btn-xs btn-soft-success btn-pill mb-2">Car Dealer</span>
                <h2 class="text-primary">Auto <span class="font-weight-semi-bold">Dealer</span></h2>
                <p>Direct or Find a Authorized AutoMarket Dealer Rep (DR)</p>
              </div>
              <!-- End Title -->

            <div class="row">
              <div class="col-sm-12 col-lg-12 mb-7 mb-lg-0">
                <ul class="list-unstyled u-indicator-vertical-dashed">
                    <!-- Info -->
                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>

                      <div class="media-body mt-n1">
                        <h3 class="h5 text-primary">AutoMarket Credit</h3>
                        <p>Buy AutoMarket (AM) Advertising Credits</p>
                      </div>
                    </li>
                    <!-- End Info -->

                    <!-- Info -->
                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body mt-n1">
                        <h3 class="h5 text-primary">Direct Advertising</h3>
                        <p>Post and manage your own Vehicle</p>
                      </div>
                    </li>
                    <!-- End Info -->

                    <!-- Info -->
                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body mt-n1">
                        <h3 class="h5 text-primary">AutoMarket Dealer Rep. (DR) </h3>
                        <p>Find reputable Dealer Rep near you, To help you sell your cars fast and easy, no hassle </p>
                      </div>
                    </li>
                    <!-- End Info -->

                      <!-- Info -->
                   <!--  <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="fas fa-check btn-icon__inner"></span>
                      </span>
                      <div class="media-body mt-n1">
                        <h3 class="h5 text-primary">Dealer Commission</h3>
                        <p> Visit and agree commission with car dealer</p>
                      </div>
                    </li> -->
                    <!-- End Info -->
                  </ul>
              </div>
              </div>
        </div>
        <div class="col-md-6">
           <form class=""  @submit.prevent="register(user)">
            <!-- Title -->
          <!--   <div class="mb-7">
              <h1 class="h3 text-primary font-weight-normal mb-0">Welcome to <span class="font-weight-semi-bold">AutoMarketJM</span></h1>
              <p>Fill out the form to get started.</p>
            </div> -->
            <!-- End Title -->
            <validation-error :errors="validationErrors"></validation-error>

            <div class="row">
             <!-- Form Group -->
            <div class="form-group col-md-6">
              <label class="form-label" for="signinSrEmail">Full Name</label>
              <input type="text" class="form-control" name="name" v-model="user.name" id="signinSrEmail" placeholder="Full name">

                     <div class="invalid-feedback">
                        {{errors.name}}
                     </div>
            </div>
            <!-- End Form Group -->

                <!-- Form Group -->
            <div class="form-group col-md-6 ">
              <label class="form-label" for="signinSrEmail">Username</label>
              <input type="username" class="form-control" name="username" id="signinSrEmail" v-model="user.username" placeholder="Enter Username" aria-label="Username" 
                     data-msg="Please enter a valid email address."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success">

                     <div class="invalid-feedback">
                        {{errors.username}}
                     </div>
            </div>
            <!-- End Form Group -->
            </div>
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
              <label class="form-label" for="signinSrEmail">Phone Number</label>
              <input type="phone_number" class="form-control" name="phone_number" id="signinSrEmail" v-model="user.phone" placeholder="Mobile Phone Number" aria-label="Email address" 
                     data-msg="Please enter a valid email address."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success">

                     <div class="invalid-feedback">
                        {{errors.phone}}
                     </div>
            </div>
            <!-- End Form Group -->


              <!-- Form Group -->
            <div class="js-form-message form-group">
              <label class="form-label" for="signinSrEmail">Company Name</label>
              <input type="phone_number" class="form-control" name="phone_number" id="signinSrEmail" v-model="user.company" placeholder="Mobile Phone Number" aria-label="Email address" 
                     data-msg="Please enter a valid email address."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success">

                     <div class="invalid-feedback">
                        {{errors.phone}}
                     </div>
            </div>
            <!-- End Form Group -->
                <!-- Form Group -->
            <div class="js-form-message form-group">
              <label class="form-label" for="signinSrEmail">Parish</label>
               <select class="custom-select" v-model="user.parish">
                   <option v-for="parish in parishes" :value="parish.name" >{{ parish.name}}</option>
                </select>

                     <div class="invalid-feedback">
                        {{errors.parish}}
                     </div>
            </div>
            <!-- End Form Group -->

             <div class="js-form-message form-group">
              <label class="form-label" for="signinSrEmail">Location</label>
              <input type="address" class="form-control" name="address" v-model="user.location" placeholder="" aria-label="Email address" 
                     data-msg="Please enter a valid email address."
                     data-error-class="u-has-error"
                     data-success-class="u-has-success">

                     <div class="invalid-feedback">
                        {{errors.address}}
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


            <!-- Button -->
            <div class="row align-items-center mb-5">
              <div class="col-5 col-sm-6">
                <span class="small text-muted">Already have an account?</span>
                <router-link to="/signin" tag="a" class="small"> Login</router-link>
              </div>

              <div class="col-7 col-sm-6 text-right">
                <button type="submit" class="btn btn-primary transition-3d-hover">Sign up</button>
              </div>
            </div>
            <!-- End Button -->
          </form>
        </div>
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
        type: 2,
        referral_id: ''
      },
      validationErrors: "",
      errors: {
        name: [],
        email: [],
        password: [],
        password_confimation: [],
      },
       parishes: [
        { name: 'Kingston' },
        { name: 'St. Andrew' },
        { name: 'Portland' },
        { name: 'St.Thomas' },
        { name: 'St. Catherine' },
        { name: 'St. Mary'},
        { name: 'St. Mary'},
        { name: 'St. Ann'},
        { name: 'Manchester'},
        { name: 'Clarendon'},
        { name: 'Hanover'},
        { name: 'Westmoreland'},
        { name: 'St. James'},
        { name: 'Trelawny'},
        { name: 'St. Elizabeth'},
      ],
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