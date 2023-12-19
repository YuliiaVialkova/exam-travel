<script setup>
import { computed } from 'vue'
import IconBurger from '../components/icons/IconBurger.vue'

import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()

const menuClasses = computed(() => {
  return menuStore.menu.main ? ['header-menu__list_opened'] : []
})
</script>

<template>
  <nav class="header-menu">
    <IconBurger class="header-menu__icon" @click="menuStore.toggleMenu('main')" />
    <ul class="header-menu__list" :class="menuClasses">
      <li class="header-menu__item">
        <a href="/search" class="header-menu__link">Знайти тур</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Путівник</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Про нас</a>
      </li>
      <li class="header-menu__item">
        <a href="" class="header-menu__link">Контакти</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
.header-menu {
  &__icon {
    width: 24px;
    height: 24px;
    position: relative;
    z-index: 1000;
  }
  &__list {
    padding: 20px 20px 20px 50px;
    margin: 0;
    list-style: none;
    position: fixed;
    background-color: var(--main-bg-color);
    top: 0;
    height: 100vh;
    width: 100vw;
    left: -100vw;
    transition: all 1s;
    z-index: 999;

    &_opened {
      left: 0;
    }
  }
  &__item {
    padding: 10px;
  }
  &__link {
    text-decoration: none;
    color: inherit;
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
      position: static;
      padding: 0;
      margin: 0;
      height: auto;
      width: auto;
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
