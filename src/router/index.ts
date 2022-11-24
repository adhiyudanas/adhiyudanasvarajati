import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Bio from '../views/Bio.vue'
import InitialLoading from '@/layouts/InitialLoading.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'InitialLoading',
    component: InitialLoading
  },
  {
    path: '/bio',
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
    component: () => import('../views/Contact.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
