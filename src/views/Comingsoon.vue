<template>
<div class="app">
  <!-- ========== HEADER ========== -->
  <header id="header" class="u-header u-header--bg-transparent u-header--abs-top">
    <div class="u-header__section">
      <div id="logoAndNav" class="container">
        <!-- Nav -->
        <nav class="navbar navbar-expand u-header__navbar">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="" aria-label="ActionAnnJobBank">
          	<img src="@/assets/logo.png">
          </a>
          <!-- End Logo -->
        </nav>
        <!-- End Nav -->
      </div>
    </div>
  </header>
  <!-- ========== END HEADER ========== -->

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="d-lg-flex">
      <div class="container d-lg-flex align-items-lg-center height-lg-100vh space-bottom-1 space-top-3 space-bottom-lg-3 space-lg-0">
        <div class="row align-items-lg-center w-100 mt-lg-9">
          <!-- SVG Icon -->
          <div class="col-lg-6 mb-7 mb-lg-0">
            <figure id="SVGvirtualReality" class="svg-preloader ie-virtual-reality">
              <img class="js-svg-injector" src="@/assets/svg/illustrations/virtual-reality.svg" alt="Image Description"
                   data-parent="#SVGvirtualReality">
            </figure>
          </div>
          <!-- End SVG Icon -->

          <div class="col-lg-6">
            <div class="pl-lg-4">
              <!-- Title -->
              <div class="mb-4">
                <h1 class="text-primary font-weight-normal">We're coming <span class="font-weight-semi-bold">soon</span>.</h1>
                <p>Our website is under construction. We'll be here soon with our new awesome site, subscribe to be notified.</p>
              </div>
              <!-- End Title -->

              <!-- Countdown -->
              <div class="js-countdown row mb-5"
                   data-end-date="2020/11/30"
                   data-month-format="%m"
                   data-days-format="%D"
                   data-hours-format="%H"
                   data-minutes-format="%M"
                   data-seconds-format="%S">
                <div class="col-3">
                  <strong class="js-cd-days h3 text-primary font-weight-semi-bold mb-0"></strong>
                  <span class="h5 font-weight-normal mb-0">Days</span>
                </div>
                <div class="col-3">
                  <strong class="js-cd-hours h3 text-primary font-weight-semi-bold mb-0"></strong>
                  <span class="h5 font-weight-normal mb-0">Hours</span>
                </div>
                <div class="col-3">
                  <strong class="js-cd-minutes h3 text-primary font-weight-semi-bold mb-0"></strong>
                  <span class="h5 font-weight-normal mb-0">Mins</span>
                </div>
                <div class="col-3">
                  <strong class="js-cd-seconds h3 text-primary font-weight-semi-bold mb-0"></strong>
                  <span class="h5 font-weight-normal mb-0">Secs</span>
                </div>
              </div>
              <!-- End Countdown -->

              <!-- Input -->
              <form class="js-validate js-form-message js-focus-state">
                <label class="sr-only" for="subscribeSrEmail">Enter your email address</label>
                <div class="input-group">
                  <input type="text" class="form-control" name="name" id="subscribeSrEmail" placeholder="Enter your email address" aria-label="Enter your email address" aria-describedby="subscribeEmailButton" required
                         data-msg="Please enter a valid email address."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                  <div class="input-group-append">
                    <button type="submit" class="btn btn-primary" id="subscribeEmailButton">Subscribe</button>
                  </div>
                </div>
              </form>
              <!-- End Input -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->
  </main>
  <!-- ========== END MAIN ========== -->

  <!-- ========== FOOTER ========== -->
  <footer class="position-lg-absolute right-lg-0 bottom-lg-0 left-lg-0">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center space-1">
        <!-- Copyright -->
        <p class="small text-muted mb-0">&copy; Action Ann JobBank. 2019 ActionAnnJobBank.</p>
        <!-- End Copyright -->

        <!-- Social Networks -->
        <ul class="list-inline mb-0">
          <li class="list-inline-item">
            <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
              <span class="fab fa-facebook-f btn-icon__inner"></span>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
              <span class="fab fa-google btn-icon__inner"></span>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
              <span class="fab fa-twitter btn-icon__inner"></span>
            </a>
          </li>
          <li class="list-inline-item">
            <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
              <span class="fab fa-github btn-icon__inner"></span>
            </a>
          </li>
        </ul>
        <!-- End Social Networks -->
      </div>
    </div>

  </footer>
  <!-- ========== END FOOTER ========== -->
</div>
</template>
<script>
	
export default {
	 mounted() {
    
      // Initialization of svg injector
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

      // initialization of google map
      $.HSCore.components.HSGMap.init('.js-g-map');

  }
}
</script>