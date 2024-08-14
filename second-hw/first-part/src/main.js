import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "vuetify/styles"
import {createVuetify}  from "vuetify";
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import Product from "@/components/Product.vue";


const vuetify = createVuetify({
    components,
    directives,
});

// createApp(App).use(vuetify).mount('#app')
const app = createApp(App);
app.component('Product');
app.use(vuetify);
app.mount('#app');