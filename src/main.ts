import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import '@/styles/tailwind.css'
import { VueQueryPlugin } from '@tanstack/vue-query'
import './plugins'
const app = createApp(App)

app.use(router)
app.use(Antd)
app.use(VueQueryPlugin)

app.mount('#app')
