import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        info: ''
    },
    mutations: {
        update(state) {
            state.info = '哈哈'
        },
        subTransmit(state, obj) {
            console.log(state + "---" + obj)
        }
    },
    getters: {
        optInfo: function (state) {
            return "从getter中获取的" + state.info
        }
    }
})

export default store