import Vue from 'vue'
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from "./router";
import store from "./store";
import { nameFilter,dateFormat } from "./filter";

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.use(Element)
Vue.use(VueRouter)

import {
  Input,
  Button,
  Table,
  TableColumn,
} from 'element-ui'


Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)

// router.router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => {
//     console.log("record:-->"+record.meta.auth)
//     return record.meta.auth
//   })){

//   }
// })


new Vue({
  render: h => h(App),
  router,
  store,
  filters:[
    nameFilter,
    dateFormat
  ]
}).$mount('#app')
