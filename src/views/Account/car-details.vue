<template>
<div class="container space-top-1 space-top-sm-2">
	<!-- Page Preloader -->
  	<div id="jsPreloader" class="page-preloader" v-show="loading">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
<!-- End Page Preloader -->

	<div class="row">
		<div class="col-md-4">

        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;"
           :data-src="showCarImage(CarDetails.image)"
           data-fancybox="fancyboxGalleryExample1"
           data-caption="image #01"
           data-speed="700"
           data-is-infinite="true">
          <img class="img-fluid w-100" :src="showCarThumbnail(CarDetails.image)+'?'+Date.now()" alt="Image Description">

          <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
            <span class="btn btn-icon btn-sm btn-white">
              <span class="fas fa-images btn-icon__inner"></span>
            </span>
          </div>
        </a>
        <img class="js-fancybox d-none" v-for="img in CarDetails.images" alt="Image Description"
             data-fancybox="fancyboxGalleryExample1"
             :data-src="showCarImage(img.image)"
             data-caption="Front in frames - image #02"
             data-speed="700"
             data-is-infinite="true">
         <div class="row">
	         <div class="col-md-6" v-for="imge in CarDetails.images">

	         	   <div class="card mb-4 mb-md-0" >
	         		 <img class="img-fluid" :key="imge.id" alt="Image Description"
			             :src="showCarImage(imge.image)+'?'+Date.now()">
			          <div class="position-absolute bottom-0 right-0 pb-2 pr-2">

			            <span class="btn btn-icon btn-sm btn-white" @click="rotateImage(imge.id)">
			              <span class="fas fa-undo btn-icon__inner"></span>
			            </span>

			             <span class="btn btn-icon btn-sm btn-white" @click="removeImage(imge.id)">
			               <span class="fas fa-trash btn-icon__inner"></span>
			            </span>
			          </div>
			       </div>
	         </div>
         </div>
		</div>
		<div class="col-md-8">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<select class="custom-select" v-model="CarDetails.make_id">
							 <option v-for="(make, key, index) in AllMakes" :value="make.id">{{make.name}}</option>
						</select>
					</div>
			     </div>
			     <div class="col-md-6">
			     	 <div class="form-group">
						<select class="custom-select" v-model="CarDetails.model_id">
							  <option v-for="(model, key, index) in AllModels" :value="model.id">{{model.name}} - {{model.class}}</option>
						</select>
					</div>
			     </div>
			     <div class="col-md-6">
			     	 <div class="form-group">
						<select class="custom-select" v-model="CarDetails.year_id">
							 <option :value="CarDetails.year_id">{{CarDetails.year}}</option>
							 <option v-for="(year, key, index) in AllYears" :value="year.id">{{year.year}}</option>
						</select>
					</div>
			     </div>
			       <div class="col-md-6">
			     	 <div class="form-group">
						<select class="custom-select" v-model="CarDetails.vehicle.transmission">
							 <option :value="CarDetails.vehicle.transmission">{{CarDetails.vehicle.transmission}}</option>
							 <option v-for="(detail, key, index) in AllDetails" :value="detail.transmission" >{{detail.transmission}}</option>
						</select>
					</div>
			     </div>
			     <div class="col-md-6">
			     	 <div class="form-group">
						<input type="text" class="form-control" placeholder="Milage" v-model="CarDetails.milage">
					</div>
			     </div>
			     <div class="col-md-6">
			     	<div class="form-group">
						<select class="custom-select" v-model="CarDetails.bodystyle_id">
						<option :value="CarDetails.bodystyle_id">{{CarDetails.bodystyle}}</option>
						 <option v-for="body in getBodystyles" value="body.id">{{body.name}}</option>
						</select>
					</div>
			     </div>
			</div>
			<div class="row">
            	<div class="border-bottom">
                   <h2 class="h6 text-primary mb-0 ml-3 mb-2">Colors</h2>
                </div>
			</div>
			<div class="row">
                <div class="col-md-6">
                    <div class="form-group">
						<select class="custom-select" v-model="CarDetails.exterior_color">
							 <option value="CarDetails.exterior_color">{{CarDetails.exterior_color}}	</option>
							 <option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
						</select>
					</div>
                </div>
                <div class="col-md-6">
                	 <div class="form-group">
						<select class="custom-select" v-model="CarDetails.interior_color">
							 <option value="CarDetails.interior_color">{{CarDetails.interior_color}}	</option>
							<option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
						</select>
					</div>
                </div>
			</div>
			<div class="row">
				<div class="border-bottom">
                   <h2 class="h6 text-primary mb-0 ml-3 mb-2">Location</h2>
                </div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<select class="custom-select">
							<option value="CarDetails.parish">{{CarDetails.parish}}</option>
							<option v-for="parish in parishes" :value="parish.name" >{{ parish.name}}</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
				    	<input type="text" class="form-control" v-model="CarDetails.district" name="">	
					</div>	
				</div>
			</div>
			<div class="row">
				<div class="border-bottom">
                   <h2 class="h6 text-primary mb-0 ml-3 mb-2">Optional Information</h2>
                </div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<select class="custom-select" v-model="CarDetails.doors">
						    <option>Number of Doors</option>
						    <option :value="CarDetails.doors" selected>{{CarDetails.doors}} door</option>
						    <option value="2"> 2 door</option>
                            <option value="3"> 3 door</option>
                            <option value="4"> 4 door</option>
                            <option value="5"> 5 door</option>
                            <option value="6"> 6 door</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					 <div class="form-group">
						<select class="form-control" v-model="CarDetails.drive_type">
			    	      <option :value="CarDetails.drive_type">{{CarDetails.drive_type}}</option>
                          <option value="4x4/4-wheel drive">4x4/4-wheel drive</option>
                          <option value="AWD">AWD</option>
                          <option value="FWD">FWD</option>
                          <option value="RWD">RWD</option>
					    </select>
					 </div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<select class="custom-select" v-model="CarDetails.fuel_type">
						    <option :value="CarDetails.fuel_type">{{CarDetails.fuel_type}}</option>
                            <option value="Compressed Natural Gas">Compressed Natural Gas</option>
                            <option value="Diesel">Diesel</option>
                            <option value="E85 Flex Fuel">E85 Flex Fuel</option>
                            <option value="Electric">Electric</option>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Hybrid">Hybrid</option>
						</select>
					</div>
				</div>
			      <div class="col-md-6">
					<div class="form-group">
						<select class="custom-select" v-model="CarDetails.steering">
							<option :value="CarDetails.steering">{{CarDetails.steering}}</option>
							<option value="Right Hand">Righ Hand Drive</option>
                            <option value="Left Hand">Left Hand Drive</option>
						</select>
					</div>
				</div>
			</div>
			<!--    <div class="row">
					<div class="border-bottom">
	                   <h2 class="h6 text-primary mb-0 ml-3 mb-2">Car Features</h2>
	                </div>
				</div> -->
	<!-- 			<div class="row">
					<div class="col-md-6">
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" value="A/C: Front" id="customCheck12" v-model="CarDetails.features" class="custom-control-input">
						    <label class="custom-control-label" for="customCheck12">A/C Front</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" value="A/C: Rear" id="customCheck12"  v-model="CarDetails.features" class="custom-control-input">
						    <label class="custom-control-label" for="customCheck12">A/C: Rear</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" value="Power Locks" class="custom-control-input" v-model="CarDetails.features">
						    <label class="custom-control-label" for="customCheck12">Power Locks</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" value="Power Steering" class="custom-control-input" v-model="CarDetails.features">
						    <label class="custom-control-label" for="customCheck12">Power Steering</label>
						  </div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
						   <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" value="Cruise Controller" class="custom-control-input" v-model="CarDetails.features">
						    <label class="custom-control-label" for="customCheck12">Cruise Controller</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12"  value="Navigation" v-model="CarDetails.features"class="custom-control-input">
						    <label class="custom-control-label" for="customCheck12">Navigation</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" value="Keyless Entry" class="custom-control-input" v-model="CarDetails.features">
						    <label class="custom-control-label" for="customCheck12">Keyless Entry</label>
						  </div>
						</div>
						<div class="form-group">
						  <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" value="Integrated Phone" class="custom-control-input" v-model="CarDetails.features">
						    <label class="custom-control-label" for="customCheck12">Integrated Phone</label>
						  </div>
						</div>
					</div>
				</div>
				<div class="row">
					 <div class="border-bottom pb-3 mb-2">
	                  <h2 class="h6 text-primary mb-0">Seat</h2>
	                </div>
				</div>
				<div class="row">
					<div class="col-md-6">
						  <div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Bucket Seats</label>
							  </div>
						 </div>
						 <div class="form-group">
						 	 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Leather Seats</label>
							  </div>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Memory Seats</label>
							  </div>
						</div>
						<div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Power Seats</label>
							  </div>
						</div>
					</div>
				</div>
				<div class="row">
					 <div class="border-bottom pb-3 mb-2">
	                  <h2 class="h6 text-primary mb-0">Safety</h2>
	                </div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
						 <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" class="custom-control-input">
						    <label class="custom-control-label" for="customCheck12">Airbag: Driver</label>
						  </div>
						</div>
						<div class="form-group">
						 <div class="custom-control custom-checkbox">
						    <input type="checkbox" id="customCheck12" class="custom-control-input">
						    <label class="custom-control-label" for="customCheck12">Airbag: Passenger</label>
						  </div>
						</div>
						<div class="form-group">
						   <div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Airbag: Side</label>
							  </div>
							</div>
						</div>
					</div>
					<div class="col-md-6"> 
						 <div class="form-group">
							  <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Alarm</label>
							  </div>
						</div>
						<div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Antilock Brakes</label>
							  </div>
						</div>
						<div class="form-group">
							 <div class="custom-control custom-checkbox">
							    <input type="checkbox" id="customCheck12" class="custom-control-input">
							    <label class="custom-control-label" for="customCheck12">Fog Lights</label>
							  </div>
						</div>
					</div>
				</div>
				<div class="row">
					 <div class="border-bottom pb-3 mb-2">
	                  <h2 class="h6 text-primary mb-0">Entertainment</h2>
	                </div>
				</div> -->
			<!-- 		<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">AM/FM Stereo</label>
								  </div>
							</div>
							<div class="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">Cassette Player</label>
								</div>
							</div>
							<div class="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">CD (Single Disc)</label>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div clss="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">CD (Multi Disc)</label>
								</div>
							</div>
							<div class="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">MP3 (Single Disc)</label>
								</div>
							</div>
							<div clss="form-group">
								 <div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">Premium Sound</label>
								</div>
							</div>
						</div>
					</div> -->
				<!-- 	<div class="row">
						 <div class="border-bottom pb-3 mb-2">
		                  <h2 class="h6 text-primary mb-0">Other</h2>
		                </div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">Alloy Wheels</label>
								</div>
							</div>
							<div class="form-group">
								<div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">Moonroof/Sunroof</label>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<div class="custom-control custom-checkbox">
								    <input type="checkbox" id="customCheck12" class="custom-control-input">
								    <label class="custom-control-label" for="customCheck12">Third Row Seats</label>
								</div>
							</div>
						</div>
					</div> -->
					<div class="row">
						 <div class="border-bottom pb-3 mb-2">
		                  <h2 class="h6 text-primary mb-0">Price and Description</h2>
		                </div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="form-group">
							   <div class="input-group">
		                            <div class="input-group-prepend">
		                              <span class="input-group-text" id="listingPriceLabel">
		                                <span class="fas fa-dollar-sign"></span>
		                              </span>
		                            </div>
		                            <input class="form-control" name="price" v-model="CarDetails.price" id="listingPrice" placeholder="Price" v-currency="{currency: 'JMD', locale: 'en'}">
		                          </div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="form-group">
								<textarea class="form-control" rows="6" name="text" placeholder="Seller Notes" v-model="CarDetails.description"></textarea>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 ">
							   <!-- End uploader image input  -->
              					<button type="submit" class="btn mb-10 btn-primary btn-block transition-3d-hover">Update</button>
						</div>
					</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { CurrencyDirective } from 'vue-currency-input'
