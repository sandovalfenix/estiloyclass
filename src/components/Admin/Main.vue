<template>
  <div v-if="Orders && Products" class="container space-2">
    <!-- Stats -->
    
    <h3 class="h5 mb-3">Balance Pedidos en <b>{{Month[new Date().getMonth()]}}</b></h3>
    <div class="card-deck d-block d-lg-flex card-lg-gutters-3 mb-6">
      <!-- Card -->
      <div class="card mb-3 mb-lg-0">
        <div class="card-body p-5">
          <div class="media align-items-center">
            <span class="btn btn-lg btn-icon btn-soft-primary rounded-circle mr-4">
              <span class="fas fa-dollar-sign btn-icon__inner"></span>
            </span>
            <div class="media-body">
              <span class="d-block font-size-3">${{formatPrice(totalBalance(new Date().getMonth()))}}</span>
              <h2 class="h6 text-secondary font-weight-normal mb-0">Total Compras</h2>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card mb-3 mb-lg-0">
        <div class="card-body p-5">
          <div class="media align-items-center">
            <span class="btn btn-lg btn-icon btn-soft-success rounded-circle mr-4">
              <span class="fas fa-coins btn-icon__inner"></span>
            </span>
            <div class="media-body">
              <span class="d-block font-size-3">${{formatPrice(rewardBalance(new Date().getMonth()))}}</span>
              <h3 class="h6 text-secondary font-weight-normal mb-0">Saldo Pago</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="card">
        <div class="card-body p-5">
          <div class="media align-items-center">
            <span class="btn btn-lg btn-icon btn-soft-warning rounded-circle mr-4">
              <span class="fas fa-exchange-alt btn-icon__inner"></span>
            </span>
            <div class="media-body">
              <span class="d-block font-size-3">${{formatPrice(pendingBalance(new Date().getMonth()))}}</span>
              <h3 class="h6 text-secondary font-weight-normal mb-0">Saldo Pendiente</h3>
            </div>
          </div>
        </div>
      </div>
      <!-- End Card -->
    </div>
    <!-- End Stats -->

    <!-- Title -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="h6 mb-0">Productos Favoritos en <b>{{Month[new Date().getMonth()]}}</b></h3>
    </div>
    <!-- End Title -->

    <!-- Earning Sources -->
    <div class="mb-7">
      <div v-if="productsFavorite" class="card-deck d-block d-lg-flex card-lg-gutters-3">
        <!-- Card -->
        <div class="card card-frame mb-3" v-for="(Product, index) in productsFavorite/*.slice(0, 3) */" :key="index">
          <a class="card-body p-4" href="#">
            <div class="media align-items-center">
              <div class="mr-3 w-30">
                <img class="img-fluid" :src="Product.img">
              </div>
              <div class="media-body d-inline-block">
                <span class="text-dark">{{Product.name}}</span>
                <small class="d-block text-secondary">{{Product.weight}}</small>
                <small class="d-block text-primary">
                  Total Pedidos: <b>{{Product.quantity}}</b>
                </small>
              </div>
              <div class="media-body text-right">
                <span class="text-primary ml-3">
                  ${{formatPrice(Product.price)}}
                </span>
              </div>
            </div>
          </a>
        </div>
        <!-- End Card -->
      </div>
      <div class="card-deck d-block d-lg-flex card-lg-gutters-3">
        <!-- Card -->
        <div class="card card-frame mb-3" v-for="(Product, index) in productsFavorite.slice(3, 6)" :key="index">
          <a class="card-body p-4" href="#">
            <div class="media align-items-center">
              <div class="mr-3 w-30">
                <img class="img-fluid" :src="Product.img">
              </div>
              <div class="media-body d-inline-block">
                <span class="text-dark">{{Product.name}}</span>
                <small class="d-block text-secondary">{{Product.weight}}</small>
                <small class="d-block text-primary">
                  Total Pedidos: <b>{{Product.quantity}}</b>
                </small>
              </div>
              <div class="media-body text-right">
                <span class="text-primary ml-3">
                  ${{formatPrice(Product.price)}}
                </span>
              </div>
            </div>
          </a>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Earning Sources -->

    <!-- Card -->
    <div class="card-deck d-block d-lg-flex card-lg-gutters-3">
      <!-- Stats -->
      <div class="card mb-7 mb-lg-0">
        <div class="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
          <!-- Title & Settings -->
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="h6 mb-0">Depรณsitos <b>{{Month[new Date().getMonth()]}}</b></h4>
          </div>
          <!-- End Title & Settings -->

          <hr class="mt-3 mb-4">

          <!-- Deposit Info -->
          <div class="row mb-5">   
            <div class="col-sm-12 mt-7 mb-sm-0 text-center">
              <h4 class="text-primary">Alcance:</h4>
              <span class="align-top">$</span>
              <span class="font-size-4 font-weight-medium text-lh-sm">{{formatPrice(totalBalance(new Date().getMonth()))}}</span>
              <div class="mb-1">
                <span class="text-secondary font-size-2">Deposito Actual:</span>
                <span class="font-weight-medium font-size-2"> ${{formatPrice(rewardBalance(new Date().getMonth()))}}</span>
              </div>
              <div>
                <span class="text-primary font-weight-medium text-lh-sm">
                  <span :class="[{'fas fa-check-circle text-success': percent >= 100, 'fas fa-arrow-alt-circle-down text-danger': percent < 100}, 'small mr-2']"></span>{{formatPrice(percent)}}% (${{formatPrice(rewardBalance(new Date().getMonth()) - totalBalance(new Date().getMonth()))}})
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Stats -->

      <!-- Stats -->
      <div class="card mb-7 mb-lg-0">
        <div class="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
          <!-- Title & Settings -->
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="h6 mb-0">Comparativa</h4>
          </div>
          <!-- End Title & Settings -->

          <hr class="mt-3 mb-4">

          <!-- Balance Info -->
          <div class="row align-items-center mb-4">
            <div class="col-6 u-ver-divider">
              <label class="d-block small text-muted mb-0">Max Ventas:</label>
              <span class="font-weight-medium">${{formatPrice(balanceMax)}}</span>
            </div>

            <div class="col-6">
              <label class="d-block small text-muted mb-0">Min Ventas:</label>
              <span class="font-weight-medium">${{formatPrice(balanceMin)}}</span>
            </div>
          </div>

          <div class="row">
            <div v-for="(item, index) in comparative" :key="index" class="col-3">
              <div class="js-vr-progress progress-vertical rounded mb-2">
                <div class="js-vr-progress-bar bg-primary rounded-bottom" role="progressbar" :style="'height:'+item.balance+'%;'" :aria-valuenow="item.balance" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div class="text-center">
                <h4 class="small mb-0">{{item.month}}</h4>
              </div>
            </div>
          </div>
          <!-- End Balance Info -->
        </div>
      </div>
      <!-- End Stats -->

      <!-- Indicator -->
      <div class="card">
        <div class="card-body pt-4 pb-5 px-5 mb-3 mb-md-0">
          <!-- Title & Settings -->
          <div class="d-flex justify-content-between align-items-center">
            <h4 class="h6 mb-0">Actividad de Pedidos</h4>
          </div>
          <!-- End Title & Settings -->

          <hr class="mt-3 mb-4">

          <div class="overflow-auto">
            <div v-if="ordersUsers" class="js-scrollbar pr-3" style="max-height: 300px;">
              <!-- Activity Feed -->
              <ul class="list-unstyled u-indicator-vertical-dashed">
                <li v-for="(orderUser, index) in ordersUsers" :key="index" class="media u-indicator-vertical-dashed-item">
                  <span :class="['btn btn-xs btn-icon rounded-circle mr-3', {'btn-info':orderUser.state == 'Enviado', 'btn-danger':orderUser.state == 'Pendiente',
                  'btn-success':orderUser.state == 'Recibido'}]">
                    <span class="btn-icon__inner">{{orderUser.state.slice(0,1)}}</span>
                  </span>
                  <div v-if="orderUser.details" class="media-body">
                    <h5 v-if="orderUser.details.name" class="font-size-1 mb-1">{{orderUser.details.name}}</h5>
                    <h5 v-else class="font-size-1 mb-1">{{orderUser.details.email.split('@')[0]}}</h5>
                    <p class="small mb-1">Ha realizado un pedido de {{orderUser.items.length}} articulos por valor de: <span class="font-weight-medium">${{formatPrice(orderUser.total)}}</span></p>

                    <small v-if="(Math.round(((((new Date() - new Date (orderUser.createTime))/1000)/60)/60)/24) >= 1 && Math.round(((((new Date() - new Date(orderUser.createTime))/1000)/60)/60)/24) < 30)"
                     class="d-block text-muted">Hace {{Math.round(((((new Date() - new Date (orderUser.createTime))/1000)/60)/60)/24)}} dias</small>

                    <small v-if="(Math.round(((((new Date() - new Date(orderUser.createTime))/1000)/60)/60)) >= 1 && Math.round(((((new Date() - new Date(orderUser.createTime))/1000)/60)/60)) < 24)" 
                    class="d-block text-muted">Hace {{Math.round(((((new Date() - new Date (orderUser.createTime))/1000)/60)/60)/24)}} horas</small>

                    <small v-if="(Math.round((new Date() - new Date(orderUser.createTime))/1000)/60) >= 1 && Math.round(((((new Date() - new Date(orderUser.createTime))/1000)/60)) < 60)" 
                    class="d-block text-muted">Hace {{Math.round(((((new Date() - new Date (orderUser.createTime))/1000)/60)/60)/24)}} minutos</small>

                    <small v-if="(Math.round((new Date() - new Date(orderUser.createTime))/1000)) >= 1 && Math.round(((((new Date() - new Date(orderUser.createTime))/1000))) < 60)" 
                    class="d-block text-muted">Ahora</small>
                  </div>
                </li>
              </ul>
              <!-- End Activity Feed -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Indicator -->
    </div>
    <!-- End Card -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
