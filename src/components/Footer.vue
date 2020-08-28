<template>
  <div>
    <!-- ========== FOOTER ========== -->
    <footer class="container-fluid bg-white">
      <!-- Features Section -->
      <div class="border-bottom">
        <div class="container space-1" id="featuresSVG">
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
      
      <div class="row justify-content-lg-between">
        <section class="container" type="site-shopping-info" id="featuresSVG2">
          <div class="row text-center">
            <div class="col-12 col-md space-1 border-right">
              <div class="img-container mb-2">
                <img class="js-svg-injector img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg" alt="Paga con tarjeta o en efectivo"  data-parent="#featuresSVG2">
              </div>
              <h6>Paga con tarjeta o en efectivo</h6>
              <small>
                <span class="text-muted">Con ePayco, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
              </small>
            </div>
            <div class="col-12 col-md space-1 border-right">
              <div class="img-container mb-2">
                <img class="js-svg-injector img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg" alt="Envío gratis desde $ 70.000"  data-parent="#featuresSVG2">
              </div>
              <h6>Envío gratis a partir de 5 prendas</h6>
              <small><span class="text-muted">Despacho a nivel nacional</span></small>
            </div>
            <div class="col-12 col-md space-1">
              <div class="img-container mb-2">
                <img class="js-svg-injector img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg" alt="Seguridad, de principio a fin"  data-parent="#featuresSVG2">
              </div>
              <h6>Seguridad, de principio a fin</h6>
              <small><span class="text-muted">¿No te gusta? ¡Devuélvelo! En Estilo & Class, no hay nada que no puedas hacer, porque estás siempre protegido.</span></small>
            </div>
          </div>
        </section>
      </div>

      <hr class="my-0">

      <div class="row align-items-md-center space-1">
        <div class="col-md-4 mb-4 mb-lg-0">
          <!-- Social Networks -->
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-facebook-f btn-icon__inner"></span>
              </a>
            </li>
            <li class="list-inline-item">
              <a class="btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent" href="#">
                <span class="fab fa-google btn-icon__inner"></span>
              </a>
            </li>
          </ul>
          <!-- End Social Networks -->
        </div>

        <div class="col-md-8 text-md-right">
          <!-- Links -->
          <ul class="list-inline list-group-flush list-group-borderless mb-0">
            <li class="list-inline-item pl-3">            
              <p class="small text-muted">© Estilo & Class. 2019 <a href="//www.aitheria.tech">Aitheria Technology</a>- Colombia. All rights reserved.</p>
            </li>
          </ul>
          <!-- End Links -->
        </div>
      </div>

      <hr class="my-0">
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>