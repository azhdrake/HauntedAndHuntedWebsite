import Router from "vue-router"

import ComicPage from "@/components/ComicPage"
import About from "@/components/About"
import Cast from "@/components/Cast"
import Links from "@/components/Links"
import Search from "@/components/Search"
import Archive from "@/components/Archive"

export default new Router({
  routes: [
    {
      path: "/",
      component: ComicPage
    },
    {
      path: "/comic/:pageNumber",
      name: "comic",
      component: ComicPage
    },
    {
      path: "/about",
      component: About
    },
    {
      path: "/cast",
      component: Cast
    },
    {
      path: "/links",
      component: Links
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/archive",
      component: Archive
    }
  ]
})