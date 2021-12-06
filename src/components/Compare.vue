<template>
    <!-- Hero Section -->
<div class="position-relative gradient-x-three-sm-primary rounded-lg space-top-md-1 space-bottom-md-2 mx-md-10">
  <div class="container position-relative space-top-2 space-top-lg-3 space-bottom-1">
    <div class="row position-relative z-index-2">
      <div class="col-lg-8">
      
        <!-- Title -->
        <div class="w-lg-80 text-center text-lg-left mb-5 mb-lg-7">
          <h2><span class="text-primary text-highlight-warning">Compare, Research</span> find whats is right for you</h2>
        </div>
        <!-- End Title -->

        <!-- Card -->
        <div class="card p-2 mb-3">
          <!-- Input Group -->
          <div class="form-row input-group-borderless">
            <div class="col-sm mb-2 mb-md-0">
              <div class="input-group input-group-merge input-group-borderless">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-search"></i>
                  </div>
                </div>
                <select class="form-control"  v-model="filterMake" @change="onChangeMake($event)">
                    <option value="">Select make</option>
                     <option  v-for="(make, key, index) in AllMakes" :value="make.id">{{make.name}}</option>
                </select>
              </div>
            </div>

            <div class="col-sm d-sm-none">
              <hr class="my-0">
            </div>

            <div class="col-sm column-divider-sm mb-2 mb-md-0">
              <div class="input-group input-group-merge input-group-borderless">
                <div class="input-group-prepend">
                  <div class="input-group-text">
                    <i class="fas fa-car"></i>
                  </div>
                </div>
                  <select class="form-control" v-model="filterModel">
                    <option value="">Select Model</option>
                     <option  v-for="(model, key, index) in AllModels" :value="model.id">{{model.name}}</option>
                 </select>
              </div>
            </div>

            <div class="col-md-auto">
              <button @click="goToCompare()" :disabled="disabledbutton" type="button" class="btn btn-block btn-primary px-5">
                Go 
            </button>
            </div>
          </div>
          <!-- End Input Group -->
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Row -->

    <div class="d-none d-lg-block col-lg-6 position-lg-absolute top-0 right-0">
      <img class="img-fluid rounded-lg" alt="Image Description">

      <figure class="max-w-15rem w-100 position-absolute top-0 left-0 z-index-n1">
        <div class="mt-n6 ml-n5">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width="100" height="100">
            <circle fill="#FFC107" opacity=".7" cx="167.6" cy="167.6" r="130.1"/>
          </svg>
        </div>
      </figure>

      <figure class="max-w-15rem w-100 position-absolute bottom-0 right-0 z-index-n1">
        <div class="mb-n2 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 335.2 335.2" width="120" height="120">
            <circle fill="none" stroke="#377DFF" stroke-width="75" cx="167.6" cy="167.6" r="130.1"/>
          </svg>
        </div>
      </figure>

    </div>
  </div>
</div>
<!-- End Hero Section -->
</template>
<script>

	import { mapGetters } from 'vuex';
	export default {

		data() {
			return {
				filterMake: false,
				filterModel: false
			}
		},

		computed: {
			...mapGetters([
				'AllMakes',
				'AllModels'
			]),

			disabledbutton: function() {
				
				if (!this.filterMake || !this.filterModel ) {
					return true
				}
			}
		},

		created() {
			var makesType = 'popular';
			this.$store.dispatch('GET_VEHICLE_MAKE', makesType )
		},

		methods: {

			goToCompare() {
				var url = '/compare-research?make='+this.filterMake+'&model='+this.filterModel
				this.$router.push(url);
			},

	        onChangeMake( event ) {


	            this.isLoading = true;
	            this.$store.dispatch('GET_VEHICLE_MODEL', event.target.value)
	        }
		}
	}
</script>