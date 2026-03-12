# tyange-blog

> 🚀 [https://blog.tyange.com](https://blog.tyange.com)

제 블로그입니다.

(똥글 주의)

with Nuxt & Tailwind CSS & DaisyUI & Nuxt-MDC & Pinia

## Deployment

`master` 브랜치에 푸시되면 GitHub Actions가 `pnpm build`로 Nuxt 산출물을 다시 만들고, Lightsail 서버에 `.output`과 `ecosystem.config.js`를 배포한 뒤 PM2의 `tyange-blog` 프로세스를 재시작합니다.

이 빌드 과정에서 CMS API(`NUXT_PUBLIC_TYANGE_CMS_API_BASE`)를 다시 조회하므로, 게시글 publish/update/delete 이후 재배포가 실행되면 최신 콘텐츠 기준으로 앱 응답과 `rss.xml`이 함께 갱신됩니다.

## On-Demand Rebuild Trigger

CMS API는 GitHub의 `repository_dispatch` 엔드포인트를 호출해서 커밋 없이 재배포를 시작하면 됩니다.

- HTTP endpoint: `POST https://api.github.com/repos/tyange/tyange-blog/dispatches`
- 인증: `Authorization: Bearer <TOKEN>`
- 권한: GitHub fine-grained PAT 기준 이 저장소의 `Contents: write`
- 필수 body: `{ "event_type": "cms-content-changed" }`
- 선택 body: `client_payload`
- 성공 응답: `204 No Content`

예시 요청:

```bash
curl -L \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${TYANGE_BLOG_REDEPLOY_TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/tyange/tyange-blog/dispatches \
  -d '{
    "event_type": "cms-content-changed",
    "client_payload": {
      "source": "tyange-cms-api",
      "content_event": "publish",
      "post_id": "hello-world",
      "visibility": "visible"
    }
  }'
```

권장 payload 규약:

- `source`: 호출 주체. 예: `tyange-cms-api`
- `content_event`: `publish`, `update`, `delete`
- `post_id`: 변경된 게시글 식별자
- `visibility`: `visible` 또는 `hidden`

`client_payload`는 워크플로 로깅용이며 현재 배포 동작 자체는 `event_type=cms-content-changed`만으로 충분합니다.

## Guardrails

같은 시점에 트리거가 여러 번 들어와도 워크플로의 `concurrency`가 `tyange-blog-deploy` 단일 그룹으로 묶여 있어서, 이전 실행은 취소되고 마지막 요청 기준 배포만 진행됩니다. 즉 중복 트리거는 대체로 harmless하며, 최종 상태만 남게 됩니다.

## Verification

검증 포인트는 아래 순서입니다.

1. CMS API에서 visible 게시글을 publish/update/delete 한다.
2. CMS API가 위 `repository_dispatch` 호출로 재배포를 요청한다.
3. GitHub Actions `Deploy Nuxt to Lightsail` 실행이 시작되고 `Build` 단계가 성공한다.
4. 배포 완료 후 `https://blog.tyange.com/rss.xml`에서 변경된 게시글 항목이 반영됐는지 확인한다.
5. 이후 `tyange-cms-api`의 RSS poller가 다음 주기(최대 300초 내)에서 새 feed item을 감지한다.

수동 점검이 필요하면 GitHub Actions의 `workflow_dispatch`로도 같은 배포를 직접 실행할 수 있습니다.
