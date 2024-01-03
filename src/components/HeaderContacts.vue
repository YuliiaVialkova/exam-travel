<script setup>
import IconPhone from './icons/IconPhone.vue'
import ContactsPhones from '../components/ContactsPhones.vue'
</script>

<template>
  <div class="header-contacts">
    <IconPhone class="header-contacts__icon" />
    <ContactsPhones class="header-contacts__tel" />
  </div>
</template>

<style lang="scss">
@media screen and (min-width: 433px) {
  .header-contacts {
    &__icon {
      display: block;
      width: 24px;
      height: 24px;
    }
    &__tel {
      display: none;
    }
  }
}
@media screen and (min-width: 560px) {
  .header-contacts {
    &__tel {
      display: none;
    }

    &__icon {
      display: none;
    }
  }
}
</style>
