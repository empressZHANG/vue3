<template>
  <div class="banner-container" @mouseenter="stop()" @mouseleave="start()">
    <div class="banner-container-swiper">
      <a
        :class="swiperIndex === index ? 'swiper-slide fade' : 'swiper-slide'"
        v-for="(item, index) in swipers"
        :key="item.id"
        :href="item.activeUrl"
      >
        <img :src="item.ImgUrl" :alt="item.decribe" />
      </a>
    </div>
    <div class="banner-container-pagination" v-if="swipers.length > 1">
      <span
        v-for="(item, index) in swipers"
        :key="item.id"
        :class="swiperIndex === index ? 'active' : ''"
        @click="swiperIndex = index"
      ></span>
    </div>
    <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
    <div
      class="banner-container-arrowBtn prev"
      @click="toggle(-1)"
      v-if="showBtn"
    >
      <i class="iconfont pciconzuo"></i>
    </div>
    <div
      class="banner-container-arrowBtn next"
      @click="toggle(1)"
      v-if="showBtn"
    >
      <i class="iconfont pciconyou"></i>
    </div>
  </div>
</template>
<script>
import { onUnmounted, ref, watch } from "vue";
export default {
  name: "carousel",
  props: {
    swipers: {
      type: Array,
      default: () => [],
    },
    autoPlay: {
      type: Boolean,
      default: false,
    },
    showBtn: {
      type: Boolean,
      default: false,
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  setup(props) {
    const swiperIndex = ref(0);

    let timer = null;
    const autoPlayFn = () => {
      clearInterval(timer); //防止定时器重复添加
      timer = setInterval(() => {
        swiperIndex.value++;
        if (swiperIndex.value >= props.swipers.length) {
          swiperIndex.value = 0;
        }
      }, props.duration);
    };
    watch(
      () => props.swipers,
      (nv, ov) => {
        if (nv.length > 1 && props.autoPlay) {
          autoPlayFn();
        }
      },
      { immediate: true }
    );

    const stop = () => {
      if (timer) clearInterval(timer);
    };
    const start = () => {
      if (props.swipers.length && props.autoPlay) {
        autoPlayFn();
      }
    };

    const toggle = (step) => {
      const newIndex = swiperIndex.value + step;
      if (newIndex > props.swipers.length - 1) {
        swiperIndex.value = 0;
        return;
      } else if (newIndex < 0) {
        swiperIndex.value = props.swipers.length - 1;
        return;
      } else {
        swiperIndex.value = newIndex;
      }
    };

    onUnmounted(() => {
      clearInterval(timer);
    });

    return { swiperIndex, stop, start, toggle };
  },
};
</script>
<style lang="less" scoped>
.banner-container {
  position: relative;
  width: 100%;
  height: 100%;
  background: url(/static/images/htzx_mod_loading.png) no-repeat center #f3f4f7;
  background-size: 84px;
  &-swiper {
    width: 100%;
    height: 100%;
    .swiper-slide {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
  }
  &-pagination {
    position: absolute;
    left: 0;
    bottom: 20px;
    z-index: 10;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #000;
      opacity: 0.2;
      overflow: hidden;
      position: relative;
      margin: 0 4px;
      cursor: pointer;
      &.active {
        background: #f3f4f7;
        opacity: 1;
      }
    }
  }
  &-arrowBtn {
    position: absolute;
    top: 50%;
    margin-top: -16px;
    z-index: 10;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: #ccc;
    border-radius: 16px;
    cursor: pointer;
    outline: none;
    &.prev {
      left: 1%;
    }
    &.next {
      right: 1%;
    }
    &:hover {
      background: #4e4e4e;
    }
    .iconfont {
      color: #fff;
    }
  }
}
</style>