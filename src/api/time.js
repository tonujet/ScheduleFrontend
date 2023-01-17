export default function (instance) {
    return {
        getStartsTime(){
            return instance.get(`time/startsTime`)
        },
        getBreakTime(){
            return instance.get("time/breakTime")
        },
        getFullTime(){
            return instance.get(`time/fulltime`)
        },

    }
}