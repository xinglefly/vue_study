<template>
  <div>
    <!-- <p>当前用户</p> -->

    <router-link class="link" to="/account/login" @func="transferData">
      <label >登录</label>
    </router-link>
    <router-link class="link" to="/account/register">注册</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    transferData(data) {
      console.log("data-->" + data);
      // return (this.logined = data);
    }
  }
};
</script>


<style scoped>
.link {
  margin-left: 10px;
  color: black;
}
</style>
