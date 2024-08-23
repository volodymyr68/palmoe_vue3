import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index.js'
import globalMixin from "@/mixins/globalMixin.js";

const app = createApp(App)
    .use(router)
app.mixin(globalMixin)
app.directive("draggable", {
    mounted(el) {
        el.style.position = 'absolute';
        el.style.cursor = 'move';

        let offsetX, offsetY;

        const onMouseDown = (event) => {
            offsetX = event.clientX - el.getBoundingClientRect().left;
            offsetY = event.clientY - el.getBoundingClientRect().top;

            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        };

        const onMouseMove = (event) => {
            el.style.left = `${event.clientX - offsetX}px`;
            el.style.top = `${event.clientY - offsetY}px`;
        };

        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        el.addEventListener('mousedown', onMouseDown);
    },
    unmounted(el) {
        el.removeEventListener('mousedown', onMouseDown);
    }
});
app.mount('#app')
