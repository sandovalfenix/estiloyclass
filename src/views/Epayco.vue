<template>
  <main id="content" role="main">
    <!-- Cart Section -->
    <div class="container space-2 space-lg-3">
      <div class="w-md-80 w-lg-50 text-center mx-md-auto">
        <figure id="iconChecked" class="svg-preloader ie-height-90 max-width-11 mx-auto mb-3">
          <img class="js-svg-injector" src="assets/svg/components/checked-icon.svg" alt="SVG"
               data-parent="#iconChecked">
        </figure>
        <div class="mb-5">
          <h1 class="h3 font-weight-medium">Your order is {{$route.params.status}}!</h1>
          <p>Thank you for your order! Your order is being processed and will be {{$route.params.status}} within 3-6 hours. You will receive an email confirmation when your order is {{$route.params.status}}.</p>
        </div>
        <a class="btn btn-primary btn-pill transition-3d-hover px-5" href="classic.html">Continue Shopping</a>
      </div>
    </div>
    <!-- End Cart Section -->

    <!-- Clients Section -->
    <div class="container space-2">
      <div class="row justify-content-between text-center">
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/hollister.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/levis.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/new-balance.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/puma.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/nike.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="assets/svg/clients-logo/tnf.svg" alt="Image Description">
          </div>
        </div>
      </div>
    </div>
    <!-- End Clients Section -->
  </main>
</template>