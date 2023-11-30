<template>
  <div class="contacts-address">
    <div class="contacts-address__title">Контакти</div>
    <div class="contacts-address__text">
      На період дії військового стану в Україні - турагенція працює в онлайн режимі.
    </div>
    <div class="contacts-address__subtext">Працюємо заради перемоги!</div>
    <div class="contacts-address__schedule">
      Пн - Пт: 10:00 – 18:00<br />
      Сб: 11:00 – 15:00
    </div>
    <div class="contacts-address__address">03922, м. Львів, вул. Васильківська 32</div>
    <a href="mailto:agency@mydreamplace.com" class="contacts-address__mail"
      >agency@mydreamplace.com</a
    >
  </div>
</template>

<style lang="scss">
.contacts-address {
  color: var(--grey-color);

  &__title {
    color: var(--main-color);
    font-weight: 500;
    letter-spacing: 0.32px;
    margin-bottom: 15px;
  }
  &__text {
    margin-bottom: 10px;
  }
  &__subtext {
    margin-bottom: 10px;
  }
  &__schedule {
    margin-bottom: 10px;
  }
  &__address {
    margin-bottom: 10px;
  }
  &__mail {
    color: var(--main-color);
    font-weight: 600;
  }
}
</style>
