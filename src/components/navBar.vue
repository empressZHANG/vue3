<template>
  <div :class="[scrollY > 78 ? 'htzxTop' : 'htzxTop htzxTop-sticky']">
    <div class="htzxMain clearfix">
      <div class="fl">
        <a href="#">网站导航</a>
        <a href="#">选课报班</a>
        <a href="#">每日答题</a>
        <a href="#">考试公告</a>
      </div>
      <div class="fr">
        <span class="zhiCustomBtn">在线咨询</span>
        <i class="htzxTop_line"></i>
        <a href="#">帮助中心</a>
        <i class="htzxTop_line"></i>
        <span class="htzxTop_tel">
          <span class="htzxTop_tel_font">咨询电话</span>
          <span class="htzxTop_tel_hover"
            ><i class="iconfont pciconxingzhuang"></i>400-8989-766</span
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { useWindowScroll } from "@vueuse/core";

//page滚动监听
const {y} = useWindowScroll()
const scrollY = y;
// let scrollTop = ref(0);
// const scrollY = () => {
//   scrollTop.value = document.documentElement.scrollTop;
// };
// onMounted(() => {
//   window.addEventListener("scroll", scrollY);
// });
// onUnmounted(() => {
//   window.removeEventListener("scroll", scrollY);
// });
</script>
<style lang="less" scoped>
.htzxTop {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 99;
  width: 100%;
  height: 32px;
  transition: all .2s;
  transform:translateY(-100%);
  background: @infoBg;
  line-height: 32px;
  font-weight: 400;
  font-size: 12px;
  color: @RegularText;
  &.htzxTop-sticky {
    transform: translateY(0);
  }
  a,
  span {
    cursor: pointer;
    color: @RegularText;
    &:hover {
      color: @baseText;
    }
  }
  .fl {
    a {
      padding-right: 20px;
    }
  }
  .fr {
    a,
    span {
      padding: 0 15px;
      &:last-child {
        padding-right: 0;
      }
    }
    .htzxTop_line {
      display: inline-block;
      width: 1px;
      height: 10px;
      background: #e1e2e6;
    }
    .htzxTop_tel {
      display: inline-block;
      vertical-align: top;
      .htzxTop_tel_font {
        display: inline-block;
        padding: 0;
      }
      .htzxTop_tel_hover {
        display: none;
        padding: 0;
        border-radius: 0 0 8px 8px;
        width: 115px;
        height: 32px;
        background: @primaryBg;
        vertical-align: top;
        text-align: center;
        font-size: 12px;
        color: #fff;
        .iconfont {
          display: inline-block;
          margin-right: 6px;
          vertical-align: top;
        }
      }
      &:hover {
        .htzxTop_tel_font {
          display: none;
        }
        .htzxTop_tel_hover {
          display: inline-block;
        }
      }
    }
  }
}
</style>
