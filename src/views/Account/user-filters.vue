<template>
  <main id="content" role="main">
	   <div class="bg-light">
	      <div class="container py-5">
	        <div class="row align-items-sm-center">
	          <div class="col-sm-6 mb-3 mb-sm-0">
	            <h1 class="h4 mb-0">User Filter</h1>
	          </div>

	          <div class="col-sm-6">
	            <!-- Breadcrumb -->
	            <nav aria-label="breadcrumb">
	              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
	                <li class="breadcrumb-item"><a href="#">Home</a></li>
	                <li class="breadcrumb-item active" aria-current="page">Filter</li>
	              </ol>
	            </nav>
	            <!-- End Breadcrumb -->
	          </div>
	        </div>
	      </div>
	    </div>

	   <div class="container space-1">
		     <div class="row">
                <div class="col-md-12">
                <div class="form-group">
                    <h4>Car Makes:</h4>
                    <span v-for="make in AllMakes">
                         <button v-if="make.filter" @click="saveFilters(make.id)" type="button" class="btn    btn-soft-success btn-sm mr-1 mb-1">{{make.name}}</button>

                         <button v-else @click="saveFilters(make.id)" type="button" class="btn btn-soft-success btn-sm mr-1 mb-1">{{make.name}}</button>
                    </span>
                </div>
                <div class="form-group">
                   <h4>Location</h4>
                    <div v-for="parish in parishes" class="custom-control custom-radio custom-control-inline checkbox-outline bg-grey">
                          <input type="radio" :id="'parish1'+parish.name" :name="'parish1'+parish.name" class="custom-control-input checkbox-outline__input" v-model="filters.parishes" :value="parish.name">
                          <label class="checkbox-outline__label rounded p-1 mb-0" :for="'parish1'+parish.name">
                          {{parish.name}}
                          </label>
                        </div>
                </div>
                <div class="form-group">
                    <h4>Year: </h4>
                     <div class="row">
                              <div class="col-sm-5">
                                <div class="border-bottom ">
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control" v-model="filters.min_year">
                                        <option value="2000" selected>2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019">2019</option>
                                      </select>
                                      <!-- End Select -->

                                 </div>
                              </div>
                              <div class="col-sm-2 text-center">
                                <p class="mx-auto center-block mt-6">To</p>
                              </div>
                               <div class="col-sm-5">
                                <div class="border-bottom">
                                         <!-- Select -->
                                      <label for=""><small>Max</small></label>
                                     <select class="form-control form-control" v-model="filters.max_year">
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                        <option value="2016">2016</option>
                                        <option value="2017">2017</option>
                                        <option value="2018">2018</option>
                                        <option value="2019" selected>2019</option>
                                      </select>
                                      <!-- End Select -->
                                      <!-- End Select -->
                                 </div>
                              </div>
                        </div>
                </div>
                <div class="form-group">
                    <h4>Price:</h4>
                      <div class="row"> 
                              <div class="col-sm-5">
                                <div class="border-bottom ">
                                      
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control" v-model="filtersMin_price">
                                        <option value="100000" selected>100,000 JA$</option>
                                        <option value="150000">150,000 JA$</option>
                                        <option value="250000">250,000 JA$</option>
                                        <option value="300000">300,000 JA$</option>
                                        <option value="400000">400,000 JA$</option>
                                        <option value="500000">500,000 JA$</option>
                                        <option value="600000">600,000 JA$</option>
                                        <option value="700000">700,000 JA$</option>
                                        <option value="800000">800,000 JA$</option>
                                        <option value="900000">900,000 JA$</option>
                                        <option value="1000000">1,000,000 JA$</option>
                                        <option value="1250000">1,250,000 JA$</option>
                                        <option value="1500000">1,500,000 JA$</option>
                                        <option value="1700000">1,700,000 JA$</option>
                                        <option value="2000000">2,000,000 JA$</option>
                                        <option value="2250000">2,250,000 JA$</option>
                                        <option value="2500000">2,500,000 JA$</option>
                                        <option value="3500000">3,500,000 JA$</option>
                                        <option value="4000000">4,000,000 JA$</option>
                                        <option value="4500000">4,500,000 JA$</option>
                                        <option value="5000000">5,000,000 JA$</option>
                                        <option value="6000000">6,000,000 JA$</option>
                                        <option value="7000000">7,000,000 JA$</option>
                                        <option value="8000000">8,000,000 JA$</option>
                                        <option value="9000000">9,000,000 JA$</option>
                                       <option value="10000000">10,000,000 JA$</option>
                                      </select>
                                      <!-- End Select -->

                                 </div>
                              </div>
                              <div class="col-sm-2 text-center">
                                <p class="mx-auto center-block mt-6">To</p>
                              </div>
                              <div class="col-sm-5">
                                <div class="border-bottom">
                                         <!-- Select -->
                                     <label for=""><small>Max</small></label>
                                     <select class="form-control form-control" v-model="filtersMax_price">
                                        <option value="100000" selected>100,000 JA$</option>
                                        <option value="150000">150,000 JA$</option>
                                        <option value="250000">250,000 JA$</option>
                                        <option value="300000">300,000 JA$</option>
                                        <option value="400000">400,000 JA$</option>
                                        <option value="500000">500,000 JA$</option>
                                        <option value="600000">600,000 JA$</option>
                                        <option value="700000">700,000 JA$</option>
                                        <option value="800000">800,000 JA$</option>
                                        <option value="900000">900,000 JA$</option>
                                        <option value="1000000">1,000,000 JA$</option>
                                        <option value="1250000">1,250,000 JA$</option>
                                        <option value="1500000">1,500,000 JA$</option>
                                        <option value="1700000">1,700,000 JA$</option>
                                        <option value="2000000">2,000,000 JA$</option>
                                        <option value="2250000">2,250,000 JA$</option>
                                        <option value="2500000">2,500,000 JA$</option>
                                        <option value="3500000">3,500,000 JA$</option>
                                        <option value="4000000">4,000,000 JA$</option>
                                        <option value="4500000">4,500,000 JA$</option>
                                        <option value="5000000">5,000,000 JA$</option>
                                        <option value="6000000">6,000,000 JA$</option>
                                        <option value="7000000">7,000,000 JA$</option>
                                        <option value="8000000">8,000,000 JA$</option>
                                        <option value="9000000">9,000,000 JA$</option>
                                       <option value="10000000">10,000,000 JA$</option>
                                      </select>
                                      <!-- End Select -->
                                 </div>
                              </div>
                          </div>
                </div>
                <div class="form-group">
                        <h4>Body Style: </h4>
                           <div v-for="body in bodystyles" class="custom-control custom-radio custom-control-inline checkbox-outline bg-grey">
                          <input type="radio" :id="'parish1'+body.name" :name="'parish1'+body.name" class="custom-control-input checkbox-outline__input">
                          <label class="checkbox-outline__label rounded p-1 mb-0" :for="'parish1'+body.name">
                          {{body.name}}
                          </label>
                        </div>
                </div>
                <div class="form-group">
                    <div class="row">
                        <button class="btn btn-primary pull-right btn-sm">Save</button>
                    </div>
                </div>
		     </div>
         </div>
	   </div>
  </main>
