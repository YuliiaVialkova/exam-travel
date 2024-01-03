import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useToursStore = defineStore('tours', () => {
  const sortType = ref('priceToUp')
  const filterStar = ref([false, false, false, false, false, false])
  const typeOfFood = ref([])
  const tourPriceFrom = ref(0)
  const tourPriceTo = ref(10000000)
  const partOfTheTitle = ref('')
  const country = ref('')
  const departureCity = ref('')
  const numberTourists = ref(1)
  const checkInDate = ref(new Date())
  const checkOutDate = ref(new Date(checkInDate.value.getTime() + 5 * 24 * 60 * 60 * 1000))

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
  const filterCountry = function (newFilterCountry) {
    country.value = newFilterCountry
  }
  const filterCity = function (newDepartureCity) {
    departureCity.value = newDepartureCity
  }

  const filterTourists = function (newNumberTourists) {
    numberTourists.value = newNumberTourists
  }
  const setCheckInDate = function (newCheckInDate) {
    if (newCheckInDate) {
      checkInDate.value = new Date(newCheckInDate)
    }
  }

  const setCheckOutDate = function (newCheckOutDate) {
    if (newCheckOutDate) {
      checkOutDate.value = new Date(newCheckOutDate)
    }
  }

  const topTours = computed(() => {
    const tTours = tours.value
    tTours.length = 4
    return tTours
  })

  const tours = ref([
    {
      id: 1,
      title: 'Sunrize Aqua Park Arabian Beach Resort',
      stars: 3,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/Sunrize_Arabian_Beach_Resort.jpg',
      description:
        'Готель категорії 3* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'AI',
      price: 2500,
      nights: 1,
      from: 'Варшава',
      reviews: 132,
      tourists: 1
    },
    {
      id: 2,
      title: 'La Rosa Waves Beach Aqua Park',
      stars: 4,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/La_Rosa_Waves_Beach_Aqua_Park.jpg',
      description:
        'Готель категорії 5* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'HB',
      price: 4500,
      nights: 1,
      from: 'Варшава',
      reviews: 126,
      tourists: 1
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
      price: 3000,
      nights: 5,
      from: 'Варшава',
      reviews: 111,
      tourists: 1
    },
    {
      id: 4,
      title: 'Royal Resort Lagoons & Aqua Park',
      stars: 5,
      country: 'Єгипет',
      city: 'Шарм Ель Шейх',
      img: '/hotels/Royal_Lagoons_Resort_&_Aqua_Park.jpg',
      description:
        'Готель категорії 5* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'AI',
      price: 4000,
      nights: 12,
      from: 'Варшава',
      reviews: 90,
      tourists: 1
    },
    {
      id: 5,
      title: 'Royal Lagoons Resort & Aqua Park',
      stars: 5,
      country: 'Туреччина',
      city: 'Аланія',
      img: '/hotels/Royal_Lagoons_Resort_&_Aqua_Park.jpg',
      description:
        'Готель категорії 5* розташований в 8 км від аеропорту Шарм-ель-Шейх, в районі Набк, на другій лінії. Невеликий готель, що потопає в зелені, оточить вас домашнім затишком і комфортом. Завбачливий персонал, просторі',
      typeOfFood: 'AI',
      price: 3500,
      nights: 12,
      from: 'Будапешт',
      reviews: 90,
      tourists: 1
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

    tours = tours.filter(
      (tour) => tour.price * nights.value * numberTourists.value >= tourPriceFrom.value
    )

    tours = tours.filter((tour) => {
      return tour.price * nights.value * numberTourists.value <= tourPriceTo.value
    })

    if (!typeOfFood.value.length == 0) {
      tours = tours.filter((tour) => typeOfFood.value.includes(tour.typeOfFood))
    }

    if (!partOfTheTitle.value.length == 0) {
      tours = tours.filter((tour) =>
        tour.title.toLowerCase().includes(partOfTheTitle.value.toLowerCase())
      )
    }

    tours = tours.filter((tour) => {
      if (country.value === '') {
        return true
      }

      return country.value === tour.country
    })

    tours = tours.filter((tour) => {
      if (departureCity.value === '') {
        return true
      }
      return departureCity.value === tour.from
    })

    tours = tours.filter((tour) => {
      if (numberTourists.value === 1) {
        return true
      }
      return (tour.tourists = numberTourists.value)
    })

    return tours
  })

  const nights = computed(() => {
    const dateVal = new Date(checkOutDate.value.getTime() - checkInDate.value.getTime())
    return dateVal.getTime() / (24 * 60 * 60 * 1000)
  })

  return {
    tours,
    filtredTours,
    changeSortType,
    filterStars,
    filterPriceFrom,
    filterPriceTo,
    filterFood,
    filterTitle,
    filterCountry,
    filterCity,
    filterTourists,
    setCheckInDate,
    checkInDate,
    setCheckOutDate,
    checkOutDate,
    nights,
    topTours
  }
})
