<template>
  <div class="panel-container mt15" ref="target">
    <div class="htzxMain">
      <div class="panel-container-title clearfix">
        <h2 class="fl">{{ title }}</h2>
        <slot name="right" />
      </div>
      <div class="panel-container-content mt15">
        <div class="panel-banner">
          <carousel :swipers="swipers" autoPlay />
        </div>
        <template v-for="item in courseList" :key="item.classId">
            <course :courseInfo="item"/>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useLazyData } from '@/hooks/homeLazyData.js'

const props = defineProps({
  title: String,
  cateId: String
});

const { target,swipers,courseList } = useLazyData(props.cateId)
</script>
<style scoped lang="less">
.panel-container {
  &-title {
    height: 56px;
    line-height: 56px;
    h2 {
      font-size: 23px;
      font-weight: 500;
      color: #170101;
    }
  }
  &-content {
    &::after {
      content: "\20";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
      line-height: 0;
    }
    .panel-banner {
      float: left;
      margin-right: 20px;
      width: 580px;
      height: 280px;
      border-radius: 8px;
      cursor: pointer;
      user-select: none;
    }
    :deep(.banner-container) {
      background-size:64px;
    }
    :deep(.courseInfo){
      &:nth-of-type(2),&:nth-of-type(6){
        margin-right: 0;
      }
    }
  }
}
</style>
