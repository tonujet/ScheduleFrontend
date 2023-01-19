export default function (instance) {
    return {
        getGroups(){
            return instance.get(`/groups`)
        }
    }
}