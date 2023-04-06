<template>
  <AppHeader />
  <div class="container">
    <h1>Hello, Bootstrap and Vite!</h1>

    <el-card class="m-3">
      <DemoStores></DemoStores>
    </el-card>
    <el-card class="m-3">
      <template #header>
        <div class="card-header">
          <span>Element Plus</span>
          <el-button class="button" @click="showMsg">ELNotification</el-button>
        </div>
      </template>
      <div v-for="n in 4" :key="n" class="text item">{{ 'List item ' + n }}</div>
      <el-icon>
        <Edit />
      </el-icon>
    </el-card>
  </div>
</template>


<script setup>
import { ElNotification } from 'element-plus'
import AppHeader from '@/components/Header.vue'
import DemoStores from '@/components/DemoStores.vue'

const showMsg = () => ElNotification({
  message: '通知',
  type: 'warning',
  duration: 0,
  // position: 'bottom-right',      
})

</script>
