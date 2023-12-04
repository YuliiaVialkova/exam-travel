<template>
  <section class="guidebook">
    <h2 class="guidebook__title">Путівник</h2>
    <div class="guidebook__list">
      <article class="guidebook__item">
        <a href="/" class="guidebook__img-link">
          <div class="guidebook__img-wrp">
            <img
              src="../../public/guidebook/vyznachni_mistsya_bodrumu.jpg"
              alt="Vyznachni mistsya Bodrumu"
              class="guidebook__img"
            />
          </div>
        </a>
        <div class="guidebook__content">
          <h3 class="guidebook__caption">
            <a href="/" class="guidebook__caption-link">ТОП-12 Визначні місця Бодруму</a>
          </h3>
          <div class="guidebook__text">
            <a href="/" class="guidebook__text-link">
              Бодрум — місто білих вілл та п'ятизіркових готелів, що сяє набережною, яхт та тисячі
              барів...
            </a>
          </div>
        </div>
      </article>
      <article class="guidebook__item">
        <a href="/" class="guidebook__img-link">
          <div class="guidebook__img-wrp">
            <img
              src="../../public/guidebook/vyznachni_mistsya_bodrumu.jpg"
              alt="Vyznachni mistsya Bodrumu"
              class="guidebook__img"
            />
          </div>
        </a>
        <div class="guidebook__content">
          <h3 class="guidebook__caption">
            <a href="/" class="guidebook__caption-link">ТОП-12 Визначні місця Бодруму</a>
          </h3>
          <div class="guidebook__text">
            <a href="/" class="guidebook__text-link">
              Бодрум — місто білих вілл та п'ятизіркових готелів, що сяє набережною, яхт та тисячі
              барів...
            </a>
          </div>
        </div>
      </article>
      <article class="guidebook__item">
        <a href="/" class="guidebook__img-link">
          <div class="guidebook__img-wrp">
            <img
              src="../../public/guidebook/vyznachni_mistsya_bodrumu.jpg"
              alt="Vyznachni mistsya Bodrumu"
              class="guidebook__img"
            />
          </div>
        </a>
        <div class="guidebook__content">
          <h3 class="guidebook__caption">
            <a href="/" class="guidebook__caption-link">ТОП-12 Визначні місця Бодруму</a>
          </h3>
          <div class="guidebook__text">
            <a href="/" class="guidebook__text-link">
              Бодрум — місто білих вілл та п'ятизіркових готелів, що сяє набережною, яхт та тисячі
              барів...
            </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
.guidebook {
  &__title {
    font-size: toRem(28px);
    font-weight: 600;
    color: var(--title-color);
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  &__item {
    position: relative;
  }
  &__content {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    background-color: rgba(20, 20, 20, 0.6);
  }
  &__img-wrp {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  &__img {
    width: 100%;
    vertical-align: top;
  }
  &__caption-link {
    font-size: toRem(18px);
    font-weight: 500;
    color: var(--white-color);
    text-decoration: none;
  }
  &__text {
    margin-bottom: 10px;
  }
  &__text-link {
    font-size: toRem(14px);
    font-weight: 400;
    color: var(--white-color);
    text-decoration: none;
    letter-spacing: 0.32px;
  }
}
@media screen and (min-width: 600px) {
  .guidebook {
    &__item {
      width: 48%;
    }
  }
}
@media screen and (min-width: 900px) {
  .guidebook {
    &__item {
      width: 30%;
    }
  }
}
</style>
