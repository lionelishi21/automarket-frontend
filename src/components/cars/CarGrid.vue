<template>

<!-- Grid -->
<div class="row">
	<div class="col-md-3 col-sm-6 col-xs-6 col-lg-3 mb-5" v-for="(car, index) in cars" :key="index">

	  <!-- Card -->
      <router-link :to="{ path:'car/details/'+ car.batch_id }" class="card bg-img-hero shadow-none min-h-380rem h-100 transition-3d-hover p-5" :style="'background-image: url('+showCarThumbnail(car.image)+')'">
			<div class="mb-4">
			   <span class="d-block small text-white font-weight-bold text-cap mb-2">{{car.make}} > {{car.model}}</span>
			</div>

			<div class="mt-auto">
				<h3 class="h5 text-white">{{ car.price | currency}}</h3>
				<span class="text-white-50"> {{car.location}} <i class="fas fa-angle-right fa-sm ml-1"></i></span>
			</div>
      </router-link>
      <!-- End Card -->
	</div>
</div>
<!-- End Grid -->

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