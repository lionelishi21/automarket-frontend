<template>
  <div>
	<!-- Title -->
    <header class="text-center mb-7">
      <h2 class="h4 mb-0">Welcome Back!</h2>
      <p>Login to manage your account </p>
    </header>
    <!-- End Title -->

  <div v-if="error.message" class="alert alert-danger" role="alert">
    {{error.message}}
  </div>

    <div class="form-group">
      <div class="js-form-message js-focus-state">
        <label class="sr-only" for="signinEmail">Email</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="signinEmailLabel">
              <span class="fas fa-user"></span>
            </span>
          </div>
          <input v-model="user.email" type="email" class="form-control" id="signinEmail" 
                 placeholder="Email" aria-label="Email" >
        
        </div>
      </div>
    </div>
    <!-- End Form Group -->

    <!-- Form Group -->
    <div class="form-group">
      <div class="js-form-message js-focus-state">
        <label class="sr-only" for="signinPassword">Password</label>
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="signinPasswordLabel">
              <span class="fas fa-lock"></span>
            </span>
          </div>
          <input v-model="user.password" type="password" class="form-control" id="signinPassword" placeholder="Password">
        </div>
      </div>
    </div>
    <!-- End Form Group -->

    <div class="d-flex justify-content-end mb-4">
      <a  class="js-animation-link small link-muted" href="#" @click.prevent="forget()">Forgot Password?</a>
    </div>

    <div class="mb-2">
      <button type="submit" @click="logIn(user)" class="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
    </div>
    <div class="text-center mb-4" v-if="mobile">
    	<span class="small text-muted">Dont have an account? </span>
        <a href="#" @click.prevent="signUp()">
        <small>Signup</small>
        </a>
    </div>
    <div class="text-center mb-4" v-else>
    	<span class="small text-muted">Already have an account? </span>
        <router-link to="/register" tag="a" class="js-animation-link small">Signup
        </router-link>
    </div>
  </div>
</template>
<script>
import { isMobile } from 'mobile-device-detect';

export default {
	data() {
		return {
			mobile: true,
			user: {
				email: '',
				password: ''
			},
		    validationErr: '',
	        is_valid: '',
	        error: {
	          message: ''
	        },
	        isloading: false
		}
	},
	methods: {
	    logIn( user) {
	        this.is_valid = ''
	        this.error.message = ''

	        console.log(user)
	        this.$store.dispatch('login', user)
	          .then( response => {
	            console.log(response)
	            console.log('getting user..')
	             
	             this.$store.dispatch('getCurrentUser')
	               .then( resp => {
	                   
	                   location.reload()

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
	      signUp() {
	      	 this.$emit('go-signup')
	      },
	      forget()  {
	      	this.$emit('go-forgetpassword')
	      }
	}
}
</script>