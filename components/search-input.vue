<template>
  <div class="flex place-content-end items-center gap-5">
    <label class="input w-40 sm:w-auto">
      <Search />
      <input
        type="search"
        class="grow"
        placeholder="Search"
        v-model="enteredKeyword"
      />
      <kbd class="kbd kbd-sm">⌘</kbd>
      <kbd class="kbd kbd-sm">K</kbd>
    </label>
  </div>
</template>

<script lang="ts" setup>
import { Search } from "lucide-vue-next";
import MiniSearch from "minisearch";

const enteredKeyword = ref("");

const { data: searchResult } = await useAsyncData("search-sections", () => {
  return queryCollectionSearchSections("content", {
    ignoredTags: ["code", "pre"],
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
const result = computed(() => miniSearch.search(enteredKeyword.value));
</script>
