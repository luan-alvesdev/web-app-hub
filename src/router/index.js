import { createRouter, createWebHistory } from 'vue-router'
import telaDashboard from '../components/dashboard/telaDashboard.vue'
import TelaDashboard2 from '@/components/dashboard2/telaDashboard2.vue'

const routes = [
  {
    path: '/',
    name: '/telaDashboard2',
    component: TelaDashboard2,
  },
  {
    path: '/dashboards',
    name: 'telaDashboard',
    component: telaDashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
