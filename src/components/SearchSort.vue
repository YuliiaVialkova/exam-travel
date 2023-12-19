<script setup>
import { useToursStore } from '@/stores/tours'

const tourStore = useToursStore()

const onSelect = function (event) {
  tourStore.changeSortType(event.target.value)
}
</script>

<template>
  <div class="search-sort">
    <select @change="onSelect" name="search-sort" id="search-sort" class="search-sort__list">
      <option value="priceToUp" class="search-sort__item">За ціною ↑</option>
      <option value="priceToDown" class="search-sort__item">За ціною ↓</option>
      <option value="ratingsToUp" class="search-sort__item">За рейтингом</option>
    </select>
  </div>
</template>

<style lang="scss">
.search-sort {
  &__list {
    padding: 5px;
    font-size: toRem(15px);
  }
}
</style>
