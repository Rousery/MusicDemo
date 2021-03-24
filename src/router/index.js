import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/Home'
import explore from '@/views/Explore'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: home,
      component: home
    },
    {
      path: '/explore',
      name: explore,
      component: explore
    }
  ]
})
