import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import router from './router'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App).use(router).use(vuetify)

const pinia = createPinia() // Crie a instância do Pinia
app.use(pinia)

app.mount('#app')
