import {createApp} from 'vue'
import App from '@/app.vue'
import router from '@/router'
import store from '@/store'
import ui from './components/library'
import aos from 'aos'

import '../node_modules/aos/dist/aos.css'
import '@/assets/styles/common.less'

createApp(App).use(store).use(router).use(ui).use(aos).mount('#app')

aos.init();