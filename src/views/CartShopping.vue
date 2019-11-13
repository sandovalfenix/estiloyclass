<template>  
  <main id="content" role="main">
    <!-- Cart Section -->
    <div class="container space-1 space-md-2">
      <div class="row">
        <div class="col-lg-8 mb-7 mb-lg-0">
          <!-- Title -->
          <div class="d-flex justify-content-between align-items-end border-bottom pb-3 mb-7">
            <h1 class="h4 mb-0">Carro de Compras</h1>
            <span>{{cartLength}} Productos</span>
          </div>
          <!-- End Title -->

          <form>
            <!-- Product Content -->
            <div v-for="item in productsCart" :key="item.id" class="border-bottom pb-5 mb-5">
              <div class="row">
                <div class="col-md-6 mb-3 mb-md-0">
                  <div class="media">
                    <div class="max-width-15 w-100 mr-3">
                      <img class="img-fluid" :src="item.img" alt="Image Description">
                    </div>
                    <div class="media-body">
                      <h2 class="h6">{{item.name}}</h2>
                      <div class="text-secondary font-size-1 mb-1">
                        <b>Genero: </b>
                        <span>{{item.category.type}}</span>
                      </div>
                      <!--div class="text-secondary font-size-1 mb-1">
                        <span>Color:</span>
                        <span>Grey</span>
                      </div-->
                      <div class="text-secondary font-size-1 mb-1">
                        <b>Categoria: </b>
                        <span>{{item.category.name}}</span>
                      </div>
                      <div class="text-secondary h6 mt-3">
                        <b>Precio: </b>
                        <span>${{formatPrice(item.price)}}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-5 col-md-3 offset-md-1">   
                  <label class="text-muted">Cantidad:</label>               
                  <span class="input-group">
                    <div class="input-group-prepend">
                      <a :class="['btn btn-bg-transparent btn-soft-primary btn-sm',{'disabled': item.quantity === 1}]" href="javascript:void(0)" @click="quantityIncrement(item.id, 'decrement')">
                        <i class="fa fa-minus-circle"></i>
                      </a>
                    </div>
                    <input class="form-control form-control-sm border-0 text-center p-0" type="text" min="1" v-model="item.quantity">
                    <div class="input-group-prepend">
                      <a :class="['btn btn-bg-transparent btn-soft-primary btn-sm',{'disabled': item.quantity === 30}]" href="javascript:void(0)" @click="quantityIncrement(item.id)">
                        <i class="fa fa-plus-circle"></i>
                      </a>
                    </div>
                  </span>

                  <a class="d-block text-danger font-size-1 mt-5" href="javascript:;" @click="removeCart(item.indexCart)">
                    <span class="far fa-trash-alt mr-1"></span>
                    <span>Eliminar</span>
                  </a>
                </div>

                <div class="col-6 col-md-2 text-md-right">
                  <span class="font-weight-medium">${{formatPrice(item.price * item.quantity)}}</span>
                </div>
              </div>
            </div>
            <!-- End Product Content -->
            <div class="d-flex justify-content-end">
              <a href="/">
                <small class="fas fa-arrow-left mr-1"></small>
                Continuar comprando
              </a>
            </div>
          </form>
        </div>

        <div class="col-lg-4">
          <div class="pl-lg-4">
            <!-- Order Summary -->
            <div class="border shadow-soft rounded p-5 mb-4">
              <!-- Title -->
              <div class="border-bottom pb-4 mb-4">
                <h2 class="h5 mb-0">Resumen del pedido</h2>
              </div>
              <!-- End Title -->

              <div class="border-bottom pb-4 mb-4">
                <div class="media align-items-center mb-3">
                  <h3 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Subtotal de artículos ({{cartLength}})</h3>
                  <div class="media-body text-right">
                    <span class="font-weight-medium">${{formatPrice(totalCartPrices)}}</span>
                  </div>
                </div>

                <div class="media align-items-center mb-3">
                  <h4 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Entrega</h4>
                  <div class="media-body text-right">
                    <span class="font-weight-medium">Gratis</span>
                  </div>
                </div>

                <!-- Checkbox -->
                <div class="card border-0 mb-3">
                  <div class="card-body p-0">
                    <div class="custom-control custom-radio d-flex align-items-center small">
                      <input type="radio" class="custom-control-input" id="deliveryRadio1" name="deliveryRadio" checked>
                      <label class="custom-control-label ml-1" for="deliveryRadio1">
                        <span class="d-block font-size-1 font-weight-medium mb-1">Gratis - Entrega estándar</span>
                        <span class="d-block text-muted">El envío puede demorar entre 5 y 6 días hábiles.</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->

                <!-- Checkbox -->
                <div class="card border-0">
                  <div class="card-body p-0">
                    <div class="custom-control custom-radio d-flex align-items-center small">
                      <input type="radio" class="custom-control-input" id="deliveryRadio2" name="deliveryRadio">
                      <label class="custom-control-label ml-1" for="deliveryRadio2">
                        <span class="d-block font-size-1 font-weight-medium mb-1">$15.600 - Entrega Express</span>
                        <span class="d-block text-muted">El envío puede demorar de 2 a 3 días hábiles.</span>
                      </label>
                    </div>
                  </div>
                </div>
                <!-- End Checkbox -->
              </div>

              <div class="media align-items-center mb-3">
                <h4 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Estimated tax</h4>
                <div class="media-body text-right">
                  <span class="font-weight-medium">--</span>
                </div>
              </div>

              <div class="media align-items-center mb-4">
                <h4 class="text-secondary font-size-1 font-weight-normal mb-0 mr-3">Total</h4>
                <div class="media-body text-right">
                  <span class="font-weight-medium">$73.98</span>
                </div>
              </div>

              <a class="btn btn-primary btn-pill transition-3d-hover" href="checkout.html">Checkout</a>
              <button type="submit" class="btn btn-soft-warning btn-pill transition-3d-hover">
                <img src="/assets/img/logos/paypal.png" width="70" alt="PayPal logo">
              </button>
            </div>
            <!-- End Order Summary -->

            <!-- Accordion -->
            <div id="shopCartAccordion" class="accordion rounded shadow-soft mb-4">
              <!-- Card -->
              <div class="card rounded">
                <div class="card-header card-collapse" id="shopCartHeadingOne">
                  <h3 class="mb-0">
                    <button type="button" class="btn btn-link btn-block card-btn font-weight-medium collapsed"
                            data-toggle="collapse"
                            data-target="#shopCartOne"
                            aria-expanded="false"
                            aria-controls="shopCartOne">
                      Promo code?
                      <span class="far fa-question-circle text-secondary ml-1" data-container="body" data-toggle="popover" data-placement="top" data-trigger="hover" title="Promo code" data-content="Valid on full priced items only. Some products maybe excluded."></span>
                    </button>
                  </h3>
                </div>
                <div id="shopCartOne" class="collapse" aria-labelledby="shopCartHeadingOne" data-parent="#shopCartAccordion">
                  <form class="js-validate p-5">
                    <div class="input-group input-group-pill mb-3">
                      <input type="text" class="form-control" name="name" placeholder="Promo code" aria-label="Promo code">
                      <div class="input-group-append">
                        <button type="submit" class="btn btn-block btn-primary btn-pill">Apply</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <!-- End Card -->
            </div>
            <!-- End Accordion -->

            <!-- Help Link -->
            <div class="media align-items-center">
              <figure id="icon4" class="svg-preloader ie-height-48 w-100 max-width-6 mr-2">
                <img class="js-svg-injector" src="/assets/svg/icons/icon-4.svg" alt="SVG"
                     data-parent="#icon4">
              </figure>
              <div class="media-body text-secondary small">
                <span class="font-weight-medium mr-1">Need Help?</span>
                <a class="link-muted" href="#">Chat now</a>
              </div>
            </div>
            <!-- End Help Link -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Cart Section -->
  </main>
