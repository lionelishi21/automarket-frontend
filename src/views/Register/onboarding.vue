<template>
  
  <!-- ========== MAIN ========== -->
  <main id="content" role="main" style="background: rgba(34, 49, 63, 1)">
    <!-- Hero Section -->

    <!-- Page Preloader -->
    <div id="jsPreloader" class="page-preloader" v-show="loading">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <!-- End Page Preloader -->

      <!-- Icon Blocks Section -->
    <div class="bg-light">
      <div class="container space-2 space-md-3">
        <!-- Title -->
        <div class="w-md-60 w-lg-35 text-center mx-auto mb-9">
          <h2 class="h5 font-weight-normal">
           Select best plan for you <span class="text-primary font-weight-semi-bold">AutoMarketJm.com</span>
          </h2>
        </div>
        <!-- End Title -->

       <div class="row mb-10">
          <div class="col-sm-6 col-md-3 px-2 mb-3 mb-md-0">
            <!-- Pricing -->
            <div class="card text-center shadow">
              <div class="card-header border-0 pt-5 px-5">
                <img class="mb-2" src="../../assets/svg/components/one-dot.svg" alt="Image Description" width="60px">
                <h4 class="h6 mb-3">Starter</h4>
                <span class="font-size-2 font-weight-semi-bold">Free</span>
              </div>
              <div class="card-body pt-0 pb-5 px-5">
                <ul class="list-group list-group-flush list-group-borderless text-secondary mb-4">
                  <li class="list-group-item">All Seller</li>
                  <li class="list-group-item">One Credit</li>
                  <li class="list-group-item">Two weeks per credit</li>
                </ul>
                <button @click="goToDealerSignUp()" type="button" class="btn btn-sm btn-block btn-outline-primary transition-3d-hover">Create Account</button>
              </div>
            </div>
          </div>

          <div class="col-sm-6 col-md-3 px-2 mb-3 mb-md-0">
            <!-- Pricing -->
            <div class="card text-center shadow">
              <div class="card-header border-0 pt-5 px-5">
                <img class="mb-2" src="../../assets/svg/components/two-dots.svg" alt="Image Description" width="60px">
                <h4 class="h6 mb-3">Individual</h4>
                <span class="font-size-2 font-weight-semi-bold">$800</span>
              </div>
              <div class="card-body pt-0 pb-5 px-5">
                <ul class="list-group list-group-flush list-group-borderless text-secondary mb-4">
                  <li class="list-group-item">$800 per credit</li>
                  <li class="list-group-item">Duration two weeks</li>
                </ul>
                <button @click="goToDealerSignUp()" type="button" class="btn btn-sm btn-block btn-primary transition-3d-hover">Create Account</button>
              </div>
            </div>
            <!-- End Pricing -->
          </div>

          <div class="col-sm-6 col-md-3 px-2">
            <!-- Pricing -->
            <div class="card text-center shadow">
              <div class="card-header border-0 pt-5 px-5">
                <img class="mb-2" src="../../assets/svg/components/three-dots.svg" alt="Image Description" width="60px">
                <h4 class="h6 mb-3">Dealer</h4>
                <span class="font-size-2 font-weight-semi-bold">$600</span>
              </div>
              <div class="card-body pt-0 pb-5 px-5">
                <ul class="list-group list-group-flush list-group-borderless text-secondary mb-4">
                  <li class="list-group-item">Min 5 credits</li>
                  <li class="list-group-item">$600 per credit</li>
                  <li class="list-group-item">Duration two weeks</li>
                </ul>
                <button @click="goToDealerSignUp()" type="button" class="btn btn-sm btn-block btn-primary transition-3d-hover">Create Account</button>
              </div>
            </div>
            <!-- End Pricing -->
          </div>
         <div class="col-sm-6 col-md-3 px-2">
            <!-- Pricing -->
            <div class="card text-center shadow">
              <div class="card-header border-0 pt-5 px-5">
                <img class="mb-2" src="../../assets/svg/components/three-dots.svg" alt="Image Description" width="60px">
                <h4 class="h6 mb-3">Premium</h4>
                <span class="font-size-2 font-weight-semi-bold">$400</span>
              </div>
              <div class="card-body pt-0 pb-5 px-5">
                <ul class="list-group list-group-flush list-group-borderless text-secondary mb-4">
                  <li class="list-group-item">Min 10 credits</li>
                  <li class="list-group-item">$400 per credit</li>
                  <li class="list-group-item">Duration two weeks</li>
                </ul>
                <button  @click="goToDealerSignUp()" type="button" class="btn btn-sm btn-block btn-primary transition-3d-hover">Create Account</button>
              </div>
            </div>
            <!-- End Pricing -->
          </div>
      </div>
            <!-- Title -->
    <div class="mb-3">
      <h2 class="h5 mb-0">Frequently asked question</h2>
    </div>
    <!-- End Title -->

    <div id="FAQCollapse" class="accordion">
      <!-- Card -->
      <div class="card">
        <div class="card-header card-collapse" id="FAQHeadingOne">
          <h5 class="mb-0">
            <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3" role="button"
                    data-toggle="collapse"
                    data-target="#FAQOne"
                    aria-expanded="false"
                    aria-controls="FAQOne">
              What is AutoMarketJm Credits?

              <span class="card-btn-arrow">
                <span class="fas fa-arrow-down small"></span>
              </span>
            </button>
          </h5>
        </div>
        <div id="FAQOne" class="collapse" aria-labelledby="FAQHeadingOne" data-parent="#FAQCollapse">
          <div class="card-body">
            Yes, you can cancel anytime no questions are asked while you cancel but we would highly appreciate if you will give us some feedback.
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card">
        <div class="card-header card-collapse" id="FAQHeadingTwo">
          <h5 class="mb-0">
            <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3" role="button"
                    data-toggle="collapse"
                    data-target="#FAQTwo"
                    aria-expanded="false"
                    aria-controls="FAQTwo">
              I purchase a credit. How do we use them?

              <span class="card-btn-arrow">
                <span class="fas fa-arrow-down small"></span>
              </span>
            </button>
          </h5>
        </div>
        <div id="FAQTwo" class="collapse" aria-labelledby="FAQHeadingTwo" data-parent="#FAQCollapse">
          <div class="card-body">
            Once your team signs up for a subscription plan. enim eiusmod high life accusamus eoset dignissimos.
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card">
        <div class="card-header card-collapse" id="FAQHeadingThree">
          <h5 class="mb-0">
            <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3" role="button"
                    data-toggle="collapse"
                    data-target="#FAQThree"
                    aria-expanded="false"
                    aria-controls="FAQThree">
              How does AutoMarket pricing work?

              <span class="card-btn-arrow">
                <span class="fas fa-arrow-down small"></span>
              </span>
            </button>
          </h5>
        </div>
        <div id="FAQThree" class="collapse" aria-labelledby="FAQHeadingThree" data-parent="#FAQCollapse">
          <div class="card-body">
            Our subscriptions are tiered. based on the number of people enim eiusmod high life accusamus terry richardson ad squid.
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card">
        <div class="card-header card-collapse" id="FAQHeadingFour">
          <h5 class="mb-0">
            <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3" role="button"
                    data-toggle="collapse"
                    data-target="#FAQFour"
                    aria-expanded="false"
                    aria-controls="FAQFour">
             Can Credit be expire
              <span class="card-btn-arrow">
                <span class="fas fa-arrow-down small"></span>
              </span>
            </button>
          </h5>
        </div>
        <div id="FAQFour" class="collapse" aria-labelledby="FAQHeadingFour" data-parent="#FAQCollapse">
          <div class="card-body">
            Protecting the data you trust to Front is our first priority. at vero eoset dignissimos ducimus qui blanditiis.
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card">
        <div class="card-header card-collapse" id="FAQHeadingFive">
          <h5 class="mb-0">
            <button type="button" class="btn btn-link btn-block d-flex justify-content-between card-btn collapsed p-3" role="button"
                    data-toggle="collapse"
                    data-target="#FAQFive"
                    aria-expanded="false"
                    aria-controls="FAQFive">
              What is your refund policy?

              <span class="card-btn-arrow">
                <span class="fas fa-arrow-down small"></span>
              </span>
            </button>
          </h5>
        </div>
        <div id="FAQFive" class="collapse" aria-labelledby="FAQHeadingFive" data-parent="#FAQCollapse">
          <div class="card-body">
            We do not offer refunds apart leggings occaecat craft beer farm-to-table. raw leggings occaecat craft.
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
      </div>
    </div>
    <!-- End Icon Blocks Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
export default {
	data() {
		return {
       onboard: false,
       loading: false,
			 user: {
				name: null,
				email: null,
				password: null,
        password_confimation: null
			},
      errors: {
        name: [],
        email: [],
        password: [],
        password_confimation: [],
      }
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
    goToDealerSignUp() {
      
      this.loading = true
      let self = this
      setTimeout(function() {
        self.loading = false
        self.$router.push('/dealer-signup')
      }, 1000)
    },
    goToBuyerSignUp() {

      this.loading = true
      let self = this
      setTimeout(function() {
        self.loading = false
        self.$router.push('/register')
      })
    }
	}
}
</script>