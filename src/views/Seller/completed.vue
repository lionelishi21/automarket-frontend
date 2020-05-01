<template>
  <main id="content" role="main">
   	 <!-- Cart Section -->
    <div class="container space-2 space-lg-3" v-if="isCompleted">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <figure id="iconChecked" class="ie-height-90 max-width-11 mx-auto mb-3">
          <img class="js-svg-injector" src="@/assets/svg/components/checked-icon.svg" alt="SVG"
               data-parent="#iconChecked">
        </figure>
        <div class="mb-5">
          <h1 class="h3 font-weight-medium">Your order is completed!</h1>
          <p>Thank you for your order! your order is completed.</p>
        </div>
        <router-link to="/my-account" class="btn btn-primary btn-pill transition-3d-hover px-5" href="classic.html">Continue Browsing</router-link>
      </div>
    </div>
    <!-- End Cart Section -->
 </main>
</template>