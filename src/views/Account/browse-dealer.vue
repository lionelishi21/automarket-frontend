<template>
<div class="container min-height-100vh">
	
	<!-- Page Preloader -->
	<div id="jsPreloader" class="page-preloader" v-show="isLoading">
	  <div class="page-preloader__content-centered">
	    <div class="spinner-grow text-primary" role="status">
	      <span class="sr-only">Loading...</span>
	    </div>
	  </div>
	</div>
	<!-- End Page Preloader -->

	<!-- Job Positions - Filter -->
	<div class="row align-items-md-center space-1">
	  <div class="col-lg-4 mb-lg-0">
	    <!-- Department Search Field -->
	    <div class="js-focus-state">
	      <label class="sr-only" for="searchJobsSr">Search Jobs</label>
	      <div class="input-group">
	        <div class="input-group-prepend">
	          <span class="input-group-text" id="searchJobs">
	            <span class="fas fa-search"></span>
	          </span>
	        </div>
	        <input type="text" class="form-control" name="text" id="searchJobsSr" placeholder="Search Jobs" aria-label="Search Jobs" aria-describedby="searchJobs">
	      </div>
	    </div>
	    <!-- End Department Search Field -->
	  </div>

	  <div class="col-sm-6 col-lg-3 mb-lg-0">
	    <!-- Locations -->
	    <select class="custom-select">
	      <option selected>All locations</option>
	      <option value="location1">Chicago, US</option>
	      <option value="location2">New York, US</option>
	      <option value="location3">Seattle/Kirkland, US</option>
	      <option value="location4">Los Angles, US</option>
	      <option value="location5">Moscow, Russia</option>
	      <option value="location6">Sydney, Australia</option>
	      <option value="location7">Birmingham, UK</option>
	      <option value="location7">Manchester, UK</option>
	      <option value="location8">Beijing, China</option>
	    </select>
	    <!-- End Locations -->
	  </div>


	  <div class="col-lg-2 text-lg-right">
	    <a class="link-muted" href="#">22 Dealers</a>
	  </div>
	</div>
<!-- End Job Positions - Filter -->
	<div class="row">

		<div class="col-md-4">
			  <a class="card card-frame mb-3" href="#">
			    <div class="card-body">
			      <div class="media">
			        <span class="btn btn-icon btn-soft-primary rounded-circle mr-3">
			          <span class="btn-icon__inner">CB</span>
			        </span>
			        <div class="media-body">
			          <h4 class="h6 text-dark mb-0">Cameron Brown</h4>
			          <span>Connect</span>
			        </div>
			      </div>
			    </div>
			  </a>
		</div>
		<div class="col-md-4">
			  <a class="card card-frame mb-3" href="#">
			    <div class="card-body">
			      <div class="media">
			        <span class="btn btn-icon btn-soft-primary rounded-circle mr-3">
			          <span class="btn-icon__inner">CB</span>
			        </span>
			        <div class="media-body">
			          <h4 class="h6 text-dark mb-0">Cameron Brown</h4>
			          <span>Refer</span>
			        </div>
			      </div>
			    </div>
			  </a>
		</div>
		   <div class="col-md-4">
				  <a class="card card-frame mb-3" href="#">
				    <div class="card-body">
				      <div class="media">
				        <span class="btn btn-icon btn-soft-primary rounded-circle mr-3">
				          <span class="btn-icon__inner">CB</span>
				        </span>
				        <div class="media-body">
				          <h4 class="h6 text-dark mb-0">Cameron Brown</h4>
				          <span>Refer</span>
				        </div>
				      </div>
				    </div>
				  </a>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
			filter: ''
		}
	},
	watch: {
		filter: function( value ) {
			this.$store.dispatch('filterDealers', value)
		}
	},
	computed: {
		...mapGetters([
			'GettAllDeales'
		])
	},
	created() {
		this.$store.dispatch('filterDealers')
	},
	methods: {

	}
}
</script>