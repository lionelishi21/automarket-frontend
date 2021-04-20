<template>
     <!-- Categories-->
        <div class="container">
          
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card mb-3 mb-lg-0">
              <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100 mb-1">
                        <img  src="../../../assets/img/car.png" alt="SVG" width="100px" 
                            >
                      </figure>
                      <h3 class="h5">Sedan
                        <br>
                         <router-link to="/cars?bodystyle=sedan" class="font-size-1" href="#" >Explore now 
                         <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                      </h3>
                     
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card  mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100 mb-1">
                        <img  src="../../../assets/img/coup.png" alt="SVG"
                               width="100px" 
                            >
                      </figure>
                      <h3 class="h5">Coupe
                          <br>
                            <router-link to="/cars?bodystyle=coupe" class="font-size-1" 
                              href="#">Explore now <span class="fas fa-angle-right align-middle ml-1">
                            </span></router-link>
                      </h3>
                    
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                   <div class="card mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100 mb-1">
                            <img  src="../../../assets/img/minivan.jpg" alt="SVG"
                               width="100px"
                            >
                      </figure>
                      <h3 class="h5">Minivan/Van
                        <br>
                            <router-link to="/cars?bodystyle=minivan" class="font-size-1" >Explore now 
                              <span class="fas fa-angle-right align-middle ml-1"></span>
                            </router-link>
                      </h3>
                  
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                <div class="card mb-3 mb-lg-0">
                  <!-- Icon Blocks -->
                  <div class="card-body text-center center-text center-block">
                    <figure class="mx-auto ie-height-56 w-100 mb-2">
                          <img  src="../../../assets/img/suv.png" alt="SVG"
                             width="100px" 
                          >
                    </figure>
                    <h3 class="h5">SUV
                      <br>
                         <router-link to="/cars?bodystyle=suv" class="font-size-1" href="#">Explore now 
                         <span class="fas fa-angle-right align-middle ml-1"></span></router-link>
                    </h3>
                 
                  </div>
                  <!-- End Icon Blocks -->
                </div>
            </div>
          </div>

          <div class="row mt-3">
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                <div class="card shadow mb-lg-0">
                  <!-- Icon Blocks -->
                  <div class="card-body text-center center-text center-block">
                    <figure class="mx-auto ie-height-56 w-100 mb-1">
                      <img  src="../../../assets/img/truck.png" alt="SVG" width="100px" 
                          >
                    </figure>
                    <h3 class="h5">Truck <br>
                     <router-link class="font-size-1" to="/cars?bodystyle=truck">
                      Explore now 
                      <span class="fas fa-angle-right align-middle ml-1"></span>
                     </router-link>
                    </h3>
                
                  </div>
                  <!-- End Icon Blocks -->
                </div>
            </div>
             <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card shadow mb-3 mb-lg-0 ">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100 mb-1">
                        <img  src="../../../assets/img/compact.png" alt="SVG"
                               width="100px" 
                            >
                      </figure>
                      <h3 class="h5">Compact <br>
                          <router-link class="font-size-1" to="/cars?bodystyle=compact">
                             Explore now <span class="fas fa-angle-right align-middle ml-1"></span>
                          </router-link>
                      </h3>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
             </div>
             <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                 <div class="card shadow mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100 mb-2">
                            <img  src="../../../assets/img/comercial.png" alt="SVG"
                               width="90px"
                            >
                      </figure>
                      <h3 class="h5">Comercial
                        <br>
                          <router-link to="/cars?bodystyle=comercial" class=" font-size-1" href="#">Explore now 
                            <span class="fas fa-angle-right align-middle ml-1"></span>
                          </router-link>
                      </h3>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
             </div>
              <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                   <div class="card shadow">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block">
                      <figure class="mx-auto ie-height-56 w-100">
                            <img  src="../../../assets/img/crossover.png" alt="SVG"
                               width="85px">
                      </figure>
                      <h3 class="h5">Crossover <br>
                            <router-link to="/cars?bodystyle=crossover" class="font-size-1">Explore now 
                              <span class="fas fa-angle-right align-middle"></span>
                            </router-link>
                      </h3>
                    </div>

                    <!-- End Icon Blocks -->
                  </div>
             </div>
          </div>


        </div>
       <!-- End Categories-->
</template>