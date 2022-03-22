<template>
  <div
    class="skeleton"
    :style="{ width, height, 'margin-top':marginTop }"
    :class="{ shine: animated }"
  >
    <div class="block" :style="{ backgroundColor: bg }"></div>
  </div>
</template>
<script>
export default {
  name: "skeleton",
  props: {
    bg: {
      type: String,
      default: "#efefef",
    },
    width: {
      type: String,
      default: "100px",
    },
    height: {
      type: String,
      default: "100px",
    },
    marginTop: {
      type: String,
      default: "0px",
    },
    animated: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style scoped lang="less">
.skeleton {
  display: inline-block;
  position: relative;
  overflow: hidden;
  vertical-align: middle;
  .block {
    width: 100%;
    height: 100%;
    border-radius: 2px;
  }
}
.shine {
  &::after {
    content: "";
    position: absolute;
    animation: shan 1.5s ease 0s infinite;
    top: 0;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: skewX(-45deg);
  }
}
@keyframes shan {
  0% {
    left: -100%;
  }
  100% {
    left: 120%;
  }
}
</style>