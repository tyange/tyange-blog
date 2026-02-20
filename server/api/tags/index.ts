export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  return await $fetch<PostListItem>(
    `/tags?category=general`,
    { baseURL: config.public.tyangeCmsApiBase },
  )
})
