<script setup>
import IconInstagram from '../components/icons/IconInstagram.vue'
import IconFacebook from '../components/icons/IconFacebook.vue'
import IconTwitter from '../components/icons/IconTwitter.vue'
import IconTelegram from '../components/icons/IconTelegram.vue'
import IconViber from '../components/icons/IconViber.vue'
</script>

<template>
  <div class="socials-list">
    <h3>Ми в соціальних мережах</h3>
    <div class="socials-list__block">
      <a href="https://www.instagram.com/" class="socials-list__link">
        <IconInstagram class="socials-list__insta socials-list__icon" />
      </a>
      <a href="https://www.facebook.com/" class="socials-list__link">
        <IconFacebook class="socials-list__fb socials-list__icon" />
      </a>
      <a href="https://twitter.com/" class="socials-list__link">
        <IconTwitter class="socials-list__tw socials-list__icon" />
      </a>
      <a href="" class="socials-list__link">
        <IconTelegram class="socials-list__telegram socials-list__icon" />
      </a>
      <a href="" class="socials-list__link">
        <IconViber class="socials-list__viber socials-list__icon" />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.socials-list {
  text-align: center;
  &__block {
    display: flex;
    justify-content: center;
  }
  &__link {
    display: block;
    padding: 10px;
  }
  &__icon {
    width: 26px;
    height: 26px;
  }
}
</style>
