<template>

  <!-- Car Item -->
  <div class="border-bottom pb-1">
     <div class="row">

              <div class="card col-md-4 d-md-flex align-items-md-start flex-md-column mb-5 mb-md-0">
                <!-- Gallery -->
                <a class="js-fancybox u-media-viewer mb-3" href="javascript:;"
                   data-src="../../assets/img/1920x1080/car1.jpg"
                   data-fancybox="fancyboxGalleryExample1"
                   data-caption="Front in frames - image #01"
                   data-speed="700"
                   data-is-infinite="true">
                  <img class="img-fluid w-100" :src="'http://127.0.0.1:8000/storage/thumbnail/'+car.image" alt="Image Description">

                  <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
                    <span class="btn btn-icon btn-sm btn-white">
                      <span class="fas fa-images btn-icon__inner"></span>
                    </span>
                  </div>
                </a>
				

                <img class="js-fancybox d-none" v-for="img in car.images" alt="Image Description"
                     data-fancybox="fancyboxGalleryExample1"
                     :data-src="'http://127.0.0.1:8000/storage/images/'+img.image"
                     data-caption="Front in frames - image #02"
                     data-speed="700"
                     data-is-infinite="true">

            
              </div>

              <div class="col-md-8">
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
					
                  <router-link  tag="a" :to="{ path:'car/details/'+ car.batch_id }" class="btn btn-sm btn-soft-primary transition-3d-hover ml-auto">
                    Details
                    <span class="fas fa-angle-right ml-1"></span>
                  </router-link>
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