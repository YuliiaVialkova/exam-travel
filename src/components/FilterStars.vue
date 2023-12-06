<script setup>
import StarSolid from '../components/icons/StarSolid.vue'
import StarEmpty from '../components/icons/StarEmpty.vue'
</script>
<template>
  <div class="filter-stars">
    <div class="filter-stars__caption filter-caption">Категорія готелю</div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="five-stars" checked />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarSolid /><StarSolid
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="four-stars" checked />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarSolid /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="three-stars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarSolid /><StarEmpty /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="two-stars" />
      <label for="hotels-star"
        ><StarSolid /><StarSolid /><StarEmpty /><StarEmpty /><StarEmpty
      /></label>
    </div>
    <div class="filter-stars__box">
      <input type="checkbox" id="hotels-star" name="hotels-star" value="one-star" />
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
