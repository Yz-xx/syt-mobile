<template>
  <div class="card">
    <div class="left">
      <img :src="`data:image/jpeg;base64,` + hospitalInfo.hospital?.logoData" />
    </div>
    <div class="title">
      <p>{{ hospitalInfo.hospital?.hosname }}</p>
      <span class="level">{{
        hospitalInfo.hospital?.param.hostypeString
      }}</span>
      <br />
      <span>每天{{ hospitalInfo.bookingRule?.releaseTime }}放号</span>
    </div>
    <div class="right">
      <div class="focus">关注</div>
      <div class="icon">
        <svg
          t="1700910829084"
          class="icon"
          viewBox="0 0 1328 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="3156"
          width="20"
          height="20">
          <path
            d="M1252.725227 927.681193a51.934172 51.934172 0 0 0 2.654782-14.601301V250.379951a46.209798 46.209798 0 0 0-46.458684-46.541646h-260.99825v696.880259a73.089465 73.089465 0 0 1-4.645868 26.547819h-30.612954a51.934172 51.934172 0 0 0 2.654782-14.6013V46.542475a46.209798 46.209798 0 0 0-46.458684-46.541645H458.447656a46.209798 46.209798 0 0 0-46.458684 46.541645v865.873722a35.756594 35.756594 0 0 0 2.654782 14.6013H384.113762a85.450794 85.450794 0 0 1-4.645869-26.547819v-696.880259H124.442903a46.209798 46.209798 0 0 0-46.541646 46.541646v662.036246a35.673632 35.673632 0 0 0 2.654782 14.601301H0v96.982502h1327.390969v-96.982502zM255.356838 320.814634h67.116205v67.116206h-67.116205z m0 114.238586h67.116205v67.116205h-67.116205z m0 117.557062h67.116205v67.116206h-67.116205zM150.409989 320.897596h67.779901v67.116206h-67.779901z m0 114.238586h67.779901v67.116205h-67.779901z m0 117.557062h67.779901v67.116206h-67.779901z m0 112.911194h67.779901v67.033244h-67.779901z m69.107292 176.625961h-67.116205v-67.116206h67.116205z m35.839557-176.625961h67.116205v67.033244h-67.116205z m69.02433 176.625961h-67.033244v-67.116206h67.033244z m442.933774 82.29824H570.114421V562.648676h197.200521zM663.695484 351.261665a165.343138 165.343138 0 0 1-165.923871-165.343138A165.343138 165.343138 0 0 1 663.695484 20.57539a165.343138 165.343138 0 0 1 165.343138 165.343137A165.343138 165.343138 0 0 1 663.695484 351.261665z m464.17203-30.529993h67.033244v67.116206h-67.033244z m0 114.238586h67.033244v67.116206h-67.033244z m0 117.557062h67.033244v67.116206h-67.033244zM1022.920665 320.814634h67.116206v67.116206h-67.116206z m0 114.238586h67.116206v67.116205h-67.116206z m0 117.557062h67.116206v67.116206h-67.116206z m0 112.911195h67.116206v67.033243h-67.116206z m69.107293 176.62596h-67.116206v-67.116206h67.116206z m35.839556-176.62596h67.033244v67.033243h-67.033244z m68.360635 176.62596h-67.033244v-67.116206h67.033244z m0 0"
            fill="#1296db"
            p-id="3157"></path>
          <path
            d="M767.563828 144.686445v81.717507h-63.051071v63.051071H622.214517v-63.051071h-63.051071v-81.717507h63.051071v-63.051071h81.634544v63.051071z m0 0"
            fill="#1296db"
            p-id="3158"></path>
        </svg>
      </div>
      <p>医院详情</p>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps(["hospitalInfo"]);
</script>

<style scoped>
.card {
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 6px -4px #505050;
}

.card img {
  width: 80px;
  height: 80px;
  margin-left: 10px;
}
.card .title {
  flex-grow: 1;
  margin-left: 10px;
}
.card .level {
  color: #00b5ff;
  padding: 3px;
  border: 1px solid #00b5ff;
  font-size: 10px;
}

.card .title span:last-child {
  font-size: 10px;
  color: gray;
}

.card .right {
  width: 50px;
  font-size: 10px;
  color: gray;
  margin-right: 10px;
}
.card .right .focus {
  width: 50px;
  height: 20px;
  text-align: center;
  background-color: #0097ff9e;
  border-radius: 10px 10px 10px 10px;
  line-height: 20px;
  color: white;
}
.card .right .icon {
  display: flex;
  justify-content: center;
  margin-top: 5px;
}
.card .right p {
  text-align: center;
}
</style>
