<template>
<!-- Features Section -->
<div class="container min-height-100vh">
  <!-- Title -->
  <div class="w-md-80 w-lg-50 text-center mx-md-auto">
    <h2>Your Ads</h2>
  </div>
  <!-- End Title -->

<modal
       name="plans"
       height="auto"  
    >
      <div class="card-body text-center">
        <div class="container">
             <p>Use Credit</p>

              <!-- Subscription -->
              <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                     <div class="custom-control custom-radio custom-control-inline checkbox-outline checkbox-icon">
                          <input type="radio" value="dealer-plan" v-model="plans" id="pricingRadio2" name="pricingRadio1" class="custom-control-input checkbox-outline__input checkbox-icon__input">
                          <label class="checkbox-outline__label checkbox-icon__label card  p-6 mb-0" for="pricingRadio2">
                            <h4 class="h6 text-primary mb-3">1 Credit</h4>
                            <span class="d-block mb-2">
                            </span>
                            <p class="font-size-1 mb-0">Use 1 Credit to Activate for 15 days</p>
                          </label>
                        </div>
                     </div>
              </div>
              <!-- End Subscription -->
              <div class="row text-center">
                    <div class="col-md-1"></div>
                    <div class="col-md-10 mt-5">
                          <button v-if="btn_plan" @click="activateCredit()" class="btn btn-primary "> Submit</button>
                          <button v-else disabled="disabled" class="btn btn-primary"> Select Plan</button>
                          <button @click="hideModal()" class="btn ml-2 btn-soft-success "> Cancel</button>
                    </div>
                    <div class="col-md-1"></div>
              </div>
            </div>
      </div>
    </modal>




  <!-- Nav -->
  <div class="text-center">
    <ul class="nav nav-segment nav-pills scrollbar-horizontal mb-7" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-one-code-features-example1-tab" data-toggle="pill" href="#pills-one-code-features-example1" role="tab" aria-controls="pills-one-code-features-example1" aria-selected="true">Active</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-two-code-features-example1-tab" data-toggle="pill" href="#pills-two-code-features-example1" role="tab" aria-controls="pills-two-code-features-example1" aria-selected="false">Inactive</a>
      </li>
    </ul>
  </div>
  <!-- End Nav -->

  <!-- Tab Content -->
  <div class="tab-content pr-lg-4">
    <div class="tab-pane fade show active" id="pills-one-code-features-example1" role="tabpanel" aria-labelledby="pills-one-code-features-example1-tab">
     
      <!-- List of Cars Section -->
      <div class="container space-top-1 space-bottom-2">
        <div class="row">
          <div class="col-lg-12">
          
            <!-- List View -->
            <div class="row">
               <div class="col-md-4 col-sm-6 col-xs-6" v-for="(car, index) in ActiveCars"  :key="index">
                  <div class="card mb-4 mb-md-0">
                      <img v-if="showPlaceHolder(car.image)" class="img-fluid" :src="showCarImage(car.image)">
                      <img v-else class="img-fluid" src="http://18.206.230.202/public/assets/placeholder/placeholder.jpg" alt="" style="height: 180px;">
                      <!-- Card -->

                      <div class="card-body">

                            <h4 class="h6" >{{car.year}} {{car.make}}  
                              <span class="btn btn-xs btn-soft-success" v-if="car.sold !== 1">Active</span>
                               <span class="btn btn-xs btn-soft-danger" v-else>Sold</span>
                            </h4>
                            <p>Price: <strong>{{car.price | currency}}</strong></p>
                            <div class="btn-group">
                              <a href="#"
                                 class="btn btn-soft-success btn-xs" 
                                 @click.prevent="edit(car.batch_id)">
                                 Edit vehicle
                             </a>
                            </div>
                             <div class="btn-group">
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
            <!--<div class="d-flex justify-content-between align-items-center">
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

    <div class="tab-pane fade" id="pills-two-code-features-example1" role="tabpanel" aria-labelledby="pills-two-code-features-example1-tab">
         <div class="row mb-3">
             <div class="col-md-3 col-sm-6 col-sx-6" v-for="(car, index) in InactiveCars" :key="index">
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
                      <a href="#" class="btn btn-primary btn-xs" @click.prevent="showPlans(car.id)">Use Credit</a>
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
    </div>

  </div>
  <!-- End Tab Content -->
</div>
<!-- End Features Section -->
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
        car_selected: 1
 	 	  }
 	 },
   watch:{
      plans: function(value) {
        if (value == '') {
          this.btn_plan = false
        } else {
          this.btn_plan = true
        }
      },
      
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
    renewPlan() {

    },
    
    activateCredit(value) {

      this.isLoading = true 
      var plan_slug = this.plans
      var car_id = this.car_selected

      var self = this
      setTimeout(function() {
        self.isLoading = false
        self.$store.dispatch('USE_ACTIVE_CREDIT', car_id)

      }, 1000)

       this.$modal.hide('plans')
       //TODO:
       //Add notification message saying that plans has been activated
    }
   }

 }
</script>
