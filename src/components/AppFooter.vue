<script setup>
import HeaderLogo from '../components/HeaderLogo.vue'
import FooterMenu from '../components/FooterMenu.vue'
import ContactsPhones from '../components/ContactsPhones.vue'
import SocialsList from '../components/SocialsList.vue'
</script>

<template>
  <div class="footer">
    <div class="footer__container">
      <HeaderLogo />
      <div class="footer__slogan">Підберемо відпочинок Вашої мрії!</div>
      <FooterMenu class="footer__menu" />
      <div class="footer__bottom">
        <ContactsPhones class="footer__phones" />
        <SocialsList class="footer__socials" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.footer {
  padding: 15px;
  background-color: #e8e8e8;
  &__container {
    max-width: 1200px;
    margin: 0 auto;
  }
  &__slogan {
    font-style: italic;
    margin: 10px 0 20px;
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
