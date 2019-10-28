<template>
  <div>
    <!-- ========== MAIN CONTENT ========== -->
    <main id="content" role="main">
      <!-- Title Section -->
      <div class="bg-light">
        <div class="container py-5">
          <div class="row align-items-sm-center">
            <div class="col-sm-6 mb-3 mb-sm-0">
              <h1 class="h4 mb-0">Categoria Hombres</h1>
            </div>

            <div class="col-sm-6">
              <!-- Breadcrumb -->
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0">
                  <li class="breadcrumb-item"><a href="/">Inicio</a></li>
                  <li class="breadcrumb-item"><router-link to="/">Categoria</router-link></li>
                  <li class="breadcrumb-item active" aria-current="page">Hombres</li>
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
                <span class="text-secondary font-size-1 font-weight-normal ml-1">110 products</span>
              </div>

              <div class="col-lg-6 align-self-lg-end text-lg-right">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item">
                    <!-- Select -->
                    <select class="js-select selectpicker dropdown-select"
                            data-size="10"
                            data-width="fit"
                            data-style="btn-soft-secondary btn-xs">
                      <option value="mostRecent" selected>Sort by</option>
                      <option value="newest">Newest first</option>
                      <option value="priceHighLow">Price (high - low)</option>
                      <option value="priceLowHigh">Price (low - high)</option>
                      <option value="topSellers">Top sellers</option>
                    </select>
                    <!-- End Select -->
                  </li>
                  <li class="list-inline-item">
                    <!-- Select -->
                    <select class="js-select selectpicker dropdown-select"
                            data-width="fit"
                            data-style="btn-soft-secondary btn-xs">
                      <option value="alphabeticalOrderSelect1" selected>A-to-Z</option>
                      <option value="alphabeticalOrderSelect2">Z-to-A</option>
                    </select>
                    <!-- End Select -->
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-xs btn-soft-secondary active" href="products-grid.html">
                      <span class="fas fa-th-large"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- End Sorting -->

            <!-- Products -->
            <div class="row mx-n2 mb-2">
              <div class="col-6 col-lg-4 px-2 mb-3" v-for="product of productsCategories().slice(0,24)" :key="product.id">
                <!-- Product -->
                <div class="card text-center h-100">
                  <div class="position-relative">
                    <img v-if="product.img" class="card-img-top" :src="product.img" alt="Image Description">
                    <img v-else src="@/assets/logo.png" class="height-40vh" style="width: 250px;">
                  </div>

                  <div class="card-body pt-4 px-4 pb-0">
                    <div class="mb-2">
                      <h5  class="d-inline-block text-dark font-weight-medium mb-1">{{product.name}}</h5>
                      <p  class="text-secondary small font-weight-medium mb-1">{{product.category.name}} para {{product.category.type}}</p>
                      <h3 class="font-size-1 font-weight-normal">
                        <a class="text-secondary" href="single-product.html">{{product.description}}</a>
                      </h3>
                      <div class="d-block font-size-1">
                        <span class="font-weight-medium">$ {{new Intl.NumberFormat().format(product.price)}}</span>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer border-0 pt-0 pb-4 px-4">
                    <button type="button" class="btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover">Agregar al Carrito</button>
                  </div>
                </div>
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Categories',
  data() {
    return {
      products: []
    }
  },
  created(){
    this.getDatas(['Products'])
  },
  computed:{
    ...mapState(['Products'])
  },
  methods:{
    ...mapActions(['getDatas']),
    productsCategories(){
      return this.Products.filter(product => {
        if(this.$route.params.type === 'infantil'){
          return product.category.type.toLowerCase() === 'niño' ||
          product.category.type.toLowerCase() === 'niña' || product.category.name.toLowerCase() === this.$route.params.name
        }else{
          return  product.category.type.toLowerCase() === this.$route.params.type || product.category.name.toLowerCase() === this.$route.params.name
        }
      })
    }
  }
}
</script>