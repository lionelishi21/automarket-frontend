<template>
 <!-- Login -->
   <div id="login">
      <!-- Title -->
      <header class="text-center mb-7">
        <h2 class="h4 mb-0">Welcome Back!</h2>
        <p>Login to manage your account.</p>
      </header>
      <!-- End Title -->

      <!-- Form Group -->
      <div class="form-group">
          <label class="sr-only" for="signinEmail">Email</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="signinEmailLabel">
                <span class="fas fa-user"></span>
              </span>
            </div>
            <input v-model="account.email" type="email" class="form-control" id="signinEmail" 
                   placeholder="Email" aria-label="Email" >
	           
	           <div class="invalid-feedback">
	              {{error.message}}
	           </div>
        </div>
      </div>
      <!-- End Form Group -->

      <!-- Form Group -->
      <div class="form-group">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="signinPasswordLabel">
                <span class="fas fa-lock"></span>
              </span>
            </div>
            <input v-model="account.password" type="password" class="form-control" id="signinPassword" placeholder="Password">
          </div>
      </div>
      <!-- End Form Group -->

      <div class="d-flex justify-content-end mb-4">
        <a  class="js-animation-link small link-muted" href="javascript:;"
           data-target="#forgotPassword"
           data-link-group="idForm"
           data-animation-in="slideInUp">Forgot Password?</a>
      </div>

      <div class="mb-2">
        <button type="submit" @click="logIn()" class="btn btn-block btn-sm btn-primary transition-3d-hover">Login</button>
      </div>

      <div class="text-center mb-4">
        <span class="small text-muted">Do not have an account?</span>
        <a class="js-animation-link small" href="javascript:;"
           data-target="#signup"
           data-link-group="idForm"
           data-animation-in="slideInUp">Signup
        </a>
      </div>
    </div>
</template>
<script>
export default {
	data() {
		return {
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
		login() {

			this.isloading = true

			console.log(this.user)

			this.$store.dispatch('login', this.user)
				
				.then( response => {

				   console.log(response)
				   
				   this.isloading = false
					
				   this.$store.dispatch('getCurrentUser')
		          
		               .then( resp => {
		           
		                 this.$router.push('/')
		           
		               }).catch( err => {
		                  
		                  console.log( err.response)
		               
		               })
				})
				.catch( errpr => {
				    
				     console.log( error.response)
				    
				     let errorMessage = error.response.data.message
		           
		             this.is_valid = 'is-invalid'
		           
		             this.error.message = error.response.data
		          
		             this.isloading = false
				})

		}
	}
}
</script>