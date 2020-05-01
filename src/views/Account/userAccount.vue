<template>
  <div class="container space-2  min-height-95vh" >
    <div class="row">
    <div class="col-md-12">
        <!-- Stats -->
        <div class="card-deck d-block d-lg-flex card-lg-gutters-3 mb-6">
            <!-- Card -->
            <div class="card mb-3 mb-lg-0">
              <div class="card-body p-5">
                <div class="media align-items-center">
                  <span class="btn btn-lg btn-icon btn-soft-primary rounded-circle mr-4">
                    <span class="fas fa-car-alt btn-icon__inner"></span>
                  </span>
                  <div class="media-body">
                    <span class="d-block font-size-3">{{GetUserProfile.user_cars_count}}</span>
                    <h2 class="h6 text-secondary font-weight-normal mb-0">Cars in Garage</h2>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
          
            <!-- Card -->
            <div class="card mb-3 mb-lg-0">
              <div class="card-body p-5">
                <div class="media align-items-center">
                  <span class="btn btn-lg btn-icon btn-soft-success rounded-circle mr-4">
                    <span class="fas fa-car-side btn-icon__inner"></span>
                  </span>
                  <div class="media-body">
                    <span class="d-block font-size-3">{{GetUserProfile.user_active_count}}</span>
                    <h3 class="h6 text-secondary font-weight-normal mb-0">Active Ads</h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
            <div class="card mb-3 mb-lg-0">
              <div class="card-body p-5">
                <div class="media align-items-center">
                  <span class="btn btn-lg btn-icon btn-soft-danger rounded-circle mr-4">
                    <span class="fas fa-credit-card btn-icon__inner"></span>
                  </span>
                  <div class="media-body">
                    <span class="d-block font-size-3">{{GetCredits.unactive}}</span>
                    <h3 class="h6 text-secondary font-weight-normal mb-0">Credits</h3>
                  </div>
                </div>
              </div>
            </div>
            <!-- End Card -->
        </div>
        <!-- End Stats -->
       
       <!--  -->
        <div class="row">
          <div class="col-md-4" v-for="car in GetUserProfile.cars">
              <div class="card mb-4 mb-md-0">
                  <img class="img-fluid w-100" :src="'http://18.206.230.202/storage/images/'+car.image" alt="">
                  <!-- Card -->

                  <div class="card-body p-3">
                    <h4 class="h6" >{{car.year}} {{car.make}} {{car.model}}</h4>
                    <p class="font-size-1 mb-0"><small>Plan Description: <span class="badge badge-primary"> {{car.subscription.plan.name}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Cost: <span class="badge badge-primary">{{car.subscription.plan.cost}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Placement: <span class="badge badge-primary">Premium</span></small></p>
                    <hr>
                    <small style="style:color: red;">Expire in <span class="badge badge-danger">{{car.days}} days</span></small>
                    <br>
                    <small class="font-size-1"><i>number of views: <span class="badge badge-primary">{{car.pageviews}}</span></i></small>
                    <!-- <a class="btn btn-xs btn-primary btn-block" href="#" @click="">Change plan</a> -->
                  </div>
                  <!-- End Card -->
                 </div>
            </div>
        </div>
        <!--  -->
     </div>
          <!-- End Indicator -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      userdata:{},
      jobs: [

      ]
    }
  },
  computed: {
    ...mapGetters([
      'GetUserProfile',
      'GetCredits'
    ])
  },
  created() {
    console.log('dashboard component created...')
    var userdata = localStorage.getItem('user')
    if ( userdata != null ) {
      this.userdata = JSON.parse(userdata);
    }

    this.$store.dispatch('GET_USER_PROFILE')
      .then( response => {
        console.log('profile data')
      })
       this.$store.dispatch('GET_CREDIT')
  },
  mounted() {
      
      $.HSCore.components.HSFocusState.init();

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

      // initialization of text editors
      $.HSCore.components.HSSummernoteEditor.init('.js-summernote-editor');

      // initialization of range datepicker
      $.HSCore.components.HSRangeDatepicker.init('.js-range-datepicker');

      // initialization of go to
      $.HSCore.components.HSGoTo.init('.js-go-to');
  }
}
</script>