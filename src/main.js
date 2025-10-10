import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import TheHeader from '@/components/TheHeader.vue'
import TheButton from './components/Btn/TheButton.vue'
import TransitionAnimation from '@/components/Ui/TransitionAnimation.vue'
import TagButton from '@/components/Btn/TagButton.vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.component('TheHeader', TheHeader)
app.component('TheButton', TheButton)
app.component('TransitionAnimation', TransitionAnimation)
app.component('TagButton', TagButton)

app.mount('#app')
