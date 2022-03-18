<template>
  <div class="index_banner">
    <carousel :swipers="swipers"  showBtn autoPlay/>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { findBanner } from "@/api/home.js";
const swipers = ref([]);
findBanner({cateId:0}).then((res) => {
  swipers.value = res.data.filter(item=>item.status);
});
</script>
<style lang="less" scoped>
.index_banner {
  margin-left: 172px;
  width: 1008px;
  height: 340px;
  border-radius: 0 8px 8px 0px;
}
.banner-container {
  :deep(.banner-container-arrowBtn ){
    opacity: 0.2;
    background: #000;
  }
  :deep(.swiper-slide img){
    border-radius: 0 8px 8px 0;
  }
}
</style>