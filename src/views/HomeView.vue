<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <main class="main-content"></main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow: hidden;
}
.main-content {
  flex-grow: 1;
}
</style>
