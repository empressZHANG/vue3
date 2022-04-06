// https://vitejs.dev/config/

import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

const {
  resolve
} = require('path');


export default defineConfig({
  plugins: [vue(),VueSetupExtend()],
  //配置路径别名
  resolve:{
    alias:{
      '@':resolve(__dirname,'src')
    }
  },
  //配置全局样式
  css:{
    preprocessorOptions:{
      less:{
        charset:false,
        additionalData:'@import "@/assets/styles/variables.less";@import "@/assets/styles/mixins.less";'
      }
    }
  }
})