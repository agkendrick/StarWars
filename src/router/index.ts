import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      redirect: '/people'
    },
    {
      path: '/people',
      name: 'people',
      component: () => import('../views/PeopleView.vue')
    },
    {
      path: '/people/:id',
      name: 'person',
      component: () => import('../views/PersonView.vue')
    },
    {
      path: '/vehicles/:id',
      name: 'vehicles',
      component: () => import('../views/VehicleView.vue')
    },
    {
      path: '/starships/:id',
      name: 'starships',
      component: () => import('../views/StarshipView.vue')
    }
  ]
})

export default router
