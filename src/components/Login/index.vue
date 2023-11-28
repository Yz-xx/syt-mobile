<template>
  <div>
    <van-overlay
      :show="store.showLogin"
      @click="store.showLogin = false"
      z-index="1000">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="phone">
            <span>手机号码</span>
            <div class="p-number">
              <van-field
                v-model="phone"
                type="tel"
                placeholder="请输入手机号码"
                size="large" />
              <van-cell-group inset>
                <van-field
                  v-model="store.code"
                  disabled
                  placeholder="请输入验证码">
                  <template #button>
                    <van-button
                      size="small"
                      type="primary"
                      :disabled="!isPhone"
                      @click="getCode"
                      >发送验证码</van-button
                    >
                  </template>
                </van-field>
              </van-cell-group>
            </div>
            <van-button type="primary" block @click="login"
              >立即登录</van-button
            >
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import userStore from "@/store/modules/user";
import { ref, computed } from "vue";
import { showNotify } from "vant";

const store = userStore();
let phone = ref<string>("");
//计算出当前表单元素收集的内容是否手机号码格式
let isPhone = computed(() => {
  //手机号码正则表达式
  const reg =
    /^1((34[0-8])|(8\d{2})|(([35][0-35-9]|4[579]|66|7[35678]|9[1389])\d{1}))\d{7}$/;
  //返回布尔值:真代表手机号码、假代表的即为不是手机号码
  return reg.test(phone.value);
});

const getCode = async () => {
  try {
    await store.getCode(phone.value);
    console.log(store.code);
  } catch (error) {
    showNotify({ type: "danger", message: "获取验证码失败" + error });
  }
};
const login = async () => {
  if (store.code !== "") {
    try {
      await store.userLogin({ phone: phone.value, code: store.code });
      store.showLogin = false;
    } catch (error) {}
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 80vw;
  height: 50vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.block span {
  margin-top: 10vh;
  font-size: 20px;
}

.phone {
  width: 60vw;
  height: 35vh;
}

.p-number {
  margin-top: 5vh;
  border-bottom: 1px solid gray;
}

.van-button--block {
  margin-top: 4vh;
}
.van-cell-group--inset {
  margin: 0;
}
</style>
