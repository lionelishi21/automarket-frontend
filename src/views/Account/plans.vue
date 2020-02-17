<template>

  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="mb-9">
          <!-- Title -->
          <div class="mb-3">
            <h2 class="h5 mb-0">Your current plans</h2>
             {{getActivePlans}}
          </div>
          <!-- End Title -->
          <div class="col-md-6">
               <div class="card mb-4 mb-md-0">
              <!-- Card -->
              <div class="card-body p-5">
                <h4 class="h6">Front project - July 2018 <span class="btn btn-xs btn-soft-success">$250 per year</span></h4>
                <p class="font-size-1 mb-0">License purchased: <span class="text-dark font-weight-medium">1</span></p>
                <p class="font-size-1">License assigned: <span class="text-dark font-weight-medium">1</span></p>
                <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Change plan</a>
                <a class="btn btn-xs btn-soft-secondary transition-3d-hover" href="#">Edit/Remove License</a>
              </div>
              <!-- End Card -->
            </div>
          </div>
          <div class="col-md-6">
              <div class="card">
              <!-- Card -->
              <div class="card-body p-5">
                <h4 class="h6">Total</h4>
                <h5 class="font-weight-normal">$250/yearly</h5>
                <p class="font-size-1 mb-0">Payment method: <span class="text-dark font-weight-medium">Card ending in 9050</span></p>
                <p class="font-size-1">Will renew on: <span class="text-dark font-weight-medium">July 15, 2019</span></p>
                <a class="btn btn-xs btn-primary transition-3d-hover mr-1" href="#">Edit Payment Details</a>
                <a class="btn btn-xs btn-soft-secondary transition-3d-hover" href="#">View Invoices</a>
                <!-- End Card -->
              </div>
            </div>
          </div>
        </div>

        <!-- Title -->
        <div class="row justify-content-between align-items-center mb-3">
          <div class="col-sm-6 mb-3 mb-sm-0">
            <h2 class="h5 mb-0">Subscription plans</h2>
          </div>

          <div class="col-sm-6 text-sm-right">
            <div class="btn-group btn-group-toggle">
              <a class="js-animation-link btn btn-xs btn-outline-primary active" href="javascript:;"
                 data-target="#pricingMonthly"
                 data-link-group="idPricing">
                Monthly
              </a>
              <a class="js-animation-link btn btn-xs btn-outline-primary" href="javascript:;"
                 data-target="#pricingYearly"
                 data-link-group="idPricing">
                Yearly
              </a>
            </div>
          </div>
        </div>
        <!-- End Title -->

        <div class="mb-9">
        </div>
      </div>
    </div>
    <!-- End Content Section -->
  </main>
  <!-- ========== END MAIN ========== -->

</template>
<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return{
        userplans: {}
      }
    },
    computed: {
      ...mapGetters([
        'getActivePlans'
      ])
    },
    created() {
      console.log('createing view user plan view')
      this.$store.dispatch('FETCH_USER_ACTIVE_PLANS')
    },
    methods: {
      showUserInvoice() {},
      changePlan() {}
    }
  }
</script>