<template>
<div>

    <!-- Page Preloader -->
    <div id="jsPreloader" class="page-preloader" v-show="isLoading" style=" background: rgb(0, 0, 0, 0.4);">
      <div class="page-preloader-content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <!-- End Page Preloader -->


    <div class="container">
        <div class="row">
            <div class="col-md-12">
                 <!-- Title Section -->
                <div class="bg-light">
                    <div class="container py-5">
                        <div class="row align-items-sm-center">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <!-- Input Group -->
                            <div class="form-row input-group-borderless">
                                <div class="col-sm mb-2 mb-md-0">
                                <div class="input-group input-group-sm input-group-merge input-group-borderless">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-search"></i>
                                    </div>
                                    </div>

                                    <select class="form-control input-sm" v-model="filterMake" @change="onChangeMake($event)">
                                            <option  value="">Select make</option>
                                            <option  v-for="(make, key, index) in AllMakes" :value="make.id">{{make.name}}</option>
                                    </select>
                                </div>
                                </div>

                                <div class="col-sm d-sm-none">
                                <hr class="my-0">
                                </div>

                                <div class="col-sm column-divider-sm mb-2 mb-md-0">
                                <div class="input-group input-group-sm input-group-merge input-group-borderless">
                                    <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <i class="fas fa-car"></i>
                                    </div>
                                    </div>
                                    <select class="form-control input-sm" v-model="filterModel">
                                        <option value="">Select model</option>
                                        <option  v-for="(model, key, index) in AllModels" :value="model.id">{{model.name}}</option>

                                    </select>
                                </div>
                                </div>

                                <div class="col-md-auto">
                                <button @click="compare()" type="button" class="btn btn-block rounded btn-sm btn-primary px-5">Go</button>
                                </div>
                            </div>
                             <!-- End Input Group -->
                        </div>

        
                        </div>
                    </div>
                </div>
            <!-- End Title Section -->
            </div>
        </div>
<!--         <div class="row space-top-1 space-top-sm-2">
            <div class="col-md-12">
                  <h5>Overview</h5>
            </div>
        </div> -->

        

         <div class="row space-top-sm-2" v-if="ComparedCars.cars">

                <div class="col-md-3"></div>
               <div class="col-lg-3  space-top-1" v-for="cars in ComparedCars.cars">
                 <img src="@/assets/automarket.png" width="50" class="pb-2">
                 <div class="card card-frame">
                 <img class="card-img-top" :src="showCarThumbnail(cars.image)" alt="Card image cap">
                <div class="card-body">
                    {{cars.make}} {{cars.model}}
                    <hr>
                    <p class="card-text">Price: {{cars.price | currency}}</p>
                    <p class="card-text"><small class="text-muted">pageviews {{cars.pageviews}}</small></p>
                </div>
            </div>
            </div>
        </div>
        <div v-else class="row space-top-1">
             <div class="col-md-4"></div>
             <div class="col-md-4 text-center">
                 <h4>No Data</h4>
                 <div class=
             </div>
             <div class="col-md-4"></div>
          </div>


        <div class="row  space-top-2" >
            <div class="col-lg-3  space-top-1" v-for="ja in ComparedCars.jacars">
                 <img src="@/assets/jacars.png" width="50" class="pb-3">
                 <div class="card card-frame">
                 <img class="card-img-top" :src="ja.image" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">{{ja.title}}</h5>
                    <hr>
                    <p class="card-text">Price: {{ ja.price }}</p>
                    <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                </div>
            </div>
            </div>
        </div>
    </div>

</div>
</template>
<script>

import { mapGetters } from 'vuex';

export default {

    data() {
        return {
            isLoading: false,
            makesType: '',
            filterMake: '',
            filterModel: '',
            filterPrice: {}
        }
    },

    created() {
      
   
    },

    mounted() {

      // Pass make list tyoe popular or A-z
      this.makesType = 'all';

      this.getExternalCars();
      this.$store.dispatch('GET_VEHICLE_MAKE', this.makesType)
    },


    watch: {

        // FilterMake: function ( value ) {
        //     console.log( value );
        //     this.$store.dispatch('GET_VEHICLE_MODEL', value)
        // },

        // FilterModel: function ( value ) {

        // },

        // filterPrice: function ( value ) {

        // }
    },

    computed: {
        ...mapGetters([
            'ComparedCars',
            'AllModels',
            'AllMakes'
        ])
    },

    methods: {

        onChangeMake( event ) {
            this.$store.dispatch('GET_VEHICLE_MODEL', event.target.value)
        },

        compare() {
            
     
            this.isLoading = true;
            var params = { make: this.filterMake, model: this.filterModel }

            console.log(params);

            this.$store.dispatch('COMPARE_FETCH_CARS', params )
            .then( response => {

                console.log( response.data) 
                this.isLoading = false


            })
            .catch( error => {
                console.log( error.response ) 
                 this.isLoading = false
            })
        },

        getExternalCars() {
            
            var make = new URL(location.href).searchParams.get('make')
            var model = new URL(location.href).searchParams.get('model')

            const params = { make: make, model: model };
            this.$store.dispatch('COMPARE_FETCH_CARS', params )
              .then( response => {

                console.log( response.data) 
                this.loading = false

                this.filterMake = make
                this.filterModel = model
            })
            .catch( error => {
                console.log( error.response ) 
            })
        }
    }
}
</script>
