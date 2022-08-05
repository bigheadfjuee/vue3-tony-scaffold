<script setup>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex'

const store = useStore()
const plusOne = computed(() => store.state.auth.user);
</script>

<template>
  <router-view />
</template>

