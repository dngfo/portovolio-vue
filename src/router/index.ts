import { createMemoryHistory, createRouter } from "vue-router";
import projectview from "../view/ProjectView.vue";
import HomeViewVue from "@/view/HomeView.vue";
import AboutViewVue from "@/view/AboutView.vue";

let routes = [
    {
        path: "/project",
        name: "Project",
        component: projectview
    },
    {
        path : '/:catchAll(.*)',
        redirect : '/'
    },
    {
        path: "/",
        name: "Home",
        component: HomeViewVue
    },
    {
        path: "/about",
        name: "About",
        component: AboutViewVue
    },
]

const router = createRouter({
    history: createMemoryHistory(), routes
})

export default router