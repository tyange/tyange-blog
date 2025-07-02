import { defineStore } from 'pinia'

export const useSidebarStore = defineStore('sidebar', {
  state: (): { isOpen: boolean } => ({
    isOpen: false,
  }),
  actions: {
    toggle() {
      this.isOpen = !this.isOpen
    },
  },
})
