export default defineNuxtPlugin(() => {
  const router = useRouter()
  const sidebarStore = useSidebarStore()

  router.afterEach(() => {
    if (sidebarStore.isOpen) {
      sidebarStore.isOpen = false
    }
  })
})
