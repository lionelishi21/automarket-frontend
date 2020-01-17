<template>
<form class="js-validate">
  <div class="row">
    <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          First name
          <span class="text-danger">*</span>
        </label>

        <input type="text" class="form-control" name="name" placeholder="Jack Wayley" aria-label="Jack Wayley" required
               data-msg="Please enter your name."
               data-error-class="u-has-error"
               data-success-class="u-has-success">
      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          Last name
          <span class="text-danger">*</span>
        </label>

        <input type="email" class="form-control" name="email" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required
               data-msg="Please enter a valid email address."
               data-error-class="u-has-error"
               data-success-class="u-has-success">
      </div>
    </div>
    <!-- End Input -->

    <div class="w-100"></div>

    <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          Email
          <span class="text-danger">*</span>
        </label>

        <input type="text" class="form-control" name="subject" placeholder="Web design" aria-label="Web design" required
               data-msg="Please enter a subject."
               data-error-class="u-has-error"
               data-success-class="u-has-success">
      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          Your Phone Number
          <span class="text-danger">*</span>
        </label>

        <input type="number" class="form-control" name="phone" placeholder="1-800-643-4500" aria-label="1-800-643-4500" required
               data-msg="Please enter a valid phone number."
               data-error-class="u-has-error"
               data-success-class="u-has-success">
      </div>
    </div>
    <!-- End Input -->
  </div>

  <!-- Input -->
  <div class="js-form-message mb-6">
    <label class="form-label">
      How can we help you?
      <span class="text-danger">*</span>
    </label>

    <div class="input-group">
      <textarea class="form-control" rows="4" name="text" placeholder="Hi there, I would like to ..." aria-label="Hi there, I would like to ..." required
                data-msg="Please enter a reason."
                data-error-class="u-has-error"
                data-success-class="u-has-success"></textarea>
    </div>
  </div>
  <!-- End Input -->

  <div>
    <button type="submit" class="btn btn-primary btn-wide transition-3d-hover mb-4">Next</button>
    <p class="small">We'll get back to you in 1-2 business days.</p>
  </div>
</form>
</template>