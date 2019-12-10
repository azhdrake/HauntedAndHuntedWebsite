import Vue from 'vue'
import App from './App.vue'

//import VueRouter library + app routes
import VueRouter from "vue-router"
import router from "./router"

import CommentAPIService from "@/services/CommentServices"

Vue.prototype.$comment_api = CommentAPIService

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
