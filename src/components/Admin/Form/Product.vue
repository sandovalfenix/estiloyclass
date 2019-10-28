<template>
  <form class="row" @submit.prevent="submitAction">
    <div class="form-group col-12">
      <label class="sr-only">Nombre</label>
      <input class="form-control" id="productName" type="text" placeholder="Nombre Producto" required v-model="Product.name">
    </div>
    <div class="form-group col-12">
      <label class="sr-only">Descripcion</label>
      <textarea class="form-control" v-model="Product.description" rows="3" placeholder="Descripcion"></textarea>
    </div>
    <div class="form-group col-12">
      <label class="sr-only">Precio</label>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text">$</span>
        </div>
        <input class="form-control" id="productPrice" type="number" placeholder="Precio" required v-model="Product.price">
      </div>
    </div>
    <div class="form-group col-12">
      <label for="sr-only">Seleccione una Categoria</label>
      <select class="custom-select" v-model="Product.category" id="">
        <optgroup v-for="item in Categories" :key="item.id" :label="item.name">
          <option v-for="(type, index) in item.types" :key="index" :value="{id: item.id, name: item.name, index: index, type: type}">{{type}}</option>
        </optgroup>
      </select>
    </div>
    <div class="col-12 text-center border border-primary" v-show="this.file||Product.img">
      <img class="img-fluid w-25" v-if="!this.file.photoURL" :src="Product.img">
      <img class="img-fluid w-50" v-else :src="this.file.photoURL">
    </div>
    <div class="form-group col-12 d-flex justify-content-center mt-3">
      <input class="form-control-file d-none" id="productImg" type="file" placeholder="Imagen de Producto" @change="handleFileUpload($event)" ref="file">
      <a class="btn btn-soft-primary transition-3d-hover" href="javascript:;" @click="$refs.file.click()">Buscar Imagen</a>
    </div>
    <div class="col-12 d-flex justify-content-between mt-3 border-top border-silver pt-4">
      <button class="btn btn-danger mr-3" type="button" data-dismiss="modal" @click="$router.go(-1)">Cerrar</button>
      <button class="btn btn-warning" type="submit" v-if="id" :disabled="!Product" @click="closeModal">
        <span>Editar</span>
      </button>
      <button class="btn btn-primary" type="submit" v-else :disabled="!Product" @click="closeModal">
        <span>Añadir</span>
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions, mapState } from "vuex";
import $ from "jquery";

export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  created() {
    this.getData([{ ref: "Products", id: this.id }]);
    this.getDatas(["Categories"]);
  },
  methods: {
    ...mapActions([
      "getDatas",
      "getData",
      "updateData",
      "addData",
      "uploadFiles",
      "handleFileUpload"
    ]),
    closeModal() {
      $("div.modal-backdrop").remove();
      $("#modalForm").modal("hide");
      this.$router.go(-1)
    },
    submitAction() {
      if (this.id) {
        this.updateData([
          {
            ref: "Products",
            data: this.Product,
            route: "adminProducts",
            file: this.file
          }
        ]);
      } else {
        this.addData([
          {
            ref: "Products",
            data: this.Product,
            file: this.file,
            route: "adminProducts"
          }
        ]);
      }
    },
  },
  computed: {
    ...mapState(["Categories","Product", "file"])
  }
};
</script>