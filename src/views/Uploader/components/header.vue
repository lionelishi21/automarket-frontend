<template>
<!-- ========== HEADER ========== -->
<header id="header" 
    class="u-header u-header-center-aligned-nav u-header--center-aligned-sm u-header--abs-top-sm u-header--show-hide-sm"
    data-header-fix-moment="500"
    data-header-fix-effect="slide">
	  <div class="u-header__section">
	    <div id="logoAndNav" class="container">
	      <div class="u-header__hide-content">
	        <div class="u-header--center-aligned__inner">
	          <!-- Logo -->
	          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/" aria-label="Front">
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
</template>
<script>
export default {

  methods: {

  }
}
</script>