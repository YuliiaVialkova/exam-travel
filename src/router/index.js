import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageSearch from '../views/PageSearch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/search',
      name: 'search',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: PageSearch,
      props: (route) => ({
        country: route.query.country,
        city: route.query.city,
        tourists: route.query.tourists,
        check_in_date: route.query.check_in_date,
        check_out_date: route.query.check_out_date
      })
    }
  ]
})

export default router
