<template>
  <div>
    <!-- ========== HEADER ========== -->
    <header class="u-header" id="header">
      <!-- Search -->
      <div class="u-search-push-top" id="searchPushTop">
        <div class="container position-relative">
          <div class="u-search-push-top__content">
            <!-- Close Button -->
            <button class="close u-search-push-top__close-btn" type="button" aria-controls="searchPushTop" aria-expanded="false" aria-haspopup="true" 
              data-unfold-target="#searchPushTop" 
              data-unfold-type="jquery-slide">
              <span aria-hidden="true">&times;</span>
            </button>
            <!-- End Close Button -->

            <!-- Input -->
            <form class="js-focus-state input-group">
              <input class="form-control" type="search" placeholder="Buscar productos, marcas y más..." aria-label="Buscar productos, marcas y más...">
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">Buscar</button>
              </div>
            </form>
            <!-- End Input -->
          </div>
        </div>
      </div>
      <!-- End Search -->

      <div class="u-header__section">
        <!-- Topbar -->
        <div class="container u-header__hide-content pt-2">
          <div class="d-flex align-items-center">
            <!-- Language -->
            <div class="position-relative">
              <a class="dropdown-nav-link dropdown-toggle d-flex align-items-center" id="languageDropdownInvoker" href="javascript:;" role="button" aria-controls="languageDropdown" aria-expanded="false" aria-haspopup="true" 
                data-unfold-animation-in="slideInUp" 
                data-unfold-animation-out="fadeOut" 
                data-unfold-delay="300" 
                data-unfold-duration="300" 
                data-unfold-event="hover" 
                data-unfold-hide-on-scroll="true" 
                data-unfold-target="#languageDropdown" 
                data-unfold-type="css-animation">
                <img class="dropdown-item-icon" src="/assets/vendor/flag-icon-css/flags/4x3/co.svg" alt="SVG">
                <span class="d-inline-block d-sm-none">CO</span>
                <span class="d-none d-sm-inline-block">Colombia</span>
              </a>

              <div class="dropdown-menu dropdown-unfold" id="languageDropdown" aria-labelledby="languageDropdownInvoker">
                <a class="dropdown-item" href="#">English</a>
                <a class="dropdown-item" href="#">Deutsch</a>
                <a class="dropdown-item active" href="#">Español‎</a>
              </div>
            </div>
            <!-- End Language -->

            <div class="ml-auto">
              <!-- Links -->
              <div class="d-none d-sm-inline-block ml-sm-auto">
                <ul class="list-inline mb-0">
                  <li class="list-inline-item mr-0">
                    <a class="u-header__navbar-link" href="pages/contacts-agency.html">Contactanos</a>
                  </li>
                </ul>
              </div>
              <!-- End Links -->
            </div>

            <ul class="list-inline ml-2 mb-0">
              <!-- Search -->
              <li class="list-inline-item">
                <a class="btn btn-xs btn-icon btn-text-secondary" href="javascript:;" role="button" aria-controls="searchPushTop" aria-expanded="false" aria-haspopup="true" 
                  data-unfold-target="#searchPushTop" 
                  data-unfold-type="jquery-slide">
                  <span class="fas fa-search btn-icon__inner"></span>
                </a>
              </li>
              <!-- End Search -->

              <!-- Shopping Cart -->
              <li class="list-inline-item position-relative">
                <a class="btn btn-xs btn-icon btn-text-secondary" id="shoppingCartDropdownInvoker" href="javascript:;" role="button" aria-controls="shoppingCartDropdown" aria-expanded="false" aria-haspopup="true" 
                  data-unfold-animation-in="slideInUp" 
                  data-unfold-animation-out="fadeOut" 
                  data-unfold-delay="300" 
                  data-unfold-duration="300" 
                  data-unfold-event="hover" 
                  data-unfold-hide-on-scroll="true" 
                  data-unfold-target="#shoppingCartDropdown" 
                  data-unfold-type="css-animation">
                  <span class="fas fa-shopping-cart btn-icon__inner"></span>
                </a>

                <div class="dropdown-menu dropdown-unfold dropdown-menu-right text-center p-7" id="shoppingCartDropdown" aria-labelledby="shoppingCartDropdownInvoker" style="min-width: 250px;">
                  <span class="btn btn-icon btn-soft-primary rounded-circle mb-3">
                    <span class="fas fa-shopping-basket btn-icon__inner"></span>
                  </span>
                  <span class="d-block">Su carrito está vacío</span>
                </div>
              </li>
              <!-- End Shopping Cart -->

              <!-- Account Login -->
              <li class="list-inline-item">
                <!-- Account Sidebar Toggle Button -->
                <a class="btn btn-xs btn-icon btn-text-secondary" id="sidebarNavToggler" href="javascript:;" role="button" aria-controls="sidebarContent" aria-expanded="false" aria-haspopup="true" 
                  data-unfold-animation-in="fadeInRight" 
                  data-unfold-animation-out="fadeOutRight" 
                  data-unfold-duration="500" 
                  data-unfold-event="click" 
                  data-unfold-hide-on-scroll="false" 
                  data-unfold-target="#sidebarContent" 
                  data-unfold-type="css-animation">
                  <span class="fas fa-user-circle btn-icon__inner font-size-1"></span>
                </a>
                <!-- End Account Sidebar Toggle Button -->
              </li>
              <!-- End Account Login -->
            </ul>
          </div>
        </div>
        <!-- End Topbar -->

        <div class="container" id="logoAndNav">
          <!-- Nav -->
          <nav class="js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
            <!-- Logo -->
            <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/">
              <span class="u-header__navbar-brand-text">
                <img src="@/assets/logo.png" style="width: 100px">
              </span>
            </a>
            <!-- End Logo -->

            <!-- Responsive Toggle Button -->
            <button class="navbar-toggler btn u-hamburger" type="button" aria-controls="navBar" aria-expanded="false" aria-label="Toggle navigation" 
              data-target="#navBar" 
              data-toggle="collapse">
              <span class="u-hamburger__box" id="hamburgerTrigger">
                <span class="u-hamburger__inner"></span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->

            <!-- Navigation -->
            <div class="collapse navbar-collapse u-header__navbar-collapse" id="navBar">
              <ul class="navbar-nav u-header__navbar-nav">
                <!-- Man -->
                <li class="nav-item hs-has-sub-menu u-header__nav-item">
                  <router-link class="nav-link u-header__nav-link" to="/categories/all/hombre">Hombres</router-link>
                </li>
                <!-- End Man -->

                <!-- Woman -->
                <li class="nav-item hs-has-sub-menu u-header__nav-item">
                   <router-link class="nav-link u-header__nav-link" to="/categories/all/mujer">Mujeres</router-link>
                </li>
                <!-- End Woman -->
                

                <!-- Woman -->
                <li class="nav-item hs-has-sub-menu u-header__nav-item">
                  <router-link class="nav-link u-header__nav-link" to="/categories/all/infantil">Infantil</router-link>
                </li>
                <!-- End Woman -->

                <!-- Woman -->
                <li class="nav-item hs-has-sub-menu u-header__nav-item">
                   <router-link class="nav-link u-header__nav-link" to="/categories/accesorios/all">Accesorios</router-link>
                </li>
                <!-- End Woman -->

                <li class="nav-item hs-has-sub-menu u-header__nav-item">
                  <router-link class="nav-link u-header__nav-link" to="/categories/zapatos/all">Calzado</router-link>
                </li>
                <!-- End Woman -->

                
              </ul>
            </div>
            <!-- End Navigation -->
          </nav>
          <!-- End Nav -->
        </div>
      </div>
    </header>
    <!-- ========== END HEADER ========== -->
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>