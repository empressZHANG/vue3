<template>
  <div class="home-skeleton">
    <a class="skeleton-Banner">
      <skeleton bg="#e4e4e4" width="580px" height="280px" animated />
    </a>
    <a v-for="i in 6" :key="i" class="home-Skeleton">
      <skeleton bg="#e4e4e4" width="100%" height="24px" animated />
      <skeleton
        bg="#e4e4e4"
        width="100%"
        height="12px"
        marginTop="8px"
        animated
      />
      <skeleton
        bg="#e4e4e4"
        width="100%"
        height="12px"
        marginTop="16px"
        animated
      />
      <skeleton
        bg="#e4e4e4"
        width="100%"
        height="47px"
        marginTop="15px"
        animated
      />
      <skeleton
        bg="#e4e4e4"
        width="100%"
        height="64px"
        marginTop="15px"
        animated
      />
    </a>
  </div>
</template>
<script>
export default {
  name: "HomeSkeleton",
};
</script>

<style scoped lang="less">
.home-skeleton{
  margin-top:15px;
  background: #fff;
}
.skeleton-Banner {
  width: 580px;
  height: 280px;
  display: inline-block;
  vertical-align: top;
  margin-right: 20px;
  position: relative;
  z-index: 12;
}
.home-Skeleton {
  display: inline-block;
  width: 280px;
  height: 280px;
  box-sizing: border-box;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 24px 16px 0;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  &:nth-of-type(3),
  &:nth-of-type(7) {
    margin-right: 0;
  }
}
</style>