<template>
  <!-- Hero Section -->
  <div class="container space-top-1 space-top-sm-2 mb-5">
    <div class="row">
      <div class="col-lg-7 mb-7 mb-lg-0">
        <div class="pr-lg-4">
          <div v-if="slick" class="position-relative">
            <!-- Main Slider -->
            <div id="heroSlider" class="js-slick-carousel u-slick border rounded"
                data-fade="true"
                data-infinite="true"
                data-autoplay-speed="7000"
                data-arrows-classes="d-none d-sm-inline-block u-slick__arrow u-slick__arrow--flat-white content-centered-y shadow-soft rounded-circle"
                data-arrow-left-classes="fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-3"
                data-arrow-right-classes="fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-3"
                data-nav-for="#heroSliderNav">
              <div class="js-slide">
                <img class="img-fluid w-100 rounded" :src="Product.img" alt="Image Description">
              </div>
              <div v-for="(image,index) of Product.images" :key="index" class="js-slide">
                <img class="img-fluid w-100 rounded" :src="image" alt="Image Description">
              </div>
            </div>
            <!-- End Main Slider -->

            <!-- Slider Nav -->
            <div class="position-absolute bottom-0 right-0 left-0 px-4 py-3">
              <div id="heroSliderNav" class="js-slick-carousel u-slick u-slick--gutters-1 u-slick--transform-off max-width-27 mx-auto"
                  data-slides-show="3"
                  data-infinite="true"
                  data-autoplay-speed="7000"
                  data-is-thumbs="true"
                  data-is-thumbs-progress="true"
                  data-thumbs-progress-options='{
                    "color": "#377DFF",
                    "width": 8
                  }'
                  data-thumbs-progress-container=".js-slick-thumb-progress"
                  data-nav-for="#heroSlider">
                <div class="js-slide p-1">
                  <a class="js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1" href="javascript:;">
                    <img class="img-fluid rounded-circle" :src="Product.img" alt="Image Description" style="width: 100px">
                  </a>
                </div>
                <div v-for="(image,index) of Product.images" :key="index" class="js-slide p-1">
                  <a class="js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1" href="javascript:;">
                    <img class="img-fluid rounded-circle" :src="image" alt="Image Description" style="width: 100px">
                  </a>
                </div>
              </div>
            </div>
            <!-- End Slider Nav -->
          </div>
        </div>
      </div>

      <!-- Product Description -->
      <div class="col-lg-5">

        <!-- Title -->
        <div class="mb-5">
          <h1 class="h3 font-weight-medium">{{Product.name}}</h1>       
          <p>{{Product.description}}</p>
        </div>
        <!-- End Title -->

        <!-- Price -->
        <div class="mb-5">
          <h2 class="font-size-1 text-secondary font-weight-medium mb-0">Precio Total:</h2>
          <span class="font-size-2 font-weight-medium">$ {{new Intl.NumberFormat().format(Product.price)}}</span>
        </div>
        <!-- End Price -->

        <!-- Quantity -->
        <!--div class="border rounded py-2 px-3 mb-3">
          <div class="js-quantity row align-items-center">
            <div class="col-7">
              <small class="d-block text-secondary font-weight-medium">Seleccione Cantidad</small>
              <input class="js-result form-control h-auto border-0 rounded p-0" type="text" v-model="quantity">
            </div>
            <div class="col-5 text-right">
              <a :class="['js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle', {'disabled':quantity === 1}]" href="javascript:;" @click="quantity--">
                <small class="fas fa-minus btn-icon__inner"></small>
              </a>
              <a :class="['js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle', {'disabled':quantity === 10}]" href="javascript:;" @click="quantity++">
                <small class="fas fa-plus btn-icon__inner"></small>
              </a>
            </div>
          </div>
        </div-->
        <!-- End Quantity -->

        <!-- Accordion -->
        <div id="shopCartAccordion" class="accordion mb-5">
          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="shopCardHeadingOne">
              <h3 class="mb-0">
                <button type="button" class="btn btn-link btn-block card-btn collapsed"
                        data-toggle="collapse"
                        data-target="#shopCardOne"
                        aria-expanded="false"
                        aria-controls="shopCardOne">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span id="icon65" class="svg-preloader ie-height-48 w-100 max-width-6 mr-3">
                          <img class="js-svg-injector" src="/assets/svg/icons/icon-65.svg" alt="SVG"
                              data-parent="#icon65">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-medium">Envio Gratis</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h3>
            </div>
            <div id="shopCardOne" class="collapse" aria-labelledby="shopCardHeadingOne" data-parent="#shopCartAccordion">
              <div class="card-body">
                <p class="small mb-0">"Ofrecemos envío gratuito a cualquier lugar de los Buenaventura - Valle. Un equipo de entrega calificado llevará las cajas a su oficina.</p>
              </div>
            </div>
          </div>
          <!-- End Card -->

          <!-- Card -->
          <div class="card">
            <div class="card-header card-collapse" id="shopCardHeadingTwo">
              <h4 class="mb-0">
                <button type="button" class="btn btn-link btn-block card-btn collapsed"
                        data-toggle="collapse"
                        data-target="#shopCardTwo"
                        aria-expanded="false"
                        aria-controls="shopCardTwo">
                  <span class="row align-items-center">
                    <span class="col-9">
                      <span class="media align-items-center">
                        <span id="icon64" class="svg-preloader ie-height-48 w-100 max-width-6 mr-3">
                          <img class="js-svg-injector" src="/assets/svg/icons/icon-64.svg" alt="SVG"
                              data-parent="#icon64">
                        </span>
                        <span class="media-body">
                          <span class="d-block font-size-1 font-weight-medium">30 días de regreso</span>
                        </span>
                      </span>
                    </span>
                    <span class="col-3 text-right">
                      <span class="card-btn-arrow">
                        <span class="fas fa-arrow-down small"></span>
                      </span>
                    </span>
                  </span>
                </button>
              </h4>
            </div>
            <div id="shopCardTwo" class="collapse" aria-labelledby="shopCardHeadingTwo" data-parent="#shopCartAccordion">
              <div class="card-body">
                <p class="small mb-0">Si no está satisfecho, devuélvalo para obtener un reembolso completo. Nos encargaremos del desmontaje y el envío de devolución.</p>
              </div>
            </div>
          </div>
          <!-- End Card -->
        </div>
        <!-- End Accordion -->

        <div class="mb-4">
          <button type="button" class="btn btn-block btn-primary btn-pill transition-3d-hover" @click="addCartItems(Product)"><i class="fas fa-cart-plus mr-2"></i> Agregar</button>
        </div>

        <!-- Help Link -->
        <div class="media align-items-center h5">
          <span id="icon4" class="ie-height-48 w-100 max-width-6 mr-2">
            <img class="img-fluid" src="https://image.flaticon.com/icons/svg/1384/1384055.svg">
          </span>
          <div class="media-body text-secondary small">
            <span class="font-weight-medium mr-1">¿Estas interesado?</span>
            <a class="link-muted" :href="'//wa.me/573178758748?text=Me%20gustaría%20saber%20mas%20sobre%20este%20producto:%20http://estiloyclass.com/product/'+$route.params.id">Chatea Ahora</a>
          </div>
        </div>
        <!-- End Help Link -->
      </div>
      <!-- End Product Description -->
    </div>
  </div>
  <!-- End Hero Section -->
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProductDetail',
  data() {
    return {
      quantity: 1
    }
  },
  created(){
    this.getData([{ref: 'Products', id: this.$route.params.id}])
  },
  updated(){
    // eslint-disable-next-line no-undef
    $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');
    // eslint-disable-next-line no-undef
    $.HSCore.components.HSShowAnimation.init('.js-animation-link');
  },
  computed:{
    ...mapState(['Product']),
    slick(){
      if(this.Product.images){
        return true;
      }else{
        return false
      }
    }
  },
  methods:{
    ...mapActions(['getData', 'addCartItems'])
  }
}
</script>