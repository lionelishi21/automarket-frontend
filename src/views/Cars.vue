<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Title Section -->
    <div class="bg-light">
      <div class="container py-5">
        <div class="row align-items-sm-center">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h1 class="h4 mb-0">Cars List</h1>
          </div>

          <div class="col-sm-6">
            <!-- Breadcrumb -->
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Cars</a></li>
                <li class="breadcrumb-item active" aria-current="page">List</li>
              </ol>
            </nav>
            <!-- End Breadcrumb -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Title Section -->
    
    <div class="container space-1">
        
        <!-- Top Filters -->
        <div class="row align-items-center">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <div class="d-flex align-items-center">
              
              <!-- Select -->
                <select class="js-select selectpicker dropdown-select mr-2" data-size="10" data-width="fit" 
                     data-style="btn-soft-secondary btn-xs">
                    <option value="showing25" selected>25</option>
                    <option value="showing10">10</option>
                    <option value="showing20">50</option>
                    <option value="showing30">100</option>
               </select>
              <!-- End Select -->
      
              <span class="text-secondary font-size-1">Showing 1-6 of 27</span>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="d-flex justify-content-sm-end align-items-center">
             
              <!-- Select -->
              <select class="js-select selectpicker dropdown-select mr-2" data-size="10" data-width="fit"
                  data-style="btn-soft-secondary btn-xs">
                  <option value="mostRecent" selected>Most recent</option>
                  <option value="HighestPrice">Highest price</option>
                  <option value="LowestPrice">Lowest price</option>
                  <option value="mostReduced">Most reduced</option>
                  <option value="mostPopular">Most popular</option>
              </select>
              <!-- End Select -->
            
              <!-- View Map -->
              <a class="btn btn-xs btn-soft-secondary mr-2" href="javascript:;">
                <span class="fa fa-map-marked-alt mr-1"></span>
                View Map
              </a>
              <!--End Map View  -->

              <!-- Button Group -->
              <div class="btn-group btn-group-toggle d-flex">
                <a class="btn btn-xs btn-outline-secondary btn-custom-toggle-primary flex-fill" href="#" @click="change_view_type()" :class="{'active': grid }">
                  <span class="fas fa-th-large"></span>
                </a>

                <a class="btn btn-xs btn-outline-secondary btn-custom-toggle-primary flex-fill" href="#" @click="change_view_type()" :class="{ 'active' : list }">
                  <span class="fas fa-list"></span>
                </a>
              </div>
              <!-- End Button Group -->
            </div>
          </div>
        </div>
        <!-- End Top Filters -->
   </div>

    <div class="container space-top-1 space-bottom-2">
        
        <div class="row">
            <div class="col-lg-4">
              <div class="pl-lg-4">
                  <!-- Sidebar Filter -->
                  <div class="card p-4">
               
                    <!-- Location Type -->
                    <div class="border-bottom">
                      <label class="form-label mb-2"><b>Location</b></label>
                           <div class="row">
                              <div class="col-sm-6">
                                <div class="border-bottom mb-4 ">

                                      <!-- Select -->
                                      <select class="form-control form-control-sm">
                                        <option value="10" selected>10 miles</option>
                                        <option value="20">20 miles</option>
                                        <option value="30">30 miles</option>
                                        <option value="40">40 miles</option>
                                        <option value="50">50 miles</option>
                                        <option value="70">70 miles</option>
                                        <option value="100">100 miles</option>
                                        <option value="150">150 miles</option>
                                        <option value="200">200 miles</option>
                                        <option value="250">250 miles</option>
                                        <option value="300">300 miles</option>
                                      </select>
                                      <!-- End Select -->

                                 </div>
                              </div>
                               <div class="col-sm-6">
                                <div class="border-bottom">
                                      <input type="number" class="form-control  form-control-sm" placeholder="60606" >
                                 </div>
                              </div>
                          </div>
                        
                    </div>
                    <!-- End LocationType -->

                    <!-- Year -->
                    <div class="border-bottom">
                      <label class="form-label mb-2"><b>Year</b></label>
                           <div class="row">
                              <div class="col-sm-5">
                                <div class="border-bottom ">
                                      
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control-sm">
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
                              <div class="col-sm-2">
                                <p class="mx-auto mt-6">to</p>
                              </div>
                               <div class="col-sm-5">
                                <div class="border-bottom">
                                         <!-- Select -->
                                      <label for=""><small>Max</small></label>
                                     <select class="form-control form-control-sm">
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
                    <!-- End Year -->

                   <div class="text-center">
                      <span class="u-divider u-divider--text"></span>
                    </div>

                    <!-- Car Make -->
                    <div class="border-bottom">
                      <label class="form-label mb-2"> <b>Make</b></label>

                      <div class="row" style="overflow-y: scroll;  height:250px;">
                        <div class="col-12">
                         
                          <!-- Radio Checkbox -->
                          <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2" v-for="make in makes">
                            <input type="checkbox" class="custom-control-input" :id="'makeRadioChechbox'+make.id" name="makeRadioChechbox">
                            <label class="custom-control-label" :for="'makeRadioChechbox'+make.id">
                              {{make.make}}
                            </label>
                          </div>
                          <!-- End Radio Checkbox -->
                        
                        </div>
                      </div>
                    </div>
                    <!-- End Car Make -->
                    
                    <hr>  
                      <!-- Trim -->
                     <div class="border-bottom">
                      <label class="form-label mb-2"><b>Trim</b></label>

                      <div class="row" style="overflow-y: scroll;  height:250px;">
                        <div class="col-12">
                         
                          <!-- Radio Checkbox -->
                          <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2" v-for="trim in trims">
                            <input type="checkbox" class="custom-control-input" :id="'trimRadioChechbox'+trim.id" name="trimRadioChechbox">
                            <label class="custom-control-label" :for="'trimRadioChechbox'+trim.id">
                              {{trim.trim}}
                            </label>
                          </div>
                          <!-- End Radio Checkbox -->
                        
                        </div>
                      </div>
                    </div>
                    <!-- End Trim -->
                    

                    <!-- Year -->
                    <div class="border-bottom mb-2 pb-2">
                      <label class="form-label mb-2"><b>Price</b></label>
                           <div class="row">
                              <div class="col-sm-6">
                                <div class="border-bottom ">
                                      
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control-sm">
                                        <option value="2000" selected>100,000 JA$</option>
                                        <option value="2000">150,000 JA$</option>
                                        <option value="2000">250,000 JA$</option>
                                        <option value="2000">300,000 JA$</option>
                                        <option value="2000">400,000 JA$</option>
                                        <option value="2000">500,000 JA$</option>
                                        <option value="2000">600,000 JA$</option>
                                        <option value="2000">700,000 JA$</option>
                                        <option value="2000">800,000 JA$</option>
                                        <option value="2000">900,000 JA$</option>
                                        <option value="2000">1,000,000 JA$</option>
                                        <option value="2000">1,250,000 JA$</option>
                                        <option value="2000">1,500,000 JA$</option>
                                        <option value="2000">1,700,000 JA$</option>
                                        <option value="2000">2,000,000 JA$</option>
                                        <option value="2000">2,250,000 JA$</option>
                                        <option value="2000">2,500,000 JA$</option>
                                        <option value="2000">3,500,000 JA$</option>
                                        <option value="2000">4,000,000 JA$</option>
                                        <option value="2000">4,500,000 JA$</option>
                                        <option value="2000">5,000,000 JA$</option>
                                        <option value="2000">6,000,000 JA$</option>
                                        <option value="2000">7,000,000 JA$</option>
                                        <option value="2000">8,000,000 JA$</option>
                                        <option value="2000">9,000,000 JA$</option>
                                        <option value="2000">10,000,000 JA$</option>
                                      </select>
                                      <!-- End Select -->

                                 </div>
                              </div>
                      
                               <div class="col-sm-6">
                                <div class="border-bottom">
                                         <!-- Select -->
                                      <label for=""><small>Max</small></label>
                                     <select class="form-control form-control-sm">
                                         <option value="2000" selected>100,000 JA$</option>
                                        <option value="2000">150,000 JA$</option>
                                        <option value="2000">250,000 JA$</option>
                                        <option value="2000">300,000 JA$</option>
                                        <option value="2000">400,000 JA$</option>
                                        <option value="2000">500,000 JA$</option>
                                        <option value="2000">600,000 JA$</option>
                                        <option value="2000">700,000 JA$</option>
                                        <option value="2000">800,000 JA$</option>
                                        <option value="2000">900,000 JA$</option>
                                        <option value="2000">1,000,000 JA$</option>
                                        <option value="2000">1,250,000 JA$</option>
                                        <option value="2000">1,500,000 JA$</option>
                                        <option value="2000">1,700,000 JA$</option>
                                        <option value="2000">2,000,000 JA$</option>
                                        <option value="2000">2,250,000 JA$</option>
                                        <option value="2000">2,500,000 JA$</option>
                                        <option value="2000">3,500,000 JA$</option>
                                        <option value="2000">4,000,000 JA$</option>
                                        <option value="2000">4,500,000 JA$</option>
                                        <option value="2000">5,000,000 JA$</option>
                                        <option value="2000">6,000,000 JA$</option>
                                        <option value="2000">7,000,000 JA$</option>
                                        <option value="2000">8,000,000 JA$</option>
                                        <option value="2000">9,000,000 JA$</option>
                                        <option value="2000" selected>10,000,000 JA$</option>
                                      </select>
                                      <!-- End Select -->
                                      <!-- End Select -->
                                 </div>
                              </div>
                          </div>
                    </div>
                    <!-- End Year -->

                    <!-- Buttons -->
                    <div class="row mx-gutters-2">
                      <div class="col-6">
                        <button type="submit" class="btn btn-block btn-sm btn-soft-secondary">Clear</button>
                      </div>
                      <div class="col-6">
                        <button type="submit" class="btn btn-block btn-sm btn-primary">Save</button>
                      </div>
                    </div>
                    <!-- End Buttons -->
                  </div>
                  <!-- End Sidebar Filter -->
              </div>
            </div>
            <div class="col-lg-8">
                <!-- List and Grid view -->
                <car-list  v-show="list" :cars="cars" ></car-list>
                <car-grid  v-show="grid" :cars="cars" ></car-grid>
                <!-- End List Grid View -->
            </div>

        </div>
       <!-- End Filter -->
	  
       <!-- End Jobs Section -->
    </div>
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>
<script>
import CarList from '../components/cars/CarList.vue';
import CarGrid from '../components/cars/CarGrid.vue';

