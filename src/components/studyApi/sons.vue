<template>
  <div class="sonsContainer">
    <template v-if="!modelValue">
      孙组件：{{ money }} <button @click="fn">花钱</button>
    </template>
    <template v-else>
      孙组件：{{ modelValue }} <button @click="fn2">v-model语法糖</button>
    </template>
  </div>
</template>
<script setup>
import { inject } from "vue";

const money = inject("money");

const saleMoney = inject("saleMoney");
const fn = () => {
  saleMoney(80);
};

const props = defineProps({
  modelValue: String,
});
const emit = defineEmits(["update:modelValue"]);
const fn2 = () => {
  emit("update:modelValue", "触发v-model语法糖");
};
</script>
