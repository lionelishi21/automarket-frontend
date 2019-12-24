<template>
            <div class="container space-2  min-height-100vh"" >
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

                  <!-- Card -->
                  <div class="card">
                    <div class="card-body p-5">
                      <div class="media align-items-center">
                        <span class="btn btn-lg btn-icon btn-soft-warning rounded-circle mr-4">
                          <span class="fas fa-car btn-icon__inner"></span>
                        </span>
                        <div class="media-body">
                          <span class="d-block font-size-3">5</span>
                          <h3 class="h6 text-secondary font-weight-normal mb-0">Inactive Ads</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Card -->
                </div>
                <!-- End Stats -->

                <!-- Title -->
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h3 class="h6 mb-0">Your Recent</h3>
                  <a class="link-muted" href="#">View All</a>
                </div>
                <!-- End Title -->
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
  }
}
</script>