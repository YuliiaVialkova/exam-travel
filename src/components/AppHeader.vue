<script setup>
import HeaderLogo from './HeaderLogo.vue'
import HeaderMenu from './HeaderMenu.vue'
import HeaderAuth from './HeaderAuth.vue'
import HeaderContacts from './HeaderContacts.vue'
</script>

<template>
  <div class="header">
    <HeaderLogo class="header__logo" />
    <HeaderMenu class="header__menu" />
    <HeaderAuth class="header__auth" />
    <HeaderContacts class="header__contacts" />
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  &__logo {
    order: 2;
  }

  &__contacts {
    order: 3;
  }
}

@media screen and (min-width: 433px) {
  .header {
    gap: 30px;

    &__auth {
      order: 4;
    }
  }
}
@media screen and (min-width: 653px) {
  .header {
    flex-wrap: wrap;
    gap: 15px;

    &__menu {
      order: 5;
    }
  }
}
@media screen and (min-width: 797px) {
  .header {
    &__logo {
      order: 1;
    }

    &__menu {
      order: 2;
    }
    &__auth {
      justify-content: flex-end;
      flex-basis: 100%;
    }
  }
}

@media screen and (min-width: 992px) {
  .header {
    flex-wrap: nowrap;

    &__auth {
      justify-content: flex-start;
      flex-basis: auto;
    }
  }
}
</style>
