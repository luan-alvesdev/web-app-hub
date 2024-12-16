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
  <div class="container-menu-superior">
    <MenuLateral v-if="authStore.isLoggedIn"></MenuLateral>
    <div class="container-rotas">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.container-menu-superior {
  width: 98vw;
}

.container-rotas {
  padding: 15px;
  padding-left: 250px;
}
</style>
