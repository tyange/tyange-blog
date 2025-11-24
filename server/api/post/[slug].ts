export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const config = useRuntimeConfig()

  return await $fetch<PostListItem>(
    `/post/${slug}`,
    { baseURL: config.public.tyangeCmsApiBase },
  )
})
