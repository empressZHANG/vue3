import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { findBanner, getCategoryCourse } from '@/api/home.js'

export const useLazyData=(cateId)=>{
    const target = ref(null);
    const swipers = ref([]);
    const courseList = ref([]);
    const { stop } = useIntersectionObserver(
        target,
        ([{isIntersecting}],observerElement) => {
            if(isIntersecting){
                stop()
                findBanner({cateId}).then(res=>{
                    swipers.value = res.data.filter(item=>item.status)
                })
                getCategoryCourse({cateId}).then(res=>{
                    courseList.value = res.data.filter((item,index)=>index<6)
                })
            }
        }
    )
    return { target ,swipers, courseList }
}