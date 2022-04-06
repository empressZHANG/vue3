import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const layout = () => import('@/page/Layout.vue');
const home = () => import('@/page/home/index.vue');
const course = () => import('@/page/course/index.vue')
const memberIndex = () => import('@/page/member/index.vue')

const routes = [{
    path: '/',
    component: layout,
    children: [{
        path: '/',
        component: home
    }, {
        path: '/kc/:categoryId/:cateId/:provinceId',
        component: course
    }, {
        path: '/member',
        component: memberIndex
    }]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        }
    }
})

export default router