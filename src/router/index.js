import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//路由表
const routes = [
  {
    path:'/login',
    name:'login',
    component: () => import('@/views/login/')
  },
  {
    path:'/',
    component: () => import('@/views/layout/'),
    children:[
      {
        path:'', //默认子路由
        name:'home',
        component: () => import('@/views/home/')
      },
      {
        path:'/talk',
        name:'talk',
        component: () => import('@/views/talk/')
      },
      {
        path:'/add',
        name:'add',
        component: () => import('@/views/add/')
      },
      {
        path:'/my',
        name:'my',
        component: () => import('@/views/my/')
      },
      {
        path:'/message',
        name:'message',
        component: () => import('@/views/message/')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
