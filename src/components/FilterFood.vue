<template>
  <div class="filter-food">
    <div class="filter-food__caption filter-caption">Тип харчування</div>
    <div class="filter-food__box">
      <input type="checkbox" id="hotels-food" name="hotels-food" value="OB" />
      <label for="hotels-food">ОВ (без харчування)</label>
    </div>
    <div class="filter-food__box">
      <input type="checkbox" id="hotels-food" name="hotels-food" value="BB" />
      <label for="hotels-food">ВВ (сніданок)</label>
    </div>
    <div class="filter-food__box">
      <input type="checkbox" id="hotels-food" name="hotels-food" value="HB" />
      <label for="hotels-food">НВ (сніданок + вечеря)</label>
    </div>
    <div class="filter-food__box">
      <input type="checkbox" id="hotels-food" name="hotels-food" value="FB" />
      <label for="hotels-food">FB (3-раз. харчування)</label>
    </div>
    <div class="filter-food__box">
      <input type="checkbox" id="hotels-food" name="hotels-food" value="AI" checked />
      <label for="hotels-food">AI (все включено)</label>
    </div>
  </div>
</template>
<style lang="scss">
.filter-food {
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
