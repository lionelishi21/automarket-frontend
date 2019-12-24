<template>
<!-- ========== FOOTER ========== -->
<footer class="bg-dark">
  <div class="container space-2">
    <div class="row mb-7">
      <div class="col-lg-3 mb-5 mb-lg-0">
        <a class="d-inline-flex align-items-center mb-2" href="index.html" aria-label="Front">
      <!--  -->
          <span class="brand brand-light">SureKeys</span>
        </a>
      </div>

      <div class="col-6 col-lg-2 mb-5 mb-lg-0">
        <h4 class="h6 text-white font-weight-medium">Help and advice</h4>
        <ul class="list-unstyled font-size-1">
          <li class="py-2"><a class="text-white-70" href="#">Contact us</a></li>
          <li class="py-2"><a class="text-white-70" href="#">FAQ</a></li>
          <li class="py-2"><a class="text-white-70" href="#">Legal & Privacy</a></li>
        </ul>
      </div>

      <div class="col-6 col-lg-2 mb-5 mb-lg-0">
        <h4 class="h6 text-white font-weight-medium">About us</h4>
        <ul class="list-unstyled font-size-1">
          <li class="py-2"><a class="text-white-70" href="#">About Spec</a></li>
          <li class="py-2"><a class="text-white-70" href="#">Careers</a></li>
        </ul>
      </div>

      <div class="col-lg-5">
        <!-- Form -->
        <form class="js-validate mb-2">
          <h4 class="h6 text-white font-weight-medium mb-3">Stay up to date</h4>
          <div class="form-row">
            <div class="col-9">
              <div class="js-form-message">
                <label class="sr-only" for="subscribeSrEmail">Email address</label>
                <div class="input-group">
                  <input type="email" class="form-control" name="email" id="subscribeSrEmail" placeholder="Email address" aria-label="Email address" required
                         data-msg="Please enter a valid email address."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>

            <div class="col-3">
              <button type="submit" class="btn btn-primary">
                <span class="fas fa-arrow-right"></span>
              </button>
            </div>
          </div>
        </form>
        <!-- End Form -->
      </div>
    </div>

    <p class="small text-white-70 mb-0">© 2020 surekeys. All rights reserved.</p>
  </div>
</footer>
<!-- ========== END FOOTER ========== -->
</template>