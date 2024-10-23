<script setup>
import { useRouter } from 'vue-router'
import { clearCredencials } from '@/shared/util'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()

const authStore = useAuthStore()

function sair() {
  clearCredencials()
  authStore.logout()
  router.push('/')
}
</script>

<template>
  <v-toolbar
    class="container"
    border
    density="compact"
    title="Web App Hub UI"
    theme="dark"
  >
    <v-btn
      class="d-flex flex-column justify-center text-white"
      variant="outlined"
      @click="sair"
    >
      Sair
    </v-btn>
  </v-toolbar>
</template>

<style scoped>
.container {
  padding: 0 3%;
}
</style>
