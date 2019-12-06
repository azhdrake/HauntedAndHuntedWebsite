import Router from "vue-router"

import ComicPage from "@/components/ComicPage"
import About from "@/components/About"

export default new Router({
  routes: [
    {
      path: "/",
      component: ComicPage
    },
    {
      path: "/about",
      component: About
    }
  ]
})