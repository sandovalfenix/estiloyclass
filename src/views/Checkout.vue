<template>
  <div class="overflow-hidden">
    <!-- Header -->
    <header id="headerBrand" class="u-header" style="position: fixed">
      <div class="u-header__section">
        <div id="brandLogoAndNav" class="container">
          <!-- Nav -->
          <nav class="navbar navbar-expand-md u-header__navbar">
            <!-- Logo -->
            <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/" aria-label="Front">
              <img src="@/assets/logo.png" alt="Image Description" style="width: 100px">
            </a>
            <!-- End Logo -->
            <div class="header-content col pl-md-0">
              <div class="d-flex align-items-center">

                <!-- Header Dropdown -->
                <div class="ml-auto">
                  <a class="btn btn-outline-info rounded-pill px-7 py-2" href="/">
                    <span class="text-uppercase small">Ir a la Tienda</span>
                  </a>
                </div>
                <!-- End Header Dropdown -->
              </div>
            </div>
          </nav>
          <!-- End Nav -->
        </div>
      </div>
    </header>
    <!-- End Header --> 
    <div class="container-fluid pt-11 px-0">
      <div class="row">
        <aside class="col-12 col-md-4">
          <a id="itemCart" href="javascript:void(0);" class="btn btn-soft-primary btn-block p-3 d-md-none js-animation-link" @click="itemsShop"> <span class="h4 font-weight-bold" 
            data-target="#itemsShop"
            data-link-group="groups"
            data-animation-in="fadeInDown"><i class="fas fa-cart-arrow-down mr-2"></i>Tu Pedido</span> </a>
          <div id="itemsShop" class="card d-none d-md-flex z-index-2">
           <div class="card-header bg-white fixed-top mt-10 pt-4 pb-3 col-md-4 col d-none d-md-flex">
             <h5 class="mb-0">Tu pedido</h5>
           </div>
           <div class="card bg-white position-fixed height-100vh overflow-auto px-0 mt-10 bottom-0 col-md-4 col">
             <ul id="sideNav" class="list-group mt-10 pt-9 pb-10 mb-8" v-if="productsCart.length">
              <!-- Settings -->
              <li v-for="item in productsCart" :key="item.id" class="list-group-item bg-white pt-3">
                <div class="d-flex">
                  <div class="w-15">
                    <img class="img-fluid rounded" :src="item.img" alt="Image Description">
                  </div>
                  <div class="card-body p-0">
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="col d-block">
                        <span class="font-weight-semi-bold">{{item.name}}</span>
                        <p class="font-size-1">{{item.category.name}}</p>
                      </div>
                      <div class="col text-right">
                        <span class="text-primary h6">${{formatPrice(item.price)}}</span>
                        
                        <p class="small text-gray mr-2">Cantidad: <b>{{item.quantity}}</b></p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <!-- End Settings -->
            </ul>
           </div>
           <div class="card-footer bg-white py-2 fixed-bottom col-md-4 col">
            <ul class="list-group">
              <li class="list-gorup-item  d-flex justify-content-between"><span>Subtotal:</span> <span>${{new Intl.NumberFormat().format(totalCartPrices)}}</span></li>
              <li class="list-gorup-item  d-flex justify-content-between"><span>Envio:</span> <span>${{formatPrice(priceSend)}}</span></li>
            </ul>
            <hr class="border-danger">
            <h4 class="text-right font-weight-bold">Total: ${{new Intl.NumberFormat().format((totalCartPrices + priceSend))}}</h4>
           </div>
          </div>
        </aside>
        <main class="col col-md-8">
          <div class="container-fluid px-0 px-md-3">            
            <!-- Step Form -->
            <form class="js-validate js-step-form shadow-soft"
                  data-progress-id="#progressStepForm"
                  data-steps-id="#contentStepForm"
                  novalidate="novalidate"
                  @submit.prevent="order">
              <div class="card">
                <div class="card-header pt-1 pb-0">
                  <nav id="progressStepForm" class="js-step-progress nav nav-icon nav-justified text-center small">
                    <a href="javascript:;" class="nav-item border-right">
                      <span class="nav-icon-action">
                        <span class="fas fa-map-marked-alt nav-icon-action-inner"></span>
                      </span>
                      1. Direccion
                    </a>
                    <a href="javascript:;" class="nav-item">
                      <span class="nav-icon-action">
                        <span class="fas fa-shopping-basket nav-icon-action-inner"></span>
                      </span>
                      2. Pagar en Epayco
                    </a>
                  </nav>
                </div>
                <!-- Content Step Form -->
                <div id="contentStepForm" class="card-body p-3 border-top">
                  <div id="selectStepOne" class="active">
                    <h5 class="text-center font-weight-bold">Llevaremos tu pedido a:</h5>
                    <div class="row bg-soft-light border-bottom mb-3 p-3">
                        <div class="container">
                          <!-- Form Group -->
                          <div class="form-group">
                            <div class="js-form-message js-focus-state">
                              <div class="input-group">
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <span class="fas fa-street-view"></span>
                                  </span>
                                </div>
                                <input class="form-control" id="locationDir1" v-model="address" type="text" placeholder="Direccion" aria-describedby="locationDir1Label" aria-label="address" 
                                  data-error-class="u-has-error" 
                                  data-msg="Por favor, introduce una dirección válida." 
                                  data-success-class="u-has-success" required>
                              </div>
                            </div>
                          </div>
                          <!-- End Form Group -->
                        </div>
                    </div>
                    <div class="row">
                      <div class="col">                        
                        <p class="text-center small">Completa estos datos para poder ubicarte mejor y mucho más rápido :)</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-12 col-md-6 mb-3">
                        <label class="form-control-label">CC o NIT <span class="text-danger">*</span></label>
                        <input type="text" v-model="UserAuth.ID" :class="['form-control form-control-sm bg-soft-light border-top-0 border-left-0 border-right-0 rounded-0 border-dark']" required>
                      </div>
                      <div class="col-12 col-md-6 mb-3">
                        <label class="form-control-label">Nombres <span class="text-danger">*</span></label>
                        <input type="text" v-model="UserAuth.name" :class="['form-control form-control-sm bg-soft-light border-top-0 border-left-0 border-right-0 rounded-0 border-dark']" required>
                      </div>
                      <div class="col-12 col-md-6 mb-3">
                        <label class="form-control-label">Apellidos <span class="text-danger">*</span></label>
                        <input type="text" v-model="UserAuth.lastName" :class="['form-control form-control-sm bg-soft-light border-top-0 border-left-0 border-right-0 rounded-0 border-dark']" required>
                      </div>
                      <div class="col-12 col-md-6 mb-3">
                        <label class="form-control-label">Telefono 2<span class="text-danger">*</span></label>
                        <input type="text" v-model="UserAuth.phone" :class="['form-control form-control-sm bg-soft-light border-top-0 border-left-0 border-right-0 rounded-0 border-dark']" required>
                      </div>
                    </div>
                    <div class="row my-3">
                      <div class="col-12 mb-3 col-md-6 js-form-message js-focus-state">
                        <label class="position-absolute top-7 small pl-2">Barrio <span class="text-danger">*</span></label>             
                        <input type="text" class="form-control border-top-0 border-left-0 border-right-0 bg-soft-light border-bottom border-darker p-2 pt-5 rounded-0 small" v-model="location.neighborhood" placeholder="Nombre del Barrio" required 
                          data-msg="Por favor, introduce un nombre de barrio correcto."
                          data-error-class="u-has-error"
                          data-success-class="u-has-success">
                      </div>
                      <div class="col-12 mb-3 col-md-6 js-form-message js-focus-state">
                        <label class="position-absolute top-7 small pl-2">Informacion Adiciona</label>
                        <input type="text" class="form-control border-top-0 border-left-0 border-right-0 bg-soft-light border-bottom border-darker p-2 pt-5 rounded-0 small" v-model="location.details" placeholder="Ej: Torre 1, Apto 505">
                      </div>
                    </div>
                    <div class="row my-5">
                      <div class="col">
                        <label>Dale un nombre a la dirección:</label>
                        <br>
                        <div class="custom-control custom-radio rounded-right-pill border border-primary custom-control-inline px-3">
                          <input type="radio" id="customRadioInline1" v-model="location.name"
                          value="Casa" class="custom-control-input" required>
                          <label class="custom-control-label" for="customRadioInline1">Casa</label>
                        </div>
                        <div class="custom-control custom-radio rounded-right-pill border border-primary custom-control-inline px-3">
                          <input type="radio" id="customRadioInline2" v-model="location.name"
                          value="Apartamento" class="custom-control-input" required>
                          <label class="custom-control-label" for="customRadioInline2">Apartamento</label>
                        </div>
                        <div class="custom-control custom-radio rounded-right-pill border border-primary custom-control-inline px-3">
                          <input type="radio" id="customRadioInline3" v-model="location.name"
                          value="Oficina" class="custom-control-input" required>
                          <label class="custom-control-label" for="customRadioInline3">Oficina</label>
                        </div>
                        <div class="custom-control custom-radio rounded-right-pill border border-primary custom-control-inline px-3">
                          <input type="radio" id="customRadioInline4" v-model="location.name"
                          value="Otros" class="custom-control-input" required>
                          <label class="custom-control-label" for="customRadioInline4">Otros</label>
                        </div>
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mt-5">
                      <button type="button" class="btn btn-sm btn-primary transition-3d-hover mr-1" data-next-step="#selectStepTwo" :disabled="address == null && !location.neighborhood && !location.name && !UserAuth.name && !UserAuth.ID" @click="updateUser">Continuar</button>
                    </div>
                  </div>

                  <div id="selectStepTwo" style="display: none;">                
                    <div class="row">              
                      <div class="col-12 col-md-8">
                        <!-- Projects -->
                        <div class="card">
                          <div class="card-body p-5 border gradient-overlay-half-info-v1 shadow-soft rounded">
                            <!-- Details -->
                            <div class="d-sm-flex">
                              <div class="u-lg-avatar mb-3 mb-sm-0 mr-3">
                                <img class="img-fluid" src="https://image.flaticon.com/icons/svg/864/864996.svg" alt="Image Description">
                              </div>

                              <div class="mr-3">
                                <!-- Title -->
                                <div class="mb-3">                                  
                                  <p class="font-size-1 mb-1">Pago Contra Entrega</p>
                                  <h3 class="h5">{{payment}}</h3>
                                </div>
                                <!-- End Title -->

                                <div class="d-sm-flex align-items-sm-center">

                                  <!-- Budget -->
                                  <div class="u-ver-divider u-ver-divider--none-sm pr-4 mb-3 mb-sm-0 mr-4">
                                    <h4 class="small font-weight-normal mb-0">Total a Pagar:</h4>
                                    <span class="text-dark">$ {{new Intl.NumberFormat().format((totalCartPrices + priceSend))}}</span>
                                  </div>
                                  <!-- End Budget -->

                                  <!-- Priority -->
                                  <div class="mr-4">
                                    <h4 class="small font-weight-normal mb-0">Entrega:</h4>
                                    <i class="fas fa-map-marker-alt fa-1x mr-2"></i>
                                    <span class="text-dark font-size-1">{{address}}</span>
                                  </div>
                                  <!-- End Priority -->
                                </div>
                              </div>
                            </div>
                            <!-- End Details -->
                          </div>
                        </div>
                        <!-- End Projects -->
                      </div>
                      <div class="col col-md-4">                        
                        <button type="submit" class="btn btn-sm btn-primary btn-block transition-3d-hover my-5" :disabled=" term_condition == false">Ir a Pagar</button>

                        <div class="custom-control custom-checkbox custom-control-inline text-center">
                          <input type="checkbox" id="customCheckboxInline10" v-model="term_condition" :value="true" class="custom-control-input form-control-lg" @click="term_condition = !term_condition">
                          <label class="custom-control-label small" for="customCheckboxInline10">He leído y estoy de acuerdo con los <a href="#">Términos y Condiciones</a> y <a href="#">Políticas de privacidad</a></label>
                        </div>
                      </div>
                    </div>    
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-sm btn-soft-secondary transition-3d-hover mr-1" href="javascript:;" data-previous-step="#selectStepTwo">Volver</a>
                    </div>
                  </div>
                </div>
                <!-- End Content Step Form -->
              </div>
            </form>
            <!-- End Step Form -->
          </div>
          <!-- <router-view/> -->
        </main>
      </div>
    </div>
  </div>
