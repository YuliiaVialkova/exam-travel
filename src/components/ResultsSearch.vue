<script setup>
import PlaneDeparture from '../components/icons/PlaneDeparture.vue'
import IconComments from '../components/icons/IconComments.vue'
import BlueButton from '../components/BlueButton.vue'
import HotelStars from '../components/HotelStars.vue'
import { useToursStore } from '@/stores/tours'

const toursStore = useToursStore()
const props = defineProps(['tours', 'nights'])

const touristsString = (count) => {
  if (count == 1) {
    return count + ' дорослий'
  } else {
    return count + ' дорослих'
  }
}

const tourPrice = (base, nights, count) => {
  return base * nights * count + '₴'
}

const nightsString = (nights) => {
  if (nights % 10 == 1 && nights % 100 != 11) {
    return nights + ' ніч'
  }

  if (nights % 10 == 1) {
    return nights + ' ночeй'
  }

  if (nights % 100 > 11 && nights % 100 < 20) {
    return nights + ' ночeй'
  }

  if (nights % 10 > 1 && nights % 10 < 5) {
    return nights + ' ночі'
  }

  return nights + ' ночeй'
}

const typeOfFoodString = (type) => {
  switch (type) {
    case 'AI':
      return 'AI (все включено)'
    case 'BB':
      return 'BB (сніданок)'
    case 'HB':
      return 'HB (сніданок + вечеря)'
    case 'FB':
      return 'FB (3-раз. харчування)'
    default:
      return 'OB (без харчування)'
  }
}
</script>
<template>
  <section class="results-search">
    <article class="results-search__article" v-for="tour in props.tours" :key="tour.id">
      <div class="results-search__caption">
        <h3>
          <a href="/" class="results-search__caption_link">{{ tour.title }}</a>
        </h3>
        <div class=""><HotelStars :stars="tour.stars" /></div>
        <div class="results-search__country">{{ tour.country }}, {{ tour.city }}</div>
      </div>
      <div class="results-search__content">
        <div class="results-search__img-wrp">
          <img class="results-search__img" :src="tour.img" :alt="tour.title" />
        </div>
        <div class="results-search_description">
          <a href="/" class="results-search_description_link"> {{ tour.description }}... </a>
        </div>
        <div class="results-search__left-side">
          <div class="">{{ typeOfFoodString(tour.typeOfFood) }}</div>
          <div class="">{{ toursStore.checkInDate.toLocaleDateString() }}</div>
          <div class="">{{ nightsString(props.nights) }}</div>
          <PlaneDeparture class="results-search__departure_icon" />
          <div class="results-search__departure">{{ tour.from }}</div>
        </div>
        <div class="results-search__right-side">
          <div class="results-search__price">
            <span>{{ tourPrice(tour.price, props.nights, tour.tourists) }}</span>
          </div>
          <div class="results-search__tourists">{{ touristsString(tour.tourists) }}</div>
        </div>
        <div class="results-search__reviews"><IconComments /> {{ tour.reviews }} відгуків</div>
      </div>
      <BlueButton class="results-search__btn-more">Детальніше</BlueButton>
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
    &_link {
      text-decoration: none;
      color: inherit;
    }
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
    justify-items: center;
  }
  &__img-wrp {
    grid-area: img;
    flex-basis: 100%;
  }
  &_description {
    display: none;
    font-size: toRem(15px);
    font-weight: $mainFontWeight;
    line-height: 140%;
    letter-spacing: 0.5px;

    &_link {
      text-decoration: none;
      color: inherit;
    }
  }
  &__left-side {
    grid-area: left;

    & > * {
      padding: 5px;
    }
  }
  &__right-side {
    grid-area: right;
    align-self: end;
  }
  &__img {
    width: 100%;
    height: auto;
    vertical-align: top;
  }
  &__departure {
    margin-left: 10px;
    display: inline-block;

    &_icon {
      width: 30px;
      height: 30px;
    }
  }
  &__price > span {
    font-size: toRem(20px);
    font-weight: 700;
  }
  &__btn-more {
    width: 50%;
    margin: 10px 0;
    margin-left: auto;
    text-align: center;
  }
  &__reviews {
    display: none;
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
    &_description {
      display: block;
      grid-area: desc;
    }
    &__content {
      grid-template-areas:
        'img desc desc'
        'img left right';
      grid-template-columns: 2fr 1fr 1fr;
    }
    &__left-side {
      justify-self: start;
    }
    &__right-side {
      align-self: center;
    }
    &__description {
      align-self: start;
    }
    &__btn-more {
      width: 25%;
    }
  }
}
@media screen and (min-width: 992px) {
  .results-search {
    &__reviews {
      display: block;
      grid-area: reviews;
    }
    &__content {
      grid-template-areas:
        'img desc desc'
        'img left right'
        'reviews left right';
      grid-template-columns: 2fr 2fr 1fr;
    }

    &__btn-more {
      width: 25%;
    }
  }
}
</style>
