<template>
  <div>
    <h2> Pinia </h2>
    <div>
      <button class="btn btn-primary mx-2" @click="store.increment">store.increment</button>
      <button class="btn btn-primary mx-2" @click="store.decrement">store.decrement</button>
    </div>
    <div>counter {{ counter }}</div>
    <div>double {{ double }}</div>

    <DemoStoresShare></DemoStoresShare>
  </div>
</template>

<style scoped></style>

<script setup>
import DemoStoresShare from '@/components/DemoStoresShare.vue'
import { useCounterStore } from '../stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()
const { counter, double } = storeToRefs(store) // 重點！要用 storeToRefs 才會有響應


</script>