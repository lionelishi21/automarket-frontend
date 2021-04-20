<template>
<div>
<!-- Hero Section -->
<div class="container space-top-1 space-top-sm-2">
  <div class="row">
    <div class="col-lg-6 mb-7 mb-lg-0">
        <div class="card col-md-12 d-md-flex align-items-md-start flex-md-column mb-5 mb-md-0">
          <div class="row">
            
            <a class="u-media-viewer mb-1">
                <img class="img-fluid w-100" :src="showCarImage(CarDetails.image)" alt="">
               
                <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
                  <span @click="showMultiple(CarDetails.images)" class="btn btn-icon btn-sm btn-white">
                     <span class="fas fa-images  btn-icon__inner"></span>
                  </span>
                </div>
            </a>
            
           
            <vue-easy-lightbox
              :visible="visible"
              :imgs="imgs"
              :index="index"
              @hide="handleHide">
            </vue-easy-lightbox>
         </div>
       </div>
         <div class="row">

            <div class="col-md-3 col-xs-3 col-sm-3 d-none d-sm-block" v-for="(image, index) in CarDetails.images" :key="index">
                <!-- Gallery -->
                <a class="u-media-viewer mb-3" >
                    <img class="img-fluid w-100" :src="showCarThumbnail(image.image)" alt="Image Description">
                    <div class="position-absolute bottom-0 right-0 pb-2 pr-2">
                      <span @click="showSingle(showCarImage(image.image))" class="btn btn-icon btn-xs btn-white">
                          <span class="fas fa-images  btn-icon__inner"></span>
                      </span>
                    </div>
                </a>
            </div>

         </div>
    </div>
    <hr>
    <!-- Product Description -->
    <div class="col-lg-6">
      
      <!-- Rating -->
      <div class="d-flex align-items-center small mb-2">
        <div class="text-warning mr-2">
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
          <small class="fas fa-star"></small>
        </div>
      </div>
      <!-- End Rating -->

      <!-- Title -->
      <div class="mb-5">
        <h1 class="h3 font-weight-medium"> {{CarDetails.year}} {{CarDetails.make}} | <small> <i>{{CarDetails.model}} </i> </small></h1>
        <p>Milage: {{CarDetails.milage}}</p>
      </div>
      <!-- End Title -->

      <!-- Price -->
      <div class="mb-5">
        <h2 class="font-size-1 text-secondary font-weight-medium mb-0">price: <span class="badge badge-primage">Negotiable</span></h2>
        <span class="font-size-2 font-weight-medium">  {{ CarDetails.price | currency }} JMD  </span>
      </div>
      <!-- End Price -->
        <div  class="mb-4">
          <a class="font-size-1" href="property-description.html">
            <span class="fas fa-map-marker-alt mr-1"></span>
            {{CarDetails.location}}
          </a>
        </div>
        <div class="mb-3">
               <small>Share:</small>
                            <br>
                <ShareNetwork
                    class="btn btn-sm text-white btn-icon btn-primary transition-3d-hover"
                    network="facebook"
                    :url="'http://automarketjm.com/car/details/'+CarDetails.batch_id"
                    :title="CarDetails.year+' '+CarDetails.make"
                    :description="'cost for this'+CarDetails.price"
                    quote="Sell it a Sell"
                    hashtags="automarketjm, automarket"
                  >
                  <span class="fab fa-facebook-f btn-icon__inner"></span>
                </ShareNetwork>
                            
        </div>
      <!--  -->
      <div class="mb-4">
        <textarea  class="form-control mb-4  transition-3d-hover">I am interested in  {{CarDetails.year}} {{CarDetails.make}} {{CarDetails.model}} </textarea>
        <button @click="showModal()" type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover">Contact Seller</button>
      </div>

      <!-- Should be in a seperate component- Contact Modal -->
      <contact-modal
          :show="show_modal"
          :details="CarDetails.profile" 
          :message="'I am interested in '+CarDetails.year+' '+CarDetails.make+' '+CarDetails.model ">
      </contact-modal>  
      <!-- End Contact Modal -->

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
            <p>{{CarDetails.desc}}</p>
          </div>
        </div>

        <div class="col-md-6 mb-5 mb-md-0">
          <h3 class="h5 font-weight-medium">Basics</h3>

          <div class="row">
            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Fuel Type: <b>{{CarDetails.fuel_type}}</b></li>
                <li class="py-1">Interior Color: <b>{{CarDetails.interior_color}} </b></li>
                <!-- <li class="py-1">Drivetrain: <b>{{CarDetails.vehicle.drive}}</b></li> -->
                <li class="py-1">Steering: <b>{{CarDetails.steering}} </b></li>
              </ul>
            </div>

            <div class="col-sm-6">
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1">Milage: <b>{{CarDetails.milage}}</b></li>
                <li class="py-1">Exterior Color: <b>{{CarDetails.exterior_color}}</b></li>
                <li class="py-1">Interior Color: <b>{{CarDetails.interior_color}}</b></li>
                <!-- <li class="py-1">Transmission: <b>{{CarDetails.vehicle.transmission}}</b></li> -->
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>

       <!-- Product Description Section -->
    <div class="container" style="margin-top: 50px">
      <div class="row">
        <div class="col-md-3 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Features</h3>
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1" v-for="(feature, index) in CarDetails.features" :key="index">{{feature.name}}</li>
              </ul>
          </div>
        </div>
         <div class="col-md-3 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Entertainments</h3>
              <ul class="text-secondary pl-3 mb-0">
                <li class="py-1" v-for="(enter, index) in CarDetails.entertainment" :key="index">{{enter.name}}</li>
              </ul>
          </div>
        </div>
        <div class="col-md-3 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Safety</h3>
              <ul class="text-secondary pl-3 mb-0">
                  <li class="py-1" v-for="(safey, index) in CarDetails.safety" :key="index">{{safey.name}}</li>
              </ul>
          </div>
        </div>
         <div class="col-md-3 mb-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Seat</h3>
              <ul class="text-secondary pl-3 mb-0">
               <li class="py-1" v-for="(seat, index) in CarDetails.seat" :key="index">{{seat.name}}</li>
              </ul>
          </div>
        </div>

        <div class="col-md-3 mb-5 mt-5 mb-md-0">
          <div class="pr-lg-4">
            <h3 class="h5 font-weight-medium">Other</h3>
              <ul class="text-secondary pl-3 mb-0">
               <li class="py-1" v-for="(other, index) in CarDetails.other" :key="index">{{other.name}}</li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <hr>
    <!-- End Product Description Section -->
    <br>
