<script setup>
import StarSolid from '../components/icons/StarSolid.vue'
import StarEmpty from '../components/icons/StarEmpty.vue'
import PlaneDeparture from '../components/icons/PlaneDeparture.vue'
import ButtonMore from './ButtonMore.vue'
</script>
<template>
  <section class="results-search">
    <article class="results-search__article">
      <div class="results-search__caption">
        <h3>Sunrize Arabian Beach Resort</h3>
        <div class=""><StarSolid /><StarSolid /><StarSolid /><StarSolid /><StarEmpty /></div>
        <div class="results-search__country">Єгипет, Шарм Ель Шейх</div>
      </div>
      <div class="results-search__content">
        <div class="results-search__img-wrp">
          <img
            class="results-search__img"
            src="../../public/hotels/Sunrize_Arabian_Beach_Resort.jpg"
            alt="Sunrize Arabian Beach Resort"
          />
        </div>

        <div class="results-search__left-side">
          <div class="">AI (все включено)</div>
          <div class="">13.12.2023</div>
          <div class="">7 ночей</div>
          <PlaneDeparture />
          <div class="results-search__departure">Київ</div>
        </div>
        <div class="results-search__right-side">
          <div class="results-search__price"><span>17707 </span>грн</div>
          <div class="">2 дорослих</div>
        </div>
      </div>
      <ButtonMore class="results-search__btn-more" />
    </article>
  </section>
</template>

<style lang="scss">
.results-search {
  margin-bottom: 20px;

  &__article {
    padding: 5px;
    box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.3);
  }
  &__caption {
    margin-left: 20px;
  }
  &__country {
    font-style: italic;
    margin-top: 10px;
  }

  &__content {
    display: grid;
    gap: 10px;
    grid-template-areas: 'img img' 'left right';
    border-bottom: 2px solid #a3a7aa;
    padding: 20px;
  }
  &__img-wrp {
    grid-area: img;
    flex-basis: 100%;
  }
  &__left-side {
    grid-area: left;
  }
  &__right-side {
    grid-area: right;
  }
  &__img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }
  &__departure {
    margin-left: 10px;
    display: inline-block;
  }
  &__price > span {
    font-size: toRem(18px);
    font-weight: 700;
  }
  &__btn-more {
    width: 50%;
    margin: 10px 0;
    margin-left: auto;
    text-align: center;
  }
}
@media screen and (min-width: 600px) {
  .results-search {
    &__content {
      grid-template-areas: 'img left' 'img right';
      grid-template-columns: 1fr 1fr;
    }
    &__content {
      align-items: center;
      justify-items: center;
    }

    &__btn-more {
      width: 33%;
    }
  }
}
@media screen and (min-width: 768px) {
  .results-search {
    &__content {
      grid-template-areas: 'img left right';
      grid-template-columns: 2fr 1fr 1fr;
    }
    &__btn-more {
      width: 25%;
    }
  }
}
@media screen and (min-width: 992px) {
  .results-search {
    &__content {
      grid-template-areas: 'img left' 'img right';
      grid-template-columns: 1fr 1fr;
    }
    &__btn-more {
      width: 25%;
    }
  }
}
</style>
