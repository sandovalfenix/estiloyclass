<template>
  <div class="container-fluid space-top-1 space-bottom-2">
    <h3 class="text-center">
      <i class="fas fa-database mr-2"></i> Base de Datos |
      <span class="text-secondary">Productos</span>
    </h3>
    <div class="row">
      <div class="col">
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
      <div class="col">
        <!-- new product -->
        <router-link class="btn btn-soft-primary btn-sm" to="products/new">
          <i class="fas fa-plus-circle mr-2"></i>Agregar Producto
        </router-link>
        <!-- End new product -->
      </div>
      
      <div class="col-12">
        <nav aria-label="Page navigation">
          <ul class="pagination justify-content-around bg-light p-2">
            <li :class="['page-item']">
              <a :class="['btn btn-soft-primary btn-sm', {'disabled':!page}]" href="javascript:;" tabindex="-1" @click="page--">Anterior</a>
            </li>
            <li class="page-item" v-for="(list, index) of listProductLength" :key="list.id">
              <a href="javascript:;" :class="['page-link', 'small', {'bg-primary text-white': index === page}]" @click="page = index">{{index+1}}</a>
            </li>
            <li :class="['page-item']">
              <a :class="['btn btn-soft-primary btn-sm', {'disabled':page===listProductLength-1}]" href="javascript:;" @click="page++">Siguiente</a>
            </li>
          </ul>
        </nav>       
        <div class="row bg-soft-primary space-1 px-2">
          <div :class="['col col-sm-4 mt-1 p-1', {'col-lg-3': num === 8}]" v-for="product of products.slice(page*num, (page+1)*num)" :key="product.id">
            <!-- Product -->
            <div class="card text-center h-100 border-0 shadow-soft">
              <div class="card-img-top">
                <img v-if="product.img" class="pt-3" style="width: 150px" :src="product.img">
                <img v-else class="pt-3" style="width: 150px" src="@/assets/logo.png">
              </div>

              <div class="card-body pt-4 px-4 pb-0">
                <div class="mb-2">
                  <p class="text-dark">{{product.name}}</p>
                  <span class="d-inline-block small font-weight-medium mb-1 text-primary">{{product.category.name}} para {{product.category.type}}</span>
                  <p class="text-lighter small">{{product.description}}</p>
                  <div class="d-block font-size-1">
                    <span class="h5">${{formatPrice(product.price)}}</span>
                  </div>
                </div>
              </div>

              <div class="card-footer border-0 px-4 d-flex justify-content-between">
                <router-link :to="{name:'adminEditProduct', params: {id: product.id}}">
                  <button class="btn btn-sm btn-soft-warning transition-3d-hover" type="button" data-target="#modalForm" data-toggle="modal">
                    <i class="fas fa-edit"></i><span class="d-none d-md-inline-block ml-2">Editar</span>
                  </button>
                </router-link>
                <button class="btn btn-sm btn-soft-danger transition-3d-hover" type="button" @click="deleteProduct(product)">
                  <i class="fas fa-trash-alt"></i><span class="d-none d-md-inline-block ml-2">Borrar</span>
                </button>
              </div>
            </div>
            <!-- End Product -->
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div class="modal fade right-0 m-auto" id="modalForm" role="dialog" tabindex="-1" aria-hidden="true" aria-labelledby="modalFormLabel">
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
        <div class="modal-content rounded-0">
          <div class="modal-header">
            <h6 class="modal-title" id="modalFormLabel">
              <span v-if="$route.params.id">Editar</span>
              <span v-else>Nuevo</span> Producto
            </h6>
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
  name: 'Products',
  data() {
    return {
      search: '',
      products: [],
      page: 0,
      windowWidth: window.innerWidth,
    };
  },
  created() {
    this.getDatas(["Products"]);
    this.products = this.Products;
    this.$store.state.files = false;
  },
  computed: {
    ...mapState(["Products", "file"]),
    listProductLength() {
      return Math.ceil(this.products.length / this.num);
    },
    num(){
      if(this.windowWidth >= 992 ){
        return 8
      }else if(this.windowWidth >= 465 && this.windowWidth < 992){
        return 6
      }else{
        return 4
      }
    }
  },
  mounted() {
    window.onresize = () => {
        this.windowWidth = window.innerWidth
    }
  },
  methods: {
    ...mapActions(["getDatas", "deleteData"]),
    formatPrice(value) {
      let val = (value / 1).toFixed().replace(".");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },    
    deleteProduct(product) {
      if (product.img) {
        var files = [];
        let file = {};
        product.img.forEach(img => {
          file.type = "image/" + img
                  .split("?")[0]
                  .split(".")
                  .pop();
          files.push(file);
        });
        this.deleteData([
          {
            ref: "Products",
            id: product.id,
            files: files
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