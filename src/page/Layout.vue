<template>
  <topNav />
  <headerBar />
  <main
    class="htzxWrap"
    :style="[isMember ? 'padding-top:0' : 'padding-top:96px']"
  >
    <!--二级路由-->
    <RouterView />
  </main>
  <footerBox />
  <copyRight />
</template>
<script setup>
import topNav from "@/components/navBar.vue";
import headerBar from "@/components/headerBar.vue";
import footerBox from "@/components/footer.vue";
import copyRight from "@/components/copyRight.vue";
import { onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
let isMember = ref(false);
onMounted(() => {
  const fullPath = route.fullPath;
  if (fullPath.indexOf("/member") != -1) {
    isMember.value = true;
  } else {
    isMember.value = false;
  }
});
watch(
  () => route.fullPath,
  (n, o) => {
    if (n.indexOf("/member") != -1) {
      isMember.value = true;
    } else {
      isMember.value = false;
    }
  }
);
</script>
