<template>
<!-- Step Form -->
<form class="js-validate js-step-form"
      data-progress-id="#progressStepForm"
      data-steps-id="#contentStepForm"
      novalidate="novalidate">
  <div class="card">
    <div class="card-header p-5">
      <nav id="progressStepForm" class="js-step-progress nav nav-icon nav-justified text-center">
        <a href="javascript:;" class="nav-item">
          <span class="nav-icon-action">
            <span class="fas fa-user-circle nav-icon-action-inner"></span>
          </span>
          Select One
        </a>
        <a href="javascript:;" class="nav-item">
          <span class="nav-icon-action">
            <span class="fas fa-file-invoice-dollar nav-icon-action-inner"></span>
          </span>
          Select Two
        </a>
        <a href="javascript:;" class="nav-item">
          <span class="nav-icon-action">
            <span class="fas fa-paperclip nav-icon-action-inner"></span>
          </span>
          Select Three
        </a>
      </nav>
    </div>

    <!-- Content Step Form -->
    <div id="contentStepForm" class="card-body p-5">
      <div id="selectStepOne" class="active">
        Select One content goes here

        <div class="d-flex justify-content-end">
          <button type="button" class="btn btn-sm btn-primary transition-3d-hover mr-1" data-next-step="#selectStepTwo">Next</button>
        </div>
      </div>

      <div id="selectStepTwo" style="display: none;">
        Select Two content goes here

        <div class="d-flex justify-content-end">
          <a class="btn btn-sm btn-soft-secondary transition-3d-hover mr-1" href="javascript:;" data-previous-step="#selectStepOne">Back</a>
          <button type="button" class="btn btn-sm btn-primary transition-3d-hover" data-next-step="#selectStepThree">Next</button>
        </div>
      </div>

      <div id="selectStepThree" style="display: none;">
        Select Three content goes here

        <div class="d-flex justify-content-end">
          <a class="btn btn-sm btn-soft-secondary transition-3d-hover mr-1" href="javascript:;" data-previous-step="#selectStepTwo">Back</a>
          <button type="button" class="btn btn-sm btn-primary transition-3d-hover">Done</button>
        </div>
      </div>
    </div>
    <!-- End Content Step Form -->
  </div>
</form>
<!-- End Step Form -->
</template>