//分类模块
import {
    homeCategory
} from '@/api/constants'
import {
    findAllCategory
} from '@/api/home.js'
import {
    getInterestList
} from '@/api/member.js'
export default {
    namespaced: true,
    state() {
        return {
            //分类信息集合
            list: homeCategory.map(item => {
                return {
                    name: '',
                    cateKey: item
                }
            }),
            //会员考试类型集合
            interestList:[]
        }
    },
    mutations: {
        setList(state, payload) {
            state.list = payload
        },
        setInterestList(state, payload){
            state.interestList = payload
        }
    },
    actions: {
        async getList({
            commit
        }) {
            const data = await findAllCategory();
            const cateGoryData = data.data.filter((item, index) => {
                if (homeCategory.indexOf(item.cateKey) > -1) {
                    return item
                }
            })
            commit('setList', cateGoryData)
        },
        async getMemberInterestList({commit}){
            const data = await getInterestList();
            commit('setInterestList', data.data)
        }
    }
}