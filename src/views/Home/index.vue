<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">

	<hero-component></hero-component>
   <!-- End Slick Carousel -->


<!-- Divider -->
  <div class="container">
    <hr class="my-0">
  </div>
<!-- End Divider -->

  <!-- Cards Section -->
  <div class="container">
      <!-- Title -->
      <div class="w-md-80 mt-4 w-lg-50 text-center mx-md-auto mb-9">
        <h2 class="font-weight-medium">Trending Near You</h2>
        <small>Location: Kingston <a href="#">change</a></small>
      </div>
      <rec-sys :cars="FilteredCars"></rec-sys>
  </div>
  <!-- End Cards Section -->

  <hr class="my-0">

  <!-- Cards Section -->
  <div class="container space-2">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <h2 class="font-weight-medium">Browse Categories</h2>
      </div>
       <cat-View></cat-View>
  </div>
  <!-- End Cards Section -->
<hr>

   <!-- Cards Section -->
   <app-compare></app-compare>
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
import RecSys from '@/components/cars/CarGrid.vue';
import CatView from './components/categories.vue';
import CarGrid from '@/components/cars/GridView.vue';
import AppCompare from '@/components/Compare.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'home',

  data() {
    return {
      filterMake: '',
      filterModel: '',
      filterMaxPrice: '',
      filterLocation: '',
      filterBodyStyle: ''
    }
  },
  components: {
    AppCompare,
    HelloWorld,
    HeroComponent,
    RecSys,
    CatView,
    CarGrid
  },
  computed: {
    ...mapGetters([
       'FilteredCars',
       'AllMakes',
       'AllModels',
       'getParishes',
       'hotCars',
       'getBodystyles',
       'HotCars'
    ])
  },
  created() {
     var params =  {
        recomended: true
     }

     this.$store.dispatch('FILTER_CARS', params)

    var makesType = 'custom';
    this.$store.dispatch('GET_VEHICLE_MAKE', makesType)
    this.$store.dispatch('GET_PARISHES');
    this.$store.dispatch('GET_BODYSTYLES');
    this.$store.dispatch('GET_HOT_CARS');
  },
  watch: {
    filterMake: function(value) {

        var params = {
            make: value,
            model: this.filterModel,
            maxYear: this.filterMaxYear,
            bodySytle: this.filterBodyStyle,
            parish: this.filterLocation
        }

        console.log('working...')
       
        this.$store.dispatch('FILTER_CARS', params)
        this.$store.dispatch('GET_VEHICLE_MODEL', value)
        
        this.isLoading = true
        var self = this
        setTimeout(function(){
       
            self.isLoading = false;

        }, 1000);
    }
  },
  methods: {
  	goToJobs() {
  		this.$router.push('/jobs');
  	},
    goToCars() {
      this.$router.push('/cars')
    },  
    goToRegister() {
      this.$router.push('/dealer-register')
    },

    goToCompareCars() {

      var url = 'compare-research?make='

      this.$router.push('/compare-research')
    },


    makeChange() {

    }
  },

}
</script>

<style> 
</style>