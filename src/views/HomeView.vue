<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PopularHotels from '../components/PopularHotels.vue'
import GuideBook from '../components/GuideBook.vue'
import PopularCountries from '../components/PopularCountries.vue'
import AppPromo from '../components/AppPromo.vue'
import AppSearch from '../components/AppSearch.vue'
</script>

<template>
  <div class="container"><AppHeader class="header" /></div>
  <h1 class="visually-hidden">My Dream Place</h1>
  <main class="main-content">
    <div class="container"><AppPromo /></div>
    <div class="container"><AppSearch class="main-search" /></div>
    <div class="container"><PopularCountries /></div>
    <div class="container"><GuideBook /></div>
    <div class="container"><PopularHotels /></div>
  </main>
  <AppFooter class="footer" />
</template>

<style lang="scss">
.container {
  padding: 0 15px;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
}
.header {
  margin: 15px 0;
}

.main-content {
  flex-grow: 1;
}
.main-search {
  margin: 20px 0;
}
</style>
