<template>
<main id="content" role="main" style="height: 80vh">
	<div class="container">
		<nav aria-label="breadcrumb">
		  <ol class="breadcrumb bg-primary breadcrumb-white">
		    <li class="breadcrumb-item">
		      <a class="breadcrumb-link" href="#">Home</a>
		    </li>
		    <li class="breadcrumb-item active" aria-current="page">Auto Reps</li>
		  </ol>
		</nav>

		<div class="col-md-12">
			<!-- Job Positions - Filter -->
				<div class="row align-items-md-center space-1">
				  <div class="col-lg-6 mb-4 mb-lg-0">
				    <!-- Department Search Field -->
				    <div class="js-focus-state">
				      <label class="sr-only" for="searchJobsSr">Search Auto Representative</label>
				      <div class="input-group">

				        <div class="input-group-prepend">
				          <span class="input-group-text" id="searchJobs">
				            <span class="fas fa-search"></span>
				          </span>
				        </div>

				        <input type="text" class="form-control" 
				          name="text" id="searchJobsSr" 
				          placeholder="Search Auto Reps" 
				          aria-label="Search Auto Reps" 
				          aria-describedby="searchJobs">
				      </div>
				    </div>
				    <!-- End Department Search Field -->
				  </div>

				  <div class="col-sm-6 col-lg-4 mb-4 mb-lg-0">
				    <!-- Locations -->
				    <select class="custom-select">
				      <option selected>All locations</option>
				    </select>
				    <!-- End Locations -->
				  </div>


				  <div class="col-lg-2 text-lg-right">
				    <a class="link-muted" href="#">{{GetAutoReps.length}} Auto Reps</a>
				  </div>
				</div>
				<!-- End Job Positions - Filter -->
		</div>
		<!-- <pre>{{GetAutoReps}}</pre> -->
		 <div class="col-md-4 mt-1" v-for="rep in GetAutoReps">
		 	  <!-- Item -->
				  <div class="card mb-5">
				    <div class="card-body">
				      <!-- Header -->
				      <div class="media align-items-center">

				        <!-- Avatar -->
				        <div class="u-avatar position-relative mr-3">
				          <img class="img-fluid rounded-circle" src="@/assets/svg/illustrations/verified-user.svg" alt="Image Description">
				          <span class="badge badge-xs badge-pos badge-pos--bottom-left rounded-circle"></span>
				        </div>
				        <!-- End Avatar -->

				        <div class="media-body">
				          <h1 class="h6 mb-0">
				            <router-link :to="'/automarketrep/'+rep.username">{{rep.name}}</router-link>
				          </h1>
				          <small class="text-secondary">AutoMarket Representative</small>
				        </div>
				      </div>
				      <!-- End Header -->

				    </div>
				  </div>
  				<!-- End Item -->

		 </div>
	</div>
</main>
</template>

<script>
	import { mapGetters } from 'vuex';
export default {

  name: 'Autorep',

  data () {
    return {

    }
  },
  computed: {
  	...mapGetters([
  		'GetAutoReps'
  	])
  },
  created() {
  	 this.$store.dispatch('FETCH_AUTOREPS');
  }
}
</script>

<style lang="css" scoped>
</style>