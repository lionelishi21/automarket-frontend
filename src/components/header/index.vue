<template>

<!-- ========== HEADER ========== -->
<header id="header" class="u-header">
  <div class="u-header__section">
    <!-- Topbar -->
    <div class="container u-header__hide-content pt-2">
      <div class="d-flex align-items-center">

        <div class="ml-auto">
          <!-- Jump To -->
          <div class="d-inline-block d-sm-none position-relative mr-2">
              <a class="dropdown-nav-link d-flex">
                  {{credits}} Credits Available
              </a>
          </div>
          <div class="d-inline-block d-sm-none position-relative mr-2">
             <router-link tag="a" class="btn btn-sm btn-warning transition-3d-hover" to="/pricing-and-packages">
                  Post Ads
                </router-link>
            
          </div>
          <!-- End Jump To -->

          <!-- Links -->
          <div class="d-none d-sm-inline-block ml-sm-auto">
            <ul class="list-inline mb-0">
              <li class="list-inline-item mr-0">
                <a class="u-header__navbar-link" href="../pages/help.html">Help</a>
              </li>
              <li class="list-inline-item mr-0">
                <a class="u-header__navbar-link" href="../pages/contacts-agency.html">
                    {{GetCredits.unactive}} Credits Available
                </a>
              </li>
            </ul>
          </div>
          <!-- End Links -->
        </div>

        <ul class="list-inline ml-2 mb-0">

          <!-- Account Login -->
         <li v-if="getCurrentUser" class="list-inline-item position-relative">
            <!-- Account Dropdown -->
           
              <!-- Account Sidebar Toggle Button -->
             <a id="sidebarNavToggler" 
                 class="btn btn-xs btn-text-secondary u-sidebar--account__toggle-bg ml-1"
                 href="javascript:;" 
                 @click="showSidebarContent()">
                  
                  <span class="position-relative">
                      <span class="u-sidebar--account__toggle-text">{{username}}</span>
                      <span class="u-sidebar--account__toggle-text"></span>
                      <img class="u-sidebar--account__toggle-img" 
                           src="../../assets/img/100x100/img1.jpg" 
                           alt="Image Description">
                            
                      <span class="badge badge-sm badge-success badge-pos rounded-circle">3</span>
                  </span>
              </a>
              <!-- End Account Sidebar Toggle Button -->
          </li>


       <li v-else class="list-inline-item">
             
              <a class="btn btn-xs btn-text-secondary u-sidebar--account__toggle-bg ml-1"
                 href="javascript:;" 
                 @click="showLoginContent()"
                 role="button">
                <span class="fas fa-user-circle mr-1"></span>
                Sign in
              </a>
            </li>

          <!-- End Account Login -->
        </ul>
      </div>
    </div>
    <!-- End Topbar -->

    <div id="logoAndNav" class="container">
      <!-- Nav -->
      <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">

        <!-- Logo -->
        <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" @click.prevent="goToHome()" href="#" aria-label="Front">
          <img src="@/assets/automarket.png" width="150">

        </a>
        <!-- End Logo -->

        <!-- Responsive Toggle Button -->
        <button type="button" class="navbar-toggler btn u-hamburger"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar">
          <span id="hamburgerTrigger" class="u-hamburger__box">
            <span class="u-hamburger__inner"></span>
          </span>
        </button>
        <!-- End Responsive Toggle Button -->

        <!-- Navigation -->
        <div id="navBar" class="collapse navbar-collapse u-header__navbar-collapse">
          <ul class="navbar-nav u-header__navbar-nav">
             
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
              <router-link tag="li" to="/commingsoon" active-class="active" class="nav-item u-header__nav-item ">
                  <a class="nav-link u-header__nav-link" href="#">Contact us</a>
              </router-link>
              <!-- End Link -->
            
              <!-- Button -->
              <li class="nav-item u-header__nav-last-item">
                <router-link tag="a" class="btn btn-sm btn-warning transition-3d-hover" to="/build">
                  Post Ads
                </router-link>
              </li>
              <!-- End Button -->
          </ul>
        </div>
        <!-- End Navigation -->
      </nav>
      <!-- End Nav -->
    </div>
  </div>
    
    <!-- TODO: to be place in a component by itself  -->
    <!-- Account Sidebar Navigation -->
    <transition name="slide">
       <aside v-show="sidebarContent" class="u-sidebar">
        <div class="u-sidebar__scroller">
          <div class="u-sidebar__container">
            <div class="u-sidebar--account__footer-offset">
              <!-- Toggle Button -->
              <div class="d-flex justify-content-between align-items-center pt-4 px-7">
                <h3 class="h6 mb-0">My Account</h3>

                <button type="button" class="close ml-auto" @click="showSidebarContent()"
                        >&times;</span>
                </button>
              </div>
              <!-- End Toggle Button -->

              <!-- Content -->
              <div class="js-scrollbar u-sidebar__body">

                <!-- Holder Info -->
                 <header class="d-flex align-items-center u-sidebar--account__holder mt-3">
                    <div class="position-relative" v-if="getCurrentUser">
                      <img class="u-sidebar--account__holder-img" src="../../assets/img/100x100/img1.jpg" alt="Image Description">
                      <span class="badge badge-xs badge-outline-success badge-pos rounded-circle"></span>
                    </div>
                    <div class="ml-3">
                     {{username}}
                      <span class="font-weight-semi-bold"> <span class="badge badge-success ml-1">Pro</span></span>
                      <span class="u-sidebar--account__holder-text">Seller Account</span>
                    </div>

                  <!-- Settings -->
                  <div class="btn-group position-relative ml-auto mb-auto">
                    <a id="sidebar-account-settings-invoker" class="btn btn-xs btn-icon btn-text-secondary rounded" href="javascript:;" role="button"
                            aria-controls="sidebar-account-settings"
                            aria-haspopup="true"
                            aria-expanded="false"
                            data-toggle="dropdown"
                            data-unfold-event="click"
                            data-unfold-target="#sidebar-account-settings"
                            data-unfold-type="css-animation"
                            data-unfold-duration="300"
                            data-unfold-delay="300"
                            data-unfold-animation-in="slideInUp"
                            data-unfold-animation-out="fadeOut">
                      <span class="fas fa-ellipsis-v btn-icon__inner"></span>
                    </a>

                    <div id="sidebar-account-settings" class="dropdown-menu dropdown-unfold dropdown-menu-right" aria-labelledby="sidebar-account-settings-invoker">
                      <a class="dropdown-item" href="#">Settings</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="#" @click="logout()">Sign Out</a>
                    </div>
                  </div>
                  <!-- End Settings -->
                </header>
                <!-- End Holder Info -->

                <div class="u-sidebar__content--account">
                  <!-- List Links -->
                  <ul class="list-unstyled u-sidebar--account__list">
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/my-account" class="u-sidebar--account__list-link" href="#" @click.prevent="myAccount()">
                        <span class="fas fa-home u-sidebar--account__list-icon mr-2"></span>
                        Dashboard
                      </router-link>
                    </li>
                     <li class="u-sidebar--account__list-item">
                      <router-link to="/build" class="u-sidebar--account__list-link">
                        <span class="fas fa-home u-sidebar--account__list-icon mr-2"></span>
                        Post an Ad
                      </router-link>
                    </li>
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/edit-profile" class="u-sidebar--account__list-link"> 
                        <span class="fas fa-user-circle u-sidebar--account__list-icon mr-2"></span>
                        Profile
                      </router-link>
                    </li>
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/my-ads" class="u-sidebar--account__list-link" href="#" @click.prevent="myAds()">
                        <span class="fas fa-tasks u-sidebar--account__list-icon mr-2"></span>
                        My Ads
                      </router-link>
                    </li>
                  
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/activity" class="u-sidebar--account__list-link">
                        <span class="fas fa-exchange-alt u-sidebar--account__list-icon mr-2" @click="goToBilling"></span>
                        Billing
                      </router-link>
                    </li>

                    <li class="u-sidebar--account__list-item">
                      <router-link to="/plans" class="u-sidebar--account__list-link" href="#">
                        <span class="fas fa-cubes u-sidebar--account__list-icon mr-2"></span>
                        Plans
                      </router-link>
                    </li>
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/credits" class="u-sidebar--account__list-link" href="#">
                        <span class="fas fa-cubes u-sidebar--account__list-icon mr-2"></span>
                        Credits
                      </router-link>
                    </li>
                  </ul>
                  <!-- End List Links -->

                  <div class="u-sidebar--account__list-divider"></div>

                  <!-- List Links -->
                  <ul class="list-unstyled u-sidebar--account__list">
                    <li class="u-sidebar--account__list-item">
                      <router-link to="/invites" class="u-sidebar--account__list-link">
                          <span class="fas fa-user-plus u-sidebar--account__list-icon mr-2"></span>
                          Invite friends
                      </router-link>
                    </li>
                  </ul>
                  <!-- End List Links -->
                </div>
              </div>
            </div>

            <!-- Footer -->
            <footer id="SVGwaveWithDots" class="u-sidebar__footer u-sidebar__footer--account">
              
              <ul class="list-inline mb-0">
                <li class="list-inline-item pr-3">
                  <a class="u-sidebar__footer--account__text" href="../pages/privacy.html">Privacy</a>
                </li>
                <li class="list-inline-item pr-3">
                  <a class="u-sidebar__footer--account__text" href="../pages/terms.html">Terms</a>
                </li>
                <li class="list-inline-item">
                  <a class="u-sidebar__footer--account__text" href="../pages/help.html">
                    <i class="fas fa-info-circle"></i>
                  </a>
                </li>
              </ul>

              <!-- SVG Background Shape -->
              <div class="position-absolute right-0 bottom-0 left-0">
                <img class="js-svg-injector" src="@/assets/svg/components/wave-bottom-with-dots.svg" alt="Image Description"
                       data-parent="#SVGwaveWithDots">
              </div>
              <!-- End SVG Background Shape -->
            </footer>
            <!-- End Footer -->
          </div>
        </div>
      </aside>
    </transition>
  <!-- End Account Sidebar Navigation -->

   <!-- Account Sidebar Navigation -->
  <transition name="slide">
    <aside  v-show="sidebarLoginContent" class="u-sidebar" >
      <div class="u-sidebar__scroller">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
          
            <!-- Toggle Button -->
            <div class="d-flex align-items-center pt-4 px-7">
              <button type="button" class="close ml-auto" @click="showLoginContent()">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- End Toggle Button -->

            <!-- Content -->
            <div class="js-scrollbar u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <div class="">
                  <!-- Login -->
                  <div id="login" data-target-group="idForm">
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
                          <input v-model="account.email" type="email" class="form-control" id="signinEmail" 
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
                          <input v-model="account.password" type="password" class="form-control" id="signinPassword" placeholder="Password">
                        </div>
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
                      <router-link to="/register" tag="a" class="js-animation-link small"
                        >Signup
                      </router-link>
                    </div>
                  </div>


                  <!-- Signup -->
                  <div id="signup" v-show="form.signup">
                    <!-- Title -->
                    <header class="text-center mb-7">
                      <h2 class="h4 mb-0">Welcome to Front.</h2>
                      <p>Fill out the form to get started.</p>
                    </header>
                    <!-- End Title -->

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
                          <input type="email" class="form-control"  id="signupEmail" placeholder="Email" aria-label="Email" aria-describedby="signupEmailLabel" required
                                 data-msg="Please enter a valid email address."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
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
                          <input type="password" class="form-control"  id="signupPassword" placeholder="Password" aria-label="Password" aria-describedby="signupPasswordLabel" required
                                 data-msg="Your password is invalid. Please try again."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
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
                          <input type="password" class="form-control" id="signupConfirmPassword" placeholder="Confirm Password" aria-label="Confirm Password" aria-describedby="signupConfirmPasswordLabel" required
                                 data-msg="Password does not match the confirm password."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->

                    <div class="mb-2">
                      <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Get Started</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">Already have an account?</span>
                      <a class="js-animation-link small" href="javascript:;"
                         data-target="#login"
                         data-link-group="idForm"
                         data-animation-in="slideInUp">Login
                      </a>
                    </div>

                    <div class="text-center">
                      <span class="u-divider u-divider--xs u-divider--text mb-4">OR</span>
                    </div>

                    <!-- Login Buttons -->
                    <div class="d-flex">
                      <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                        <span class="fab fa-facebook-square mr-1"></span>
                        Facebook
                      </a>
                      <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                        <span class="fab fa-google mr-1"></span>
                        Google
                      </a>
                    </div>
                    <!-- End Login Buttons -->
                  </div>
                  <!-- End Signup -->


                  <!-- Forgot Password -->
                  <div id="forgotPassword" v-show="form.forgetpassword">
                    <!-- Title -->
                    <header class="text-center mb-7">
                      <h2 class="h4 mb-0">Recover Password.</h2>
                      <p>Enter your email address and an email with instructions will be sent to you.</p>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="recoverEmail">Your email</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="recoverEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input type="email" class="form-control"  id="recoverEmail" placeholder="Your email" aria-label="Your email" aria-describedby="recoverEmailLabel" required
                                 data-msg="Please enter a valid email address."
                                 data-error-class="u-has-error"
                                 data-success-class="u-has-success">
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="mb-2">
                      <button type="submit" class="btn btn-block btn-sm btn-primary transition-3d-hover">Recover Password</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">Remember your password?</span>
                      <a class="js-animation-link small" href="javascript:;"
                         data-target="#login"
                         data-link-group="idForm"
                         data-animation-in="slideInUp">Login
                      </a>
                    </div>
                  </div>
                  <!-- End Forgot Password -->
                </div>
              </div>
            </div>
            <!-- End Content -->
          </div>

          <!-- Footer -->
          <footer id="SVGwaveWithDots" class="u-sidebar__footer u-sidebar__footer--account">
            <ul class="list-inline mb-0">
              <li class="list-inline-item pr-3">
                <a class="u-sidebar__footer--account__text" href="../pages/privacy.html">Privacy</a>
              </li>
              <li class="list-inline-item pr-3">
                <a class="u-sidebar__footer--account__text" href="../pages/terms.html">Terms</a>
              </li>
              <li class="list-inline-item">
                <a class="u-sidebar__footer--account__text" href="../pages/help.html">
                  <i class="fas fa-info-circle"></i>
                </a>
              </li>
            </ul>

            <!-- SVG Background Shape -->
            <div class="position-absolute right-0 bottom-0 left-0">
             <!--  <img class="" src="../../assets/svg/components/wave-bottom-with-dots.svg" alt="Image Description"
                     data-parent="#SVGwaveWithDots"> -->
            </div>
            <!-- End SVG Background Shape -->
          </footer>
          <!-- End Footer -->
        </div>
      </div>
    </aside>
  </transition>
  <!-- End Account Sidebar Navigation -->


</header>
<!-- ========== END HEADER ========== -->

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

import { mapGetters } from 'vuex';
export default {
  data() {
    return {
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
     
    }
  },
  created() {
     $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));
     this.$store.dispatch('GET_CREDIT')
  },
  mounted() {
      // initialization of unfold component
     $.HSCore.components.HSUnfold.init($('[data-unfold-target]'));

     this.$store.dispatch('getCurrentUser')
       .then( resp => {
        this.account = true
     }).catch( err => {
       console.log(err.response)
   })
  },
	methods: {
    showSidebarContent() {
      this.sidebarContent = !this.sidebarContent
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