<template>
<div class="container min-height-100vh">
<!-- Nav Classic -->
<ul id="SVGnavIcons" class="svg-preloader nav nav-classic nav-rounded nav-shadow nav-justified border" role="tablist">
  <li class="nav-item">
    <a class="nav-link font-weight-medium active" id="pills-one-example2-tab" data-toggle="pill" href="#pills-one-example2" role="tab" aria-controls="pills-one-example2" aria-selected="true">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-13.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
       Active Ads<span class="badge badge-danger">2</span>
      </div>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link font-weight-medium" id="pills-two-example2-tab" data-toggle="pill" href="#pills-two-example2" role="tab" aria-controls="pills-two-example2" aria-selected="false">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-63.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
        Inactive
      </div>
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link font-weight-medium" id="pills-three-example2-tab" data-toggle="pill" href="#pills-three-example2" role="tab" aria-controls="pills-three-example2" aria-selected="false">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-5.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
        Pending
      </div>
    </a>
  </li>
   <li class="nav-item">
    <a class="nav-link font-weight-medium" id="pills-three-example2-tab" data-toggle="pill" href="#pills-three-example2" role="tab" aria-controls="pills-three-example2" aria-selected="false">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-5.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
        Reject
      </div>
    </a>
  </li>
     <li class="nav-item">
    <a class="nav-link font-weight-medium" id="pills-three-example2-tab" data-toggle="pill" href="#pills-three-example2" role="tab" aria-controls="pills-three-example2" aria-selected="false">
      <div class="d-md-flex justify-content-md-center align-items-md-center">
        <figure class="ie-height-40 d-none d-md-block w-100 max-width-6 mr-3">
          <img class="js-svg-injector" src="../../assets/svg/icons/icon-5.svg" alt="SVG"
               data-parent="#SVGnavIcons">
        </figure>
       Deleted
      </div>
    </a>
  </li>
</ul>
<!-- End Nav Classic -->

<!-- Tab Content -->
<div class="tab-content">
  <div class="tab-pane fade pt-6 show active" id="pills-one-example2" role="tabpanel" aria-labelledby="pills-one-example2-tab">
    <!-- Title -->
    <div class="mb-3">
      <h2 class="h5">Active</h2>
    </div>
    <!-- End Title -->

    <!-- Key Facts -->
    <div class="row">
  <!-- Jobs -->
      <div class="card mb-5" v-for="car in cars">
          <!-- Property Item -->
          <div class="border-bottom">
            <div class="row">
              <div class="col-md-4 d-md-flex align-items-md-start flex-md-column mb-5 mb-md-0">

                <!-- Gallery -->
                <a class="js-fancybox u-media-viewer mb-3" href="javascript:;"
                   :data-src="car.lrgimg"
                   data-fancybox="fancyboxGalleryExample1"
                   data-caption="Front in frames - image #01"
                   data-speed="700"
                   data-is-infinite="true">
                  <img class="img-fluid w-100" :src="car.img" alt="Image Description">

                  <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
                    <span class="btn btn-icon btn-sm btn-white">
                      <span class="fas fa-images btn-icon__inner"></span>
                    </span>
                  </div>
                </a>
			
                <img class="js-fancybox d-none" alt="Image Description"
                     data-fancybox="fancyboxGalleryExample1"
                     data-src="../../assets/img/1920x1080/img37.jpg"
                     data-caption="Front in frames - image #02"
                     data-speed="700"
                     data-is-infinite="true">
                <img class="js-fancybox d-none" alt="Image Description"
                     data-caption="Front in frames - image #03"
                     data-src="../../assets/img/1920x1080/img38.jpg"
                     data-fancybox="fancyboxGalleryExample1"
                     data-speed="700"
                     data-is-infinite="true">
                <!-- End Gallery -->
            
              </div>

              <div class="col-md-8">
                <div class="row">

                  <div class="col-12">
                    <h2 class="h5">
                      <a href="property-description.html">{{car.year}} {{car.make}} {{car.model}} | <small>{{car.milage}} </small>  <span class="badge badge-success">10 days remaing active</span></a>
                    </h2>
                  </div>
                  <div class="col-12">
                    <h2 class="h5 mb-1">
                      <small>JMD</small>
                      <a href="property-description.html"> ${{car.price}}</a>
                    </h2>
                  </div>
                <!--   <div class="col-4 text-right">
                    <span class="badge badge-success">New</span>
                  </div> -->
                </div>

                <!-- Category -->
                <div>
                  <a class="font-size-1" href="property-description.html">
                     <span class="fas fa-list-alt mr-1"></span>
                     {{car.make}} > {{car.model}}
                  </a>
                </div>
                <!-- Category -->

                <!-- Location -->
                <div>
                  <a class="font-size-1" href="property-description.html">
                    <span class="fas fa-map-marker-alt mr-1"></span>
                    {{car.location}}
                  </a>
                </div>
                <!-- End Location -->

                <!-- Contacts -->
                <div class="d-flex align-items-center font-size-1">
                  <a class="text-secondary mr-4" href="javascript:;">
                    <b>Ext.</b> Color:{{car.extcolor}}
                  </a>
              
                  <a class="text-secondary mr-4" href="javascript:;">
                    <span class="fas fa-star mr-1"></span>
                    <b>Transimition:</b> {{car.transmission}}
                  </a>

                  <a class="btn btn-sm btn-soft-primary transition-3d-hover ml-auto" href="property-description.html">
                    Details
                    <span class="fas fa-angle-right ml-1"></span>
                  </a>
                </div>
                <!-- End Contacts -->
              </div>
            </div>
          </div>
          <!-- End Property Item -->
      </div>
      <!-- End cars -->
    </div>
    <!-- End Key Facts -->
  </div>

  <div class="tab-pane fade pt-6" id="pills-two-example2" role="tabpanel" aria-labelledby="pills-two-example2-tab">
    This extremely spacious two/three bedroom duplex apartment occupies a desirable position to the South-West of Harrogate's town centre and offers a huge amount of scope to update and re-model to suit the individual including a large eaves storage room ripe for conversion into a second bathroom.
  </div>

  <div class="tab-pane fade pt-6" id="pills-three-example2" role="tabpanel" aria-labelledby="pills-three-example2-tab">
    Accessed via a communal hall up to the first floor, the apartment opens into a split level hall. To the front elevation there is a lovely, light and airy lounge with far reaching views towards the town centre and countryside beyond. Adjoining there is a well proportioned double bedroom with a fitted wardrobe.
  </div>
</div>
<!-- End Tab Content -->
</div>
</template>
<script>
 export default {
 	data() {
 		return {
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
        }
      ],
 		}
 	},
 	mounted() {
 		$.HSCore.components.HSSVGIngector.init('.js-svg-injector');
 	}
 }
</script>