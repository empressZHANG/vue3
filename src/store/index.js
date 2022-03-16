import {
    createStore
} from 'vuex'
import createpersistedState from 'vuex-persistedstate'


import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
    state: {

    },
    getters: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        cart,
        user,
        category
    },
    plugins: [
        //默认存储再localStorge
        createpersistedState({
            key: 'huatu-pc-store',
            paths: ['user', 'cart']
        })
    ]
})