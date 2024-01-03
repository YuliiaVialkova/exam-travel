<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import AppSearch from '../components/AppSearch.vue'
import SearchFilters from '../components/SearchFilters.vue'
import SearchSort from '../components/SearchSort.vue'
import ResultsSearch from '../components/ResultsSearch.vue'
import ShowSearch from '../components/ShowSearch.vue'
import { storeToRefs } from 'pinia'
import { useToursStore } from '@/stores/tours'
import { defineProps } from 'vue'
import { useCountriesStore } from '@/stores/countries'
import { useDepartureCitiesStore } from '@/stores/departureCities'
import { ref } from 'vue'

defineProps(['country', 'city', 'tourists', 'check_in_date', 'check_out_date'])

const tourStore = useToursStore()

const { filtredTours } = storeToRefs(tourStore)

const departureCityStore = useDepartureCitiesStore()
const { departureCities } = storeToRefs(departureCityStore)
const countryStore = useCountriesStore()
const { countries } = storeToRefs(countryStore)
</script>
<template>
  <div class="container">
    <AppHeader class="header" />
    <h1 class="visually-hidden">Знайти тур</h1>
    <main class="main-content">
      <AppSearch
        :chosenCountry="country"
        :chosenCity="city"
        :chosenTourists="tourists"
        :countries="countries"
        :departureCities="departureCities"
        :chosenCheckInDate="check_in_date"
        :chosenCheckOutDate="check_out_date"
      />
      <ShowSearch />
      <div class="page-search__container">
        <div class="page-search__sort">
          <SearchFilters class="page-search__filters" />
          <SearchSort class="page-search__search-sort" />
        </div>
        <ResultsSearch
          class="page-search__results"
          :tours="filtredTours"
          :nights="tourStore.nights"
        />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.page-search {
  &__sort {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
}
@media screen and (min-width: 992px) {
  .page-search {
    &__search-sort {
      display: none;
    }
    &__sort {
      display: block;
      flex-basis: 300px;
      flex-shrink: 0;
    }
    &__container {
      display: flex;
      gap: 20px;
    }
  }
}
</style>
