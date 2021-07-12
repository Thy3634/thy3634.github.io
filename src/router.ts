import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        redirect: "/home",
    },
    {
        path: "/home",
        component: () => import("#/home/Home.vue")
    },
    {
        path: "/about",
        component: () => import("#/about/About.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router