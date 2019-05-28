import Vue from 'vue'
import Router from 'vue-router'
import Wx from '@/page/Wx'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wx',
      component: Wx
    }
  ]
})
