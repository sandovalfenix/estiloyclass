<template>
  <div class="container space-top-1 space-bottom-2">
    <h3 class="text-center">
      <i class="fas fa-database mr-2"></i> Base de Datos |
      <span class="text-secondary">Productos</span>
    </h3>
    <div class="row space-top-1">
      <div class="col-12 col-lg-3 mr-md-3">
        <div class="row">
          <!-- Search -->
          <div class="js-focus-state input-group input-group-sm mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text">
                <span class="fas fa-search"></span>
              </span>
            </div>
            <input class="form-control" v-model="search" type="text" placeholder="Buscar Productos" aria-label="Buscar Productos" @keyup="searchProducts">
          </div>
          <!-- End Search -->
        </div>
        <div class="row">
          <!-- new product -->
          <router-link class="btn btn-primary btn-block" role="button" data-target="#modalForm" data-toggle="modal" to="products/new">
            <i class="fas fa-box mr-2"></i>Añadir Producto
          </router-link>
          <!-- End new product -->
        </div>
      </div>
      <div class="col-12 col-lg">
        <h5 class="text-right">Mostrando {{(page*6)+1}} a {{(page+1)*6}} de {{listProductLength}} Paginas</h5>
        <div class="row px-2 pb-2 bg-light border-light border">
          <div class="col col-md-4 mt-3" v-for="product of products.slice(page*6, (page+1)*6)" :key="product.id">
            <!-- Product -->
            <div class="transition-3d-hover card text-center h-100 shadow-sm">
              <div class="position-relative">
                <img v-if="product.img" class="card-img-top w-50 pt-3" alt="Image Description" :src="product.img">
                <img v-else class="card-img-top w-50 pt-3" alt="Image Description" src="@/assets/logo.png">
              </div>

              <div class="card-body pt-4 px-4 pb-0">
                <div class="mb-2">
                  <h3 class="h5">
                    <a class="text-black" href="javascript:;">{{product.name}}</a>
                  </h3>
                  <p class="text-lighter">{{product.description}}</p>
                  <a class="d-inline-block small font-weight-medium mb-1" href="javascript:;">{{product.weight}}</a>
                  <div class="d-block font-size-1">
                    <span class="h4">${{formatPrice(product.price)}}</span>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 px-4 d-flex justify-content-between">
                <router-link :to="{name:'adminEditProduct', params: {id: product.id}}">
                  <button class="btn btn-sm btn-soft-warning transition-3d-hover" type="button" data-target="#modalForm" data-toggle="modal">
                    <i class="fas fa-edit mr-2"></i>Editar
                  </button>
                </router-link>
                <button class="btn btn-sm btn-soft-danger transition-3d-hover" type="button" @click="deleteProduct(product)">
                  <i class="fas fa-trash-alt mr-2"></i> Eliminar
                </button>
              </div>
            </div>
            <!-- End Product -->
          </div>
        </div>
        <hr>
        <nav aria-label="Page navigation mt-3">
          <ul class="pagination justify-content-end">
            <li :class="['page-item', {'d-none':!page}]">
              <a class="page-link" href="javascript:;" tabindex="-1" @click="page--">Anterior</a>
            </li>
            <li class="page-item" v-for="(list, index) of listProductLength" :key="list.id">
              <a href="javascript:;" :class="['page-link', {'active': index === page}]" @click="page = index">{{index+1}}</a>
            </li>
            <li :class="['page-item', {'d-none':page===listProductLength-1}]">
              <a class="page-link" href="javascript:;" @click="page++">Siguiente</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade right-0 m-auto" id="modalForm" role="dialog" tabindex="-1" aria-hidden="true" aria-labelledby="modalFormLabel">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h5 class="modal-title" id="modalFormLabel">
              <span v-if="$route.params.id">Editar</span>
              <span v-else>Nuevo</span> Producto
            </h5>
            <button class="close" type="button" aria-label="Close" data-dismiss="modal" @click="$router.push({name: 'adminProducts'})">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      search: '',
      products: [],
      page: 0,
    };
  },
  created() {
    this.getDatas(["Products"]);
    this.products = this.Products;
  },
  computed: {
    ...mapState(["Products"]),
    listProductLength() {
      return Math.ceil(this.products.length / 6);
    },
  },
  methods: {
    ...mapActions(["getDatas", "deleteData"]),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    deleteProduct(product) {
      if (product.img) {
        this.deleteData([
          {
            ref: "Products",
            id: product.id,
            file: {
              type:
                "image/" +
                product.img
                  .split("?")[0]
                  .split(".")
                  .pop()
            }
          }
        ]);
      } else {
        this.deleteData([
          {
            ref: "Products",
            id: product.id
          }
        ]);
      }
    },
    searchProducts(){
      if(this.search.length >= 3){
        this.products = this.Products.filter(product => {
          return (product.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) || (product.description.toLowerCase().indexOf(this.search.toLowerCase()) >= 0)
        })
      }else{
        this.products = this.Products
      }
    },
  },
};
</script>