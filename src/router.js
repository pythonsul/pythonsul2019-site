import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Local from './views/Local.vue'
import KeyNotes from './views/KeyNotes.vue'
import Schedule from './views/Schedule.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/local',
      name: 'local',
      component: Local
    },
    {
      path: '/key-notes/',
      name: 'key-notes',
      component: KeyNotes
    },
    {
      path: '/schedule/',
      name: 'schedule',
      component: Schedule
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
