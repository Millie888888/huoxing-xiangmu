<template>
  <div class="header">
    <el-breadcrumb :separator-icon="ArrowRight">
      <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="$router.path === '/welcome'"
        >欢迎体验Vue3全栈课程</el-breadcrumb-item
      >
      <el-breadcrumb-item v-else>{{ crumbs.title }}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-icon><Bell /></el-icon>
    <el-dropdown
      trigger="click"
      style="cursor: pointer"
      class="admin"
      @command="handleCommand"
    >
      <span class="el-dropdown-link"> admin</span>

      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item></el-dropdown-item>
          <el-dropdown-item command="logOut"> 退出登录 </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup>
import { Bell } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { watch, reactive } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const store = useStore()
const router = useRouter()
const route = useRoute()

function handleCommand(val) {
  if (val === 'logOut') logOut()
}

function logOut() {
  console.log(111)
  store.dispatch('user/logOut')
  router.push('/login')
}

const crumbs = reactive({
  title: ''
})

watch(
  () => route.matched,
  (newVal, oldVal) => {
    console.log(newVal)
    // console.log(oldVal)
    if (newVal[0].path !== '/login') {
      crumbs.title = newVal[1].meta.title
    }
  },
  { immediate: true }
)
// console.log(crumbs)
</script>
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #fff;
  position: relative;
  border-bottom: 1px solid #eee;
  overflow: hidden;
}
.font {
  color: #40aaff;
  font-size: 14px;
}
.el-icon {
  font-size: 16px;
  position: absolute;
  top: 20px;
  right: 100px;
}
.admin {
  position: absolute;
  top: 22px;
  right: 50px;
}
.el-breadcrumb {
  margin-top: 20px;
}
</style>
