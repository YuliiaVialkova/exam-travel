<template>
  <section class="search">
    <label for="search-where" class="search__label-item"
      >Куди
      <input
        type="text"
        placeholder="Єгипет, всі курорти"
        id="search-where"
        class="search__where search__item"
      />
    </label>
    <label for="search-from" class="search__label-item"
      >Звідки
      <input type="text" placeholder="Варшава" id="search-from" class="search__from search__item" />
    </label>
    <label for="search-check-in-date" class="search__label-item"
      >Дата заїзду
      <input
        type="date"
        name="check-in-date"
        id="search-check-in-date"
        class="search__check-in search__item"
      />
    </label>
    <label for="search-check-out-date" class="search__label-item"
      >Дата виїзду
      <input
        type="date"
        name="check-out-date"
        id="search-check-out-date"
        class="search__check-out search__item"
      />
    </label>
    <label for="search-tourists" class="search__label-item"
      >Туристів
      <select name="tourists" id="search-tourists" class="search__tourists search__item">
        <option value="">1 дорослий</option>
        <option value="">2 дорослих</option>
      </select>
    </label>
    <div class="search__btn-wrp">
      <a class="search__btn" href="/search">Знайти</a>
    </div>
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
    border-top: 2px solid var(--btn-bg-color);
    border-left: 2px solid var(--btn-bg-color);
    border-right: 2px solid var(--grey-color);
    border-bottom: 2px solid var(--grey-color);
    height: 49px;
  }

  &__btn-wrp {
    background-color: var(--btn-bg-color);
    width: 100%;
    text-align: center;
    border-radius: 6px;
    height: 49px;
    align-self: end;
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
  &__label-item {
    font-size: toRem(15px);
    color: var(--grey-color);
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
      flex-grow: 1;
      width: auto;
    }
  }
}
</style>
