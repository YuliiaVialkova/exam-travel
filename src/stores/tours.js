import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToursStore = defineStore('tours', () => {
  const sortType = ref('priceToUp')
  const filterStar = ref([false, false, false, false, false, false])
  const typeOfFood = ref([])
  const tourPriceFrom = ref(0)
  const tourPriceTo = ref(10000000)
  const partOfTheTitle = ref('')

  const changeSortType = function (newSortType) {
    sortType.value = newSortType
  }

  const filterStars = function (newFilterStar) {
    filterStar.value[newFilterStar] = !filterStar.value[newFilterStar]
  }

  const filterFood = function (newTypeOfFood) {
    if (!typeOfFood.value.includes(newTypeOfFood)) {
      typeOfFood.value.push(newTypeOfFood)
    } else {
      typeOfFood.value.splice(typeOfFood.value.indexOf(newTypeOfFood), 1)
    }
    return typeOfFood
  }

  const filterPriceFrom = function (newTourPriceFrom) {
    tourPriceFrom.value = newTourPriceFrom
  }
  const filterPriceTo = function (newTourPriceTo) {
    tourPriceTo.value = newTourPriceTo
  }
  const filterTitle = function (newFilterTitle) {
    partOfTheTitle.value = newFilterTitle
  }

  const tours = ref([
    {
      id: 1,
      title: 'Sunrize Arabian Beach Resort',
      stars: 3,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/Sunrize_Arabian_Beach_Resort.jpg',
      description:
        'Готель категорії 3* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'AI',
      depatureDate: '13.01.2024',
      price: 17707,
      nights: 7,
      from: 'Київ',
      reviews: 132
    },
    {
      id: 2,
      title: 'La Rosa Waves Beach Aqua Park',
      stars: 5,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/La_Rosa_Waves_Beach_Aqua_Park.jpg',
      description:
        'Готель категорії 5* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'HB',
      depatureDate: '13.01.2024',
      price: 20000,
      nights: 5,
      from: 'Варшава',
      reviews: 126
    },
    {
      id: 3,
      title: 'Sharm Bride Resort Aqua Park & Spa',
      stars: 4,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/Sharm_Bride_Resort_Aqua_Park_&_Spa.jpeg',
      description:
        'Готель категорії 4* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'AI',
      depatureDate: '13.01.2024',
      price: 20900,
      nights: 5,
      from: 'Варшава',
      reviews: 126
    }
  ])

  const sortedTours = computed(() => {
    switch (sortType.value) {
      case 'ratingsToUp':
        return tours.value.sort((a, b) => b.reviews - a.reviews)
      case 'priceToDown':
        return tours.value.sort((a, b) => b.price - a.price)
      default:
        return tours.value.sort((a, b) => a.price - b.price)
    }
  })

  const filtredTours = computed(() => {
    let tours = sortedTours.value.filter((tour) => {
      if (
        filterStar.value[1] === false &&
        filterStar.value[2] === false &&
        filterStar.value[3] === false &&
        filterStar.value[4] === false &&
        filterStar.value[5] === false
      ) {
        return true
      }
      return filterStar.value[tour.stars]
    })

    tours = tours.filter((tour) => tour.price >= tourPriceFrom.value)

    tours = tours.filter((tour) => tour.price <= tourPriceTo.value)

    if (!typeOfFood.value.length == 0) {
      tours = tours.filter((tour) => typeOfFood.value.includes(tour.typeOfFood))
    }

    if (!partOfTheTitle.value.length == 0) {
      tours = tours.filter((tour) =>
        tour.title.toLowerCase().includes(partOfTheTitle.value.toLowerCase())
      )
    }

    return tours
  })

  return {
    tours,
    filtredTours,
    changeSortType,
    filterStars,
    filterPriceFrom,
    filterPriceTo,
    filterFood,
    filterTitle
  }
})
