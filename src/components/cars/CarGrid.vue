<template>
<!-- Car -->
<!-- Property Item -->
<div class="row">
	<div class="col-md-4 col-sm-6 col-xs-6 col-lg-3" v-for="car in cars">
	    <div class="card">
	    <!-- Gallery -->
	 	<router-link  tag="a" :to="{ path:'car/details/'+ car.batch_id }">
	        <img class="img-fluid w-100" :src="showCarThumbnail(car.image)" alt="Image Description">
		</router-link>
	
		 <a class="js-fancybox u-media-viewer" href="javascript:;"
	       data-src="../../assets/img/1920x1080/car1.jpg"
	       data-fancybox="fancyboxGalleryExample1"
	       data-caption="Front in frames - image #01"
	       data-speed="700"
	       data-is-infinite="true">
	      <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
	        <span class="btn btn-icon btn-sm btn-white">
	          <span class="fas fa-images btn-icon__inner"></span>
	        </span>
	      </div>
	    </a>

	<!-- Gallery -->
	    <img class="js-fancybox d-none" v-for="img in car.images" alt="Image Description"
	         data-fancybox="fancyboxGalleryExample1"
	         :data-src="showCarImage(img.image)"
	         data-caption="Front in frames - image #02"
	         data-speed="700"
	         data-is-infinite="true">
	  <!-- End Gallery -->

	  <div class="card-body shadow-soft">
	    <!-- Location -->
	    <div class="">
	        <h2 class="h5">
             <router-link tag="a" :to="{ path:'car/details/'+ car.batch_id }"><small>{{car.year}} {{car.make}} {{car.model}} </small></router-link>
            </h2>
	    </div>
	    <!-- End Location -->

	        <!-- Location -->
	    <div class="">
	         <h2 class="h5 mb-1">
              <router-link  tag="a" :to="{ path:'car/details/'+ car.batch_id }"> {{ car.price | currency}} </router-link>
            </h2>
	    </div>
	    <!-- End Location -->
		
  <!-- Category -->
        <div>
          <a class="font-size-1" href="property-description.html">
             <span class="fas fa-list-alt mr-1"></span>
             {{car.make}} > {{car.model}}
            
          </a>
        </div>
        <!-- Category -->

        <!-- Location -->
        <div>
          <a class="font-size-1" href="property-description.html">
            <span class="fas fa-map-marker-alt mr-1"></span>
            {{car.location}}
          </a>
        </div>
        <!-- End Location -->
	  </div>
	</div>
</div>
</div>
<!-- End Property Item -->
</template>
<script>
export default {
	props: ['cars'],
	data() {
		return {

		}
	},
	methods: {

	}

}
</script>