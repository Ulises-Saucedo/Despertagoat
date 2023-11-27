import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createI18n } from 'vue-i18n'
import { installation } from './lang/installation.js'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { OhVueIcon, addIcons } from "oh-vue-icons"
import { MdDarkmodeRound, MdLightmodeRound } from "oh-vue-icons/icons"
addIcons(MdDarkmodeRound, MdLightmodeRound)

const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: installation
})

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(i18n)
app.use(pinia)
app.component("v-icon", OhVueIcon)
app.mount('#app')
