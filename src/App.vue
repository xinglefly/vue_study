<template>
  <div id="app">
    <app-header></app-header>
    <router-link class="link" to="/account">
      <label v-show="!logined" @click="test">账户管理</label>
    </router-link>
    <router-link class="link" to="/goodlist">商品列表</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header";

export default {
  name: "app",
  data() {
    return {
      logined: false
    };
  },
  methods: {
    test(){
      console.log("info:"+this.$store.state.info)
      this.$store.commit('update')
      this.$store.commit('subTransmit', '123')
    }
  },
  components: {
    "app-header": header
  }
};
</script>

<style>
#app {
  margin: 0;
  padding: 0;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.link {
  padding-top: 10px;
  margin-left: 20px;
  font-size: 20px;
}
</style>
