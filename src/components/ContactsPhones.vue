<template>
  <div class="contacts-phones">
    <h3 class="contacts-phones__title">Зателефонуйте нам!</h3>
    <div class="contacts-phones__list">
      <a href="tel:0800 222 33 22" class="contacts-phones__item">0800 222 33 22</a>
      <a href="tel:+380 22 333 22 66" class="contacts-phones__item">+380 22 333 22 66</a>
      <a href="tel:+380 44 333 22 66" class="contacts-phones__item">+380 44 333 22 66</a>
      <a href="tel:+380 55 333 22 66" class="contacts-phones__item">+380 55 333 22 66</a>
    </div>
  </div>
</template>

<style lang="scss">
.contacts-phones {
  text-align: center;
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  &__item {
    display: block;
    padding: 10px;
    flex-shrink: 0;
    color: var(--blue-color);
    font-weight: 400;
    text-decoration: none;
  }
}
</style>
