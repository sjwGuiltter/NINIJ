import {routes} from "./route"
import VueRouter from "vue-router"
import Vue from 'vue'
const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  Vue.use(VueRouter)
  export {router}