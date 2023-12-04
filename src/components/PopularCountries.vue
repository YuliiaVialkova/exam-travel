<template>
  <section class="popular-countries">
    <h2 class="popular-countries__title">Популярні країни</h2>
    <div class="popular-countries__list">
      <article class="popular-countries__item">
        <a href="/" class="popular-countries__img-link">
          <div class="popular-countries__img-wrp">
            <img
              src="../../public/countries/Australia.png"
              alt="Australia"
              class="popular-countries__img"
            />
          </div>
        </a>
        <div class="popular-countries__content">
          <h3 class="popular-countries__caption">
            <a href="/" class="popular-countries__caption-link">Австралія</a>
          </h3>
          <div class="popular-countries__text">
            <a href="/" class="popular-countries__text-link"> <span> 2246 </span>пропозицій </a>
          </div>
        </div>
      </article>
      <article class="popular-countries__item">
        <a href="/" class="popular-countries__img-link">
          <div class="popular-countries__img-wrp">
            <img
              src="../../public/countries/Japan.png"
              alt="Japan"
              class="popular-countries__img"
            />
          </div>
        </a>
        <div class="popular-countries__content">
          <h3 class="popular-countries__caption">
            <a href="/" class="popular-countries__caption-link">Японія</a>
          </h3>
          <div class="popular-countries__text">
            <a href="/" class="popular-countries__text-link"> <span> 1278 </span>пропозицій </a>
          </div>
        </div>
      </article>
      <article class="popular-countries__item">
        <a href="/" class="popular-countries__img-link">
          <div class="popular-countries__img-wrp">
            <img
              src="../../public/countries/New_Zealand.png"
              alt="New_Zealand"
              class="popular-countries__img"
            />
          </div>
        </a>
        <div class="popular-countries__content">
          <h3 class="popular-countries__caption">
            <a href="/" class="popular-countries__caption-link">Нова Зеландія</a>
          </h3>
          <div class="popular-countries__text">
            <a href="/" class="popular-countries__text-link"> <span> 480 </span>пропозицій </a>
          </div>
        </div>
      </article>
      <article class="popular-countries__item">
        <a href="/" class="popular-countries__img-link">
          <div class="popular-countries__img-wrp">
            <img
              src="../../public/countries/Australia.png"
              alt="Australia"
              class="popular-countries__img"
            />
          </div>
        </a>
        <div class="popular-countries__content">
          <h3 class="popular-countries__caption">
            <a href="/" class="popular-countries__caption-link">Греція</a>
          </h3>
          <div class="popular-countries__text">
            <a href="/" class="popular-countries__text-link"> <span> 1320 </span>пропозицій </a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
.popular-countries {
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
  &__img-wrp {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  &__img {
    width: 100%;
    vertical-align: top;
  }
  &__caption {
    margin: 15px 0 5px;
  }
  &__caption-link {
    font-size: toRem(20px);
    font-weight: 600;
    color: var(--title-color);
    text-decoration: none;
  }
  &__text {
    margin-bottom: 10px;
  }
  &__text-link {
    font-size: toRem(14px);
    font-weight: 400;
    color: var(--title-color);
    text-decoration: none;
    letter-spacing: 0.32px;
  }
}
@media screen and (min-width: 530px) {
  .popular-countries {
    &__item {
      width: 48%;
    }
  }
}
@media screen and (min-width: 768px) {
  .popular-countries {
    &__item {
      width: 30%;
    }
  }
}
@media screen and (min-width: 992px) {
  .popular-countries {
    &__item {
      width: 23%;
    }
  }
}
</style>
