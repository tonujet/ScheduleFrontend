import instance from "@/api/instance";
import entityModule from "@/api/entity";
import scheduleModule from "@/api/schedule";
import timeModule from "@/api/time";
import newsModule from "@/api/news";

export default {
    subject: entityModule(instance),
    scheduleDays: scheduleModule(instance),
    time:timeModule(instance),
    news: newsModule(instance)
}