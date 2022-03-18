<template>
  <RouterLink
    to=""
    :class="[courseInfo.isCollect ? 'courseInfo collection' : 'courseInfo']"
  >
    <h3 class="courseInfo-title">{{ courseInfo.title }}</h3>
    <p class="courseInfo-tips" v-if="!courseInfo.isCollect">
      {{ courseInfo.brief }}
    </p>
    <time class="courseInfo-time">{{ courseInfo.timeLength }}</time>
    <div class="collection-label" v-if="courseInfo.isCollect">
      {{ courseInfo.collectTag }}
    </div>
    <ul class="courseInfo-teacher">
      <li v-for="it in courseInfo.teacher" :key="it.teacherId">
        <img :src="it.roundPhoto" class="avatar" :alt="it.teacherName" />
        <span class="name">{{ it.teacherName }}</span>
      </li>
    </ul>
    <div
      class="courseInfo-activity"
      v-if="courseInfo.activeTag && courseInfo.activeTag.length > 0"
    >
      <span
        v-for="(ia, ind) in courseInfo.activeTag"
        :key="ind"
        :class="[
          ind === 0
            ? 'htzx_modColor_red htzx_modBg_red'
            : index === 1
            ? 'htzx_modColor_green htzx_modBg_green'
            : 'htzx_modColor_blue htzx_modBg_blue',
        ]"
        >{{ ia }}</span
      >
    </div>
    <div class="courseInfo-footer">
      <div class="courseInfo-footer-aside lh18">
        <template class="timer fl" v-if="courseInfo.isTermined">
          <div class="countDown" v-if="courseInfo.terminedDesc">
            {{ courseInfo.terminedDesc }}
          </div>
          <div class="countDown" v-else>待售</div>
        </template>
        <div class="countDown" v-else-if="courseInfo.isRushOut">已结束</div>
        <div class="countDown" v-else-if="courseInfo.isSaleOut">已售罄</div>
        <div class="countDown" v-else-if="courseInfo.saleStart">
          距开售:{{ StartString }}
        </div>
        <div class="countDown" v-else-if="courseInfo.saleEnd">
          距结束:{{ EndString }}
        </div>
        <div
          class="purchased"
          v-if="courseInfo.limitType == 0 && courseInfo.count > 0"
        >
          已抢{{ courseInfo.count }}人
        </div>
        <div
          class="purchased"
          v-if="courseInfo.limitType == 1 && parseInt(courseInfo.limit) > 0"
        >
          限招{{ courseInfo.limit }}人
        </div>
        <div
          class="purchased"
          v-if="
            courseInfo.limitType == 2 &&
            parseInt(courseInfo.limit) - courseInfo.count > 0
          "
        >
          仅剩{{ parseInt(courseInfo.limit) - courseInfo.count }}人
        </div>
      </div>
      <div class="courseInfo-footer-aside">
        <template v-if="courseInfo.isCollect">
          <span class="discountPrice">{{
            courseInfo.actualPrice == 0
              ? "免费"
              : "&yen;" + courseInfo.actualPrice
          }}</span>
          <span class="memberPrice" v-if="courseInfo.is_member === '1'">{{
            courseInfo.memberPriceRange
          }}</span>
        </template>
        <template v-else>
          <span class="originalPrice" v-if="courseInfo.price"
            >&yen;{{ courseInfo.price }}</span
          >
          <span class="discountPrice">{{
            courseInfo.actualPrice == 0
              ? "免费"
              : "&yen;" + courseInfo.actualPrice
          }}</span>
          <span class="memberPrice" v-if="courseInfo.is_member === '1'"
            >会员价:&yen;{{ courseInfo.memberPrice }}</span
          >
        </template>
      </div>
    </div>
  </RouterLink>
</template>
<script>
import { onMounted, onUnmounted, ref } from "vue";
import { getDHMSBySecond } from "@/utils/utils.js";
export default {
  name: "course",
  props: {
    courseInfo: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    let startTimer = null;
    let StartString = ref("0天00:00:00");
    const start = () => {
      if (!props.courseInfo.startTimeStamp && !props.courseInfo.isRushOut) return;
      clearInterval(startTimer);
      startTimer = setInterval(() => {
        const newDate = parseInt(new Date().getTime() / 1000);
        let countDown = props.courseInfo.startTimeStamp - newDate;        
        let { day, hour, minute, second } = getDHMSBySecond(countDown);
        StartString.value = `${day}天${hour}:${minute}:${second}`;
      }, 1000);
    };

    let endTimer = null;
    let EndString = ref("0天00:00:00");
    const end = () => {
      if (!props.courseInfo.stopTimeStamp && !props.courseInfo.isRushOut) return;
      clearInterval(endTimer);
      endTimer = setInterval(() => {
        const newDate = parseInt(new Date().getTime() / 1000);
        let countDown = props.courseInfo.stopTimeStamp - newDate;        
        let { day, hour, minute, second } = getDHMSBySecond(countDown);
        EndString.value = `${day}天${hour}:${minute}:${second}`;
      }, 1000);
    };

    onMounted(() => {
      start(); //开售倒计时
      end(); //结束倒计时
    });

    onUnmounted(() => {
      clearInterval(startTimer);
      clearInterval(endTimer);
    });

    return { start, StartString, end, EndString };
  },
};
</script>