</template>
<script>

import axios from 'axios';
import { mapGetters } from 'vuex';
 import PrettyCheck from 'pretty-checkbox-vue/check';
export default {
    components: {
        PrettyCheck
    },
	data() {
		return {
			title: 'User filer',
			makesType: '',
            filters: {},
            parishes: [
                { name: 'Kingston' },
                { name: 'St. Andrew' },
                { name: 'Portland' },
                { name: 'St.Thomas' },
                { name: 'St. Catherine' },
                { name: 'St. Mary'},
                { name: 'St. Mary'},
                { name: 'St. Ann'},
                { name: 'Manchester'},
                { name: 'Clarendon'},
                { name: 'Hanover'},
                { name: 'Westmoreland'},
                { name: 'St. James'},
                { name: 'Trelawny'},
                { name: 'St. Elizabeth'},
           ],
           bodystyles: [
            { name: 'Sedan'},
            { name: 'Hatchback'},
            { name: 'SUV'},
            { name: 'Mini Van'},
            { name: 'Van'},
            { name: 'Truck'},
            { name: 'Wagon'},
            { name: 'Coupe'},
            { name:  'Bus'},
            { name: 'Mini Bus'},
            { name: 'Pickup'},
            { name: 'Convertible'},
            { name: 'Motorcycle'},
            { name: 'Commercial'}
           ]
		}
	},
	computed: {
		...mapGetters([
			'AllMakes'
		])
	},
	created() {
		this.makesType = 'custom'
		this.$store.dispatch('GET_VEHICLE_MAKE', this.makesType)
	},
	methods: {
		saveFilters(make_id) {

            var params = {
                id: make_id
            }
            let formData = new FormData()
            formData.append('makes', JSON.stringify(params) )
            this.$store.dispatch('SAVE_USER_FILTER', formData);
        }
	}
}
</script>
