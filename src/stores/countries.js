import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCountriesStore = defineStore('countries', () => {
  const countries = ref([
    { id: 1, title: 'Єгипет', resorts: ['Шарм - ель - Шейх', 'Хургада', 'Марса - Алам'] },
    { id: 4, title: 'Туреччина', resorts: ['Кемер', 'Аланія', 'Мармарис'] }
  ])

  return { countries }
})
