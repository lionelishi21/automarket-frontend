<template>
	<main id="content" role="main" style="height: 80vh">
		<!-- Breadcrumb Section -->
		<div class="bg-dark">
		  <div class="container space-top-1 pb-3">
		    <div class="row">
		      <div class="col-lg-5 order-lg-2 text-lg-right mb-4 mb-lg-0">
		        <div class="d-flex d-lg-inline-block justify-content-between justify-content-lg-end align-items-center align-items-lg-start">
		          <!-- Breadcrumb -->
		          <ol class="breadcrumb breadcrumb-white breadcrumb-no-gutter mb-0">
		            <li class="breadcrumb-item active" aria-current="page">Auto Rep</li>
		          </ol>
		          <!-- End Breadcrumb -->
		        </div>
		      </div>

		      <div class="col-lg-7 order-lg-1">
		        <!-- User Info -->
		        <div class="media d-block d-sm-flex align-items-sm-center">
		          <div class="media-body">
		            <h1 class="h3 text-white font-weight-medium mb-1">{{username}}!</h1>
		            <span class="d-block text-white">natalie.curtis@gmail.com</span>
		          </div>
		        </div>
		        <!-- End User Info -->
		      </div>
		    </div>
		  </div>
		</div>
		<!-- End Breadcrumb Section -->
		<div class="container">
			<div class="row mt-5">
				 <div class="col-md-3 col-sm-6 col-sx-6" v-for="car in GetRepDetails">
				 	  <router-link  tag="a" :to="{ path:'/car/details/'+ car.batch_id }">
		              <div class="card">
		                  <img v-if="showPlaceHolder(car.images[0].image)" 
		                       class="img-fluid" 
		                       :src="showCarThumbnail(car.images[0].image)">

		                   <img v-else 
		                        class="img-fluid" 
		                        src="http://18.206.230.202/assets/placeholder/placeholder.jpg">
		                          <!-- Card -->
		                  <div class="card-body p-3">
		                    <h4 class="h6" >{{car.year.year}} {{car.make.name}}</h4>
		                    <p>Price: <strong>{{car.price | currency}}</strong></p>
		                  </div>
		                  <!-- End Card -->
		                 </div>
		                </router-link>
		            </div>
			</div>
		</div>
	</main>
</template>
<script>
import { mapGetters } from 'vuex';
export default {

	data() {
		return {
			username:''
		}
	},

	computed: {
		...mapGetters([
			'ActiveCars',
			'GetRepDetails'
		])
	},

	created() {
		this.username = this.$route.params.id
		this.$store.dispatch('GET_SALES_REP_AUTO', this.username);
		// this.$store.dispatch('GET_ACTIVE_CARS')
	},

	methods: {
	    showPlaceHolder(image){
	      if (image == false) {
	        return false
	      }
	      return true;
	    },
	    goToDetails(id) {

	    }
	}
}
</script>