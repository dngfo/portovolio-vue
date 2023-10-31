import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import Codeblock from "vue3-code-block";
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faEnvelope, faMoon, faSun, faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faUserSecret,faFacebook,faInstagram,faGithub,faTwitter, faMoon, faSun, faEnvelope)

createApp(App).use(router).component("fontawesome",FontAwesomeIcon).component("codeblock", Codeblock).mount('#app')
