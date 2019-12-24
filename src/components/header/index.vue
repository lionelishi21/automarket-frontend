<template>
  <!-- ========== HEADER ========== -->
  <header id="header" class="u-header">
    <div class="u-header__section">
      <!-- Topbar -->
      <div class="container u-header__hide-content pt-2">
        <div class="d-flex align-items-center">
          <div class="ml-auto">
            <!-- Jump To -->
            <div class="d-inline-block d-sm-none position-relative mr-4">
              <a id="jumpToDropdownInvoker" class="dropdown-nav-link dropdown-toggle d-flex align-items-center" href="javascript:;" role="button"
                 aria-controls="jumpToDropdown"
                 aria-haspopup="true"
                 aria-expanded="false"
                 data-unfold-event="hover"
                 data-unfold-target="#jumpToDropdown"
                 data-unfold-type="css-animation"
                 data-unfold-duration="300"
                 data-unfold-delay="300"
                 data-unfold-hide-on-scroll="true"
                 data-unfold-animation-in="slideInUp"
                 data-unfold-animation-out="fadeOut">
                Jump to
              </a>

              <div id="jumpToDropdown" class="dropdown-menu dropdown-unfold" aria-labelledby="jumpToDropdownInvoker">
                <a class="dropdown-item" href="../pages/contacts-agency.html">+1 876 513 6710</a>
                <a class="dropdown-item" href="resume.html">Post an ad</a>
              </div>
            </div>
            <!-- End Jump To -->

            <!-- Sign In -->
            <div class="d-inline-block d-sm-none">
              <a class="small font-weight-medium text-uppercase" @click="signin()" href="#">Sign in</a>
            </div>
            <!-- End Sign In -->

            <!-- Links -->
            <div class="d-none d-sm-inline-block ml-sm-auto">
           

                 <!-- Account Login -->
                 <li  v-if="account" class="list-inline-item">
                    <!-- Account Sidebar Toggle Button -->
                    <a id="sidebarNavToggler" class="btn btn-xs btn-text-secondary u-sidebar--account__toggle-bg ml-1" href="javascript:;" role="button"
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
                      <span class="position-relative">
                        <span class="u-sidebar--account__toggle-text">{{getCurrentUser.name}}</span>
                        <img class="u-sidebar--account__toggle-img" src="../../assets/img/100x100/img1.jpg" alt="Image Description">
                        <span class="badge badge-sm badge-success badge-pos rounded-circle">3</span>
                      </span>
                    </a>

                     <div id="sidebar-account-settings" class="dropdown-menu dropdown-unfold dropdown-menu-right" aria-labelledby="sidebar-account-settings-invoker">
                    <a  href="#" class="dropdown-item" @click="myAccount()">Account</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" @click="logout()">Sign Out</a>
                  </div>
                    <!-- End Account Sidebar Toggle Button -->
                  </li>
                  <!-- End Account Login -->

                  <li v-else class="list-inline-item">
                    <a class="u-header__navbar-link" href="#" @click="signin()">
                      <span class="fas fa-user-circle mr-1"></span>
                      Sign in
                    </a>
                  </li>
              </ul>
            </div>
            <!-- End Links -->

          </div>
        </div>
      </div>
      <!-- End Topbar -->

      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="Front">
          
            <span class="u-header__navbar-brand-text">
		         <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="Front">
                <span>Car<small>Market</small></span>
            </a>
            </span>
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
              <router-link tag="li" to="/commingsoon" active-class="active" class="nav-item u-header__nav-item ">
                  <a class="nav-link u-header__nav-link" href="#">Service & Repairs</a>
              </router-link>
              <!-- End Link -->

           
			             <!-- Link -->
              <router-link tag="li" to="/commingsoon" active-class="active" class="nav-item u-header__nav-item ">
                  <a class="nav-link u-header__nav-link" href="#">Contact us</a>
              </router-link>
              <!-- End Link -->
        		
              <!-- Button -->
              <li class="nav-item u-header__nav-last-item">
                <router-link tag="a" class="btn btn-sm btn-warning transition-3d-hover" to="/pricing-and-packages">
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
  </header>
  <!-- ========== END HEADER ========== -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userdata:{},
      account: false
    }
  },
  computed: {
    ...mapGetters([
       'getCurrentUser'
    ])
  },
  created(){
     this.$store.dispatch('getCurrentUser')
       .then( resp => {
        this.account = true
       }).catch( err => {
         // this.$router,push('/')
       })

  },
  mounted() {
  },
	methods: {
		signin() {
			this.$router.push('/signin')
		},
    myAccount() {
      this.$router.push('/my-account')
    },
    logout() {
      this.$store.dispatch('AUTH_LOGOUT')
        .then( response => {
           this.$store.push('/')
        })
    }
	}
}
</script>