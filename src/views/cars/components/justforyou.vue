<template>
    <div class="container">
      <!-- Title -->
      <div class="w-md-80 w-lg-40 text-center mx-md-auto mb-9">
        <h2 class="h3 font-weight-medium">Just for you</h2>
      </div>
      <!-- End Title -->

      <div class="js-slick-carousel u-slick u-slick--gutters-3 u-slick--equal-height"
           data-slides-show="4"
           data-slides-scroll="3"
           data-infinite="true"
           data-pagi-classes="text-center u-slick__pagination mt-7 mb-0"
           data-responsive='[{
             "breakpoint": 992,
             "settings": {
               "slidesToShow": 3
             }
           }, {
             "breakpoint": 720,
             "settings": {
               "slidesToShow": 2
             }
           }, {
             "breakpoint": 480,
             "settings": {
               "slidesToShow": 1
             }
           }]'>
        <div class="js-slide">
          <!-- Product -->
          <div class="card text-center w-100">
            <div class="position-relative">
              <!-- <img class="card-img-top" src="../../assets/img/300x180/img3.jpg" alt="Image Description"> -->

              <div class="position-absolute top-0 left-0 pt-3 pl-3">
                <span class="badge badge-success badge-pill">New arrival</span>
              </div>
              <div class="position-absolute top-0 right-0 pt-3 pr-3">
                <button type="button" class="btn btn-sm btn-icon btn-outline-secondary rounded-circle" data-toggle="tooltip" data-placement="top" title="Save for later">
                  <span class="fas fa-heart btn-icon__inner"></span>
                </button>
              </div>
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Accessories</a>
                <h3 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Herschel backpack in dark blue</a>
                </h3>
                <div class="d-block font-size-1">
                  <span class="font-weight-medium">$56.99</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <div class="mb-3">
                <a class="d-inline-flex align-items-center small" href="#">
                  <div class="text-warning mr-2">
                    <small class="far fa-star text-muted"></small>
                    <small class="far fa-star text-muted"></small>
                    <small class="far fa-star text-muted"></small>
                    <small class="far fa-star text-muted"></small>
                    <small class="far fa-star text-muted"></small>
                  </div>
                  <span class="text-secondary">0</span>
                </a>
              </div>
              <button type="button" class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover">Add to Cart</button>
            </div>
          </div>
          <!-- End Product -->
        </div>
      </div>
    </div>
</template>