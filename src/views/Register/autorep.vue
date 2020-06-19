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
            <h1 class="h4 mb-0">Auto <abbr> Rep </abbr></h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><router-link tag="a" to="/">Home</router-link></li>
                <li class="breadcrumb-item"><a href="#">Auto Rep</a></li>
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
        <div class="col-md-12">
               <!-- Title -->
              <div class="w-md-100 w-lg-100 text-center mb-9">
                <span class="btn btn-xs btn-soft-success btn-pill mb-1">AutoMarket (DR)</span>
                <h2 class="text-primary">Dealer <span class="font-weight-semi-bold">Rep</span></h2>
                <p>Earn commission from Car Dealers</p>
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
                            <h3 class="h5 text-primary">Earn $$$</h3>
                            <p>Earn $$$ from Dealers when you have made succesfull refferal</p>
                          </div>
                        </li>


                        <!-- Info -->
                        <li class="media u-indicator-vertical-dashed-item">
                          <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                            <span class="fas fa-check btn-icon__inner"></span>
                          </span>

                          <div class="media-body mt-n1">
                            <h3 class="h5 text-primary">AutoMarket Free Credits</h3>
                            <p>Get 3 Automarket Addvertising Credits</p>
                          </div>
                        </li>
                        <!-- End Info -->


                        <!-- Info -->
                        <li class="media u-indicator-vertical-dashed-item">
                          <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                            <span class="fas fa-check btn-icon__inner"></span>
                          </span>
                          <div class="media-body mt-n1">
                            <h3 class="h5 text-primary">AutoMarket Authorization</h3>
                            <p>Be an Authorized AutoMarket Rep with an AutoMarket (AM) Business Card</p>
                          </div>
                        </li>
                        <!-- End Info -->


                        <!-- Info -->
                        <li class="media u-indicator-vertical-dashed-item">
                          <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                            <span class="fas fa-check btn-icon__inner"></span>
                          </span>
                          <div class="media-body mt-n1">
                            <h3 class="h5 text-primary">Earn $$$</h3>
                            <p>Earn $$$ from Dealers when you have made succesfull refferal</p>
                          </div>
                        </li>
                        <!-- End Info -->


                        <!-- Info -->
                        <li class="media u-indicator-vertical-dashed-item">
                          <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                            <span class="fas fa-check btn-icon__inner"></span>
                          </span>
                          <div class="media-body mt-n1">
                            <h3 class="h5 text-primary">Dealer Commission</h3>
                            <p> Visit and agree commission with car dealer</p>
                          </div>
                        </li>
                        <!-- End Info -->
                    </ul>
                    <button @click="goToRegister()" class="btn btn-primary">Register</button>
                </div>
              </div>
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
        referral_id: '',
        type: 3 
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
    goToRegister() {
      this.$router.push('/autorep-register')
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