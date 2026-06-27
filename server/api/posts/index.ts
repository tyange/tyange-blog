import type { CMSResponse } from '~~/shared/types/response.types'
import { hasHiddenTag } from '~~/shared/constants/hidden-tags'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const query = getQuery<{ tag?: string }>(event)

  const response = await $fetch<CMSResponse<{ posts: PostListItem[] }>>(
    `/posts/search-with-tags`,
    { baseURL: config.public.tyangeCmsApiBase, query: { exclude: 'dev', include: query.tag } },
  )

  return {
    ...response,
    data: {
      ...response.data,
      posts: (response.data?.posts ?? []).filter(post => !hasHiddenTag(post)),
    },
  }
})
