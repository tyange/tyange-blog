// 블로그에 노출하지 않을 태그. 이 태그가 포함된 post는
// 목록 / sitemap / RSS / 개별 페이지에서 모두 제외된다.
export const HIDDEN_TAGS = ['lovelog']

export function hasHiddenTag(post: { tags?: { tag: string }[] }): boolean {
  return post.tags?.some(t => HIDDEN_TAGS.includes(t.tag)) ?? false
}
