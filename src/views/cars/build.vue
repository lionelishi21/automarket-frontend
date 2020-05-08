<template>
<div>

<!-- Page Preloader -->
  <div id="jsPreloader" class="page-preloader" v-show="isComplete">
      <div class="page-preloader__content-centered">
        <div class="spinner-grow text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
<!-- End Page Preloader -->


    <!-- FAQ Topics Section -->
    <div class="container space-2 space-md-3">
      <div class="row">
        <div id="stickyBlockStartPoint" class="col-lg-3 mb-7 mb-lg-0">
          <!-- Nav -->
          <nav class="js-sticky-block card border-0 bg-primary"
               data-offset-target="#logoAndNav"
               data-parent="#stickyBlockStartPoint"
               data-sticky-view="lg"
               data-start-point="#stickyBlockStartPoint"
               data-end-point="#stickyBlockEndPoint"
               data-offset-top="24"
               data-offset-bottom="24">
                <div class="card mb-4 mb-md-0">
                <!-- Card -->
                <!-- Order Summary -->
            <div class="border shadow-soft rounded p-5 mb-4">
                  <!-- Title -->
                  <div class="border-bottom pb-4 mb-4">
                    <h2 class="h5 mb-0">Your Cart</h2>
                  </div>
                  <!-- End Title -->
                  <div class="border-bottom">
                    <div class="media align-items-center mb-3">
                      <h3 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3"> Available Credit </h3>
                      <div class="media-body text-right">
                        <span class="font-weight-medium">{{GetCredits.unactive}} Credit</span>
                      </div>
                    </div>
                  </div>

                  <div class="media align-items-center mb-4">
                    <h4 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Cost</h4>
                    <div class="media-body text-right">
                      <span class="font-weight-medium">1 Credit</span>
                    </div>
                  </div>

                  <div class="ml-lg-auto">
                      <!-- Button -->
                      <button type="button" class="btn btn-sm btn-primary text-nowrap transition-3d-hover">Add Credit</button>
                      <!-- End Button -->
                  </div>
              </div>
                <!-- End Card -->
              </div>
          </nav>
          <!-- End Nav -->
        </div>
          <div class="col-lg-9" v-if="isComplete == false">
            <!-- Title -->
              <div class="text-center mb-9">
                <h1 class="h2 font-weight-medium">Your Listing</h1>
                <p>Submissions which exceed maximum word counts will be edited.</p>
              </div>
            <!-- End Title -->
              <form id="uploadForm" @submit.prevent="uploadCar()" enctype="multipart/form-data">
                  <!--Section 1 -->
                  <div class="">
                    <!-- Title -->
                    <div class="border-bottom pb-3 mb-5">
                      <h2 class="h6 mb-0 text-primary">Basic Vehicle Information</h2>
                    </div>
                    <!-- End Title -->
                    <div class="row">
                      <div class="col-md-6 mb-3">
                        <div class="form-group" :class="{ 'u-has-error' : makeIsInvalid, 'u-has-success' : !makeIsInvalid }">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="listingAgentPhoneNumber">Make <span class="text-danger">*</span></label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  <span class="fas fa-car"></span>
                                </span>
                              </div>
                                 <select class="custom-select" v-model="formData.main.make_id" >
                                  <option v-for="(make, key, index) in AllMakes" :value="make.id">{{make.name}}</option>
                                </select>
                            </div> 
                            <span class="helper-block text-danger" v-if="makeIsInvalid">Please select vehicle make</span>
                          </div>
                        </div>
                  </div>
                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <div class="form-group" :class="{ 'u-has-error' : modelIsInvalid, 'u-has-success' : !modelIsInvalid }">
                    <div class="js-form-message js-focus-state">
                      <label class="form-label" for="listingAgentAgentName">Model <span class="text-danger">*</span></label>
                      <div class="input-group ">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="listingAgentAgentNameLabel">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                          <select class="custom-select" v-model="formData.main.model_id">
                             <option v-for="(model, key, index) in AllModels" :value="model.id">{{model.name}} - {{model.class}}</option>
                          </select>
                      </div>
                      <span class="helper-block text-danger" v-if="modelIsInvalid">Please select vehicle model</span>
                    </div>
                  </div>
                  <!-- End Input -->
                </div>

                <div class="col-md-6 mb-3">
                  <!-- End Input -->
                  <div class="form-group" :class="{ 'u-has-error' : yearIsInvalid, 'u-has-success' : !yearIsInvalid }">
                      <label class="form-label " for="listingAgentAgentName">Years <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-calendar"></span>
                          </span>
                        </div>
                          <select class="custom-select" v-model="formData.main.year_id">
                             <option v-for="(year, key, index) in AllYears" :value="year.id">{{year.year}}</option>
                          </select>
                      </div>
                  </div>
                 <span class="helper-block text-danger" v-if="yearIsInvalid">Please select vehicle year</span>
                  <!-- End Input -->
               </div>

               <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <div class="form-group" :class="{ 'u-has-error' : transmissionIsInvalid, 'u-has-success' : !transmissionIsInvalid }">
                      <label class="form-label">Transimition <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                        <select class="custom-select" v-model="formData.main.transmission">
                             <option v-for="(detail, key, index) in AllDetails" :value="detail.transmission" >{{detail.transmission}}</option>
                          </select>
                      </div>
                  </div>
                <span class="helper-block text-danger" v-if="transmissionIsInvalid">Please select vehicle transimition</span>
                  <!-- End Input -->
               </div>
                <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <div class="form-group" :class="{ 'u-has-error' : milageIsInvalid, 'u-has-success' : !milageIsInvalid }">
                      <label class="form-label">Milage <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                        <input type="number" class="form-control" v-model="formData.main.milage"  placeholder="Enter Milage (optional)">
                      </div>
                  </div>
                  <span class="helper-block text-danger"  v-if="milageIsInvalid">Please enter vehicle milage</span>
                  <!-- End Input -->
                </div>
               <div class="col-md-6 mb-3">
                  <!-- Input -->
                  <div class="form-group" :class="{ 'u-has-error' : bodyTypeIsInvalid, 'u-has-success' : !bodyTypeIsInvalid }">
                      <label class="form-label">Body Style <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                           <select class="custom-select" v-model="formData.main.body_type">
                              <option v-for="body in getBodystyles" value="body.id">{{body.name}}</option>
                            </select>
                      </div>
                  </div>
                   <span class="helper-block text-danger"  v-if="bodyTypeIsInvalid">Please select vehicle body style</span>
                  <!-- End Input -->
                </div>
              </div>
           </div>
            <!--End Section 1 -->

            <!-- Section 2 -->
            <div class="">
              <div class="border-bottom pb-3 mb-5">
              <h2 class="h6 text-primary mb-0">Colors</h2>
              </div>

              <div class="row">
                
                <div class="col-md-6 mb-3">
                    
                      <!-- Input -->
                      <div class="form-group" :class="{ 'u-has-error' : colorIsInvalid, 'u-has-success' : !colorIsInvalid }" >
                          <label class="form-label">Exterior Color <span class="text-danger">*</span></label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <span class="fas fa-car"></span>
                              </span>
                            </div>
                              <select class="custom-select" v-model="formData.main.exterior_color">
                                 <option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
                              </select>
                          </div>
                      </div>
                      <span class="helper-block text-danger"  v-if="colorIsInvalid">Please select vehicle exterior color</span>
                      <!-- End Input -->
                    </div>

                   <div class="col-md-6 mb-3">
                      <!-- Input -->
                      <div class="form-group"  :class="{ 'u-has-error' : incolorIsInvalid, 'u-has-success' : !incolorIsInvalid }"   >
                          <label class="form-label">Interior Color <span class="text-danger">*</span></label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <span class="fas fa-car"></span>
                              </span>
                            </div>
                              <select class="custom-select" v-model="formData.main.interior_color">
                                 <option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
                              </select>
                          </div>
                      </div>
                       <span class="helper-block text-danger"  v-if="incolorIsInvalid">Please select vehicle interior color</span>
                      <!-- End Input -->
                    </div>
              </div>
            </div>
            <!-- End Section 2 -->
            

            <!-- Location Section -->
               <div class="">
                    <div class="border-bottom pb-2 mb-3">
                    <h2 class="h6 text-primary mb-0">Location</h2>
                    </div>

                    <div class="row">
                      
                      <div class="col-md-6 mb-2">
                          
                            <!-- Input -->
                            <div class="form-group" :class="{ 'u-has-error' : parishIsInvalid, 'u-has-success' : !parishIsInvalid }">
                                <label class="form-label">Parish District <span class="text-danger">*</span></label>
                                <div class="input-group">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <span class="fas fa-map"></span>
                                    </span>
                                  </div>
                                    <select class="custom-select" v-model="formData.main.parish">
                                       <option v-for="parish in parishes" :value="parish.name" >{{ parish.name}}</option>
                                    </select>
                                </div>
                            </div>
                             <span class="helper-block text-danger"  v-if="parishIsInvalid">Please select parish</span>
                            <!-- End Input -->
                          </div>

                         <div class="col-md-6 mb-2">
                            <!-- Input -->
                            <div class="form-group"  :class="{ 'u-has-error' : districtIsInvalid, 'u-has-success' : !districtIsInvalid }" >
                                <label class="form-label">District <span class="text-danger">*</span></label>
                                <div class="input-group">
                                  <div class="input-group-prepend">
                                    <span class="input-group-text">
                                      <span class="fas fa-car"></span>
                                    </span>
                                  </div>
                                     <input type="text" class="form-control" v-model="formData.main.district"  placeholder="Vehicle District">
                                </div>
                            </div>
                             <span class="helper-block text-danger"  v-if="districtIsInvalid">Please select district</span>
                            <!-- End Input -->
                          </div>
                    </div>
               </div>
              <!-- End Location Section -->
             <!-- Section 8-->
            <div class="mb-7">
               
                  <!-- Price and description -->
                  <div class="border-bottom pb-2 mb-3">
                    <h2 class="h6 text-primary  mb-0">Price and Description</h2>
                  </div>
                  <!-- End Price and description-->

                  <!-- Input -->
                  <div class="form-group" :class="{ 'u-has-error' : priceIsInvalid, 'u-has-success' : !priceIsInvalid }">
                    <div class="js-focus-state">
                      <label class="form-label" for="listingPrice">Price <span class="text-danger">*</span></label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="listingPriceLabel">
                            <span class="fas fa-dollar-sign"></span>
                          </span>
                        </div>
              
                        <input 
                         class="form-control" 
                         name="price" 
                         v-model="formData.main.price" 
                         id="listingPrice" 
                         placeholder="Price"
                         v-currency="{currency: 'JMD', locale: 'en'}">

                      </div>
                    </div>
                     <span class="helper-block text-danger"  v-if="priceIsInvalid">Please enter vehicle price</span>
                  </div>
                 
                  <div class="form-group">
                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" id="negotiable" name="negotiable" value="true" v-model="formData.negotiable" class="custom-control-input">
                          <label class="custom-control-label" for="negotiable">Negotiable</label>
                       </div>
                  </div>


                  <!-- End Input -->
                  <div class="row">
                    <div class="col-lg-12 mb-3">
                      <!-- Input -->
                      <div class="js-form-message mb-3">
                        <label class="form-label">
                          Seller Notes
                          <span class="text-danger">*</span>
                        </label>

                        <div class="input-group"  :class="{ 'u-has-error' : noteIsInvalid, 'u-has-success' : !noteIsInvalid }">
                          <textarea class="form-control" rows="6" name="text" placeholder="Seller Notes" v-model="formData.main.description"></textarea>
                        </div>
                        <span class="helper-block text-danger"  v-if="noteIsInvalid">Please enter vehicle price</span>
                      </div>
                      <!-- End Input -->
                    </div>
                  </div>
            </div>
            <!-- End Section 8 -->

            <!-- Section 3 -->
            <div class="">
              <div class="border-bottom pb-3 mb-5">
              <h2 class="h6 text-secondary mb-0">Optional Informations</h2>
              </div>
               <div class="row">
                      <div class="col-md-6 mb-3">
                        <!-- Input -->
                        <div class="form-group">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="listingAgentAgentName">Number of Doors</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="listingAgentAgentNameLabel">
                                  <span class="fas fa-car"></span>
                                </span>
                              </div>
                               <select class="custom-select" v-model="formData.main.doors">
                                <option value="2" selected> 2 door</option>
                                <option value="3"> 3 door</option>
                                <option value="4"> 4 door</option>
                                <option value="5"> 5 door</option>
                                <option value="6"> 6 door</option>
                                 </select>
                            </div>
                          </div>
                        </div>
                        <!-- End Input -->
                      </div>

                      <div class="col-md-6 mb-3">
                        <!-- Input -->
                        <div class="form-group">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="listingAgentAgentName">Drive Type</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="listingAgentAgentNameLabel">
                                  <span class="fas fa-car"></span>
                                </span>
                              </div>
                               <select class="custom-select" v-model="formData.main.drive_type">
                                  <option value="">Select a Drive Type</option>
                                  <option value="4x2/2-wheel drive<">4x2/2-wheel drive</option>
                                  <option value="4x4/4-wheel drive">4x4/4-wheel drive</option>
                                  <option value="AWD">AWD</option>
                                  <option value="FWD">FWD</option>
                                  <option value="RWD">RWD</option>
                                </select>
                            </div>
                          </div>
                        </div>
                        <!-- End Input -->
                      </div>

                      <div class="col-md-6 mb-3">
                        <!-- Input -->
                        <div class="form-group">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="listingAgentPhoneNumber">Fuel Type</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="listingAgentPhoneNumberLabel">
                                  <span class="fas fa-car"></span>
                                </span>
                              </div>
                              <select class="custom-select" v-model="formData.main.fuel_type">
                                <option value="">Select a Fuel Type</option>
                                <option value="Compressed Natural Gas">Compressed Natural Gas</option>
                                <option value="Diesel">Diesel</option>
                                <option value="E85 Flex Fuel">E85 Flex Fuel</option>
                                <option value="Electric">Electric</option>
                                <option value="Gasoline">Gasoline</option>
                                <option value="Hybrid">Hybrid</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- End Input -->
                      </div>
                      <div class="col-md-6 mb-3">
                        <!-- Input -->
                        <div class="form-group">
                          <div class="js-form-message js-focus-state">
                            <label class="form-label" for="listingAgentPhoneNumber">Steering</label>
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text" id="listingAgentPhoneNumberLabel">
                                  <span class="fas fa-car"></span>
                                </span>
                              </div>
                              <select class="custom-select" v-model="formData.main.steering">
                                <option value="">Select a Steering</option>
                                <option value="Right Hand">Righ Hand Drive</option>
                                <option value="Left Hand">Left Hand Drive</option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <!-- End Input -->
                      </div>
                    </div>
            </div>
            <!-- Section 3 -->
          
            <!-- Section 4 -->
           <div class="mb-5">
              <!-- Title -->
              <div class="border-bottom pb-5 mb-5">
                <h2 class="h6 text-primary mb-0 ">Car Features</h2>
                <small>Check any that apply to your car</small>
              </div>
              <!-- End Title -->

              <!-- Radio Checkbox Group -->
              <div class="row mx-gutters-2">
                <div class="col-6 col-md-6 mb-3 mb-md-0">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="A/C: Front" id="carFeatures1" name="carFeatures1" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures1">A/C: Front</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="A/C: Rear" id="carFeatures2" name="carFeatures2" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures2">A/C: Rear</label>
                  </div>
                    <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Power Locks" id="carFeatures3" name="carFeatures3" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures3">Power Locks</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Power Steering" id="carFeatures4" name="carFeatures4" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures4">Power Steering</label>
                  </div>
                        </div>
                        <div class="col-6 col-md-6 mb-3 mb-md-0">
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Cruise Control" id="carFeatures5" name="carFeatures5" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures5">Cruise Control</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Navigation" id="carFeatures6" name="carFeature6" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures6">Navigation</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Keyless Entry" id="carFeatures7" name="carFeatures7" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures7">Keyless Entry</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" v-model="formData.car_features" value="Integrated Phone" id="carFeatures8" name="carFeatures8" class="custom-control-input">
                    <label class="custom-control-label" for="carFeatures8">Integrated Phone</label>
                  </div>
                </div>
              </div>
              <!-- End Radio Checkbox Group -->
           </div>
           <!-- End Section 4 -->

           <!-- Section 5 -->
            <div class="mb-5">
                <!-- Title -->
                <div class="border-bottom pb-3 mb-2">
                  <h2 class="h6 text-primary mb-0">Seat</h2>
                </div>
              
                <!-- Seet Sections -->
               <div class="row mx-gutters-2">
                 <div class="col-6 col-md-6 mb-3 mb-md-0">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="seatCheckbox1" v-model="formData.car_seats" value="Bucket Seats" class="custom-control-input">
                      <label class="custom-control-label" for="seatCheckbox1">Bucket Seats</label>
                    </div>

                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" id="seatCheckbox2" v-model="formData.car_seats" value="Leather Interior" class="custom-control-input">
                      <label class="custom-control-label" for="seatCheckbox2">Leather Interior</label>
                    </div>
                 </div>
                <div class="col-6 col-md-6 mb-3 mb-md-0">
                   <div class="custom-control custom-checkbox">
                    <input type="checkbox" id="seatCheckbox3" v-model="formData.car_seats"  value="Memory Seats"  class="custom-control-input">
                    <label class="custom-control-label" for="seatCheckbox3">Memory Seats</label>
                  </div>
                  <div class="custom-control custom-checkbox">
                    <input type="checkbox" id="seatCheckbox4" v-model="formData.car_seats" value="Power Seats" class="custom-control-input">
                    <label class="custom-control-label" for="seatCheckbox4">Power Seats</label>
                  </div>
                </div>
               </div>
                  <!-- End Seats Sections -->
           </div>
          <!-- EndSection 5 -->

             <!-- Section 6 -->
              <div class="mb-5">
                  
                   <!-- Title -->
                  <div class="border-bottom mb-2">
                    <h2 class="h6 text-primary mb-0">Safety</h2>
                  </div>
                  <!-- End Title -->
                 <div class="row mx-gutters-2">
                      <div class="col-6 col-md-6 mb-3 mb-md-0">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="safetyCheckbox1" value="Airbag: Driver" class="custom-control-input" v-model="formData.car_safety">
                            <label class="custom-control-label" for="safetyCheckbox1">Airbag: Driver</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="formData.car_safety" id="safetyCheckbox2" value="Airbag: Passenger" class="custom-control-input">
                            <label class="custom-control-label" for="safetyCheckbox2">Airbag: Passenger</label>
                          </div>
                      </div>
                      <div class="col-6 col-md-6 mb-3 mb-md-0">
                           <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="formData.car_safety" id="safetyCheckbox6" value="Airbag: Side" class="custom-control-input">
                            <label class="custom-control-label" for="safetyCheckbox6">Airbag: Side</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="formData.car_safety" id="safetyCheckbox3" value="Alarm" class="custom-control-input">
                            <label class="custom-control-label" for="safetyCheckbox3">Alarm</label>
                          </div>
                       </div>
                       <div class="col-6 col-md-6 mb-3 mb-md-0">
                           <div class="custom-control custom-checkbox">
                            <input type="checkbox" v-model="formData.car_safety" id="safetyCheckbox4" value="Antilock Brakes" class="custom-control-input">
                            <label class="custom-control-label" for="safetyCheckbox4">Antilock Brakes</label>
                          </div>
                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" v-model="formData.car_safety" id="safetyCheckbox5" value="Fog Lights" class="custom-control-input">
                          <label class="custom-control-label" for="safetyCheckbox5">Fog Lights</label>
                        </div>
                      </div>
                    </div>
              </div>
              <!-- End Section 6 -->
              
              <!-- Section 7 -->
              <div class="mb-5">

                     <div class="border-bottom mb-2">
                          <h2 class="h6 text-primary mb-0">Entertainment</h2>
                     </div>

                     <div class="row mx-gutters-2">
                       <div class="col-6 col-md-6 mb-3 mb-md-0">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox1" name="enter" value="AM/FM Stereo" v-model="formData.car_entertainment" class="custom-control-input">
                            <label class="custom-control-label"  for="echeckbox1" >AM/FM Stereo</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox2" value="Cassette Player" v-model="formData.car_entertainment"  name="echeckbox2" class="custom-control-input">
                            <label class="custom-control-label" for="echeckbox2">Cassette Player</label>
                          </div>
                      </div>
                      <div class="col-6 col-md-6 mb-3 mb-md-0">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox3" value="CD (Single Disc)" v-model="formData.car_entertainment"  name="echeckbox3" class="custom-control-input">
                            <label class="custom-control-label" for="echeckbox3">CD (Single Disc)</label>
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox4" value="CD (Multi Disc)"  v-model="formData.car_entertainment"  name="echeckbox4" class="custom-control-input">
                            <label class="custom-control-label" for="echeckbox4">CD (Multi Disc)</label>
                          </div>
                      </div>
                      <div class="col-6 col-md-6 mb-3 mb-md-0">
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox5" value="MP3 (Single Disc)" v-model="formData.car_entertainment"  name="echeckbox5" class="custom-control-input">
                            <label class="custom-control-label" for="echeckbox5">MP3 (Single Disc)</label>
                         </div>
                          <div class="custom-control custom-checkbox">
                            <input type="checkbox" id="echeckbox6" value="Premium Sound" v-model="formData.car_entertainment"  name="echeckbox6" class="custom-control-input">
                            <label class="custom-control-label" for="echeckbox6">Premium Sound</label>
                          </div>
                      </div>
                  </div>

              </div>
              <!-- End Section 7 -->
                
                <!-- Section 7 -->
                <div class="mb-5">
                   <div class="border-bottom mb-2">
                    <h2 class="h6 text-primary mb-0">Other</h2>
                   </div>

                   <div class="row mx-gutters-2">
                        <div class="col-6 col-md-6 mb-3 mb-md-0">
                          <div class="custom-control custom-checkbox">
                          <input type="checkbox" id="checkboxOther1" value="Alloy Wheels" name="checkboxOther1" v-model="formData.others" class="custom-control-input">
                          <label class="custom-control-label" for="checkboxOther1">Alloy Wheels</label>
                        </div>

                        <div class="custom-control custom-checkbox">
                          <input type="checkbox" id="checkboxOther2" name="checkboxOther2" value="Moonroof/Sunroof" v-model="formData.others" class="custom-control-input">
                          <label class="custom-control-label" for="checkboxOther2">Moonroof/Sunroof</label>
                        </div>
                      </div>

                      <div class="custom-control custom-checkbox">
                          <input type="checkbox" id="checkboxOther3" name="checkboxOther3" value="Third Row Seats" v-model="formData.others" class="custom-control-input">
                          <label class="custom-control-label" for="checkboxOther3">Third Row Seats</label>
                       </div>
                    </div>  
                </div>
                <!--  End Section 7 -->
     
              <!-- Sectin 10-->
              <div class="mb-7">
                <!-- Title -->
                <div class="border-bottom pb-3 mb-5">
                  <h2 class="h6 text-secondary mb-0">Upload images</h2>
                  <small>Browse your device and upload images</small>
                  <small class="d-block text-muted">Maximum file size is 2MB</small>
                </div>
                <!-- uploader image input -->
                 <div class="row">
                     <div class="col-md-4">
                        <!-- File Attachment Input -->
                        <!-- Gallery -->
                        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;" v-if="imageData.length > 0">
                          <img class="img-fluid rounded " :src="imageData" alt="Image Description" style="max-height: 360px;">
                          <span class="u-media-viewer__container">
                            <span class="u-media-viewer__icon" @click="imageData = !imageData">
                              <span class="fas fa-trash u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        <!-- End Gallery -->
                        <div v-else class="u-dropzone">
                          <div class="dz-message p-0">
                            <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                                 data-parent="#uploadForm">
                              <span class="d-block mb-2">Add Image</span>
                              <input @change="onFileSelected" 
                                  id="imagesAttachmentInput" 
                                  name="images-attachment"
                                  type="file" class="js-custom-file-attach file-attachment-input__label" data-result-text-target="#fileUploadText">
                              </div>
                        </div>
                         <!-- End File Attachment Input -->
                      </div>
                      <div class="col-md-4">
                        <!-- File Attachment Input -->
                        <!-- Gallery -->
                        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;" v-if="imgData.img1.length > 0">
                          <img class="img-fluid rounded " :src="imgData.img1" alt="Image Description" style="max-height: 360px;">
                          <span class="u-media-viewer__container">
                           <span class="u-media-viewer__icon" @click="imgData.img1 = !imgData.img1">
                              <span class="fas fa-trash u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        <!-- End Gallery -->
                        <div v-else class="u-dropzone">
                          <div class="dz-message p-0">
                            <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                                 data-parent="#uploadForm">
                              <span class="d-block mb-2">Add Image</span>
                              <input @change="selectedImage1" 
                                  id="imagesAttachmentInput" 
                                  name="images-attachment"
                                  ref="file"
                                  type="file" class="js-custom-file-attach file-attachment-input__label" >
                              </div>
                        </div>
                         <!-- End File Attachment Input -->
                      </div>
                      <div class="col-md-4">
                        <!-- File Attachment Input -->
                        <!-- Gallery -->
                        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;" v-if="imgData.img2.length > 0">
                          <img class="img-fluid rounded " :src="imgData.img2" alt="Image Description" style="max-height: 360px;">
                          <span class="u-media-viewer__container">
                              <span class="u-media-viewer__icon" @click="imgData.img2 = !imgData.img2">
                              <span class="fas fa-trash u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        <!-- End Gallery -->
                        <div v-else class="u-dropzone">
                          <div class="dz-message p-0">
                            <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                                 data-parent="#uploadForm">
                              <span class="d-block mb-2">Add Image</span>
                              <input @change="selectedImage2" 
                                  id="imagesAttachmentInput" 
                                  name="images-attachment"
                                  type="file" class="js-custom-file-attach file-attachment-input__label" data-result-text-target="#fileUploadText">
                              </div>
                        </div>
                         <!-- End File Attachment Input -->
                      </div>
                     <div class="col-md-4">
                        <!-- File Attachment Input -->
                        <!-- Gallery -->
                        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;" v-if="imgData.img3.length > 0">
                          <img class="img-fluid rounded " :src="imgData.img3" alt="Image Description" style="max-height: 360px;">
                          <span class="u-media-viewer__container">
                              <span class="u-media-viewer__icon" @click="imgData.img3 = !imgData.img3">
                              <span class="fas fa-trash u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        <!-- End Gallery -->
                        <div v-else class="u-dropzone">
                          <div class="dz-message p-0">
                            <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                                 data-parent="#uploadForm">
                              <span class="d-block mb-2">Add Image</span>
                              <input @change="selectedImage3" 
                                  id="imagesAttachmentInput" 
                                  name="images-attachment"
                                  type="file" class="js-custom-file-attach file-attachment-input__label" data-result-text-target="#fileUploadText">
                              </div>
                        </div>
                         <!-- End File Attachment Input -->
                      </div>
                      <div class="col-md-4">
                        <!-- File Attachment Input -->
                        <!-- Gallery -->
                        <a class="js-fancybox u-media-viewer mb-3" href="javascript:;" v-if="imgData.img4.length > 0">
                          <img class="img-fluid rounded " :src="imgData.img4" alt="Image Description" style="max-height: 360px;">
                          <span class="u-media-viewer__container">
                              <span class="u-media-viewer__icon" @click="imgData.img4 = !imgData.img4">
                              <span class="fas fa-trash u-media-viewer__icon-inner"></span>
                            </span>
                          </span>
                        </a>
                        <!-- End Gallery -->
                        <div v-else class="u-dropzone ">
                          <div class="dz-message p-0">
                            <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                                 data-parent="#uploadForm">
                              <span class="d-block mb-2">Add Image</span>
                              <input @change="selectedImage4" 
                                  id="imagesAttachmentInput" 
                                  name="images-attachment"
                                  type="file" class="js-custom-file-attach file-attachment-input__label" data-result-text-target="#fileUploadText">
                              </div>
                        </div>
                         <!-- End File Attachment Input -->
                      </div>
                    </div>
                    <div class="row text-center mt-5">
                          <div class="col-md-12">
                          <!-- End uploader image input  -->
                          <span class="helper-block text-danger text-center" v-if="isFormIsValid">Please select all required field</span>
                          <span class="helper-block text-danger text-center" v-if="isImageValid">Please select at lease one image</span>
                          </div>
                    </div>
                </div>
              
              <button type="submit" class="btn btn-primary btn-block transition-3d-hover">Submit</button>
        </form>
      </div>
      </div>
     </div>
    <!-- End FAQ Topics Section -->

    <!-- Sticky Block End Point -->
    <div id="stickyBlockEndPoint"></div>
