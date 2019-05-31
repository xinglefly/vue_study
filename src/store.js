import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        login: false,
        username: '',
    },
    mutations: {
        login(state, obj) {
            state.login = true
            state.username = obj
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