import {createRouter, createWebHistory} from "vue-router";
import SchedulePage from "@/components/Schedule/SchedulePage.vue";
import NewsPage from "@/components/News/NewsPage.vue";
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
    {
        path: "/news",
        component: NewsPage,
    }
]

const router = createRouter(
    {
        routes,
        history: createWebHistory()
    }
)
export default router