</div>
</template>
<script>

import ContactModal from './components/ModalContact.vue';
import { mapGetters } from 'vuex'
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  components: { ContactModal, VueEasyLightbox },
	data() {
		return {
      show_modal: false,
      imgs: '',  // Img Url , string or Array of string
      visible: false,
      index: 0   // default: 0
     }
     
	},
  computed: {
    ...mapGetters([
        'CarDetails'
    ]),
  },
  beforeUpdate() {
    //  $.HSCore.components.HSSVGIngector.init('.js-svg-injector');
  },
  created() {

      var batch_id = this.$route.params.id;
      this.$store.dispatch('GET_CAR_DETAILS', batch_id);
      this.$store.dispatch('COUNT_PAGE_VISTS', batch_id);
  },
	methods: {
		company_profile() {
			var id = 1
			this.$router.push('/company/details/'+id)
		},
    showModal() {
      this.show_modal = false
      this.show_modal = true
    },
   handleHide() {
      this.visible = false
    },
      show() {
      this.visible = true
    },
    showSingle(img) {
      this.imgs = img
      // or
      // this.imgs = { title: 'this is a placeholder', src: 'http://via.placeholder.com/350x150' }
      this.show()
    },
    showMultiple(images) {
    
    this.imgs  = []
      var i;

      for ( i = 0; i < images.length; i++)  {
        this.imgs.push(this.showCarImage(images[i].image));
        console.log(images[i])
      }      

      console.log(this.imgs)
      this.index = 1  // index of imgList
      this.show()
    },

	}
}
</script>