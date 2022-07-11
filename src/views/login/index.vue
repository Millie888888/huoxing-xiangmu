<template>
  <div class="box">
    <h1>刘新萌研发的二臂后台</h1>
    <el-form ref="from" :model="fromLogin" :rules="rules">
      <el-form-item prop="userName">
        <el-input v-model="fromLogin.userName" placeholder="请输入用户名">
          <template #prefix>
            <el-icon><User /></el-icon>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item prop="userPwd">
        <el-input v-model="fromLogin.userPwd" placeholder="请输入密码">
          <template #prefix>
            <el-icon><View /></el-icon>
          </template>
        </el-input>
      </el-form-item>
    </el-form>
    <el-button type="primary" class="btn" @click="loginSubmit">登录</el-button>
  </div>
</template>
<script setup>
import { User, View } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const from = ref()
const fromLogin = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, message: '密码不能为空', trigger: 'blur' }]
})

const loginSubmit = async () => {
  if (!from.value) return
  await from.value.validate(async (valid) => {
    if (valid) {
      const response = await store.dispatch('user/login', fromLogin)
      // console.log(response)
      if (response.data.data.token) {
        router.push('/')
      }
    }
  })
}
</script>
<style scoped lang="scss">
.box {
  position: absolute;
  width: 500px;
  height: 400px;
  align-items: center;
  text-align: center;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  // background-color: pink;
  border: 1px solid gainsboro;
  background-color: whitesmoke;
  h1 {
    margin-top: 70px;
  }
}
.el-form-item {
  width: 300px;
  margin: auto;
}
.el-input {
  height: 30px;
  margin: 0 auto;
  margin-top: 15px;
}
.btn {
  width: 300px;
  margin-top: 20px;
}
</style>
