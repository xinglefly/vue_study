import VueRouter from "vue-router";

import account from "./components/Account";
import goodList from "./components/Goodlist"

import login from "./components/Login";
import register from "./components/Register"


const router = new VueRouter({
  routes: [
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodList', component: goodList }
  ]
})

export default router