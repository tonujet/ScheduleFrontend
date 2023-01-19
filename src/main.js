import {createApp} from 'vue'
import App from './App.vue'
import UI from "@/components/UI";
import router from "@/router/router";
import icons from "@/components/icons";
import load from "@/plugins/load";
import api from "@/plugins/api";
import validation from "@/plugins/validation";
import store from "@/store";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import VueSelect from "vue-select"

const app = createApp(App)

icons.forEach(icon => {
    library.add(icon)
})

UI.forEach(component => {
    app.mount(component.name, component)
})


app
    .use(store)
    .use(api)
    .use(load)
    .use(validation)
    .use(router)
    .component("fa", FontAwesomeIcon)
    .component("v-select", VueSelect)
    .mount('#app')
