import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

const constRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
      }
    ]
  }
  // {
  //   path: '/',
  //   component: () => import('@/views/dashboard/index'),
  //   name: 'Dashboard'
  // }
]

export const asyncRoutes = []


const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: constRoutes // short for `routes: routes`
})

export default router
