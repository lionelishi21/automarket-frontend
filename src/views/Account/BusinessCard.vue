<template>
	  <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="row justify-content-md-between">
          <div class="col-md-6 mb-7 mb-md-0">
            <div class="pr-md-4">
              <!-- Title -->
              <div class="mb-3">
                <h2 class="h4">Dealer Rep</h2>
                <p>Welcom to your AutoMarket Dealer Rep <a href="#">Read the terms</a></p>
              </div>
              <!-- End Title -->
            </div>
          </div>

          <div class="col-md-6">
            <!-- Stats -->
            <business-card 
            :name="getCurrentUser.name" 
            :email="getCurrentUser.email"
            phone="876 5136710"
            >
            </business-card>
            <!-- End Stats -->
          </div>
        </div>

       
        <hr class="my-7">

        <!-- Title -->
        <!-- <div class="mb-3">
          <h2 class="h4">How referral works</h2>
        </div> -->
        <!-- End Title -->

        <!-- Icon Blocks -->

        </div>
        <!-- End Icon Blocks -->
      </div>
    </div>
    <!-- End Content Section -->
</template>
<script>
import BusinessCard from '@/components/BusinessCard.vue'
import { mapGetters } from 'vuex'

export default {
	components: {
		BusinessCard
	},
	data() {
		return{
			name: 'Business Card'
		}
	},
	computed: {
		...mapGetters([
		  'getCurrentUser',
		])
	}
}
</script>