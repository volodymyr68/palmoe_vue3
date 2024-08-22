import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import globalMixin from "@/mixins/globalMixin.js";

const app = createApp(App)
    .use(router)
app.mixin(globalMixin)
app.mount('#app')