<style lang="less" scoped>
.courseInfo {
  position: relative;
  top: 0;
  box-sizing: border-box;
  float: left;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 24px 16px 0;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  width: 280px;
  height: 280px;
  background: #fff;
  cursor: pointer;

  //transform-style: preserve-3d;
  color: #666;
  .hoverShadow();
  &-title {
    display: -webkit-box;
    overflow: hidden;
    max-height: 48px;
    line-height: 24px;
    text-overflow: ellipsis;
    font-weight: 500;
    font-size: 16px;
    color: #333;

    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &-tips {
    overflow: hidden;
    box-sizing: initial;
    padding-top: 8px;
    height: 12px;
    line-height: 12px;
    text-overflow: ellipsis;
    font-size: 12px;
    color: #999;
    white-space: nowrap;
  }
  &-time {
    display: inline-block;
    padding-top: 16px;
    height: 12px;
    line-height: 12px;
    font-size: 12px;
    color: #666;
  }
  &-teacher {
    display: flex;
    position: absolute;
    left: 16px;
    bottom: 75px;
    justify-content: flex-start;
    align-items: center;

    li {
      margin-right: 14px;
      height: 47px;
      text-align: center;

      .avatar {
        display: inline-block;
        border-radius: 50%;
        width: 28px;
        height: 28px;
        user-select: none;
        vertical-align: top;
      }

      .name {
        display: block;
        padding-top: 2px;
        line-height: 12px;
        font-size: 12px;
        color: #999;
      }
    }
  }
  &-activity {
    position: absolute;
    right: 16px;
    bottom: 80px;

    span {
      display: block;
      margin-top: 6px;
      border-radius: 4px;
      width: 48px;
      height: 20px;
      line-height: 20px;
      text-align: center;
      font-size: 12px;
    }
  }
  &-footer {
    display: flex;
    position: absolute;
    left: 50%;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    margin-left: -124px;
    border-top: 1px solid #f0f1f5;
    width: 248px;
    height: 64px;
    &-aside {
      .countDown {
        font-size: 12px;
        color: #ff982d;
      }

      .purchased {
        font-size: 12px;
        color: #666;
      }

      .originalPrice {
        text-decoration: line-through;
        font-size: 12px;
        color: #999;
        white-space: nowrap;
      }

      .discountPrice {
        margin-left: 8px;
        font-size: 18px;
        color: #ff4e45;
        white-space: nowrap;
      }

      .memberPrice {
        padding-left: 8px;
        font-size: 12px;
        color: #bd8f56;
        white-space: nowrap;
      }

      &:last-child {
        max-width: 50%;
        line-height: 18px;
        text-align: right;
      }
    }
  }
  &.collection {
    margin-bottom: 4px;
    height: 276px;
    .collection-label {
      display: inline-block;
      box-sizing: border-box;
      padding: 0 12px;
      border-radius: 4px;
      width: auto !important;
      width: 64px;
      min-width: 64px;
      height: 20px;
      background: #ffedec;
      line-height: 20px;
      text-align: center;
      color: #ff4e45;
    }
    &::before {
      position: absolute;
      left: 50%;
      top: 0;
      z-index: -1;
      box-sizing: border-box;
      margin-left: -136px;
      border: 1px solid #ebebeb;
      border-radius: 8px;
      width: 272px;
      height: 278px;
      background: #f7f7f7;
      content: "";
      //transform: translateZ(-1px);
    }

    &::after {
      position: absolute;
      left: 50%;
      top: 0;
      z-index: -2;
      box-sizing: border-box;
      margin-left: -132px;
      border: 1px solid #ebebeb;
      border-radius: 8px;
      width: 264px;
      height: 280px;
      background: #f7f7f7;
      content: "";
      //transform: translateZ(-2px);
    }
  }
}
</style>