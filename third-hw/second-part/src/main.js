import './assets/main.css'

import { createApp } from 'vue'
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from 'pinia'
import router from "@/routes/router.js";

import App from './App.vue'

const vuetify = createVuetify({
    components,
    directives,
});

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
