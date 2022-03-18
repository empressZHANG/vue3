<template>
  <RouterLink :to='path' class="more fr">
    <span>{{moreFont}}</span>
  </RouterLink>
</template>
<script>
export default {
  name: "Homemore",
  props: {
    path: {
      type: String,
      default: "/",
    },
    moreFont:{
      type:String,
      default:'更多'
    }
  },
};
</script>
<style lang="less" scoped>
.more {
  position: relative;
  color: #ff4e45;
  padding-right: 15px;

  &::after {
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -2px;
    content: "";
    width: 4px;
    height: 4px;
    overflow: hidden;
    border-right: 1px solid #ff4e45;
    border-bottom: 1px solid #ff4e45;
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 0.5;
  }
}
</style>
