<template>
  <div class="index_category_banner">
    <div class="htzxMain clearfix">
      <HomeCategory />
      <HomeBanner />
    </div>
  </div>
  <template v-for="item in panelCategoryList" :key="item.id">
    <homePanel :title="item.text" :cateId="item.id">
      <template #right><Homemore /></template>
    </homePanel>
  </template>
</template>
<script setup>
import { ref } from "vue";
import { panelCategory } from "@/api/home.js";
import HomeCategory from "./components/category.vue";
import HomeBanner from "./components/banner.vue";
import homePanel from "./components/panel.vue";

const panelCategoryList = ref([]);
panelCategory().then((res) => {
  const data = res.data;
  Object.keys(data).filter((item) => {
    if (item !== "0") {
        panelCategoryList.value.push({
          id: item,
          text: data[item]
        });
    }
  });
});
</script>
<style scoped lang="less">
.htzxMain {
  margin-top: 97px;
}
.index_category_banner {
  padding-top: 24px;
  user-select: none;
}
.banner-container {
  :deep(.banner-container-pagination){
    bottom:5px;
  }
}
</style>