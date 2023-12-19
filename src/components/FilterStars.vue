<script setup>
import StarSolid from '../components/icons/StarSolid.vue'
import StarEmpty from '../components/icons/StarEmpty.vue'

import { useToursStore } from '@/stores/tours'

const tourStore = useToursStore()

const filterStars = function (event) {
  tourStore.filterStars(event.target.value)
}
</script>
<template>
  <div class="filter-stars">
    <div class="filter-stars__caption filter-caption">Категорія готелю</div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="5" @change="filterStars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarSolid /><StarSolid
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="4" @change="filterStars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarSolid /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="3" @change="filterStars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarEmpty /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="2" @change="filterStars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarEmpty /><StarEmpty /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="1" @change="filterStars" />
      <label for="hotels-star"
        ><StarSolid /><StarEmpty /><StarEmpty /><StarEmpty /><StarEmpty
      /></label>
    </div>
  </div>
</template>
<style lang="scss">
.filter-stars {
  padding-bottom: 20px;
  border-bottom: 2px dotted var(--grey-color);

  &__box {
    margin: 0 0 5px 0;

    &__caption {
      font-size: toRem(18px);
      font-weight: 600;
      display: block;
      margin-top: 20px;

      & > input {
        margin-right: 5px;
      }
      &:last-child {
        margin-bottom: 20px;
      }
    }
  }
}
</style>
