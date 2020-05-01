<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">

    <!-- Filter Dialog -->
    <modal  name="filter" width="100%" height="auto" class="js-modal-window u-modal-window">
      <div class="card-body">

          <h3>
            Car Filter
           <span class="text-secondary font-size-1">Showing {{FilteredCars.length}} vehicles</span>
          </h3>
          <div class="form-group">
                <!-- Select -->
              <select class="form-control form-control-sm" v-model="filterParish">
                 <option value="null">Select Parish</option>
                 <option v-for="parish in parishes" :value="parish.name" >{{ parish.name}}</option>
              </select>
              <!-- End Select -->
          </div>
          <div class="form-group bg-soft-dark p-2">
              <select class="form-control form-control-sm" v-model="filterMin_year">
                  <option value="null">Select min year</option>
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
                 <select class="form-control form-control-sm" v-model="filterMax_year">
                  <option value="null">Select max year</option>
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
          </div>
          
          <div class="form-group bg-soft-dark p-2">
                <div class="">
                     <label>Car makes</label>
                </div>
                 <div class="custom-control custom-control-inline custom-checkbox font-size-1 text-lh-md mb-2" v-for="(make, key, index) in AllMakes">
                      <input class="custom-control-input col-sm-2"
                         type="checkbox"
                         :value="make.id"
                         :id="'makeRadio_'+make.id"
                         @click="check($event)"
                         v-model="filterMake">
                      <label class="custom-control-label" :for="'makeRadio_'+make.id">
                        {{make.name}}<small>({{make.count}})</small>
                      </label>
                    </div>
                   <!--  <a v-show="makesType == 'popular'" @click="changeMakes('all')" class="btn btn-link"><small> Choose from A - z </small></a>
                    <a v-show="makesType == 'all'" @click="changeMakes('popular')" class="btn btn-link"><small> Choose from popular makes </small></a> -->
          </div>
          <div class="form-group bg-soft-dark p-2">
               <!-- Select -->
              <select class="form-control form-control-sm" v-model="filterMin_price">
                <option value="null">Select min price</option>
                <option value="100000">100,000 JA$</option>
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

               <select class="form-control form-control-sm" v-model="filterMax_price">
                    <option value="null">Select max price</option>
                    <option value="100000">100,000 JA$</option>
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
          <div class="form-group bg-soft-dark p-2">
              <div>
                <label>Body Style</label>
              </div>
              <div v-for="body in getBodystyles" class="custom-control custom-control-inline custom-checkbox font-size-1 text-lh-md mb-2">
                  <input class="custom-control-input"
                     type="checkbox"
                     value="body.id"
                     id="styleRadio_1"
                     @click="check($event)"
                     v-model="filterBodyStyle">
                    <label class="custom-control-label" for="styleRadio_1">
                    </label>
                    {{body.name}} <small>(100)</small>
              </div>
          </div>
          <div class="form-group">
              <button @click="saveFilter()" class="btn btn-success btn-block">Save</button>
              <button @click="hideFilter()" class="btn btn btn-secondary btn-block">Close</button>
          </div>
      </div>
    </modal>
    <!-- End Filter Dialog -->
    

    <!-- Page Preloader -->
    <div id="jsPreloader" v-show="isLoading" class="page-preloader" style="background: rgba(0,0,0,0.5);">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-warning" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
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
         <div class="row bg-light d-none d-sm-block d-md-none d-block d-sm-none
