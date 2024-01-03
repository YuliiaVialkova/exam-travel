<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import PopularHotels from '../components/PopularHotels.vue'
import GuideBook from '../components/GuideBook.vue'
import PopularCountries from '../components/PopularCountries.vue'
import AppPromo from '../components/AppPromo.vue'
import AppSearch from '../components/AppSearch.vue'

import { storeToRefs } from 'pinia'
import { useToursStore } from '@/stores/tours'
import { useCountriesStore } from '@/stores/countries'
import { useDepartureCitiesStore } from '@/stores/departureCities'

const tourStore = useToursStore()
const { filtredTours } = storeToRefs(tourStore)

const countryStore = useCountriesStore()
const { countries } = storeToRefs(countryStore)

const departureCityStore = useDepartureCitiesStore()
const { departureCities } = storeToRefs(departureCityStore)
</script>

<template>
  <div class="container"><AppHeader class="header" /></div>
  <h1 class="visually-hidden">My Dream Place</h1>
  <main class="main-content">
    <div class="container"><AppPromo /></div>
    <div class="container">
      <AppSearch class="main-search" :countries="countries" :departureCities="departureCities" />
    </div>
    <div class="container"><PopularCountries /></div>
    <div class="container"><GuideBook /></div>
    <div class="container"><PopularHotels :tours="filtredTours" /></div>
  </main>
  <AppFooter class="footer" />
</template>

<style lang="scss">
.container {
  padding: 0 15px;
  overflow: hidden;
  max-width: 1240px;
  margin: 0 auto;
}
.header {
  margin: 15px 0;
}

.main-content {
  flex-grow: 1;
}
.main-search {
  margin: 20px 0;
}
</style>
