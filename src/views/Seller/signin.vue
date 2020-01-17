<template>
<!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Form -->
    <div class="d-flex align-items-center position-relative height-lg-100vh">
      <div class="col-lg-6 col-xl-4 d-none d-lg-flex align-items-center bg-dark height-lg-100vh px-0">
        <div class="w-100 p-5">
        	<img src="../../assets/img/coup.png" alt="" width="500px">
        </div>
      </div>

      <div class="container">
        <div class="row no-gutters">
          <div class="col-md-8 col-lg-7 col-xl-6 offset-md-2 offset-lg-2 offset-xl-3 space-3 space-lg-0">
            <!-- Form -->
            <form class="js-validate mt-5">
              <!-- Title -->
              <div class="mb-7">
                <h2 class="h3 text-primary font-weight-normal mb-0">Welcome <span class="font-weight-semi-bold">back</span></h2>
                <p>Login to manage your account.</p>
              </div>
              <!-- End Title -->

              <!-- Form Group -->
              <div class="js-form-message form-group">
                <label class="form-label" for="signinSrEmail">Email address</label>
                <input type="email" class="form-control" name="email" id="signinSrEmail" placeholder="Email address" aria-label="Email address" required
                       data-msg="Please enter a valid email address."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
              <!-- End Form Group -->

              <!-- Form Group -->
              <div class="js-form-message form-group">
                <label class="form-label" for="signinSrPassword">
                  <span class="d-flex justify-content-between align-items-center">
                    Password
                    <a class="link-muted text-capitalize font-weight-normal" href="recover-account.html">Forgot Password?</a>
                  </span>
                </label>
                <input type="password" class="form-control" name="password" id="signinSrPassword" placeholder="********" aria-label="********" required
                       data-msg="Your password is invalid. Please try again."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
              <!-- End Form Group -->

              <!-- Button -->
              <div class="row align-items-center mb-5">
                <div class="col-6">
                  <span class="small text-muted">Don't have an account?</span>
                  <a class="small" href="signup.html">Signup</a>
                </div>

                <div class="col-6 text-right">
                  <button type="submit" class="btn btn-primary transition-3d-hover">Get Started</button>
                </div>
              </div>
              <!-- End Button -->
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Form -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>