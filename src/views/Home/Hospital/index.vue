<template>
  <div class="select">
    <van-dropdown-menu ref="menuRef">
      <van-dropdown-item v-model="value1" :options="options1" @click="onChange" />
      <van-dropdown-item v-model="value2" :options="options2" @click="onChange" />
    </van-dropdown-menu>
    <div class="hospital">
      <van-list v-model:loading="loading" v-model:error="error" error-text="请求失败，点击重新加载" :finished="finished"
        @load="onLoad">
        <van-cell v-for="item in hospitalInfo" :key="item.id">
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
    <van-empty description="没有医院" v-if="hospitalInfo.length <= 0" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { reqHospital } from '@/api/home'
import type { Content, HospitalResponseData } from '@/api/home/type'
const menuRef = ref<any>(null)

const value1 = ref<string>('')
const value2 = ref<string>('')
let hospitalInfo = ref<Content>([])
let pageNo = ref<number>(1)
let limit = ref<number>(6)
let total = ref<number>(0)

const options1 = [
  { text: '全部等级', value: '' },
  { text: '三级甲等', value: '1' },
  { text: '三级乙等', value: '2' },
  { text: '二级甲等', value: '3' },
  { text: '二级乙等', value: '4' },
  { text: '一级', value: '5' },
]
const options2 = [
  { text: '全部区域', value: '' },
  { text: '东城区', value: '110101' },
  { text: '西城区', value: '110102' },
  { text: '朝阳区', value: '110105' },
  { text: '丰台区', value: '110106' },
  { text: '石景山区', value: '110107' },
  { text: '海淀区', value: '110108' },
  { text: '门头沟区', value: '110109' },
  { text: '房山区', value: '110111' },
  { text: '通州区', value: '110112' },
  { text: '顺义区', value: '110113' },
  { text: '昌平区', value: '110114' },
  { text: '大兴区', value: '110115' },
  { text: '怀柔区', value: '110116' },
  { text: '平台区', value: '110117' },
  { text: '密云区', value: '110118' },
  { text: '延庆区', value: '110119' },
]

const loading = ref<boolean>(false);
const finished = ref<boolean>(false);
const error = ref<boolean>(false)
const onLoad = async () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求

  let result: HospitalResponseData = await reqHospital(pageNo.value, limit.value, value1.value, value2.value)
  try {
    let newArr: Content = result.data.content
    hospitalInfo.value.push(...newArr)
    pageNo.value++
    total.value = result.data.totalElements
    loading.value = false;
    if (hospitalInfo.value.length >= total.value) {
      finished.value = true;
    }
  } catch (err) {
    error.value = true
  }
}

const onChange = () => {
  pageNo.value = 1
  hospitalInfo.value = []
  finished.value = false
  loading.value = true
  onLoad()
}
</script>

<style scoped>
.select {
  margin-top: 5px;
  box-shadow: 0px 0px 10px -10px #505050;
}

.van-cell {
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