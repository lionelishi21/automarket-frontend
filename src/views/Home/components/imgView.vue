<template>
	 <div class="card-deck d-block d-md-flex">
	 	  <!-- Property Item -->
          <div class="card mb-5" v-for="car in cars">
            <!-- Gallery -->
            <a class="js-fancybox u-media-viewer" href="javascript:;"
               :data-src="car.lrgimg"
               :data-fancybox="'fancyboxGalleryExample'+car.id"
               data-caption="Front in frames - image #01"
               data-speed="700"
               data-is-infinite="true">

              <img class="card-img-top w-100" :src="car.img" alt="Image Description">

              <div class="position-absolute top-0 left-0 pt-2 pl-3">
                  <!-- <span class="badge badge-success">New</span> -->
                  <small style="color:white;"><strong>{{car.name}}</strong></small>
              </div>

              <div class="position-absolute bottom-0 left-0 right-0 pb-2 px-3">
                <div class="row justify-content-between align-items-center">
                  <div class="col-8">
                    <h2 class="h5 text-white mb-0">{{car.price}}</h2>
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
            <img class="js-fancybox d-none" alt="Image Description"
		         data-fancybox="fancyboxGalleryExample2"
		         data-src="../../../assets/img/1920x1080/img37.jpg"
		         data-caption="Front in frames - image #02"
		         data-speed="700"
		         data-is-infinite="true">
		    <img class="js-fancybox d-none" alt="Image Description"
		         data-caption="Front in frames - image #03"
		         data-src="../../../assets/img/1920x1080/img38.jpg"
		         data-fancybox="fancyboxGalleryExample2"
		         data-speed="700"
		         data-is-infinite="true">
          <!-- End Gallery -->
          </div>

	 </div>
</template>
<script>
import fancyBox from 'vue-fancybox';
export default {
 props:['cars'],
 name: 'Imgage-view',
 data() {
 	return {
 		recsys: [
 			{   
 				id: 1,
 				name: 'Mitsubishi',
 			    price: '1,000,000.00', 
 			    img: '../../../assets/img/480x320/car1.jpg',
 			    lrgimg: '../../../assets/img/1920x1080/car1.jpg'
 			},
 			{   
 				id: 2,
 				name: 'Honda Fit',
 			    price: '2,000,000.00', 
 			    img: '../../../assets/img/480x320/car2.jpg',
 			    lrgimg: '../../../assets/img/1920x1080/car2.jpg'
 			},
 			{   
 				id: 3,
 				name: 'Hyundai Accent',
 			    price: '1,800,000.00', 
 			    img: '../../../assets/img/480x320/car3.jpg',
 			    lrgimg: '../../../assets/img/1920x1080/car3.jpg'
 			},
 			{   
 				id: 4,
 				name: 'Honda Civic',
 			    price: '1,200,000.00', 
 			    img: '../../../assets/img/480x320/car4.jpg',
 			    lrgimg: '../../../assets/img/1920x1080/car4.jpg'
 			},
 		]
 	}
  },
  methods: {
  	open (e) {
      fancyBox(e.target, this.imageList);
    }
  }
}
</script>