<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { getCredencials } from './shared/util'
import MenuSuperior from './components/menuSuperior/menuSuperior.vue'

const authStore = useAuthStore()

onMounted(() => {
  const pegarCredencial = getCredencials()
  if (pegarCredencial) {
    authStore.login()
  }
})
</script>

<template>
  <MenuSuperior v-if="authStore.isLoggedIn"></MenuSuperior>
  <!-- MenuLateral aqui  -->
  <router-view></router-view>
</template>

<style scoped></style>
