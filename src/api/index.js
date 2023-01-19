import instance from "@/api/instance";
import entityModule from "@/api/entity";
import groupModule from '@/api/group';
import scheduleModule from "@/api/schedule";
import timeModule from "@/api/time";
import newsModule from "@/api/news";

export default {
    entity: entityModule(instance),
    scheduleDays: scheduleModule(instance),
    groups: groupModule(instance),
    time:timeModule(instance),
    news: newsModule(instance)
}