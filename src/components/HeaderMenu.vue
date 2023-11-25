<script setup>
import IconBurger from '../components/icons/IconBurger.vue'
</script>

<template>
  <nav class="header-menu">
    <IconBurger class="header-menu__icon" />
    <ul class="header-menu__list">
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Discover</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Activities</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">About</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Contacts</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.header-menu {
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__list {
    display: none;
  }
}
@media screen and (min-width: 653px) {
  .header-menu {
    &__icon {
      display: none;
    }
    &__list {
      display: flex;
      flex-direction: row;
      padding: 0;
      margin: 0;
      list-style: none;
    }
    &__link {
      text-decoration: none;
      color: inherit;
    }
    &__item {
      margin-right: 38px;
    }
    &__link {
      display: block;
      padding: 10px;
      font-size: inherit;
      color: inherit;
    }
  }
}
</style>
