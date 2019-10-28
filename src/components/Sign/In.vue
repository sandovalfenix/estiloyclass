<template>
  <!-- Form SignIn -->
  <form class="js-validate w-md-30 mx-md-auto" @submit.prevent="signInDashboard">
    <!-- Title -->
    <div class="mb-7">
      <h2 class="h3 text-primary font-weight-normal mb-0">Administrador <span class="font-weight-semi-bold">Dashboard</span></h2>
      <p>Inicie sesión para administrar su cuenta.</p>
    </div>
    <!-- End Title -->

    <!-- Form Group -->
    <div class="js-form-message form-group">
      <label class="form-label" for="signinSrEmailExample1">Correo electrónico</label>
      <input type="email" class="form-control" v-model="User.email" id="signinSrEmailExample1" placeholder="Correo electrónico" aria-label="Correo electrónico" required
            data-msg="Por favor, introduce una dirección de correo electrónico válida."
            data-error-class="u-has-error"
            data-success-class="u-has-success">
    </div>
    <!-- End Form Group -->

    <!-- Form Group -->
    <div class="js-form-message form-group">
      <label class="form-label" for="signinSrPasswordExample1">
        <span class="d-flex justify-content-between align-items-center">
          Contraseña
        </span>
      </label>
      <input type="password" class="form-control" v-model="User.password" id="signinSrPasswordExample1" placeholder="********" aria-label="********" required
            data-msg="Su contraseña es inválida. Inténtalo de nuevo."
            data-error-class="u-has-error"
            data-success-class="u-has-success"
            data-rule-minlength="6">
    </div>
    <!-- End Form Group -->

    <!-- Button -->
    <div class="row align-items-center mb-5">
      <div class="col-12 text-right">
        <button type="submit" class="btn btn-primary btn-block transition-3d-hover">Ingresar</button>
        <a href="/" class="btn btn-secondary btn-block transition-3d-hover">Regresar</a>
      </div>
    </div>
    <!-- End Button -->
  </form>
  <!-- End Form -->
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'SignIn',
  data() {
    return {
      User: {},
    }
  },
  methods:{
    ...mapActions(['signIn']),
    signInDashboard(){
      if(this.User.email && this.User.password){    
        const router = this.$router;
        this.signIn(this.User)
          .then(()=>{          
            router.push({name: 'dashboard'});
          })
      }
    }
  },
}
</script>