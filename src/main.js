import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import App from './App.vue'
import './styles/index.css'
import './styles/variables.css'

const app = createApp(App)

const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(i18n)
app.mount('#app')
