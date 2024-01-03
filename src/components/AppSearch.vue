<script setup>
import ChooseInput from '../components/ChooseInput.vue'
import { ref } from 'vue'
import { useToursStore } from '@/stores/tours'

const toursStore = useToursStore()

const props = defineProps([
  'countries',
  'departureCities',
  'chosenCountry',
  'chosenCity',
  'chosenTourists',
  'chosenCheckInDate',
  'chosenCheckOutDate'
])

const selectedCountry = ref(props.chosenCountry)
const selectedCity = ref(props.chosenCity)
const selectedTourists = props.chosenTourists ? ref(props.chosenTourists) : ref(1)
const selectedCheckInDate = ref(props.chosenCheckInDate)
const selectedCheckOutDate = ref(props.chosenCheckOutDate)

toursStore.filterCountry(selectedCountry.value)
toursStore.filterCity(selectedCity.value)
toursStore.filterTourists(selectedTourists.value)
toursStore.setCheckInDate(selectedCheckInDate.value)
toursStore.setCheckOutDate(selectedCheckOutDate.value)
</script>
<template>
  <form action="/search">
    <section class="search">
      <ChooseInput
        class="search__choose-input"
        :list="countries"
        label="Куди"
        v-model="selectedCountry"
        placeholder="Оберіть країну"
        @update:modelValue="toursStore.filterCountry(selectedCountry)"
        name="country"
      />
      <ChooseInput
        class="search__choose-input"
        :list="departureCities"
        v-model="selectedCity"
        @update:modelValue="toursStore.filterCity(selectedCity)"
        label="Звідки"
        placeholder="Оберіть місто вильоту"
        name="city"
      />
      <label for="search-check-in-date" class="search__label-item"
        >Дата заїзду
        <input
          type="date"
          name="check_in_date"
          id="search-check-in-date"
          class="search__check-in search__item"
          v-model="selectedCheckInDate"
        />
      </label>
      <label for="search-check-out-date" class="search__label-item"
        >Дата виїзду
        <input
          type="date"
          name="check_out_date"
          id="search-check-out-date"
          class="search__check-out search__item"
          v-model="selectedCheckOutDate"
        />
      </label>
      <label for="search-tourists" class="search__label-item"
        >Туристів
        <select
          name="tourists"
          id="search-tourists"
          class="search__tourists search__item"
          v-model="selectedTourists"
        >
          <option value="1">1 дорослий</option>
          <option value="2">2 дорослих</option>
        </select>
      </label>

      <button class="search__btn" type="submit">Знайти</button>
    </section>
  </form>
</template>

<style lang="scss">
.search {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  gap: 5px;
  padding: 15px;
  box-shadow: 0px 4px 37px 0px rgba(0, 0, 0, 0.15);
  border-radius: 8px;

  &__choose-input {
    --label-font-size: 0.9375rem;
    --label-color: var(--grey-color);
    --input-width: 100%;
    --input-padding: 12px;
    --input-border-radius: 4px;
    --input-background-color: var(--input-bg-color);
    --input-color: var(--grey-color);
    --input-font-size: 0.875rem;
    --input-font-weight: $mainFontWeight;
    --input-line-height: 140%;
    --input-height: 49px;
    --input-letter-spacing: 0.28px;
    --input-border-top: 2px solid var(--btn-bg-color);
    --input-border-left: 2px solid var(--btn-bg-color);
    --input-border-right: 2px solid var(--grey-color);
    --input-border-bottom: 2px solid var(--grey-color);
    --input-position: relative;
  }

  &__item {
    width: 100%;
    padding: 12px;
    border-radius: 4px;
    background-color: var(--input-bg-color);
    color: var(--grey-color);
    font-size: toRem(14px);
    font-weight: $mainFontWeight;
    line-height: 140%;
    letter-spacing: 0.28px;
    border-top: 2px solid var(--btn-bg-color);
    border-left: 2px solid var(--btn-bg-color);
    border-right: 2px solid var(--grey-color);
    border-bottom: 2px solid var(--grey-color);
    height: 49px;
  }
  &__where {
    position: relative;
  }
  &__where-list {
    position: absolute;
    display: none;
    background-color: #fff;
    padding: 0;
    cursor: pointer;
    margin: 0;

    &_opened {
      display: block;
    }
  }
  &__where-item {
    list-style-type: none;
    padding: 10px;
  }
  &__from {
    position: relative;
  }
  &__from-list {
    position: absolute;
    display: none;
    background-color: #fff;
    padding: 0;
    cursor: pointer;
    margin: 0;

    &_opened {
      display: block;
    }
  }
  &__from-item {
    list-style-type: none;
    padding: 10px;
  }

  &__btn {
    display: block;
    width: 100%;
    background-color: var(--btn-bg-color);
    color: var(--white-color);
    font-size: toRem(16px);
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 0.3px;
    text-decoration: none;
    padding: 12px 18px;
    text-align: center;
    border-radius: 6px;
    height: 49px;
    align-self: end;
    cursor: pointer;
  }
  &__label-item {
    font-size: toRem(15px);
    color: var(--grey-color);
  }
}

@media screen and (min-width: 530px) {
  .search {
    flex-direction: row;
    flex-wrap: wrap;

    &__label-item {
      flex-grow: 1;
    }
    &__choose-input {
      flex-grow: 1;
    }
    &__btn-wrp {
      flex-grow: 1;
      width: auto;
    }
  }
}
</style>
