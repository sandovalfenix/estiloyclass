<template>
<div class="row mx-n2 mx-sm-n3 mb-7">
  <div v-for="Product in Products.slice(0, 8)" :key="Product.id" class="col-12 col-md-3 px-2 px-sm-3 mb-3 mb-sm-5">
    <!-- Product -->
    <div class="card text-center h-100">
      <div class="position-relative w-100">
        <img class="card-img-top" :src="Product.img" alt="Image Description" >
        <!-- <div class="position-absolute top-0 left-0 pt-3 pl-3">
          <span class="badge badge-success badge-pill">Nuevo</span>
        </div> -->
      </div>

      <div class="card-body pt-4 px-4 pb-0 z-index-2 bg-white">
        <div class="mb-2">
          <router-link class="d-inline-block text-secondary small font-weight-medium mb-1" :to="{name: 'categories', params:{name: Product.category.name.toLowerCase(), type: 'all'}}">{{Product.category.name}} para {{Product.category.type}}</router-link>
          <h3 class="h5 font-weight-normal">
            <a class="text-secondary" :href="'product/'+Product.id">{{Product.name}}</a>
          </h3>
          <div class="d-block h6">
            <span class="font-weight-medium">$ {{formatPrice(Product.price)}} COP</span>
          </div>
        </div>
      </div>

      <div class="card-footer border-0 pt-0 pb-4 px-4 z-index-2">
        <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button" @click="addCartItems(Product)"><i class="fas fa-cart-plus"></i> Añadir</button>
      </div>
    </div>
    <!-- End Product -->
  </div>
</div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: 'ProductMoreBuy',
  created() {
    this.getDatas(["Products"]);
  },
  computed: {
    ...mapState(["Products"]),
  },
  methods: {
    ...mapActions(["getDatas", "deleteData", "addCartItems"]),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
  }
};
</script>