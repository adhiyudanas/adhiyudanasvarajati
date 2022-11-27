import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Bio from '../views/Bio.vue'
import InitialLoading from '@/layouts/InitialLoading.vue';
import Work from '@/views/Work.vue';
import Contact from '@/views/Contact.vue';

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
    component: Work
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
