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

// const app = createApp(App);
// app.component("Product",Product);
// app.use(vuetify);
// app.mount('#app');
createApp(App).component("Product",Product).use(vuetify).mount('#app')