import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('useCounterStore', () => {
    const counter = ref(0)
    const double = computed(() => counter.value * 2)
    const increment = () => counter.value++
    const decrement = () => counter.value--

    return {
        counter,
        double,
        increment,
        decrement,
    }
})