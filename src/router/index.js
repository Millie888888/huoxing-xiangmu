import { createRouter, createWebHashHistory } from 'vue-router'
import login from '../views/login'
import user from './modules/user'
import leave from './modules/leave'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../layout'),
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        name: 'welcome',
        component: () => import('../views/welcome')
      },
      {
        path: '404',
        name: '404',
        component: () => import('../views/404')
      }
    ]
  },
  user,
  leave
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
