import type { PostListItem } from '~~/shared/types/post-list-item.types'
import type { CMSResponse } from '~~/shared/types/response.types'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()

  try {
    const response = await $fetch<CMSResponse<{ posts: PostListItem[] }>>(
      `${config.public.tyangeCmsApiBase}/posts`,
    )

    if (!response?.data?.posts) {
      return []
    }

    return response.data.posts.map(post => ({
      loc: `/post/${post.post_id}`,
      lastmod: post.published_at,
      changefreq: 'weekly' as const,
      priority: 0.8,
    }))
  }
  catch (error) {
    console.error('Sitemap posts fetch error:', error)
    return []
  }
})
