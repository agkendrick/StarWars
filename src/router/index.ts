import { createRouter, createWebHistory } from 'vue-router'
import PeopleView from '../views/PeopleView.vue'
import PersonView from '../views/PersonView.vue'
import VehicleView from '../views/VehicleView.vue'
import StarshipView from '../views/StarshipView.vue'

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
      component: PeopleView
    },
    {
      path: '/people/:id',
      name: 'person',
      component: PersonView
    },
    {
      path: '/vehicles/:id',
      name: 'vehicles',
      component: VehicleView
    },
    {
      path: '/starships/:id',
      name: 'starships',
      component: StarshipView
    }
  ]
})

export default router
