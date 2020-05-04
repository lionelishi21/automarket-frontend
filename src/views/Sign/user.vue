<template>

  <!-- ========== MAIN ========== -->
    <!-- Login Form -->
    <div class="container space-2">
      <form class="js-validate w-md-75 w-lg-50 mx-md-auto" @submit.prevent="login(user)">
        <!-- Title -->
        <div class="mb-7">
          <h2 class="h3 text-primary font-weight-normal mb-0">Welcome <span class="font-weight-semi-bold">back</span></h2>
          <p>Login to manage your account.</p>
        </div>
        <!-- End Title -->

        <div class="alert alert-success" role="alert" v-show="successMsg">
          <h4 class="alert-heading">Well done!</h4>
          <p class="alert-text">Thank you for registering.</p>
          <p class="alert-text mb-0">Check your email for verification.</p>
        </div>
        <!-- Form Group -->
         <div class="js-form-message form-group">
          <input 
                 type="email" 
                 :class="is_valid"
                 class="form-control"
                 v-model="user.email" name="email" id="signinSrEmailExample1" placeholder="Email address" aria-label="Email address" 
                 data-msg="Please enter a valid email address."
                 data-error-class="u-has-error"
                 data-success-class="u-has-success" required>
              
                 <div class="invalid-feedback">
                    {{error.message['error']}}
                    <a href="#"> resend verification code</a>
                 </div>
        </div>
        <!-- End Form Group -->

        <!-- Form Group -->
        <div class="js-form-message form-group">
          <label class="form-label" for="signinSrPassword">
            <span class="d-flex justify-content-between align-items-center">
              Password
              <a class="link-muted text-capitalize font-weight-normal" href="recover-account-simple.html">Forgot Password?</a>
            </span>
          </label>
          <input type="password" :class="is_valid" class="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" 
                 data-msg="Your password is invalid. Please try again."
                 data-error-class="u-has-error"
                 v-model="user.password"
                 data-success-class="u-has-success" required>
        </div>
        <!-- End Form Group -->

        <!-- Button -->
        <div class="row align-items-center mb-5">
          <div class="col-6">
            <span class="small text-muted">Don't have an account?</span>
               <router-link to="/user-onboarding" tag="a">signup</router-link>
          </div>

          <div class="col-6 text-right">
            <button type="submit" class="btn btn-primary transition-3d-hover">Login</button>
          </div>
        </div>
        <!-- End Button -->
      </form>
    </div>
    <!-- End Login Form -->
</template>
<script>
import { Plugins } from "@capacitor/core";
const { PushNotifications } = Plugins;
 
//
// with type support
import { FCM } from "capacitor-fcm";
const fcm = new FCM();
 
//
// alternatively - without types
const { FCMPlugin } = Plugins;
 

export default {
    data() {
    	return {
    		user: {
    			email: '',
    			password: '',
          fcmToken: '',
    		},
        successMsg: false,
        validationErr: '',
        is_valid: '',
        error: {
          message: ''
        }
    	}
    },
    created() {

      this.successMsg = false
      if (this.$route.query.user != undefined ) {
         this.successMsg = true
      }

    },
    mounted() {
      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate');
    },
    methods: {
      login( user) {

        this.is_valid = ''
        this.error.message = ''

        this.$store.dispatch('login', user)
          .then( response => {
           
            console.log(response)
            console.log('getting user..')
             
             this.$store.dispatch('getCurrentUser')
               .then( resp => {
                 this.$router.push('/')
               }).catch( err => {
                  console.log( err.response)
               })
               
          })
          .catch( error => {
             console.log(error.response)
             let errorMessage = error.response.data.message
             this.is_valid = 'is-invalid'
             this.error.message = error.response.data
          })
      },
      getUserToken() {
         PushNotifications.register()
          .then(() => {

            fcm
               .getToken()
               .then(r => {
                  alert(`Token ${r.token}`)
                  this.user.fcmToken = r.token
               })
               .catch( err => console.log(err));
         })
      },

    }
}
</script>