import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/camera',
    name: 'Camera',
    component: () =>
      import(/* webpackChunkName: "camera" */ '../views/Camera.vue')
  },
  {
    path: '/location',
    name: 'Location',
    component: () =>
      import(/* webpackChunkName: "location" */ '../views/Location.vue')
  },
  {
    path: '/local-notifications',
    name: 'LocalNotifications',
    component: () =>
      import(
        /* webpackChunkName: "local-notifications" */ '../views/LocalNotifications.vue'
      )
  },
  {
    path: '/modals',
    name: 'Modals',
    component: () =>
      import(/* webpackChunkName: "modals" */ '../views/Modals.vue')
  },
  {
    path: '/browser',
    name: 'Browser',
    component: () =>
      import(/* webpackChunkName: "browser" */ '../views/Browser.vue')
  },
  {
    path: '/clipboard',
    name: 'Clipboard',
    component: () =>
      import(/* webpackChunkName: "clipboard" */ '../views/Clipboard.vue')
  },
  {
    path: '/device',
    name: 'Device',
    component: () =>
      import(/* webpackChunkName: "device" */ '../views/Device.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
