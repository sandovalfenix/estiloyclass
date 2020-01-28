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
              <li class="list-gorup-item  d-flex justify-content-between"><span>IVA+ (19%):</span> <span>${{new Intl.NumberFormat().format((totalCartPrices * 0.19))}}</span></li>
              <li class="list-gorup-item  d-flex justify-content-between"><span>Descuento:</span> <span>$0.00</span></li>
            </ul>
            <hr class="border-danger">
            <h4 class="text-right font-weight-bold">Total: ${{new Intl.NumberFormat().format((totalCartPrices * 1.19))}}</h4>
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
                    <a href="javascript:;" class="nav-item border-right">
                      <span class="nav-icon-action">
                        <span class="fas fa-money-bill nav-icon-action-inner"></span>
                      </span>
                      2. Metodo de Pago
                    </a>
                    <a href="javascript:;" class="nav-item">
                      <span class="nav-icon-action">
                        <span class="fas fa-shopping-basket nav-icon-action-inner"></span>
                      </span>
                      3. Finzalizar Compra
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
                                <select class="form-control" id="locationDir0" v-model="Dir0" placeholder="Ciudad" aria-describedby="locationDir0Label" aria-label="Dir0" required>
                                  <option value="Calle">Calle</option>
                                  <option value="Carrera">Carrera</option>
                                  <option value="Avenida">Avenida</option>
                                  <option value="Diagonal">Diagonal</option>
                                  <option value="Transversal">Transversal</option>
                                </select>
                                <input class="form-control" id="locationDir1" v-model="Dir1" type="text" placeholder="--" aria-describedby="locationDir1Label" aria-label="Email" 
                                  data-error-class="u-has-error" 
                                  data-msg="Por favor, introduce una dirección válida." 
                                  data-success-class="u-has-success" required>
                                  
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <span class="fas fa-home"> #</span>
                                  </span>
                                </div>
                                  <input class="form-control" id="locationDir2" v-model="Dir2" type="text" placeholder="--" aria-describedby="locationDir2Label" aria-label="Email" 
                                  data-error-class="u-has-error" 
                                  data-msg="Por favor, introduce una dirección válida." 
                                  data-success-class="u-has-success" required>
                                <div class="input-group-prepend">
                                  <span class="input-group-text">
                                    <span>-</span>
                                  </span>
                                </div>
                                <input class="form-control" id="locationDir3" v-model="Dir3" type="text" placeholder="--" aria-describedby="locationDir3Label" aria-label="Email" 
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
                      <button type="button" class="btn btn-sm btn-primary transition-3d-hover mr-1" data-next-step="#selectStepTwo" :disabled="!address.length && !location.neighborhood.length" @click="updateUser">Continuar</button>
                    </div>
                  </div>

                  <div id="selectStepTwo" style="display: none;">                    
                    <h5 class="text-center font-weight-bold">¿Cómo deseas pagar?</h5>
                    <div class="row">
                      <div class="col">                        
                        <!-- Accordion -->
                        <div id="paymentDetails" class="accordion">
                          <!-- Card -->
                          <div class="card d-none">
                            <div class="card-header card-collapse border py-1" id="cardHeadingOne">
                              <h5 class="mb-0">
                                <a href="javascript:void(0)" class="btn btn-link btn-block card-btn collapsed" role="button"
                                        data-toggle="collapse"
                                        data-target="#cardOne"
                                        aria-expanded="false"
                                        aria-controls="cardOne">
                                  <span class="row align-items-center">
                                    <span class="col mb-2 mb-md-0">
                                      <span class="media align-items-center">
                                        <img class="max-width-9 mr-3" src="https://image.flaticon.com/icons/svg/2036/2036896.svg" alt="Image Description">
                                        <span class="media-body">
                                          <h5 class="text-center">Pago Contra Entrega</h5>
                                        </span>
                                      </span>
                                    </span>
                                    <span class="col text-right">
                                      <span class="card-btn-arrow">
                                        <span class="fas fa-arrow-alt-circle-down small"></span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </h5>
                            </div>
                            <div id="cardOne" class="collapse" aria-labelledby="cardHeadingOne" data-parent="#paymentDetails">
                              <div class="card-body px-4 border">
                                <!-- Card Details -->
                                <div class="row text-center">
                                  <div class="col-12 mb-2 mb-sm-0">
                                    <p class="small">
                                      <span class="fas fa-info-circle mr-1"></span>
                                      Escoge el nuevo método de pago que deseas utilizar:
                                    </p>                                
                                    <div class="btn-group-toggle" data-toggle="buttons">
                                      <label class="btn btn-outline-primary transition-3d-hover btn-sm text-wrap shadow-soft mx-2" @click="payment = 'Efectivo'">
                                        <input type="radio"/>                         
                                      <img class="img-fluid w-15" src="https://image.flaticon.com/icons/svg/864/864996.svg" alt=""> Pago en Efectivo
                                      </label>
                                      <label class="btn btn-outline-primary transition-3d-hover btn-sm text-wrap shadow-soft mx-2" @click="payment = 'Datafono'">
                                        <input type="radio"/>                         
                                      <img class="img-fluid w-15" src="https://image.flaticon.com/icons/svg/138/138361.svg" alt=""> Pago con Datafono
                                      </label>
                                    </div>
                                  </div>
                                </div>
                                <!-- End Card Details -->
                              </div>
                            </div>
                          </div>
                          <!-- End Card -->
                          <!-- Card -->
                          <div class="card">
                            <div class="card-header card-collapse border py-1" id="cardHeadingThree">
                              <h5 class="mb-0">
                                <a href="javascript:void(0)" class="btn btn-link btn-block card-btn collapsed" role="button"
                                        data-toggle="collapse"
                                        data-target="#cardThree"
                                        aria-expanded="false"
                                        aria-controls="cardThree">
                                  <span class="row align-items-center">
                                    <span class="col mb-2 mb-md-0">
                                      <span class="media align-items-center">
                                        <img class="max-width-9 mr-3" src="https://image.flaticon.com/icons/svg/2036/2036896.svg" alt="Image Description">
                                        <span class="media-body">
                                          <h5 class="text-center">Pago con ePayco</h5>
                                        </span>
                                      </span>
                                    </span>
                                    <span class="col text-right">
                                      <span class="card-btn-arrow">
                                        <span class="fas fa-arrow-alt-circle-down small"></span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </h5>
                            </div>
                            <div id="cardThree" class="collapse" aria-labelledby="cardHeadingThree" data-parent="#paymentDetails">
                              <div class="card-body px-4 border">
                                <!-- Card Details -->
                                <div class="row text-center">
                                  <div class="col-12 mb-2 mb-sm-0">
                                    <p class="small">
                                      <span class="fas fa-info-circle mr-1"></span>
                                      Escoge el nuevo método de pago que deseas utilizar:
                                    </p>      
                                    <div class="btn-group-toggle" data-toggle="buttons">
                                      <label class="btn btn-outline-primary transition-3d-hover btn-sm text-wrap shadow-soft mx-2" @click="payment = 'Epayco'">
                                        <input type="radio"/>                         
                                        <input type="image" id="imagen" src="https://369969691f476073508a-60bf0867add971908d4f26a64519c2aa.ssl.cf5.rackcdn.com/btns/btn1.png" />    
                                      </label>
                                    </div>  
                                      
                                  </div>
                                </div>
                                <!-- End Card Details -->
                              </div>
                            </div>
                          </div>
                          <!-- End Card -->
                          <!-- Card -->
                          <div class="card d-none">
                            <div class="card-header card-collapse border py-1" id="cardHeadingTwo">
                              <h5 class="mb-0">
                                <a href="javascript:void(0)" class="btn btn-link btn-block card-btn collapsed" role="button"
                                        data-toggle="collapse"
                                        data-target="#cardTwo"
                                        aria-expanded="false"
                                        aria-controls="cardTwo">
                                  <span class="row align-items-center">
                                    <span class="col mb-2 mb-md-0">
                                      <span class="media align-items-center">
                                        <img class="max-width-9 mr-3" src="https://image.flaticon.com/icons/svg/147/147261.svg" alt="Image Description">
                                        <span class="media-body">
                                          <h5 class="text-center">Pago en Linea</h5>
                                        </span>
                                      </span>
                                    </span>
                                    <span class="col text-right">
                                      <span class="card-btn-arrow">
                                        <span class="fas fa-arrow-alt-circle-down small"></span>
                                      </span>
                                    </span>
                                  </span>
                                </a>
                              </h5>
                            </div>
                            <div id="cardTwo" class="collapse" aria-labelledby="cardHeadingTwo" data-parent="#paymentDetails">
                              <div class="card-body px-4 border">
                                <!-- Card Details -->
                                <div class="row text-center">
                                  <div class="col-12 mb-2 mb-sm-0">
                                    <p class="small">
                                      <span class="fas fa-info-circle mr-1"></span>
                                      Escoge el nuevo método de pago que deseas utilizar:
                                    </p>                                
                                    <div class="btn-group-toggle" data-toggle="buttons">
                                      <label class="btn btn-outline-primary transition-3d-hover btn-sm text-wrap shadow-soft mx-2">
                                        <input type="radio"/>                         
                                      <img class="img-fluid w-15" src="https://image.flaticon.com/icons/svg/196/196561.svg" alt=""> Tarjeta de Credito
                                      </label>
                                      <label class="btn btn-outline-primary transition-3d-hover btn-sm text-wrap shadow-soft mx-2">
                                        <input type="radio"/>                         
                                      <img class="img-fluid w-15" src="https://www.rapicredit.com/blog/wp-content/uploads/2017/01/PSE.png" style="max-width: 215px;"> Debito PSE
                                      </label>
                                    </div>
                                    <p class="small text-center mt-3">
                                      <span class="fas fa-info-circle mr-1"></span>
                                      Hacemos todo lo posible para que el pedido salga completo, en caso de presentar inconvenientes con un producto y el valor es inferior a $10.000 se reembolsará en créditos Merqueo, de ser superior nuestro servicio al cliente se contactará contigo.
                                    </p>  
                                  </div>
                                </div>
                                <!-- End Card Details -->
                              </div>
                            </div>
                          </div>
                          <!-- End Card -->
                        </div>
                        <!-- End Accordion -->
                      </div>
                    </div>
                    <div class="d-flex justify-content-center mt-3">
                      <a class="btn btn-sm btn-soft-secondary transition-3d-hover mr-1" href="javascript:;" data-previous-step="#selectStepOne">Volver</a>
                      <a href="javascript:;" :class="['btn btn-sm btn-primary transition-3d-hover', {'disabled': !payment}]"  data-next-step="#selectStepThree">Continuar</a>
                    </div>
                  </div>

                  <div id="selectStepThree" style="display: none;">
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
                                    <span class="text-dark">$ {{new Intl.NumberFormat().format((totalCartPrices * 1.19))}}</span>
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
                        <button type="submit" class="btn btn-sm btn-primary btn-block transition-3d-hover my-5" :disabled=" term_condition == false">Finalizar Compra</button>

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
      payment: '',
      term_condition: false,      
      Dir0: 'Calle',
      Dir1: null,
      Dir2: null,
      Dir3: null,
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
    }
  },
  created(){
    this.getDatas(['Products', 'Orders'])    
  },
  computed: {
    ...mapState(['UserAuth','Products', 'Orders']),
    address(){
      if(!this.UserAuth.location){
        return this.Dir0+' '+this.Dir1+', #'+this.Dir2+'-'+this.Dir3;
      }else{
        return this.UserAuth.location.address
      }
    },
    location(){
      if(this.UserAuth.location){
        return this.UserAuth.location;
      }else{ 
        return {
          city: 'Buenaventura',
          address: '',
          neighborhood: '',
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
        total: (this.totalCartPrices * 1.19),
        location: this.location,
        payment: this.payment,
        state: 'Pendiente',
        iva: true
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
          test: true
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