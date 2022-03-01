//用户模块、
export default {
    namespaced: true,
    state() {
        return {
            //用户信息
            profile: {
                userName: '',
                userId: '',
                userMobile: '',
                ht_token: ''
            }
        }
    },
    mutations: {
        setUser(state, payload) {
            state.profile = payload
        }
    }
}