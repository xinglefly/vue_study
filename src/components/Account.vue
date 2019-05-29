<template>
  <div>
    <router-link class="link" to="/account/login">
      <label>登录</label>
    </router-link>
    <router-link class="link" to="/account/register">
      <label>注册</label>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>


<style scoped>
.link {
  margin-left: 10px;
  color: black;
}
</style>
