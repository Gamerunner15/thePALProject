import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Second from '../views/Second.vue'

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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
