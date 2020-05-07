<template>
<VueSlickCarousel :arrows="true" :dots="true"
slidesToShow="4"
slidesToScroll="3"
infinite="true"
useCSS="text-center u-slick__pagination mt-3 mb-0"
 class="js-slick-carousel u-slick u-slick--gutters-3 u-slick--equal-height mb-5"
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
    <div class="js-slide" v-for="car in cars">
      <!-- Product -->
      <div class="card text-center w-100">
          <div class="position-relative">
           
            <img class="card-img-top" 
             :src="showCarThumbnail(car.image)"
             alt="Image Description">

          <!--   <div class="position-absolute top-0 left-0 pt-3 pl-3">
              <span class="badge badge-success badge-pill">Premium</span>
            </div> -->
            <div class="position-absolute top-0 right-0 pt-3 pr-3">
              <button 
                  type="button" 
                  class="btn btn-sm btn-icon btn-outline-secondary rounded-circle" 
                  data-toggle="tooltip" 
                  data-placement="top" 
                  title="Save for later">
                <span class="fas fa-heart btn-icon__inner"></span>
              </button>
            </div>
          </div>

          <div class="card-body pt-2 pb-0">
            <div class="mb-2">
              <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">{{car.year}} {{car.make}}</a>
              <div class="d-block font-size-1">
                <span class="font-weight-medium">{{car.price | currency}}</span>
              </div>
            </div>
          </div>

        <!--   <div class="card-footer border-0 pt-0 pb-2 px-4">
            <div class="mb-3">
              <a class="d-inline-flex align-items-center small" href="#">
                <div class="text-warning mr-2">
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="fas fa-star"></small>
                    <small class="far fa-star"></small>
                </div>
                <span class="text-secondary">0</span>
              </a>
            </div>
          </div> -->
      </div>
      <!-- End Product -->
    </div>
  </VueSlickCarousel>
</template>
<script>
	
 import VueSlickCarousel from 'vue-slick-carousel'
  // optional style for arrows & dots
 import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
	props: ['cars'],
	name: 'MyComponent',
    components: { VueSlickCarousel },
}
</script>