export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const query = getQuery<{ tag?: string }>(event)

  return await $fetch<PostListItem>(
    `/posts/search-with-tags`,
    { baseURL: config.public.tyangeCmsApiBase, query: { exclude: 'dev', include: query.tag } },
  )
})
