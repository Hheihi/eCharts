import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/components/index.vue'),
    children: [
      {
        path: 'lineList',
        name: 'lineList',
        component: () => import('@/views/LineList.vue')
      },
      {
        path: 'barList',
        name: 'barList',
        component: () => import('@/views/BarList.vue')
      },
      {
        path: 'mapList',
        name: 'MapList',
        component: () => import('@/views/MapList.vue')
      },
      {
        path: 'pieList',
        name: 'PieList',
        component: () => import('@/views/PieList.vue')
      },
      {
        path: 'scatterList',
        name: 'scatterList',
        component: () => import('@/views/ScatterList.vue')
      }
    ]


  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
