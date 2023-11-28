import { defineStore } from "pinia";
import type { HosPitalDetail } from "@/api/hospital/type";


const useDetailStore = defineStore('useDetailStore', {
  state: () => {
    return {
      hospitalInfo: {} as HosPitalDetail,
    }
  }
})

export default useDetailStore