import Vue from 'vue'
import VueRouter from 'vue-router'
import DataBinding from '../views/DataBinding.vue'
import Abilities from '../views/Abilities.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataBinding
  },
  {
    path: '/abilities',
    name: 'Abilities',
    component: Abilities
   
  }
]

const router = new VueRouter({
  routes
})

export default router
