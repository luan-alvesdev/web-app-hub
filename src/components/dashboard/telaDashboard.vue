<script setup>
import { getCredencials } from '@/shared/util'
import { ref, onMounted } from 'vue'

const pegaCredenciais = ref(null)

onMounted(() => {
  pegaCredenciais.value = getCredencials()
})
</script>

<template>
  <h1>teste</h1>
</template>

<style scoped>
h2 {
  padding: 2.5rem 6rem;
}
</style>
