/**
 * Router is used to structure website pages
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views'
import About from '../views/about'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Index
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
