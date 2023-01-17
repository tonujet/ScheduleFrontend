import {createRouter, createWebHistory} from "vue-router";
import SchedulePage from "@/components/Schedule/SchedulePage.vue";
import EntityPage from "@/components/Entity/EntityPage.vue";


const routes = [
    {
        path:"/schedule",
        component: SchedulePage,
        alias: ["", "/"],
    },
    {
        path:"/entities",
        component: EntityPage,
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)
export default router