<template>
  <div class="sub-filter clearfix">
    <slot />
    <div class="sub-filter-list">
      <template v-if="filterType == 'type'">
        <span
          v-for="item in filterList"
          :key="item.key"
          :class="[
            curFilterId == item.id
              ? 'sub-filter-item screen_active'
              : 'sub-filter-item',
          ]"
          @click="changeFilter(item)"
          >{{ item.title }}</span
        >
      </template>
      <template v-else>
        <span
          v-for="item in filterList"
          :key="item.key"
          :class="[
            curFilterId == item.key
              ? 'sub-filter-item screen_active'
              : 'sub-filter-item',
          ]"
          @click="changeFilter(item)"
          >{{ item.name }}</span
        >
      </template>
    </div>
  </div>
</template>
<script setup>
import { ref, watch } from "vue";
const props = defineProps({
  filterList: {
    type: Array,
    default: () => [],
  },
  filterType: {
    type: String,
    default: "",
  },
  curFilterId: {
    type: [String, Number],
    default: 1000,
  },
});

const emit = defineEmits(["filterChange"]);

//判断当前选中项
const changeFilter = (item) => {
  if (props.filterType === "type") {
    emit("filterChange", item.id);
  } else {
    emit("filterChange", item.key);
  }
};
</script>

<style scoped lang="less">
.sub-filter {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  line-height: 32px;
  &-item {
    display: inline-block;
    margin-bottom: 12px;
    padding: 0 12px;
    border-radius: 4px;
    color: #333;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    &.screen_active {
      font-size: 14px;
      color: #ff4e45;
      background: #ffedec;
    }
  }
}
</style>