import Router from "vue-router" // It's the router page baby. It links paths to vue components.

import ComicPage from "@/components/ComicPage"
import About from "@/components/About"
import Cast from "@/components/Cast"
import Links from "@/components/Links"
import Search from "@/components/Search"
import Archive from "@/components/Archive"

export default new Router({
//  mode: 'history',
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
    },
  ],
  scrollBehavior(to, from, savedPosition) { // When you click a link this makes the page start at the scroll point that is the top of the content, rather then the same level of scrolled down that you were at when you clicked the link. 
    // I decided to make it start below the banner for ease of comic reading.
    return { x: 0, y: 250 }
  }
})