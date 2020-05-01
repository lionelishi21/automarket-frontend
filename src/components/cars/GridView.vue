<template>
<!-- Car -->
<!-- Property Item -->
<div class="row">
	<div class="col-md-3 col-sm-6 col-xs-6" v-for="car in cars">
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
	         data-caption="Car Images"
	         data-speed="700"
	         data-is-infinite="true">
	  <!-- End Gallery -->
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