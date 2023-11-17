<template>
  <div class="search">
    <div class="get-back" @click="changeBack">
      <svg t="1699886227039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="2507" width="32" height="32">
        <path
          d="M387.84 164.906667a22.122667 22.122667 0 0 0-0.362667-30.72 20.522667 20.522667 0 0 0-29.674666 0.362666L0 512.853333l357.802667 378.282667c8.042667 8.533333 21.290667 8.746667 29.674666 0.341333 8.32-8.32 8.533333-22.016 0.384-30.72L60.330667 512.853333 387.861333 164.906667z"
          fill="#3D3D3D" p-id="2508"></path>
      </svg>
    </div>
    <div class="search-box">
      <input type="text" placeholder="请输入医院名称" v-model="keywords">
      <div class="search-icon" @click="goResult">
        <svg t="1699887717681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
          p-id="4788" width="26" height="26">
          <path
            d="M680.728354 651.326209c121.274064-137.208988 116.320239-346.908988-14.939247-478.166427-136.444579-136.433322-357.662913-136.433322-494.094188 0-136.443555 136.442532-136.443555 357.661889 0 494.105445 131.241067 131.253346 340.927763 136.204102 478.149031 14.942317l265.63187 265.63187 30.889521-30.877241L680.728354 651.326209zM649.273968 622.002346l-28.658713 28.668946c-120.345925 105.622596-303.678394 101.031021-418.524049-13.812587-119.651101-119.651101-119.651101-313.648466 0-433.299567C321.742307 83.909062 515.740696 83.909062 635.39282 203.569372 750.211868 318.380234 754.826979 501.656421 649.273968 622.002346z"
            fill="#5D5D5D" p-id="4789"></path>
        </svg>
      </div>
    </div>
    <div class="speak">
      <svg t="1699888375428" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
        p-id="6042" width="26" height="26">
        <path
          d="M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z"
          p-id="6043"></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { reqHospitalSearch } from '@/api/home'
import type { Content, HospitalInfo } from '@/api/home/type'
import useDebounce from '@/utils/useDebounce'
import { useRouter } from 'vue-router'
const router = useRouter()
let keywords = ref<string>('')
let changeBack = () => {
  router.back()
}

let hospitalSearch = ref<Content>([])

let $emit = defineEmits(['getHospitalInfo', 'goResult'])

const getSearchList = async () => {
  let result: HospitalInfo = await reqHospitalSearch(keywords.value)
  if (result.code == 200) {
    hospitalSearch.value = result.data
    $emit('getHospitalInfo', result.data)
  }
}
const goResult = () => {
  $emit('goResult')
}
watch(keywords, () => {
  useDebounce(getSearchList, 200)
})
</script>

<style scoped>
.search {
  width: 100%;
  height: 7vh;
  background-color: rgba(249, 249, 249, 0.98);
  box-shadow: 0px 0px 4px #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search .get-back {
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.search .search-box {
  width: 70vw;
  height: 4.5vh;
  background-color: #e9e9e9;
  border-radius: 15px 15px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search .search-box input {
  width: 50vw;
  height: 3vh;
  border: none;
  background-color: #e9e9e9;
  margin-left: 20px;
}

.search .search-box .search-icon {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.search .speak {
  width: 8vw;
  height: 8vw;
  margin: 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #e9e9e9;
}
</style>