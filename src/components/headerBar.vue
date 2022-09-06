<template>
  <div
    :class="[
      isMember
        ? 'htzxHeader member'
        : scrollY > 78
        ? 'header-sticky htzxHeader'
        : 'htzxHeader',
    ]"
    :style="[
      isMember ? 'position:relative;top:0;' : 'position:fixed;top:32px;',
    ]"
  >
    <div class="htzxMain htzxHeader_flex">
      <a href="" class="htzxHeader_logo">
        <h1>华图在线</h1>
      </a>
      <ul class="htzxHeader_nav">
        <li><RouterLink to="/">首页</RouterLink></li>
        <li><RouterLink to="/kc/1000/1000/1000">课程</RouterLink></li>
        <li><RouterLink to="/">题库</RouterLink></li>
        <li><RouterLink to="/">资讯</RouterLink></li>
        <li><RouterLink to="/">师资</RouterLink></li>
        <li><RouterLink to="/">智慧课堂</RouterLink></li>
        <li><RouterLink to="/app">APP</RouterLink></li>
      </ul>
      <div class="htzxHeader_fun htzxHeader_flex">
        <div class="fun_search">
          <i class="iconfont pciconsearch-o"></i>
          <input
            type="text"
            placeholder="搜索课程、试题、资讯"
            class="fun_search_input"
            value=""
            onfocus="this.placeholder=''"
            onblur="this.placeholder='搜索课程、试题、资讯'"
            id="htzx_search_header"
          />
          <i class="iconfont pciconguanbi fsr_iconBtn_close displayNone"></i>
        </div>
        <!--未登录状态-->
        <div class="fun_noLogin htzxHeader_flex" v-if="!profile.ht_token">
          <div class="fun_entry">
            <a href="">我的课程</a>｜<span id="loginEntry">登录</span>
          </div>
          <div class="fun_btn_reg" id="regEntry">注册</div>
        </div>
        <!--登录状态-->
        <div class="fun_userCenter" v-else>
          <div class="fun_login">
            <a href="#">
              我的课程
              <img :src="profile.userFace" class="fun_login_avatar" />
            </a>
            <ul class="fun_login_drag">
              <li><a href="">管理员登录</a></li>
              <li>
                <router-link to="/member">班级管理</router-link>
                <a href="#">我的订单</a>
                <a href="#">我的题库</a>
              </li>
              <li><a href="">退出</a></li>
            </ul>
          </div>
          <div class="fun_member openMemberBtn">
            <i class="fun_member_icon"></i>
            <!-- <div class="fun_member_drag displayNone">
             <h3><i class="iconfont pciconvip2"></i>我的会员</h3>
             <p>
               <img src="/static/images/htzx_appEwm02@2x.png" alt="">
               扫描二维码 打开华图在线app
               <strong>免费解析 专属课程<br />看更多会员权益</strong>
             </p>
          </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { onMounted, ref, computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useWindowScroll } from "@vueuse/core";
const store = useStore();
//const { profile } = store.state.user;
//使用vuex中的state需要设置计算属性
const profile = computed(() => {
  return store.state.user.profile;
});
//导航吸顶
const { y } = useWindowScroll();
const scrollY = y;

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

