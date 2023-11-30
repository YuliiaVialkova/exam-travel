<script setup>
import HeaderLogo from '../components/HeaderLogo.vue'
import FooterMenu from '../components/FooterMenu.vue'
import ContactsPhones from '../components/ContactsPhones.vue'
import SocialsList from '../components/SocialsList.vue'
</script>

<template>
  <div class="footer">
    <HeaderLogo />
    <div class="footer__slogan">Підберемо відпочинок Вашої мрії!</div>
    <FooterMenu class="footer__menu" />
    <div class="footer__bottom">
      <ContactsPhones class="footer__phones" />
      <SocialsList class="footer__socials" />
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  &__slogan {
    font-style: italic;
    margin-bottom: 20px;
  }
  &__bottom {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  &__phones {
    flex-basis: 45%;
  }
  &__socials {
    flex-basis: 45%;
  }
}
</style>
