import { createRouter, createWebHistory } from "vue-router";
import FirstRoute from "@/views/FirstRoute.vue";
import Home from "@/views/Home.vue";
import FourthRoute from "@/views/FourthRoute.vue";
import ChildFourthRoute from "@/views/ChildFourthRoute.vue";
import SixRouter from "@/views/SixRouter.vue";
import SevenRouter from "@/views/SevenRouter.vue";
import NotFound from "@/views/NotFound.vue";
import EightRoute from "@/views/EightRoute.vue";
import PublicView from "@/views/nine-task/PublicView.vue";
import AuthUserView from "@/views/nine-task/AuthUserView.vue";
import AdminView from "@/views/nine-task/AdminView.vue";
import { auth, isAdmin } from "@/auth/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home,
      alias: "/",
    },
    {
      name: "firstRoute",
      path: "/first-route",
      component: FirstRoute,
    },
    {
      name: "secondRoute",
      path: "/second-route",
      component: () => import("@/views/SecondRoute.vue"),
    },
    {
      name: "thirdRoute",
      path: "/third-route/:id",
      component: () => import("@/views/SecondRoute.vue"),
    },
    {
      name: "fourthRoute",
      path: "/fourth-route",
      component: FourthRoute,
      children: [
        {
          name: "childFourthRoute",
          path: "Child",
          component: ChildFourthRoute,
        },
      ],
    },
    {
      name: "SixRouter",
      path: "/six-route",
      component: SixRouter,
      beforeEnter(to, from, next) {
        console.log("Before entering Six Router", from, to);
        const pass = localStorage.getItem("pass");
        if (pass && pass === "123") {
          next();
        } else {
          alert("Pass is incorrect");
          next("/");
        }
      },
    },
    {
      name: "SevenRouter",
      path: "/seven-route",
      component: SevenRouter,
      props: { data: "NEW DATA PROPS" },
    },
    {
      name: "EightRouter",
      path: "/eight-route",
      component: EightRoute,
      meta: { metaData: "This is your meta data" },
    },
    {
      name: "PublicView",
      path: "/public",
      component: PublicView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      name: "AuthView",
      path: "/auth",
      component: AuthUserView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      name: "AdminView",
      path: "/admin",
      component: AdminView,
      meta: {
        requiresAuth: true,
        role: "admin",
      },
    },
    {
      name: "NotFound",
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.meta.requiresAuth;
  const role = to.meta.role;
  const currentUser = JSON.parse(localStorage.getItem("user"));

  if (requiresAuth) {
    if (role === "admin") {
      if (auth(currentUser) && isAdmin(currentUser)) {
        next();
      } else {
        next("/notFound");
      }
    } else {
      if (auth(currentUser)) {
        next();
      } else {
        next("/notFound");
      }
    }
  }
  next();
});

export default router;
