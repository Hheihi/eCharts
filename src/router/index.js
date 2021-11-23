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
        path: '/lineList',
        name: 'lineList',
        component: () => import('@/views/lineList/LineList.vue')
      },
      {
        path: '/barList',
        name: 'barList',
        component: () => import('@/views/barList/BarList.vue')
      },
      {
        path: 'treeList',
        name: 'TreeList',
        component: () => import('@/views/treeList/TreeList.vue')
      },
      {
        path: 'pieList',
        name: 'PieList',
        component: () => import('@/views/pieList/PieList.vue')
      },
      {
        path: 'scatterList',
        name: 'scatterList',
        component: () => import('@/views/scatterList/ScatterList.vue')
      }
    ]
  },
  // {
  //   path: '/lineList',
  //   name: 'lineList',
  //   component: () => import('@/views/lineList/LineList.vue')
  // },
  {
    path: '*',
    name: 'error',
    component: () => import('@/components/Error.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
