<template>
  <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="row justify-content-md-between">
          <div class="col-md-6 mb-7 mb-md-0">
            <div class="pr-md-4">
              <!-- Title -->
              <div class="mb-3">
              	
                <h2 class="h4">Share a link and earn a bonus</h2>
                <p>Get a friend to start working with AutoMarket JM today and earn bonuses when they complete they upload their vehicles. <a href="#">Read the terms</a></p>
              </div>
              <!-- End Title -->

              <!-- Clipboard Input -->
              <form>
                <div class="js-focus-state mb-2">
                  <div class="input-group">
                    <input id="referralLink" type="text" class="form-control" :value="getLink">
                    <div class="input-group-append">
                      <a class="js-clipboard input-group-text" href="javascript:;"
                         data-content-target="#referralLink"
                         data-class-change-target="#linkIcon"
                         data-default-class="fas fa-clone"
                         data-success-class="fas fa-check">
                        <span id="linkIcon" class="fas fa-clone"></span>
                      </a>
                    </div>
                  </div>
                </div>
                <small class="form-text text-muted">Copy or share your referral link with friends</small>
              </form>
              <!-- End Clipboard Input -->
            </div>
          </div>

          <div class="col-md-6 col-lg-4">
            <!-- Stats -->
            <div class="bg-primary shadow-primary-lg rounded pt-4 pb-5 px-5">
              <!-- Title & Settings -->
              <div class="d-flex justify-content-between align-items-center">
                <h4 class="h6 text-white mb-0">Referrals</h4>

                <!-- Settings Dropdown -->
                <div class="position-relative">
                  <a id="referralsSettingsDropdownInvoker" class="btn btn-sm btn-icon btn-soft-light btn-bg-transparent" href="javascript:;" role="button"
                     aria-controls="referralsSettingsDropdown"
                     aria-haspopup="true"
                     aria-expanded="false"
                     data-unfold-event="click"
                     data-unfold-target="#referralsSettingsDropdown"
                     data-unfold-type="css-animation"
                     data-unfold-duration="300"
                     data-unfold-delay="300"
                     data-unfold-hide-on-scroll="true"
                     data-unfold-animation-in="slideInUp"
                     data-unfold-animation-out="fadeOut">
                    <span class="fas fa-ellipsis-h btn-icon__inner"></span>
                  </a>

                  <div id="referralsSettingsDropdown" class="dropdown-menu dropdown-unfold dropdown-menu-right" aria-labelledby="referralsSettingsDropdownInvoker" style="min-width: 190px;">
                    <a class="dropdown-item" href="#">
                      <small class="fas fa-cogs dropdown-item-icon"></small>
                      Settings
                    </a>
                    <a class="dropdown-item" href="#">
                      <small class="fas fa-cloud-download-alt dropdown-item-icon"></small>
                      Download
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

              <hr class="opacity-md mt-3 mb-4">

              <!-- Referral Info -->
              <div class="py-2">
                <div class="row">
                  <div class="col-6">
                    <div class="mb-3">
                      <span class="d-block text-white-70 font-size-1">Overall: JMD</span>
                      <span class="align-top text-white">$</span>
                      <span class="text-white font-size-3 font-weight-medium text-lh-sm"> {{payoutAmont}}</span>
                    </div>
                    <span class="text-white-70 font-size-1">referee:</span>
                    <span class="text-white font-weight-medium font-size-1">{{refereeAmount}}</span>
                  </div>

                  <div class="col-6 align-self-end">
                    <!-- Pie Circle -->
                    <div class="js-pie text-center"
                       data-circles-text-class="content-centered-y"
                       data-circles-value="54"
                       data-circles-max-value="100"
                       data-circles-bg-color="rgba(255, 255, 255, 0.1)"
                       data-circles-fg-color="#ffffff"
                       data-circles-radius="50"
                       data-circles-stroke-width="4"
                       data-circles-duration="2000"
                       data-circles-scroll-animate="true"
                       data-circles-color="#ffffff"
                       data-circles-font-size="24"></div>
                    <!-- End Pie Circle -->
                  </div>
                </div>
              </div>
              <!-- End Referral Info -->
            </div>
            <!-- End Stats -->
          </div>
        </div>

        <hr class="my-7">

        <!-- Title -->
        <div class="row align-items-center mb-4">
          <div class="col-md-8 mb-3 mb-md-0">
            <h2 class="h5 mb-0">Suggested referrals</h2>
            <p class="mb-0">We think these friends would offer great opportunities.</p>
          </div>
        </div>
        <!-- End Title -->
           <div class="row">
           	<div class="col-md-4">
          <!-- Friends List -->
          <a class="card card-frame mb-3" href="#">
            <div class="card-body">
              <div class="media" v-for="ref in getReferees">
                <span class="btn btn-lg btn-icon btn-soft-success rounded-circle mr-4">
                    <span class="fas fa-user btn-icon__inner"></span>
                  </span>
                <div class="media-body">
                  <h4 class="h6 text-dark mb-0 mt-3">{{ref.user.name}}</h4>
                  <span>Refer</span>
                </div>
              </div>
            </div>
          </a>
          <!-- End Friends List -->
      </div>
      </div>
       
        <hr class="my-7">

        <!-- Title -->
        <div class="mb-3">
          <h2 class="h4">How referral works</h2>
        </div>
        <!-- End Title -->

        <!-- Icon Blocks -->
        <div class="row">
          <div class="col-md-4 mb-9 mb-md-0">
            <!-- Card -->
            <div class="card bg-transparent border-0 h-100">
              <div class="card-body p-0">
                <figure id="SVGanalysis" class=" mb-3">
                  <img class="js-svg-injector w-75" src="@/assets/svg/illustrations/we-are-in-office.svg" alt="Image Description"
                        data-parent="#SVGanalysis">
                </figure>
              </div>
              <div class="card-footer bg-transparent border-0 p-0">
                <h4 class="h5">Refer friends</h4>
                <p>Send referrals to your friends either here or in your app.</p>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-md-4 mb-9 mb-md-0">
            <!-- Card -->
            <div class="card bg-transparent border-0 h-100">
              <div class="card-body p-0">
                <figure id="SVGinTheOffice" class="mb-3">
                  <img class="js-svg-injector w-75" src="@/assets/svg/illustrations/we-are-in-office-2.svg" alt="Image Description"
                        data-parent="#SVGinTheOffice">
                </figure>
              </div>
              <div class="card-footer bg-transparent border-0 p-0">
                <h4 class="h5">Follow along</h4>
                <p>Follow your friend's progress and send encouraging messages along the way.</p>
              </div>
            </div>
            <!-- End Card -->
          </div>

          <div class="col-md-4">
            <!-- Card -->
            <div class="card bg-transparent border-0 h-100">
              <div class="card-body p-0">
                <figure id="SVGmakeItRain" class="mb-3">
                  <img class="js-svg-injector w-75" src="@/assets/svg/illustrations/person-with-boards.svg" alt="Image Description"
                       data-parent="#SVGmakeItRain">
                </figure>
              </div>
              <div class="card-footer bg-transparent border-0 p-0">
                <h4 class="h5">Get paid</h4>
                <p>When your friend starts building, you'll get paid after their first task completion.</p>
              </div>
            </div>
            <!-- End Card -->
          </div>
        </div>

        </div>
        <!-- End Icon Blocks -->
      </div>
    </div>
    <!-- End Content Section -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			title: 'Link'
		}
	},
	computed: {
		...mapGetters([
			'getLink',
			'getReferees',
			'getRefPoints'
		]),

	    refereeAmount: function () {
			return this.getReferees.length
		},

		payoutAmont: function() {
			return this.getRefPoints * 250
		}

	},
	created() {
		this.$store.dispatch('FETCH_BITLY_LINK')
		this.$store.dispatch('FETCH_REFEREES')
		this.$store.dispatch('FETCH_REF_POINTS')
	},
	methods: {

	}
}
</script>