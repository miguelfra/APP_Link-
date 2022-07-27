import Vue from 'vue'
import VueRouter from 'vue-router'
import Links from '../views/Links.vue'
import store from 'vuex'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Links',
    component: Links,
    meta: {requiresToken: true}
  },
  {
    path: '/newLink', 
    name: 'newLink',
    component: () => import( '../views/NewLink.vue'),
    meta: {requiresToken: true}
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import( '../views/Edit.vue'),
    meta: {requiresToken: true}
  },

  {
    path: '*',
    name: 'Not found',
    component: () => import( '../views/404.vue')
  },

  {
    path: '/signup',
    name: 'signup',
    component: () => import( '../views/Login/Signup.vue'),
    meta: {notToken: true}
  },

  {
    path: '/signin',
    name: 'signin',
    component: () => import( '../views/Login/Signin.vue'),
    meta: {notToken: true}
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.requiresToken)) {
    if (!localStorage.getItem('token')) {
      next('/signup')
    } else{
      next()
    }
  }else if (to.matched.some(route => route.meta.notToken)) {
    if (localStorage.getItem('token')) {
      next('/')
    } else {
      next()
    }
  } else{ 
    next()
  }
  
})

export default router
