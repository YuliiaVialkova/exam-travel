import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDepartureCitiesStore = defineStore('departureCities', () => {
  const departureCities = ref([
    { id: 1, title: 'Варшава' },
    { id: 2, title: 'Будапешт' },
    { id: 3, title: 'Київ' }
  ])
  return { departureCities }
})
