import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Second from '../views/Second.vue'
import View from '../views/View.vue'

const routes =
[
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/content',
    name: 'View',
    component: View
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
