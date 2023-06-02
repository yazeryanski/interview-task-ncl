import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'
import AdvertsView from '../views/AdvertsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'task',
      component: TaskView,
    },
    {
      path: '/adverts',
      name: 'adverts',
      component: AdvertsView,
    },    
  ]
})

export default router
