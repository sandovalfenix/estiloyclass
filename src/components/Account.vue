<template>
  <div class="overflow-hidden">
    <Header></Header>
    <main class="row">
      <aside id="sidebar" class="col-12 col-md-4 bg-white overflow-auto">
        <div class="card">
          <div class="card-header border-bottom py-2">           
            <header>
              <b>Mi Cuenta</b>
              <h4><i class="fas fa-user-circle mr-2"></i>Hola, {{UserAuth.username}}</h4>
            </header>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label class="small font-weight-bold">Información Personal</label>
              <div class="col p-0 mb-3">
                <h1 :class="[{'text-success': UserAuth.name, 'text-warning':!UserAuth.name,},'small']">Nombres:</h1>
                <input type="text" v-model="UserAuth.name" :class="['form-control form-control-sm border-top-0 border-left-0 border-right-0 rounded-0 bg-light-light', {'border-success': UserAuth.name, 'border-warning': !UserAuth.name}]">
              </div>
              <div class="col p-0 mb-3">
                <h1 :class="[{'text-success': UserAuth.lastName, 'text-warning':!UserAuth.lastName,},'small']">Apellidos:</h1>
                <input type="text" v-model="UserAuth.lastName" :class="['form-control form-control-sm border-top-0 border-left-0 border-right-0 rounded-0 bg-light-light', {'border-success': UserAuth.lastName, 'border-warning': !UserAuth.lastName}]">
                <hr>
                <a v-if="UserAuth.lastName && UserAuth.lastName" href="javascript:;" :class="['btn btn-soft-info btn-block btn-sm']" @click="saveDisplayName">Actualizar</a>
              </div>
            </div>
            <div class="form-group">
              <label class="small font-weight-bold">Información Cuenta</label>
              
              <div class="col p-0 mb-3">
                <h1 class="text-success small">Teléfono:</h1>
                <input type="text" v-model="UserAuth.phone" class="form-control form-control-sm border-top-0 border-left-0 border-right-0 rounded-0 bg-light-light border-success text-light" disabled>
              </div>
              <div class="col p-0 mb-3">
                <h1 class="text-success small">Correo Electrónico:</h1>
                <input type="text" v-model="UserAuth.email" class="form-control form-control-sm border-top-0 border-left-0 border-right-0 rounded-0 bg-light-light border-success text-light" disabled>
              </div>
            </div>
          </div>
          <div :class="['card-footer border-top mb-5 pb-5 mb-md-0 pb-md-3', {'bg-warning': !UserAuth.name && !UserAuth.lastName, 'bg-success': UserAuth.name && UserAuth.lastName}]">
            <h6 class="text-dark" v-if="!UserAuth.name"><i class="fas fa-times-circle mr-2"></i>Falta Nombres</h6>
            <h6 class="text-dark" v-if="!UserAuth.lastName"><i class="fas fa-times-circle mr-2"></i>Falta Apellidos</h6>
            <h5 class="text-white" v-if="UserAuth.name && UserAuth.lastName"><i class="fas fa-check-circle mr-2"></i>Perfil completo</h5>
          </div>
        </div>
      </aside>
      <div class="col">
        <div class="py-4 ml-sm-10 px-3">
          <a href="/">          
            <span>
              <i class="fas fa-arrow-left mr-2"></i> Volver
            </span>
          </a>
          <div class="space-top-1">
            <div id="accordionId" role="tablist" aria-multiselectable="true">
              <div class="card border-bottom">
                <div class="card-header" role="tab" id="section1HeaderId">
                  <h5 class="mb-0">
                    <a data-toggle="collapse" data-parent="#accordionId" href="#section1ContentId" aria-expanded="true" aria-controls="section1ContentId">
                      <i class="fas fa-map-marked-alt fa-2x mr-2"></i> Mi Dirección
                    </a>
                  </h5>
                </div>
                <div id="section1ContentId" class="collapse in" role="tabpanel" aria-labelledby="section1HeaderId">
                  <div class="card-body">
                    <ul class="list-group">
                      <li class="list-group-item"><i class="fas fa-city mr-2"></i>Ciudad: {{location.city}}</li>
                      <li class="list-group-item"><i class="fas fa-street-view mr-2"></i>Ubicación: {{location.address}}</li>
                      <li class="list-group-item"><i class="fas fa-address-card mr-2"></i>Barrio: {{location.neighborhood}}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" role="tab" id="section2HeaderId">
                  <h5 class="mb-0">
                    <a data-toggle="collapse" data-parent="#accordionId" href="#section2ContentId" aria-expanded="true" aria-controls="section2ContentId">
                     <i class="fas fa-shopping-basket fa-2x mr-2"></i> Mis Pedidos
                    </a>
                  </h5>
                </div>
                <div id="section2ContentId" class="collapse in" role="tabpanel" aria-labelledby="section2HeaderId">
                  <div class="card-body">
                    <ul class="list-group">
                      <li v-for="(Order, index) in OrdersUser" :key="Order.id" class="list-group-item">
                        <ul class="list-group">
                          <li class="list-group-item d-md-flex justify-content-md-between ">
                            <span class="d-block"><i class="fas fa-shopping-basket mr-2"></i>Pedido # {{++index}}</span>
                            <span class="d-block">| Fecha Entrega: {{Order.date.day}}</span>
                            <span class="d-block">| Hora Entrega: {{Order.date.time}}</span>
                            <span class="d-block">| Total: ${{formatPrice(Order.total)}}</span>
                            <span class="d-block">| Estado: <b :class="['badge',{'badge-warning': Order.state === 'Pendiente'}]">{{Order.state}}</b></span>
                            <a :id="Order.id+'Views'" href="javascript:;" @click="detailsOrderViews(Order.id)">| Mas Detalles<i class="ml-2 fas fa-arrow-alt-circle-down"></i></a>
                            <a :id="Order.id+'None'" href="javascript:;" class="d-none" @click="detailsOrderNone(Order.id)">| Mas Detalles<i class="ml-2 fas fa-arrow-alt-circle-up"></i></a>
                          </li>
                          <li :class="['list-group-item','d-none', Order.id]" v-for="(item, index) in productsOrder(Order.id)" :key="index">
                            <img :src="item.img" class="img-fluid d-md-none d-block w-50" style="width: 8%">
                            <img :src="item.img" class="img-fluid d-md-block d-none" style="width: 8%">
                            <b>{{item.name}}</b>
                            <span class="d-block">Cantidad: {{item.quantity}}</span>
                            <span class="d-block">Precio Und: ${{formatPrice(item.price)}}</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>    
  </div>
