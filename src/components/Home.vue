<template>
  <!-- ========== MAIN CONTENT ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="position-relative">
      <!-- Main Slider -->
      <div class="js-slick-carousel u-slick bg-light" id="heroSlider" 
        data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-5" 
        data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-5" 
        data-arrows-classes="d-none d-lg-inline-block u-slick__arrow u-slick__arrow--flat-white u-slick__arrow-centered--y shadow-soft rounded-circle" 
        data-autoplay="true" 
        data-autoplay-speed="5000" 
        data-fade="true" 
        data-infinite="true">
        <!-- Slide -->
        <div class="js-slide">
          <div class="container-fluid">
            <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/estiloyclass.appspot.com/o/banners%2FBANNER%20ESTILICLASS%20ROPA%20PLAYA.jpg?alt=media&token=44cce865-05ed-40d1-9b8e-aa205d177acd">
          </div>
        </div>
        <!-- End Slide -->

        <!-- Slide -->
        <div class="js-slide">
          <div class="container-fluid">
            <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/estiloyclass.appspot.com/o/banners%2FBANNER%20ESTILO%20CLAS%20DESCUENTO%2030PORCIIENTO.jpg?alt=media&token=57f22a60-ae0f-4e3e-b3e7-2d1fef9a1ca5">
          </div>
        </div>
        <!-- End Slide -->

        <!-- Slide -->
        <div class="js-slide">
          <div class="container-fluid">
            <img class="img-fluid" src="https://firebasestorage.googleapis.com/v0/b/estiloyclass.appspot.com/o/banners%2FBANNER%20ESTILOCLASS%20ENVIOS%20WEB.jpg?alt=media&token=4c060dfd-fe57-4e25-aa6b-cc6d21f027bc">
          </div>
        </div>
        <!-- End Slide -->
      </div>
      <!-- End Main Slider -->
    </div>
    <!-- End Hero Section -->

    <!-- Features Section -->
    <div class="border-bottom">
      <div class="svg-preloader container space-2" id="featuresSVG">
        <div class="row">
          <div class="col-md-4 mb-7 mb-md-0">
            <!-- Contacts -->
            <div class="media">
              <figure class="ie-height-56 w-100 max-width-8 mr-4">
                <img class="js-svg-injector" src="/assets/svg/icons/icon-4.svg" alt="SVG" 
                  data-parent="#featuresSVG">
              </figure>
              <div class="media-body">
                <h4 class="h6 mb-1">Atención 24/7</h4>
                <p class="font-size-1 mb-0">Contáctenos las 24 horas del día, los 7 días de la semana.</p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>

          <div class="col-md-4 mb-7 mb-md-0">
            <!-- Contacts -->
            <div class="media">
              <figure class="ie-height-56 w-100 max-width-8 mr-4">
                <img class="js-svg-injector" src="/assets/svg/icons/icon-64.svg" alt="SVG" 
                  data-parent="#featuresSVG">
              </figure>
              <div class="media-body">
                <h4 class="h6 mb-1">Vuelta de 30 dias</h4>
                <p class="font-size-1 mb-0">Le ofrecemos un reembolso completo dentro de los 30 días de la compra.</p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>

          <div class="col-md-4">
            <!-- Contacts -->
            <div class="media">
              <figure class="ie-height-56 w-100 max-width-8 mr-4">
                <img class="js-svg-injector" src="/assets/svg/icons/icon-65.svg" alt="SVG" 
                  data-parent="#featuresSVG">
              </figure>
              <div class="media-body">
                <h4 class="h6 mb-1">Envío gratis</h4>
                <p class="font-size-1 mb-0">Reciba automáticamente el envío estándar gratuito en cada pedido.</p>
              </div>
            </div>
            <!-- End Contacts -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Features Section -->

    <!-- Categories Section -->
    <div class="container space-2 space-lg-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-40 text-center mx-md-auto mb-9">
        <h2 class="h3 font-weight-medium">Los mejores conjuntos de ropa.</h2>
      </div>
      <!-- End Title -->
      
      <BestClothes></BestClothes>

      <div class="text-center">
        <p class="small">Solo por tiempo limitado ó hasta agotar existencias.</p>
      </div>
    </div>
    <!-- End Categories Section -->

    <!-- Promo Section -->
    <div class="container">
      <div class="row">
        <PromoProduct></PromoProduct>
      </div>
    </div>
    <!-- End Promo Section -->

    <!-- Products Section -->
    <div class="container space-2 space-lg-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-40 text-center mx-md-auto mb-9">
        <h2 class="h3 font-weight-medium">Lo más comprado</h2>
      </div>
      <!-- End Title -->

      <!-- Products -->
      <ProductMoreBuy></ProductMoreBuy>
      <!-- End Products -->

      <div class="text-center">
        <router-link class="btn btn-primary btn-pill transition-3d-hover px-5" :to="'/categories/ropa/all'">Ver Galería</router-link>
      </div>
    </div>
    <!-- End Products Section -->

    <!-- Clients Section -->
    <div class="container space-2">
      <div class="row justify-content-between text-center">
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/hollister.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/levis.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2 mb-5 mb-lg-0">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/new-balance.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/puma.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/nike.svg" alt="Image Description">
          </div>
        </div>
        <div class="col-4 col-lg-2">
          <div class="mx-4">
            <img class="u-clients" src="/assets/svg/clients-logo/tnf.svg" alt="Image Description">
          </div>
        </div>
      </div>
    </div>
    <!-- End Clients Section -->
  </main>
  <!-- ========== END MAIN CONTENT ========== -->
</template>

<script>
import BestClothes from '@/components/Main/BestClothes'
import PromoProduct from '@/components/Main/PromoProduct'
import ProductMoreBuy from '@/components/Main/ProductMoreBuy'

export default {
  name: 'Home',
  components:{
    BestClothes,
    PromoProduct,
    ProductMoreBuy
  }
}
</script>