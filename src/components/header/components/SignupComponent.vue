<template>
  <div id="signup">

  	<!-- Page Preloader -->
    <div id="jsPreloader" class="page-preloader" v-show="loading">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
<!-- End Page Preloader -->

    <!-- Title -->
        <header class="text-center mb-7">
          <h2 class="h4 mb-0">Welcome to Front.</h2>
          <p>Fill out the form to get started.</p>
        </header>

	      <!-- End Title -->
	      <validation-error :errors="validationErrors"></validation-error>
	      <!-- Form Group -->

        <!-- End Title -->
        <form class=""  @submit.prevent="register(user)">
            <!-- Form Group -->
            <div class="form-group">
              <div class="js-form-message js-focus-state">
                <label class="sr-only" for="signupEmail">Full Name</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="signupEmailLabel">
                      <span class="fas fa-user"></span>
                    </span>
                  </div>
                  <input type="text" class="form-control"  id="signupEmail" placeholder="Email" v-model="user.name">
	                <div class="invalid-feedback">
	                  {{errors.name}}
	               </div>
                </div>
              </div>
            </div>
                    <!-- End Input -->

	        <!-- Form Group -->
	        <div class="form-group">
	          <div class="js-form-message js-focus-state">
	            <label class="sr-only" for="signupEmail">Email</label>
	            <div class="input-group">
	              <div class="input-group-prepend">
	                <span class="input-group-text" id="signupEmailLabel">
	                  <span class="fas fa-user"></span>
	                </span>
	              </div>
	              <input type="email" class="form-control"  id="signupEmail" placeholder="Email" v-model="user.email" >
	              <div class="invalid-feedback">
                      {{errors.email}}
                   </div>
	            </div>
	          </div>
	        </div>
	        <!-- End Input -->

            <!-- Form Group -->
            <div class="form-group">
              <div class="js-form-message js-focus-state">
                <label class="sr-only" for="signupPassword">Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="signupPasswordLabel">
                      <span class="fas fa-lock"></span>
                    </span>
                  </div>
                  <input type="password" class="form-control"  id="signupPassword" placeholder="Password" v-model="user.password">

                   <div class="invalid-feedback">
                      {{errors.password}}
                   </div>
                </div>
              </div>
            </div>
            <!-- End Input -->

            <!-- Form Group -->
            <div class="form-group">
              <div class="js-form-message js-focus-state">
                <label class="sr-only" for="signupConfirmPassword">Confirm Password</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="signupConfirmPasswordLabel">
                      <span class="fas fa-key"></span>
                    </span>
                  </div>
                  <input type="password" class="form-control" v-model="user.password_confimation">
                </div>
              </div>
            </div>
            <!-- End Input -->

            <div class="mb-2">
              <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
            </div>

            <div class="text-center mb-4">
              <span class="small text-muted">Already have an account? </span>
              <a href="#" @click.pevent="showLogin()">Login
              </a>
            </div>
       </form>
    </div>
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

	methods: {
		showLogin() {
			this.$emit('go-signin')
		},
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