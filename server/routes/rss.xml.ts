import { Feed } from 'feed'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const feed = new Feed({
    title: 'Tyange\'s Blog',
    description: 'tyange의 블로그',
    id: 'https://blog.tyange.com/',
    link: 'https://blog.tyange.com/',
    language: 'ko',
    feedLinks: {
      rss2: 'https://blog.tyange.com/rss.xml',
    },
    author: {
      name: 'Tyange',
      link: 'https://blog.tyange.com',
    },
  })

  try {
    const res = await $fetch<CMSResponse<{ posts: PostListItem[] }>>(
      `${config.public.tyangeCmsApiBase}/posts`,
    )

    const posts = res.data.posts

    posts.forEach((post) => {
      feed.addItem({
        title: post.title,
        id: post.post_id,
        link: `https://blog.tyange.com/post/${post.post_id}`,
        description: post.description !== '' ? post.description : '',
        content: post.content,
        date: new Date(post.published_at),
        category: post.tags?.map(tag => ({ name: tag })),
      })
    })

    setResponseHeader(event, 'content-type', 'application/xml; charset=utf-8')
    return feed.rss2()
  }
  catch (error) {
    console.error('RSS feed generation failed:', error)
    setResponseStatus(event, 500)
    setResponseHeader(event, 'content-type', 'text/plain')
    return 'RSS feed generation failed'
  }
})
