<template>
  <header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <ul class="nav nav-pills col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="/home" class="nav-link px-2 text-white" :class="{ active: (activeItem === '/home') }">首頁</a>
          </li>
          <li>
            <a href="/about" class="nav-link px-2 text-white" :class="{ active: (activeItem === '/about') }">關於</a>
          </li>
        </ul>

        <div class="text-end">
          <button type="button" class="btn btn-outline-light me-2" @click.prevent="logout">登出</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()
const activeItem = computed(() => route.path)
const logout = () => {
  localStorage.removeItem('user')
  router.push("/")
}

</script>

<style>
</style>