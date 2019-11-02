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
        data-autoplay-speed="7000" 
        data-fade="true" 
        data-infinite="true">
        <!-- Slide -->
        <div class="js-slide">
          <div class="container-fluid">
            <img class="img-fluid" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/exhibitors/MCO-fashion-freedom/d160fe30-ad7e-11e9-8ce9-757e18378612-home-slider_desktop.jpg">
          </div>
        </div>
        <!-- End Slide -->

        <!-- Slide -->
        <div class="js-slide">
          <div class="container-fluid">
            <img class="img-fluid" src="https://http2.mlstatic.com/optimize/o:f_webp/resources/deals/exhibitors_resources/mco-home-desktop-slider-picture-3a05413e-5e67-4f0a-8621-d29a0f954895.jpg">
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
      <div class="row mx-n2 mx-sm-n3 mb-7">
        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img3.jpg" alt="Image Description">
              <div class="position-absolute top-0 left-0 pt-3 pl-3">
                <span class="badge badge-success badge-pill">Nuevo</span>
              </div>
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Accesorios</a>
                <h3 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Mochila Herschel en azul oscuro.</a>
                </h3>
                <div class="d-block font-size-1">
                  <span class="font-weight-medium">$56.990</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img12.jpg" alt="Image Description">
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Ropa</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Sudadera Delantera</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$91.880</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img4.jpg" alt="Image Description">
              <div class="position-absolute top-0 left-0 pt-3 pl-3">
                <span class="badge badge-danger badge-pill">Agotado</span>
              </div>
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Accesorios</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Mochila Herschel en gris</a>
                </h4>
                <div class="d-block font-size-1">
                  <span class="font-weight-medium">$29.990</span>
                  <span class="text-secondary ml-1"><del>$33.990</del></span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-secondary btn-sm-wide btn-pill" type="button" disabled><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img6.jpg" alt="Image Description">
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Ropa</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Camiseta adicolor de Front Originals con logo de trébol.</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$38.000</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5 mb-lg-0">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img7.jpg" alt="Image Description">
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Accesorios</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Gorra de béisbol de malla delantera con logo de la firma</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$8.880</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5 mb-lg-0">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img11.jpg" alt="Image Description">
              <div class="position-absolute top-0 left-0 pt-3 pl-3">
                <span class="badge badge-success badge-pill">Nuevo</span>
              </div>
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Ropa</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Camiseta adicolor delantera Originals en gris.</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$24.000</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img9.jpg" alt="Image Description">
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Ropa</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">COLUSIÓN camiseta unisex con estampado mecánico.</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$43.990</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>

        <div class="col-6 col-lg-3 px-2 px-sm-3">
          <!-- Product -->
          <div class="card text-center h-100">
            <div class="position-relative">
              <img class="card-img-top" src="/assets/img/300x180/img8.jpg" alt="Image Description">
            </div>

            <div class="card-body pt-4 px-4 pb-0">
              <div class="mb-2">
                <a class="d-inline-block text-secondary small font-weight-medium mb-1" href="#">Accesorios</a>
                <h4 class="font-size-1 font-weight-normal">
                  <a class="text-secondary" href="single-product.html">Billabong Amurallado snapback en verde</a>
                </h4>
                <div class="d-block">
                  <span class="font-weight-medium">$12.00</span>
                </div>
              </div>
            </div>

            <div class="card-footer border-0 pt-0 pb-4 px-4">
              <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus"></i> Añadir</button>
            </div>
          </div>
          <!-- End Product -->
        </div>
      </div>
      <!-- End Products -->

      <div class="text-center">
        <a class="btn btn-primary btn-pill transition-3d-hover px-5" href="#">Ver Galería</a>
      </div>
    </div>
    <!-- End Products Section -->

    <!-- Subscribe Section -->
    <div class="bg-light">
      <div class="container space-2">
        <div class="row justify-content-center">
          <div class="col-md-9 col-lg-6">
            <!-- Title -->
            <div class="text-center mb-4">
              <h2 class="h1 font-weight-medium">Permanecer en el saber</h2>
              <p>Recibe ofertas especiales en los últimos desarrollos de Front.</p>
            </div>
            <!-- End Title -->

            <!-- Subscribe Form -->
            <form class="js-validate js-form-message w-lg-85 mx-lg-auto">
              <label class="sr-only" for="subscribeSrEmail">Correo Electrónico</label>
              <div class="input-group input-group-pill">
                <input class="form-control" id="subscribeSrEmail" name="email" type="email" placeholder="Correo Electrónico" aria-describedby="subscribeButton" aria-label="Correo Electrónico" 
                  data-msg="Please enter a valid Correo Electrónico." required>
                <div class="input-group-append">
                  <button class="btn btn-primary btn-sm-wide" id="subscribeButton" type="submit">Unirse</button>
                </div>
              </div>
            </form>
            <!-- End Subscribe Form -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Subscribe Section -->

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

export default {
  name: 'Home',
  components:{
    BestClothes,
    PromoProduct
  }
}
</script>