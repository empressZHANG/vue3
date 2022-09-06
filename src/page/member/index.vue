<template>
  <div class="memberBanner">
    <span class="openMemberBtn">开通华图在线VIP会员</span>
  </div>
  <div class="memberMain">
    <div class="htzxMain clearfix">
      <leftNav
        :navData="navData"
        :interestsId="interestsId"
        :type="type"
        @tabChange="tabChange"
      />
      <rightContent :memberData="memberData.data" :type="type" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, computed, ref, toRaw, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import leftNav from "./components/leftNav.vue";
import rightContent from "./components/rightContent.vue";

const memberInfo = reactive([
  {
    type: 1,
    name: "视频解析",
    con: [
      "会员有效期内，可以无限次免费观看10000+试题视频解析",
      "覆盖国考省考等30+省市考近5年考试真题，碎片化学习备考更高效！",
    ],
    url: "../static/images/player_info_spjx.png",
  },
  {
    type: 2,
    name: "专属好课",
    con: [
      "会员有效期内，可以免费观看1000+课时名师经典课程",
      "考情考务、易考易错点、技巧提升课应有尽有，更多名师好课持续更新~",
    ],
    url: "../static/images/player_info_zshk.png",
  },
  {
    type: 3,
    name: "人工批改优惠",
    con: [
      "会员有效期内，可以享受人工批改超低价！",
      "优质师资在线阅卷，还原真实的阅卷场景",
      "针对性诊断与点评，助力申论高效提分",
    ],
    url: "../static/images/player_info_rgpg.png",
  },
  {
    type: 4,
    name: "购课优惠",
    con: ["会员有效期内，可以享受专属课程会员价，花更少的钱，买更多好课！"],
    url: "../static/images/player_info_gkyh.png",
  },
  {
    type: 5,
    name: "智能批改免费",
    con: [
      "会员有效期内，可以对题库中xx试题进行无限次系统智能批改",
      "覆盖归纳概括、综合分析、应用写作等多种题型，智能阅卷等分详解",
      "要点赋分和划档赋分相结合，有练有答有标准解析！",
    ],
    url: "../static/images/player_info_znpg.png",
  },
  {
    type: 6,
    name: "上岸专刊",
    con: [
      "会员有效期内，付费会员可每月获得一本上岸专刊",
      "招考资讯、时政热点解读、申论素材积累、备考技巧详解等内容让上岸更有乐趣！",
      "每月中旬安排发货，到货时间以实际物流配送情况为准~",
    ],
    tips:'*每月15日前（含15日）购买会员，当月安排月刊发货，15日后购买次月安排月刊发货',
    url: "../static/images/player_info_sazk.png",
  },
  {
    type: 7,
    name: "题目导出",
    con: [
      "会员有效期内，可以无限次无限量进行题目导出",
      "权益范围包括【我的错题】及【收藏题目】",
      "增加刷题储备量，锁定易错点及重难点针对性复习，高效提升",
    ],
    url: "../static/images/player_info_spjx.png",
  },
  {
    type: 8,
    name: "笔记导出",
    con: [
      "会员有效期内，可以享受无限次学习笔记导出权益",
      "支持本地查看，随时复习学习重点",
      "系统整理学习思路，把握住着急的“灵光一闪”",
    ],
    url: "../static/images/player_info_spjx.png",
  },
]);

//路由赋值
const route = useRoute();
let interestsId = ref(null);
let type = ref(null);
let memberData = reactive({data:{}});
if (Object.values(route.params).length > 1) {
  interestsId.value = route.params.interestsId;
  type.value = route.params.type;
  memberData.data = memberInfo.filter((item) => item.type == type.value)[0];
}

const store = useStore();
store.dispatch("category/getMemberInterestList");
const navData = computed(() => {
  const interestData = toRaw(store.state.category.interestList);
  if (interestData.length > 0) {
    return interestData.filter((item) => item.id == interestsId.value)[0]
      .children;
  }
});

const tabChange = (val) => {
  type.value = val;
  memberData.data = memberInfo.filter((item) => item.type == val)[0];
};
console.log(memberData, 2222);
</script>
<style scoped lang="less">
.memberBanner {
  padding-top: 109px;
  height: 91px;
  background: url(../static/images/member_banner.png) no-repeat 50%;
  border-bottom: 4px solid #f1c396;

  .giveMemberBtn,
  .openMemberBtn {
    display: block;
    margin: 0 auto;
    width: 297px;
    height: 57px;
    line-height: 57px;
    background: -webkit-gradient(
      linear,
      left top,
      left bottom,
      from(#fb9021),
      color-stop(95%, #e55609),
      to(#b43f00)
    );
    background: linear-gradient(180deg, #fb9021, #e55609 95%, #b43f00);
    -webkit-box-shadow: 0 0 4px 0 rgba(255, 235, 235, 0.15);
    box-shadow: 0 0 4px 0 rgba(255, 235, 235, 0.15);
    border-radius: 29px;
    font-size: 24px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #fff;
    text-align: center;
    cursor: pointer;
    -webkit-animation: myBreath 1s infinite;
    animation: myBreath 1s infinite;
  }
}
.memberMain {
  padding-top: 30px;
  padding-bottom: 60px;
  background: #f4f4f4;
}

@keyframes myBreath {
  0% {
    transform: scale(0.88);
  }
  50% {
    transform: scale(100%);
  }
  100% {
    transform: scale(0.88);
  }
}
</style>
