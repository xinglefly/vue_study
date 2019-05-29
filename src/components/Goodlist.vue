<template>
  <div>
    <el-table border stripe :data="goodlist" style="width:100%">
      <el-table-column prop="id" label="ID" style="width:180"></el-table-column>
      <el-table-column prop="type" label="类型" style="width:180"></el-table-column>
      <el-table-column prop="name" label="名称" style="width:180"></el-table-column>
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

<style scoped>
</style>
