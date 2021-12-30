import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import Han from './components/Han.vue'
const history = createWebHashHistory()
const router = createRouter({
  history,
  routes:[
    {
      path:'/',
      component:Han
    }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
