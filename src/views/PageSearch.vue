<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppSearch from '../components/AppSearch.vue'
import SearchFilters from '../components/SearchFilters.vue'
</script>
<template>
  <div class="page-search"></div>
  <div class="container">
    <AppHeader class="header" />
    <h1 class="visually-hidden">This is an about page</h1>
    <main class="main-content">
      <AppSearch />
      <SearchFilters class="page-search__filters" />
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.page-search {
  &__filters {
    display: none;
  }
}
</style>