</template>
<script>
import Header from '@/components/Header.vue';
import { mapState, mapActions } from 'vuex';
import $ from 'jquery';

export default {
  name: 'Account',
  components:{
    Header,
  },
  created(){
    this.getDatas(['Orders', 'Products'])
  },
  computed:{
    ...mapState(['UserAuth', 'Orders', 'Products']),
    location(){
      if(this.UserAuth.location){
        return this.UserAuth.location;
      }else{ 
        return {
          city: '',
          address: '',
          neighborhood: '',
          name: 'Casa',
        }
      }
    },  
    OrdersUser(){
      let ordersUser = []

      if(this.UserAuth.id){
        ordersUser = this.Orders.filter(order =>{
          return order.user === this.UserAuth.id
        })
      }

      return ordersUser
    },
  },
  methods:{
    ...mapActions(['updateData','getDatas']),
    detailsOrderViews(id){
      $('.'+id).removeClass('d-none');
      $('.'+id).addClass('d-md-flex justify-content-md-between')
      $('#'+id+'Views').addClass('d-none');
      $('#'+id+'None').removeClass('d-none');
    },
    detailsOrderNone(id){
      $('.'+id).addClass('d-none');
      $('.'+id).removeClass('d-md-flex justify-content-md-between');
      $('#'+id+'Views').removeClass('d-none');
      $('#'+id+'None').addClass('d-none');
    },
    productsOrder(id){
      if(this.OrdersUser && id){       
        const productsOrder = [];        
        this.OrdersUser.forEach(OrderUser =>{
          if(OrderUser.id === id){
            OrderUser.items.forEach((order, index) => {
              this.Products.forEach(item =>{
                if(order.product === item.id){
                  item.quantity = order.quantity
                  item.indexOrder = index
                  productsOrder.push(item)
                }
              })
            })
          }
        })
        return productsOrder
      }else{
        return false
      }
    },               
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },    
    saveDisplayName(){
      this.updateData([{ref: 'Users', data: this.UserAuth}]);
    }
  }
}
</script>