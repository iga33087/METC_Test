import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'element-plus/dist/index.css'
import './assets/css/index.scss'

const app = createApp(App)
app.use(createPinia()).use(ElementPlus).use(router).mount('#app')
