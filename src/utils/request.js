import axios from 'axios'
import store from '../store'
import router from '../router'

export const baseURL = '//testapi.huatu.com'
export const panguURL = 'https://devpangu-api.htexam.com'

const instance = axios.create({
    baseURL,
    timeout: 5000
})

instance.interceptors.request.use(config => {
    //拦截业务逻辑
    const {
        profile
    } = store.state.user
    if (profile.ht_token) {
        config.headers.token = `${profile.ht_token}`
    }
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(res => {
    return res.data
}, err => {
    //401
    if (err.response && err.response.status === 401) {
        //打卡登录弹框
        store.commit('user/setUser', {});
        //组件里头：$router.fullPath
        //js模块中：router.currentRoute.fullPath vue3  router.currentRoute 是ref响应式数据
        const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
        router.push('/login?redirectUrl=' + fullPath)
    }
    return Promise.reject(err)
})

export const request = (url, method, submitData) => {
    return instance({
        url,
        method,
        //[] 设置动态的key，写js表达式，js表达式的执行结果当做key
        [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
    })
}