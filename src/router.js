import Vue from 'vue'
import Router from 'vue-router'

//views
import Shop from '@/views/Shop.vue'
import Categories from '@/views/Categories.vue'
import Login from '@/views/Login.vue'
import Dashboard from '@/views/Dashboard.vue'
import CartShopping from '@/views/CartShopping.vue'
import Checkout from '@/views/Checkout.vue'
import Epayco from '@/views/Epayco.vue'
import Invoice from '@/views/Invoice.vue'

//components
import Home from '@/components/Home.vue'
import SignIn from '@/components/Sign/In.vue'
import ProductDetail from '@/components/Categories/Detail/Product.vue'
import Products from '@/components/Admin/Products/Index.vue'
import AdminProducts from '@/components/Admin/Products/List.vue'
import AdminMain from '@/components/Admin/Main.vue'
import AdminFormProduct from '@/components/Admin/Products/Form.vue'
import Users from '@/components/Admin/Users.vue'
import Orders from '@/components/Admin/Orders.vue'
import Account from '@/components/Account.vue'


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
        },
        {
          path: '/order/:status',
          name: 'epayco',
          component: Epayco,
        },
      ]
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout,
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
      path: '/invoice/:id/:num',
      name: 'invoice',
      component: Invoice,
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
          path: 'users',
          name: 'users',
          component: Users,
        },
        {
          path: 'orders',
          name: 'orders',
          component: Orders,
        },
        {
          path: 'products',
          name: 'adminProductsIndex',
          component: Products,
          children: [
            {
              path: '',
              name: 'adminProducts',
              component: AdminProducts,
            },
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