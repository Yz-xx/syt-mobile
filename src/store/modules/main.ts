import { defineStore } from 'pinia'
import type { Content } from '@/api/home/type'


const mainStore = defineStore('main', {
  state: () => {
    return {
      searchResult: [] as Content,
      topScroll: false,
    }
  },
  getters: {},
  actions: {}
})

export default mainStore