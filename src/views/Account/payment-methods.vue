<template>
<!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Content Section -->
    <div class="bg-light">
      <div class="container space-2">
        <!-- Title -->
        <div class="mb-3">
          <h2 class="h5 mb-0">Your credit and debit cards</h2>
        </div>
        <!-- End Title -->

        <!-- Accordion -->
        <div id="paymentDetails" class="accordion mb-9">
          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="cardHeadingOne">
              <h5 class="mb-0">
                <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                        data-toggle="collapse"
                        data-target="#cardOne"
                        aria-expanded="false"
                        aria-controls="cardOne">
                  <span class="row align-items-center">
                    <span class="col-md-6 mb-2 mb-md-0">
                      <span class="media align-items-center">
                        <img class="max-width-9 mr-3" src="@/assets/img/100x60/img1.jpg" alt="Image Description">
                        <span class="media-body">
                          <span class="font-size-1">Visa Card ending in 9909</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-4 col-md-2 text-md-right">
                      <span class="btn btn-xs btn-soft-warning btn-pill">Primary</span>
                    </span>
                    <span class="col-6 col-md-3">
                      <span class="d-block font-size-1">Expires: 12/2019</span>
                    </span>
                    <span class="col-2 col-md-1 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h5>
            </div>
            <div id="cardOne" class="collapse" aria-labelledby="cardHeadingOne" data-parent="#paymentDetails">
              <div class="card-body px-4">
                <!-- Card Details -->
                <div class="row">
                  <div class="col-sm-7 mb-2 mb-sm-0">
                    <h4 class="h6 mb-1">Natalie Curtis</h4>
                    <span class="d-block font-size-1 mb-1">Bank of America</span>
                    <p class="small">
                      <span class="fas fa-info-circle mr-1"></span>
                      Use this card to add funds to Your Front Balance. <a href="#">See Benefits</a>
                    </p>
                  </div>
                  <div class="col-sm-5 mb-2 mb-sm-0">
                    <h5 class="h6 mb-0">Billing address</h5>
                    <h5 class="h6">Brian Robson</h5>
                    <address class="font-size-1">
                      77408 Satterfield Motorway<br>
                      Suite 469 New Antonetta, BC K3L6P6<br>
                      New York, NY, 09122-9122<br>
                      United States
                    </address>
                    <button type="button" class="btn btn-xs btn-soft-secondary mr-1">Delete</button>
                    <button type="button" class="btn btn-xs btn-primary">Edit</button>
                  </div>
                </div>
                <!-- End Card Details -->
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="cardHeadingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link btn-block card-btn collapsed p-3" role="button"
                        data-toggle="collapse"
                        data-target="#cardTwo"
                        aria-expanded="false"
                        aria-controls="cardTwo">
                  <span class="row align-items-center">
                    <span class="col-md-6 mb-2 mb-md-0">
                      <span class="media align-items-center">
                        <img class="max-width-9 mr-3" src="@/assets/img/100x60/img2.jpg" alt="Image Description">
                        <span class="media-body">
                          <span class="d-block font-size-1">Master Card ending in 1421</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-4 col-md-2 text-md-right">
                    </span>
                    <span class="col-6 col-md-3">
                      <span class="font-size-1">Expires: 06/2021</span>
                    </span>
                    <span class="col-2 col-md-1 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h5>
            </div>
            <div id="cardTwo" class="collapse" aria-labelledby="cardHeadingTwo" data-parent="#paymentDetails">
              <div class="card-body px-4">
                <!-- Card Details -->
                <div class="row">
                  <div class="col-sm-7 mb-2 mb-sm-0">
                    <h4 class="h6 mb-1">Natalie Curtis</h4>
                    <span class="d-block font-size-1 mb-1">Payoneer</span>
                    <p class="small">
                      <span class="fas fa-info-circle mr-1"></span>
                      Use this card to add funds to Your Front Balance. <a href="#">See Benefits</a>
                    </p>
                  </div>
                  <div class="col-sm-5 mb-2 mb-sm-0">
                    <h5 class="h6 mb-0">Billing address</h5>
                    <h5 class="h6">Brian Robson</h5>
                    <address class="font-size-1">
                      9455 NE ALDERWOOD RD<br>
                      C/O UZW-FH PORTLAND OREGON 97252<br>
                      PORTLAND, OR, 97252-1777<br>
                      United States
                    </address>
                    <button type="button" class="btn btn-xs btn-soft-secondary mr-1">Delete</button>
                    <button type="button" class="btn btn-xs btn-primary">Edit</button>
                  </div>
                </div>
                <!-- End Card Details -->
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Accordion -->

        <h3 class="h5 mb-0">Add a new payment method</h3>

        <hr class="mt-2 mb-4">

        <!-- Add Payment -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <h4 class="h6 mb-0">Credit or Debit Cards</h4>
            <p class="mb-2">Amazon accepts all major credit and debit cards.</p>
            <a href="#" @click="showModal()">Add a Card</a>
          </div>
          <div class="col-md-6 text-md-right">
            <span class="d-inline-block bg-white border rounded p-1">
              <img class="max-width-9" src="@/assets/img/100x60/img1.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block bg-white border rounded p-1">
              <img class="max-width-9" src="@/assets/img/100x60/img2.jpg" alt="Image Description">
            </span>
            <span class="d-inline-block bg-white border rounded p-1">
              <img class="max-width-9" src="@/assets/img/100x60/img3.jpg" alt="Image Description">
            </span>
          </div>
        </div>
        <!-- End Add Payment -->

        <hr class="my-4">

        <!-- Add Payment -->
        <div class="row align-items-center">
          <div class="col-md-6">
            <h4 class="h6 mb-0">Online Payment services</h4>
            <p class="mb-2">Use online payment services like, PayPal, Stripe and etc.</p>
            <a href="#">One-click signin</a>
          </div>
          <div class="col-md-6 text-md-right">
            <!-- Radio Checkbox Group -->
            <div class="custom-control custom-radio custom-control-inline checkbox-outline bg-white">
              <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input checkbox-outline__input">
              <label class="checkbox-outline__label rounded p-1 mb-0" for="customRadioInline1">
                <img class="max-width-9" src="@/assets/img/100x60/img5.jpg" alt="Image Description">
              </label>
            </div>
          </div>
        </div>
        <!-- End Add Payment -->
      </div>
    </div>
    <!-- End Content Section -->
	
	<!-- Modal section  -->
	  <!-- Account Modal Window -->
  <modal :width="480"
         :height="600"
         @before-open="beforeOpen"
         @before-close="beforeClose" name="hello-world" class="js-modal-window u-modal-window">
   
    <div class="card border-0">
      <!-- Header -->
      <header class="card-header bg-light py-3 px-5">
        <div class="row justify-content-between align-items-center no-gutters">
          <div class="col-6">
            <h4 class="h6 mb-0">Create a new payment</h4>
          </div>

          <div class="col-6 text-right">
            <button type="button" class="close" aria-label="Close" onclick="Custombox.modal.close();">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
      </header>
      <!-- End Header -->

      <form class="js-validate">
        <div class="card-body p-5">
          <!-- Input Group -->
          <div class="form-row align-items-center mb-3">
            <div class="col-4 text-right">
              <label class="h6 small d-block text-uppercase mb-0">
                Currency
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <select class="custom-select custom-select-sm">
                  <option value="currencySelectUSD">USD - US Dollar</option>
                  <option value="currencySelectJMD">JMD - Jamaican Dollar</option>
                </select>
              </div>
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="form-row align-items-center mb-3">
            <div class="col-4 text-right">
              <label id="amountLabel" class="h6 small d-block text-uppercase mb-0">
                Amount
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <div class="input-group input-group-sm">
                  <input class="form-control" type="text" name="amount" required placeholder="$ 0.00" aria-label="$ 0.00" aria-describedby="amountLabel"
                         data-msg="Please enter a valid amount."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="form-row align-items-center mb-3">
            <div class="col-4 text-right">
              <label id="cardNumberLabel" class="h6 small d-block text-uppercase mb-0">
                Card number
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <div class="input-group input-group-sm">
                  <input class="form-control" type="number" name="cardNumber" required placeholder="Card number" aria-label="Card number" aria-describedby="cardNumberLabel"
                         data-msg="Please enter a valid card number."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="form-row align-items-center mb-3">
            <div class="col-4 text-right">
              <label id="cardholderNameLabel" class="h6 small d-block text-uppercase mb-0">
                Cardholder name
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <div class="input-group input-group-sm">
                  <input class="form-control" type="text" name="cardholderName" required placeholder="Cardholder name" aria-label="Cardholder name" aria-describedby="cardholderNameLabel"
                         data-msg="Please enter a valid cardholder name."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="form-row align-items-center mb-3">
            <div class="col-4 text-right">
              <label id="expiresLabel" class="h6 small d-block text-uppercase mb-0">
                Expires
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <div class="input-group input-group-sm">
                  <input class="form-control" type="number" name="expires" required placeholder="MM/YY" aria-label="MM/YY" aria-describedby="expiresLabel"
                         data-msg="Please enter a valid date."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
          </div>
          <!-- End Input Group -->

          <!-- Input Group -->
          <div class="form-row align-items-center mb-0">
            <div class="col-4 text-right">
              <label id="cvcLabel" class="h6 small d-block text-uppercase mb-0">
                <span class="fas fa-info-circle" data-toggle="tooltip" data-placement="left" title="If you have a Visa or Mastercard branded credit or debit card, it'll be a 3 digit number located on the back of your card."></span>
                CVC
              </label>
            </div>
            <div class="col-8">
              <div class="js-form-message">
                <div class="input-group input-group-sm">
                  <input class="form-control" type="number" name="cvc" required placeholder="***" aria-label="***" aria-describedby="cvcLabel"
                         data-msg="Please enter a valid code."
                         data-error-class="u-has-error"
                         data-success-class="u-has-success">
                </div>
              </div>
            </div>
          </div>
          <!-- End Input Group -->
        </div>

        <!-- Buttons -->
        <div class="card-footer py-3 px-5">
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-sm btn-primary transition-3d-hover mr-1">Create Payment</button>
            <button type="submit" class="btn btn-sm btn-soft-secondary transition-3d-hover" onclick="Custombox.modal.close();">Cancel</button>
          </div>
        </div>
        <!-- End Buttons -->
      </form>
    </div>
  </modal>
  <!-- End Account Modal Window -->
	<!-- End modal section -->

  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>

export default {
	data() {
		return {
			show: false
		}
	},
	methods: {
		showModal() {
		    this.$modal.show('hello-world');
		}
	}
}
</script>