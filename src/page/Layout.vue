<template>
  <topNav />
  <headerBar />
  <main>
    <!--二级路由-->
    <RouterView />
  </main>
  <footerBox />
  <copyRight />
</template>
<script setup>
import topNav from "@/components/navBar.vue";
import headerBar from "@/components/headerBar.vue";
import footerBox from "@/components/footer.vue"
import copyRight from "@/components/copyRight.vue"
</script>