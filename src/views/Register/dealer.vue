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
    <!-- Login Form -->
    <div class="container space-2">
      <form class="w-md-75 w-lg-50 mx-md-auto"  @submit.prevent="register(user)">
        <!-- Title -->
        <div class="mb-7">
          <h1 class="h3 text-primary font-weight-normal mb-0">Welcome to <span class="font-weight-semi-bold">AutoMarketjm</span></h1>
          <p>Fill out the form to get started.</p>
        </div>
        <!-- End Title -->

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
          <label class="form-label" for="signinSrEmail">Username</label>
          <input type="text" class="form-control" name="name" v-model="user.username" id="signinSrEmail" placeholder="Username" aria-label="Full name" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success">

                 <div class="invalid-feedback">
                    {{errors.username}}
                 </div>
        </div>
        <!-- End Form Group -->
        <br>
        <legend><small>Company Information </small></legend>
        <br>
                <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Company Name</label>
          <input type="text" class="form-control" name="name" v-model="user.company_name" id="signinSrEmail" placeholder="Company Name" aria-label="Full name" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success">

                 <div class="invalid-feedback">
                    {{errors.company_name}}
                 </div>
        </div>
        <!-- End Form Group -->

        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Phone Number</label>
          <input type="text" class="form-control" name="name" v-model="user.phone_number" id="signinSrEmail" placeholder="Enter phone number" aria-label="Full name" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success">

                 <div class="invalid-feedback">
                    {{errors.phone_number}}
                 </div>
        </div>
        <!-- End Form Group -->
        
        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Address:</label>
          <input type="text" class="form-control" name="name" v-model="user.address" id="signinSrEmail" placeholder="Enter Address" aria-label="Full name" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success">

                 <div class="invalid-feedback">
                    {{errors.Address}}
                 </div>
        </div>
        <!-- End Form Group -->
                <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Parish:</label>
          <select class="form-control" v-model="user.parish">
              <option value="">Select Parish</option>
              <option v-for="p in parishes" :value="p.name" >{{p.name}} </option>
          </select>
                 <div class="invalid-feedback">
                    {{errors.parish}}
                 </div>
        </div>

        <!-- End Form Group -->
        
        <div class="form-group">
                  <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">City / District:</label>
          <input type="text" class="form-control" name="name" v-model="user.city" id="signinSrEmail" placeholder="Enter District Name" aria-label="Full name" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success">

                 <div class="invalid-feedback">
                    {{errors.city}}
                 </div>
        </div>
        <!-- End Form Group -->
        </div>
        <div class="form-group">
             <GmapMap
              :center="{lat:18.1155174, lng:-77.2760026}"
              :zoom="10"
              style="width: 500px; height: 300px"
            >
              <GmapMarker
                :key="index"
                v-for="(m, index) in markers"
                :position="m.position"
                :clickable="true"
                @drag="updateCoordinates"
                :draggable="true"
                @click="center=m.position"
              />
            </GmapMap>
            <br>
        </div>

        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrEmail">Email address</label>
          <input type="email" class="form-control" name="email" id="signinSrEmail" v-model="user.email" placeholder="Email address" aria-label="Email address" >

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
                <a class="link-muted" href="../pages/terms.html">Terms and Conditions</a>
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
    <!-- End Login Form -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>
export default {
	data() {
		return {
       coordinates: null,
       loading: false,
			 user: {
    			name: null,
    			email: null,
          username: null,
          company_name: null,
          phone_number: null,
          address: null,
          city: null,
    			password: null,
          password_confimation: null
			},
      errors: {
        name: [],
        email: [],
        password: [],
        password_confimation: [],
      },
        markers: [{
            position: {
              lat: 18.1155174,
              lng: -77.2760026
            }
          }, {
            position: {
              lat: 11.0,
              lng: 11.0
            }
          }],
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
	methods: {
    resetUser() {
      this.user = {
        name: null,
        email: null,
        password: null,
        password_confirmation: null,
      }
    },
   updateCoordinates(location) {
        console.log(markers)
        this.coordinates = {
            lat: location.latLng.lat(),
            lng: location.latLng.lng(),
        };
    },
    convertLatLong() {

    },
   register(user) {
        this.loading = true;
        this.$store.dispatch('AUTH_REGISTER', user)
          .then(response => {
            this.resetUser()
            this.loading = false
            let successMessage = response.data.message
            this.$router.push('/signin')
          })
          .catch(error => {
            let data = error.response.data
            for (let key in this.errors) {
              // reset all errors
              this.errors[key] = []
              let errorMessage = data[key]
              if (errorMessage)
                this.errors[key] = errorMessage
            }
            this.loading = false
          })
      }
	}
}
</script>