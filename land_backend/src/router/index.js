import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views//HomeView/homeView.vue'
import Layout from '../components/Layout.vue'
import LoginInfo from '../views/loginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "layout",
      component: Layout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/admin',
          name: 'admin',
          component: () =>import("../views/LandSystemView/admin.vue")
        },
        {
          path: '/type',
          name: 'type',
          component: () =>import("../views/LandSystemView/type.vue")
        },
        {
          path: '/land',
          name: 'land',
          component: () =>import("../views/LandSystemView/land.vue")
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginInfo',
      component:LoginInfo
    }
  ]
})

export default router
