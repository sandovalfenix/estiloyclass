<template>
  <div class="col-lg">
    <!-- Promo -->
    <div class="bg-img-hero rounded h-100 px-4 p-sm-8" style="background-image: url(https://tiendakalendar.vteximg.com.br/arquivos/ids/184499-1400-2147/JEAN-KALENDAR-TIRO-ALTO-JNSF083-4AT37-FIJADO_3.jpg?v=636897341780700000);">

      <!-- Countdown -->
      <div class="w-sm-40 bg-soft-white p-2 rounded">
        
        <div class="px-3 pt-2 bg-soft-white rounded">
          <small class="d-block text-danger text-uppercase font-weight-semi-bold">Solo por tiempo limitado.</small>
          <h2 class="display-4 font-weight-semi-bold mb-3 text-danger">70% OFF</h2>
        </div>
        <div class="js-countdown row mx-gutters-2 mb-3 pt-3" 
          data-days-format="%D" 
          data-end-date="2019/12/30" 
          data-hours-format="%H" 
          data-minutes-format="%M" 
          data-month-format="%m" 
          data-seconds-format="%S">
          <div class="col-4 text-center">
            <div class="border border-primary bg-primary text-white rounded p-2 mb-1">
              <strong class="js-cd-hours d-block font-size-2"></strong>
            </div>
            <h5 class="h6 font-weight-normal text-primary">Horas</h5>
          </div>
          <div class="col-4 text-center">
            <div class="border border-primary bg-primary text-white rounded p-2 mb-1">
              <strong class="js-cd-minutes d-block font-size-2"></strong>
            </div>
            <h5 class="h6 font-weight-normal text-primary">Minutos</h5>
          </div>
          <div class="col-4 text-center">
            <div class="border border-primary bg-primary text-white rounded p-2 mb-1">
              <strong class="js-cd-seconds d-block font-size-2"></strong>
            </div>
            <h5 class="h6 font-weight-normal text-primary">Segundos</h5>
          </div>
        </div>
      </div>
      <!-- End Countdown -->

      <a class="btn btn-sm btn-soft-primary btn-pill transition-3d-hover px-5 mt-3" href="#">Comprar</a>
    </div>
    <!-- End Promo -->
  </div>
</template>

<script>
export default {
  name: 'PromoProduct'
}
</script>