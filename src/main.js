import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import "@/assets/font/font.css"
import App from './App.vue'
import "@/assets/theme.css"
const app = createApp(App)

// initialize theme (default light)
const saved = localStorage.getItem('site-theme')
const theme = saved || 'light'
document.documentElement.setAttribute('data-theme', theme)

app.use(ElementPlus)
app.mount('#app')