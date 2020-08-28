<template>
  <div class="container space-2 px-md-7 px-lg-11">
    <div class="card bg-img-hero" style="background-image: url(//htmlstream.com/preview/front-v2.9.2/assets/svg/components/bg-elements-6.svg);">
      <div class="card-body p-5 p-md-7 p-lg-11">
        <div class="row justify-content-lg-between align-items-sm-center mb-11">
          <div class="col-sm-6 col-lg-4 order-sm-2 text-sm-right mb-5 mb-sm-0">
            <h1 class="h2 font-weight-medium mb-0">
              Factura #
              <span v-if="$route.params.num < 10" class="d-block">00{{$route.params.num}}</span>
              <span v-if="$route.params.num >= 10 && $route.params.num < 100" class="d-block">0{{$route.params.num}}</span>
              <span v-if="$route.params.num >= 100 && $route.params.num < 1000" class="d-block">{{$route.params.num}}</span>
            </h1>
          </div>

          <div class="col-sm-6 col-lg-4 order-sm-1">
            <!-- Logo -->
            <img class="mb-2" src="@/assets/logo.png" alt="Logo" style="width: 100px">
            <h2 class="h3 text-primary font-weight-semi-bold">Estilo & Class SAS</h2>
            <!-- End Logo -->

            <!-- Address -->
            <!--small class="d-block text-muted">tel: +1 (062) 109-9222</small-->
            <!-- End Address -->
          </div>
        </div>

        <!-- Bill To -->
        <div v-if="OrderClient.user" class="row justify-content-md-between mb-7">
          <div class="col-md-5 col-lg-4">
            <h3 class="h5">Cobrar a:</h3>
            <span class="d-block">{{OrderClient.user.name}} {{OrderClient.user.lastName}}</span>
            <span class="d-block">{{OrderClient.user.email}}</span>
            <address class="text-secondary mb-0">
              {{OrderClient.location.address}}, Barrio {{OrderClient.location.neighborhood}}, {{OrderClient.location.name}} - {{OrderClient.location.city}}
            </address>
          </div>

          <div class="col-md-5 col-lg-4 mt-6">
            <dl class="row mb-0">
              <dt class="col-5 col-md-6 font-weight-normal text-secondary">Fecha de Factura:</dt>
              <dd class="col-7 col-md-6 font-weight-medium">{{(new Date(OrderClient.createTime).getDate()) + ' / ' + (new Date(OrderClient.createTime).getMonth() + 1) + '/' + (new Date(OrderClient.createTime).getYear() + 1900)}}</dd>
            </dl>
          </div>
        </div>
        <!-- End Bill To -->

        <!-- Table -->
        <table class="table table-heighlighted font-size-1 mb-9">
          <thead>
            <tr class="text-uppercase text-secondary">
              <th scope="col" class="font-weight-medium">Producto</th>
              <th scope="col" class="font-weight-medium">Unidad</th>
              <th scope="col" class="font-weight-medium">Cantidad</th>
              <th scope="col" class="font-weight-medium text-right">Precio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(productOrder, index) in productsOrder" :key="index">
              <th scope="row" class="font-weight-normal">{{productOrder.name}}</th>
              <td>{{productOrder.weight}}</td>
              <td>{{productOrder.quantity}}</td>
              <td class="text-right">$ {{formatPrice(productOrder.price)}}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr class="h6">
              <td scope="row">Total</td>
              <td colspan="3" class="text-right">$ {{formatPrice(OrderClient.total)}}</td>
            </tr>
          </tfoot>
        </table>
        <!-- End Table -->

        <!-- Contacts -->
        <div class="row justify-content-lg-between">
          <div class="col-md-8 col-lg-7 order-md-2 mb-5 mb-md-0">
            <h4 class="h6">¡Gracias!</h4>
            <p class="font-size-1">Si tiene alguna pregunta sobre esta factura, use la siguiente información de contacto:</p>

            <span class="d-block">
              <small class="font-weight-medium mr-1">Correo:</small>
              <small class="text-muted">info@estiloyclass.com</small>
            </span>
            <!--small class="font-weight-medium">telephone:</small>
            <small class="text-muted">+1 (062) 109-9222</small-->
          </div>

          <div class="col-md-4 col-lg-3 order-md-1 align-self-end">
            <p class="small text-muted mb-0">&copy; 2019 derechos reservados a Estilo&Class.com, Disañado por Aitheria Technology SAS.</p>
          </div>
        </div>
        <!-- End Contacts -->
      </div>
    </div>

    <div class="text-right mt-5">
      <button type="button" class="btn btn-primary btn-sm-wide transition-3d-hover" onclick="window.print();return false;">
        <span class="fas fa-print mr-2"></span>
        Imprimir
      </button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Invoice',
  created() {
    this.getDatas(['Products', 'Users']);
    this.getData([{ref: 'Orders', id: this.$route.params.id}]);
  },
  computed: {
    ...mapState(['Users', 'Order', 'Products']),
    OrderClient() {
      var Order = false;
      if(this.Users && this.Order){
        Order = this.Order
        this.Users.forEach(user => {
          if(user.id === this.Order.user){
            delete Order.user
            Order.dateFull = Order.date.day +', Hora: '+ Order.date.time
            Order.user = user
          }
        });
      }

      return Order
    },
    productsOrder() {      
      const productsOrder = [];
      if (this.Products.length && this.Order.items) {
        var OrderItems = this.Order.items
        OrderItems.forEach((order, index) => {
          this.Products.forEach(item => {
            if (order.product === item.id) {
              item.quantity = order.quantity;
              item.indexOrder = index;
              productsOrder.push(item);
            }
          });
        });
      }
      return productsOrder;
    },
  },
  methods: {
    ...mapActions(['getDatas', 'getData']),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
  },

};
</script>
