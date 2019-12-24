<template>
   <div class="row">
    <!-- Jobs -->
    <div class="col-lg-12">
      <!-- Jobs -->
      <div class="card mb-5" v-for="car in cars">
          <!-- Property Item -->
          <div class="border-bottom">
            <div class="row">
              <div class="col-md-4 d-md-flex align-items-md-start flex-md-column mb-5 mb-md-0">
                <!-- Gallery -->
                <a class="js-fancybox u-media-viewer mb-3" href="javascript:;"
                   :data-src="car.lrgimg"
                   data-fancybox="fancyboxGalleryExample1"
                   data-caption="Front in frames - image #01"
                   data-speed="700"
                   data-is-infinite="true">
                  <img class="img-fluid w-100" :src="car.img" alt="Image Description">

                  <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
                    <span class="btn btn-icon btn-sm btn-white">
                      <span class="fas fa-images btn-icon__inner"></span>
                    </span>
                  </div>
                </a>

                <img class="js-fancybox d-none" alt="Image Description"
                     data-fancybox="fancyboxGalleryExample1"
                     data-src="../../assets/img/1920x1080/img37.jpg"
                     data-caption="Front in frames - image #02"
                     data-speed="700"
                     data-is-infinite="true">
                <img class="js-fancybox d-none" alt="Image Description"
                     data-caption="Front in frames - image #03"
                     data-src="../../assets/img/1920x1080/img38.jpg"
                     data-fancybox="fancyboxGalleryExample1"
                     data-speed="700"
                     data-is-infinite="true">
                <!-- End Gallery -->
            
              </div>

              <div class="col-md-8">
                <div class="row">
                  <div class="col-12">
                    <h2 class="h5">
                      <a href="property-description.html">{{car.year}} {{car.make}} {{car.model}} | <small>{{car.milage}} </small></a>
                    </h2>
                  </div>
                  <div class="col-12">
                    <h2 class="h5 mb-1">
                      <small>JMD</small>
                      <a href="property-description.html"> ${{car.price}}</a>
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

                <!-- Contacts -->
                <div class="d-flex align-items-center font-size-1">
                  <a class="text-secondary mr-4" href="javascript:;">
                    <b>Ext.</b> Color:{{car.extcolor}}
                  </a>
              
                  <a class="text-secondary mr-4" href="javascript:;">
                    <span class="fas fa-star mr-1"></span>
                    <b>Transimition:</b> {{car.transmission}}
                  </a>

                  <a class="btn btn-sm btn-soft-primary transition-3d-hover ml-auto" href="property-description.html">
                    Details
                    <span class="fas fa-angle-right ml-1"></span>
                  </a>
                </div>
                <!-- End Contacts -->
              </div>
            </div>
          </div>
          <!-- End Property Item -->
      </div>
      <!-- End cars -->

      <div class="py-3"></div>
          <!-- Pagination -->
          <nav aria-label="Page navigation">
            <ul class="pagination justify-content-center mb-0">
              <li class="page-item ml-0">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                  <span class="sr-only">Previous</span>
                </a>
              </li>
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
              <li class="page-item"><a class="page-link" href="#">12</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                  <span class="sr-only">Next</span>
                </a>
              </li>
            </ul>
          </nav>
          <!-- End Pagination -->
    </div>
    <!-- End cars -->
  </div>
</template>
<script>
export default {
	props:['cars'],
	data() {
		return {

		}
	},
	methods: {
		job_description() {
			var id = 1
			this.$router.push('/jobs/description/'+ id)
		},
     getImage(item) {
      return require(item.img);
    }
	}
}
</script>