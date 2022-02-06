import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Bio from '../views/Bio.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Bio',
    component: Bio
  },
  {
    path: '/work',
    name: 'Work',
    component: () => import('../views/Work.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
