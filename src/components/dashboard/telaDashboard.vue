<script setup>
import { getCredencials } from '@/shared/util'
import { ref, onMounted } from 'vue'

const pegaCredenciais = ref(null)

onMounted(() => {
  console.log('Página carregada!')
  pegaCredenciais.value = getCredencials()
})
</script>

<template>
  <h1>{{ pegaCredenciais?.link }} {{ pegaCredenciais?.senha }}</h1>
</template>

<style scoped></style>
