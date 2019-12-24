<template>
<!-- Car -->

<div class="card-sm-columns card-sm-2-count card-lg-2-count">
	<!-- Item -->
	<div class="card mb-3" v-for="car in cars">
        <!-- Car Item -->
	    <!-- Gallery -->
	    <a class="js-fancybox u-media-viewer" href="javascript:;"
	       :data-src="car.lrgimg"
	       data-fancybox="fancyboxGalleryExample2"
	       data-caption="Front in frames - image #01"
	       data-speed="700"
	       data-is-infinite="true">
	      <img class="card-img-top w-100" :src="car.img" alt="Image Description">

	      <div class="position-absolute top-0 left-0 pt-2 pl-3">
	        <span class="badge badge-success">New</span>
	      </div>

	      <div class="position-absolute bottom-0 left-0 right-0 pb-2 px-3">
	        <div class="row justify-content-between align-items-center">
	          <div class="col-8">
	            <h2 class="h5 text-white mb-0">${{car.price}}</h2>
	          </div>

	          <div class="col-4 text-right">
	            <span class="btn btn-icon btn-sm btn-white">
	              <span class="fas fa-images btn-icon__inner"></span>
	            </span>
	          </div>
	        </div>
	      </div>
	    </a>

	    <img class="js-fancybox d-none" alt="Image Description"
	         data-fancybox="fancyboxGalleryExample2"
	         data-src="../../assets/img/1920x1080/img37.jpg"
	         data-caption="Front in frames - image #02"
	         data-speed="700"
	         data-is-infinite="true">
	    <img class="js-fancybox d-none" alt="Image Description"
	         data-caption="Front in frames - image #03"
	         data-src="../../assets/img/1920x1080/img38.jpg"
	         data-fancybox="fancyboxGalleryExample2"
	         data-speed="700"
	         data-is-infinite="true">
	    <!-- End Gallery -->

	    <div class="card-body p-4">
		 
		  <!-- Name -->
	      <div class="mb-1">
     		 <h2 class="h5">
              <a href="property-description.html">{{car.year}} {{car.make}} {{car.model}} | <small>{{car.milage}}</small></a>
            </h2>
	      </div>
	      <!-- End Name -->

	      <!-- Location -->
	      <div class="mb-1">
	        <a class="font-size-1" href="property-description.html">
	          <span class="fas fa-map-marker-alt mr-1"></span>
	          {{car.location}}
	        </a>
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

	      <!-- Posted Info -->
	      <div class="media align-items-center border-top border-bottom py-3 mb-3">
	        <div class="media-body">
	          <small class="d-block text-muted">Listed on Jan 4, 2019 by</small>
	          <span class="d-block">Monica Fox</span>
	        </div>
	      </div>
	      <!-- End Posted Info -->
		
	   <!-- Options -->			
        <div class="font-size-1 border-bottom  py-1  mb-1">
          <a class="text-secondary mr-4" href="javascript:;">
            <b>Ext.</b> Color:{{car.extcolor}}
          </a>
      
          <a class="text-secondary mr-4" href="javascript:;">
            <span class="fas fa-star mr-1"></span>
            <b>Trans:</b> {{car.transmission}}
          </a>
        </div>
      <!-- End Options -->

	      <!-- Contacts -->
	      <div class="d-flex align-items-center font-size-1">
	        <a class="text-secondary" href="javascript:;">
	          <span class="fas fa-star mr-1"></span>
	          Save
	        </a>
	        <router-link :to="'/car/details/'+car.id" class="btn btn-sm btn-soft-primary transition-3d-hover ml-auto" href="property-description.html">
	        Details
	        <span class="fas fa-angle-right ml-1"></span>
	      </router-link>
	      </div>
	      <!-- End Contacts -->
	    </div>
	  <!-- End Car Item -->
	</div>
	<!-- End Item -->
</div>

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