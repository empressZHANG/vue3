import carousel from './carousel.vue'
import Homemore from './Homemore.vue'
import course from './course.vue'

export default{
    install(app){
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component(carousel.name,carousel)
        app.component(Homemore.name,Homemore)
        app.component(course.name,course)
    }
}