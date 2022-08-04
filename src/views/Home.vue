<template>
  <AppHeader />
  <h1>首頁</h1>
  <div class="container py-4 px-3 mx-auto">
    <h1>Hello, Bootstrap and Vite!</h1>
    <button class="btn btn-primary">Primary button</button>
  </div>
  <el-card class="box-card" style="margin:5em">
    <template #header>
      <div class="card-header">
        <span>Element Plus</span>
        <el-button class="button" text>Operation button</el-button>
      </div>
    </template>
    <div v-for="n in 4" :key="n" class="text item">{{ 'List item ' + n }}</div>
    <el-icon>
      <Edit />
    </el-icon>
  </el-card>
</template>


<script setup>
import { onMounted } from 'vue'
import { ElNotification } from 'element-plus'
import AppHeader from './Header.vue'

onMounted(() => {
  ElNotification({
    message: '通知',
    type: 'warning',
    duration: 0,
    // position: 'bottom-right',      
  })
})

</script>
