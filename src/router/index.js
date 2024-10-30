import { createRouter, createWebHistory } from 'vue-router'
import TelaDashboard from '@/components/dashboard/TelaDashboard.vue'
import TelaLogin from '@/components/telaLogin/TelaLogin.vue'
import RegistroDeServicos from '@/components/registroDeServicos/RegistroDeServicos.vue'
import GestaoDeServicos from '@/components/gestaoDeServicos/GestaoDeServicos.vue'
import OperacoesTecnicas from '@/components/operacoesTecnicas/OperacoesTecnicas.vue'

const routes = [
  {
    path: '/',
    name: 'telaLogin',
    component: TelaLogin,
  },
  {
    path: '/dashboard',
    name: 'telaDashboard',
    component: TelaDashboard,
  },
  {
    path: '/registro',
    name: 'registroDeServicos',
    component: RegistroDeServicos,
  },
  {
    path: '/gestao',
    name: 'gestaoDeServicos',
    component: GestaoDeServicos,
  },
  {
    path: '/operacoes',
    name: 'operacoesTecnicas',
    component: OperacoesTecnicas,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard de navegação para verificar as credenciais no localStorage
router.beforeEach((to, _, next) => {
  const hasCredentiais = !!localStorage.getItem('credenciais') // Verifica se há credenciais no localStorage

  if (to.name === 'telaLogin' && hasCredentiais) {
    // Se o usuário está tentando acessar a TelaLogin e possui credenciais, redireciona para TelaDashboard
    next({ name: 'telaDashboard' })
  } else {
    // Caso contrário, permite a navegação normalmente
    next()
  }
})

export default router
