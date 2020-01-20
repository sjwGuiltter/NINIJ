import Vue from 'vue'
import App from './App.vue'
import {router} from "./route/index"
// console.log(router)
import VueRouter from "vue-router"
const root = document.createElement('div')
document.body.appendChild(root)
Vue.use(VueRouter)
new Vue({
  router,
  render: h => h(App),
}).$mount(root)