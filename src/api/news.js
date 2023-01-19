export default function (instance) {
    return {
        getNews(){
            return instance.get(`/news`)
        }
    }
}