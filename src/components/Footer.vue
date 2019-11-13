<template>
  <div>
    <!-- ========== FOOTER ========== -->
    <footer class="container">
      <div class="row justify-content-lg-between">
        <section class="container" type="site-shopping-info">
          <div class="row text-center">
            <div class="col border-right">
              <div class="img-container mb-2">
                <img class="img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/payment.svg" alt="Paga con tarjeta o en efectivo">
              </div>
              <h6>Paga con tarjeta o en efectivo</h6>
              <small>
                <span class="text-muted">Con ePayco, paga en cuotas y aprovecha la comodidad de financiación que te da tu banco, o hazlo con efectivo en puntos de pago. ¡Y siempre es seguro!</span>
              </small>
            </div>
            <div class="col border-right">
              <div class="img-container mb-2">
                <img class="img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/shipping.svg" alt="Envío gratis desde $ 70.000">
              </div>
              <h6>Envío gratis desde $ 70.000</h6>
              <small><span class="text-muted">Con solo estar registrado en Estilo & Class, tienes envíos gratis en millones de productos seleccionados.</span></small>
            </div>
            <div class="col">
              <div class="img-container mb-2">
                <img class="img-container" src="https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/ecosystem/protected.svg" alt="Seguridad, de principio a fin">
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
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>