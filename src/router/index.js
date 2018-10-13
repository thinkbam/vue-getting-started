import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Command from  '@/components/Command'
import ComputeAndWatch from  '@/components/ComputeAndWatch'
import Form from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/command',
      name: 'command',
      component: Command
    },
    {
      path: '/ComputeAndWatch',
      name: 'ComputeAndWatch',
      component: ComputeAndWatch
    },
    {
      path: '/Form',
      name: 'Form',
      component: Form
    }
  ]
})
