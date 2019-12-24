<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">

	<hero-component></hero-component>
 
  <!-- Divider -->
    <div class="container">
      <hr class="my-0">
    </div>
  <!-- End Divider -->

  <!-- Cards Section -->
  <div class="container space-2">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <h2 class="font-weight-medium">Trending Near You</h2>
        <small>Location: Kingston <a href="#">change</a></small>
      </div>
      <rec-sys></rec-sys>
  </div>
  <!-- End Cards Section -->

  <hr class="my-0">

  <!-- Cards Section -->
  <div class="container space-2">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <h2 class="font-weight-medium">Browse Categories</h2>
      </div>
    <cat-View></cat-View>
  </div>
  <!-- End Cards Section -->
<hr>

   <!-- Cards Section -->
  <div class="container">
      <!-- Title -->
      <div class="row">
          <div class="col-md-3">
             <div class="mb-10 text-center">
                <h2 class="h1 font-weight-semi-bold"> Hot Cars</h2>
              </div>

              <img class="js-svg-injector" src="../../assets/img/hotcar.png" alt="SVG"
                         width="250px" 
                       data-parent="#SVGkeyFeatures">
             </div>
          <div class="col-md-9">
             <div class="row">
                <!-- Property Item -->
                <div class="card mb-5 col-md-3" v-for="car in recsys">
                  <!-- Gallery -->
                  <a class="js-fancybox u-media-viewer" href="javascript:;"
                     :data-src="car.lrgimg"
                     :data-fancybox="'fancyboxGalleryExample'+car.id"
                     data-caption="Front in frames - image #01"
                     data-speed="700"
                     data-is-infinite="true">

                    <img class="card-img-top w-100" height="180px" :src="car.img" alt="Image Description">

                    <div class="position-absolute top-0 left-0 pt-2 pl-3">
                        <!-- <span class="badge badge-success">New</span> -->
                        <small style="color:blue;"><strong>{{car.name}}</strong></small>
                    </div>

                    <div class="position-absolute bottom-0 left-0 right-0 pb-2 px-3">

                      <div class="row justify-content-between align-items-center">
                        <div class="col-8">
                          <small class="text-white mb-0"><strong>{{car.price}} </strong></small>
                        </div>

                        <div class="col-4 text-right">
                          <span class="btn btn-icon btn-sm btn-white">
                            <span class="fas fa-images btn-icon__inner"></span>
                          </span>
                        </div>
                      </div>

                    </div>
                  </a>
                  <!-- End Property Item -->

                  <!-- Gallery -->
                  <img 
                     class="js-fancybox d-none" 
                     alt="Image Description"
                     data-fancybox="fancyboxGalleryExample2"
                     data-src="../../../assets/img/1920x1080/img37.jpg"
                     data-caption="Front in frames - image #02"
                     data-speed="700"
                     data-is-infinite="true"
                  >
                  <img 
                     class="js-fancybox d-none" 
                     alt="Image Description"
                     data-caption="Front in frames - image #03"
                     data-src="../../../assets/img/1920x1080/img38.jpg"
                     data-fancybox="fancyboxGalleryExample2"
                     data-speed="700"
                     data-is-infinite="true"
                   >
                  <!-- End Gallery -->

                </div>
              </div>
           </div>
      </div>
  </div>
  <!-- End Cards Section -->

  <hr class="my-0">

   <!-- Divider -->
   <div class="container">
      <hr class="my-0">
  </div>
    <!-- End Divider -->

  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import HeroComponent from '@/components/hero/index.vue';
import RecSys from './components/imgView.vue';
import CatView from './components/categories.vue';
export default {
  name: 'home',
  data() {
    return {
      recsys: [
      {   
        id: 1,
        name: 'Mitsubishi',
          price: '1,000,000.00', 
          img: '../../assets/img/480x320/car1.jpg',
          lrgimg: '../../assets/img/1920x1080/car1.jpg'
      },
       {   
        id: 1,
        name: 'Mitsubishi',
          price: '1,000,000.00', 
          img: '../../assets/img/480x320/car1.jpg',
          lrgimg: '../../assets/img/1920x1080/car1.jpg'
      },
      {   
        id: 2,
        name: 'Honda Fit',
          price: '2,000,000.00', 
          img: '../../assets/img/480x320/car2.jpg',
          lrgimg: '../../assets/img/1920x1080/car2.jpg'
      },
      {   
        id: 3,
        name: 'Hyundai Accent',
          price: '1,800,000.00', 
          img: '../../assets/img/480x320/car3.jpg',
          lrgimg: '../../assets/img/1920x1080/car3.jpg'
      },
      {   
        id: 4,
        name: 'Honda Civic',
          price: '1,200,000.00', 
          img: '../../assets/img/480x320/car4.jpg',
          lrgimg: '../../assets/img/1920x1080/car4.jpg'
      },
    ]
    }
  },
  components: {
    HelloWorld,
    HeroComponent,
    RecSys,
    CatView
  },
  methods: {
  	goToJobs() {
  		this.$router.push('/jobs');
  	}
  },

}
</script>
