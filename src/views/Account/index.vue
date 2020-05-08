<template>
  <div id="app">
    <header-component></header-component>
    <main id="content" role="main">


          <!-- Breadcrumb Section -->
          <div class="bg-dark">
            <div class="container space-top-1 pb-3">
              <div class="row">
                <div class="col-lg-5 order-lg-2 text-lg-right mb-4 mb-lg-0">
                  <div class="d-flex d-lg-inline-block justify-content-between justify-content-lg-end align-items-center align-items-lg-start">
                    <!-- Breadcrumb -->
                    <ol class="breadcrumb breadcrumb-white breadcrumb-no-gutter mb-0">
                      <li class="breadcrumb-item"><a class="breadcrumb-link" href="../home/index.html">Home</a></li>
                      <li class="breadcrumb-item"><a class="breadcrumb-link" href="dashboard.html">Account</a></li>
                      <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
                    </ol>
                    <!-- End Breadcrumb -->

                    <!-- Breadcrumb Nav Toggle Button -->
                    <div class="d-lg-none">
                      <button type="button" class="navbar-toggler btn u-hamburger u-hamburger--white"
                              aria-label="Toggle navigation"
                              aria-expanded="false"
                              aria-controls="breadcrumbNavBar"
                              data-toggle="collapse"
                              data-target="#breadcrumbNavBar">
                        <span id="breadcrumbHamburgerTrigger" class="u-hamburger__box">
                          <span class="u-hamburger__inner"></span>
                        </span>
                      </button>
                    </div>
                    <!-- End Breadcrumb Nav Toggle Button -->

                  </div>
                </div>

                <div class="col-lg-7 order-lg-1">
                  <!-- User Info -->
                  <div class="media d-block d-sm-flex align-items-sm-center">
                    <div class="u-lg-avatar position-relative mb-3 mb-sm-0 mr-3">
                      <img class="img-fluid rounded-circle" src="../../assets/img/160x160/img2.jpg" alt="Image Description">
                      <span class="badge badge-md badge-outline-success badge-pos badge-pos--bottom-right rounded-circle">
                        <span class="fas fa-check"></span>
                      </span>
                    </div>
                    <div class="media-body">
                      <h1 class="h3 text-white font-weight-medium mb-1">Hi, {{userdata.name}}</h1>
                      <span class="d-block text-white">{{userdata.email}}</span>
                    </div>
                  </div>
                  <!-- End User Info -->
                </div>
              </div>
            </div>

            <div class="container space-bottom-1 space-bottom-lg-0">
              <div class="d-lg-flex justify-content-lg-between align-items-lg-center">
                <!-- Navbar -->
                <div class="u-header u-header-left-aligned-nav u-header--bg-transparent-lg u-header--white-nav-links z-index-4">
                  <div class="u-header__section bg-transparent">
                    <nav class="js-breadcrumb-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
                      <div id="breadcrumbNavBar" class="collapse navbar-collapse u-header__navbar-collapse">
                        <ul class="navbar-nav u-header__navbar-nav">

                          <!-- Dashboard -->
                          <li class="nav-item">
                            <router-link tag="a" to="/my-account" id="generalDropdown" active-class="active" class="nav-link u-header__nav-link">
                             <i class="fas fa-home"></i>
                             Dashboard
                            </router-link>
                          </li>
                          <!-- End Dashboard -->

                          <!-- General -->
                         <li class="nav-item">
                            <router-link tag="a" to="/my-ads" class="nav-link u-header__nav-link active">
                             <i class="fas fa-car"></i>
                              My ads
                            </router-link>
                        </li>
                          <!-- General -->

                          <!-- Billing -->
                          <li class="nav-item hs-has-sub-menu u-header__nav-item"
                              data-event="hover"
                              data-animation-in="slideInUp"
                              data-animation-out="fadeOut">

                                <a id="billingDropdown" class="nav-link u-header__nav-link u-header__nav-link-toggle"
                                    href="javascript:;"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    aria-labelledby="billingDropdownMenu">
                                     <i class="fas fa-money-bill-alt"></i>
                                  Billing
                                </a>

                                <ul id="billingDropdownMenu" class="hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer" style="min-width: 230px;" aria-labelledby="billingDropdown">
                                  <li><router-link to="/activity" class="nav-link u-header__sub-menu-nav-link" href="activity.html">Activity</router-link></li>
                                  <li><router-link to="/payment-methods" class="nav-link u-header__sub-menu-nav-link" href="payment-methods.html">Payment methods</router-link></li>
                                </ul>
                          </li>
                          <!-- Billing -->
                        
                        <!-- General -->
                         <li class="nav-item">
                            <router-link tag="a" to="/edit-profile"  active-class="active" id="generalDropdown" class="nav-link u-header__nav-link">
                             <i class="fas fa-user"></i>
                              Edit profile
                            </router-link>
                        </li>

                        
                          <router-link tag="li" active-class="active" to="/credits" class="nav-item u-header__nav-item">
                             <a class="nav-link u-header__nav-link" href="#">
                               <i class="fas fa-credit-card"></i>
                             Credits</a>
                          </router-link>

                          <!-- Others -->
                    <!--      <router-link tag="li" active-class="active" to="/plans" class="nav-item u-header__nav-item">
                            <a class="nav-link u-header__nav-link" href="#l">
                             <i class="fas fa-handshake"></i>
                            Plans</a>
                          </router-link> -->
                          <!-- Others -->

                             <!-- Others -->
                         <router-link tag="li" active-class="active" to="/invites" class="nav-item u-header__nav-item">
                            <a class="nav-link u-header__nav-link" href="#l">
                             <i class="fas fa-user-friends"></i>
                            Invites</a>
                          </router-link>
                          <!-- Others -->
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
                <!-- End Navbar -->

                <div class="ml-lg-auto">
                
                  <!-- Button -->
                  <router-link tag="a" to="/pricing-and-packages" class="btn btn-sm btn-soft-white text-nowrap transition-3d-hover"
                     data-modal-target="#requestPaymentModal">
                    <span class="fas fa-plus small mr-2"></span>
                   Buy Credit
                  </router-link>
                  <!-- End Button -->
                </div>
              </div>
            </div>
          </div>
          <!-- End Breadcrumb Section -->

          <!-- Content Section -->
          <div class="bg-light">
              <vue-page-transition name="fade">
                  <router-view/>
              </vue-page-transition>
          </div>
          <!-- End Content Section -->

    </main>
   <footer-component></footer-component>
  </div>
