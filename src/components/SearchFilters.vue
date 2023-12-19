<script setup>
import { computed } from 'vue'
import FilterStars from '../components/FilterStars.vue'
import FilterFood from '../components/FilterFood.vue'
import IconFilter from './icons/IconFilter.vue'
import SearchSort from '../components/SearchSort.vue'
import BlueButton from '../components/BlueButton.vue'

import { useToursStore } from '@/stores/tours'
import { useMenuStore } from '@/stores/menu'

const tourStore = useToursStore()
const menuStore = useMenuStore()

const filterPriceFrom = function (event) {
  tourStore.filterPriceFrom(event.target.value)
}
const filterPriceTo = function (event) {
  tourStore.filterPriceTo(event.target.value)
}
const filterTitle = function (event) {
  tourStore.filterTitle(event.target.value)
}

const menuClasses = computed(() => {
  return menuStore.menu.filter ? ['search-filters__container_opened'] : []
})
</script>
<template>
  <section class="search-filters">
    <IconFilter class="search-filters__icon" @click="menuStore.toggleMenu('filter')" />
    <div class="search-filters__wrap">
      <h2 class="search-filters__title" @click="menuStore.toggleMenu('filter')">Фільтри</h2>
      <SearchSort class="search-filters__sort" />
    </div>
    <div class="search-filters__container" :class="menuClasses">
      <div class="search-filters__box">
        <label for="" class="search-filters__caption filter-caption">
          Пошук готелю за назвою
          <input
            type="search"
            placeholder="Введіть назву готелю"
            class="search-filters__content"
            @change="filterTitle"
          />
        </label>
      </div>
      <div class="search-filters__box search-filters__box_price">
        <label for="" class="search-filters__caption search-filters__caption_price filter-caption">
          Ціна
        </label>
        <input
          @change="filterPriceFrom"
          type="number"
          value="minprice"
          placeholder="Ціна від"
          class="search-filters__content search-filters__price-min"
        />
        <span>-</span>
        <input
          @change="filterPriceTo"
          type="number"
          value="maxprice"
          placeholder="Ціна до"
          class="search-filters__content search-filters__price-max"
        />
      </div>
      <FilterStars class="search-filters__box" />
      <FilterFood class="search-filters__box" />
      <BlueButton class="search-filters__btn" @click="menuStore.toggleMenu('filter')"
        >Застосувати</BlueButton
      >
    </div>
  </section>
</template>

<style lang="scss">
.search-filters {
  display: flex;
  position: relative;

  &__icon {
    width: 21px;
    height: 21px;
    vertical-align: bottom;
  }
  &__wrap {
    display: flex;
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
    position: absolute;
    top: 46px;
    left: -100vw;
    transition: all 1s;
    background-color: var(--main-bg-color);
    width: calc(100vw - 30px);
    height: 350vh;
    padding: 5px;

    &_opened {
      left: 0;
    }
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
  &__btn {
    display: inline-block;
    margin: 20px;
    text-align: center;
  }
}
@media screen and (min-width: 600px) {
  .search-filters {
    &__container {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      align-content: flex-start;
    }
    &__box {
      width: 48%;
    }
  }
}
@media screen and (min-width: 992px) {
  .search-filters {
    display: block;

    &__container {
      position: static;
      display: flex;
      flex-direction: column;
      width: auto;
    }
    &__box {
      width: 100%;
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
    &__btn {
      display: none;
    }
  }
}
</style>
