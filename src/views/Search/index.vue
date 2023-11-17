<template>
  <div>
    <SearchBox @getHospitalInfo="getHospitalInfo" @goResult="goResult"></SearchBox>
    <div class="search-his" v-if="hospitalSearch.length > 0 && nores">
      <van-list>
        <van-cell v-for="(item) in hospitalSearch" :key="item.id" :title="item.hosname"></van-cell>
      </van-list>
    </div>
    <div class="search-result" v-show="!nores">
      <div class="select">
        <div class="hospital">
          <van-list>
            <van-cell v-for="item in hospitalSearch" :key="item.id">
              <div class="card">
                <img :src="`data:image/jpeg;base64,${item['logoData']}`">
                <div class="title">
                  <p>{{ item.hosname }}</p>
                  <span>{{ item.param.hostypeString }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                  <span>每天{{ item.bookingRule.releaseTime }}放号</span>
                </div>
              </div>
            </van-cell>
          </van-list>
        </div>
        <van-empty description="没有医院" v-if="hospitalSearch.length <= 0" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Content } from '@/api/home/type'
import SearchBox from './SearchBox/index.vue'

let hospitalSearch = ref<Content>([])
let nores = ref<boolean>(true)
const getHospitalInfo = (value: Content) => {
  nores.value = true
  hospitalSearch.value = value
}
const goResult = () => {
  nores.value = false
}
</script>

<style scoped>
.search-his {
  background-color: white;
  width: 100%;
  height: 50vh;
}

.search-his li {
  margin-bottom: 10px;
  margin-left: 50px;
}

.select {
  margin-top: 5px;
  box-shadow: 0px 0px 10px -10px #505050;
}

.select .van-cell {
  padding: 0;
  width: 100%;
  height: 90px;
  box-shadow: 0px 0px 6px -4px #505050;
}


.card {
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
}

.card img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}

.card span {
  font-size: 10px;
  color: gray;
}

.card p {
  font-weight: bold;
  text-align: left;
  margin-top: 20px;
}

.card .title {
  height: 90px;
  margin-left: 10px;
}
</style>