<template>
  <div>
    <div>
      <el-input v-model="name" placeholder="请输入用户名"></el-input>
    </div>
    <div>
      <el-input v-model="password" show-password placeholder="请输入密码"></el-input>
    </div>
    <div>
      <el-button type="primary" round @click="login">登录</el-button>
    </div>
  </div>
</template>


<script>
import EventBus from './EventBus'
import { LOGIN_INFO } from '../constant.js'

export default {
  data() {
    return {
      name: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.name === '' || this.password === '') {
        alert("用户名和密码不能为空");
        return;
      }
      if (this.name === 'admin' && this.password === '1') {
        alert("登录成功");
        // this.$emit("func", true);
        this.$store.commit(LOGIN_INFO, this.name);
        // this.$router.push({ path: "/welcome" });
        console.log('login->', this.name, this.password)
        this.$router.push({
          name: 'welcome'
        });
        EventBus.$emit('LOGIN', this.name)
        return;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  margin: 5px;
}
.el-input {
  width: 200px;
}
</style>
