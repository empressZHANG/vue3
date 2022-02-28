import {
    createStore
} from 'vuex'

const moduleA = {
    state: {
        userName: 'moduleA'
    },
    getters: {
        newName(state) {
            return state.userName + '!!!!'
        }
    }
}
const moduleB = {
    namespaced: true,
    state: {
        userName: 'moduleB'
    },
    getters: {
        newName(state) {
            return state.userName + '!!!!'
        }
    }
}

export default createStore({
    state: {
        userName: 'empress'
    },
    getters: {
        newName(state) {
            return state.userName + 'lily'
        }
    },
    mutations: {
        updateName(state) {
            state.userName = 'zhanglei'
        }
    },
    actions: {
        updateName(ctx) {
            setTimeout(() => {
                ctx.commit('updateName')
            }, 2000)
        }
    },
    modules: {
        moduleA,
        moduleB
    }
})