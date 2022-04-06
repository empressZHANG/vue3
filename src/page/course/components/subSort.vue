<template>
  <div class="sort-box">
    <a
      :class="[orderType == 0 ? 'sort-box-item active' : 'sort-box-item']"
      href="javascript:;"
      @click="changeSort(0)"
      >综合排序</a
    >
    <a
      :class="[orderType == 3 ? 'sort-box-item active' : 'sort-box-item']"
      href="javascript:;"
      @click="changeSort(3)"
      >最新</a
    >
    <a
      :class="[
        orderType == 1 || orderType == 2
          ? 'sort-box-item active'
          : 'sort-box-item',
      ]"
      href="javascript:;"
      @click="changeSort('price')"
    >
      价格
      <i :class="[orderType == 1 ? 'up active' : 'up']" />
      <i :class="[orderType == 2 ? 'down active' : 'down']" />
    </a>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const props = defineProps({
  orderType: {
    type: [Number, String],
    default: 0,
  },
});

const emits = defineEmits(["sortChange"]);

//orderType 取值
let sortMethod = ref(null);
const changeSort = (data) => {
  if (data === "price") {
    if (sortMethod.value == "up" || sortMethod.value == null) {
      sortMethod.value = "down";
      emits("sortChange", 1);
    } else {
      sortMethod.value = "up";
      emits("sortChange", 2);
    }
  } else {
    sortMethod.value = "up";
    emits("sortChange", data);
  }
};
</script>
<style scoped lang="less">
.sort-box {
  position: relative;
  float: right;
  color: #170101;
  cursor: pointer;
  &-item {
    position: relative;
    display: inline-block;
    padding: 0 15px;
    color: #666;
    &.active {
      color: #ff4e45;
    }
    .up,
    .down {
      content: "";
      position: absolute;
      right: 0;
      width: 0;
      height: 0;
      border: 5px solid transparent;
      font-size: 0;
    }
    .up {
      top: 5px;
      z-index: 2;
      border-bottom-color: #a1a1a1;
      color: #666;
      &.active {
        border-bottom-color: #ff4e45;
      }
    }
    .down {
      bottom: 5px;
      border-top-color: #a1a1a1;
      color: #666;
      &.active {
        z-index: 2;
        border-top-color: #ff4e45;
      }
    }
  }
}
</style>
