<script setup>
import router from '@/router'
import { reactive, ref } from 'vue'

const formData = reactive({
  link: '',
  senha: '',
})

const submittedData = ref([])

const submitForm = () => {
  // Adiciona uma cópia dos dados do formulário ao array de objetos
  submittedData.value.push(JSON.parse(JSON.stringify(formData)))

  // Limpa o formulário após submissão
  formData.link = ''
  formData.senha = ''
  getLastSubmitted()
  router.push('/dashboards')
}

const getLastSubmitted = () => {
  if (submittedData.value.length > 0) {
    const lastEntry = submittedData.value[submittedData.value.length - 1]
    localStorage.setItem('lastSubmittedData', JSON.stringify(lastEntry))

    return lastEntry
  }
  return null
}
</script>

<template>
  <v-form
    @submit.prevent="submitForm"
    class="d-flex flex-column fill-height justify-center align-center text-white text-center"
    theme="dark"
    with-background
  >
    <v-col cols="12" sm="3">
      <v-text-field
        v-model="formData.link"
        label="Insira seu link aqui"
        name="link"
      ></v-text-field>
      <v-text-field
        v-model="formData.senha"
        :type="'password'"
        hint="At least 8 characters"
        label="Digite sua senha"
        name="senha"
        counter
      ></v-text-field>
      <v-btn type="submit" variant="text"> Gravar </v-btn>
    </v-col>
  </v-form>
</template>

<style scoped></style>
