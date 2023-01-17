import {createRouter, createWebHistory} from "vue-router";
import SchedulePage from "@/components/Schedule/SchedulePage.vue";


const routes = [
    {
        path:"/schedule",
        component: SchedulePage,
        alias: ["", "/"],
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)
export default router