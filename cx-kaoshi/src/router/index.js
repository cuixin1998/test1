import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import list from '@/components/list'
import my from '@/components/myCart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      redirect:'/list',
      component: HelloWorld
    },
    {
      path: '/list',
      name: 'list',
      component: list
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
