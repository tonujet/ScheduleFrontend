export default function (instance) {
    return {
        getEntities(name, limit) {
            return instance.get(`${name}?limit=${limit}`)
        },
        getEntity(name, id) {
            return instance.get(`${name}/${id}`)
        },
        deleteEntity(name, id) {
            return instance.delete(`${name}/delete/${id}`)
        },
        updateEntity(name, payload) {
            return instance.put(`${name}/update`, payload)
        },
        createEntity(name,payload) {
            return instance.post(`${name}/create`, payload)
        },
        getOptions() {
            return instance.get(`options`)
        },
    }
}