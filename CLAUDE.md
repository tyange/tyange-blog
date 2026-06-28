# tyange-blog

Nuxt 3 + Vue 개인 블로그. bun 사용.
`npm`, `yarn`, `pnpm` 명령어 사용 금지.

## 기술 스택
- Nuxt 3
- Vue
- bun
- 백엔드 CMS API는 별도 레포 `../tyange-cms-api`(Rust/poem + sqlite). `tyangeCmsApiBase`로 호출.

## 아키텍처 메모
- `server/api/*`는 CMS API를 감싸는 BFF 레이어.
- 블로그에 숨길 태그는 `shared/constants/hidden-tags.ts`의 `HIDDEN_TAGS` 한 곳에서 관리(현재 `['lovelog']`), `hasHiddenTag`로 목록/sitemap/RSS/개별페이지/태그버튼 5곳에서 필터링.
- 글 목록은 CMS `/posts`에서 받아온다(draft 제외). 태그별 좁히기는 클라이언트(`app/pages/index.vue`)에서 처리.

## 현재 상태
- 운영 중
- 2026-06-28: `love` 태그를 `lovelog`로 통합, dev 글 노출로 전환(CMS `exclude` 제거)
