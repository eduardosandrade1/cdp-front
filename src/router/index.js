import { createRouter, createWebHistory } from "vue-router";
import LoginPage from '../components/Pages/Auth/LoginPage.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'login',
        component: LoginPage,
        beforeEnter: ((to, from, next) => {
  
          let isAuthenticated = sessionStorage.getItem('access_tk') ?? true;
  
          if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
          else next()
        })
      },
      {
        path: '/menu',
        name: 'menu',
        component: MenuView,
        beforeEnter: () => {
  
        },
      },
      {
        path: '/menu/:id',
        name: 'menuItem',
        component: ViewMenu,
      },
      // {
      //   path: '/about',
      //   name: 'about',
      //   // route level code-splitting
      //   // this generates a separate chunk (About.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('../views/AboutView.vue')
      // }
    ]
  })
  
  export default router