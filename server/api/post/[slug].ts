import { hasHiddenTag } from '~~/shared/constants/hidden-tags'

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, 'slug')
  const config = useRuntimeConfig(event)

  const post = await $fetch<PostListItem>(
    `/post/${slug}`,
    { baseURL: config.public.tyangeCmsApiBase },
  )

  if (hasHiddenTag(post)) {
    throw createError({ statusCode: 404, statusMessage: 'Not Found' })
  }

  return post
})
