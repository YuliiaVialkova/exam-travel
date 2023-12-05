<script setup>
import IconLocation from './icons/IconLocation.vue'
</script>

<template>
  <section class="search">
    <label for="search-where" class="search__label-item">
      <input type="text" placeholder="Куди" id="search-where" class="search__where search__item" />
    </label>
    <label for="search-from" class="search__label-item">
      <input type="text" placeholder="Звідки" id="search-from" class="search__from search__item" />
    </label>
    <label for="search-check-in-date" class="search__label-item">
      <input
        type="date"
        name="check-in-date"
        placeholder="Дата заїзду"
        id="search-check-in-date"
        class="search__check-in search__item"
      />
    </label>
    <label for="search-check-out-date" class="search__label-item">
      <input
        type="date"
        name="check-out-date"
        id="search-check-out-date"
        class="search__check-out search__item"
        placeholder="Дата виїзду"
      />
    </label>
    <label for="search-tourists" class="search__label-item">
      <select name="tourists" id="search-tourists" class="search__tourists search__item">
        <option value="">1 дорослий</option>
        <option value="">2 дорослих</option>
      </select>
    </label>
    <div class="search__btn-wrp search__label-item"><a class="search__btn" href="/">Знайти</a></div>
  </section>
</template>

<style lang="scss">
.search {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  &__item {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--input-bg-color);
    color: var(--grey-color);
    font-size: toRem(14px);
    font-weight: 400;
    line-height: 140%;
    letter-spacing: 0.28px;
  }

  &__where {
    position: relative;

    &::before {
      content: '';
      position: absolute;
      display: block;
      background: url(../components/icons/IconLocation.vue) no-repeat;
      width: 20px;
      height: 20px;
      top: 0px;
      left: 0px;
    }
  }

  &__btn-wrp {
    margin: 5px;
    background-color: var(--btn-bg-color);
    width: 100%;
    text-align: center;
    border-radius: 6px;
  }
  &__btn {
    display: block;
    width: 100%;
    color: var(--white-color);
    font-size: toRem(16px);
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-decoration: none;
    padding: 12px 18px;
  }
}

@media screen and (min-width: 530px) {
  .search {
    flex-direction: row;
    flex-wrap: wrap;

    &__label-item {
      flex-grow: 1;
    }
    &__btn-wrp {
      width: auto;
    }
  }
}
</style>
