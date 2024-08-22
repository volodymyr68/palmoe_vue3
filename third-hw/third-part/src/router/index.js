import {createRouter, createWebHistory} from "vue-router";
import FifthTask from "@/components/FifthTask.vue";
import Main from "@/components/Main.vue";

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            name: "App",
            path: "/",
            component: Main,
        },
        {
            name:"FifthTask",
            path: "/fifth-task",
            component: FifthTask,
        }
    ]
});

export default router;