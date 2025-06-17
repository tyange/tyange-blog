<template>
  <header class="flex w-full justify-center shadow-sm">
    <nav class="navbar bg-base-100 grid max-w-3xl grid-cols-2 p-4 sm:p-0">
      <div class="flex flex-1 place-content-start items-center gap-3 sm:gap-5">
        <NuxtLink class="text-2xl font-extrabold sm:text-3xl" to="/">tyange blog</NuxtLink>
      </div>
      <div class="flex justify-end">
        <div class="dropdown dropdown-bottom dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <CircleHelp />
          </div>
          <div tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-5 text-center shadow-sm">
            <a href="mailto:usun16@gmail.com" class="btn btn-link">usun16@gmail.com</a>
            <div class="mt-3 flex justify-center gap-5">
              <button class="h-5 w-5 cursor-pointer" @click="handleNavigateTo(githubUrl, true)">
                <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <title>GitHub</title>
                  <path
                    d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                  />
                </svg>
              </button>
              <button class="h-5 w-5 cursor-pointer" @click="handleNavigateTo(twitterUrl, true)">
                <svg role="img" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <title>X</title>
                  <path
                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { CircleHelp } from 'lucide-vue-next';

import { githubUrl, twitterUrl } from '~/constants/my-info';

const handleNavigateTo = async (url: string, isExternal: boolean) => {
  await navigateTo(url, { external: isExternal });
};
</script>
