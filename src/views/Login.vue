<template>
  <div class="container-fluid space-top-2 p-0">
    <router-view></router-view>
    <!-- ========== FOOTER ========== -->
    <footer class="position-fixed bottom-0 w-100">
      <div class="container text-center">
        <a class="d-inline-flex align-items-center mb-2" href="https://www.aitheria.tech" aria-label="Aitheria">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 46 46" xml:space="preserve" style="margin-bottom: 0;">
            <path class="fill-primary" opacity=".65" d="M23,41.1L23,41.1c-9.9,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6v11.4C41,33,32.9,41.1,23,41.1z"/>
            <path class="fill-primary" opacity=".5" d="M28,36L28,36c-9.9,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3C43,0.1,46,3.1,46,6.7v11.4C46,28,38,36,28,36z"/>
            <path class="fill-primary" opacity=".7" d="M18,46.1L18,46.1c-10,0-18-8-18-18l0,0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6v11.4C35.9,38.1,27.9,46.1,18,46.1z"/>
            <text x="10" y="35" fill="#fff" font-size="2em" font-family="Consolas" font-weight="600">α</text>
          </svg>
          <span class="brand brand-primary">Aitheria</span>
        </a>
        <p class="small text-secondary">© Aitheria Technology. 2019 Estilo & Class. Todo los derechos reservados.</p>
      </div>
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script>
import { auth } from '@/firebase';

export default {
  beforeRouteEnter (to, from, next) {
    auth.onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            next({name: 'dashboard'});
        } else {
            // User is signed out.
            next();
        }
    });
  }
}
</script>