">
              <div class="col-sm-auto ml-md-auto mb-3 mb-lg-0">
                <!-- Filter -->
                <div class="position-relative">
                  <a class="btn btn-block btn-sm btn-soft-secondary dropdown-toggle" href="javascript:;">
                    <span class="fas fa-search dropdown-item-icon"></span>
                    New Search
                  </a>
                </div>
                <!-- End Filter -->
            </div>
           <div class="col-sm-auto ml-md-auto mb-3 mb-lg-0">
                 <!-- Filter -->
                      <div class="position-relative">
                        <a @click="showFilter()" class="btn btn-block btn-sm btn-soft-secondary dropdown-toggle" href="javascript:;">
                          <span class="fas fa-sliders-h dropdown-item-icon"></span>
                          Filter
                        </a>
                      </div>
                 <!-- End Filter -->
            </div>
        </div>
        <!-- Top Filters -->
          <div class="row align-items-center">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <div class="d-flex align-items-center">
                
                <!-- Select -->
                  <select v-model="filterOffset" class="js-select selectpicker dropdown-select mr-2" data-size="10" data-width="fit" 
                       data-style="btn-soft-secondary btn-xs">
                      <option value="25" selected>25</option>
                      <option value="10">10</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                 </select>
                <!-- End Select -->
                <span class="text-secondary font-size-1">Showing 1-6 of 27</span>
              </div>
            </div>

            <div class="col-sm-6">
              <div class="d-flex justify-content-sm-end align-items-center">
               
                <!-- Select -->
                <select v-model="filterSorting" class="js-select selectpicker dropdown-select mr-2" data-size="10" data-width="fit"
                    data-style="btn-soft-secondary btn-xs">
                    <option value="mostRecent" selected>Most recent</option>
                    <option value="highestPrice">Highest price</option>
                    <option value="LowestPrice">Lowest price</option>
                    <option value="mostReduced">Most reduced</option>
                    <option value="mostPopular">Most popular</option>
                </select>
                <!-- End Select -->
              
                <!-- View Map -->
                <a  @click="viewMap()" class="btn btn-xs btn-soft-secondary mr-2" href="javascript:;">
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

    <div class="container space space-bottom-2">
        <div class="row">
            <div class="col-lg-4 col-md-4 d-none d-lg-block">
              <div class="">
                  <!-- Sidebar Filter -->
                  <div class="card p-4">
                    <!-- Location Type -->
              
                    <!-- End LocationType -->
                    
                   <div class="border-bottom">
                      <label class="form-label mb-2"><b>Parish</b></label>
                           <div class="row">
                              <div class="col-sm-12">
                                <div class="border-bottom mb-4 ">
                                      <!-- Select -->
                                      <select class="form-control form-control-sm" v-model="filterParish">
                                          <option value="null">Select parish</option>
                                         <option v-for="parish in parishes" :value="parish.name" >{{ parish.name}}</option>
                                      </select>
                                      <!-- End Select -->
                                 </div>
                              </div>
                          </div>
                        
                    </div>
                    <!-- End LocationType -->
                    <div class="text-center">
                      <span class="u-divider u-divider--text"></span>
                    </div>
                    <!-- Car Make -->
                    <div class="border-bottom">
                      <label class="form-label mb-2"> <b>Make</b></label>
                      <div class="row" style="overflow-y: scroll;  max-height:250px;">
                        <div class="col-12">
                         
                          <!-- Radio Checkbox -->
                          <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2" v-for="(make, key, index) in AllMakes">
                            <input class="custom-control-input"
                               type="checkbox"
                               :value="make.id"
                               :id="'makeRadio_'+make.id"
                               @click="check($event)"
                               v-model="filterMake">
                            <label class="custom-control-label" :for="'makeRadio_'+make.id">
                              {{make.name}} <span class="badge badge-primary badge-pill ml-1">{{make.count}}</span>
                            </label>
                          </div>
                          <!-- End Radio Checkbox -->
                        </div>
                      </div>
                      <a v-show="makesType == 'popular'" @click="changeMakes('all')" class="btn btn-link"><small> Choose from A - z </small></a>
                      <a v-show="makesType == 'all'" @click="changeMakes('popular')" class="btn btn-link"><small> Choose from popular makes </small></a>
                    </div>
                    <!-- End Car Make -->

                    <hr>
                    <!-- Year -->
                    <div class="border-bottom">
                      <label class="form-label mb-2"><b>Year</b></label>
                           <div class="row">
                              <div class="col-sm-5">
                                <div class="border-bottom ">
                                      
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control-sm" v-model="filterMin_year">
                                        <option value="null">Min year</option>
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
                                     <select class="form-control form-control-sm" v-model="filterMax_year">
                                        <option value="null">Max price</option>
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
                    <hr>  
                    <!-- Year -->
                    <div class="border-bottom mb-2 pb-2">
                      <label class="form-label mb-2"><b>Price</b></label>
                           <div class="row">
                              <div class="col-sm-6">
                                <div class="border-bottom ">
                                      
                                       <label for=""><small>Min</small></label>
                                      <!-- Select -->
                                      <select class="form-control form-control-sm" v-model="filterMin_price">
                                        <option value="null">Min price</option>
                                        <option value="100000">100,000 JA$</option>
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
                      
                               <div class="col-sm-6">
                                <div class="border-bottom">
                                         <!-- Select -->
                                      <label for=""><small>Max</small></label>
                                     <select class="form-control form-control-sm" v-model="filterMax_price">
                                        <option value="null">Max price</option>
                                        <option value="100000">100,000 JA$</option>
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
                    <!-- End Year -->
                    
                    <!-- Accordion -->
                    <div id="paymentDetails" class="accordion">
                      <!-- Card -->
                      <div class="card">
                        <div class="card-header card-collapse" id="cardHeadingOne">
                          <h5 class="mb-0">
                            <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                                    data-toggle="collapse"
                                    data-target="#cardOne"
                                    aria-expanded="false"
                                    aria-controls="cardOne">
                              <span class="row align-items-center">
                                <span class="col-md-12 mb-2 mb-md-0">
                                  <span class="media align-items-center">
                                    <!-- <img class="max-width-9 mr-3" src="../../assets/img/100x60/img1.jpg" alt="Image Description"> -->
                                    <span class="media-body">
                                      <span class="font-size-1"><strong>Body Style</strong></span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </button>
                          </h5>
                        </div>
                        <div id="cardOne" class="collapse mb-5" aria-labelledby="cardHeadingOne" data-parent="#paymentDetails">
                          <div class="card-body px-4">
                            <!-- Card Details -->
                            <div class="row">
                              <div class="col-sm-12 mb-2 mb-sm-0">
                                <!-- Radio Checkbox -->
                                    <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="sedan"
                                         id="styleRadio_1"
                                         @click="check($event)"
                                         v-model="filterBodyStyle">
                                      <label class="custom-control-label" for="styleRadio_1">
                                      </label>
                                      Sedan <small>(100)</small>
                                    </div>
                                <!-- End Radio Checkbox -->
                                
                                <!-- Radio Checkbox -->
                                   <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="suv"
                                         id="styleRadio_2"
                                         @click="check($event)"
                                         v-model="filterBodyStyle">
                                      <label class="custom-control-label" for="styleRadio_2">
                                      </label>
                                      SUV
                                   </div>
                                <!-- End Radio Checkbox -->

                                  <!-- Radio Checkbox -->
                                   <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="minivan"
                                         id="styleRadio_3"
                                         @click="check($event)"
                                         v-model="filterBodyStyle">
                                      <label class="custom-control-label" for="styleRadio_3">
                                      </label>
                                      Minivan 
                                   </div>
                                <!-- End Radio Checkbox -->
                                
                                 <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="coupe"
                                       id="styleRadio_4"
                                       @click="check($event)"
                                       v-model="filterBodyStyle">
                                    <label class="custom-control-label" for="styleRadio_4">
                                    </label>
                                    Coupe
                                 </div>
                              <!-- End Radio Checkbox -->

                               <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="hatchback"
                                       id="styleRadio_5"
                                       @click="check($event)"
                                       v-model="filterBodyStyle">
                                    <label class="custom-control-label" for="styleRadio_5">
                                    </label>
                                    Hatchback
                                 </div>
                              <!-- End Radio Checkbox -->
                                
                                 <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="passengervan"
                                       id="styleRadio_6"
                                       @click="check($event)"
                                       v-model="filterBodyStyle">
                                    <label class="custom-control-label" for="styleRadio_6">
                                    </label>
                                    Passenger Van
                                 </div>
                              <!-- End Radio Checkbox -->


                                <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="wagon"
                                       id="styleRadio_7"
                                       @click="check($event)"
                                       v-model="filterBodyStyle">
                                    <label class="custom-control-label" for="styleRadio_7">
                                    </label>
                                    Wagon
                                 </div>
                              <!-- End Radio Checkbox -->
                                   <!-- Radio Checkbox -->
                               <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                  <input class="custom-control-input"
                                     type="checkbox"
                                     value="comercial"
                                     id="'styleRadio_8"
                                     @click="check($event)"
                                     v-model="filterBodyStyle">
                                  <label class="custom-control-label" for="styleRadio_8">
                                  </label>
                                   Commercial
                               </div>
                            <!-- End Radio Checkbox -->
                              </div>
                            </div>
                            <!-- End Card Details -->
                          </div>
                        </div>
                      </div>
                      <!-- End Card -->
                    </div>
                    <!-- End Accordion -->

                    <!-- Accordion -->
                    <div id="transmission" class="accordion">
                      <!-- Card -->
                      <div class="card">
                        <div class="card-header card-collapse" id="transmission">
                          <h5 class="mb-0">
                            <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                                    data-toggle="collapse"
                                    data-target="#cardTwo"
                                    aria-expanded="false"
                                    aria-controls="cardOne">
                              <span class="row align-items-center">
                                <span class="col-md-12 mb-2 mb-md-0">
                                  <span class="media align-items-center">
                                    <!-- <img class="max-width-9 mr-3" src="../../assets/img/100x60/img1.jpg" alt="Image Description"> -->
                                    <span class="media-body">
                                      <span class="font-size-1"><strong>Transmission</strong></span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </button>
                          </h5>
                        </div>
                        <div id="cardTwo" class="collapse mb-5" aria-labelledby="transmission" data-parent="#transmission">
                          <div class="card-body px-4">
                            <!-- Card Details -->
                            <div class="row">
                              <div class="col-sm-12 mb-2 mb-sm-0">
                                <!-- Radio Checkbox -->
                                    <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="automanual"
                                         id="transRadio_1"
                                         @click="check($event)"
                                         v-model="filterTransmission">
                                      <label class="custom-control-label" for="transRadio_1">
                                      </label>
                                     Automanual  <small>(100)</small>
                                    </div>
                                <!-- End Radio Checkbox -->
                                
                                <!-- Radio Checkbox -->
                                   <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="automatic"
                                         id="transRadio_2"
                                         @click="check($event)"
                                         v-model="filterTransmission">
                                      <label class="custom-control-label" for="transRadio_2">
                                      </label>
                                      Automatic
                                   </div>
                                <!-- End Radio Checkbox -->
                                
                                 <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="cvt"
                                       id="transRadio_4"
                                       @click="check($event)"
                                       v-model="filterTransmission">
                                    <label class="custom-control-label" for="transRadio_4">
                                    </label>
                                     CVT
                                 </div>
                              <!-- End Radio Checkbox -->

                              
                               <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                  <input class="custom-control-input"
                                     type="checkbox"
                                     value="manual"
                                     id="'styleRadio_8"
                                     @click="check($event)"
                                     v-model="filterTransmission">
                                  <label class="custom-control-label" for="styleRadio_8">
                                  </label>
                                   Manual
                               </div>
                            <!-- End Radio Checkbox -->
                              </div>
                            </div>
                            <!-- End Card Details -->
                          </div>
                        </div>
                      </div>
                      <!-- End Card -->
                   </div>
                    <!-- End Accordion -->
                        
                    <!-- Accordion -->
                    <div id="cyclinder" class="accordion">
                      <!-- Card -->
                      <div class="card">
                        <div class="card-header card-collapse" id="transmission">
                          <h5 class="mb-0">
                            <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                                    data-toggle="collapse"
                                    data-target="#cardThree"
                                    aria-expanded="false"
                                    aria-controls="cardOne">
                              <span class="row align-items-center">
                                <span class="col-md-12 mb-2 mb-md-0">
                                  <span class="media align-items-center">
                                    <!-- <img class="max-width-9 mr-3" src="../../assets/img/100x60/img1.jpg" alt="Image Description"> -->
                                    <span class="media-body">
                                      <span class="font-size-1"><strong> Cyclinder </strong></span>
                                    </span>
                                  </span>
                                </span>
                              </span>
                            </button>
                          </h5>
                        </div>


                        <div id="cardThree" class="collapse mb-5" aria-labelledby="transmission" data-parent="#cyclinder">
                          <div class="card-body px-4">
                            <!-- Card Details -->
                            <div class="row">
                              <div class="col-sm-12 mb-2 mb-sm-0">
                                
                                <!-- Radio Checkbox -->
                                  <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="automanual"
                                       id="cyRadio_1"
                                       @click="check($event)"
                                       v-model="filterCyclinder">
                                    <label class="custom-control-label" for="cyRadio_1">
                                    </label>
                                    4-cylinder <small>(100)</small>
                                  </div>
                                <!-- End Radio Checkbox -->
                                
                                <!-- Radio Checkbox -->
                                   <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                      <input class="custom-control-input"
                                         type="checkbox"
                                         value="automatic"
                                         id="cyRadio_2"
                                         @click="check($event)"
                                         v-model="filterCyclinder">
                                      <label class="custom-control-label" for="cyRadio_2">
                                      </label>
                                      6-cylinder
                                   </div>
                                <!-- End Radio Checkbox -->
                                
                                 <!-- Radio Checkbox -->
                                 <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                    <input class="custom-control-input"
                                       type="checkbox"
                                       value="cvt"
                                       id="cyRadio_4"
                                       @click="check($event)"
                                       v-model="filterCyclinder">
                                    <label class="custom-control-label" for="transRadio_4">
                                    </label>
                                     Unkown
                                 </div>
                              <!-- End Radio Checkbox -->
                            <!-- End Radio Checkbox -->
                              </div>
                            </div>
                            <!-- End Card Details -->
                          </div>
                        </div>
                            <!-- Accordion -->
                        <div id="cyclinder" class="accordion">
                          <!-- Card -->
                          <div class="card">
                            <div class="card-header card-collapse" id="transmission">
                              <h5 class="mb-0">
                                <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                                        data-toggle="collapse"
                                        data-target="#cardFour"
                                        aria-expanded="false"
                                        aria-controls="cardOne">
                                  <span class="row align-items-center">
                                    <span class="col-md-12 mb-2 mb-md-0">
                                      <span class="media align-items-center">
                                        <span class="media-body">
                                          <span class="font-size-1"><strong> Seller Type</strong></span>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                </button>
                              </h5>
                            </div>
                              <div id="cardFour" class="collapse mb-5" aria-labelledby="sellertype" data-parent="#sellertype">
                              <div class="card-body px-4">
                                <!-- Card Details -->
                                <div class="row">
                                  <div class="col-sm-12 mb-2 mb-sm-0">
                                    
                                    <!-- Radio Checkbox -->
                                      <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                        <input class="custom-control-input"
                                           type="checkbox"
                                           value="dealership"
                                           id="stRadio_1"
                                           @click="check($event)"
                                           v-model="filterSellerType">
                                        <label class="custom-control-label" for="cyRadio_1">
                                        </label>
                                        Dealership
                                      </div>
                                    <!-- End Radio Checkbox -->
                                    
                                    <!-- Radio Checkbox -->
                                       <div class="custom-control custom-checkbox font-size-1 text-lh-md mb-2">
                                          <input class="custom-control-input"
                                             type="checkbox"
                                             value="automatic"
                                             id="stRadio_2"
                                             @click="check($event)"
                                             v-model="filterSellerType">
                                          <label class="custom-control-label" for="cyRadio_2">
                                          </label>
                                          Individual
                                       </div>
                                    <!-- End Radio Checkbox -->
                                <!-- End Radio Checkbox -->
                                  </div>
                                </div>
                                <!-- End Card Details -->
                              </div>
                            </div>
                          </div>
                        </div>
                   </div>
                      <!-- End Card -->
                   </div>
                    <!-- End Accordion -->

                    <!-- Buttons -->
                    <div class="row mx-gutters-2 mt-5">
                      <div class="col-6">
                        <button type="submit" @click="clear()" class="btn btn-block btn-sm btn-soft-secondary">Clear</button>
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
            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12">

                <premium-placement :cars="FilteredCars"></premium-placement>

                <!-- List and Grid view -->
                <ul v-if="list" class="list-unstyled">
                  <car-list v-for="car in FilteredCars" :car="car" class="mb-2" ></car-list>
                </ul>
                <!-- End List Grid View=z -->
                <car-grid  v-if="grid" :cars="FilteredCars"></car-grid>
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

