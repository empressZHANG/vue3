<template>
  <div class="index_category_banner">
    <div class="htzxMain clearfix">
      <HomeCategory />
      <HomeBanner />
    </div>
  </div>
</template>
<script setup>
import HomeCategory from "./components/category.vue";
import HomeBanner from "./components/banner.vue";
</script>
<style scoped lang="less">
.htzxMain {
  margin-top: 97px;
}
.index_category_banner {
  padding-top: 24px;
  user-select: none;
}
</style>