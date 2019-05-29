<template>
  <div>
    <el-table border stripe :data="goodlist">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="type" label="类型"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      goodlist: [
        { id: 1, type: "手机", name: "Iphone XS" },
        { id: 2, type: "手机", name: "Iphone 6S" },
        { id: 3, type: "电脑", name: "Mac air" },
        { id: 4, type: "电脑", name: "Mac pro" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  padding: 0 20px;
}
.el-table--border,
.el-table--group {
  border: 1px solid #ebeef5;
  width: 100%;
}
</style>
