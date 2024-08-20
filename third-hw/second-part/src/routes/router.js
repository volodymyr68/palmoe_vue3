import {createRouter, createWebHistory} from "vue-router";
import AuthView from "@/views/AuthView.vue";
import NotFound from "@/views/NotFound.vue";
import {useUserStore} from "@/stores/UserStore.js";
import App from "@/App.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            name:"App",
            path:"/",
            component:App,
        },
        {
            name:"AuthPage",
            path:"/auth",
            component:AuthView,
            meta:{
                requiresAuth: true,
            }
        },
        {
            name: "NotFound",
            path: "/:notFound(.*)",
            component: import("@/views/NotFound.vue"),
            props: (route) => {
                const userStore = useUserStore();
                return {
                    name: userStore.fullName,
                    access: userStore.access
                };
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.meta.requiresAuth;
    const userStore = useUserStore();

    if (requiresAuth && !userStore.access) {
        next("/notFound");
    } else {
        next();
    }
});

export default router;