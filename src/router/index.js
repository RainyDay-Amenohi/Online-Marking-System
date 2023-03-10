import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/home', name: 'home', component: () => import('../views/Home.vue') },
  { path: '/questions/single-choice', name: 'singleChoice', component: () => import('../views/SingleChoice.vue') },
  { path: '/questions/manage', name: 'questionsManage', component: () => import('../views/QuestionsManage.vue') },
  { path: '/login', component: () => import('../views/Login.vue') },
  { path: '/:pathMatch(.*)', component: () => import('../views/NotFound.vue') }
]


const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router