<template>
  <div>
      <div class="row mb-5">
        <div  v-for="category in Categories.slice(0,3)" :key="category.id" class="col-md-4 mb-5 mb-md-0">
          <!-- Card -->
          <div v-if="productsBestClothes(category.id).length >= 3" class="card d-block">
            <div class="card-body d-flex align-items-center p-0">
              <div class="w-65 border-right">
                <img v-for="(item, index) in productsBestClothes(category.id).slice(0,1)" :key="index" class="img-fluid" :src="item.img" alt="Image Description">
              </div>
              <div class="w-35">
                <div class="border-bottom">
                  <img v-for="(item, index) in productsBestClothes(category.id).slice(1,2)" :key="index" class="img-fluid" :src="item.img" alt="Image Description">
                </div>
                <img v-for="(item, index) in productsBestClothes(category.id).slice(2,3)" :key="index" class="img-fluid" :src="item.img" alt="Image Description">
              </div>
            </div>
            <div class="card-footer text-center py-4">
              <h3 class="h5 mb-1">{{category.name}}</h3>
              <span class="d-block text-muted font-size-2 mb-3">Desde $ {{ formatPrice(pricesLow(category.id))}}</span>
              <router-link class="btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5" :to="'/categories/'+category.name.toLowerCase()+'/all'">Ver más</router-link>
            </div>
          </div>
          <!-- End Card -->
        </div>
      </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'BestClothes',
  created(){
    this.getDatas(['Categories', 'Products'])
  },
  computed:{
    ...mapState(['Categories', 'Products']),
  },
  methods:{
    ...mapActions(['getDatas']),
    productsBestClothes(idCategory){
      return this.Products.filter(product => {
        return product.category.id === idCategory
      })
    },
    pricesLow(idCategory){
      const products = this.Products.filter(product => {
        return product.category.id === idCategory 
      })
      
      var price = 0
    
      products.forEach((product, index) => {
        if(price > parseInt(product.price) && index > 0){
          price = parseInt(product.price)
        }else if(index === 0){
          price = parseInt(product.price)
        }
      })

      return price
    },
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  }
}
</script>