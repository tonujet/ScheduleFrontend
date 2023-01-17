export default function (instance) {
    return {
        getSchedule(id){
            return instance.get(`/schedules/full/${id}`)
        }
    }
}