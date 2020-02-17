<template>

  <!-- Car Item -->
  <div class="border-bottom pb-1">
     <div class="row">

              <div class="card shadow-soft col-md-4 d-md-flex align-items-md-start flex-md-column mb-5 mb-md-0">
              
                <!-- Gallery -->
                 <router-link  tag="a" :to="{ path:'car/details/'+ car.batch_id }">
                      <img class="img-fluid w-100" :src="'http://127.0.0.1:8000/storage/thumbnail/'+car.image" alt="Image Description">
                  </router-link>

              </div>

              <div class="col-md-8 card shadow-soft ">
                <div class="row">
                  <div class="col-8">
                    <h2 class="h5">
                      <router-link tag="a" to="{ path:'car/details/'+ car.batch_id }" >{{car.year}} {{car.make}} {{car.model}} | <small><i>ml</i> {{car.milage}} </small></router-link>
                    </h2>
                  </div>
                   <div class="col-4" v-if="car.subscribe">
                     <span class="badge badge-success">Subscribe</span>
                  </div>
                  <div class="col-12">
                    <h2 class="h5 mb-1">
                      <small>JMD</small>
                     <router-link tag="a" to="{ path:'car/details/'+ car.batch_id }" > {{ car.price | currency}} </router-link>
                    </h2>
                  </div>
                <!--   <div class="col-4 text-right">
                    <span class="badge badge-success">New</span>
                  </div> -->
                </div>

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

                <!-- Exteriror Color -->
                <div class="d-flex align-items-center font-size-1">
                  <a class="text-secondary mr-4" href="javascript:;">
                    <b>Ext.</b> Color:{{car.exterior_color}}
                  </a>
                  <!--  Car Exteriror Color-->
              		
              	  <!--  -->
                  <a class="text-secondary mr-4" href="javascript:;">
                    <span class="fas fa-star mr-1"></span>
                    <b>Steering:</b> {{car.steering}}
                  </a>
					
                </div>
                <!-- End Contacts -->
              </div>
            </div>
  </div>
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