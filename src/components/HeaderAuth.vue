<template>
  <div class="header-auth">
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
  display: flex;
  gap: 20px;

  &__register {
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
</style>
