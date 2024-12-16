<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import { LoginService } from '@/services/login.service'
import { getCredencials } from '@/shared/util'
import { ref, onMounted } from 'vue'

ChartJS.register(ArcElement, Tooltip, Legend)

// Configuração do gráfico
const data = {
  labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
  datasets: [
    {
      backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
      data: [40, 20, 80, 10]
    }
  ]
}

const options = {
  responsive: true,
  maintainAspectRatio: false
}

// Configuração do status do servidor
const pegaCredenciais = ref(null)
const status = ref(false)

const dataLocalStorage = getCredencials()

onMounted(() => {
  pegaCredenciais.value = getCredencials()
  checkStatusLoops()
})

function checkStatus() {
  const loginService = new LoginService(dataLocalStorage.link, dataLocalStorage.senha)
  loginService.verificarStatusApi().then(() => {
    status.value = true
  }).catch(() => {
    status.value = false
  })
}

function checkStatusLoops() {
  checkStatus()
  setInterval(() => {
    checkStatus()
  }, 60000)
}
</script>

<template>
  <div id="container-dashboard">
    <h2>
      Status do Servidor:
      <v-chip v-if="!status" color="red" variant="flat">
        OFF
      </v-chip>

      <v-chip v-if="status" color="green" variant="flat">
        ON
      </v-chip>
    </h2>
  </div>
  <div class="container-grafico">
    <Doughnut :data="data" :options="options" />
  </div>

</template>

<style scoped>
h2 {
  text-align: right;
}

#container-dashboard {
  width: 100%;
  text-align: right;
}

.container-grafico {
  width: 650px;
  /* padding-left: 350px */
}
</style>
