import Vue from 'vue'
import VueScrollTo from 'vue-scrollto'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import MainCSS from './assets/MainCSS.css'
import VueRouter from 'vue-router'
import { routes } from './routes'
import axios from 'axios'
import store from './State/store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueAnalytics from 'vue-analytics'
import VueCookies from 'vue-cookies';

const env = process.env.NODE_ENV

Vue.use(VueAnalytics, {
  id: 'UA-131185774-1',
  VueRouter,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: env === 'development',
    sendHitTask: env === 'production' || 'staging'
  }
})

Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(BootstrapVue)
Vue.use(MainCSS)
Vue.use(VueCookies);

axios.defaults.baseURL = process.env.VUE_APP_ROOT_API

const router = new VueRouter({
  mode: 'history',
  baseURL: process.env.BASE_URL, // SET BASE_URL HERE
  routes
})

const isProd = process.env.NODE_ENV !== 'development'
const shouldSW = 'serviceWorker' in navigator && isProd
if (shouldSW) {
  navigator.serviceWorker.register('/service-worker.js').then(() => {
    console.log("Service Worker Registered!")
  })
}

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
