<template>
	
  <!-- TODO: Change form to step form -->
  <!-- Upload Form Section -->
    <div class="container space-2">
      <div class="w-lg-75 mx-lg-auto">
        <!-- Title -->
        <div class="text-center mb-9">
          <h1 class="h2 font-weight-medium">Your Listing</h1>
          <p>Submissions which exceed maximum word counts will be edited.</p>
        </div>
        <!-- End Title -->

        <form id="uploadForm" class="js-validate svg-preloader">
            <!--Section 1 -->
            <div class="mb-7">
              <!-- Title -->
              <div class="border-bottom pb-3 mb-5">
                <h2 class="h6 mb-0 text-primary">Basic Vehicle Information</h2>
              </div>
              <!-- End Title -->


              <div class="row">
                <div class="col-md-6 mb-3">
                  <!-- Input -->
                      <!-- Input -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      {{AllModels}}
                      <label class="form-label" for="listingAgentPhoneNumber">Make</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                           <select class="custom-select" v-model="formData.make" @change="changeLocation">
                            <option v-for="(make, key, index) in AllMakes">{{make.name}}</option>
                          </select>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div class="col-md-6 mb-3">
                  <!-- End Input -->
                  <div class="form-group">
                    <div class="js-form-message js-focus-state">
                      <label class="form-label " for="listingAgentAgentName">Years</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-calendar"></span>
                          </span>
                        </div>
                         <select class="custom-select" v-model="formData.year">
                            <option selected>2000</option>
                            <option value="2001">2001</option>
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
                      <label class="form-label" for="listingAgentAgentName">Model</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="listingAgentAgentNameLabel">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                          <select class="custom-select" v-model="formData.model">
                             <option v-for="(model, key, index) in AllModels">{{model.name}}</option>
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
                      <label class="form-label" for="listingAgentPhoneNumber">Style</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="listingAgentPhoneNumberLabel">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                         <select class="custom-select" v-model="formData.style">
                            <option value="" selected>Style</option>
                            <option value="">Accord</option>
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
                      <label class="form-label" for="listingAgentAgentName">Body Style</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                         <select class="custom-select" v-model="formData.body_style">
                            <option value="" selected>Body Style</option>
                            <option value=""></option>
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
                      <label class="form-label">Transimition</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                          <select class="custom-select" v-model="formData.transmission">
                            <option value="" selected>Transimition</option>
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
                      <label class="form-label">Milage</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text">
                            <span class="fas fa-car"></span>
                          </span>
                        </div>
                        <input type="text" class="form-control" v-model="milage"  placeholder="Enter Milage (optional)">
                      </div>
                    </div>
                  </div>
                  <!-- End Input -->
                </div>
              </div>
            </div>
            <!--End Section 1 -->
            
            <!-- Section 2 -->
      		  <div class="mb-7">
      		  	<div class="border-bottom pb-3 mb-5">
      				<h2 class="h6 text-primary mb-0">Colors</h2>
      		  	</div>

      		  	<div class="row">
      		      
      		      <div class="col-md-6 mb-3">
                    
                      <!-- Input -->
                      <div class="form-group">
                        <div class="js-form-message js-focus-state">
                          <label class="form-label">Exterior Color</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <span class="fas fa-car"></span>
                              </span>
                            </div>
                              <select class="custom-select" v-model="formData.exterior_color">
      	                         <option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
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
                          <label class="form-label">Interior Color</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">
                                <span class="fas fa-user"></span>
                              </span>
                            </div>
                              <select class="custom-select" v-model="formData.interior_color">
      	                         <option v-for="color in colors" :value="color.color" >{{ color.color}}</option>
                              </select>
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->
                    </div>
      		  	</div>
      		  </div>
            <!-- End Section 2 -->
            
            <!-- Section 3 -->
      		  <div class="mb-7">
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
      	                          <span class="fas fa-user"></span>
      	                        </span>
      	                      </div>
      		                     <select class="custom-select" v-model="formData.doors">
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
      	                    <label class="form-label" for="listingAgentPhoneNumber">Engine Cylinder</label>
      	                    <div class="input-group">
      	                      <div class="input-group-prepend">
      	                        <span class="input-group-text" id="listingAgentPhoneNumberLabel">
      	                          <span class="fas fa-phone"></span>
      	                        </span>
      	                      </div>
      	                   		  <select class="custom-select" v-model="formData.cylinder">
      	                   		  	<option value=""></option>}
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
      	                          <span class="fas fa-user"></span>
      	                        </span>
      	                      </div>
      	                       <select class="custom-select" v-model="formData.drive_type">
      	                   		  	<option value=""></option>}
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
      	                          <span class="fas fa-phone"></span>
      	                        </span>
      	                      </div>
                         		  <select class="custom-select" v-model="formData.fuel_type">
                         		  	<option value=""></option>
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
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures1" name="carFeatures1" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures1">A/C: Front</label>
          				</div>
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures2" name="carFeatures2" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures2">A/C: Rear</label>
          				</div>
          			    <div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures3" name="carFeatures3" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures3">Power Locks</label>
          				</div>
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures4" name="carFeatures4" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures4">Power Steering</label>
          				</div>
                        </div>
                        <div class="col-6 col-md-6 mb-3 mb-md-0">
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures5" name="carFeatures5" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures5">Cruise Control</label>
          				</div>
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures6" name="carFeature6" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures6">Navigation</label>
          				</div>
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures7" name="carFeatures7" class="custom-control-input">
          				  <label class="custom-control-label" for="carFeatures7">Keyless Entry</label>
          				</div>
          				<div class="custom-control custom-checkbox">
          				  <input type="checkbox" v-model="formData.car_features" id="carFeatures8" name="carFeatures8" class="custom-control-input">
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
          					  <input type="checkbox" id="seatCheckbox1" v-model="formData.seats" name="seatCheckbox" class="custom-control-input">
          					  <label class="custom-control-label" for="seatCheckbox">Bucket Seats</label>
          					</div>
          					<div class="custom-control custom-checkbox custom-control-inline">
          					  <input type="checkbox" id="seatCheckbox2" v-model="formData.seats" name="seatCheckbox" class="custom-control-input">
          					  <label class="custom-control-label" for="customCheckboxInline2">Leather Interior</label>
          					</div>
      	         </div>
      				  <div class="col-6 col-md-6 mb-3 mb-md-0">
        				   <div class="custom-control custom-checkbox">
        					  <input type="checkbox" id="seatCheckbox3" v-model="formData.seats" name="seatCheckbox" class="custom-control-input">
        					  <label class="custom-control-label" for="seatCheckbox3">Memory Seats</label>
        					</div>
        					<div class="custom-control custom-checkbox">
        					  <input type="checkbox" id="seatCheckbox4" v-model="formData.seats" name="seatCheckbox4" class="custom-control-input">
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
            					  <input type="checkbox" id="safetyCheckbox" name="safetyCheckbox" class="custom-control-input" v-model="formData.safety">
            					  <label class="custom-control-label" for="safetyCheckbox">Airbag: Driver</label>
            					</div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" v-model="formData.safety" id="safetyCheckbox1" name="safetyCheckbox1" class="custom-control-input">
            					  <label class="custom-control-label" for="safetyCheckbox1">Airbag: Passenger</label>
            					</div>
            	              </div>
            				  <div class="col-6 col-md-6 mb-3 mb-md-0">
            				  	<div class="custom-control custom-checkbox">
            					  <input type="checkbox" v-model="formData.safety" id="safetyCheckbox2" name="safetyCheckbox2" class="custom-control-input">
            					  <label class="custom-control-label" for="safetyCheckbox2">Airbag: Side</label>
            					</div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" v-model="formData.safety" id="safetyCheckbox3" name="safetyCheckbox3" class="custom-control-input">
            					  <label class="custom-control-label" for="safetyCheckbox3">Alarm</label>
            					</div>
            		          </div>
            		          <div class="col-6 col-md-6 mb-3 mb-md-0">
            				  	<div class="custom-control custom-checkbox">
            					  <input type="checkbox" v-model="formData.safety" id="safetyCheckbox4" name="safetyCheckbox4" class="custom-control-input">
            					  <label class="custom-control-label" for="safetyCheckbox4">Antilock Brakes</label>
            					</div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" v-model="formData.safety" id="safetyCheckbox5" name="safetyCheckbox5" class="custom-control-input">
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
            					  <input type="checkbox" id="echeckbox1" name="enter" v-model="formData.car_entertainment" class="custom-control-input">
            					  <label class="custom-control-label">AM/FM Stereo</label>
            					</div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" id="echeckbox2" v-model="formData.car_entertainment"  name="echeckbox2" class="custom-control-input">
            					  <label class="custom-control-label" for="echeckbox2">Cassette Player</label>
            					</div>
        	        </div>
        				  <div class="col-6 col-md-6 mb-3 mb-md-0">
            				  <div class="custom-control custom-checkbox">
            					  <input type="checkbox" id="echeckbox3" v-model="formData.car_entertainment"  name="echeckbox3" class="custom-control-input">
            					  <label class="custom-control-label" for="echeckbox3">CD (Single Disc)</label>
            					</div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" id="echeckbox4" v-model="formData.car_entertainment"  name="echeckbox4" class="custom-control-input">
            					  <label class="custom-control-label" for="echeckbox4">CD (Multi Disc)</label>
            					</div>
        		      </div>
        		      <div class="col-6 col-md-6 mb-3 mb-md-0">
          				  	<div class="custom-control custom-checkbox">
            					  <input type="checkbox" id="echeckbox5" v-model="formData.car_entertainment"  name="echeckbox5" class="custom-control-input">
            					  <label class="custom-control-label" for="echeckbox5">MP3 (Single Disc)</label>
          					 </div>
            					<div class="custom-control custom-checkbox">
            					  <input type="checkbox" id="echeckbox6" v-model="formData.car_entertainment"  name="echeckbox6" class="custom-control-input">
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
          					  <input type="checkbox" id="customCheckboxInline1" name="customCheckboxInline1" v-model="formData.others" class="custom-control-input">
          					  <label class="custom-control-label" for="customCheckboxInline1">Alloy Wheels</label>
          					</div>

          					<div class="custom-control custom-checkbox">
          					  <input type="checkbox" id="customCheckboxInline2" name="customCheckboxInline1" v-model="formData.others" class="custom-control-input">
          					  <label class="custom-control-label" for="customCheckboxInline2">Moonroof/Sunroof</label>
          					</div>
    		          </div>
    		          <div class="custom-control custom-checkbox">
          					  <input type="checkbox" id="customCheckboxInline2" name="customCheckboxInline1" v-model="formData.others" class="custom-control-input">
          					  <label class="custom-control-label" for="customCheckboxInline2">Third Row Seats</label>
    					     </div>
    		      </div>
    		  </div>
          <!--  End Section 7 -->

          <!-- Section 8-->
          <div class="mb-7">
             
                <!-- Price and description -->
                <div class="border-bottom pb-3 mb-5">
                  <h2 class="h6 text-secondary mb-0">Price and Description</h2>
                </div>
                <!-- End Price and description-->

                <!-- Input -->
                <div class="form-group mb-5">
                  <div class="js-focus-state">
                    <label class="form-label" for="listingPrice">Price</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text" id="listingPriceLabel">
                          <span class="fas fa-dollar-sign"></span>
                        </span>
                      </div>
                      <input type="number" class="form-control" name="price" v-model="formData.price" id="listingPrice" placeholder="Price" aria-label="Price" aria-describedby="listingPriceLabel">
                    </div>
                  </div>
                </div>
                <!-- End Input -->
                <div class="row">
                  <div class="col-lg-12 mb-3">
                    <!-- Input -->
                    <div class="js-form-message mb-3">
                      <label class="form-label">
                        Car description
                        <span class="text-danger">*</span>
                      </label>

                      <div class="input-group">
                        <textarea class="form-control" rows="6" name="text" placeholder="Car description" v-model="formData.desc" aria-label="Listing description" required
                                  data-msg="Please enter a property description."
                                  data-error-class="u-has-error"
                                  data-success-class="u-has-success"></textarea>
                      </div>
                    </div>
                    <!-- End Input -->
                  </div>
                </div>
          </div>
          <!-- End Section 8 -->

          <!-- Section 9 -->
         <div class="mb-7">
                  <!-- Title -->
                  <div class="border-bottom pb-3 mb-5">
                    <h2 class="h6 text-secondary mb-0">Your Contacts Information</h2>
                  </div>
                  <!-- End Title -->

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <!-- Input -->
                      <div class="form-group">
                        <div class="js-focus-state">
                          <label class="form-label" for="utilitiesMortgage">First Name</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="utilitiesMortgageLabel">
                                <span class="fas fa-hand-holding-usd"></span>
                              </span>
                            </div>
                            <input type="text" class="form-control" name="mortgage" v-model="formData.first_name"  id="utilitiesMortgage" placeholder="Mortgage" aria-label="Mortgage" aria-describedby="utilitiesMortgageLabel">
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->
                    </div>

                    <div class="col-lg-6 mb-3">
                      <!-- Input -->
                      <div class="form-group">
                        <div class="js-focus-state">
                          <label class="form-label" for="utilitiesEnergy">Last Name</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="utilitiesEnergyLabel">
                                <span class="fas fa-burn"></span>
                              </span>
                            </div>
                            <input type="text" class="form-control" name="energy" id="utilitiesEnergy"  v-model="formData.last_name"  placeholder="Energy" aria-label="Energy" aria-describedby="utilitiesEnergyLabel">
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6 mb-3">
                      <!-- Input -->
                      <div class="form-group">
                        <div class="js-focus-state">
                          <label class="form-label" for="utilitiesWater">Email Address</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="utilitiesWaterLabel">
                                <span class="fas fa-tint"></span>
                              </span>
                            </div>
                            <input type="text" class="form-control" name="water" v-model="formData.email_address"  id="utilitiesWater" placeholder="Water" aria-label="Water" aria-describedby="utilitiesWaterLabel">
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->
                    </div>

                    <div class="col-lg-6 mb-3">
                      <!-- Input -->
                      <div class="form-group">
                        <div class="js-focus-state">
                          <label class="form-label" for="utilitiesHomeInsurance">Phone Number</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="utilitiesHomeInsuranceLabel">
                                <span class="fas fa-shield-alt"></span>
                              </span>
                            </div>
                            <input type="text" class="form-control" name="HomeInsurance" id="utilitiesHomeInsurance" v-model="formData.phone_number"  placeholder="Home insurance" aria-label="Home insurance" aria-describedby="utilitiesHomeInsuranceLabel">
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->
                    </div>
                  </div>
        </div>
          <!-- End Section 9 -->

          <!-- Sectin 10-->
          <div class="mb-7">
            <!-- Title -->
            <div class="border-bottom pb-3 mb-5">
              <h2 class="h6 text-secondary mb-0">Upload images</h2>
              <small>Browse your device and upload images</small>
         	    <small class="d-block text-muted">Maximum file size is 2MB</small>
            </div>
            <!-- End Title -->
			
			       <div class="row">
	              <div class="col-lg-3">
                    <!-- File Attachment Input -->
  			            <div class="u-dropzone">
  			              <div class="dz-message">
  			                <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG" data-parent="#uploadForm">
  			                 <span class="d-block mb-2">Add Image</span>
                         <small class="d-block text-muted">Maximum file size is 2MB</small>
                         <input  
                           @change="onFileSelected" 
                           id="imagesAttachmentInput" 
                           name="images-attachment" 
                           type="file" 
                           class="js-custom-file-attach file-attachment-input__label"
                          data-result-text-target="#fileUploadText">
    			              </div>
  			            </div>
  			            <!-- End File Attachment Input -->
	              </div>
                 <div class="col-lg-3">
                   
                    <!-- File Attachment Input -->
                    <div class="u-dropzone">
                      <div class="dz-message">
                        <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                             data-parent="#uploadForm">
                          <span class="d-block mb-2">Add Image</span>
                          <small class="d-block text-muted">Maximum file size is 2MB</small>
                           <input @change="onFileSelected" 
                              id="imagesAttachmentInput" 
                              name="images-attachment"
                              type="file"class="js-custom-file-attach file-attachment-input__label" data-result-text-target="#fileUploadText">
                          </div>
                    </div>
                     <!-- End File Attachment Input -->
                 </div>
                 <div class="col-lg-3">
                    <!-- File Attachment Input -->
                    <div class="u-dropzone">
                      <div class="dz-message">
                        <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG"
                             data-parent="#uploadForm">
                        <span class="d-block mb-2">Add Image</span>
                        <small class="d-block text-muted">Maximum file size is 2MB</small>
                        <input @change="onFileSelected" id="imagesAttachmentInput" name="images-attachment" type="file" class="js-custom-file-attach file-attachment-input__label"
                               data-result-text-target="#fileUploadText">
                      </div>
                    </div>
                     <!-- End File Attachment Input -->

                 </div>
              <div class="col-lg-3">
                 
                    <!-- File Attachment Input -->
                    <div class="u-dropzone">
                      <div class="dz-message">
                        <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG" data-parent="#uploadForm">
                        <span class="d-block mb-2">Add Image</span>
                          <small class="d-block text-muted">Maximum file size is 2MB</small>
                          <input @change="onFileSelected" 
                                 id="imagesAttachmentInput" 
                                 name="images-attachment" 
                                 type="file" 
                                 class="js-custom-file-attach file-attachment-input__label"
                                 data-result-text-target="#fileUploadText">
                      </div>
                    </div>
                     <!-- End File Attachment Input -->
                 </div>
                <div class="col-lg-3">
                    <!-- File Attachment Input -->
                    <div class="u-dropzone">
                      <div class="dz-message">
                        <img class="js-svg-injector max-width-10 mb-3" src="../../assets/svg/illustrations/add-file.svg" alt="SVG" data-parent="#uploadForm">
                        <span class="d-block mb-2">Add Image</span>
                        <small class="d-block text-muted">Maximum file size is 2MB</small>
                        <input
                          @change="onFileSelected"
                          id="imagesAttachmentInput"
                          name="images-attachment"
                          type="file"
                          class="js-custom-file-attach file-attachment-input__label"
                          data-result-text-target="#fileUploadText">
                      </div>
                    </div>
                     <!-- End File Attachment Input -->
                 </div>
              </div>
          </div>
          <!-- End Section  -->

          <button type="submit" class="btn btn-primary btn-block transition-3d-hover">Submit</button>
        </form>
      </div>
      </div>
    </div>
    <!-- End Upload Form Section -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return {
      step: 1,
			formData: {
			   car_entertainment: [],
         car_safety: [],
         car_others: [],
         car_features: [],
         seats: [],
         images: null
			},
      selectedFile: null
		}
	},
    computed: {
    ...mapGetters([
        'UserCarDetails',
        'AllDetails',
        'AllModels',
        'AllMakes',
        'AllYears',
    ]),
  },
  mounted() {
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
  },
  created() {
     this.$store.dispatch('GET_VEHICLE_MAKE')
  },
  methods: {
    onfileSelected(event) {
      this.formData.images = event.target.files[0]
    },

    
    changeLocation( e ) {
    
       if(e.target.options.selectedIndex > -1) {
             this.details.make = e.target.options[e.target.options.selectedIndex].dataset.foo
        }
       var payload = { make: this.formData.make_id,  model: this.formData.model_id, year: this.formData.year_id }
       this.$store.dispatch('GET_VEHICLE_MODEL', this.formData.make_id)
       this.$store.dispatch('GET_VEHICLE_YEARS', payload)
       this.$store.dispatch('GET_VEHICLE_DETAILS', payload)
       // this.updateListing(this.formData)
    },
  }
}
</script>