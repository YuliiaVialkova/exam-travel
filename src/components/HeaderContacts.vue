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
.header-contacts {
  &__icon {
    width: 24px;
    height: 24px;
  }
  &__tel {
    display: none;
  }
}
@media screen and (min-width: 433px) {
  .header-contacts {
    margin-left: auto;
  }
}
@media screen and (min-width: 653px) {
  .header-contacts {
    display: none;

    &__icon {
      display: none;
    }
  }
}
</style>
