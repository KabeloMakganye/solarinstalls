import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import foot from '@/components/foot'
import Account from '@/components/Account'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'foot',
      component: foot
    },
    {
      path: '/Account',
      name: 'Account',
      component: Account
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
