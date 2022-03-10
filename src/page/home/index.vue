<template>
  <div class="htzxMain">
    <div class="index_category_banner clearfix">
         <category />
    </div>
  </div>
</template>
<script setup>
import category from './components/category.vue'
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