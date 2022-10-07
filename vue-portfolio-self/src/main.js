import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// == import main.css from main.scss
import './assets/css/main.css'

const app = createApp(App)

app.use(router)

app.mount('#app')

// == import bootstrap.bundle.min.js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'