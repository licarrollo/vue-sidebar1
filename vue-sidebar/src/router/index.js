import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: Dashboard,
    children:[
      {
        path: '/overview',
        component: () => import ('../views/Overview')
      },
      
      {
        path: '/orders',
        component: () => import ('../views/Orders')
      },
      {
        path: '/promotions',
        component: () => import ('../views/Promotions')
      },
      {
        path: '/inventory',
        component: () => import ('../views/Inventory')
      },
      {
        path: '/business',
        component: () => import ('../views/Business')
      },
      {
        path: '/support',
        component: () => import ('../views/Support')
      },
      {
        path: '/settings',
        component: () => import ('../views/Settings')
      },
      {
        path: '/logout',
        component: () => import ('../views/Logout')
      },

    ]

    }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
