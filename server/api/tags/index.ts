import type { CMSResponse } from '~~/shared/types/response.types'
import { HIDDEN_TAGS } from '~~/shared/constants/hidden-tags'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const response = await $fetch<CMSResponse<{ tag: string, count: number }[]>>(
    `/tags?category=general`,
    { baseURL: config.public.tyangeCmsApiBase },
  )

  return {
    ...response,
    data: (response.data ?? []).filter(t => !HIDDEN_TAGS.includes(t.tag)),
  }
})
