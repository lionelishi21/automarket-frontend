<template>
<div>
	<!-- ========== HEADER ========== -->
<header id="header" class="u-header u-header-center-aligned-nav u-header--center-aligned-sm u-header--abs-top-sm u-header--show-hide-sm"
        data-header-fix-moment="500"
        data-header-fix-effect="slide">
  <div class="u-header__section">
    <div id="logoAndNav" class="container">
      <div class="u-header__hide-content">
        <div class="u-header--center-aligned__inner">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="index.html" aria-label="Front">
      			   <img src="@/assets/logo.png">
          </a>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button type="button" class="navbar-toggler btn u-hamburger"
                  aria-label="Toggle navigation"
                  aria-expanded="false"
                  aria-controls="navBar"
                  data-toggle="collapse"
                  data-target="#navBar">
            <span id="hamburgerTrigger" class="u-hamburger__box">
              <span class="u-hamburger__inner"></span>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->
        </div>
      </div>

    </div>
  </div>
</header>
<hr>
<!-- ========== END HEADER ========== -->
	<!-- Articles Section -->
<div class="container space-2">
	    <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <h2 class="font-weight-medium">Add your Resume</h2>
        <p>Upload your resume or build you resume online fast and easy</p>
      </div>
      <!-- End Title -->
  <div class="row">
    <div class="col-lg-6 mb-5 mb-lg-0">
      <!-- Card -->
      <article class="card border-0 shadow-soft">
        <div class="">
          <h3 class="h4">Have a Resume?</h3>
				<!-- File Attachment Input -->
				<label class="file-attachment-input" for="imagesAttachmentInput">
				  <img
				       class="js-svg-injector max-width-10 mb-3" 
				       src="@/assets/svg/illustrations/add-file.svg" 
				       alt="SVG"
				       data-parent="#uploadForm"
				   >
				  <span class="d-block mb-2">Browse your device and upload resume</span>
				  <small class="d-block text-muted">File types: .docx, .doc, .pdf, .txt, .odt or .rtf No larger than 2.5 MB</small>
				  <input id="imagesAttachmentInput"
				         name="images-attachment"
				         type="file"
				         class="js-custom-file-attach file-attachment-input__label"
				         data-result-text-target="#fileUploadText">
				  <span id="fileUploadText"></span>
				</label>
				<!-- End file attacthment -->
				<button type="submit" class="btn btn-primary btn-block transition-3d-hover">Upload</button>
        </div>
      </article>
      <!-- End Card -->
    </div>

    <div class="col-lg-6">
      <!-- Card -->
      <article class="card border-0 h-100 shadow-soft">
        <div class="w-sm-65 p-5">
          <h3 class="h4 mb-3">Dont have a Resume</h3>
          <div class="mb-4">
            <p>You can create one in minutes using our Resume builder.</p>
          </div>
          <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover" href="#">Build Resume<span class="fas fa-angle-right ml-1"></span></a>
        </div>

        <div id="docsSVG2" class="svg-preloader position-absolute bottom-0 right-0 w-sm-35 max-width-27">
          <figure class="ie-list-app">
            <img class="js-svg-injector" src="@/assets/svg/illustrations/list-app.svg" alt="Image Description"
                 data-parent="#docsSVG2">
          </figure>
        </div>
      </article>
      <!-- End Card -->
    </div>
  </div>
</div>
<!-- End Articles Section -->
</div>
<!-- End Articles Section -->
</template>