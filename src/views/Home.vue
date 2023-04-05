<template>
  <AppHeader />
  <div class="container">
    <h1>Hello, Bootstrap and Vite!</h1>

    <el-card class="m-3">
      <h2> Pinia </h2>
      <div>
        <button class="btn btn-primary mx-2" @click="store.increment">store.increment</button>
        <button class="btn btn-primary mx-2" @click="store.decrement">store.decrement</button>
      </div>
      <div>store.counter {{ store.counter }}</div>
      <div>store.double {{ store.double }}</div>
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
import { onMounted } from 'vue'
import { ElNotification } from 'element-plus'
import AppHeader from './Header.vue'
import { useCounterStore } from '../store/counter';

const store = useCounterStore()

onMounted(() => {

})

const showMsg = () => ElNotification({
  message: '通知',
  type: 'warning',
  duration: 0,
  // position: 'bottom-right',      
})

</script>
