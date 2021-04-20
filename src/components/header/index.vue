<template>
<div>
  <!-- ========== HEADER ========== -->
  <header id="header" class="header">
    <div class="header-section">
      <!-- Topbar -->
      <div class="container header-hide-content pt-2">
        <div class="d-flex align-items-center">
        

          <div class="ml-auto">
            <!-- Jump To -->
            <div class="hs-unfold d-sm-none mr-2">
              <a class="js-hs-unfold-invoker dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;"
                data-hs-unfold-options='{
                  "target": "#jumpToDropdown",
                  "type": "css-animation",
                  "event": "hover",
                  "hideOnScroll": "true"
                }'>
               {{credits}}  Credits Available
              </a>

              <div id="jumpToDropdown" class="hs-unfold-content dropdown-menu">
                <a class="dropdown-item" href="#"></a>
                <a class="dropdown-item" href="#">Contacts</a>
              </div>
            </div>
            <!-- End Jump To -->

            <!-- Links -->
            <div class="nav nav-sm nav-y-0 d-none d-sm-flex">
              <a class="nav-link" href="#"> {{credits}} Credits Available</a>
            </div>
            <!-- End Links -->

          </div>

          <ul class="list-inline mb-0">
          
        
              <!-- Account -->
          <li class="list-inline-item" v-if="getCurrentUser" >
                <dropdown-menu v-model="show">
                    <button class="btn btn-link dropdown-toggle">
                       <i class="fas fa-user-circle"></i>
                    </button>
                    <div slot="dropdown">
                        <router-link to="/my-account" class="dropdown-item" href="#">Profile</router-link>
                        <router-link to="/edit-profile" class="dropdown-item" href="#">Settings</router-link>
                        <a @click="logout()" class="dropdown-item" href="#">Sign Outs</a>
                    </div>
                </dropdown-menu>
          </li>
          <!-- End Account -->

          <!-- Account Login -->
          <li class="list-inline-item" v-else  >
            <div class="hs-unfold">
              <a class="js-hs-unfold-invoker btn btn-icon btn-xs btn-ghost-secondary" href="javascript:;" data-toggle="modal" data-target="#signupModal">
                <i style="color:blue;" class="fas fa-user-circle"></i>
              </a>
            </div>
          </li>
          <!-- End Account Login -->
           
          </ul>
        </div>
      </div>
      <!-- End Topbar -->

      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-lg">
          <!-- Logo -->
          <a class="navbar-brand" href="#" aria-label="Front">
            <img src="@/assets/automarket.png" width="150">
          </a>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button type="button" class="navbar-toggler btn btn-icon btn-sm rounded-circle"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar">
                  
            <span class="navbar-toggler-default">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M17.4,6.2H0.6C0.3,6.2,0,5.9,0,5.5V4.1c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,5.9,17.7,6.2,17.4,6.2z M17.4,14.1H0.6c-0.3,0-0.6-0.3-0.6-0.7V12c0-0.4,0.3-0.7,0.6-0.7h16.9c0.3,0,0.6,0.3,0.6,0.7v1.4C18,13.7,17.7,14.1,17.4,14.1z"/>
              </svg>
            </span>

            <span class="navbar-toggler-toggled">
              <svg width="14" height="14" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
              </svg>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBar" class="collapse navbar-collapse">
            <div class="navbar-body header-abs-top-inner">
              <ul class="navbar-nav">
                    <!-- Link -->
                  <router-link to="/" active-class="active" class="nav-item u-header__nav-item" exact>
                      <a class="nav-link u-header__nav-link" href="/">Home</a>
                  </router-link>

                  <!-- End Link -->
                  <!-- Link -->
                  <router-link tag="li" to="/cars" active-class="active" class="nav-item u-header__nav-item ">
                      <a class="nav-link u-header__nav-link" href="#">Car for Sale</a>
                  </router-link>
                  <!-- End Link -->

                      <!-- Link -->
              
                    <!-- Link -->
                  <router-link tag="li" to="/autoreps" active-class="active" class="nav-item u-header__nav-item ">
                      <a class="nav-link u-header__nav-link" href="#">Auto Reps</a>
                  </router-link>
                  <!-- End Link -->

                      <!-- Link -->
                  <router-link tag="li" to="/contactus" active-class="active" class="nav-item u-header__nav-item ">
                      <a class="nav-link u-header__nav-link" href="#">Contact us</a>
                  </router-link>
                  <!-- End Link -->
                
                  <!-- Button -->
                  <li class="nav-item u-header__nav-last-item">
                    <router-link tag="a" class="btn btn-sm btn-warning transition-3d-hover" to="/my-account/build">
                      Post Ads
                    </router-link>
                  </li>
                  <!-- End Button -->
              </ul>
            </div>
          </div>
          <!-- End Navigation -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- Sign Up Modal -->
  <div class="modal fade" id="signupModal" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
       
        <!-- Header -->
        <div class="modal-close">
          <button type="button" class="btn btn-icon btn-sm btn-ghost-secondary" data-dismiss="modal" aria-label="Close">
            <svg width="10" height="10" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="M11.5,9.5l5-5c0.2-0.2,0.2-0.6-0.1-0.9l-1-1c-0.3-0.3-0.7-0.3-0.9-0.1l-5,5l-5-5C4.3,2.3,3.9,2.4,3.6,2.6l-1,1 C2.4,3.9,2.3,4.3,2.5,4.5l5,5l-5,5c-0.2,0.2-0.2,0.6,0.1,0.9l1,1c0.3,0.3,0.7,0.3,0.9,0.1l5-5l5,5c0.2,0.2,0.6,0.2,0.9-0.1l1-1 c0.3-0.3,0.3-0.7,0.1-0.9L11.5,9.5z"/>
            </svg>
          </button>
        </div>
        <!-- End Header -->

        <!-- Body -->
        <div class="modal-body p-sm-5">
          <form class="js-validate">
            <!-- Sign in -->
            <div id="signinModalForm">
              <div class="text-center mb-5">
                <h2>Sign in</h2>
                <p>Don't have an account yet?
                  <a @click="signin()" class="js-animation-link" href="javascript:;">Sign up here</a>
                </p>
              </div>

              <!-- <a class="btn btn-block btn-white mb-2" href="#">
                  <span class="d-flex justify-content-center align-items-center">
                    <img class="avatar avatar-xss mr-2" src="../../assets/svg/brands/google.svg" alt="Image Description">
                    Sign in with Google
                  </span>
              </a> -->

              <a  @click="signin()" class="js-animation-link btn btn-block btn-primary mb-2" href="#">Sign in with Email</a>
            </div>
            <!-- End Sign in -->
          </form>
        </div>
        <!-- End Body -->
      </div>
    </div>
  </div>
  <!-- End Sign Up Modal -->
