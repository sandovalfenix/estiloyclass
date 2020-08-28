<template>
  <section class="container space-top-1 space-bottom-2 bg-white">
    <h4>
      <span v-if="$route.params.id">Editar</span>
      <span v-else>Nuevo</span> Producto
    </h4>
    <hr>
    <form class="row" @submit.prevent="submitAction">
      <div class="form-group col-12 col-md-6">
        <label class="sr-only">Nombre</label>
        <input class="form-control" id="productName" type="text" placeholder="Nombre Producto" required v-model="Product.name">
      </div>
      <div class="form-group col-12 col-md-6">
        <label class="sr-only">Precio</label>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text">$</span>
          </div>
          <input class="form-control" id="productPrice" type="number" placeholder="Precio" required v-model="Product.price">
        </div>
      </div>
      <div class="form-group col-12 col-md-6">
        <label class="sr-only">Descripcion</label>
        <textarea class="form-control" v-model="Product.description" rows="3" placeholder="Descripcion"></textarea>
      </div>
      <div v-if="Categories.length" class="form-group col-12 col-md-6">
        <label for="sr-only">Seleccione una Categoria</label>
        <select class="custom-select" v-model="Product.category" id="">
          <optgroup v-for="item in Categories" :key="item.id" :label="item.name">
            <option v-for="(type, index) in item.types" :key="index" :value="{id: item.id, name: item.name, index: index, type: type}">{{type}}</option>
          </optgroup>
        </select>
      </div>
      <div class="col-12 col-md-6">
        <div class="col-12 form-group d-flex justify-content-center mt-3">
          <input class="form-control-file d-none" id="productImg" type="file" placeholder="Imagen de Producto" @change="handleFileUpload($event)" ref="file">
          <a class="btn btn-soft-success" href="javascript:;" @click="$refs.file.click()">
            <span v-if="Product.img">Cambiar Imagen</span>
            <span v-else>Añadir Imagen Principal</span>  
          </a>
        </div>
        <div class="col-12 d-flex justify-content-center mt-3">
          <div v-if="!file" class="text-center">
            <img class="img-fluid w-50" :src="Product.img">
          </div>

          <div v-else class="text-center">
            <img class="img-fluid w-50" :src="file.photoURL">
            <hr class="my-0">
            <a class="btn btn-icon-inner text-danger" title="eliminar imagen" href="javascript:;" @click="removeFile">
              <i class="fa fa-trash"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="col-12 form-group d-flex justify-content-center mt-3">
          <input class="form-control-file d-none" id="productImages" type="file" placeholder="Imagen de Producto" @change="handleFilesUpload($event)" ref="fileImages">
          <a class="btn btn-soft-primary" href="javascript:;" @click="$refs.fileImages.click()">Añadir otras images</a>
        </div>
        <div class="row d-flex justify-content-center">
          <div v-for="(fileImages,indexFiles) in files" :key="indexFiles" class="col-12 col-md-6 text-center">
            <img class="img-fluid w-60" :src="fileImages.photoURL">
            <hr class="my-0">
            <a class="btn btn-icon-inner text-danger" title="eliminar imagen" href="javascript:;" @click="removeFiles(indexFiles)">
              <i class="fa fa-trash"></i>
            </a>
          </div>

          <div v-for="(image,indexImages) in Product.images" :key="indexImages" class="col-12 col-md-6 text-center">
            <img class="img-fluid w-60" :src="image">
            <hr class="my-0">
            <a class="btn btn-icon-inner text-danger" title="eliminar imagen" href="javascript:;" @click="removeFiles({data: Product, index:indexImages})">
              <i class="fa fa-trash"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="col-12 d-flex justify-content-between mt-3 border-top border-silver pt-4">
        <button class="btn btn-danger mr-3" type="button" data-dismiss="modal" @click="$router.go(-1)">Regresar</button>
        <button class="btn btn-warning" type="submit" v-if="id" :disabled="!Product">
          <span>Modificar</span>
        </button>
        <button class="btn btn-primary" type="submit" v-else :disabled="!Product">
          <span>Guardar</span>
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

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
      "handleFileUpload",
      "removeFile",
      "handleFilesUpload",
      "removeFiles"
    ]),
    submitAction() {
      if (this.id) {
        this.updateData([
          {
            ref: "Products",
            data: this.Product,
            route: "adminProducts",
            files: this.files,
            file: this.file
          }
        ]);
      } else {
        this.addData([
          {
            ref: "Products",
            data: this.Product,
            files: this.files,
            file: this.file,
            route: "adminProducts"
          }
        ]);
      }
    },
  },
  computed: {
    ...mapState(["Categories","Product", "files", "file"])
  }
};
</script>