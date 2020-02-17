<template>
<div class="container min-height-100vh">
<!-- Nav Classic -->
<ul id="SVGnavIcons" class="svg-preloader nav nav-classic nav-rounded nav-shadow nav-justified border" role="tablist">
  <li class="nav-item">
    <a class="nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-13.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
       Active<span class="badge badge-danger">2</span>
      </div>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link font-weight-medium" id="pills-two-example2-tab" data-toggle="pill" href="#pills-two-example2" role="tab" aria-controls="pills-two-example2" aria-selected="false">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-63.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
        Inactive
      </div>
    </a>
  </li>
</ul>
<!-- End Nav Classic -->

<!-- Tab Content -->
<div class="tab-content">
  <div class="tab-pane fade pt-6 show active" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
    <!-- Title -->
   
      <!-- List of Cars Section -->
      <div class="container space-top-1 space-bottom-2">
        <div class="row">
          <div class="col-lg-12">

            <!-- List View -->
            <div class="row">
              <div class="col-md-3" v-for="car in UserCars" >
                  <div class="card mb-4 mb-md-0"  v-if="car.subscribe">
                      <img v-if="showPlaceHolder(car.image)" class="img-fluid" :src="'http://127.0.0.1:8000/storage/images/'+car.image" alt="" style="height: 180px;">
                      <img v-else class="img-fluid" src="http://127.0.0.1:8000/public/assets/placeholder/placeholder.jpg" alt="" style="height: 180px;">
                      <!-- Card -->
                      <div class="card-body p-3">
                        <h4 class="h6" >{{car.year}} {{car.make}} - <span class="btn btn-xs btn-soft-success">{{car.days}} days remain</span></h4>
                    <!--     <p class="font-size-1 mb-0"><small>Plan Description: <span class="badge badge-primary"> {{car.subscription.plan.name}}</span></small></p>
                        <p class="font-size-1 mb-0"><small>Cost: <span class="badge badge-primary">{{car.subscription.plan.cost}}</span></small></p>
                        <p class="font-size-1 mb-0"><small>Placement: <span class="badge badge-primary">Premium</span></small></p>
                        <hr>
                        <small class="font-size-1"><i>number of views: <span class="badge badge-primary">100</span></i></small> -->
                        <!-- <a class="btn btn-xs btn-primary btn-block" href="#" @click="">Change plan</a> -->
                      </div>
                      <!-- End Card -->
                     </div>
                </div>
            </div>
          <!-- End List View -->

            <!-- Pagination -->
        <!--     <div class="d-flex justify-content-between align-items-center">
              <nav aria-label="Page navigation">
                <ul class="pagination mb-0">
                  <li class="page-item ml-0">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                      <span class="sr-only">Previous</span>
                    </a>
                  </li>
                  <li class="page-item active"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item disabled"><a class="page-link" href="#">...</a></li>
                  <li class="page-item"><a class="page-link" href="#">6</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                      <span class="sr-only">Next</span>
                    </a>
                  </li>
                </ul>
              </nav>
              <small class="d-none d-sm-inline-block text-secondary">Page 1 out of 6</small>
            </div> -->
            <!-- End Pagination -->

          </div>
        </div>
      </div>
      




  </div>

  <div class="tab-pane fade pt-6" id="pills-two-example2" role="tabpanel" aria-labelledby="pills-two-example2-tab">
      <!-- Grid View -->
      <div class="row">
          <div class="col-md-3" v-for="car in UserCars" v-if="car.subscribe == false" >
              <div class="card mb-4 mb-md-0"  >
                  <img v-if="showPlaceHolder(car.image)" class="img-fluid" :src="'http://127.0.0.1:8000/storage/images/'+car.image" alt="" style="height: 180px;">
                  <img v-else class="img-fluid" src="http://127.0.0.1:8000/public/assets/placeholder/placeholder.jpg" alt="" style="height: 180px;">
                  <!-- Card -->
                  <div class="card-body p-3">
                    <h4 class="h6" >{{car.year}} {{car.make}} - <span class="btn btn-xs btn-soft-success">{{car.days}} days remain</span></h4>
                <!--     <p class="font-size-1 mb-0"><small>Plan Description: <span class="badge badge-primary"> {{car.subscription.plan.name}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Cost: <span class="badge badge-primary">{{car.subscription.plan.cost}}</span></small></p>
                    <p class="font-size-1 mb-0"><small>Placement: <span class="badge badge-primary">Premium</span></small></p>
                    <hr>
                    <small class="font-size-1"><i>number of views: <span class="badge badge-primary">100</span></i></small> -->
                    <!-- <a class="btn btn-xs btn-primary btn-block" href="#" @click="">Change plan</a> -->
                  </div>
                  <!-- End Card -->
                 </div>
            </div>
        </div>
        <!-- End Grid View -->
  </div>
</div>
<!-- End Tab Content -->
</div>
</template>
<script>

 import { mapGetters } from 'vuex';
 import ListView from './components/cars/list.vue';
 export default {
   components: {
      ListView
   },
 	 data() {
 	  	return {
 	 	  }
 	 },
 	 mounted() {
 		$.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    this.$store.dispatch('GET_USER_CARS')
 	 },
   computed: {
    ...mapGetters([
      'UserCars',
    ])
   },
   methods: {
    showPlaceHolder(image){
      if (image == false) {
        return false
      }
      return true;
    }
   }

 }
</script>