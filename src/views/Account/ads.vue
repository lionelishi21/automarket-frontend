<template>
<div class="container min-height-100vh">


<!-- Page Preloader -->
<div id="jsPreloader" class="page-preloader" v-show="isLoading">
  <div class="page-preloader__content-centered">
    <div class="spinner-grow text-primary" role="status">
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</div>
<!-- End Page Preloader -->

<!-- Nav Classic -->
<ul id="SVGnavIcons" class="svg-preloader nav nav-classic nav-rounded nav-shadow nav-justified border" role="tablist">
  <li class="nav-item">
    <a class="nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-13.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
       Active<span class="badge badge-danger">{{ActiveCars.length}}</span>
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
        Inactive <span class="badge badge-danger">{{ InactiveCars.length }}</span>
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
        Sold <span class="badge badge-danger">0</span>
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
              <div class="col-md-4 col-sm-6 col-xs-6" v-for="car in ActiveCars" >
                  <div class="card mb-4 mb-md-0">

                      <img v-if="showPlaceHolder(car.image)" class="img-fluid" :src="showCarImage(car.image)">
                      <img v-else class="img-fluid" src="http://18.206.230.202/public/assets/placeholder/placeholder.jpg" alt="" style="height: 180px;">
                      <!-- Card -->

                      <div class="card-body">

                            <h4 class="h6" >{{car.year}} {{car.make}}  <span class="btn btn-xs btn-soft-success">Active</span></h4>
                            <p>Price: <strong>{{car.price | currency}}</strong></p>
                            <div class="btn-group">
                              <a href="#"
                                 class="btn btn-soft-success btn-xs" 
                                 @click.prevent="edit(car.batch_id)">
                                 Edit vehicle
                             </a>
                            </div>
                             <div class="btn-group">
                              {{car.sold}}
                              <a href="#"
                                 class="btn btn-soft-primary btn-xs" 
                                 @click.prevent="sold(car.batch_id)">
                                 Set as Sold
                             </a>
                            </div>
                            <br>
                            <small>Share:</small>
                            <br>
                            <ShareNetwork
                                class="btn btn-sm text-white btn-icon btn-primary transition-3d-hover"
                                network="facebook"
                                :url="'http://automarketjm.com'"
                                :title="car.year+' '+car.make"
                                :description="car.price"
                                quote="Sell it a Sell"
                                hashtags="automarketjm, automarket"
                              >
                              <span class="fab fa-facebook-f btn-icon__inner"></span>
                            </ShareNetwork>
                            
                             <ShareNetwork
                                class="btn btn-xs btn-soft-success"
                                network="whatsapp"
                                :url="'http://automarketjm.com'"
                                :title="car.year+' '+car.make"
                                :description="'Price: '+car.price | currency"
                                quote="Sell it a Sell"
                                hashtags="automarketjm, automarket"
                              >
                                Whatsapp
                            </ShareNetwork>
                            <hr>
                        <small style="style:color: red;">Expire in <span class="badge badge-danger">{{car.days}} days</span></small>
                        <br>
                        <small class="font-size-1"><i>number of views: <span class="badge badge-primary">{{car.pageviews}}</span></i></small>
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
        <!-- Alert Dialog -->
    <modal
       name="plans"
       width="60%"
       min-width="1000"
         height="auto"  
    >
      <div class="card-body p-5 text-center">
          <p>Subscriptions</p>
              <!-- Subscription -->
              <div class="row">
                <div class="col-md-4">
                 <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                      <input type="radio" id="pricingRadio4" value="basic-plan" v-model="plans" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                      <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio4">
                        <h4 class="h6 text-primary mb-3">Basic</h4>
                        <span class="d-block mb-2">
                          <span class="h4 font-weight-normal">$1000 JMD</span>
                          <span class="font-size-1">/ mon</span>
                        </span>
                        <p class="font-size-1 mb-0">For a single car to get started</p>
                      </label>
                    </div>
                  </div>
                    <div class="col-md-4">
                     <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                          <input type="radio" value="dealer-plan" v-model="plans" id="pricingRadio2" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                          <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio2">
                            <h4 class="h6 text-primary mb-3">Dealer</h4>
                            <span class="d-block mb-2">
                              <span class="h4 font-weight-normal">$5000 JMD</span>
                              <span class="font-size-1">/ mon</span>
                            </span>
                            <p class="font-size-1 mb-0">For Dealer, a limit amount a cars</p>
                          </label>
                        </div>
                     </div>
                   <div class="col-md-4">
                     <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon w-100">
                          <input type="radio" id="pricingRadio3" value="premium-plan" v-model="plans" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                          <label class="checkbox-outline__label checkbox-icon__label card w-100 p-6 mb-0" for="pricingRadio3">
                            <h4 class="h6 text-primary mb-3">Premium</h4>
                            <span class="d-block mb-2">
                              <span class="h4 font-weight-normal">Contact Us</span>
                            </span>
                            <p class="font-size-1 mb-0">Post up 20 or more cars</p>
                          </label>
                        </div>
                     </div>
              </div>
              <!-- End Subscription -->
              <div class="row text-center">
                    <div class="col-md-4"></div>
                    <div class="col-md-4 center-block">
                       <div class="position-relative" style="height: 100%;">
                          <button v-if="btn_plan" @click="selectPlans()" class="btn btn-primary center-block mt-10 content-centered-y-md"> Select Plan</button>
                          <button v-else disabled="disabled" class="btn btn-primary center-block mt-10 content-centered-y-md"> Select Plan</button>


                          <button @click="hideModal()" class="btn ml-1 btn-soft-success center-block mt-10 content-centered-y-md"> Cancel</button>
                      </div>
                          
                    </div>
                    <div class="col-md-4"></div>
              </div>
      </div>
    </modal>
    <!-- End Alert Dialog -->
      <!-- Grid View -->
      <div class="row">
          <div class="col-md-3 col-sm-6 col-sx-6" v-for="car in InactiveCars">
              <div class="card" >
                  <img v-if="showPlaceHolder(car.image)" 
                       class="img-fluid" 
                       :src="showCarThumbnail(car.image)">

                   <img v-else 
                        class="img-fluid" 
                        src="http://18.206.230.202/assets/placeholder/placeholder.jpg">

                  <!-- Card -->
                  <div class="card-body p-3">

                    <h4 class="h6" >{{car.year}} {{car.make}} - <span class="btn btn-xs btn-soft-danger">Inactive</span></h4>
                    <p>Price: <strong>{{car.price | currency}}</strong></p>
                    <div class="btn-group">
                      <a href="#" class="btn btn-primary btn-xs" @click.prevent="showPlans(car.batch_id)">Upgrade Plan</a>
                      <a class="btn btn-soft-success btn-xs" href="#" @click.prevent="edit(car.batch_id)"> Edit vehicle</a>
                    </div>
                    <hr>
                    <small class="font-size-1"><i>number of views: <span class="badge badge-primary">{{car.pageviews}}</span></i></small>

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
        isLoading: false,
        inactive_car_count: 0,
        active_car_count: 0,
        plans: '',
        btn_plan: false,
        car_selected: ''
 	 	  }
 	 },
   watch:{
      plans: function(value) {

        if (value == '') {
          this.btn_plan = false
        } else {
          this.btn_plan = true
        }


      }
   },
   created() {
      this.$store.dispatch('GET_INACTIVE_CARS')
      this.$store.dispatch('GET_ACTIVE_CARS')
   },
 	 mounted() {
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
    // this.$store.dispatch('GET_USER_CARS')
 	 },
   computed: {
    ...mapGetters([
      'UserCars',
      'InactiveCars',
      'ActiveCars'
    ])
   },
   methods: {
    showPlaceHolder(image){
      if (image == false) {
        return false
      }
      return true;
    },
    sold(id){

      this.$store.dispatch('SET_SOLD', id)
        .then( response => {
              console.log(response)
             this.$store.dispatch('GET_INACTIVE_CARS')
             this.$store.dispatch('GET_ACTIVE_CARS')
             this.success('Vehicle status has updated to sold')
        })
    },
    showPlans(id) {
      this.car_selected = id
      this.plans = ''
      this.$modal.show('plans')
    },
    edit( batch_id) {

        var url = 'edit/vehicle/'+batch_id+'/car'

        this.isLoading = true
        var self = this
        setTimeout( function() {
            self.isLoading = false
            self.$router.push(url)
        }, 1000)

    },
    hideModal() {
      this.$modal.hide('plans')
    },
    selectPlans() {

      this.isLoading = true 
      var plan_slug = this.plans
      var car_id = this.car_selected
      var url =  '/checkout/'+car_id+'/'+plan_slug+'/car'

      var self = this
      setTimeout(function() {
        self.isLoading = false
        self.$router.push(url)
      }, 1000)

      
    }
   }

 }
</script>