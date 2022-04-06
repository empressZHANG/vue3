<template>
  <div class="list-loading" ref="loadingBox">
    <div class="loading line-scale-pulse-out" v-if="loading">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="finished" v-if="finished">亲，没有更多了~</div>
  </div>
</template>
<script setup  name="listLoading">
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  finished: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["infinite"]);

const loadingBox = ref(null);
useIntersectionObserver(
  loadingBox,
  ([{ isIntersecting }], observerElement) => {
    if (isIntersecting) {
        if (props.loading === false && props.finished === false) {
          emits("infinite");
        }
    }
  },
  { threshold: 0 }
);
</script>
<style scoped lang="less">
.list-loading {
  padding: 15px 0;
  text-align: center;
  .line-scale-pulse-out > div {
    background-color: @primaryColor;
    width: 4px;
    height: 35px;
    border-radius: 2px;
    margin: 2px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: inline-block;
    -webkit-animation: line-scale-pulse-out 0.9s 0s infinite
      cubic-bezier(0.85, 0.25, 0.37, 0.85);
    animation: line-scale-pulse-out 0.9s 0s infinite
      cubic-bezier(0.85, 0.25, 0.37, 0.85);
  }
  .line-scale-pulse-out > div:nth-child(2),
  .line-scale-pulse-out > div:nth-child(4) {
    -webkit-animation-delay: 0.2s !important;
    animation-delay: 0.2s !important;
  }
  .line-scale-pulse-out > div:nth-child(1),
  .line-scale-pulse-out > div:nth-child(5) {
    -webkit-animation-delay: 0.4s !important;
    animation-delay: 0.4s !important;
  }

  @-webkit-keyframes line-scale-pulse-out {
    0% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
    50% {
      -webkit-transform: scaley(0.4);
      transform: scaley(0.4);
    }
    100% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
  }
  @keyframes line-scale-pulse-out {
    0% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
    50% {
      -webkit-transform: scaley(0.4);
      transform: scaley(0.4);
    }
    100% {
      -webkit-transform: scaley(1);
      transform: scaley(1);
    }
  }
  .finished {
    font-size: 14px;
    text-align: center;
  }
}
</style>
