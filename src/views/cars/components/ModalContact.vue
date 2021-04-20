<template>
<modal v-show="show" modalClasses="js-modal-window u-modal-window u-modal-window--payment">

  <div class="card">  
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

      <div class="card-body padding">
	      
	       <!-- Agents List -->
	      <div class="row mb-3">
				<div class="col-sm-12 col-md-12">
			
				<!-- Agent -->
				<div class="media ml-5 ">
					<div class="media-body">

						<h4 class="h6 mb-1"> 
							{{details.name}}
						</h4>

						<p class="font-size-1 mb-2">
							<span class="fas fa-phone mr-1"></span>
							{{contact_number}}
						</p>

						<a 
						:href="'https://api.whatsapp.com/send?phone=1'+contact_number+'&text='+message" 
							class="btn btn-xs btn-soft-primary">
							<img src="@/assets/whatsapp.svg" width="24px" v-if="contact_numner != 'N/A'">
							Contact Seller
						</a>
					</div>
				</div>
				<!-- End Agent -->
				
				<form :action="'mailto:'+details.email" method="post" enctype="text/plain"  v-if="contact_numner == 'N/A'">	
					<div class="row">
						
						<div class="col-md-12">
							<!-- Name -->
							<div class="mb-3">
								<div class="media">
									<div class="media-body">
										<input type="text" name="name" class="form-control" v-mode="user.name" placeholder="Your Name">
									</div>
								</div>
							</div>
							<!-- End Name -->
						</div>
					
						<div class="col-md-12">
							<!-- Comments -->
							<div class="mb-3">
								<div class="media">
								<div class="media-body">
									<input type="email" name="email" class="form-control" v-model="user.email" placeholder="Your Email">
								</div>
								</div>
							</div>
							<!-- End Email -->
						</div>

						<div class="col-md-12">
							<!-- Comments -->
							<div class="mb-3">
								<div class="media">
									<div class="media-body">
										<textarea class="form-control" rows="2" placeholder="Add a comment" :value="message" aria-label="Add a comment"></textarea>
									</div>
								</div>
							</div>
							<!-- End Comments -->
						</div>
					</div>

					<!-- Buttons -->
					<div class="d-flex justify-content-end">
						<button  type="submit" class="btn btn-sm btn-primary transition-3d-hover mr-1">Send Email</button>
						<a href="#" @click="show = false" class="btn btn-link btn-sm">Close</a>
					</div>
					<!--  End Button -->
				</form>
				<form v-else>
					<!-- Buttons -->
					<div class="d-flex justify-content-end">
						<a href="#" @click="show = false" class="btn btn-primary btn-sm">Close</a>
					</div>
					<!--  End Button -->
				</form>
				</div>
				<!-- End Agents List -->
          </div>
      </div>
	</div>
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
			user: {
				name: '',
				email: '',
				message: ''
			}
		}
	},

	methods: {

		sendEmail() {
			this.user.message = this.message
			this.$store.dispatch('SEND_USER_EMAIL', this.user)
				.then( response => {
					console.log(response)
				})
		},

		closeModal() {
			this.show = !this.show
		}
	}
}

</script>