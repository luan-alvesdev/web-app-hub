import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', () => {
  const isSelected = ref(0) // Começa no item 0 (Dashboard)

  const atualizaMenu = index => {
    isSelected.value = index
  }

  return {
    isSelected,
    atualizaMenu,
  }
})
