<template>
  <div>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#001121"
      text-color="#fff"
      router
    >
      <Item v-for="item in list" :key="item.path" :item="item"></Item>
    </el-menu>
  </div>
</template>
<script setup>
import Item from './Item.vue'

import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const list = computed(() => {
  return store.getters.menu.menuList
})
</script>
<style lang="less" scoped></style>
