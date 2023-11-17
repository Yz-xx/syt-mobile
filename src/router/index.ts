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