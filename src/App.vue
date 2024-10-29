<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { getCredencials } from './shared/util'
import MenuSuperior from './components/menuSuperior/MenuSuperior.vue'
import MenuLateral from './components/menuLateral/MenuLateral.vue';

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
  <div class="container">
    <MenuLateral v-if="authStore.isLoggedIn"></MenuLateral>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
</style>
