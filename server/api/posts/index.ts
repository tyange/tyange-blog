export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  return await $fetch<PostListItem>(
    `/posts`,
    { baseURL: config.public.tyangeCmsApiBase },
  )
})
