<template>
  <div>
    DemoStoreShare: {{ counter }}
  </div>
</template>

<style scoped>
</style>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
const { counter } = storeToRefs(store) // 重點！要用 storeToRefs 才會有響應

</script>