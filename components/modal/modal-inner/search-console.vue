<template>
  <div
    class="relative flex h-120 w-5/6 max-w-150 flex-col rounded-xl bg-white shadow-lg"
  >
    <div class="absolute z-10 grid h-full w-full items-center justify-center">
      <Eye v-if="!isInit" class="h-40 w-40 text-slate-200" />
      <EyeClosed v-else class="h-40 w-40 text-slate-200" />
    </div>
    <div class="absolute top-3 right-3 z-30 outline-none">
      <button class="outline-none" @click="modalStore.closeModal">
        <X class="text-slate-400 transition-colors hover:text-slate-700" />
      </button>
    </div>
    <div class="z-20 flex w-full items-center justify-center px-5 pt-5 pb-5">
      <input
        type="text"
        placeholder="블로그 글 검색하기..."
        class="w-5/6 rounded-lg border border-gray-300 px-4 py-3 focus:border-transparent focus:ring-2 focus:ring-blue-500 focus:outline-none"
        v-model="enteredKeyword"
      />
    </div>
    <div class="z-20 flex-1 overflow-auto pr-5 pb-5 pl-5">
      <ul class="flex flex-col gap-3">
        <li
          v-for="item in result"
          class="rounded-md border border-gray-300 p-3 shadow-sm"
        >
          <NuxtLink :to="item.id">
            <div class="text-slate-600">
              <span>
                <template
                  v-for="text in highlightText(item.content, item.queryTerms)"
                >
                  <template v-if="!text.marked">{{ text.text }}</template>
                  <mark v-else>{{ text.text }}</mark>
                </template>
              </span>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { EyeClosed, Eye, X } from "lucide-vue-next";
import MiniSearch from "minisearch";

import { useModalStore } from "~/stores/modal";

const modalStore = useModalStore();

const enteredKeyword = ref("");

const isInit = computed(() => enteredKeyword.value === "");

const { data: searchResult } = await useAsyncData("search-sections", () => {
  return queryCollectionSearchSections("content", {
    ignoredTags: ["pre", "code", "style"],
  });
});

const miniSearch = new MiniSearch({
  fields: ["content"],
  storeFields: ["id", "content"],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
  },
});

miniSearch.addAll(searchResult.value ?? []);
const result = computed(() => {
  return miniSearch.search(enteredKeyword.value);
});

const highlightText = (text: string, terms: string[]) => {
  const pattern = new RegExp(`(${terms.join("|")})`, "g");
  const result = text.split(pattern);
  return result.map((r) => ({
    marked: terms.includes(r),
    text: r,
  }));
};
</script>
