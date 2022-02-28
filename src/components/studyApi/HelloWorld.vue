<script>
import { watch, ref } from "vue";
export default {
  name: "son",
  props: ["count"],
  setup(props, { emit }) {
    const newCount = ref(0);
    watch(
      () => props.count,
      (nv, ov) => {
        newCount.value = nv;
      }
    );
    const changeFaterCount = () => {
      emit("changeFatherCount", 50);
    };
    return { newCount, changeFaterCount };
  },
};
</script>

<template>
  <div class="helloWrold">
    {{ newCount }}
    <button @click="changeFaterCount">改变父组件count的值为：50</button>
  </div>
</template>
