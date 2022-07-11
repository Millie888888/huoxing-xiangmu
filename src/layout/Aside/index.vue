<template>
  <div>
    <div class="div">
      <img src="http://manager.9yuecloud.com/img/logo.384b81fb.png" alt="" />
      <p>Manager</p>
    </div>

    <menu-tree></menu-tree>
  </div>
</template>
<script setup>
import MenuTree from './MenuTree.vue'
import { useStore } from 'vuex'
const store = useStore()
const getuserInfo = () => {
  store.dispatch('user/menu')
}
getuserInfo()
</script>
<style lang="scss" scoped>
.div {
  height: 50px;
  width: 100%;
  align-items: center;
  display: flex;
}
div > img {
  width: 32px;
  height: 32px;
  margin-left: 20px;
  margin-right: 10px;
}
</style>
