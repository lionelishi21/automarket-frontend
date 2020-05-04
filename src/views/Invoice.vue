<template>
  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
     <!-- Invoice Section -->
    <div class="container space-2 px-md-7 px-lg-11">
      <div class="card bg-img-hero" style="background-image: url(../../assets/svg/components/bg-elements-6.svg);">
        <div class="card-body p-5 p-md-7 p-lg-11">
          <div class="row justify-content-lg-between align-items-sm-center mb-11">
            <div class="col-sm-6 col-lg-4 order-sm-2 text-sm-right mb-5 mb-sm-0">
              <h1 class="h2 font-weight-medium mb-0">
                Invoice #
                <small class="d-block">{{Invoice.reference}}</small>
              </h1>
            </div>

            <div class="col-sm-6 col-lg-4 order-sm-1">
              <!-- Logo -->
              <img src="@/assets/automarket.png" width="150">
              <h2 class="h1 text-primary font-weight-semi-bold">AutoMarket</h2>
              <!-- End Logo -->

              <!-- Address -->
              <address>
                153 automarket road , MT 09514, Jamaica
              </address>
              <small class="d-block text-muted">tel: +1 (876) 109-9222</small>
              <!-- End Address -->
            </div>
          </div>

          <!-- Bill To -->
          <div class="row justify-content-md-between mb-7">
            <div class="col-md-5 col-lg-4">
              <h3 class="h5">Bill to:</h3>
              <span class="d-block">{{Invoice.user.name}}</span>
              <address class="text-secondary mb-0">
               No Billing address
              </address>
            </div>

            <div class="col-md-5 col-lg-4 mt-6">
              <dl class="row mb-0">
                <dt class="col-5 col-md-6 font-weight-normal text-secondary">Invoice date:</dt>
                <dd class="col-7 col-md-6 font-weight-medium">{{Invoice.created_at}}</dd>
              </dl>
            </div>
          </div>
          <!-- End Bill To -->

          <!-- Table -->
          <table class="table table-heighlighted font-size-1 mb-9">
            <thead>
              <tr class="text-uppercase text-secondary">
                <th scope="col" class="font-weight-medium">Description</th>
                <th scope="col" class="font-weight-medium text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="line in Invoice.line">

                <th scope="row" class="font-weight-normal">{{line.title}}</th>
                <td class="text-right">{{line.unitPrice}}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr class="h6">
                <td scope="row">Total</td>
                <td colspan="3" class="text-right">${{totalItem}}</td>
              </tr>
            </tfoot>
          </table>
          <!-- End Table -->

          <!-- Contacts -->
          <div class="row justify-content-lg-between">
            <div class="col-md-8 col-lg-7 order-md-2 mb-5 mb-md-0">
              <h4 class="h6">Thank you!</h4>
              <p class="font-size-1">If you have any questions concerning this invoice, use the following contact information:</p>

              <span class="d-block">
                <small class="font-weight-medium">email:</small>
                <small class="text-muted">info@automarketjm.com</small>
              </span>
              <small class="font-weight-medium">telephone:</small>
              <small class="text-muted">+1 (876) 109-9222</small>
            </div>

            <div class="col-md-4 col-lg-3 order-md-1 align-self-end">
              <p class="small text-muted mb-0">&copy; 2020 automarketjm.com</p>
            </div>
          </div>
          <!-- End Contacts -->
        </div>
      </div>

      <div class="text-right mt-5">
        <button type="button" class="btn btn-primary btn-sm-wide transition-3d-hover" onclick="window.print();return false;">
          <span class="fas fa-print mr-2"></span>
          Print
        </button>
      </div>
    </div>
    <!-- End Invoice Section -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
     data() {
      return {
        name: 'Invoice',
      }
     },
     computed: {
       ...mapGetters([
          'Invoice'
        ]),
       totalItem: function() {
           let sum = 0;
              for(let i = 0; i < this.Invoice.line.length; i++){
                sum += (parseFloat(this.Invoice.line[i].unitPrice))
              }
           return sum
       }
     },
     created() {
        var invoice_id = this.$route.params.invoiceId;
        this.$store.dispatch('GET_PAYMENT_INVOICE', invoice_id)
     },
     methods: {

     }
  }
</script>