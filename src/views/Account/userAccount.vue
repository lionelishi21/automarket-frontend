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
                    <span class="d-block font-size-3">10</span>
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
                    <span class="d-block font-size-3">5</span>
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
           <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                <input type="radio" id="pricingRadio1" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio1">
                  <h4 class="h6 text-primary mb-3">Starter</h4>
                  <span class="d-block mb-2">
                    <span class="h1 font-weight-normal">$22</span>
                    <span class="font-size-1">/ mon</span>
                  </span>
                  <p class="font-size-1 mb-0">For individuals just getting started</p>
                </label>
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
                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="btn-icon__inner">A</span>
                      </span>
                      <div class="media-body">
                        <h5 class="font-size-1 mb-1">Amanta Owens</h5>
                        <p class="small mb-1">Added new task: <span class="font-weight-medium">Slack home page redesign</span></p>
                        <small class="d-block text-muted">30 min ago</small>
                      </div>
                    </li>

                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-success rounded-circle mr-3">
                        <span class="btn-icon__inner">S</span>
                      </span>
                      <div class="media-body">
                        <h5 class="font-size-1 mb-1">Sebastian Diaz</h5>
                        <p class="small mb-1">Added new task: <span class="font-weight-medium">Mapbox logo redesign</span></p>
                        <small class="d-block text-muted">44 min ago</small>
                      </div>
                    </li>

                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-warning rounded-circle mr-3">
                        <span class="btn-icon__inner text-white">F</span>
                      </span>
                      <div class="media-body">
                        <h5 class="font-size-1 mb-1">Eliza Donovan</h5>
                        <p class="small mb-1">Added new task: <span class="font-weight-medium">Spotify branding</span></p>
                        <small class="d-block text-muted">1 hour ago</small>
                      </div>
                    </li>

                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-primary rounded-circle mr-3">
                        <span class="btn-icon__inner">C</span>
                      </span>
                      <div class="media-body">
                        <h5 class="font-size-1 mb-1">Cler Lockhart</h5>
                        <p class="small mb-1">Added new task: <span class="font-weight-medium">Dropbox home page redesign</span></p>
                        <small class="d-block text-muted">15 hours ago</small>
                      </div>
                    </li>

                    <li class="media u-indicator-vertical-dashed-item">
                      <span class="btn btn-xs btn-icon btn-danger rounded-circle mr-3">
                        <span class="btn-icon__inner">J</span>
                      </span>
                      <div class="media-body">
                        <h5 class="font-size-1 mb-1">James Collins</h5>
                        <p class="small mb-1">Added new task: <span class="font-weight-medium">InVison branding</span></p>
                        <small class="d-block text-muted">1 day ago</small>
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
export default {
  data() {
    return {
      userdata:{},
      jobs: [

      ]
    }
  },
  created() {
    var userdata = localStorage.getItem('user')
    if ( userdata != null ) {
      this.userdata = JSON.parse(userdata);
    }
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