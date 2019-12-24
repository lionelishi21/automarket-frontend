<template>
<div>


<!-- Contacts Form -->
<form class="js-validate">

  <div class="custom-control custom-checkbox custom-control-inline">
	  <input type="checkbox" id="customCheckboxInline1" name="customCheckboxInline1" class="custom-control-input">
	  <label class="custom-control-label" for="customCheckboxInline1">I have no work experience</label>
  </div>

	<div class="text-center">
	  <span class="u-divider u-divider--text">Or</span>
	</div>
  <!-- <button type="submit" class="btn btn-primary btn-wide transition-3d-hover mb-4">Add work experiences</button> -->
  <div class="row" v-show="is_experience" >
    <!-- Input -->
    <div class="col-sm-12 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          Job Title
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
    <div class="col-sm-12 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          Company
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
          From
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
          Year
          <span class="text-danger">*</span>
        </label>

        <input type="number" class="form-control" name="phone" placeholder="1-800-643-4500" aria-label="1-800-643-4500" required
               data-msg="Please enter a valid phone number."
               data-error-class="u-has-error"
               data-success-class="u-has-success">
      </div>
    </div>
    <!-- End Input -->

        <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          To
        </label>
      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-6 mb-6">
    </div>
    <!-- End Input -->
        <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          From
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
          Year
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
  <div v-show="is_experience" class="js-form-message mb-6">
    <label class="form-label">
     What do you do there
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

  <div v-show="is_experience" >
    <button type="submit" class="btn btn-primary btn-wide transition-3d-hover mb-4">Continue</button>
    <p class="small">We'll get back to you in 1-2 business days.</p>
  </div>
</form>



<!-- End Contacts Form -->
</div>
</template>
<script>
export default {
	data() {
		return {
			is_experience: true,
			form: [],
			experiences: [
				{
					jobTitle: '',
					company: '',
					form: {
						month: '',
						year: '',
					},
					to: {
						month: '',
						year: ''
					},
					position: ''
				}
			]
		}
	},
	methods: {
		addWorks() {
			this.is_experience = false
		}
	}
}
</script>