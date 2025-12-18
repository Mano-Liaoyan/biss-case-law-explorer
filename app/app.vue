<script setup lang="ts">
</script>

<template>
  <UApp>
    <UHeader :ui="{ container: '!max-w-full px-4.5 sm:px-4.5 lg:px-4.5' }">
      <template #left>
        <NuxtLink to="/" class="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white shrink-0">
          Case Law Explorer
        </NuxtLink>
        <UNavigationMenu :items="items" class="ml-1 pt-1" />
      </template>

      <template #right>
        <UColorModeButton />
        <!-- TODO: change the URL to my own github repository -->
        <UButton to="https://github.com/nuxt-ui-templates/starter" target="_blank" icon="i-simple-icons-github" aria-label="GitHub" color="neutral" variant="ghost" />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
    </UMain>

  </UApp>
</template>