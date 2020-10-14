import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TagContentPage from '../views/TagContentPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/content',
    name: 'tag-content-page',
    component: TagContentPage,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
