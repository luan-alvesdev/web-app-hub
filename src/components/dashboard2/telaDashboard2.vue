<script setup>
import router from '@/router'
import { setCredencials } from '@/shared/util'
import { ref } from 'vue'

// Definindo os dados utilizando ref
const formDataLink = ref('')
const formDataSenha = ref('')

const submittedData = ref([])

const formDataLinkRules = [
  value => !!value || 'Preencha o campo com um link válido.',
]

const formDataSenhaRules = [
  value => value.length >= 6 || 'A senha deve ter pelo menos 6 caracteres.',
]

const formRef = ref(null)

const submitForm = () => {
  const formData = {
    link: formDataLink.value,
    senha: formDataSenha.value,
  }

  console.log('Dados do formulário:', formData)

  // Adiciona uma cópia dos dados do formulário ao array de objetos
  submittedData.value.push(formData)
  setCredencials(formData)
  router.push('/dashboards')
}

const handleSubmit = async () => {
  const validacao = await formRef.value?.validate()
  console.log('Resultado da validação:', validacao.valid)
  if (validacao.valid) {
    submitForm()
  }
}
</script>

<template>
  <v-form
    ref="formRef"
    @submit.prevent="handleSubmit"
    class="d-flex flex-column fill-height justify-center align-center text-white text-center"
    theme="dark"
    with-background
  >
    <v-col cols="12" sm="3">
      <v-text-field
        :model-value="formDataLink"
        v-model="formDataLink"
        :rules="formDataLinkRules"
        label="Insira seu link aqui"
        name="link"
        required
      ></v-text-field>
      <v-text-field
        :model-value="formDataSenha"
        v-model="formDataSenha"
        :rules="formDataSenhaRules"
        :type="'password'"
        label="Digite sua senha"
        name="senha"
        required
        counter
      ></v-text-field>
      <v-btn type="submit" variant="text" block> Gravar </v-btn>
    </v-col>
  </v-form>
</template>

<style scoped></style>