// const scrollY = ref(0);
// onMounted(() => {
//   window.onscroll = () => {
//     const scrollTop = document.documentElement.scrollTop;
//     scrollY.value = scrollTop;
//   };
// });
</script>
<style lang="less" scoped>
#htzxIndex #htzxnav01,
#page-classdetail #htzxnav02,
#htzxCourse #htzxnav02,
#htzxTiku #htzxnav03,
#page-message #htzxnav04,
#htzxTeacher #htzxnav05,
#page-teacher #htzxnav05,
#page-double-teacher #htzxnav06,
#page-app #htzxnav07 {
  border-bottom: 3px solid @borderPrimary;
  color: @primaryColor;
  a {
    color: @primaryColor;
  }
}
#htzxCourse #htzxTiku #htzxnav03,
#page-message #htzxTiku #htzxnav03 {
  border-bottom: none;
  color: @primaryText;
  a {
    color: @RegularText;
  }
}
.htzxHeader {
  position: fixed;
  left: 0;
  top: 32px;
  z-index: 99;
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.1);
  transform: translateZ(0);
  transition: all 0.2s;
  &.header-sticky {
    transform: translate3d(0, -32px, 0);
  }
  .htzxHeader_fun {
    width: 430px;
  }
  .htzxHeader_flex {
    display: flex;
    justify-content: space-between;
    align-content: center;
    align-items: center;
  }
  .htzxHeader_logo {
    display: inline-block;
    width: 127px;
    height: 28px;
    background: url("/static/images/logo@2x.png") no-repeat;
    background-size: 127px 28px;
    h1 {
      opacity: 0;
      font-size: 14px;
    }
  }
  .htzxHeader_nav {
    li {
      display: inline-block;
      box-sizing: initial;
      margin: 0 20px;
      border-bottom: 3px solid #fff;
      height: 61px;
      line-height: 61px;
      font-weight: 500;
      font-size: 17px;
      color: #333;
      cursor: pointer;
      a {
        color: #333;
      }
      &:hover {
        border-bottom: 3px solid @borderPrimary;
        color: @primaryColor;
        a {
          color: @primaryColor;
        }
      }
    }
  }
  .htzxHeader_fun {
    .fun_search {
      box-sizing: initial;
      padding: 6px 13px;
      border: 1px solid @borderInfo;
      border-radius: 16px;
      width: 170px;
      height: 16px;
      background: @infoBg;
      line-height: 16px;
      .fun_search_input {
        border: none;
        width: 149px;
        height: 16px;
        background: @infoBg;
        vertical-align: top;
      }
      &.fun_search_result {
        border-color: @borderPrimary;
        background: #fff;
        .fun_search_input {
          width: 128px;
          background: #fff;
        }
        .fsr_iconBtn_close {
          color: @secondaryText;
        }
      }
    }
    .fun_entry {
      padding: 0 24px;
      cursor: pointer;
      font-size: 14px;
      color: @RegularText;
      a {
        color: @RegularText;
      }
      span#loginEntry {
        color: @baseText;
        &:hover {
          color: @dangerText;
        }
      }
    }
    .fun_login {
      position: relative;
      padding: 16px 0 16px 30px;
      font-size: 14px;
      height: 32px;
      line-height: 32px;
      -webkit-box-sizing: content-box;
      box-sizing: content-box;
      -webkit-box-sizing: initial;
      box-sizing: initial;
      a {
        color: @RegularText;
      }
      .fun_login_avatar {
        display: inline-block;
        margin-left: 24px;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        vertical-align: top;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
      }
      &:hover {
        .fun_login_drag {
          height: auto;
          opacity: 1;
        }
      }
      .fun_login_drag {
        position: absolute;
        right: 0;
        top: 65px;
        width: 120px;
        height: 0;
        opacity: 0;
        background: #fff;
        -webkit-box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
        box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
        border-radius: 0 0 8px 8px;
        text-align: center;
        z-index: 15;
        li:first-child {
          padding: 8px 0;
          border-bottom: 1px solid @borderLighter;
        }
        li:last-child {
          padding: 8px 0;
          border-top: 1px solid @borderLighter;
        }
        li:nth-of-type(2) {
          padding: 7px 0;
        }
        a {
          display: block;
          padding: 8px 0;
          line-height: 12px;
          font-size: 12px;
          color: #666;
          &:hover {
            color: @dangerText;
          }
        }
      }
    }
    .fun_userCenter {
      display: flex;
    }
    .fun_member {
      position: relative;
      box-sizing: border-box;
      padding: 19px 0 19px 5px;
      height: 100%;
      cursor: pointer;
      .fun_member_icon {
        display: inline-block;
        overflow: hidden;
        margin-left: 5px;
        border-radius: 9px;
        width: 40px;
        height: 14px;
        background: url(/static/images/htzx_mod_member.png) no-repeat;
        background-size: 40px 14px;
      }
      .fun_member_drag {
        display: none;
        position: absolute;
        right: 0;
        top: 65px;
        z-index: 15;
        border-radius: 8px;
        width: 184px;
        background: #ffdeba;
        text-align: center;
        h3 {
          border-radius: 8px 8px 0 0;
          height: 34px;
          background: linear-gradient(322deg, #1b1d28 0%, #323643 100%);
          line-height: 34px;
          font-weight: 500;
          font-size: 14px;
          color: #ffdeba;
          .iconfont {
            margin-right: 5px;
          }
        }
        p {
          padding: 16px 0 10px;
          line-height: 16px;
          font-size: 12px;
          color: #333;
          img {
            display: block;
            margin: 0 auto 5px;
            width: 104px;
            height: 104px;
          }
          strong {
            display: block;
            padding-top: 5px;
          }
        }
      }
    }
    .fun_btn_reg {
      border-radius: 16px;
      width: 82px;
      height: 32px;
      background: #ff8f89;
      cursor: pointer;
      line-height: 32px;
      text-align: center;
      font-size: 14px;
      color: #fff;
      &:hover {
        background: @primaryBg;
      }
    }
  }
}
.htzxHeader.member {
  background: #1a191e;
  color: #ccc;
  a {
    color: #ccc;
    &.htzxHeader_logo {
      background-image: url(../static/images/member_logo@2x.png);
    }
  }
  li {
    border-bottom-color: #1a191e;
    a {
      color: #ccc;
    }
    &#htzxnav01 {
      border-bottom-color: #f0d1af;
    }
    &#htzxnav01 a {
      color: #f0d1af;
    }
  }
  .fun_search {
    background: #525158;
    border-color: #525158;
    .fun_search_input {
      background: #525158;
    }
  }
  .fun_entry {
    span {
      &#loginEntry {
        color: #f0d1af;
      }
    }
  }
  .fun_btn_reg {
    background: #f0d1af;
    color: #000;
  }
}
</style>