</div>
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

import { isMobile } from 'mobile-device-detect';
import { mapGetters } from 'vuex';

import LoginComponent from './components/LoginComponent.vue';
import SignupComponent from './components/SignupComponent.vue';
import ForgetComponent from './components/ForgetComponent.vue';
import DropdownMenu from '@innologica/vue-dropdown-menu'



export default {
  components: {
    LoginComponent,
    SignupComponent,
    ForgetComponent,
    DropdownMenu
  },
  data() {
    return {
      show: false,
      arrayOfObjects: [{ 'name': 'user'}],
      object: {
        name: 'User',
      },
      mobile: true,
      credits: 0,
      userdata:{},
      account: false,
      isloading: false,
      form: {
        signin: true,
        signup: false,
        forgetpassword: false
      },
      sidebarContent: false,
      sidebarLoginContent: false,
      account: {
         email: '',
         password: ''
      },
      validationErr: '',
      is_valid: '',
      error: {
          message: ''
        }
    }
  },
  computed: {
    ...mapGetters([
       'getCurrentUser',
       'GetCredits'
    ]),
    username: function() {
      if (this.getCurrentUser) {
          return this.getCurrentUser.name
      }
    },
    plan: function() {
        if (this.getCurrentUser) {
            if (this.getCurrentUser.plan_id == 1) {
              return 'Starter'
            }

            if (this.getCurrentUser.plan_id == 2) {
              return 'Individual'
            }

            if ( this.getCurrentUser.plan_id == 3 ) {
              return 'Dealer'
            } 

            if ( this,getCurrentUser.plan_id == 4) {
              return 'Premium'
            }
        }
    }, 
    useraccount: function() {
      if (this.getCurrentUser){
        if (this.getCurrentUser.role_id == 3) {
          return 'Auto Rep.'
        }

        if (this.getCurrentUser.role_id == 2) {
          return 'Dealer.'
        }

        if (this.getCurrentUser.role_id == 1) {
          return 'Buyer'
        }
      } 
      return 'Not Login'
    }
  },
  created() {

     this.$store.dispatch('GET_CREDIT')
  },
  mounted() {
         // INITIALIZATION OF UNFOLD
        // =======================================================
    //  var unfold = new HSUnfold('.js-hs-unfold-invoker').init();

     this.$store.dispatch('getCurrentUser')
       .then( resp => {
        this.account = true
     }).catch( err => {
       console.log(err.response)
   })
  },
	methods: {
       methodToRunOnSelect(payload) {
            this.object = payload;
          },
    showSidebarContent() {
      this.sidebarContent = !this.sidebarContent
    },
    signUp() {
      this.form.signup = true
      this.form.signin = false
      this.form.forgotPassword = false

    },
    showLogin() {
      this.form.signup = false
      this.form.signin = true
      this.form.forgotPassword = false
    },
    showForgotPassword() {
      this.form.signup = false
      this.form.signin = false
      this.form.forgotPassword = true
    },
    privacy() {
      this.$router.push('/privacy')
    },
    terms() {
      this.$router.push('/terms')
    },
    myAds() {
      this.$router.push('/my-ads')
    },
    goToCredits() {
      this.$router.push('/credits')
    },
    goToPlans() {
      this.$router.push('/plans')
    },
    logIn() {
       this.login(this.account)
    },
    goToProfile() {
      this.$router.push('/edit-profile')
    },
    goToSignUp() {
      this.$router.push('/signin')
    },
    goToForgetPassword() {
      this.$router.push('/forget-password')
    },
		signin() {
      $('#signupModal').modal('hide')
			this.$router.push('/signin')
		},
    myAccount() {
      this.$router.push('/my-account')
    },
    goToBilling() {
      this.$router.push('/activity')
    },
    goToHome() {
      this.$router.push('/')
    },
    showLoginContent() {
      this.sidebarLoginContent = !this.sidebarLoginContent
    },
    login( user) {
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
      getUserToken() {
         PushNotifications.register()
          .then(() => {
            fcm
               .getToken()
               .then(r => {
                  alert(`Token ${r.token}`)
                  // this.user.fcmToken = r.token
               })
               .catch( err => console.log(err));
         })
      },
    logout() {

      this.isloading = true
      this.$store.dispatch('AUTH_LOGOUT')
        .then( response => {
          
          console.log(response)
          var self = this
          setTimeout(function(){ 
              self.isloading = false
              self.$store.dispatch('getCurrentUser')
              self.$router.push('/') 
          }, 1000);
          
        }).catch(error => {
          console.log(error.response)
            var self = this
           setTimeout(function(){ 
              self.isloading = false
              self.$store.dispatch('getCurrentUser')
              location.reload()
          }, 1000);
        })
    }
	}
}
</script>
<style>
.slide-leave-active,
.slide-enter-active {
  transition: 0.5s;
}
.slide-enter {
  transform: translate(100%, 0);
}
.slide-leave-to {
  transform: translate(100%, 0);
}
</style>