import './lib/lychee.scss'
import './index.scss'
import { createApp } from 'vue'
import App from './App.vue'
// @ts-ignore
import {router} from './router'
import 'github-markdown-css'
const app = createApp(App)
app.use(router)
app.mount('#app')
