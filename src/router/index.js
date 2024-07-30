import { createRouter, createWebHistory } from 'vue-router'
import ApplicationList from '../components/ApplicationList.vue'
import TranslationKeys from '../components/TranslationKeys.vue'

const routes = [
  {
    path: '/',
    name: 'ApplicationList',
    component: ApplicationList
  },
  {
    path: '/translations/:appId',
    name: 'TranslationKeys',
    component: TranslationKeys
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
