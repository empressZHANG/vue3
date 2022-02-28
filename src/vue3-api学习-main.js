import { createApp } from 'vue'
import App from './App.vue'
import store from './store/vue3-api学习-index'

const app = createApp(App)

app.mixin({
    methods:{
        sayHelloKitty(){
            console.log(this.$el,'全局混入-hellow kitty')
        }
    },
    mounted(){
       this.sayHelloKitty();
    }
})

app.use(store).mount('#app')
