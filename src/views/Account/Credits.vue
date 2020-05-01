<template>
<!-- Content Section -->
<div class="bg-light">
  <div class="container space-2">
    <div class="mb-9">
      <!-- Title -->
      <div class="mb-3">
        <h2 class="h5 mb-0">Credit Summary</h2>
      </div>
      <!-- End Title -->

      <div class="card-deck d-block d-md-flex">
        <div class="card mb-4 mb-md-0">
          <!-- Card -->
          <div class="card-body mt-10 text-center">
            <h1 class="h2">{{GetCredits.unactive}}</h1>
           
            <p>Avalilable Credits</p>
          </div>
          <!-- End Card -->
        </div>

         <div class="card mb-4 mb-md-0">
          <!-- Card -->
          <div class="card-body mt-10 text-center">
            <h1 class="h2">{{GetCredits.active}}</h1>
            <p>Active Credits</p>
          </div>
          <!-- End Card -->
        </div>
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
              What is a Credit

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
              My team has credits. How do we use them?

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
<!-- End Content Section -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			title: 'credits'
		}
	},
	computed: {
		...mapGetters([
			'GetCredits'
		])
	},
	methods: {

	}	
}
</script>