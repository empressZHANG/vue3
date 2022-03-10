import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

const layout = () => import('@/page/Layout.vue');
const home = () => import('@/page/home/index.vue');
const memberIndex = () =>import('@/page/member/index.vue')

const routes = [{
    path: '/',
    component: layout,
    children: [{
        path: '/',
        component: home
    },{
        path: '/member',
        component: memberIndex        
    }]
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router