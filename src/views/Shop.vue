<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
    <Sidebar></Sidebar>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Shop',
  components:{
    Header,
    Footer,
    Sidebar,
  }
  
}
</script>