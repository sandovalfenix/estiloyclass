<template>
  <div>
    <!-- Account Sidebar Navigation -->
    <aside class="u-sidebar" id="sidebarContent" aria-labelledby="sidebarNavToggler">
      <div class="u-sidebar__scroller">
        <div class="u-sidebar__container">
          <div class="u-header-sidebar__footer-offset">
            <!-- Toggle Button -->
            <div class="d-flex align-items-center pt-4 px-7">
              <button class="close ml-auto" type="button" aria-controls="sidebarContent" aria-expanded="false" aria-haspopup="true" 
                data-unfold-animation-in="fadeInRight" 
                data-unfold-animation-out="fadeOutRight" 
                data-unfold-duration="500" 
                data-unfold-event="click" 
                data-unfold-hide-on-scroll="false" 
                data-unfold-target="#sidebarContent" 
                data-unfold-type="css-animation">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <!-- End Toggle Button -->

            <!-- Content -->
            <div class="js-scrollbar">
              <div class="u-sidebar__content u-header-sidebar__content">
                <form id="formSign" class="js-validate" @submit.prevent="signAction">
                  <!-- Login -->
                  <div id="login" data-target-group="idForm">
                    <!-- Title -->
                    <header class="text-center mb-5">
                      <h2 class="h5 mb-0">Inicia sesión o regístrate!</h2>
                      <small class="text-muted">¡Únete a Estilo&Class, descubre lo que tenemos para ti!</small>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signinEmail">Correo Electronico</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signinEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signinEmail" v-model="User.email" type="email" placeholder="Correo Electronico" aria-describedby="signinEmailLabel" aria-label="Email" data-error-class="u-has-error" data-msg="Por favor, introduce una dirección de correo electrónico válida." data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signinPassword">Contraseña</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signinPasswordLabel">
                              <span class="fas fa-lock"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signinPassword" v-model="User.password" type="password" placeholder="Contraseña" aria-describedby="signinPasswordLabel" aria-label="Password" data-error-class="u-has-error" data-msg="Su contraseña es inválida. Inténtalo de nuevo." data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="d-flex justify-content-end mb-4">
                      <a class="js-animation-link small link-muted" href="javascript:;" data-animation-in="slideInUp" data-link-group="idForm" data-target="#forgotPassword">¿Se te olvidó tu contraseña?</a>
                    </div>

                    <div class="mb-2">
                      <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit" @click="signInCustomer = true">Iniciar sesión</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted mr-2">¿No tiene una cuenta?</span>
                      <a class="js-animation-link small" href="javascript:;" data-animation-in="slideInUp" data-link-group="idForm" data-target="#signup">Regístrate</a>
                    </div>
                  </div>

                  <!-- Signup -->
                  <div id="signup" style="display: none; opacity: 0;" data-target-group="idForm">
                    <div v-show="UserAuth.isAnonymous">
                      <!-- Title -->
                      <header class="text-center mb-5">
                        <h2 class="h5 mb-0">Inicia sesión o regístrate!</h2>
                        <small class="text-muted">¡Únete a Estilo&Class, descubre lo que tenemos para ti!</small>
                      </header>
                      <!-- End Title -->

                      <!-- Form Group -->
                      <div class="form-group">
                        <div class="js-form-message js-focus-state">
                          <label class="sr-only" for="signupEmail">Correo Electronico</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="signupEmailLabel">
                                <span class="fas fa-user"></span>
                              </span>
                            </div>
                            <input class="form-control" id="signupEmail" v-model="User.email" type="email" placeholder="Correo Electronico" aria-describedby="signupEmailLabel" aria-label="Email" data-error-class="u-has-error" data-msg="Por favor, introduce una dirección de correo electrónico válida." data-success-class="u-has-success" required>
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->

                      <!-- Form Group -->
                      <div class="form-group">
                        <div class="js-form-message js-focus-state">
                          <label class="sr-only" for="signupPhone">Telefono</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="signupPhoneLabel">
                                <span class="fas fa-phone"></span>
                              </span>
                            </div>
                            <input class="form-control" id="signupPhone" v-model="User.phone" type="tel" placeholder="Telefono" aria-describedby="signupPhoneLabel" aria-label="Phone" data-error-class="u-has-error" data-msg="Por favor, introduce un numero de telefono válido." data-success-class="u-has-success" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" data-rule-minlength="10" data-rule-maxlength="10" required>
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->

                      <!-- Form Group -->
                      <div class="form-group">
                        <div class="js-form-message js-focus-state">
                          <label class="sr-only" for="signupPassword">Contraseña</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="signupPasswordLabel">
                                <span class="fas fa-lock"></span>
                              </span>
                            </div>
                            <input class="form-control" id="signupPassword" v-model="User.password" type="password" placeholder="Contraseña" aria-describedby="signupPasswordLabel" aria-label="Password" data-error-class="u-has-error" data-msg="Su contraseña es inválida. Inténtalo de nuevo." data-success-class="u-has-success" data-rule-minlength="6" required>
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->

                      <!-- Form Group -->
                      <div class="form-group">
                        <div class="js-form-message js-focus-state">
                          <label class="sr-only" for="signupConfirmPassword">Confirmar Contraseña</label>
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text" id="signupConfirmPasswordLabel">
                                <span class="fas fa-key"></span>
                              </span>
                            </div>
                            <input class="form-control" id="signupConfirmPassword" name="confirmPassword" type="password" placeholder="Confirmar Contraseña" aria-describedby="signupConfirmPasswordLabel" aria-label="Confirmar Contraseña" data-error-class="u-has-error" data-msg="La contraseña no coincide con la contraseña de confirmación." data-success-class="u-has-success" required>
                          </div>
                        </div>
                      </div>
                      <!-- End Input -->

                      <div class="mb-2">
                        <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit" @click="signUpCustomer = true;">Empezar</button>
                      </div>

                      <div class="text-center mb-4">
                        <span class="small text-muted mr-2">¿Ya tienes una cuenta?</span>
                        <a class="js-animation-link small" href="javascript:;" data-animation-in="slideInUp" data-link-group="idForm" data-target="#login">Iniciar sesión</a>
                      </div>
                    </div>
                    <div v-show="!UserAuth.isAnonymous">
                      <!-- Title -->
                      <header class="text-center mb-5">
                        <h2 class="h5 mb-0">Registro Completado</h2>
                      </header>
                      <!-- End Title -->
                      
                      <p class="text-muted mb-5 text-center">Usuario <b>{{UserAuth.email}}</b> fue regístratado con exito!</p>

                      <a href="/" class="btn btn-soft-primary btn-block">
                        <span>Continuar</span>
                      </a>
                    </div>
                  </div>
                  <!-- End Signup -->

                  <!-- Forgot Password -->
                  <div id="forgotPassword" style="display: none; opacity: 0;" data-target-group="idForm">
                    <!-- Title -->
                    <header class="text-center mb-5">
                      <h2 class="h5 mb-0">Recuperar contraseña.</h2>
                      <small class="text-muted">Ingrese su dirección de correo electrónico y se le enviará un correo electrónico con instrucciones.</small>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="recoverEmail">Tu Correo Electronico</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="recoverEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input class="form-control" id="recoverEmail" v-model="User.email" type="email" placeholder="Tu correo electrónico" aria-describedby="recoverEmailLabel" aria-label="Your email" data-error-class="u-has-error" data-msg="Por favor, introduce una dirección de correo electrónico válida." data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="mb-2">
                      <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit">Recuperar Contraseña</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">¿Recuerdas tu contraseña?</span>
                      <a class="js-animation-link small" href="javascript:;" data-animation-in="slideInUp" data-link-group="idForm" data-target="#login">Iniciar sesión</a>
                    </div>
                  </div>
                  <!-- End Forgot Password -->
                </form>
              </div>
            </div>
            <!-- End Content -->
          </div>
        </div>
      </div>
    </aside>
    <!-- End Account Sidebar Navigation -->
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {
      User: {},
      signUpCustomer: false,
      signInCustomer: false
    }
  },
  computed:{
    ...mapState(['UserAuth']),
  },
  methods:{
    ...mapActions(['signUp','signIn', 'addData']),
    signAction(){
      if(this.signUpCustomer){
        this.signUp(this.User);
      }else if(this.signInCustomer){
        this.signIn(this.User);
      }
      this.$router.push({ name: 'home' });
    }
  },
};
</script>