<template>
  <div class="container">
    <HospitalTop></HospitalTop>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" v-if="$route.meta.keepAlive" />
      </keep-alive>
      <component :is="Component" v-if="!$route.meta.keepAlive" />
    </router-view>
    <Login></Login>
  </div>
</template>

<script setup lang="ts">
// import request from '@/utils/request'
// import { onMounted } from 'vue'

// onMounted(() => {
//   request.get('/hosp/hospital/1/100').then(res => {
//     console.log(res)
//   })
// })
</script>

<style></style>