import PremiumPlacement from './Account/components/cars/premium.vue';
import CarList from './Account/components/cars/list.vue';
import CarGrid from './Account/components/cars/grid.vue';

import axios from 'axios';
import { mapGetters } from 'vuex';
export default {
	components: {
		CarList,
		CarGrid,
    PremiumPlacement
	},
	data() {
		return {
      makesType: 'popular',
      filterOffset: 10,
      filterSorting: null,
      filterMiles: null,
      filterParish: null,
      filterBodyStyle: [],
      filterMake: [],
      filterTransmission: [],
      filterSellerType: null,
      filterMin_year: null,
      filterMax_year: null,
      filterMax_price: null,
      filterMin_price: null,
      filterCyclinder: [],
      isLoading: false,
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
 computed: {
    ...mapGetters([
        'UserCarDetails',
        'AllDetails',
        'AllModels',
        'AllMakes',
        'AllYears',
        'FilteredCars',
        'getBodystyles'
    ]),
  },
  watch:{

    makeCheckbox: function() {
        this.$store.dispatch('GET_VEHICLE_MODEL', this.filter.make )
        this.$store.distpatch('FILTER_CARS', this.makeCheckbox)
    },
    filterMake: function( value ) {
     
      var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          make: value,
          minPrice: this.filterMin_year,
          maxPrice: this.filterMax_year,
          bodyStyle: this.filterBodyStyle,
          transmission: this.filterTransmission,
          cyclinder: this.cyclinder,
          sellerType: this.filterSellerType
      }

      this.$store.dispatch('FILTER_CARS', params)

      this.isLoading = true
      var self = this
      setTimeout(function(){
          self.isLoading = false;
      }, 1000);
    },

    filterMiles: function(value) {

      var params = {
          miles: value,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          make: this.filterMake,
          minPrice: this.filterMin_year,
          maxPrice: this.filterMax_year,
          bodyStyle: this.filterBodyStyle,
          transmission: this.filterTransmission,
          cyclinder: this.cyclinder,
          sellerType: this.filterSellerType
      }

      this.isLoading = true
      var self = this
    
      setTimeout(function(){
          self.isLoading = false;
      }, 1000);
    
     this.$store.distpatch('FILTER_CARS', params)
    },
    filterMin_year: function(value) {

       var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: value,
          maxYear: this.filterMax_year,
          make: this.filterMake,
          minPrice: this.filterMin_year,
          maxPrice: this.filterMax_year,
          bodyStyle: this.filterBodyStyle,
          transmission: this.filterTransmission,
          cyclinder: this.cyclinder,
          sellerType: this.filterSellerType

      }

      this.isLoading = true
      var self = this
      setTimeout(function(){
           self.$store.dispatch('FILTER_CARS', params)
          self.isLoading = false;

      }, 1000);


    },

    filterMax_year: function(value) {

      var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: value,
          minPrice: this.filterMin_price,
          maxPrice: this.filterMax_price,
          bodyStyle: this.filterBodyStyle,
      }

      this.$store.distpatch('FILTER_CARS', params)
      this.isLoading = true
      var self = this

      setTimeout(function(){
          self.isLoading = false;
          self.$store.dispatch('FILTER_CARS', params)
      }, 1000);
    },

    filterParish: function( value ) {

      var params = {
          miles: this.filterMiles,
          parish: value,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          minPrice: this.filterMin_price,
          maxPrice: this.filterMax_price,
          bodyStyle: this.filterBodyStyle,
      }

      this.isLoading = true
      var self = this
      setTimeout(function(){
          self.isLoading = false;
          self.$store.dispatch('FILTER_CARS', params)
      }, 1000);
    },

    filterMin_price: function ( value ) {

      var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          bodyStyle: this.filterBodyStyle,
          minPrice: value,
          maxPrice: this.filterMax_price
      }
      this.isLoading = true
      var self = this
      setTimeout(function(){
          self.isLoading = false;
          self.$store.dispatch('FILTER_CARS', params)
      }, 1000);

    },

    filterMax_price: function(value) {

      var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          minPrice: this.filterMin_price,
          bodyStyle: this.filterBodyStyle,
          maxPrice: value
      }

      this.isLoading = true
      var self = this

      setTimeout(function(){
          self.isLoading = false;
          self.$store.dispatch('FILTER_CARS', params)
      }, 1000);
    },

    filterBodyStyle: function( value ) {
        var params = {
          miles: this.filterMiles,
          parish: this.filterParish,
          minYear: this.filterMin_year,
          maxYear: this.filterMax_year,
          minPrice: this.filterMin_price,
          maxPrice: this.filterMax_price,
          bodyStyle: value
       }

      this.isLoading = true
      var self = this

      setTimeout(function(){
          self.isLoading = false;
          self.$store.dispatch('FILTER_CARS', params)
      }, 1000);
    }
  },
	created() {

    if (this.$route.query.bodystyle != undefined ) {
        this.filterBodyStyle = this.$route.query.bodystyle
    }

   // Pass make list tyoe popular or A-z
    this.makesType = 'popular';
    
    // Make type can be popular or
    this.$store.dispatch('GET_VEHICLE_MAKE', this.makesType)
    this.$store.dispatch('GET_BODYSTYLES');
    var params = {
        miles: this.filterMiles,
        parish: this.filterParish,
        minPrice: this.filterMin_price,
        minYear: this.filterMin_year,
        maxYear: this.filterMax_year,
        make: this.filterMake
    }

    console.log(params)
    this.$store.dispatch('FILTER_CARS', params)
		// this.preloader = true
		// setTimeout(() => {
	 //    this.preloader = false
		// }, 2000)
	},
	methods: {
    showFilter() {
       this.$modal.show('filter')
    },
     hideFilter() {
       this.$modal.toggle('filter')
     },
     saveFilter() {

     },
     changeMakes(string) {
        this.makesType = string

        this.isLoading = true
        var self = this
        setTimeout(function(){
             self.isLoading = false;
             self.$store.dispatch('GET_VEHICLE_MAKE', self.makesType)
        }, 600);

     },

		change_view_type() {
			this.list = !this.list
			this.grid = !this.grid
		},

    check: function(e) {
      if (e.target.checked) {
        console.log(e.target.value)
      }
    },

    clear: function() {
          this.filterMiles = null
          this.filterParish = null
          this.filterMin_year = null
          this.filterMax_year = null
          this.filterMake = []
          this.filterMin_year = null
          this.filterMax_year = null
          this.filterBodyStyle = []
          this.filterTransmission = null
          this.cyclinder = null
          // this.filterSellerType
          // 
          
     var params = {
        miles:'',
        parish: '',
        minPrice: '',
        minYear: '',
        maxYear: '',
        make: ''
    }

    console.log(params)
    this.$store.dispatch('FILTER_CARS', params)
    }
	}
}
</script>
<style>
.page-preloade {
  opacity: !important 0.5
}
</style>