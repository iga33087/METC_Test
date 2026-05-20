<template>
  <div class="home">

    <el-dialog v-model="showFormBox" :title="formIsAdd ? '新增帳號':'編輯帳號'" width="500">
      <el-form :model="formData" label-width="auto" style="max-width: 600px">
        <el-form-item label="姓名">
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label="電子郵件">
          <el-input v-model="formData.email" />
        </el-form-item>
        <el-form-item label="角色">
          <el-select v-model="formData.roleLevel">
            <el-option label="ADMIN" value="ADMIN" />
          </el-select>
        </el-form-item>
        <el-form-item label="狀態">
          <el-select v-model="formData.status">
            <el-option label="ON" value="ON" />
            <el-option label="OFF" value="OFF" />
          </el-select>
        </el-form-item>
      </el-form>
      <div class="d-flex align-items-center justify-content-end">
        <el-button @click="showFormBox=false">取消</el-button>
        <el-button type="primary" @click="sub">提交</el-button>
      </div>
    </el-dialog>

    <div class="searchBar mb-4">
      <el-input v-model="input" style="width: 240px" placeholder="搜尋" class="me-2" />
      <el-button type="primary" @click="userCardAdd">新增帳號</el-button>
    </div>
    <el-row :gutter="20" class="mb-4">
      <el-col :xl="8" :lg="8" :md="24">
        <div class="homeCard mb-4">
          <div class="homeCardTitle">總帳號數</div>
          <div class="homeCardValue">{{tableData.length}}</div>
        </div>
      </el-col>
      <el-col :xl="8" :lg="8" :md="24">
        <div class="homeCard mb-4">
          <div class="homeCardTitle">啟用中</div>
          <div class="homeCardValue">{{total['ON']}}</div>
        </div>
      </el-col>
      <el-col :xl="8" :lg="8" :md="24">
        <div class="homeCard mb-4">
          <div class="homeCardTitle">已停用</div>
          <div class="homeCardValue">{{total['OFF']}}</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col v-for="(item,index) in tableData" :key="index" :xl="8" :lg="8" :md="24">
        <UserCard :data="item" @edit="userCardEdit" @del="userCardDel" />
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
import UserCard from '../components/UserCard.vue'
import api from '../assets/js/api'

const total=computed(()=> {
  let res={ON:0,OFF:0}
  for(let item of tableData.value) {
    if(item.status==='ON') res['ON']++
    else res['OFF']++
  }
  return res
})

const tableData=ref([])

const formIsAdd=ref(true)
const showFormBox=ref(false)
const formData=ref({
  name: "",
  email: "",
  roleLevel: "",
  status: ""
})

async function getInit() {
  tableData.value=await api.getAccounts()
}

async function userCardAdd() {
  formData.value={
    name: "",
    email: "",
    roleLevel: "",
    status: ""
  }
  formIsAdd.value=true
  showFormBox.value=true
}

async function userCardEdit(e) {
  formData.value=e
  console.log(1111,e.email)
  formIsAdd.value=false
  showFormBox.value=true
}

async function userCardDel(e) {
  if(confirm(`確定要刪除${e.name}？`)) {
    await api.delAccount(e.id)
    await getInit()
  }
}

async function sub() {
  if(formIsAdd.value) {
    await api.createAccount(formData.value)
  }
  else {
    await api.updateAccount(formData.value)
  }
  await getInit()
  showFormBox.value=false
}

getInit()
</script>