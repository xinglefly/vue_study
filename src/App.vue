<template>
  <div id="app">
    <app-header></app-header>
    <div class="option" v-show="this.$store.state.login">
      <p class="current">当前用户： {{$store.getters.currentName}}</p>
      <p class="exited" @click="exit">退出</p>
    </div>

    <router-link class="link" to="/account">
      <label v-show="!$store.getters.loginStatus">账户管理</label>
    </router-link>
    <router-link class="link" to="/goodlist">
      <label v-show="!$store.getters.loginStatus">商品列表</label>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import header from "./components/Header";

export default {
  name: "app",
  data() {
    return {};
  },
  methods: {
    exit() {
      this.$store.commit("exit");
      this.$router.push({ path: "/account" });
    }
  },
  components: {
    "app-header": header
  }
};
</script>


<style lang="scss" scoped>
$primary-color: blue;
$edge: 10px;
$font: 20px;

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

.option,
.current,
.exited {
  margin: 0;
  padding: 0;
}

.option {
  display: flex;
  justify-content: space-between;
  .current {
    font-size: $font;
    padding-left: $edge;
    padding-top: $edge;
    color: $primary-color;
  }
  .exited {
    font: $font;
    padding-right: $edge;
    padding-top: $edge;
    color: $primary-color;
  }
}

</style>
