import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Search from '../views/Search.vue'
import ViewLoading from '../views/ViewLoading.vue'
import Movie from '../views/DetailMovie.vue'
import Eror404 from '../views/Error404.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Anime Uziel'}
  },
  {
    path: '/movies',
    name: 'Movies',  
    component: Movies,
    meta: { title: 'Movies'}
  },
  {
    path: '/search/:searchTitle',
    name: 'Search',
    component: Search,
    meta: { title: 'Search'}
  },
  {
    path: '/movie/:id',
    name: 'Movie',
    component: Movie,
    meta: { title: 'Movie'}
  },
  {
    path: '/searching/:title',
    name: 'Searching',
    component: ViewLoading,
    meta: { title: 'Searching'}    
  },
  {
    path: '*',    
    component: Eror404,
    meta: { title: 'Page Not Found'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach((to, from) => {
  document.title = to.meta.title;
})

export default router
