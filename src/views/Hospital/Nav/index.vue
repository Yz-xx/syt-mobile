<template>
  <van-sidebar v-model="active">
    <van-sidebar-item
      :title="item.depname"
      v-for="item in departmentInfo"
      :key="item.depcode" />
  </van-sidebar>
  <div class="list">
    <ul>
      <li
        v-for="item in departmentInfo[active]?.children"
        :key="item.depcode"
        @click="goDepartment(item.depcode)">
        &nbsp; &nbsp; &nbsp; &nbsp; {{ item.depname }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { reqHospitalDeparment } from "@/api/hospital/index";
import { DeparmentArr, DeparmentResponseData } from "@/api/hospital/type";
import { useRouter, useRoute } from "vue-router";
const $router = useRouter();
const $route = useRoute();
const active = ref(0);
let departmentInfo = ref<DeparmentArr>([]);

onMounted(async () => {
  let result: DeparmentResponseData = await reqHospitalDeparment(
    $route.query.hoscode as string
  );
  departmentInfo.value = result.data;
});

const goDepartment = (depcode: string) => {
  $router.push({
    path: "/hospital/register_first",
    query: {
      hoscode: $route.query.hoscode,
      depcode: depcode,
    },
  });
};
</script>

<style scoped>
.van-sidebar {
  width: 30vw;
  height: 70vh;
  margin-top: 1px;
  display: inline-block;
  overflow: auto;
}
.van-sidebar::-webkit-scrollbar {
  display: none;
}
.list {
  width: 69vw;
  height: 70vh;
  overflow: auto;
  float: right;
}
.list::-webkit-scrollbar {
  display: none;
}
.list li {
  margin: 20px 0px 40px 0px;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
}
.list li:last-child {
  margin-bottom: 20px;
}
</style>
