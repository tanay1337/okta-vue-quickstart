import { createRouter, createWebHistory } from 'vue-router'
import { LoginCallback, navigationGuard } from '@okta/okta-vue'
import Home from '../views/Home.vue'
import Profile from '../components/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login/callback',
    component: LoginCallback
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(navigationGuard)

export default router
