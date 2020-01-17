<template>
<modal v-show="show" modalClasses="js-modal-window u-modal-window u-modal-window--payment rounded">
  <form class="card mb-9">
      
      <!-- Header -->
      <header class="card-header bg-light py-3 px-5">
        <div class="row justify-content-between align-items-center no-gutters">
	        <div class="col-12">
	          <a class="small text-secondary" href="#">
	            <span class="fas fa-bookmark text-primary mr-1"></span>
	            Seller Contacts Details
	          </a>
	        </div>
        </div>
      </header>
      <!-- End Header -->
    
      <div class="card-body pt-3 pb-5 px-5">
	  <!-- Agents List -->
	      <div class="row mb-3">
	        <div class="col-sm-12 col-md-12">
	          <!-- Agent -->
	          <div class="media">
	            <span class="btn btn-icon btn-lg btn-soft-danger rounded-circle mr-3">
	              <span class="btn-icon__inner">
	              	KP
	              </span>
	            </span>
	            <div class="media-body">
	              <h4 class="h6 mb-1">{{details.name}}</h4>
	              <p class="font-size-1 mb-2">
	                <span class="fas fa-phone mr-1"></span>
	                {{contact_number}}
	              </p>
	             <a href="https://api.whatsapp.com/send?phone=27768483016" class="btn btn-xs btn-soft-primary">Contact Seller</a>
	            </div>
	          </div>
	          <!-- End Agent -->
	        </div>
	      </div>
      <!-- End Agents List -->
        <hr class="my-4">
	    <form :action="'mailto:'+details.email"  v-if="contact_number == 'N/A'" method="post" enctype="text/plain">
		    
		    <!-- Comments -->
	        <div class="mb-3">
		          <div class="media">
		            <div class="media-body">
		            	<input type="text" name="name" class="form-control" placeholder="Your Name">
		            </div>
		          </div>
	        </div>
	        <!-- End Comments -->

		    <!-- Comments -->
	        <div class="mb-3">
		          <div class="media">
		            <div class="media-body">
		            	<input type="email" name="email" class="form-control" placeholder="Your Email">
		            </div>
		          </div>
	        </div>
	        <!-- End Comments -->

	        <!-- Comments -->
	        <div class="mb-3">
		          <div class="media">
		            <div class="media-body">
		              <textarea class="form-control" rows="2" placeholder="Add a comment" :value="message" aria-label="Add a comment"></textarea>
		            </div>
		          </div>
	        </div>
	        <!-- End Comments -->

	        <!-- Buttons -->
	        <div class="d-flex justify-content-end">
	          <button  type="submit" class="btn btn-sm btn-primary transition-3d-hover mr-1">Send Email</button>
	          <a href="#" @click="show = false" class="btn btn-link btn-sm">Close</a>
	        </div>

	    </form>
	    <!-- End Buttons -->
      </div>
  </form>
</modal>  
</template>
<script>
import Modal from '../../../components/Modal.vue'
export default {
	props:['message', 'show', 'details'],
	components: {
		Modal
	},
	computed: {
		contact_number: function() {
			if (this.details.phone == null) {
				return 'N/A'
			}
			return this.details.phone
		}
	},
	data() {
		return {

		}
	}
}

</script>