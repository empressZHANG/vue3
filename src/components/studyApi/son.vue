<template>
  <div class="sonContainer">
    子组件：{{ money }}
    <sons style="display:block"/>
  </div>
</template>
<script setup>
import { inject } from "vue";
import sons from './sons.vue'

const money = inject("money");
</script>
