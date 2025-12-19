<script setup lang="ts">

import type { SearchRule } from '~/types/search'
import { fieldOptions } from '~/mock/search'

const q = ref('')

const AdvancedSearch = resolveComponent('AdvancedSearch')
const ResultFilter = resolveComponent('ResultFilter')
const ResultTable = resolveComponent('ResultTable')

const { results, handleSearch } = useSearch()

const open = ref(false)
</script>

<template>
  <div class="w-full p-4 flex flex-col gap-4">
    <!-- Advanced Search Builder -->
    <UCard>
      <div class="flex flex-row gap-2">
        <UInput v-model="q" icon="i-ic:round-drive-file-rename-outline" size="xl" placeholder="Query Name (Optional)" class="basis-2xs">
        </UInput>
        <UInput v-model="q" icon="i-heroicons-magnifying-glass" size="xl" placeholder="Search for cases, articles, or ECLIs..." class="flex-auto">
        </UInput>
        <UButton class="flex-initial" size="xl" color="primary">Search</UButton>
      </div>
      <UCollapsible v-model:open="open">
        <UButton class="group my-2" color="primary" variant="ghost" trailing-icon="i-lucide-chevron-down" :ui="{
          trailingIcon:
            'group-data-[state=open]:rotate-180 transition-transform duration-200',
        }">
          Advanced Search
        </UButton>
        <template #content>
          <AdvancedSearch :fields="fieldOptions" @search="handleSearch" />
        </template>
      </UCollapsible>
    </UCard>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-lg">
      <!-- Filters Panel (Left Side) -->
      <div class="lg:col-span-2">
        <ResultFilter />
      </div>

      <!-- Results List (Right Side) -->
      <div class="lg:col-span-10 space-y-4">
        <ResultTable :data="results" />
      </div>
    </div>
  </div>
</template>
