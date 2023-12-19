<script setup>
import ContactsAddress from '../components/ContactsAddress.vue'
</script>

<template>
  <ul class="footer-menu">
    <li class="footer-menu__item">
      <div class="footer-menu__title">Навігація</div>

      <ul class="footer-menu__sublist">
        <li class="footer-menu__subitem">
          <a href="/" class="footer-menu__subitem-link">Головна</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Про нас</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Тури</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Країни</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Путівник</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Контакти</a>
        </li>
      </ul>
    </li>
    <li class="footer-menu__item">
      <div class="footer-menu__title">Тури</div>
      <ul class="footer-menu__sublist">
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Єгипет</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Хургада</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Шарм ель Шейх</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Туреччина</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Домінікана</a>
        </li>
        <li class="footer-menu__subitem">
          <a href="" class="footer-menu__subitem-link">Мальдіви</a>
        </li>
      </ul>
    </li>
    <li class="footer-menu__item footer-menu__item_contacts">
      <ContactsAddress />
    </li>
  </ul>
</template>

<style lang="scss">
.footer-menu {
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  &__item {
    flex-basis: 40%;

    &_contacts {
      flex-basis: 90%;
      align-items: center;
    }
  }
  &__title {
    font-weight: 500;
    letter-spacing: 0.32px;
  }

  &__sublist {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin-top: 15px;
  }
  &__subitem-link {
    display: block;
    text-decoration: none;
    color: var(--grey-color);
    padding: 5px 0;
  }
  &__phones {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (min-width: 599px) {
  .footer-menu {
    flex-wrap: nowrap;

    &__item {
      flex-basis: 25%;

      &_contacts {
        flex-basis: 40%;
      }
    }
  }
}
</style>
