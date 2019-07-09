import VueRouter from "vue-router";

import account from "./components/Account";
import goodList from "./components/GoodList"

import login from "./components/Login";
import register from "./components/Register"
import welcome from "./components/Welcome";


const router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register },
      ]
    },
    {
      path: '/goodList',
      component: goodList,
      props: {
        id: 'chenzx8',
        username: 'xingle'
      }
    },
    // { path: '/welcome', component: welcome },
    { path: '/welcome', name: 'welcome', component: welcome },
  ],
  mode: 'history'
})

export default router