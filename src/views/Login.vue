<template>
  <div class="login">
    <div class="loginBox">
      <div class="loginBoxInner">
        <div class="text-center fs-4 mb-4">歡迎回來</div>
        <div class="text-center mb-4">請登入您的帳號以繼續</div>
        <el-form :model="formData" label-width="auto" style="max-width: 600px">
          <el-form-item label="電子郵件">
            <el-input v-model="formData.email" />
          </el-form-item>
          <el-form-item label="密碼">
            <el-input v-model="formData.password" />
          </el-form-item>
        </el-form>
        <div class="d-flex justify-content-between align-items-center">
          <div>
            <el-checkbox v-model="checked1" label="記住我" size="large" />
          </div>
          <a href="">忘記密碼？</a>
        </div>
        <div class="mb-2">
          <el-button class="w-100" type="primary" size="large" @click="login">登入</el-button>
        </div>
        <div>
          <el-alert title="提示：輸入任意電子郵件和密碼即可登入" type="primary" :closable="false" />
        </div>
        <div>
            
        </div>
      </div>
      <div class="loginBoxRegister">還沒有帳號？ <a href="">立即註冊</a></div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import api from '../assets/js/api'

const formData=ref({
  email:'',
  password:''
})

async function login() {
  location.href="./"
}
</script>