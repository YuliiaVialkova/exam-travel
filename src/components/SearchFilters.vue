<script setup>
import FilterStars from '../components/FilterStars.vue'
import FilterFood from '../components/FilterFood.vue'
</script>
<template>
  <section class="search-filters">
    <h2 class="search-filters__title">Фільтри</h2>
    <div class="search-filters__box">
      <label for="" class="search-filters__caption filter-caption">
        Пошук готелю за назвою
        <input type="text" placeholder="Введіть назву готелю" class="search-filters__content" />
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
  </section>
</template>

<style lang="scss">
.search-filters {
  padding: 15px;

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
</style>
