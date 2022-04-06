# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

项目介绍：
vue3.0+vite 重构pc平台
解决 Vue2.0 页面加载空白，性能优化

vue2.0 与 vue3.0的区别

1. vue2 生命周期：
   beforeCreate -> created ->  beforeMount ->  mounted  ->   beforeUpdate ->  update  ->   beforeDestroy  ->   destroyed  
   keep-alive专属:
   activited deactivated

   vue3 生命周期：
   setup(创建实例前) ->  onBeforeMount(挂载Dom前) -> onMounted(挂载dom后) -> onBeforeUpdate(更新组件前) -> onUpdated(更新组件后) -> onBeforeUnmount(卸载销毁前) -> onUnmounted(卸载销毁后)

2. vue2.0 需要根元素，vue3.0可以是代码片段(fragment)
3. vuex 没有map类型的方法 
4. vue3.0 router.currentRoute 是ref响应式数据 router.currentRoute.value.fullPath

5. vue2 v-model 双向绑定
   v-model ====> :value + @input
   <my-component :value="msg" @input="msg = $event.target.value"></my-component>

   vue3 v-model 双向绑定
   v-model ====> :modelValue + @update:modelValue
   <my-component :modelValue="msg" @update:modelValue="msg = $event"></my-component>

6. vue3 setup语法糖 name自定义 需要npm i vite-plugin-vue-setup-extend -D  