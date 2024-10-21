export const getCredencials = () => {
  const credencialString = localStorage.getItem('credenciais') // Substitua pela chave correta
  return JSON.parse(credencialString)
}

export const setCredencials = value => {
  localStorage.setItem('credenciais', JSON.stringify(value))
}

export const clearCredencials = () => {
  localStorage.removeItem('credenciais')
}
