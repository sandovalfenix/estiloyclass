<template>
  <header class="u-header" id="header">
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
              <a class="dropdown-item active" href="#">Español‎</a>
            </div>
          </div>
          <!-- End Language -->

          <div class="ml-auto">
            <!-- Links -->
            <div class="d-none d-sm-inline-block ml-sm-auto">
              <ul class="list-inline mb-0">
                <li class="list-inline-item mr-0">
                  <a class="u-header__navbar-link" href="/contacts"><b class="font-size-1">Contactanos</b></a>
                </li>
              </ul>
            </div>
            <!-- End Links -->
          </div>

          <ul class="list-inline ml-2 mb-0">
            <!-- Shopping Cart -->
            <li class="list-inline-item">
              <router-link class="btn btn-xs btn-text-secondary" to="/cart">
                <span class="fas fa-shopping-cart font-size-1"></span>
                
                <span v-if="cartLength" class="badge badge-sm badge-primary bage-pos rounded-circle">{{cartLength}}</span>
                <span class="d-none d-md-inline font-size-1 ml-2">Carrito</span>
              </router-link>
            </li>
            <!-- End Shopping Cart -->

            <!-- Account Login -->
            <li :class="['list-inline-item', 'position-relative']">       
              <!-- Account Sidebar Toggle Button -->
              <a v-show="!UserAuth" class="btn btn-xs btn-text-secondary" id="sidebarNavToggler" href="javascript:;" role="button" aria-controls="sidebarContent" aria-expanded="false" aria-haspopup="true" 
                data-unfold-animation-in="fadeInRight" 
                data-unfold-animation-out="fadeOutRight" 
                data-unfold-duration="500" 
                data-unfold-event="click" 
                data-unfold-hide-on-scroll="false" 
                data-unfold-target="#sidebarContent" 
                data-unfold-type="css-animation">
                <span class="fas fa-user-circle font-size-1 mr-2"></span>
                <span class="d-none d-md-inline font-size-1">Iniciar Sesion</span>
              </a>
              <!-- End Account Sidebar Toggle Button -->

              <!-- Account Dropdown -->
              <a v-show="UserAuth" id="account-dropdown-invoker" class="btn btn-xs btn-text-secondary u-sidebar--account__toggle-bg" href="javascript:;" role="button"
                aria-controls="account-dropdown"
                aria-haspopup="true"
                aria-expanded="true"
                data-unfold-event="hover"
                data-unfold-target="#account-dropdown"
                data-unfold-type="css-animation"
                data-unfold-duration="300"
                data-unfold-delay="300"
                data-unfold-hide-on-scroll="true"
                data-unfold-animation-in="slideInUp"
                data-unfold-animation-out="fadeOut">
                <span class="u-sidebar--account__toggle-text">{{UserAuth.username}}</span>
                <img class="u-sidebar--account__toggle-img" src="https://image.flaticon.com/icons/svg/149/149071.svg" alt="Image Description">
              </a>
              <!-- End Account Dropdown -->

              <div id="account-dropdown" class="dropdown-menu dropdown-unfold dropdown-menu-sm-right" aria-labelledby="account-dropdown-invoker">
                <a class="dropdown-item" href="/account">
                  <span class="fas fa-user-circle dropdown-item-icon"></span>
                  Perfil
                </a>
                <a class="dropdown-item" href="javascript:;" @click="signOutUser">
                  <span class="fas fa-sign-out-alt dropdown-item-icon"></span>
                  Cerrar Sesion
                </a>
              </div>
            </li>
            <!-- End Account Login -->
          </ul>
        </div>
      </div>
      <!-- End Topbar -->

      <div class="container" id="logoAndNav">
        <!-- Nav -->
        <nav class="navbar navbar-expand-md u-header__navbar u-header__navbar--no-space">
          <!-- Logo -->
          <a class="navbar-brand u-header__navbar-brand u-header__navbar-brand-center" href="/">
            <span class="u-header__navbar-brand-text">
              <img src="@/assets/logo.png" style="width: 125px">
            </span>
          </a>
          <!-- End Logo -->

          <!-- Responsive Toggle Button -->
          <button type="button" class="navbar-toggler btn u-hamburger"
            aria-label="Toggle navigation"
            aria-expanded="false"
            aria-controls="navBarOnepagNavWithDropdown"
            data-toggle="collapse"
            data-target="#navBarOnepagNavWithDropdown">
            <span id="hamburgerTriggerOnepagNavWithDropdown" class="u-hamburger__box">
              <span class="u-hamburger__inner"></span>
            </span>
          </button>
          <!-- End Responsive Toggle Button -->

          <!-- Navigation -->
          <div id="navBarOnepagNavWithDropdown" class="collapse navbar-collapse u-header__navbar-collapse">
            <ul class="navbar-nav align-items-md-center u-header__navbar-nav">
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
                <router-link class="nav-link u-header__nav-link" to="/endowment">Dotacion Empresarial</router-link>
              </li>

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
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'Header',
  computed:{
    ...mapState(["UserAuth"]),
    cartLength(){
      if(this.UserAuth.cart){
        return this.UserAuth.cart.length
      }else{
        return 0
      }
    }
  },
  methods:{
    ...mapActions(["signOut"]),
    signOutUser(){
      this.signOut();
    }
  }
}
</script>