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
    path: '/content/:tag',
    name: 'tag-content-page',
    component: TagContentPage,
    props: true,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
