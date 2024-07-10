import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import { OhVueIcon,addIcons } from 'oh-vue-icons'
import "bootstrap"
import { BiFacebook } from "oh-vue-icons/icons";
import { BiWhatsapp } from "oh-vue-icons/icons";
import { BiInstagram } from "oh-vue-icons/icons";
import { BiYoutube } from "oh-vue-icons/icons";


addIcons(BiFacebook,BiWhatsapp,BiInstagram,BiYoutube);




const app = createApp(App)
app.component("v-icon",OhVueIcon)
app.use(router).mount('#app')
