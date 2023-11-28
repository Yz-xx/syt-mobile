import { createRouter, createWebHistory } from 'vue-router'
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Home/index.vue'),
      meta: {
        title: '首页',
        keepAlive: true
      }
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/views/Search/index.vue'),
      meta: {
        title: '搜索',
        keepAlive: false
      },
    },
    {
      path: '/hospital',
      name: 'hospital',
      component: () => import('@/views/Hospital/index.vue'),
      meta: {
        title: '医院',
        keepAlive: false
      },
      children: [
        {
          path: 'register',
          component: () => import('@/views/Hospital/Register/index.vue'),
          meta: {
            title: '预约挂号',
            keepAlive: false
          }
        },
        {
          path: 'register_first',
          component: () => import('@/views/Hospital/Register/RegisterFirst.vue'),
          meta: {
            title: '预约第一步',
            keepAlive: false
          },
        }
      ]
    },
    {
      path: '/',
      redirect: '/home'
    },
  ],
  //滚动行为:控制滚动条的位置
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})