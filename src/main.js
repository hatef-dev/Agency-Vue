import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TheHeader from '@/components/TheHeader.vue'
import TheButton from './components/Btn/TheButton.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('TheHeader', TheHeader)
app.component('TheButton', TheButton)

app.mount('#app')
