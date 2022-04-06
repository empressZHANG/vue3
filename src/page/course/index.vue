<template>
  <div class="course-filter">
    <div class="htzxMain">
      <subFilter
        :filterList="filterList.category"
        :curFilterId="filterData.categoryId"
        @filterChange="filterChange($event, 'category')"
      >
        <div class="subFiltr-label">考试</div>
      </subFilter>
      <subFilter
        :filterList="filterList.type"
        :curFilterId="filterData.typeId"
        @filterChange="filterChange($event, 'type')"
        filterType="type"
      >
        <div class="subFiltr-label">分类</div>
      </subFilter>
      <subFilter
        :filterList="filterList.province"
        :curFilterId="filterData.province"
        @filterChange="filterChange($event, 'province')"
      >
        <div class="subFiltr-label">地区</div>
      </subFilter>
    </div>
  </div>
  <div class="courseList-Container">
    <div class="htzxMain">
      <div class="courseList-Container-title clearfix">
        <h2>全部课程</h2>
        <subSort :orderType="filterData.orderType" @sortChange="sortChange" />
      </div>
      <div class="courseList-Container-box clearfix">
        <course
          :courseInfo="item"
          v-for="item in courseData"
          :key="item.classId"
        />
      </div>
      <listLoading
        @infinite="getCourseData"
        :loading="loading"
        :finished="finished"
      />
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import subFilter from "@/components/subFilter.vue";
import subSort from "./components/subSort.vue";
import { subFilterData, typeFilterData, courseListData } from "@/api/course.js";

//考试与地区分类列表
const filterList = reactive({
  category: [],
  type: [],
  province: [],
});
const typeFilterlist = (categoryId) => {
  typeFilterData({
    categoryId,
    subject: 1000,
  }).then((res) => {
    filterList.type = res.data;
    filterData.typeId = res.data[0].id;
  });
};
subFilterData().then((res) => {
  filterList.category = res.data.category;
  filterList.province = res.data.province;
  let categoryId = ref(null);
  categoryId = filterList.category[0] && filterList.category[0].key;
  typeFilterlist(categoryId);
});

//筛选项当前选中值
let filterData = reactive({
  categoryId: 1000,
  typeId: 1000,
  province: 1000,
  orderType: 0,
});

//路由赋值
const route = useRoute();
if (Object.values(route.params).length > 1) {
  filterData.categoryId = route.params.categoryId;
  filterData.typeId = route.params.cateId;
  filterData.province = route.params.provinceId;
}

//筛选项点击
const filterChange = (data, type) => {
  if (type == "category") {
    filterData.categoryId = data;
    typeFilterlist(data);
  } else if (type == "type") {
    filterData.typeId = data;
  } else if (type == "province") {
    filterData.province = data;
  }
};

//排序组件
const sortChange = (data) => {
  filterData.orderType = data;
};

//监听筛选项变化获取课程列表
let courseData = ref([]);
let page = ref(1);
let loading = ref(true);
let finished = ref(false);
watch(
  () => ({ ...filterData }),
  (nv, ov) => {
    courseData.value = [];
    page.value = 1;
    finished.value = false;
    getCourseData()
  }
);

//下拉刷新
const getCourseData = () => {
  loading.value = true;
  courseListData({ ...filterData, page: page.value }).then((res) => {
    if (res.data.data && res.data.data.length > 0) {
      courseData.value.push(...res.data.data);
      page.value++;
      if (res.data.to === res.data.total) {
        finished.value = true;
      }
    } else {
      finished.value = true;
    }
    loading.value = false;
  });
};
</script>

<style scoped lang="less">
.course-filter {
  margin-top: 1px;
  padding: 32px 0 16px;
  background: #f7f8fb;
  .subFiltr-label {
    float: left;
    padding-right: 16px;
    width: 30px;
    height: 100%;
    color: #999;
    text-align: left;
    flex-shrink: 0;
    &.screen_active {
      font-size: 14px;
      color: #ff4e45;
      background: #ffedec;
    }
  }
}
.courseList-Container {
  padding: 30px 0 44px;
  &-title {
    padding-bottom: 22px;
    line-height: 32px;
    h2 {
      float: left;
      font-size: 24px;
      color: #170101;
    }
  }
  &-box {
    :deep(.courseInfo) {
      &:nth-of-type(4n) {
        margin-right: 0;
      }
    }
  }
}
</style>