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
        loginStatus: function (state) {
            return state.login
        },
        currentName: function (state) {
            return state.username
        }
    }
})

export default store