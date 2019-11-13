import Vue from 'vue'
import Router from 'vue-router'

//views
import Shop from '@/views/Shop.vue'
import Categories from '@/views/Categories.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import CartShopping from '@/views/CartShopping.vue'

//components
import Home from '@/components/Home.vue'
import SignIn from '@/components/Sign/In.vue'
import ProductDetail from '@/components/Categories/Detail/Product.vue'
import AdminProducts from '@/components/Admin/Products.vue'
import AdminMain from '@/components/Admin/Main.vue'
import AdminFormProduct from '@/components/Admin/Form/Product.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Shop,
      children:[
        {
          path: '',
          name: 'home',
          component: Home,
        },
        {
          path: 'categories/:name/:type',
          name: 'categories',
          component: Categories
        },
        {
          path: 'product/:id',
          name: 'productDetail',
          component: ProductDetail,
        },
        {
          path: 'cart',
          name: 'cartShopping',
          component: CartShopping,
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      children:[
        {
          path:'',
          name:'signIn',
          component: SignIn,
        }
      ],
    },
    {
      path: '/dashboard',
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path:'',
          name:'dashboard',
          component: AdminMain,
        },
        {
          path: 'products',
          name: 'adminProducts',
          component: AdminProducts,
          children: [
            {
              path: 'new',
              name: 'adminNewProduct',
              component: AdminFormProduct,
            },
            {
              path: 'edit/:id',
              name: 'adminEditProduct',
              component: AdminFormProduct,
            }
          ]
        },
      ],
    }
  ]
})

export default router;