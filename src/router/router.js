import {createRouter, createWebHistory} from "vue-router";
import SchedulePage from "@/components/Schedule/SchedulePage.vue";
import EntityListPage from "@/components/EntityList/EntityListPage.vue";
import NewsPage from "@/components/News/NewsPage.vue";


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