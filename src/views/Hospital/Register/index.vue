<template>
  <div>
    <Card :hospitalInfo="detailStore.hospitalInfo"></Card>
    <Nav></Nav>
  </div>
</template>

<script setup lang="ts">
import Card from "../Card/index.vue";
import Nav from "../Nav/index.vue";
import useDetailStore from "@/store/modules/hospitalDetail";

const detailStore = useDetailStore();
</script>

<style scoped></style>
