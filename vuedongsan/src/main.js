import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router/index.js'
import './main.css'
import store from './store.js'

const app = createApp(App)
app.use(store)
app.use(router)  // 라우터 사용
app.mount('#app')