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
            <div class="js-scrollbar u-sidebar__body">
              <div class="u-sidebar__content u-header-sidebar__content">
                <form class="js-validate">
                  <!-- Login -->
                  <div id="login" 
                    data-target-group="idForm">
                    <!-- Title -->
                    <header class="text-center mb-7">
                      <h2 class="h4 mb-0">Bienvenido!</h2>
                      <p>Inicie sesión para gestionar su cuenta.</p>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signinEmail">Email</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signinEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signinEmail" name="email" type="email" placeholder="Email" aria-describedby="signinEmailLabel" aria-label="Email" 
                            data-error-class="u-has-error" 
                            data-msg="Por favor, introduce una dirección de correo electrónico válida." 
                            data-success-class="u-has-success" required>
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
                          <input class="form-control" id="signinPassword" name="password" type="password" placeholder="Contraseña" aria-describedby="signinPasswordLabel" aria-label="Password" 
                            data-error-class="u-has-error" 
                            data-msg="Su contraseña es inválida. Inténtalo de nuevo." 
                            data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="d-flex justify-content-end mb-4">
                      <a class="js-animation-link small link-muted" href="javascript:;" 
                        data-animation-in="slideInUp" 
                        data-link-group="idForm" 
                        data-target="#forgotPassword">¿Se te olvidó tu contraseña?</a>
                    </div>

                    <div class="mb-2">
                      <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit">Iniciar sesión</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">¿No tiene una cuenta?</span>
                      <a class="js-animation-link small" href="javascript:;" 
                        data-animation-in="slideInUp" 
                        data-link-group="idForm" 
                        data-target="#signup">Regístrate
                      </a>
                    </div>

                    <div class="text-center">
                      <span class="u-divider u-divider--xs u-divider--text mb-4">O</span>
                    </div>

                    <!-- Login Buttons -->
                    <div class="d-flex">
                      <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                        <span class="fab fa-facebook-square mr-1"></span>
                        Facebook
                      </a>
                      <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                        <span class="fab fa-google mr-1"></span>
                        Google
                      </a>
                    </div>
                    <!-- End Login Buttons -->
                  </div>

                  <!-- Signup -->
                  <div id="signup" style="display: none; opacity: 0;" 
                    data-target-group="idForm">
                    <!-- Title -->
                    <header class="text-center mb-7">
                      <h2 class="h4 mb-0">Bienvenido a Estilo & Class.</h2>
                      <p>Rellena el formulario para empezar.</p>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signupEmail">Email</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signupEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signupEmail" name="email" type="email" placeholder="Email" aria-describedby="signupEmailLabel" aria-label="Email" 
                            data-error-class="u-has-error" 
                            data-msg="Por favor, introduce una dirección de correo electrónico válida." 
                            data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signupPassword">Password</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signupPasswordLabel">
                              <span class="fas fa-lock"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signupPassword" name="password" type="password" placeholder="Contraseña" aria-describedby="signupPasswordLabel" aria-label="Password" 
                            data-error-class="u-has-error" 
                            data-msg="Su contraseña es inválida. Inténtalo de nuevo." 
                            data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="signupConfirmPassword">Confirmar contraseña</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="signupConfirmPasswordLabel">
                              <span class="fas fa-key"></span>
                            </span>
                          </div>
                          <input class="form-control" id="signupConfirmPassword" name="confirmPassword" type="password" placeholder="Confirmar contraseña" aria-describedby="signupConfirmPasswordLabel" aria-label="Confirmar contraseña" 
                            data-error-class="u-has-error" 
                            data-msg="La contraseña no coincide con la contraseña de confirmación." 
                            data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Input -->

                    <div class="mb-2">
                      <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit">Empezar</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">Ya tienes una cuenta? Inicia sesión</span>
                      <a class="js-animation-link small" href="javascript:;" 
                        data-animation-in="slideInUp" 
                        data-link-group="idForm" 
                        data-target="#login">Iniciar sesión
                      </a>
                    </div>

                    <div class="text-center">
                      <span class="u-divider u-divider--xs u-divider--text mb-4">O</span>
                    </div>

                    <!-- Login Buttons -->
                    <div class="d-flex">
                      <a class="btn btn-block btn-sm btn-soft-facebook transition-3d-hover mr-1" href="#">
                        <span class="fab fa-facebook-square mr-1"></span>
                        Facebook
                      </a>
                      <a class="btn btn-block btn-sm btn-soft-google transition-3d-hover ml-1 mt-0" href="#">
                        <span class="fab fa-google mr-1"></span>
                        Google
                      </a>
                    </div>
                    <!-- End Login Buttons -->
                  </div>
                  <!-- End Signup -->

                  <!-- Forgot Password -->
                  <div id="forgotPassword" style="display: none; opacity: 0;" 
                    data-target-group="idForm">
                    <!-- Title -->
                    <header class="text-center mb-7">
                      <h2 class="h4 mb-0">Recuperar contraseña.</h2>
                      <p>Ingrese su dirección de correo electrónico y se le enviará un correo electrónico con instrucciones.</p>
                    </header>
                    <!-- End Title -->

                    <!-- Form Group -->
                    <div class="form-group">
                      <div class="js-form-message js-focus-state">
                        <label class="sr-only" for="recoverEmail">Tu email</label>
                        <div class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text" id="recoverEmailLabel">
                              <span class="fas fa-user"></span>
                            </span>
                          </div>
                          <input class="form-control" id="recoverEmail" name="email" type="email" placeholder="Tu email" aria-describedby="recoverEmailLabel" aria-label="Tu email" 
                            data-error-class="u-has-error" 
                            data-msg="Por favor, introduce una dirección de correo electrónico válida." 
                            data-success-class="u-has-success" required>
                        </div>
                      </div>
                    </div>
                    <!-- End Form Group -->

                    <div class="mb-2">
                      <button class="btn btn-block btn-sm btn-primary transition-3d-hover" type="submit">Recuperar contraseña</button>
                    </div>

                    <div class="text-center mb-4">
                      <span class="small text-muted">¿Recuerdas tu contraseña?</span>
                      <a class="js-animation-link small" href="javascript:;" 
                        data-animation-in="slideInUp" 
                        data-link-group="idForm" 
                        data-target="#login">Iniciar sesión
                      </a>
                    </div>
                  </div>
                  <!-- End Forgot Password -->
                </form>
              </div>
            </div>
            <!-- End Content -->
          </div>

          <!-- Footer -->
          <footer class="svg-preloader u-sidebar__footer u-sidebar__footer--account" id="SVGwaveWithDots">
            <!-- SVG Background Shape -->
            <div class="position-absolute right-0 bottom-0 left-0">
              <img class="js-svg-injector" src="/assets/svg/components/wave-bottom-with-dots.svg" alt="Image Description" 
                data-parent="#SVGwaveWithDots">
            </div>
            <!-- End SVG Background Shape -->
          </footer>
          <!-- End Footer -->
        </div>
      </div>
    </aside>
    <!-- End Account Sidebar Navigation -->
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>