import type { CMSResponse } from '~~/shared/types/response.types'
import { hasHiddenTag } from '~~/shared/constants/hidden-tags'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const response = await $fetch<CMSResponse<{ posts: PostListItem[] }>>(
    `/posts`,
    { baseURL: config.public.tyangeCmsApiBase },
  )

  return {
    ...response,
    data: {
      ...response.data,
      posts: (response.data?.posts ?? []).filter(post => !hasHiddenTag(post)),
    },
  }
})