export default {
	 directives: {
	    currency: CurrencyDirective
	 },
	data() {
		return {
		   loading: false,
		   formData: {
	           main: {
	             added_by: null,
	             make_id: null,
	             model_id: null,
	             year_id: null,
	             vehicle_id: null,
	             steering: null,
	             district: null,
	             parish: null,
	             doors: null,
	             negotiable: null,
	             drive_type: null,
	             fuel_type: null,
	             interior_color: null,
	             exterior_color: null,
	             milage: null,
	             description:null,
	             price: null,
	           },
	         others: [],
	         images: [],
	         profile: [],
			 car_entertainment: [],
	         car_safety: [],
	         car_others: [],
	         car_features: [],
	         car_seats: [],
		  },
		  parishes: [
		        { name: 'Kingston' },
		        { name: 'St. Andrew' },
		        { name: 'Portland' },
		        { name: 'St.Thomas' },
		        { name: 'St. Catherine' },
		        { name: 'St. Mary'},
		        { name: 'St. Mary'},
		        { name: 'St. Ann'},
		        { name: 'Manchester'},
		        { name: 'Clarendon'},
		        { name: 'Hanover'},
		        { name: 'Westmoreland'},
		        { name: 'St. James'},
		        { name: 'Trelawny'},
		        { name: 'St. Elizabeth'}
	      ],
			
		}
	},
	watch: {
		'CarDetails.make_id': function() {
			console.log('wathing make ids....')
			this.$store.dispatch('GET_VEHICLE_MODEL', this.CarDetails.make_id)
		},
		'CarDetails.model_id': function() {
         console.log( 'watching model... ')
         var payload = { make: this.CarDetails.make_id,  model: this.CarDetails.model_id, year: this.CarDetails.year_id }

         this.$store.dispatch('GET_VEHICLE_YEARS', payload)
	    },
	    'CarDetails.year_id': function() {
	        console.log('watching year... ')
	        var payload = { make: this.CarDetails.make_id,  model: this.CarDetails.model_id, year: this.CarDetails.year_id }
	        this.$store.dispatch('GET_VEHICLE_DETAILS', payload)
	    }	
	},
	computed: {
		...mapGetters([
		    'CarDetails',
		    'UserCarDetails',
	        'AllDetails',
	        'AllModels',
	        'AllMakes',
	        'AllYears',
	        'getPlanDetails',
	        'getBodystyles'
	       ])
	},
	beforeUpdate() {
	  $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
	},
	created() {
		this.initData()
	},
	mounted() {

	   console.log('...mounting car models')
	   this.$store.dispatch('GET_VEHICLE_MODEL', this.CarDetails.make_id)

	   var payload = { make: this.CarDetails.make_id, model: this.CarDetails.model_id, year: this.CarDetails.year_id}
	   this.$store.dispatch('GET_VEHICLE_YEARS', payload)
	   this.$store.dispatch('GET_VEHICLE_DETAILS', payload)
	},
	methods: {
		initData() {
			var batch_id = this.$route.params.id;
	
			this.$store.dispatch('GET_CAR_DETAILS', batch_id)
			this.$store.dispatch('GET_VEHICLE_MAKE')
	        this.$store.dispatch('GET_BODYSTYLES');

	        var payload = { make: this.CarDetails.make_id, model: this.CarDetails.mode_id, year: this.CarDetails.year}
	        this.$store.dispatch('GET_VEHICLE_YEARS', payload)

	        this.formData.main.milage = this.CarDetails.milage

		},
		updateInformation() {
			
			this.loading = true

			let formData = new FormData()
			formData.append('main', JSON.stringify(this.formData.main))	
			formData.append('car_safety', this.formData.car_safety);
	        formData.append('car_others', this.formData.others);
	        formData.append('car_features', this.formData.car_features);
	        formData.append('car_seats', this.formData.car_seats);
	        formData.append('profile', this.formData.profile);
	        formData.append('car_entertainment', this.formData.car_seats);
			
			this.$store.dispatch('UPDATE_ADS', formData,
			  {
		          headers: {
		            'content-type': `multipart/form-data`,
		          },
		       }
			)
		},
		rotateImage(image_id) {

			this.loading = true
			this.$store.dispatch('ROTATE_IMAGE', image_id)
				.then( response => {
					
					this.$nextTick(() => {
						this.loading = false
			          // Add the component back in
			          this.initData()
			        });
					
				})
		},
		removeImage(image_id) {

			this.loading = true
			this.$store.dispatch('REMOVE_IMAGE', image_id)

		}
	}
}
</script>








