<template>
  <div class="search-sort">
    <select name="search-sort" id="search-sort" class="search-sort__list">
      <option value="max-min" class="search-sort__item">За ціною</option>
      <option value="min-max" class="search-sort__item">За ціною</option>
      <option value="ratings" class="search-sort__item">За рейтингом</option>
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
