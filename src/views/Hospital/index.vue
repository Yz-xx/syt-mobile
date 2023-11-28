<template>
  <div class="title">
    <div class="back" @click="goBack">&nbsp;&lt;</div>
    <p>预约挂号</p>
  </div>
  <div class="msg">便捷挂号就医，守护你我健康</div>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { reqHospitalDetail } from "@/api/hospital/index";
import { onMounted } from "vue";
import mainStore from "@/store/modules/main";
import useDetailStore from "@/store/modules/hospitalDetail";

import type { HospitalDetail } from "@/api/hospital/type";

const store = mainStore();
const detailStore = useDetailStore();
const $route = useRoute();
const $router = useRouter();

onMounted(async () => {
  store.topScroll = false;
  let result: HospitalDetail = await reqHospitalDetail(
    $route.query.hoscode as string
  );
  detailStore.hospitalInfo = result.data;
});
const goBack = () => {
  $router.back();
};
</script>

<style scoped>
.title {
  width: 100vw;
  height: 5vh;
  box-shadow: 0px 0px 6px -4px #505050;
}
.title p {
  float: right;
  font-size: 14px;
  margin-right: 50%;
  transform: translateX(28px);
  margin-top: 1vh;
}
.msg {
  width: 100vw;
  height: 3vh;
  background-color: skyblue;
  color: white;
  text-align: center;
  font-size: 12px;
  line-height: 3vh;
}
.back {
  float: left;
  width: 5vh;
  height: 5vh;
  line-height: 5vh;
}
</style>
