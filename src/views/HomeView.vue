<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PopularHotels from '../components/PopularHotels.vue'
import GuideBook from '../components/GuideBook.vue'
</script>

<template>
  <div class="container">
    <AppHeader />
    <main class="main-content">
      <GuideBook />
      <PopularHotels />
    </main>
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
  max-width: 1240px;
  margin: 0 auto;
}
.main-content {
  flex-grow: 1;
}
</style>
