const { default: router } = require("@/router")
const { reactive, ref } = require("vue")

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
    // getLastSubmitted()
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
  