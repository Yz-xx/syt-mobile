import { defineStore } from 'pinia'
import type { Content } from '@/api/home/type'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      searchResult: [] as Content,
    }
  },
  getters: {},
  actions: {}
})
