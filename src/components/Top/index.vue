<template>
  <div :class="topScroll && !isSearch ? 'top-nav-hidden' : ''" class="top-nav">
    <div class="top" v-show="!isSearch">
      <div class="left">
        <img src="../../assets/images/logo.png" alt="" />
        <p>预约统一挂号平台</p>
      </div>
      <div class="right">
        <div class="search-icon" @click="goSearch">
          <svg
            t="1699887717681"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4788"
            width="26"
            height="26">
            <path
              d="M680.728354 651.326209c121.274064-137.208988 116.320239-346.908988-14.939247-478.166427-136.444579-136.433322-357.662913-136.433322-494.094188 0-136.443555 136.442532-136.443555 357.661889 0 494.105445 131.241067 131.253346 340.927763 136.204102 478.149031 14.942317l265.63187 265.63187 30.889521-30.877241L680.728354 651.326209zM649.273968 622.002346l-28.658713 28.668946c-120.345925 105.622596-303.678394 101.031021-418.524049-13.812587-119.651101-119.651101-119.651101-313.648466 0-433.299567C321.742307 83.909062 515.740696 83.909062 635.39282 203.569372 750.211868 318.380234 754.826979 501.656421 649.273968 622.002346z"
              fill="#5D5D5D"
              p-id="4789"></path>
          </svg>
        </div>
        <div class="user">
          <svg
            t="1699888714202"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="7062"
            width="26"
            height="26">
            <path
              d="M512 545.152c229.76 0 416 126.848 416 270.848 0 130.304-152.448 142.72-351.68 143.872h-128.64C248.448 958.72 96 946.304 96 816c0-144 186.24-270.848 416-270.848z m0 96c-180.16 0-320 92.352-320 174.848 0 30.688 56.192 46.304 272.32 47.872L512 864l49.6-0.192c215.552-1.92 270.4-17.12 270.4-47.808 0-82.496-139.84-174.848-320-174.848zM512 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448z m0 96a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
              fill="#515151"
              p-id="7063"></path>
          </svg>
        </div>
      </div>
    </div>
    <div class="search" v-show="isSearch">
      <div class="get-back" @click="changeBack">
        <svg
          t="1699886227039"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="2507"
          width="32"
          height="32">
          <path
            d="M387.84 164.906667a22.122667 22.122667 0 0 0-0.362667-30.72 20.522667 20.522667 0 0 0-29.674666 0.362666L0 512.853333l357.802667 378.282667c8.042667 8.533333 21.290667 8.746667 29.674666 0.341333 8.32-8.32 8.533333-22.016 0.384-30.72L60.330667 512.853333 387.861333 164.906667z"
            fill="#3D3D3D"
            p-id="2508"></path>
        </svg>
      </div>
      <div class="search-box">
        <input type="text" placeholder="请输入医院名称" v-model="keywords" />
        <div class="search-icon" @click="goResult">
          <svg
            t="1699887717681"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="4788"
            width="26"
            height="26">
            <path
              d="M680.728354 651.326209c121.274064-137.208988 116.320239-346.908988-14.939247-478.166427-136.444579-136.433322-357.662913-136.433322-494.094188 0-136.443555 136.442532-136.443555 357.661889 0 494.105445 131.241067 131.253346 340.927763 136.204102 478.149031 14.942317l265.63187 265.63187 30.889521-30.877241L680.728354 651.326209zM649.273968 622.002346l-28.658713 28.668946c-120.345925 105.622596-303.678394 101.031021-418.524049-13.812587-119.651101-119.651101-119.651101-313.648466 0-433.299567C321.742307 83.909062 515.740696 83.909062 635.39282 203.569372 750.211868 318.380234 754.826979 501.656421 649.273968 622.002346z"
              fill="#5D5D5D"
              p-id="4789"></path>
          </svg>
        </div>
      </div>
      <div class="speak">
        <svg
          t="1699888375428"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="6042"
          width="26"
          height="26">
          <path
            d="M544 830.4V960h-64v-129.6c-161.6-16-288-152.8-288-318.4h64c0 140.8 115.2 256 256 256s256-115.2 256-256h64c0 165.6-126.4 302.4-288 318.4zM512 640c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128s-128 57.6-128 128v320c0 70.4 57.6 128 128 128z"
            p-id="6043"></path>
        </svg>
      </div>
    </div>
    <div class="shadow" v-show="isSearch"></div>
    <div class="search-his" v-if="nores">
      <van-list>
        <van-cell
          v-for="item in store.searchResult"
          :key="item.id"
          :title="item.hosname"></van-cell>
      </van-list>
    </div>
  </div>
  <div class="top-bar"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { reqHospitalSearch } from "@/api/home";
import type { HospitalInfo } from "@/api/home/type";
import useDebounce from "@/utils/useDebounce";
import { mainStore } from "@/store";
import { useRouter } from "vue-router";

let isSearch = ref<boolean>(false);
let nores = ref<boolean>(false);
let keywords = ref<string>("");
// let hospitalSearch = ref<Content>([]);
const store = mainStore();
const router = useRouter();
let goSearch = () => {
  isSearch.value = true;
};

let changeBack = () => {
  isSearch.value = false;
  keywords.value = "";
  // hospitalSearch.value = [];
  nores.value = false;
};

const goResult = () => {
  nores.value = false;
  isSearch.value = false;
  router.push("./search");
};

const getSearchList = async () => {
  try {
    let result: HospitalInfo = await reqHospitalSearch(keywords.value);
    // hospitalSearch.value = result.data;
    store.searchResult = result.data;
    nores.value = true;
  } catch (error) {
    console.log(error);
  }
};
watch(keywords, () => {
  nores.value = false;
  if (keywords.value !== "") {
    useDebounce(getSearchList, 200);
  }
});
let topScroll = ref<boolean>(false);
let scrollTop = ref(0);
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
let handleScroll = () => {
  scrollTop.value =
    document.documentElement.scrollTop || document.body.scrollTop;
};
watch(scrollTop, (newValue, oldValue) => {
  if (newValue > 100) {
    if (newValue > oldValue) {
      topScroll.value = true;
    } else {
      topScroll.value = false;
    }
  }
});
</script>

<style scoped>
.top {
  width: 100%;
  height: 7vh;
  background: #fff;
  box-shadow: 0px 0px 4px #505050;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.left {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #55a6fe;
}

.left img {
  width: 9vw;
  margin: 0px 10px;
}

.right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.right .search-icon {
  margin-right: 20px;
  display: flex;
  align-items: center;
}

.right .user {
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  transition: 0.5s linear all;
}

.top-nav-hidden {
  transform: translateY(-110%);
}

.top-bar {
  height: 7vh;
}

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

.shadow {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: 10;
  background-color: black;
  opacity: 0.3;
}

.search-his {
  background-color: white;
  width: 100%;
  height: 50vh;
  position: fixed;
  z-index: 11;
}

.search-his li {
  margin-bottom: 10px;
  margin-left: 50px;
}
</style>
