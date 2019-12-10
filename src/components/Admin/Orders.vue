<template>
  <div class="container space-2">
    <div class="card">
      <div class="card-body p-4">
        <!-- Activity Table -->
        <div class="table-responsive-md">
          <table class="table table-warning table-hover">
            <thead>
              <tr class="text-uppercase font-size-1">
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Orden
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Cliente
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Telefono
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Pago
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Fecha Entrega
                  </div>
                </th>
                <th scope="col" class="font-weight-medium">
                  <div class="d-flex justify-content-between align-items-center">
                    Estado
                  </div>
                </th>
              </tr>
            </thead>
            <tbody v-for="(OrderClient, index) in OrdersClient" :key="index" class="font-size-1">
              <tr>
                <td v-if="++index < 10" class="align-middle text-secondary font-weight-normal">
                  <a :id="index + 'Views'" href="javascript:;" @click="detailsOrderViews(index)">
                    <i class="fa fa-angle-down mr-1"></i>
                    OR00{{index}}
                  </a>
                  <a :id="index + 'None'" href="javascript:;" class="d-none" @click="detailsOrderNone(index)">
                    <i class="fa fa-angle-up mr-1"></i>
                    OR00{{index}} 
                  </a>                 
                </td>
                <td v-if="index >= 10 && index < 100" class="align-middle text-secondary font-weight-normal">
                  <a :id="index + 'Views'" href="javascript:;" @click="detailsOrderViews(index)">
                    <i class="fa fa-angle-down mr-1"></i>
                    OR0{{index}}
                  </a>
                  <a :id="index + 'None'" href="javascript:;" class="d-none" @click="detailsOrderNone(index)">
                    <i class="fa fa-angle-up mr-1"></i>
                    OR0{{index}} 
                  </a>
                </td>
                <td v-if="index >= 100 && index < 1000" class="align-middle text-secondary font-weight-normal">
                  <a :id="index + 'Views'" href="javascript:;" @click="detailsOrderViews(index)">
                    <i class="fa fa-angle-down mr-1"></i>
                    OR{{index}}
                  </a>
                  <a :id="index + 'None'" href="javascript:;" class="d-none" @click="detailsOrderNone(index)">
                    <i class="fa fa-angle-up mr-1"></i>
                    OR{{index}} 
                  </a>
                </td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-success rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fa fa-user-circle"></i></span>
                    </span>
                    <span>{{OrderClient.user.email }}</span>
                  </div>
                </td>
                <td class="align-middle">
                  <div class="media align-items-center">
                    <span class="btn btn-sm btn-icon btn-soft-success rounded-circle mr-2">
                      <span class="btn-icon__inner font-weight-medium"><i class="fab fa-whatsapp"></i></span>
                    </span>
                    <span>{{OrderClient.user.phone }}</span>
                  </div>
                </td>
                <td class="align-middle text-primary">${{formatPrice(OrderClient.total)}}</td>
                <td class="align-middle text-dark">{{ OrderClient.dateFull }}</td>
                <td class="align-middle">
                  <select v-model="OrderClient.state" :class="['form-control-sm font-weight-bold', {'text-danger': OrderClient.state === 'Pendiente', 'text-warning': OrderClient.state === 'Enviado', 'text-success': OrderClient.state === 'Recibido'}]" @change="OrderUpdateState(OrderClient)">
                    <option class="font-weight-bold text-danger" value="Pendiente">Pendiente</option>
                    <option class="font-weight-bold text-warning"  value="Enviado">Enviado</option>
                    <option class="font-weight-bold text-success" value="Recibido">Recibido</option>
                  </select>
                </td>
              </tr>
              <tr :id="'detailsOrder'+index" class="d-none">
                <td colspan="6">
                  <div class="border rounded p-5 bg-white">
                  <h4 class="h3">FACTURA</h4>

                  <div class="row mb-6">
                    <div class="col-3">
                      <span class="text-secondary mr-1">Fecha:</span>
                      <span class="font-weight-medium">{{(new Date(OrderClient.createTime).getDate()) + ' de ' + Month[(new Date(OrderClient.createTime).getMonth())] + ' ' + (new Date(OrderClient.createTime).getYear() + 1900)}}</span>
                    </div>
                    <div class="col-3">
                      <span class="text-secondary mr-1">Entidad:</span>
                      <span class="font-weight-medium">Merca2.co</span>
                    </div>
                    <div class="col-6">
                      <span class="text-secondary mr-1">Numero de Factura:</span>
                      <span v-if="index < 10" class="font-weight-medium">00{{index}}</span>
                      <span v-if="index >= 10 && index < 100" class="font-weight-medium">0{{index}}</span>
                      <span v-if="index > 100 && index < 1000" class="font-weight-medium">{{index}}</span>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6 mb-3 mb-sm-0">
                      <h5 class="text-dark font-size-1 text-uppercase">Productos Facturados:</h5>
                      <div v-for="(productOrder, index) in productsOrder(OrderClient.id)" :key="index" class="text-secondary d-flex justify-content-between mb-2">
                        <img :src="productOrder.img" class="img-fluid rounded" style="width: 45px">
                        <p class="h6 text-dark">{{productOrder.name}}</p>
                        <p>{{productOrder.weight}}</p>
                        <p>Cantidad: <span class="h6 text-dark">{{productOrder.quantity}}</span></p>
                        <p>{{productOrder.details}}</p>
                      </div>
                    </div>

                    <div class="col-sm-6">
                      <h5 class="text-dark font-size-1 text-uppercase">Informacion del Cliente:</h5>
                      <ul class="list-unstyled mb-2">
                        <li class="mb-2">
                          <span class="text-secondary mr-1">Nombre:</span>
                          <span class="font-weight-medium">{{OrderClient.user.name}}</span>
                        </li>
                        <li class="mb-2">
                          <span class="text-secondary mr-1">Apellido:</span>
                          <span class="font-weight-medium">{{OrderClient.user.lastName}}</span>
                        </li>
                        <li class="mb-2">
                          <span class="text-secondary mr-1">Ciudad:</span>
                          <span class="font-weight-medium">{{OrderClient.location.city}}</span>
                        </li>
                        <li class="mb-2">
                          <span class="text-secondary mr-1">Direccion:</span>
                          <span class="font-weight-medium">{{OrderClient.location.address}}, {{OrderClient.location.neighborhood}}, {{OrderClient.location.name}}</span>
                        </li>
                      </ul>
                      <hr class="my-4">

                      <h5 class="text-dark font-size-1 text-uppercase">Detalles de pago:</h5>
                      <ul class="list-unstyled mb-0">
                        <li class="d-flex justify-content-between align-items-center mb-2">
                          <span class="text-secondary">Cantidad a pagar</span>
                          <span class="font-weight-medium">${{formatPrice(OrderClient.total * (1-0.19))}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center mb-2">
                          <span class="text-secondary">+IVA 19%</span>
                          <span class="font-weight-medium">${{formatPrice(OrderClient.total * 0.19)}}</span>
                        </li>
                        <li class="d-flex justify-content-between align-items-center mb-2">
                          <span class="text-secondary">Total Pagar</span>
                          <span class="text-primary font-weight-medium">${{formatPrice(OrderClient.total)}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <ul class="list-inline mt-4 d-flex justify-content-end">
                    <li class="list-inline-item u-ver-divider pr-3 mr-3">
                      <a :href="'/invoice/'+OrderClient.id+'/'+index" class="btn btn-soft-primary transition-3d-hover">
                        <span class="fas fa-file-pdf mr-1"></span>
                        Descargar Factura
                      </a>
                    </li>
                  </ul>
                </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- End Activity Table -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Orders',
  data() {
    return {
      location: false,
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
      date: ''
    };
  },
  created() {
    this.getDatas(['Users', 'Orders', 'Products']);
  },
  computed: {
    ...mapState(['Users', 'Orders', 'Products']),
    OrdersClient() {
      const UsersOrders = [];
      this.Orders.forEach(order => {
        this.Users.forEach(user => {
          if(order.user === user.id){
            delete order.user
            order.dateFull = order.date.day +', Hora: '+ order.date.time
            order.user = user
            UsersOrders.push(order);
          }
        });
      });

      return UsersOrders
    }
  },
  methods: {
    ...mapActions(['getDatas', 'updateData']),
    productsOrder(id) {
      if (this.Orders && id) {
        const productsOrder = [];
        this.Orders.forEach(OrderUser => {
          if (OrderUser.id === id) {
            OrderUser.items.forEach((order, index) => {
              this.Products.forEach(item => {
                if (order.product === item.id) {
                  item.quantity = order.quantity;
                  item.indexOrder = index;
                  productsOrder.push(item);
                }
              });
            });
          }
        });
        return productsOrder;
      } else {
        return false;
      }
    },
    OrderUpdateState(Order){
      var user = Order.user.id
      delete Order.user
      delete Order.dateFull
      Order.user = user
      
      this.updateData([{ref: 'Orders', data: Order}])
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.');
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    },
    detailsOrderViews(id) {
      $('#detailsOrder'+ id).removeClass('d-none');
      $('#' + id + 'Views').addClass('d-none');
      $('#' + id + 'None').removeClass('d-none');
    },
    detailsOrderNone(id) {
      $('#detailsOrder'+ id).addClass('d-none');
      $('#' + id + 'Views').removeClass('d-none');
      $('#' + id + 'None').addClass('d-none');
    },
  },

};
</script>
