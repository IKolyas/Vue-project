import Vue from 'vue';
import VueRouter from 'vue-router';
import Navigation from "../components/Navigation";

const Index = () => import('../views/Index.vue');
const Products = () => import('../views/Products.vue');
const SinglePage = () => import('../views/SinglePage.vue');
const CheckOut = () => import('../views/CheckOut.vue');
const ShoppingCart = () => import('../views/ShoppingCart.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    props: true,
  },
  {
    path: '/products/:category?/:subcategory?',
    name: 'Products',
    component: Products,
    props: true,
  },
  {
    path: '/single-page/:id?',
    name: 'SinglePage',
    component: SinglePage,
    props: true,
  },
  {
    path: '/checkout',
    name: 'CheckOut',
    component: CheckOut,
    props: true,
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart,
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
})

export default router
