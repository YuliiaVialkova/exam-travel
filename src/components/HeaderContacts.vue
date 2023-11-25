<script setup>
import IconPhone from './icons/IconPhone.vue'
</script>

<template>
  <div class="header-contacts">
    <IconPhone class="header-contacts__icon" />
  </div>
</template>

<style lang="scss">
.header-contacts {
  &__icon {
    width: 24px;
    height: 24px;
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
