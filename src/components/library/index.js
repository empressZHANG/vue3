import carousel from './carousel.vue'
import Homemore from './Homemore.vue'
import course from './course.vue'
import skeleton from './skeleton.vue'
import HomeSkeleton from './HomeSkeletion.vue'
import listLoading from './listLoading.vue'
import defaultImg from '../../../static/images/htzx_mod_loading.png'

export default {
    install(app) {
        // 在app上进行扩展，app提供 component directive 函数
        // 如果要挂载原型 app.config.globalProperties 方式
        app.component(skeleton.name, skeleton)
        app.component(carousel.name, carousel)
        app.component(Homemore.name, Homemore)
        app.component(course.name, course)
        app.component(HomeSkeleton.name, HomeSkeleton)
        app.component(listLoading.name,listLoading)
        //自定义指令-图片懒加载
        defineDirective(app)
    }
}

//自定义指令
const defineDirective = (app) =>{
   // 定义图片懒加载指令 v-lazy
   app.directive('lazy' ,{
       //vue2.0 inserted
       //vue3.0 mounted
       mounted(el,binding){
          const observe = new IntersectionObserver(([{ isIntersecting }])=>{
              if(isIntersecting){
                observe.unobserve(el);//停止观察
                el.onerror=()=>{
                    el.src = defaultImg
                    el.setAttribute('style','width:64px;height:64px')
                }
                el.src = binding.value
              }
          },{
              threshold:0.01
          })
          observe.observe(el);//开始观察
       }

   })
}