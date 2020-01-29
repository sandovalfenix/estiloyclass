<template>
  <div>
    <!-- ========== MAIN ========== -->
    <main id="content" role="main">
      <!-- Breadcrumb Section -->
      <div class="bg-primary">
        <div class="container space-top-1 pb-3">
          <div class="row">
            <div class="col-lg-5 order-lg-2 text-lg-right mb-4 mb-lg-0">
              <div class="d-flex d-lg-inline-block justify-content-between justify-content-lg-end align-items-center align-items-lg-start">        
                <!-- Button -->
                <a class="btn btn-sm btn-soft-white text-nowrap transition-3d-hover" href="javascript:;" @click="signOutDashboard">
                  <span class="fas fa-sign-out-alt mr-2"></span>
                  Cerrar Sesion
                </a>
                <!-- End Button -->

                <!-- Breadcrumb Nav Toggle Button -->
                <div class="d-lg-none">
                  <button type="button" class="navbar-toggler btn u-hamburger u-hamburger--white"
                          aria-label="Toggle navigation"
                          aria-expanded="false"
                          aria-controls="breadcrumbNavBar"
                          data-toggle="collapse"
                          data-target="#breadcrumbNavBar">
                    <span id="breadcrumbHamburgerTrigger" class="u-hamburger__box">
                      <span class="u-hamburger__inner"></span>
                    </span>
                  </button>
                </div>
                <!-- End Breadcrumb Nav Toggle Button -->
              </div>
            </div>

            <div class="col-lg-7 order-lg-1">
              <!-- User Info -->
              <div class="media d-block d-sm-flex align-items-sm-center">
                <div class="u-lg-avatar position-relative mb-3 mb-sm-0 mr-3">
                  <img class="img-fluid rounded p-2 bg-white" src="@/assets/logo.png" alt="Image Description">
                </div>
                <div class="media-body">
                  <h1 class="h3 text-white font-weight-medium mb-1">Estilo & Class - Dashboard</h1>
                  <span class="d-block text-white"> <i class="fas fa-user-alt mr-2"></i> {{UserAuth.email}}</span>
                </div>
              </div>
              <!-- End User Info -->
            </div>
          </div>
        </div>

        <div class="container space-bottom-1 space-bottom-lg-0">
          <div class="d-lg-flex justify-content-lg-between align-items-lg-center">
            <!-- Navbar -->
            <div class="u-header u-header-left-aligned-nav u-header--bg-transparent-lg u-header--white-nav-links z-index-4">
              <div class="u-header__section bg-transparent">
                <nav class="js-breadcrumb-menu navbar navbar-expand-lg u-header__navbar u-header__navbar--no-space">
                  <div id="breadcrumbNavBar" class="collapse navbar-collapse u-header__navbar-collapse">
                    <ul class="navbar-nav u-header__navbar-nav">
                      <!-- Home -->
                      <li class="nav-item u-header__nav-item">
                        <router-link class="nav-link u-header__nav-link" to="/dashboard">Inicio</router-link>
                      </li>
                      <!-- Home -->
                      <!-- Produts -->
                      <li class="nav-item u-header__nav-item">
                        <router-link class="nav-link u-header__nav-link" to="/dashboard/products">Productos</router-link>
                      </li>
                      <!-- Produts -->
                      <!-- Users -->
                      <li class="nav-item u-header__nav-item">
                        <router-link class="nav-link u-header__nav-link" to="/dashboard/users">Usuarios</router-link>
                      </li>
                      <!-- Users -->
                      <!-- Orders -->
                      <li class="nav-item u-header__nav-item">
                        <router-link class="nav-link u-header__nav-link" to="/dashboard/orders">Ordenes</router-link>
                      </li>
                      <!-- Orders -->
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
            <!-- End Navbar -->

            <div class="ml-lg-auto">
            </div>
          </div>
        </div>
      </div>
      <!-- End Breadcrumb Section -->

      <!-- Content Section -->
      <div class="bg-light-light">
        <router-view></router-view>
      </div>
      <!-- End Content Section -->
    </main>
    <!-- ========== END MAIN ========== -->

    <!-- ========== FOOTER ========== -->
    <footer>

      <!-- Copyright -->
      <div class="container-fluid text-center space-top-1 pb-2 bg-primary">
        <div class="text-center">
          <!-- Logo -->
          <a class="d-inline-flex align-items-center mb-2" href="index.html" aria-label="Aitheria">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="36px" height="36px" viewBox="0 0 46 46" xml:space="preserve" style="margin-bottom: 0;">
              <path fill="#FFFFFF" opacity=".65" d="M23,41L23,41c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18h11.3C38,5,41,8,41,11.7V23C41,32.9,32.9,41,23,41z"></path>
              <path class="fill-white" opacity=".5" d="M28,35.9L28,35.9c-9.9,0-18-8-18-18v0c0-9.9,8-18,18-18l11.3,0C43,0,46,3,46,6.6V18C46,27.9,38,35.9,28,35.9z"></path>
              <path class="fill-white" opacity=".7" d="M18,46L18,46C8,46,0,38,0,28v0c0-9.9,8-18,18-18h11.3c3.7,0,6.6,3,6.6,6.6V28C35.9,38,27.9,46,18,46z"></path>
              <text x="10" y="35" fill="#604eb4" font-size="2em" font-family="Consolas" font-weight="600">α</text>
            </svg>
            <span class="brand brand-light">itheria</span>
          </a>
          <!-- End Logo -->
    
          <p class="small text-white-70">© Aitheria. 2020 Aitheria.tech. Diseñadores y derechos reservados a Estilo & Class SAS.</p>
        </div>
      </div>
      <!-- End Copyright -->
    </footer>
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { db, auth } from '@/firebase';

export default {
  name: 'Dashboard',
  beforeRouteEnter (to, from, next) {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      auth.onAuthStateChanged(function (user) {
          if (user) {
            db.collection("Users").where("uid", "==", user.uid).get()
            .then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                let Data = doc.data();
                if (Data.admin) {
                 next();
                }else {
                  auth.signOut()
                  next({path: '/login'});
                }
              });
            })
          } else {
            // User is signed out.
            next({path: '/login'});
          }
      });
    }else{
      next();
    }
  },
  created(){    
    this.userAuthOnState();
  },
  computed:{
    ...mapState(['UserAuth'])
  },
  methods: {
    ...mapActions(['signOut', 'userAuthOnState']),
    signOutDashboard(){
      this.signOut()
      setTimeout(() => {
        window.location.href = "/login"
      }, 500);
      
    }
  },  
}
</script>