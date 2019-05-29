<template>
  <div>
    <el-input v-model="name" size="medium" placeholder="请输入用户名"></el-input>
    <el-input v-model="password" size="medium" show-password placeholder="请输入密码"></el-input>
    <el-button type="primary" round @click="login">主要按钮</el-button>
  </div>
</template>


<script>


export default {
  data() {
    return {
      name: "",
      password: ""
    };
  },
  methods: {
    login() {
      if (this.name == "" || this.password == "") {
        alert("用户名和密码不能为空");
        return;
      }
      if (this.name == "admin" && this.password == "1") {
        alert("登录成功");
        this.$emit("func", true);
        // this.$router.push({ path: "welcome" });
        return;
      }
    }
  },

};
</script>

<style scoped>
div {
  margin-top: 15px;
}
el-input {
  width: 130px;
  margin-bottom: 10px;
}
</style>
