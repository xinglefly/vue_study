import Vue from 'vue'
import Vuex from 'vuex'
import { LOGIN_INFO } from './constant'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
        username: '',
        count: 0
    },
    mutations: {
        [LOGIN_INFO](state, obj) {
            console.log('test....')
            state.login = true
            state.username = obj
            // localStorage.setItem(state.login, state.username)
        },
        exit(state) {
            state.login = false
            state.username = ''
        }
    },
    getters: {
        loginStatus: state => state.login,
        currentName: state => state.username
    }
})

export default store