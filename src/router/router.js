import {createRouter, createWebHistory} from "vue-router";
import SchedulePage from "@/components/Schedule/SchedulePage.vue";
import EntityListPage from "@/components/EntityList/EntityListPage.vue";


const routes = [
    {
        path:"/schedule",
        component: SchedulePage,
        alias: ["", "/"],
    },
    {
        path:"/entities",
        component: EntityListPage,
    },
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)
export default router