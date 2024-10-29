import axios from 'axios'

export class LoginService {
  private url: string
  private credencial: string

  constructor(url: string, credencial: string) {
    this.url = url
    this.credencial = credencial
  }

  async verificarStatusApi() {
    const config = {
      method: 'get',
      url: 'http://' + this.url + ':3000/api/check/health', // Usar a URL passada ou a padrão
      headers: {
        credencial: this.credencial, // Usar a credencial passada ou a padrão
        'Content-Type': 'application/json',
      },
    }

    try {
      const response = await axios.request(config)
      if (response.status === 200) {
        // Fluxo segue adiante
        return response.data // Retorne os dados se necessário
      } else {
        // Exibe mensagem de erro
        throw new Error(response.statusText)
      }
    } catch (error) {
      // Exibe mensagem de erro
      throw new Error(error)
    }
  }
}
