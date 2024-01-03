<script setup>
import IconSign from '../components/icons/IconSign.vue'
</script>

<template>
  <div class="header-auth">
    <IconSign class="header-auth__icon" />
    <div class="header-auth__register">
      <a href="" class="header-auth__register-link">Реєстрація</a>
    </div>
    <div class="header-auth__sign">
      <a href="" class="header-auth__sign-link">Вхід</a>
    </div>
  </div>
</template>

<style lang="scss">
.header-auth {
  display: block;
  order: 3;

  &__icon {
    display: block;
    width: 24px;
    height: 24px;
  }
  &__register {
    display: none;
    padding: 10px 18px;
    border-radius: 6px;
    border: 1px solid var(--btn-bg-color);
  }
  &__register-link {
    text-decoration: none;
    color: var(--blue-color);
    font-size: toRem(15px);
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
  }
  &__sign {
    display: none;
    padding: 10px 18px;
    border-radius: 6px;
    background-color: var(--btn-bg-color);
  }
  &__sign-link {
    text-decoration: none;
    font-size: toRem(15px);
    color: var(--white-color);
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
  }
}
@media screen and (min-width: 433px) {
  .header-auth {
    display: block;
    &__icon {
      display: block;
    }
  }
}

@media screen and (min-width: 560px) {
  .header-auth {
    display: flex;
    gap: 20px;

    &__icon {
      display: none;
    }
    &__register {
      display: block;
    }

    &__sign {
      display: block;
    }
  }
}
</style>
