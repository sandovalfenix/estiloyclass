<template>
  <div>
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main">
      <!-- Title Section -->
      <div class="bg-light">
        <div class="container py-5">
          <div class="row align-items-sm-center">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <h1 class="h4 mb-0">
                <span v-if="$route.params.name === 'all'">Todo</span>
                <span v-else>{{toUpperFirts($route.params.name)}}</span> para
                <span v-if="$route.params.type === 'all'">todos</span>
                <span v-else>{{$route.params.type}}</span>
                <span v-if="$route.params.type !== 'hombre' && $route.params.type !== 'all'">es</span>
                <span v-else-if="$route.params.type === 'hombre'">s</span>
              </h1>
            </div>

            <div class="col-sm-6">
              <!-- Breadcrumb -->
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                  <li class="breadcrumb-item">
                    <a href="/">Inicio</a>
                  </li>
                  <li class="breadcrumb-item">
                    <router-link :to="'/categories/'+$route.params.name">
                      <span v-if="$route.params.name === 'all'">Todo</span>
                      <span v-else>{{toUpperFirts($route.params.name)}}</span>
                    </router-link>
                  </li>
                  <li v-show="$route.params.type" class="breadcrumb-item active" aria-current="page">
                    <span v-if="$route.params.type === 'all'">Todos</span>
                    <span v-else>{{toUpperFirts($route.params.type)}}</span>
                    <span v-if="$route.params.type !== 'hombre' && $route.params.type !== 'all'">es</span>
                    <span v-else-if="$route.params.type === 'hombre'">s</span>
                  </li>
                </ol>
              </nav>
              <!-- End Breadcrumb -->
            </div>
          </div>
        </div>
      </div>
      <!-- End Title Section -->

      <!-- Products & Filters Section -->
      <div class="container space-2 space-bottom-lg-3">
        <div class="row">
          <div class="col-lg-12">
            <!-- Sorting -->
            <div class="row align-items-center mb-5">
              <div class="col-lg-6 mb-3 mb-lg-0">
                <span class="text-secondary font-size-1 font-weight-normal ml-1">{{products.length}} productos</span>
              </div>

              <div class="col-lg-6 align-self-lg-end text-lg-right">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <div class="js-focus-state input-group mb-2">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <span class="fas fa-search"></span>
                        </span>
                      </div>
                      <input class="form-control" type="text" placeholder="Buscar Producto" v-model="search">
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End Sorting -->

            <!-- Products -->
            <div class="row mx-n2 mb-2">
                <div class="col-6 col-lg-4 px-2 mb-3" v-for="product of products.slice(0,24)" :key="product.id">
                  <!-- Product -->    
                  <a :href="'/product/'+product.id">
                    <div class="card text-center h-100 transition-3d-hover">
                      <div class="position-relative">
                        <img class="card-img-top" style="width: 200px" v-if="product.img" :src="product.img">
                        <img class="height-40vh" src="@/assets/logo.png" style="width: 250px;" v-else>
                      </div>

                      <div class="card-body pt-4 px-4 pb-0">
                        <div class="mb-2">
                          <p class="text-secondary small font-weight-medium mb-1">{{product.category.name}} para {{product.category.type}}</p>
                          <h5 class="d-inline-block text-dark font-weight-medium mb-1">{{product.name}}</h5>
                          <h3 class="font-size-1 font-weight-normal">
                            <a class="text-secondary" href="single-product.html">{{product.description}}</a>
                          </h3>
                          <div class="d-block h5">
                            <span class="font-weight-medium">$ {{new Intl.NumberFormat().format(product.price)}}</span>
                          </div>
                        </div>
                      </div>

                      <div class="card-footer border-0 pt-0 pb-4 px-4">
                        <button class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover" type="button"><i class="fas fa-cart-plus mr-2"></i>Agregar</button>
                      </div>
                    </div>
                  </a>
                  <!-- End Product -->
                </div>
            </div>
            <!-- End Products -->

            <div class="py-3"></div>

            <!-- Pagination -->
            <nav aria-label="Page navigation">
              <ul class="pagination justify-content-between align-items-center">
                <li class="page-item ml-0">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo; Prev</span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="page-item">
                  <div class="d-flex align-items-center">
                    <span class="d-none d-sm-inline-block text-secondary">Page:</span>
                    <select class="custom-select custom-select-sm w-auto mx-2">
                      <option value="quantity1">1</option>
                      <option value="quantity2">2</option>
                      <option value="quantity3">3</option>
                      <option value="quantity4">4</option>
                      <option value="quantity5">5</option>
                      <option value="quantity6">6</option>
                      <option value="quantity7">7</option>
                      <option value="quantity8">8</option>
                    </select>
                    <span class="d-none d-sm-inline-block text-secondary">of 8</span>
                  </div>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">Next &raquo;</span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            <!-- End Pagination -->

            <!-- Divider -->
            <div class="d-lg-none">
              <hr class="my-11">
            </div>
            <!-- End Divider -->
          </div>
        </div>
      </div>
      <!-- End Products & Filters Section -->
    </main>
    <!-- ========== END MAIN CONTENT ========== -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Categories",
  data() {
    return {
      search: ""
    };
  },
  created() {
    this.getDatas(["Products"]);
  },
  computed: {
    ...mapState(["Products"]),    
    products() {
      if (this.search.length >= 3) {
        return this.productsCategories().filter(product => {
          return (
            product.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
            product.description
              .toLowerCase()
              .indexOf(this.search.toLowerCase()) >= 0
          );
        });
      } else {
        return this.productsCategories();
      }
    }
  },
  methods: {
    ...mapActions(["getDatas"]),
    productsCategories() {
      return this.Products.filter(product => {
        if (this.$route.params.type === "infantil") {
          return (
            product.category.type.toLowerCase() === "niño" ||
            product.category.type.toLowerCase() === "niña" ||
            product.category.name.toLowerCase() === this.$route.params.name
          );
        } else {
          return (
            product.category.type.toLowerCase() === this.$route.params.type ||
            product.category.name.toLowerCase() === this.$route.params.name
          );
        }
      });
    },
    toUpperFirts(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
  },
};
</script>