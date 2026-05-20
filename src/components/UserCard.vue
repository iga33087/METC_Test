<template>
  <div class="userCard">
    <div class="userCardBox">
      <div class="userCardBoxTitle">
        <div class="userCardBoxTitleName">{{data.name}}</div>
        <div class="userCardBoxTitleStatus" :style="{'background-color':data.status==='ON' ? 'oklch(.723 .219 149.579)':'oklch(.707 .022 261.325)'}">{{data.status==='ON' ? '啟用':'停用'}}</div>
      </div>
      <div class="userCardBoxInfo">
        <div class="userCardBoxInfoItem">{{data.email}}</div>
        <div class="userCardBoxInfoItem">{{data.roleLevel}}</div>
        <div class="userCardBoxInfoItem">{{global.timeFormat(data.createdAt,'YYYY-MM-DD')}}</div>
      </div>
      <div class="d-flex align-items-center justify-content-end">
        <el-button type="warning" @click="edit">編輯</el-button>
        <el-button type="danger" @click="del">刪除</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import global from '../assets/js/global'
const props = defineProps(['data'])
const emit = defineEmits(['edit','del'])

function edit() {
  emit('edit', JSON.parse(JSON.stringify(props.data)))
}

function del() {
  emit('del', JSON.parse(JSON.stringify(props.data)))
}
</script>