<template>
  <!-- Hero Section -->
    <div class="position-relative">
      <!-- Slick Carousel -->
      <div class="js-slick-carousel u-slick"
           data-fade="true"
           data-autoplay="true"
           data-speed="5000"
           data-infinite="true">
        <div class="js-slide">
          <div class="bg-img-hero" style="height: 350px; background-image: url(../../assets/img/1920x800/img1.jpg);"></div>
        </div>
        <div class="js-slide">
          <div class="bg-img-hero" style="height: 350px; background-image: url(,,./../assets/img/1920x800/img17.jpg);"></div>
        </div>
      </div>

      <!-- End Slick Carousel -->
      <div class="container position-absolute right-0 bottom-0 left-0 space-bottom-2 " style="margin-bottom: -7%">


        <div class="card border-0">
          <!-- Info Link -->
          <a class="" href="#">
            <span class="btn btn-xs btn-soft-white btn-pill font-weight-semi-bold mr-3 text-primary">Advance Search <i class=" fa fa-arrow-right"></i></span>
            <span class="d-block d-sm-inline-block">
            </span>
          </a>
          <!-- End info link -->

          <div class="card-body  p-3">
          

               <!-- Search for cars-->
              <div class="col-lg-12">
                  <div class="row">
                         <div class="col-lg-4 mb-lg-0">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>New & Used Cars</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4 mb-lg-0">
                          <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>All Makes</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                         </div>
                        <div class="col-lg-4 mb-lg-0">
                          <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>All Models</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                         </div>
                  </div>
                  <div class="row">
                         <div class="col-lg-4 mb-lg-0">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>No Max Price</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                          </div>
                          <div class="col-lg-4 mb-lg-0">
                              <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1">
                                  <option>Locations / Parish</option>
                                  <option>2</option>
                                  <option>3</option>
                                  <option>4</option>
                                  <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                          <button type="button" class="btn btn-block btn-success">Search</button>
                        </div>
                  </div>
              </div>
              <!-- Search for cars ended -->
            </div>
        </div>
      </div>
    </div>
    <!-- End Hero Section -->
</template>
<script>
  export default {
      data() {
        return{

        }
      },
      mounted(){
      // Initialization of svg injector
      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');

      // initialization of slick carousel
      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

      // initialization of google map
      $.HSCore.components.HSGMap.init('.js-g-map');
    }
  }
</script>