import axios from 'axios';

export default {
	components: {
		CarList,
		CarGrid
	},
	data() {
		return {
      makes: [
        {id: 1, make: 'Acura'},
        {id: 2, make: 'Audi'},
        {id: 3, make: 'Bently'},
        {id: 4, make: 'BMW'},
        {id: 5, make: 'Bugatti'},
        {id: 6, make: 'Cadillac'},
        {id: 7, make: 'Caravan'},
        {id: 8, make: 'Changan'},
        {id: 9, make: 'Chery'},
        {id: 10, make: 'Chevrolet'},
        {id: 11, make: 'Chrysler'},
        {id: 12, make: 'Daihatus'},
        {id: 13, make: 'Dodge'},
        {id: 14, make: 'Fiat'},
        {id: 15, make: 'Ford'},
        {id: 16, make: 'GMC'},
        {id: 17, make: 'Honda'},
        {id: 18, make: 'Hyundai'}
      ],
      trims: [
        {id: 1, trim: 'Base or Unknown'},
        {id: 2, trim: 'GT'},
        {id: 3, trim: 'R/T'},
        {id: 4, trim: 'R/T 392'},
        {id: 5, trim: 'R/T Plus'},
        {id: 6, trim: 'R/T Scat Pack'}
      ],
      cars: [
       {
          id: 1,
          milage: 'N/A',
          make: 'Subaru',
          model: 'G4',
          year: '2015',
          location: 'Half Way Tree, Kingston, Jamaica',
          extcolor: 'Black',
          intcolor: 'Black',
          desc: 'THis is a description for buyers',
          name: 'Subaru',
          transmission: 'Automatic',
          price: '1,000,000.00', 
          img: '../../assets/img/480x320/car1.jpg',
          lrgimg: '../../assets/img/1920x1080/car1.jpg'
        },{
          id: 1,
          milage: '10,123 mi',
          make: 'Mitsubishi',
          model: 'G4',
          year: '2015',
          location: 'Half Way Tree, Kingston, Jamaica',
          extcolor: 'Blue',
          intcolor: 'Black',
          desc: 'THis is a description for buyers',
          name: 'Mitsubishi',
          transmission: 'Tiptronic',
          price: '1,000,000.00', 
          img: '../../assets/img/480x320/car1.jpg',
          lrgimg: '../../assets/img/1920x1080/car1.jpg'
        },{
          id: 2,
          name: 'Honda Fit',
          milage: '20,123 mi',
          make: 'Honda',
          model: 'Fit',
          year: '2017',
          location: 'Half Way Tree, Kingston, Jamaica',
          extcolor: 'Black',
          intcolor: 'Black',
          desc: 'THis is a description for buyers',
          transmission: 'Automatic',
          price: '2,000,000.00', 
          img: '../../assets/img/480x320/car2.jpg',
          lrgimg: '../../assets/img/1920x1080/car2.jpg'
        },{
          id: 3,
          milage: '$13,123 mi',
          make: 'Hyundai',
          model: 'Accent',
          year: '2000',
          location: 'Madeville, Manchester, Jamaica',
          extcolor: 'white',
          intcolor: 'Black',
          desc: 'THis is a description for buyers',
          transmission: 'Automatic',
          name: 'Hyundai Accent',
          price: '1,800,000.00', 
          img: '../../assets/img/480x320/car3.jpg',
          lrgimg: '../../assets/img/1920x1080/car3.jpg'
        },{
          id: 4,
          milage: '$23,123 mi',
          make: 'Honda',
          model: 'Civic',
          year: '2014',
          location: 'Half Way Tree, Kingston, Jamaica',
          extcolor: 'Black',
          intcolor: 'Black',
          desc: 'THis is a description for buyers',
          transmission: 'Manual',
          name: 'Honda Civic',
          price: '1,200,000.00', 
          img: '../../assets/img/480x320/car4.jpg',
          lrgimg: '../../assets/img/1920x1080/car4.jpg'
        }
      ],
			preloader: false,
			layouts: 'list',
			list: true,
			grid: false,
			filter: {
				type: '',
				location: '',
				company: '',
				cateoger: '',
			}
		}
	},
	created() {
		this.preloader = true
		setTimeout(() => {
	    this.preloader = false
		}, 2000)
	},
	methods: {
		change_view_type() {
			this.list = !this.list
			this.grid = !this.grid
		}
	}
}
</script>