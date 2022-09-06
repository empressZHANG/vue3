<template>
  <div class="memberLeft">
    <h2><i class="iconfont pciconhy-icon"></i>会员权益</h2>
    <div class="memberList">
      <ul>
        <li
          :class="[item.type == type ? 'actived' : '']"
          data-type="6"
          v-for="item in navData"
          :key="item.id"
          @click="tabChange(item.type)"
        >
          <img :src="item.iconUrl" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { withDefaults } from "vue";
interface PropsType {
  interestsId?: String;
  type?: String | Number;
  navData?: Array;
}
const props = withDefaults(defineProps<PropsType>(), {
  interestsId: "1",
  type: "1",
  navData: () => [],
});

const emit = defineEmits<{
  (e: "tabChange", type: String): void;
}>();

const tabChange = (type) => {
  emit("tabChange", type);
};
</script>
<style scoped lang="less">
.memberLeft {
  float: left;
  width: 170px;
  background: url(../static/images/member_mod_bg.png) no-repeat 100% 0 #1a191e;
  border-radius: 8px;
  h2 {
    padding-left: 40px;
    height: 67px;
    line-height: 67px;
    font-size: 20px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffdeba;
    .iconfont {
      padding-right: 8px;
      font-size: 17px;
      color: #ffdeba;
      font-weight: 400;
    }
  }
  .memberList {
    padding: 1px;
    background: linear-gradient(135deg, #fff3da, #ffd585);
    -webkit-box-shadow: 1px 1px 1px 0 #ffedbe;
    box-shadow: 1px 1px 1px 0 #ffedbe;
    border-radius: 7px;
    ul {
      padding: 11px 0;
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#fff2c4),
        to(#ffd798)
      );
      background: linear-gradient(90deg, #fff2c4, #ffd798);
      border-radius: 7px;
    }
    li {
      display: block;
      margin-top: 10px;
      padding: 0 8px;
      height: 48px;
      line-height: 48px;
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ab621f;
      text-shadow: 0 1px 1px hsla(0, 0%, 100%, 0.5);
      cursor: pointer;
      &:first-child {
        margin-top: 0;
      }
      &.actived {
        background: -webkit-gradient(
          linear,
          right top,
          left top,
          from(#f9c157),
          to(#ffe5a3)
        );
        background: linear-gradient(270deg, #f9c157, #ffe5a3);
        -webkit-box-shadow: 0 -1px 0 0 #d89157 inset;
        box-shadow: inset 0 -1px 0 0 #d89157;
      }
      img {
        display: inline-block;
        vertical-align: top;
        margin-top: 3px;
        margin-right: 4px;
        width: 42px;
        height: 42px;
      }
    }
  }
}
</style>
