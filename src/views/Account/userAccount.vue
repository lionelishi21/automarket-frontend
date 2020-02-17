<template>
  <div class="container space-2  min-height-95vh" >
    <div class="row">
    <div class="col-md-8">
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
                    <span class="fas fa-car-alt btn-icon__inner"></span>
                  </span>
                  <div class="media-body">
                    <span class="d-block font-size-3">{{GetUserProfile.user_active_count}}</span>
                    <h3 class="h6 text-secondary font-weight-normal mb-0">Active Ads</h3>
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
                  <img class="img-fluid w-100" :src="'http://127.0.0.1:8000/storage/images/'+car.image" alt="">
                  <!-- Card -->
                  <div class="card-body p-3">
                    <h4 class="h6" >{{car.year}} {{car.make}} - <span class="btn btn-xs btn-soft-success">{{car.days}} days remain</span></h4>
                    <p class="font-size-1 mb-0"><small>Plan Description: <span class="badge badge-primary"> {{car.subscription.plan.name}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Cost: <span class="badge badge-primary">{{car.subscription.plan.cost}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Placement: <span class="badge badge-primary">Premium</span></small></p>
                    <hr>
                    <small class="font-size-1"><i>number of views: <span class="badge badge-primary">100</span></i></small>
                    <!-- <a class="btn btn-xs btn-primary btn-block" href="#" @click="">Change plan</a> -->
                  </div>
                  <!-- End Card -->
                 </div>
            </div>
        </div>
        <!--  -->
    </div>
    <div class="col-md-4">
           <div class="card">
            <div class="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
              <!-- Title & Settings -->
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="h6 mb-0">Activity</h4>

                <!-- Settings Dropdown -->
                <div class="position-relative">
                  <a id="activitySettingsDropdownInvoker" class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="javascript:;" role="button"
                     aria-controls="activitySettingsDropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                     data-unfold-event="click"
                     data-unfold-target="#activitySettingsDropdown"
                     data-unfold-type="css-animation"
                     data-unfold-duration="300"
                     data-unfold-delay="300"
                     data-unfold-hide-on-scroll="true"
                     data-unfold-animation-in="slideInUp"
                     data-unfold-animation-out="fadeOut">
                    <span class="fas fa-ellipsis-h btn-icon__inner"></span>
                  </a>

                  <div id="activitySettingsDropdown" class="dropdown-menu dropdown-unfold dropdown-menu-right" aria-labelledby="activitySettingsDropdownInvoker" style="min-width: 190px;">
                    <a class="dropdown-item" href="#">
                      <small class="fas fa-eye dropdown-item-icon"></small>
                      Mark as read
                    </a>
                    <a class="dropdown-item" href="#">
                      <small class="fas fa-eye-slash dropdown-item-icon"></small>
                      Mark as unread
                    </a>
                    <a class="dropdown-item" href="#">
                      <small class="fas fa-archive dropdown-item-icon"></small>
                      Archive
                    </a>
                  </div>
                </div>
                <!-- End Settings Dropdown -->
              </div>
              <!-- End Title & Settings -->

              <hr class="mt-3 mb-4">
            
              <div class="overflow-hidden">
                <div class="js-scrollbar pr-3" style="max-height: 300px;">
                  <!-- Activity Feed -->
                
                  <ul class="list-unstyled u-indicator-vertical-dashed">

                    <li class="media u-indicator-vertical-dashed-item" v-for="activity in GetUserProfile.activity">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="btn-icon__inner">A</span>
                      </span>

                      <div class="media-body">

                        <h5 class="font-size-1 mb-1">Amanta Owens</h5>
                        <p class="small mb-1">{{activity.description}}: <span class="font-weight-medium">Slack home page redesign</span></p>
                        <small class="d-block text-muted">{{activity.created_at}}</small>
                      </div>
                    </li>
                  </ul>
                  <!-- End Activity Feed -->
                </div>
              </div>
            </div>
          </div>
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
      'GetUserProfile'
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