</template>
<script>
import HeaderComponent from '@/components/header/index.vue';
import FooterComponent from '@/components/footer/index.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  computed: {
    ...mapGetters([
       'getCurrentUser'
    ])
  },
  created() {
    this.$store.dispatch('getCurrentUser')
       .then( resp => {
        console.log(resp.data)
        this.userdata = resp.data
     }).catch( err => {
       console.log(err.response)
   })
  },
  mounted() {

          // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      });

      // initialization of HSMegaMenu component
      $('.js-breadcrumb-menu').HSMegaMenu({
        event: 'hover',
        pageContainer: $('.container'),
        breakpoint: 991.98,
        hideTimeOut: 0
      });
     // initialization of header
      $.HSCore.components.HSHeader.init($('#header'));

      // initialization of unfold component
      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function () {
          $(this).find('input[type="search"]').focus();
        }
      });

      // initialization of malihu scrollbar
      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));

      // initialization of forms
      $.HSCore.components.HSFocusState.init();

      // initialization of form validation
      $.HSCore.components.HSValidation.init('.js-validate', {
        rules: {
          confirmPassword: {
            equalTo: '#signupPassword'
          }
        }
      });

      // initialization of text editors
      $.HSCore.components.HSSummernoteEditor.init('.js-summernote-editor');

      // initialization of range datepicker
      $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
  },
  data() {
    return {
         userdata: {},
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

"SQLSTATE[42S22]: Column not found: 1054 Unknown column 'vehicle_models.car_id' in 'where clause' (SQL: select * from `vehicle_models` where `vehicle_models`.`car_id` = 1 and `vehicle_models`.`car_id` is not null limit 1)"