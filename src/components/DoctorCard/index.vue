<template>
  <div class="content" v-for="item in DocArr" :key="item.hosScheduleId">
    <div class="left">
      <div style="margin: 1vh 0px 0px 4vw; font-weight: bold">
        {{ item.title }}-{{ item.param.depname }}
      </div>
      <div style="margin: 1vh 0px 0px 4vw">{{ item.docname }}</div>
    </div>
    <div class="right">
      <div class="money">￥{{ item.amount }}</div>
      <div class="leave" v-if="status == 0">
        <div class="top">预约</div>
        <div class="bottom">余{{ item.availableNumber }}</div>
      </div>
      <div class="leave" v-else>
        <div class="text">约满</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps(["DocArr", "status"]);
</script>

<style scoped>
.content {
  width: 92vw;
  height: 10vh;
  background-color: white;
  margin-top: 2vh;
  border-radius: 5px 5px 5px 5px;
}
.content .left {
  width: 65%;
  height: 10vh;

  border-radius: 5px 0px 0px 5px;
  float: left;
}
.content .right {
  width: 35%;
  height: 10vh;
  border-radius: 0px 5px 5px 0px;
  float: right;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.content .right .money {
  font-weight: bold;
  font-size: 16px;
  color: orange;
}
.content .right .leave {
  height: 6vh;
  width: 6vh;
}
.content .right .leave .text {
  height: 6vh;
  width: 6vh;
  line-height: 6vh;
  text-align: center;
  background-color: #d7d7d7;
  font-size: 12px;
  color: white;
  border-radius: 3px 3px 3px 3px;
}
.content .right .leave .top {
  height: 3vh;
  text-align: center;
  font-size: 13px;
  background-color: #4698ff;
  border-radius: 3px 3px 0px 0px;
}
.content .right .leave .bottom {
  height: 3vh;
  text-align: center;
  font-size: 12px;
  color: #4698ff;
  background-color: #b9ebff;
  border-radius: 0px 0px 3px 3px;
}

.content:last-child {
  margin-bottom: 2vh;
}
</style>