</div>
    <!-- Sticky Block End Point -->
</template>
<script>
import { mapGetters } from 'vuex';
import UploadImage from 'vue-upload-image';
import axios from 'axios'
import { CurrencyDirective } from 'vue-currency-input'

export default {
 directives: {
    currency: CurrencyDirective
 },
 components: {
     UploadImage
  },
	data() {
		return {
      selectedPlan: '',
      selectedFile1: false,
      selectedFile2: false,
      selectedFile3: false,
      selectedFile4: false,
      selectedFile5: false,
      isComplete: false,
      file: '',
      step: 1,
      slug: '',
      imgData: {
        img1: '',
        img2: '',
        img3: '',
        img4: '',
        img5: ''
      },
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
      details: {
        make: null
      },
      forms: {
        create: {
          url: '',
          confirm: 'Add Image'
        }
      },
      imageData: '',
			formData: {
           main: {
             added_by: null,
             make_id: null,
             model_id: null,
             year_id: null,
             vehicle_id: null,
             steering: null,
             district: null,
             parish: null,
             doors: null,
             negotiable: null,
             drive_type: null,
             fuel_type: null,
             interior_color: null,
             exterior_color: null,
             milage: null,
             description:null,
             price: null,
           },
         others: [],
         images: [],
         profile: [],
			   car_entertainment: [],
         car_safety: [],
         car_others: [],
         car_features: [],
         car_seats: [],
			},
      msg: "Vue Image Upload and Resize Demo",
      hasImage: true,
      image: null,
      input_id: { // Id of upload control
          type: String,
          required: false,
          default: "default"
      },
      loading: false,
      isFormIsValid: false,
      isImageValid: false
		}
	 },
   watch:{
    'formData.main.make_id': function() {
       console.log('watching make... ')
       var payload = { make: this.formData.main.make_id,  model: this.formData.main.model_id, year: this.formData.main.year_id }
       this.$store.dispatch('GET_VEHICLE_MODEL', this.formData.main.make_id)
    },
    'formData.main.model_id': function() {
         console.log( 'watching model... ')
         var payload = { make: this.formData.main.make_id,  model: this.formData.main.model_id, year: this.formData.main.year_id }

         this.$store.dispatch('GET_VEHICLE_YEARS', payload)
    },
    'formData.main.year_id': function() {
        console.log('watching year... ')
        var payload = { make: this.formData.main.make_id,  model: this.formData.main.model_id, year: this.formData.main.year_id }
        this.$store.dispatch('GET_VEHICLE_DETAILS', payload)
    }
   },
  computed: {
    ...mapGetters([
        'UserCarDetails',
        'AllDetails',
        'AllModels',
        'AllMakes',
        'AllYears',
        'getPlanDetails',
        'getBodystyles',
        'GetCredits'
    ]),
    makeIsInvalid() {
      return !this.formData.main.make_id
    },

    modelIsInvalid() {
      return !this.formData.main.model_id
    },

    yearIsInvalid() {
      return !this.formData.main.year_id
    },
    transmissionIsInvalid() {
      return !this.formData.main.transmission
    },

    milageIsInvalid() {
      return !this.formData.main.milage
    },

    bodyTypeIsInvalid() {
      return !this.formData.main.body_type
    },

    colorIsInvalid() {
      return !this.formData.main.exterior_color
    },

    incolorIsInvalid() {
      return !this.formData.main.interior_color
    },

    parishIsInvalid() {
      return !this.formData.main.parish
    },

    districtIsInvalid() {
      return !this.formData.main.district
    },

    priceIsInvalid() {
      return !this.formData.main.price
    },

    noteIsInvalid() {
      return !this.formData.main.description
    },


  },
  mounted() {

      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
      // initialization of sticky blocks
      $.HSCore.components.HSStickyBlock.init('.js-sticky-block');

  },
  created() {

     var slug = this.$route.params.id

     this.slug = slug
     this.$store.dispatch('PLAN_DETAILS', slug)
     this.$store.dispatch('GET_VEHICLE_MAKE')
     this.$store.dispatch('GET_BODYSTYLES');

  },
  methods: {


   checkForm() {

      if ( !this.makeIsInvalid && !this.modelIsInvalid && !this.yearIsInvalid && !this.transmissionIsInvalid &&
          !this.milageIsInvalid && !this.bodyTypeIsInvalid && !this.colorIsInvalid && !this.incolorIsInvalid && !this.parishIsInvalid 
          && !this.districtIsInvalid && !this.priceIsInvalid && !this.noteIsInvalid) {
          
          return false
      }
      return true
   },


   uploadCar() {
       this.loading = true;
       this.formData.images = this.imgData
       console.log(this.formData)


       this.isFormIsValid = this.checkForm()

       if (this.isFormIsValid) {
          return
       }


       if ( !this.selectedFile1 && !this.selectedFile2 && !this.selectedFile3 && !this.selectedFile4 && !this.selectedFile5 ) {
          this.isImageValid = true
          return
       }



       debugger;

       let formData = new FormData()

       if (this.selectedFile1) {
          formData.append('image1', this.selectedFile1, this.selectedFile1.name);
       }
       if (this.selectedFile2) {
          formData.append('image2', this.selectedFile2, this.selectedFile2.name);
       }
       if (this.selectedFile3) {
          formData.append('image3', this.selectedFile3, this.selectedFile3.name);
       }
       if (this.selectedFile4) {
          formData.append('image4', this.selectedFile4, this.selectedFile4.name);
       }
       if (this.selectedFile5) {
          formData.append('image5', this.selectedFile5, this.selectedFile5.name);
       }

       formData.append('main', JSON.stringify(this.formData.main));
       formData.append('car_safety', this.formData.car_safety);
       formData.append('car_others', this.formData.others);
       formData.append('car_features', this.formData.car_features);
       formData.append('car_seats', this.formData.car_seats);
       formData.append('profile', this.formData.profile);
       formData.append('car_entertainment', this.formData.car_seats);



      // axios.post('http://127.0.0.1:8000/api/cars/post', formData,
     axios.post('http://18.206.230.202/api/cars/post', formData,
        {
           headers: {
            'content-type': `multipart/form-data`,
          },
        })
        .then( response => {
          console.log(response)
          var self = this
          let responseData = response.data.response
          setTimeout(function() {
               var url = '/order-complete'
               self.loading = false
               self.$router.push(url)
          }, 1000);

        }, error => {
          console.log(error.response)
          this.loading = false
        })


   
    },
    onFileSelected(event) {

       // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
            // create a new FileReader to read this image and convert to base64 format
            var reader = new FileReader();
            // Define a callback function to run, when FileReader finishes its job
            reader.onload = (e) => {
                // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                // Read image as base64 and set to imageData
                this.imageData = e.target.result;
            }

            // Start the reader job - read file as a data url (base64 format)
            reader.readAsDataURL(input.files[0]);
        }
    },
    previewImage: function(event) {
        // Reference to the DOM input element
        var input = event.target;
        // Ensure that you have a file before attempting to read it
        if (input.files && input.files[0]) {
            // create a new FileReader to read this image and convert to base64 format
            var reader = new FileReader();
            // Define a callback function to run, when FileReader finishes its job
            reader.onload = (e) => {
                // Note: arrow function used here, so that "this.imageData" refers to the imageData of Vue component
                // Read image as base64 and set to imageData
                this.imageData = e.target.result;
            }
            // Start the reader job - read file as a data url (base64 format)
            reader.readAsDataURL(input.files[0]);
        }
    },
    selectedImage1(event) {

       var input = event.target;
       this.selectedFile1 = input.files[0]

       if (input.files && input.files[0]) {

          var reader = new FileReader();

          reader.onload = (e) => {

             this.imgData.img1 = e.target.result;
          }
          reader.readAsDataURL(input.files[0]);
      }
    },
    selectedImage2() {

      var input = event.target;
      this.selectedFile2 = input.files[0]
      if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = (e) => {

           this.imgData.img2 = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
      }
    },
     selectedImage3() {

      var input = event.target;
      this.selectedFile3 = input.files[0]
      
      if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = (e) => {

           this.imgData.img3 = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
      }
    },
    selectedImage4() {

      var input = event.target;
      this.selectedFile4 = input.files[0]

      if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = (e) => {

           this.imgData.img4 = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
      }
    },
    selectedImage5() {

      var input = event.target;
      this.selectedFile5 = input.files[0]

      if (input.files && input.files[0]) {

        var reader = new FileReader();

        reader.onload = (e) => {

           this.imgData.img5 = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
      }
    }
  }
}
</script>
<style>
.file-upload-form, .image-preview {
    font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
    padding: 20px;
}
img.preview {
    width: 200px;
    background-color: white;
    border: 1px solid #DDD;
    padding: 5px;
}
</style>