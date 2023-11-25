<script setup>
import IconHeaderLogo from '../components/icons/IconLogoHeader.vue'
</script>

<template>
  <div class="header-logo">
    <a href="/" class="header-logo__link">
      <IconHeaderLogo class="header-logo__icon" />
      <span class="header-logo__text">my Dream Place</span>
    </a>
  </div>
</template>

<style lang="scss">
.header-logo {
  &__link {
    display: block;
    text-decoration: none;
    font-size: toRem(18px);
    font-weight: 600;
    letter-spacing: 0.36px;
    color: var(--logo-link-color);
  }
  &__icon {
    vertical-align: text-top;
  }
}
</style>
