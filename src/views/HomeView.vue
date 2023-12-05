<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PopularHotels from '../components/PopularHotels.vue'
import GuideBook from '../components/GuideBook.vue'
import PopularCountries from '../components/PopularCountries.vue'
import AppPromo from '../components/AppPromo.vue'
</script>

<template>
  <div class="container">
    <AppHeader class="header" />
    <main class="main-content">
      <AppPromo />
      <PopularCountries />
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
  padding: 15px;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
}
.header {
  margin-bottom: 15px;
}
.main-content {
  flex-grow: 1;
}
</style>
