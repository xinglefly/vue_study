<template>
  <div>
    <p>添加学籍</p>

    <div class="add">
      <el-input v-model="id" placeholder="请输入学籍"></el-input>
      <el-input v-model="name" placeholder="请输入姓名" @keyup.enter.native="add"></el-input>
      <el-button type="primary" @click="add">添加</el-button>
      <label class="search">
        搜索名称关键字：
        <el-input v-model="keywords" v-focus v-color="'red'"></el-input>
        <!-- <input type="text" v-focus v-color="'red'"> -->
      </label>
    </div>

    <div class="table">
      <el-table :data="search(keywords)">
        <el-table-column label="学籍">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.name | nameFilter('*')}}</span>
          </template>
        </el-table-column>

        <el-table-column label="日期">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.cTime | dateFormat }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="del(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";

//定义全局指令
Vue.directive("focus", {
  inserted: el => el.querySelector("input").focus()
});

//定义全局指令颜色
Vue.directive("color", {
  bind: (el, binding) => (el.style.color = binding.value)
});

//定义过滤时间

export default {
  data() {
    return {
      id: '',
      name: '',
      keywords: '',
      users: [
        { id: 1, name: '张三', cTime: new Date().toLocaleDateString() },
        { id: 2, name: '李四', cTime: new Date().toLocaleDateString() },
        { id: 3, name: '王五', cTime: new Date().toLocaleDateString() },
        { id: 4, name: '王宇轩', cTime: new Date().toLocaleDateString() }
      ]
    };
  },
  methods: {
    add() {
      if (this.id == "" || this.name == "") {
        alert("请检查输入是否正确");
        return;
      }

      let user = {
        id: this.id,
        name: this.name,
        cTime: new Date().toLocaleDateString()
      };
      this.users.push(user);
      this.id = this.name = "";
    },
    del(id) {
      console.log("id-->" + id);
      var index = this.users.findIndex(item => {
        if (item.id == id) return true;
      });

      this.users.splice(index, 1);
    },
    search(keywords) {
      return this.users.filter(item => {
        if (item.name.includes(keywords)) {
          return item;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$font_30: 30px;
$font_22: 22px;
$font_20: 20px;
$padding-20: 20px;
$color_black: black;

div p {
  font-size: $font_30;
  color: $color_black;
}

.add {
  float: left;
  padding-left: 80px;
  .el-input {
    width: 180px;
    padding-left: $padding-20;
  }
  .el-button {
    width: 100px;
    margin-left: $padding-20;
  }
  .search {
    margin-left: $padding-20;
    .el-input {
      padding-left: 0px;
    }
  }
}

.table {
  width: 60%;
  padding-left: 100px;
}
</style>
