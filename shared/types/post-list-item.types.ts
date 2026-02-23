export interface PostListItem {
  post_id: string
  title: string
  description: string
  published_at: string
  tags: { tag: string, category: string }[]
  content: string
}
