<template>
  <topNav />
  <headerBar />
  <main>
    <!--二级路由-->
    <RouterView />
  </main>
  <!-- <footer /> -->
</template>
<script setup>
import topNav from "@/components/navBar.vue";
import headerBar from "@/components/headerBar.vue";
</script>