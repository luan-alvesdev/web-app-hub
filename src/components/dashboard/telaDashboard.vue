<script setup>
import { LoginService } from '@/services/login.service';
import { getCredencials } from '@/shared/util'
import { ref, onMounted } from 'vue'

const pegaCredenciais = ref(null)

const dataLocalStorage = getCredencials()

const status = ref(false);

onMounted(() => {
  pegaCredenciais.value = getCredencials()
  checkSatusLoops()
})

function checkStatus() {
  const loginService = new LoginService(dataLocalStorage.link, dataLocalStorage.senha)
  loginService.verificarStatusApi().then(() => {
    status.value = true
  }).catch(() => {
    status.value = false
  })
}

function checkSatusLoops() {
  checkStatus()
  setInterval(() => {
    checkStatus()
  }, 60000);
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
</template>

<style scoped>
h2 {
  text-align: right;
}

#container-dashboard {
  width: 100%;
  text-align: right;
}
</style>
