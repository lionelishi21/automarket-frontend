<template>

  <!-- Car Item -->
  
        <!-- Products -->
        <li class="card mb-5">
          <div class="row">
            <div class="col-xs-12 pr-0 col-md-4">
              <router-link tag="a" :to="{ path:'car/details/'+ car.batch_id }" >
                <img class="img-fluid w-100" :src="showCarThumbnail(car.image)" alt="Image Description">
              </router-link>
            </div>

            <div class="col-xs-12 col-md-8">
              <div class="card-body py-5 px-md-4">
                <div class="mb-2">
                  <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">{{car.year}}</a>
                  <h2 class="h6 font-weight-normal">
                     <router-link tag="a" :to="{ path:'car/details/'+ car.batch_id }" >{{car.make}} {{car.model}} | <small><i>ml</i> {{car.milage}} </small></router-link>
                    <span class="badge badge-success badge-pill ml-1">New arrival</span>
                  </h2>
                  <div class="d-block">
                    <span class="h5"><router-link :to="{ path:'car/details/'+ car.batch_id }" > {{ car.price | currency}} </router-link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
  <!-- End Car Item -->
</template>
<script>
export default {
    props: ['car'],
	data() {
		return {
			cost: '689,000'
		}
	},

}
</script>