<template>
  <!-- ========== MAIN ========== -->
  <main id="content" role="main">
    <!-- Hero Section -->
    <div class="dzsparallaxer auto-init height-is-based-on-content use-loading mode-scroll"
         data-options='{direction: "normal"}'>
      <!-- Apply Tu Parallax background image here -->
      <div class="divimage dzsparallaxer--target" style="height: 120%; background-image: url(https://htmlstream.com/preview/front-v2.9.4/assets/img/1920x800/img13.jpg);"></div>

      <!-- Content -->
      <div class="container position-relative space-2 space-md-3 z-index-2">
        <div class="w-lg-80 text-center mx-auto">
          <h1 class="display-3 font-size-md-down-5 text-white font-weight-semi-bold">¿Tienes una pregunta?</h1>
          <p class="lead text-white">Nos encantaría hablar sobre cómo podemos ayudarlo</p>
        </div>
      </div>
      <!-- End Content -->
    </div>
    <!-- End Hero Section -->

    <!-- Contacts Info Section -->
    <div class="clearfix space-2">
      <div class="row no-gutters">
        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon8" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="assets/svg/icons/icon-8.svg" alt="SVG"
                   data-parent="#icon8">
            </figure>
            <h2 class="h6 mb-0">Dirección</h2>
            <p class="mb-0">Carrera 53 #3-09 <br/> Barrio Transformacion <br/> Buenaventura, Valle del Cauca </p>
          </div>
          <!-- End Contacts Info -->
        </div>

        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon15" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="assets/svg/icons/icon-15.svg" alt="SVG"
                   data-parent="#icon15">
            </figure>
            <h3 class="h6 mb-0">Email</h3>
            <p class="mb-0">info@estiloyclass.com</p>
          </div>
          <!-- End Contacts Info -->
        </div>

        <div class="col-sm-6 col-lg-4 u-ver-divider u-ver-divider--none-lg">
          <!-- Contacts Info -->
          <div class="text-center p-5">
            <figure id="icon16" class="svg-preloader ie-height-56 max-width-8 mx-auto mb-3">
              <img class="js-svg-injector" src="assets/svg/icons/icon-16.svg" alt="SVG"
                   data-parent="#icon16">
            </figure>
            <h3 class="h6 mb-0">Numero de Telefono</h3>
            <p class="mb-0">+57 (313) 533-9177</p>
          </div>
          <!-- End Contacts Info -->
        </div>
      </div>
    </div>
    <!-- End Contacts Info Section -->

    <hr class="my-0">

    <!-- Contact Form Section -->
    <div class="container space-2 space-md-3">
      <!-- Title -->
      <div class="w-md-80 w-lg-50 text-center mx-md-auto mb-9">
        <span class="btn btn-xs btn-soft-success btn-pill mb-2">Envianos un Whatsapp</span>
        <h2 class="text-primary font-weight-normal">Cuéntanos <span class="font-weight-semi-bold">sobre ti</span></h2>
        <p>Si tiene preguntas o simplemente quiere saludarnos, contáctenos.</p>
      </div>
      <!-- End Title -->

      <div class="w-lg-80 mx-auto">
        <!-- Contacts Form -->
        <form class="js-validate">
          <div class="row">
            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label class="form-label">
                  Tu nombre
                  <span class="text-danger">*</span>
                </label>

                <input type="text" class="form-control" v-model="name" placeholder="Jack Wayley" aria-label="Jack Wayley" required
                       data-msg="Por favor ingresa tu nombre."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label class="form-label">
                  Tu correo electrónico
                  <span class="text-danger">*</span>
                </label>

                <input type="email" class="form-control" v-model="email" placeholder="jackwayley@gmail.com" aria-label="jackwayley@gmail.com" required
                       data-msg="Por favor ingresa un valido correo electrónico."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
            </div>
            <!-- End Input -->

            <div class="w-100"></div>

            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label class="form-label">
                  Asunto
                  <span class="text-danger">*</span>
                </label>

                <input type="text" class="form-control" v-model="subject" placeholder="Web design" aria-label="Web design" required
                       data-msg="Por favor ingresa a Asunto."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
            </div>
            <!-- End Input -->

            <!-- Input -->
            <div class="col-sm-6 mb-6">
              <div class="js-form-message">
                <label class="form-label">
                  Tu numero de teléfono
                  <span class="text-danger">*</span>
                </label>

                <input type="number" class="form-control" v-model="phone" placeholder="1-800-643-4500" aria-label="1-800-643-4500" required
                       data-msg="Por favor ingresa un valido numero de teléfono."
                       data-error-class="u-has-error"
                       data-success-class="u-has-success">
              </div>
            </div>
            <!-- End Input -->
          </div>

          <!-- Input -->
          <div class="js-form-message mb-6">
            <label class="form-label">
              ¿Como podemos ayudarte?
              <span class="text-danger">*</span>
            </label>

            <div class="input-group">
              <textarea class="form-control" rows="4" v-model="text" placeholder="Hola, me gustria que me ayudaran..." aria-label="Hola, me gustria que me ayudaran..." required
                        data-msg="Por favor ingresa una razón"
                        data-error-class="u-has-error"
                        data-success-class="u-has-success"></textarea>
            </div>
          </div>
          <!-- End Input -->

          <div class="text-center 573178758748">
            <a :class="['btn btn-primary btn-wide transition-3d-hover mb-4', {'disabled': !message}]" :href="'//wa.me/573135339177?text='+message">Enviar</a>
            <p class="small">Nos pondremos en contacto con usted en 1-2 días hábiles.</p>
          </div>
        </form>
        <!-- End Contacts Form -->
      </div>
    </div>
    <!-- End Contact Form Section -->
  </main>
  <!-- ========== END MAIN ========== -->
</template>
<script>
export default {
  data(){
    return {
      name: '',
      email: '',
      subject: '',
      phone: '',
      text: '',
    }
  },
  computed: {
    message(){
      return (this.name.length > 2 && this.subject.length > 2 && this.text.length > 2 && this.phone.length > 6 && this.email.length > 8) ?'Hola! mi nombre es '+this.name+' y el motivo de escribirles es '+this.subject+' :'+this.text+'. Puedes contactarme a mi correo: '+this.email+', o a este telefono: '+this.phone+'. Muchas Gracias, Quedo Atent@' : false;
    }
  },
  
}
</script>