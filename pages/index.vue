<template>
  <div class="mb-12 flex flex-col gap-6">
    <div>
      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Featured Posts
      </h2>
      <div class="flex flex-col gap-5">
        <FeaturedPost
          v-for="item in featuredPostList"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
    <div>
      <h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
        Resent Posts
      </h2>
      <div class="flex flex-col gap-5">
        <PostCard v-for="item in resentPostList" :key="item.id" :item="item" />
      </div>
    </div>
  </div>
  <Modal modal-id="search-console">
    <SearchConsole />
  </Modal>
</template>

<script setup lang="ts">
import { useModalStore } from "~/stores/modal";
import { SELECTION } from "~/constants/selection";

import FeaturedPost from "~/components/featured-post.vue";
import PostCard from "~/components/post-card.vue";
import Modal from "~/components/modal/modal.vue";
import SearchConsole from "~/components/modal/modal-inner/search-console.vue";

const modalStore = useModalStore();

const { control, command, k } = useMagicKeys();

// TODO: 현재 @nuxt/content 모듈이 내부적으로 사용 중인 SQLite 관련 코드에서 오류가 있음.
// 아래 where 메서드에 boolean 값을 인자로 넘길 수 있으나, parsing 과정에서 SQLite에서 인식 가능한 0, 1로 변환되지 않음.
// 임시 방편으로 0, 1을 전달해서 코드를 작동시키고 추후 v3.1.0(현재 3.0.1)에서 버그가 고쳐지면 그때 boolean으로 값을 변경할 것.
// (관련 이슈: https://github.com/nuxt/content/issues/3047)
const { data: featuredPostList } = await useAsyncData("featured-posts", () => {
  return queryCollection("content")
    .where("featured", "=", 1)
    .select(...SELECTION)
    .all();
});

const { data: resentPostList } = await useAsyncData("resent-posts", () => {
  return queryCollection("content")
    .limit(5)
    .select(...SELECTION)
    .all();
});

watchEffect(() => {
  if ((control.value && k.value) || (command.value && k.value)) {
    modalStore.openModal("search-console");
  }
});
</script>
