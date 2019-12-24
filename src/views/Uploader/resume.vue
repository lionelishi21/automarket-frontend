<template>
<div id="app">
<!-- SVG Top Shape -->
<figure>
  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px"
       viewBox="0 0 1921 273" style="margin-bottom: -8px; enable-background:new 0 0 1921 273;" xml:space="preserve">
    <polygon class="fill-gray-100" points="0,273 1921,273 1921,0 "/>
  </svg>
</figure>
<!-- End SVG Top Shape -->

<!-- Features Section -->
<div class="bg-light">
  <div class="container space-2 space-lg-3">
    <!-- Title -->
    <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
      <span class="d-block text-secondary font-size-1 font-weight-medium text-uppercase mb-2">Action Ann JobBank</span>
      <h2 class="font-weight-medium">Allow companies to contact you when you apply to their jobs.</h2>
    </div>
    <!-- End Title -->

    <div class="row">
      <div class="col-lg-5 order-lg-1 mb-7 mb-lg-0">
        <!-- Nav -->
        <ul class="nav nav-box" role="tablist">
          <li class="nav-item w-100 mx-0 mb-3">
            <a class="nav-link p-4 active" id="pills-one-code-features-tab" data-toggle="pill" href="#pills-one-code-features" role="tab" aria-controls="pills-one-code-features" aria-selected="true">
              <div class="media">
                <figure id="icon45" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                  <img class="js-svg-injector" src="../../assets/svg/icons/icon-45.svg" alt="SVG"
                       data-parent="#icon45">
                </figure>
                <div class="media-body">
                  <h3 class="h6">Details</h3>
                  <p>Allow companies to contact you when you apply to their jobs.</p>
                </div>
              </div>
            </a>
          </li>

          <li class="nav-item w-100 mx-0 mb-3">
            <a class="nav-link p-4" id="pills-two-code-features-tab" data-toggle="pill" href="#pills-two-code-features" role="tab" aria-controls="pills-two-code-features" aria-selected="false">
              <div class="media">
                <figure id="icon23" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                  <img class="js-svg-injector" src="../../assets/svg/icons/icon-23.svg" alt="SVG"
                       data-parent="#icon23">
                </figure>
                <div class="media-body">
                  <h4 class="h6">Work experience</h4>
                  <p>Let companies know where you've worked and when.</p>
                </div>
              </div>
            </a>
          </li>

          <li class="nav-item w-100 mx-0">
            <a class="nav-link p-4" id="pills-three-code-features-tab" data-toggle="pill" href="#pills-three-code-features" role="tab" aria-controls="pills-three-code-features" aria-selected="false">
              <div class="media">
                <figure id="icon44" class="svg-preloader ie-height-56 w-100 max-width-8 mt-2 mr-4">
                  <img class="js-svg-injector" src="../../assets/svg/icons/icon-44.svg" alt="SVG"
                       data-parent="#icon44">
                </figure>
                <div class="media-body">
                  <h4 class="h6">Qualifications</h4>
                  <p>Your qualifications let companies know more about you</p>
                </div>
              </div>
            </a>
          </li>
        </ul>
        <!-- End Nav -->
      </div>

      <div class="col-lg-7 order-lg-2 align-self-lg-end">
        <!-- Tab Content -->
        <div class="tab-content pr-lg-4">
          <div class="tab-pane fade show active" id="pills-one-code-features" role="tabpanel" aria-labelledby="pills-one-code-features-tab">
        	<!-- Step one form-->
        	<step-one></step-one>
        	<!-- End step one form-->
          </div>

          <div class="tab-pane fade" id="pills-two-code-features" role="tabpanel" aria-labelledby="pills-two-code-features-tab">
          	<step-two></step-two>
          </div>

          <div class="tab-pane fade" id="pills-three-code-features" role="tabpanel" aria-labelledby="pills-three-code-features-tab">
            <!-- SVG Laptop Mockup -->
          	<step-three></step-three>
            <!-- SVG Laptop Mockup -->
          </div>
        </div>
        <!-- End Tab Content -->
      </div>
    </div>
  </div>
</div>
<!-- End Features Section -->

<!-- SVG Bottom Shape -->
<figure>
  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="64px"
       viewBox="0 0 1921 273" style="margin-bottom: -8px; enable-background:new 0 0 1921 273;" xml:space="preserve">
    <polygon class="fill-gray-100" points="1921,0 0,0 0,273 "/>
  </svg>
</figure>
<!-- End SVG Bottom Shape -->
</div>
</template>
<script>
import StepOne from './components/stepform/step1.vue';
import StepTwo from './components/stepform/step2.vue';
import StepThree from './components/stepform/step3.vue';

export default {
	components: {
		StepOne,
		StepTwo,
		StepThree
	}
}
</script>
