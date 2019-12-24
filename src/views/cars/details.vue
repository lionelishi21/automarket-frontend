<template>
<div>
<!-- Hero Section -->
<div class="container space-top-1 space-top-sm-2">
  <div class="row">
    <div class="col-lg-7 mb-7 mb-lg-0">
      <div class="pr-lg-4">
        <div class="position-relative">
          <!-- Main Slider -->
          <div id="heroSlider" class="js-slick-carousel u-slick border rounded"
               data-fade="true"
               data-arrows-classes="d-none d-sm-inline-block u-slick__arrow u-slick__arrow--flat-white content-centered-y shadow-soft rounded-circle"
               data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-3"
               data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-3"
               data-nav-for="#heroSliderNav">
        
            <div class="js-slide">
              <img class="img-fluid w-100" src="../../assets/img/480x320/car1.jpg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="img-fluid w-100" src="../../assets/img/480x320/car2.jpg" alt="Image Description">
            </div>
            <div class="js-slide">
              <img class="img-fluid w-100" src="../../assets/img/480x320/car3.jpg" alt="Image Description">
        
            </div>
          </div>
          <!-- End Main Slider -->

          <!-- Slider Nav -->
          <div class="position-absolute bottom-0 right-0 left-0 px-4 py-3" style="margin-bottom: -13%">
            <div id="heroSliderNav" class="js-slick-carousel u-slick u-slick--gutters-1 u-slick--transform-off max-width-40 mx-auto"
                 data-slides-show="3"
                 data-is-thumbs="true"
                 data-is-thumbs-progress="false"
                 data-thumbs-progress-options='{
                   "color": "#377DFF",
                   "width": 15
                 }'
                 data-thumbs-progress-container=".js-slick-thumb-progress"
                 data-nav-for="#heroSlider">
              <div class="js-slide p-1">
                <a class="js-slick-thumb-progress position-relative d-block" href="javascript:;"">
                  <img class="img-fluid " src="../../assets/img/480x320/car1.jpg" alt="Image Description">
                </a>
              </div>
              <div class="js-slide p-1">
                <a class="js-slick-thumb-progress position-relative d-block" href="javascript:;">
                  <img class="img-fluid " src="../../assets/img/480x320/car2.jpg" alt="Image Description">
                </a>
              </div>
              <div class="js-slide p-1">
                <a class="js-slick-thumb-progress position-relative d-blockr" href="javascript:;">
                  <img class="img-fluid " src="../../assets/img/480x320/car3.jpg" alt="Image Description">
                </a>
              </div>
            </div>
          </div>
          <!-- End Slider Nav -->
        </div>
      </div>
    </div>
    <hr>
    <!-- Product Description -->
    <div class="col-lg-5">
      <!-- Rating -->
      <div class="d-flex align-items-center small mb-2">
        <div class="text-warning mr-2">
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
        </div>
        <a class="js-go-to link-muted" href="#reviewSection"
           data-target="#reviewSection"
           data-compensation="#header"
           data-type="static">Read all 287 reviews</a>
      </div>
      <!-- End Rating -->

      <!-- Title -->
      <div class="mb-5">
        <h1 class="h3 font-weight-medium">New Era 9Forty LA Dodgers adjustable cap in black</h1>
        <p>American label New Era manufacturing baseball hats for teams since the 1930s.</p>
      </div>
      <!-- End Title -->

      <!-- Price -->
      <div class="mb-5">
        <h2 class="font-size-1 text-secondary font-weight-medium mb-0">price:</h2>
        <span class="font-size-2 font-weight-medium">$159.99</span>
      </div>
      <!-- End Price -->

      <div class="mb-4">
        <button type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Contact Seller</button>
      </div>

      <!-- Help Link -->
      <div class="media align-items-center">
        <span id="icon4" class="svg-preloader ie-height-48 w-100 max-width-6 mr-2">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-4.svg" alt="SVG"
               data-parent="#icon4">
        </span>
        <div class="media-body text-secondary small">
          <span class="font-weight-medium mr-1">Need Help?</span>
          <a class="link-muted" href="#">Chat now</a>
        </div>
      </div>
      <!-- End Help Link -->

    </div>
    <!-- End Product Description -->
  </div>
</div>
<!-- End Hero Section -->
<hr>
    <!-- Product Description Section -->
    <div class="container" style="margin-top: 50px">
      <div class="row">
        <div class="col-md-6 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Seller Notes</h3>
            <p>{{details.seller_notes}}</p>
          </div>
        </div>

        <div class="col-md-6 mb-5 mb-md-0">
          <h3 class="h5 font-weight-medium">Basics</h3>

          <div class="row">
            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Fuel Type:{{details.fuel_type}}</li>
                <li class="py-1">Interior Color: {{details.intcolor}}</li>
                <li class="py-1">Drivetrain: {{details.drivetrain}}</li>
                <li class="py-1">Engine: {{details.engine}}</li>
              </ul>
            </div>

            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Milage: {{details.milage}}</li>
                <li class="py-1">Exterior Color: {{details.extcolor}}</li>
                <li class="py-1">Transmission: {{details.trans}}</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    <hr>
    <!-- End Product Description Section -->
    <!-- Product Description Section -->
    <div class="container ">
      <div class="row">
        <div class="col-md-4 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Entertainment</h3>
            <p>{{details.seller_notes}}</p>
          </div>
        </div>

        <div class="col-md-4 mb-5 mb-md-0">
          <h3 class="h5 font-weight-medium">Safety</h3>

          <div class="row">
            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Backup Camera</li>
                <li class="py-1">Brake Assist</li>
              </ul>
            </div>
          </div>
        </div>

         <div class="col-md-4 mb-5 mb-md-0">
          <h3 class="h5 font-weight-medium">Exterior</h3>

          <div class="row">
            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Tow Hitch</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
    <!-- End Product Description Section -->
<hr>

    <!-- Related Products Section -->
    <!-- End Related Products Section -->


    <!-- Review Section goes here-->
 
    <!-- End Review Section -->




</div>
</template>
<script>
export default {
	data() {
		return {
			details: {
				 id: 2,
			 	img: '@/assets/companies_logos/generalaccident.jpg',
			 	title: 'Sales Rep',
			 	company: 'General Accident',
			 	desc: 'The role is responsible for designing, coding and modifying websites',
			 	location: 'Portland, Buffbay',
			 	salary: '25k - 60k',
			 	type: 'Fulltime'
			}
		}
	},
  mounted: function(){
        // initialization of svg injector module
    $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
     // initialization of slick carousel
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');

    // initialization of quantity counter
    $.HSCore.components.HSQantityCounter.init('.js-quantity');
  },
	methods: {
		company_profile() {
			var id = 1
			this.$router.push('/company/details/'+id)
		}
	}
}
</script>