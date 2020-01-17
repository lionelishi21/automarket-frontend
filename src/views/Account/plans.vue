<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="mb-9">
          <!-- Title -->
          <div class="mb-3">
            <h2 class="h5 mb-0">Your current plan</h2>
          </div>
          <!-- End Title -->

          <div class="card-deck d-block d-md-flex">
            <div class="card mb-4 mb-md-0">
              <!-- Card -->
              <div class="card-body p-5">
                <h4 class="h6">Front project - July 2018 <span class="btn btn-xs btn-soft-success">$250 per year</span></h4>
                <p class="font-size-1 mb-0">License purchased: <span class="text-dark font-weight-medium">1</span></p>
                <p class="font-size-1">License assigned: <span class="text-dark font-weight-medium">1</span></p>
                <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Change plan</a>
                <a class="btn btn-xs btn-soft-secondary transition-3d-hover" href="#">Edit/Remove License</a>
              </div>
              <!-- End Card -->
            </div>

            <div class="card">
              <!-- Card -->
              <div class="card-body p-5">
                <h4 class="h6">Total</h4>
                <h5 class="font-weight-normal">$250/yearly</h5>
                <p class="font-size-1 mb-0">Payment method: <span class="text-dark font-weight-medium">Card ending in 9050</span></p>
                <p class="font-size-1">Will renew on: <span class="text-dark font-weight-medium">July 15, 2019</span></p>
                <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Edit Payment Details</a>
                <a class="btn btn-xs btn-soft-secondary transition-3d-hover" href="#">View Invoices</a>
                <!-- End Card -->
              </div>
            </div>
          </div>
        </div>

        <!-- Title -->
        <div class="row justify-content-between align-items-center mb-3">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h2 class="h5 mb-0">Subscription plans</h2>
          </div>

          <div class="col-sm-6 text-sm-right">
            <div class="btn-group btn-group-toggle">
              <a class="js-animation-link btn btn-xs btn-outline-primary active" href="javascript:;"
                 data-target="#pricingMonthly"
                 data-link-group="idPricing">
                Monthly
              </a>
              <a class="js-animation-link btn btn-xs btn-outline-primary" href="javascript:;"
                 data-target="#pricingYearly"
                 data-link-group="idPricing">
                Yearly
              </a>
            </div>
          </div>
        </div>
        <!-- End Title -->

        <div class="mb-9">
          <!-- Pricing Carousel -->
          <div id="pricingMonthly" data-target-group="idPricing">
            <div class="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-2 z-index-2"
                 data-slides-show="3"
                 data-slides-scroll="1"
                 data-pagi-classes="d-lg-none text-center u-slick__pagination mt-7 mb-0"
                 data-responsive='[{
                   "breakpoint": 1200,
                   "settings": {
                     "slidesToShow": 3
                   }
                 }, {
                   "breakpoint": 992,
                   "settings": {
                     "slidesToShow": 2
                   }
                 }, {
                   "breakpoint": 768,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }, {
                   "breakpoint": 554,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }]'>
              <!-- Pricing -->
              <div class="js-slide">
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
              <!-- End Pricing -->

              <!-- Pricing -->
              <div class="js-slide">
                <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                  <input type="radio" id="pricingRadio2" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                  <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio2">
                    <h4 class="h6 text-primary mb-3">Pro</h4>
                    <span class="d-block mb-2">
                      <span class="h1 font-weight-normal">$44</span>
                      <span class="font-size-1">/ mon</span>
                    </span>
                    <p class="font-size-1 mb-0">For growing teams creating what's next</p>
                  </label>
                </div>
              </div>
              <!-- End Pricing -->

              <!-- Pricing -->
              <div class="js-slide">
                <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                  <input type="radio" id="pricingRadio3" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                  <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio3">
                    <h4 class="h6 text-primary mb-3">Enterprise</h4>
                    <span class="d-block mb-2">
                      <span class="h1 font-weight-normal">$69</span>
                      <span class="font-size-1">/ mon</span>
                    </span>
                    <p class="font-size-1 mb-0">For teams building mission-critical apps</p>
                  </label>
                </div>
              </div>
              <!-- End Pricing -->
            </div>
          </div>
          <!-- End Pricing Carousel -->

          <!-- Pricing Carousel -->
          <div id="pricingYearly" style="display: none; opacity: 0;" data-target-group="idPricing">
            <div class="js-slick-carousel u-slick u-slick--equal-height u-slick--gutters-2 z-index-2"
                 data-slides-show="3"
                 data-slides-scroll="1"
                 data-pagi-classes="d-lg-none text-center u-slick__pagination mt-7 mb-0"
                 data-responsive='[{
                   "breakpoint": 1200,
                   "settings": {
                     "slidesToShow": 3
                   }
                 }, {
                   "breakpoint": 992,
                   "settings": {
                     "slidesToShow": 2
                   }
                 }, {
                   "breakpoint": 768,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }, {
                   "breakpoint": 554,
                   "settings": {
                     "slidesToShow": 1
                   }
                 }]'>
              <!-- Pricing -->
              <div class="js-slide">
                <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                  <input type="radio" id="pricingRadio4" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                  <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio4">
                    <h4 class="h6 text-primary mb-3">Starter</h4>
                    <span class="d-block mb-2">
                      <span class="h1 font-weight-normal">$242</span>
                      <span class="font-size-1">/ mon</span>
                    </span>
                    <p class="font-size-1 mb-0">For individuals just getting started</p>
                  </label>
                </div>
              </div>
              <!-- End Pricing -->

              <!-- Pricing -->
              <div class="js-slide">
                <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                  <input type="radio" id="pricingRadio5" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                  <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio5">
                    <h4 class="h6 text-primary mb-3">Pro</h4>
                    <span class="d-block mb-2">
                      <span class="h1 font-weight-normal">$442</span>
                      <span class="font-size-1">/ mon</span>
                    </span>
                    <p class="font-size-1 mb-0">For growing teams creating what's next</p>
                  </label>
                </div>
              </div>
              <!-- End Pricing -->

              <!-- Pricing -->
              <div class="js-slide">
                <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                  <input type="radio" id="pricingRadio6" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                  <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio6">
                    <h4 class="h6 text-primary mb-3">Enterprise</h4>
                    <span class="d-block mb-2">
                      <span class="h1 font-weight-normal">$1089</span>
                      <span class="font-size-1">/ mon</span>
                    </span>
                    <p class="font-size-1 mb-0">For teams building mission-critical apps</p>
                  </label>
                </div>
              </div>
              <!-- End Pricing -->
            </div>
          </div>
          <!-- End Pricing Carousel -->
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
                  Can I cancel at anytime?

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
                  How does Front's pricing work?

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
                  How secure is Front?

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
  </main>
  <!-- ========== END MAIN ========== -->

</template>