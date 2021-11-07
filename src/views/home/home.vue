<template>
  <div style="height: 100%">
    <el-container class="container">
      <el-header class="header">
        <el-row type="flex" justify="space-between">
          <el-col :span="4" class="item1">
            l-x-y
          </el-col>
          <el-col :span="8" class="item2">
            lxy电商管理系统
          </el-col>
          <el-col :span="4" class="item3">
            <a>退出</a>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">Aside</el-aside>
        <el-main class="main">Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: [],
  methods: {
    
  }
}
</script>

<style scoped lang='less'>
.container {
  height: 100%;
  .header {
    background-color: antiquewhite;
  }
  .aside {
    background-color: aquamarine;
  }
  .main {
    background-color: cadetblue;
  }
}
.item1,.item2,.item3 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: azure;
  font-size: 30px;
  font-weight: 700;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.item1,.item3 {
  padding-top: 10px;
}
.item3 {
  font-size: 16px;
}
</style>