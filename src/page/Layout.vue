<template>
  <topNav />
  <headerBar />
  <div class="htzxMain" style="height:10000px">
    <!--二级路由-->
    <RouterView />
  </div>
  <!-- <footer /> -->
</template>
<script setup>
import topNav from "@/components/navBar.vue";
import headerBar from "@/components/headerBar.vue";
</script>