</template>
<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'CartShopping',
  created(){
    this.getDatas(["Products"])
  },
  computed:{
    ...mapState(["Products","UserAuth"]),
    cartLength(){
      if(this.UserAuth.cart){
        return this.UserAuth.cart.length
      }else{
        return 0
      }
    },
    productsCart(){
      if(this.UserAuth.cart){
        const productsCart = [];
        this.UserAuth.cart.forEach((cart, index) => {
          this.Products.forEach(item =>{
            if(cart.product === item.id){
              item.quantity = cart.quantity
              item.indexCart = index
              productsCart.push(item)
            }
          })
        })
        return productsCart
      }else{
        return false
      }
    },
    totalCartPrices(){
      if(this.UserAuth.cart){
        return this.productsCart.reduce((sum, product) => {
          return sum + (parseInt(product.price) * product.quantity)
        }, 0)
      }else{
        return 0
      }
    },
  },
  methods:{
    ...mapActions(["getDatas","updateData"]),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    quantityIncrement(id, type = 'increment'){
      const cart = []
      this.UserAuth.cart.forEach((item)=> {
        if(item.product === id){
          if(type === 'decrement'){            
            item.quantity--
          }else{            
            item.quantity++
          }
        }
        cart.push(item)
      })
      this.UserAuth.cart = cart
      this.updateData([{ref: 'Users', data: this.UserAuth}])
    },
    removeCart(index){
      this.UserAuth.cart.splice(index, 1)
      this.updateData([{ref: 'Users', data: this.UserAuth}])
    },
    removeFullCart(){
      this.UserAuth.cart = []      
      this.updateData([{ref: 'Users', data: this.UserAuth}])
    }
  }
}
</script>