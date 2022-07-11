<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><map-aside></map-aside></el-aside>
      <el-container>
        <el-header><map-header></map-header></el-header>
        <el-main><map-main></map-main></el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup>
import MapHeader from './Header'
import MapMain from './Main'
import MapAside from './Aside'
</script>
<style scoped lang="scss">
.el-aside {
  height: 100vh;
  background-color: #001121;
  color: #fff;
  font-size: 20px;
  // text-align: center;
  padding-top: 10px;
}
.el-header {
  height: 50px;
  align-items: center;
  line-height: 50px;
  font-size: 14px;
}
.el-main {
  background-color: whitesmoke;
  border: 0.5px solid gainsboro;
  font-size: 28px;
}
</style>