</template>
<script>
    
import { mapState, mapActions } from 'vuex';
import $ from 'jquery'

export default {
  data(){
    return {
      payment: 'Epayco',
      address: null,
      term_condition: true, 
      shopData: {
        name: "Compra Estilo y Class",
        description: "Compra sitio web Estilo y Class",
        tax_base: "0",
        tax: "0",
        country: "co",
        lang: "es",
        currency: "cop",
        external: "true",
        type_doc_billing: "cc"
      },
      handler: false,
      
      Month: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre"
      ],
      priceSend: 6000
    }
  },
  created(){
    this.getDatas(['Products', 'Orders']) 
  },
  
  computed: {
    ...mapState(['UserAuth','Products', 'Orders']),
    location(){
      if(this.UserAuth.location){
        return this.UserAuth.location;
      }else{ 
        return {
          city: 'Buenaventura',
          address: null,
          neighborhood: null,
          name: 'Casa',
        }
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
  mounted(){
    let scriptExt = document.createElement('script')
    scriptExt.setAttribute('src', 'https://checkout.epayco.co/checkout.js')
    document.body.appendChild(scriptExt)
  },
  methods:{
    ...mapActions(['getDatas', 'updateData', 'addData']),            
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    updateUser(){ 
      this.addLocation();

      var User = this.UserAuth;
      if(User.username){        
        delete User.username;
      }

      //updateData
      this.updateData([{ref: 'Users', data: User}])
    },
    addLocation(){
      this.location.address = this.address;
      this.UserAuth.location = this.location;

      var User = this.UserAuth;
      if(User.username){        
        delete User.username;
      }

      //updateData
      this.updateData([{ref: 'Users', data: User}])
    },
    order(){
      let Data = {
        items: this.UserAuth.cart,
        user: this.UserAuth.id,
        total: (this.totalCartPrices + this.priceSend),
        location: this.location,
        payment: this.payment,
        state: 'Pendiente',
        iva: false
      }
      this.addData([{ref: 'Orders', data: Data}]);
      this.removeFullCart();

      if(this.payment !== 'Epayco'){
        setTimeout(() => {        
          window.location.href = "/";
        }, 3000);
      }else{
        // eslint-disable-next-line
        var handler = ePayco.checkout.configure({
          key: 'c9549149a4c637275925679790e185f3',
          test: false
        })

        this.shopData.invoice = String(this.Orders.length);
        this.shopData.amount = String(Data.total);

        this.shopData.name_billing = this.UserAuth.name + ' ' + this.UserAuth.lastName;
        this.shopData.address_billing = Data.location.address;
        this.shopData.mobilephone_billing = this.UserAuth.phone;
        this.shopData.number_doc_billing = this.UserAuth.ID;

        handler.open(this.shopData)
      }
    },
    removeFullCart(){
      this.UserAuth.cart = []      
      this.updateData([{ref: 'Users', data: this.UserAuth}])
    },
    itemsShop() {
      if($('#itemCart').data('itemshop')){
        $('#itemCart').data('itemshop', false)
        $('#itemCart').removeClass(['position-fixed','z-index-4'])
        $('#itemsShop').addClass('d-none');
      }else{
        $('#itemCart').data('itemshop', true);          
        $('#itemsShop').removeClass('d-none');
        $('#itemCart').addClass(['position-fixed','z-index-4'])
      }
    }
  }
}
</script>