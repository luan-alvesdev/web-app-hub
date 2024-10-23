import { createRouter, createWebHistory } from 'vue-router'
import TelaDashboard from '@/components/dashboard/telaDashboard.vue'
import TelaLogin from '@/components/telaLogin/telaLogin.vue'

const routes = [
  {
    path: '/',
    name: 'telaLogin',
    component: TelaLogin,
  },
  {
    path: '/dashboards',
    name: 'telaDashboard',
    component: TelaDashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
