import type { ContentCollectionItem } from "@nuxt/content";

export type PostListItem = Pick<
  ContentCollectionItem,
  "id" | "date" | "featured" | "tags" | "title" | "description"
>;
