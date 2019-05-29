import Vue from 'vue'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from "./router";
import store from "./store";

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Element)
Vue.use(VueRouter)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
