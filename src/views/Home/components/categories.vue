<template>
     <!-- Categories-->
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card shadow mb-3 mb-lg-0">
              <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                        <img  src="../../../assets/img/car.png" alt="SVG" width="150px" 
                            >
                      </figure>
                      <h3 class="h5">Sedan</h3>
                      <router-link to="/cars?bodystyle=sedan" class="font-size-1" href="#" >Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card shadow mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                        <img  src="../../../assets/img/coup.png" alt="SVG"
                               width="150px" 
                            >
                      </figure>
                      <h3 class="h5">Coupe</h3>
                      <router-link to="/cars?bodystyle=coupe" class="font-size-1" href="#">Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                   <div class="card shadow-primary-lg mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                            <img  src="../../../assets/img/minivan.jpg" alt="SVG"
                               width="150px"
                            >
                      </figure>
                      <h3 class="h5">Minivan/Van</h3>
                      <router-link to="/cars?bodystyle=minivan" class="font-size-1" >Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
            </div>
            <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                <div class="card shadow">
                  <!-- Icon Blocks -->
                  <div class="card-body text-center center-text center-block p-5">
                    <figure class="mx-auto ie-height-56 w-100 mb-4">
                          <img  src="../../../assets/img/suv.png" alt="SVG"
                             width="150px" 
                          >
                    </figure>
                    <h3 class="h5">SUV</h3>
                    <router-link to="/cars?bodystyle=suv" class="font-size-1" href="#">Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                  </div>
                  <!-- End Icon Blocks -->
                </div>
            </div>
             <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                <div class="card shadow mb-3 mb-lg-0">
                  <!-- Icon Blocks -->
                  <div class="card-body text-center center-text center-block p-5">
                    <figure class="mx-auto ie-height-56 w-100 mb-4">
                      <img  src="../../../assets/img/truck.png" alt="SVG" width="150px" 
                          >
                    </figure>
                    <h3 class="h5">Truck</h3>
                    <router-link class="font-size-1" to="/cars?bodystyle=truck">
                      Explore now 
                      <span class="fas fa-angle-right align-middle ml-2"></span>
                    </router-link>
                  </div>
                  <!-- End Icon Blocks -->
                </div>
            </div>
           <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                  <div class="card shadow mb-3 mb-lg-0 ">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                        <img  src="../../../assets/img/compact.png" alt="SVG"
                               width="150px" 
                            >
                      </figure>
                      <h3 class="h5">Compact</h3>
                      <router-link class="font-size-1" to="/cars?bodystyle=compact">Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
             </div>
             <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                 <div class="card shadow mb-3 mb-lg-0">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                            <img  src="../../../assets/img/comercial.png" alt="SVG"
                               width="150px"
                            >
                      </figure>
                      <h3 class="h5">Comercial</h3>
                      <router-link to="/cars?bodystyle=comercial" class=" font-size-1" href="#">Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
             </div>
              <div class="col-md-4 col-sm-6 col-xs-6 col-lg-3">
                   <div class="card shadow">
                    <!-- Icon Blocks -->
                    <div class="card-body text-center center-text center-block p-5">
                      <figure class="mx-auto ie-height-56 w-100 mb-4">
                            <img  src="../../../assets/img/crossover.png" alt="SVG"
                               width="150px" 
                            >
                      </figure>
                      <h3 class="h5">Crossover</h3>
                      <router-link to="/cars?bodystyle=crossover" class="font-size-1">Explore now <span class="fas fa-angle-right align-middle ml-2"></span></router-link>
                    </div>
                    <!-- End Icon Blocks -->
                  </div>
             </div>
          </div>
        </div>
       <!-- End Categories-->
</template>