//import $ from 'jquery'

export default {
  name: 'Admin',
  data() {
    return {
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
      balanceMax: 0,
      balanceMin: 0
    }
  },
  created(){
    this.getDatas(['Orders', 'Products', 'Users']); 
  },
  beforeUpdate(){
    this.balanceMax = this.totalBalance(new Date().getMonth());
    this.balanceMin = this.totalBalance(new Date().getMonth());
    for (let i = 1; i <= 3; i++) {
      this.balanceMax = (this.balanceMax < this.totalBalance(new Date().getMonth() - i)) ? this.totalBalance(new Date().getMonth() - i) : this.balanceMax

      this.balanceMin = (this.balanceMin > this.totalBalance(new Date().getMonth() - i)) ? this.totalBalance(new Date().getMonth() - i) : this.balanceMin
    }  
  },
  computed:{
    ...mapState(['Orders', 'Products', 'Users']),
    percent(){
      let p = 0
      if(this.Orders && this.Products){
        p = ((this.rewardBalance(new Date().getMonth()) - this.totalBalance(new Date().getMonth())) * 100)/this.totalBalance(new Date().getMonth());

        if(p === Infinity || isNaN(p)){
          p = 100
        }
      }
      return p
    },
    ordersUsers(){
      const ordersUsers = []
      if(this.Orders && this.Users){
        this.Orders.forEach(order => {
          var date = new Date(order.createTime)
          if(date.getMonth() == new Date().getMonth())
          var idUser = order.user;
          order.details = this.Users.find(user => {
            return user.id === idUser
          })
          ordersUsers.push(order)
        })
      }
      return ordersUsers.sort((a,b) => {
        if(a.createTime > b.createTime){
          return -1
        }

        if(a.createTime < b.createTime){
          return 1
        }

        return 0
      });
    },
    productsFavorite(){      
      const products = [];
      
      if(this.Orders && this.Products){
        let favorite = [];
        this.Orders.forEach( order => {                    
          const date = new Date(order.createTime);
          if(date.getMonth() === new Date().getMonth()){
            if(favorite.length){
              order.items.forEach( item => {   
                var i = favorite.map(el => {
                  return el.product
                }).indexOf(item.product);
                if(i >= 0){
                  favorite[i].quantity += item.quantity
                }else{
                  favorite.push(item)
                }
              })
            }else{
              favorite = order.items;
            } 
          }
        })
        favorite.forEach(p => {
          this.Products.forEach(item =>{
            if(p.product === item.id){
              item.quantity = p.quantity
              products.push(item)
            }
          })
        })
      }
      return products.sort((a,b) => {
        if(a.quantity > b.quantity){
          return -1
        }

        if(a.quantity < b.quantity){
          return 1
        }

        return 0
      });
    },
    comparative(){
      const elements = []
      if(this.Orders){
        for (let index = 0; index < 4; index++) {
          elements.push({ 
            balance: (this.totalBalance(new Date().getMonth() - (3- index))/this.balanceMax)*100, month: this.Month[new Date().getMonth() - (3- index)]/* .slice(0, 3) */
          })
        }
      }

      return elements
    },
  },
  methods:{
    ...mapActions(['getDatas']),                      
    formatPrice(value) {
      let val = (value / 1).toFixed().replace('.')
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    },
    totalBalance(month){
      var sum = 0;
      if(this.Orders){        
        this.Orders.forEach(order => {          
          const date = new Date(order.createTime);
          if(date.getMonth() === month){
            sum += order.total
          }
        })
      }
      return sum
    },
    pendingBalance(month){
      var pending = 0;
      
      if(this.Orders){
        this.Orders.forEach(order => {                    
          const date = new Date(order.createTime);
          if(order.state !== 'Recibido' && date.getMonth() === month){
            pending += order.total 
          }
        });
      }

      return pending
    },
    rewardBalance(month){
      var reward = 0;
      
      if(this.Orders){
        this.Orders.forEach(order => {
          const date = new Date(order.createTime);
          if(order.state == 'Recibido' && date.getMonth() === month){
            reward += order.total 
          }
        });
      }

      return reward
    },
  }
}
</script>