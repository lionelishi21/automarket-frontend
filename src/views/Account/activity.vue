<template>	
	  <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="card">
          <div class="card-header py-4 px-0 mx-4">
            <!-- Activity Menu -->
<!--             <div class="row justify-content-sm-between align-items-sm-center">
              <div class="col-md-5 col-lg-4 mb-2 mb-md-0">
                <div id="datepickerWrapper" class="js-focus-state u-datepicker w-auto input-group input-group-sm">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <span class="fas fa-calendar"></span>
                    </span>
                  </div>
                  <input type="text" class="js-range-datepicker form-control bg-white rounded-right"
                         data-rp-wrapper="#datepickerWrapper"
                         data-rp-type="range"
                         data-rp-date-format="d M Y"
                         data-rp-default-date='["05 Jul 2018", "19 Jul 2018"]'
                         data-rp-is-disable-future-dates="true">
                </div>
              </div>

              <div class="col-md-6">
                <div class="d-flex">
                  <div class="mr-2">
                    <select id="datatableEntries" class="js-select selectpicker dropdown-select" data-width="fit" data-style="btn-soft-primary btn-sm">
                      <option value="6">6 entries</option>
                      <option value="12" selected>12 entries</option>
                      <option value="18">18 entries</option>
                      <option value="24">24 entries</option>
                    </select>
                  </div>

                  <div class="js-focus-state input-group input-group-sm">
                    <div class="input-group-prepend">
                      <span class="input-group-text" id="searchActivities">
                        <span class="fas fa-search"></span>
                      </span>
                    </div>
                    <input id="datatableSearch" type="email" class="form-control" placeholder="Search activities" aria-label="Search activities" aria-describedby="searchActivities">
                  </div>
                </div>
              </div>
            </div> -->
            <!-- End Activity Menu -->
          </div>
          <div class="card-body p-4">
            <!-- Activity Table -->
            <div class="table-responsive-md u-datatable">
              <table class="js-datatable table table-borderless u-datatable__striped u-datatable__content u-datatable__trigger mb-5"
                     data-dt-info="#datatableInfo"
                     data-dt-search="#datatableSearch"
                     data-dt-entries="#datatableEntries"
                     data-dt-page-length="12"
                     data-dt-is-responsive="false"
                     data-dt-is-show-paging="true"
                     data-dt-details-invoker=".js-datatabale-details"
                     data-dt-select-all-control="#invoiceToggleAllCheckbox"

                     data-dt-pagination="datatablePagination"
                     data-dt-pagination-classes="pagination mb-0"
                     data-dt-pagination-items-classes="page-item"
                     data-dt-pagination-links-classes="page-link"

                     data-dt-pagination-next-classes="page-item"
                     data-dt-pagination-next-link-classes="page-link"
                     data-dt-pagination-next-link-markup='<span aria-hidden="true">&raquo;</span>'

                     data-dt-pagination-prev-classes="page-item"
                     data-dt-pagination-prev-link-classes="page-link"
                     data-dt-pagination-prev-link-markup='<span aria-hidden="true">&laquo;</span>'>
                <thead>
                  <tr class="text-uppercase font-size-1">
                    <th scope="col" class="font-weight-medium">
                      <div class="d-flex justify-content-between align-items-center">
                        Payment #
                        <div class="ml-2">
                          <span class="fas fa-angle-up u-datatable__thead-icon"></span>
                          <span class="fas fa-angle-down u-datatable__thead-icon"></span>
                        </div>
                      </div>
                    </th>
                    <th scope="col" class="font-weight-medium">
                      <div class="d-flex justify-content-between align-items-center">
                        Payment Gateway
                        <div class="ml-2">
                          <span class="fas fa-angle-up u-datatable__thead-icon"></span>
                          <span class="fas fa-angle-down u-datatable__thead-icon"></span>
                        </div>
                      </div>
                    </th>
                    <th scope="col" class="font-weight-medium">
                      <div class="d-flex justify-content-between align-items-center">
                        Amount
                        <div class="ml-2">
                          <span class="fas fa-angle-up u-datatable__thead-icon"></span>
                          <span class="fas fa-angle-down u-datatable__thead-icon"></span>
                        </div>
                      </div>
                    </th>
                    <th scope="col" class="font-weight-medium">
                      <div class="d-flex justify-content-between align-items-center">
                        Date
                        <div class="ml-2">
                          <span class="fas fa-angle-up u-datatable__thead-icon"></span>
                          <span class="fas fa-angle-down u-datatable__thead-icon"></span>
                        </div>
                      </div>
                    </th>
                    <th scope="col" class="font-weight-medium">
                      <div class="d-flex justify-content-between align-items-center">
                        Invoice
                        <div class="ml-2">
                          <span class="fas fa-angle-up u-datatable__thead-icon"></span>
                          <span class="fas fa-angle-down u-datatable__thead-icon"></span>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody class="font-size-1">
                  <tr class="js-datatabale-details" v-for="payment in GetPayments">
                
                    <td class="align-middle text-secondary font-weight-normal u-datatable__trigger-icon">FR0{{payment.id}}</td>
                    <td class="align-middle">
                      <div class="media align-items-center">
                        <span class="btn btn-sm btn-icon btn-soft-success rounded-circle mr-2">
                          <span class="btn-icon__inner font-weight-medium">S</span>
                        </span>
                        <span>{{payment.gateway}}</span>
                      </div>
                    </td>
                    <td class="align-middle text-primary">{{payment.amount}}</td>
                    <td class="align-middle text-secondary">{{payment.date}}</td>
                    <td class="align-middle text-secondary"> <a href="#" @click.prevent="ShowInvoice(payment)"><i class="fa fa-file-word"></i> Invoice</a></td>

                  </tr>
                 </tbody>
              </table>
            </div>

            <!-- Invoice Modal-->
            <modal name="invoice" height="60%" width="60%">
              <div class="card-body">
                   <div class="border rounded p-5">
                      <h4 class="h3">Invoice: {{details.invoice.reference}}</h4>

                      <div class="row mb-6">
                        <div class="col-3">
                          <span class="text-secondary">Date:</span>
                          <span class="font-weight-medium">{{details.invoice.created_at}}</span>
                        </div>
                        <div class="col-3">
                          <span class="text-secondary">Merchant:</span>
                          <span class="font-weight-medium">{{details.gateway}}</span>
                        </div>
                        <div class="col-6">
                          <span class="text-secondary">Authorization code:</span>
                          <span class="font-weight-medium">128746739419</span>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-6 mb-3 mb-sm-0">
                          <h5 class="text-dark font-size-1 text-uppercase">No Billing Address:</h5>
                          <address class="text-secondary">
                          <!--   <h6 class="h5 text-dark">{{Spotify}}</h6>
                            Flat 60, Ross Green, South Lilyberg, Q7M 8ZV -->
                          </address>
                        </div>

                        <div class="col-sm-6">
                          <h5 class="text-dark font-size-1 text-uppercase">Client info:</h5>
                          <ul class="list-unstyled mb-0">
                            <li class="mb-2">
                              <span class="text-secondary">Name:</span>
                              <span class="font-weight-medium">{{details.user.name}}</span>
                            </li>
                            <li class="mb-2">
                              <span class="text-secondary">Username:</span>
                              <span class="font-weight-medium">{{details.user.username}}</span>
                            </li>
                            <li class="mb-2">
                              <span class="text-secondary">Country:</span>
                              <span class="font-weight-medium">Jamaica</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div class="row justify-content-end mb-4">
                        <div class="col-sm-6">
                          <hr class="my-4">

                          <h5 class="text-dark font-size-1 text-uppercase">Transaction details:</h5>
                          <ul class="list-unstyled mb-0">
                               <li class="d-flex justify-content-between align-items-center mb-2">
                              <span class="text-secondary">Credits</span>
                              <span class="font-weight-medium">${{details.amount}}.00</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center mb-2">
                              <span class="text-secondary">Transaction amount</span>
                              <span class="font-weight-medium">${{details.amount}}.00</span>
                            </li>
                            <li class="d-flex justify-content-between align-items-center mb-2">
                              <span class="text-secondary">Total amount</span>
                              <span class="text-primary font-weight-medium">${{details.amount}}.00</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <ul class="list-inline mb-0">
                        <li class="list-inline-item u-ver-divider pr-3 mr-3">
                          <a href="#">
                            <span class="fas fa-file-word text-secondary mr-1"></span>
                            Download invoice
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#">
                            <span class="fas fa-print text-secondary mr-1"></span>
                            Print details
                          </a>
                        </li>
                      </ul>
                </div>
              </div>
            </modal>
            <!-- Invoice Modal -->


            <!-- End Activity Table -->
               
            <!-- Pagination -->
            <div class="d-flex align-items-center">
              <nav id="datatablePagination" aria-label="Activity pagination"></nav>

              <small id="datatableInfo" class="text-secondary ml-auto"></small>
            </div>
            <!-- End Pagination -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Content Section -->
</template>
<script>
import { mapGetters } from 'vuex';
export default {
	data() {
		return{
			title: 'Payments',
      isLoading: false,
      invoice: {},
      details: {
        invoice: {},
        user: {}
      }
		}
	},
	created() {
		this.$store.dispatch('GET_PAYMENTS_ACTIVITY')
	},
	computed: {
    ...mapGetters([
      'GetPayments',
    ])

	},
	methods: {
    ShowInvoice(params) {

        this.isLoading = true
        this.details = params

        
        this.$router.push('/invoice/1');

    }
	}
}	
</script>