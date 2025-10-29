import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import './styles/index.css'
import './styles/variables.css'

const app = createApp(App)

// Setup Pinia with persistence - same as admin panel
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.mount('#app')
