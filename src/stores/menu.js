import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref({
    main: false,
    filter: false
  })

  const toggleMenu = (menuName) => {
    menu.value[menuName] = !menu.value[menuName]
  }

  return { menu, toggleMenu }
})
