<script setup>
import FilterStars from '../components/FilterStars.vue'
import FilterFood from '../components/FilterFood.vue'
import IconFilter from './icons/IconFilter.vue'
import SearchSort from '../components/SearchSort.vue'
</script>
<template>
  <section class="search-filters">
    <IconFilter class="search-filters__icon" />
    <h2 class="search-filters__title">Фільтри</h2>
    <SearchSort class="search-filters__sort" />
    <div class="search-filters__container">
      <div class="search-filters__box">
        <label for="" class="search-filters__caption filter-caption">
          Пошук готелю за назвою
          <input type="search" placeholder="Введіть назву готелю" class="search-filters__content" />
        </label>
      </div>
      <div class="search-filters__box search-filters__box_price">
        <label for="" class="search-filters__caption search-filters__caption_price filter-caption">
          Ціна
        </label>
        <input
          type="number"
          placeholder="Ціна від"
          class="search-filters__content search-filters__price-min"
        />
        <span>-</span>
        <input
          type="number"
          placeholder="Ціна до"
          class="search-filters__content search-filters__price-max"
        />
      </div>
      <FilterStars />
      <FilterFood />
    </div>
  </section>
</template>

<style lang="scss">
.search-filters {
  &__icon {
    width: 21px;
    height: 21px;
    vertical-align: bottom;
  }
  &__title {
    display: inline-block;
    font-size: toRem(18px);
    margin: 0 0 0 10px;
  }
  &__sort {
    display: none;
  }
  &__container {
    display: none;
  }
  &__box {
    border-bottom: 2px dotted var(--grey-color);
    width: 100%;

    &_price {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }
  &__caption {
    &_price {
      width: 100%;
      margin-bottom: 0;
    }
  }
  &__content {
    width: 100%;
    display: block;
    margin: 20px 0;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--input-bg-color);
    color: var(--grey-color);
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.28px;
  }
  &__price-min {
    width: calc(50% - 10px);
  }
  &__price-min + span {
    display: block;
    width: 20px;
    text-align: center;
  }
  &__price-max {
    width: calc(50% - 10px);
  }
}
@media screen and (min-width: 992px) {
  .search-filters {
    &__container {
      display: block;
    }
    &__icon {
      display: none;
    }
    &__title {
      margin-right: auto;
    }
    &__sort {
      display: inline-block;
      margin-left: 20px;
    }
  }
}
</style>
