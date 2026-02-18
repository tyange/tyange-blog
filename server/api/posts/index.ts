export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  return await $fetch<PostListItem>(
    `/posts/search-with-tags?exclude=dev`,
    { baseURL: config.public.tyangeCmsApiBase },
  )
})
