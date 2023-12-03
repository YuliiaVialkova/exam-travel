<script setup>
import IconStar from '../components/icons/IconStar.vue'
</script>
<template>
  <section class="popular-hotels">
    <h2 class="popular-hotels__title">Популярні готелі</h2>
    <div class="popular-hotels__list">
      <article class="popular-hotels__item">
        <div class="popular-hotels__img-wrp">
          <img
            src="../../public/hotels/Albatros Palace Resort Sharm El Sheikh.png"
            alt=""
            class="popular-hotels__img"
          />
        </div>
        <h3 class="popular-hotels__caption">
          Albatros Palace Resort Sharm El Sheikh, 5 <sup><IconStar /></sup>
        </h3>
        <div class="popular-hotels__country">Єгипет</div>
        <div class="popular-hotels__details">
          <div class="popular-hotels__price">
            від <span>46747</span> грн
            <div class="">за 2 дорослих</div>
          </div>
          <div class="popular-hotels__more">
            <a class="popular-hotels__more-link" href="#">Детальніше</a>
          </div>
        </div>
      </article>
      <article class="popular-hotels__item">
        <div class="popular-hotels__img-wrp">
          <img
            src="../../public/hotels/Albatros Palace Resort Sharm El Sheikh.png"
            alt=""
            class="popular-hotels__img"
          />
        </div>
        <h3 class="popular-hotels__caption">
          Albatros Palace Resort Sharm El Sheikh, 5 <sup><IconStar /></sup>
        </h3>
        <div class="popular-hotels__country">Єгипет</div>
        <div class="popular-hotels__details">
          <div class="popular-hotels__price">
            від <span>46747</span> грн
            <div class="">за 2 дорослих</div>
          </div>
          <div class="popular-hotels__more">
            <a class="popular-hotels__more-link" href="#">Детальніше</a>
          </div>
        </div>
      </article>
      <article class="popular-hotels__item">
        <div class="popular-hotels__img-wrp">
          <img
            src="../../public/hotels/Albatros Palace Resort Sharm El Sheikh.png"
            alt=""
            class="popular-hotels__img"
          />
        </div>
        <h3 class="popular-hotels__caption">
          Albatros Palace Resort Sharm El Sheikh, 5 <sup><IconStar /></sup>
        </h3>
        <div class="popular-hotels__country">Єгипет</div>
        <div class="popular-hotels__details">
          <div class="popular-hotels__price">
            від <span>46747</span> грн
            <div class="">за 2 дорослих</div>
          </div>
          <div class="popular-hotels__more">
            <a class="popular-hotels__more-link" href="#">Детальніше</a>
          </div>
        </div>
      </article>
      <article class="popular-hotels__item">
        <div class="popular-hotels__img-wrp">
          <img
            src="../../public/hotels/Albatros Palace Resort Sharm El Sheikh.png"
            alt=""
            class="popular-hotels__img"
          />
        </div>
        <h3 class="popular-hotels__caption">
          Albatros Palace Resort Sharm El Sheikh, 5 <sup><IconStar /></sup>
        </h3>
        <div class="popular-hotels__country">Єгипет</div>
        <div class="popular-hotels__details">
          <div class="popular-hotels__price">
            від <span>46747</span> грн
            <div class="">за 2 дорослих</div>
          </div>
          <div class="popular-hotels__more">
            <a class="popular-hotels__more-link" href="#">Детальніше</a>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style lang="scss">
.popular-hotels {
  margin-bottom: 30px;

  &__title {
    font-size: toRem(28px);
    font-weight: 600;
    color: var(--title-color);
  }

  &__list {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  &__item {
    width: 100%;
  }

  &__caption {
    font-size: toRem(20px);
    margin: 15px 0;
    font-weight: 600;
    color: var(--title-color);
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
  &__country {
    font-style: italic;
    margin-bottom: 10px;
  }
  &__details {
    display: flex;
    justify-content: space-between;
    border-top: 2px solid #a3a7aa;
    padding-top: 10px;
  }
  &__price > span {
    font-size: toRem(18px);
    font-weight: 700;
  }
  &__more {
    padding: 10px 18px;
    border-radius: 6px;
    background-color: var(--btn-bg-color);
  }
  &__more-link {
    text-decoration: none;
    font-size: toRem(16px);

    color: var(--white-color);
  }
}
@media screen and (min-width: 530px) {
  .popular-hotels {
    &__item {
      width: 48%;
    }
  }
}
@media screen and (min-width: 768px) {
  .popular-hotels {
    &__item {
      width: 30%;
    }
  }
}
@media screen and (min-width: 992px) {
  .popular-hotels {
    &__item {
      width: 23%;
    }
  }
}
</style>
