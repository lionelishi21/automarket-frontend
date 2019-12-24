<template>
<div>


<!-- Contacts Form -->
<form class="js-validate">

  <div class="custom-control custom-checkbox custom-control-inline">
	  <input type="checkbox" id="customCheckboxInline1" name="customCheckboxInline1" class="custom-control-input">
	  <label class="custom-control-label" for="customCheckboxInline1">I have no qualifications</label>
  </div>

	<div class="text-center mb-6">
	  <span class="u-divider u-divider--text">Or</span>
	</div>
  <!-- <button type="submit" class="btn btn-primary btn-wide transition-3d-hover mb-4">Add work experiences</button> -->
  <div class="row" v-show="is_experience" >
    <!-- Input -->
    <div class="col-sm-12 mb-6">
    	<label for="">Type:</label>
        <!-- Select -->
		 <select class="form-control" data-style="btn-sm btn-primary" >
		  <option value="one" selected>Select type</option>
		  <option value="two">A-Level</option>
		  <option value="three">CXC</option>
		  <option value="four">CAPE</option>
		  <option value="four">University degree</option>
		  <option value="four">Master's degree</option>
		  <option value="four">Ph.D</option>
		</select>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-12 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          School or College
          <span class="text-danger">*</span>
        </label>
        <input type="text" class="form-control" name="email" placeholder="g: Portland High" aria-label="Eg: Portland High" required
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
			<!-- Select -->
			<select class="js-select selectpicker dropdown-select"
			        data-style="btn-sm btn-primary">
			  <optgroup label="Picnic">
			    <option>Start</option>
			    <option>2001</option>
			    <option>2002</option>
			    <option>2003</option>
			    <option>2005</option>
			    <option>2006</option>
			    <option>2007</option>
			    <option>2008</option>
			    <option>2009</option>
			  </optgroup>
			</select>
			<!-- End Select -->
      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-6 mb-6">
      <div class="js-form-message">
        <label class="form-label">
          To
          <span class="text-danger">*</span>
        </label>
        	<!-- Select -->
			<select class="js-select selectpicker dropdown-select"
			        data-style="btn-sm btn-primary">
			  <optgroup label="Picnic">
			    <option>End</option>
			    <option>2010</option>
			    <option>2011</option>
			    <option>2012</option>
			    <option>2013</option>
			    <option>2014</option>
			    <option>2015</option>
			    <option>2016</option>
			    <option>2017</option>
			    <option>2018</option>
			    <option>2019</option>
			  </optgroup>
			</select>
			<!-- End Select -->

      </div>
    </div>
    <!-- End Input -->

    <!-- Input -->
    <div class="col-sm-6 mb-6">
    </div>
    <!-- End Input -->
   
  </div>

  <!-- Input -->
  <div v-show="is_experience" class="js-form-message mb-6">
    <label class="form-label">
     Personal Statement
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

  <div  >
    <button type="submit" class="btn btn-primary btn-wide transition-3d-hover mb-4">Save</button>
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
	mounted() {

      // initialization of select picker
      $.HSCore.components.HSSelectPicker.init('.js-select');

      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

	},
	methods: {
		addWorks() {
			this.is_experience = false
		}
	}
}
</script>
