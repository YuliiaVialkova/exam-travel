<template>
  <section class="promo">
    <div class="promo__img-wrp">
      <img src="../../public/promo_home_page.png" class="promo__img" alt="" />
    </div>
    <div class="promo__content">
      <div class="promo__title">Насолоджуйтесь відпусткою своєї мрії</div>
      <div class="promo__subtitle">
        Сплануйте та забронюйте Вашу ідеальну подорож, скориставшись порадами експертів,
        туристичними підказками, інформацією про напрямки та натхненням від нас
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.promo {
  &__img-wrp {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  &__img {
    width: 100%;
    vertical-align: top;
    border-radius: 10px;
  }
  &__title {
    text-align: center;
    font-size: toRem(28px);
    font-weight: 700;
    margin: 20px 0;
  }
  &__subtitle {
    text-align: center;
    font-size: toRem(18px);
    font-weight: $mainFontWeight;
  }
}
@media screen and (min-width: 768px) {
  .promo {
    position: relative;

    &__content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60%;
      text-align: center;
    }
    &__title {
      text-align: center;
      font-size: toRem(32px);
      font-weight: 700;
      color: var(--white-color);
    }
    &__subtitle {
      text-align: center;
      font-size: toRem(20px);
      font-weight: $mainFontWeight;
      color: var(--white-color);
      letter-spacing: 0.4px;
    }
  }
}
</style>
