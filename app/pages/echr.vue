<script setup lang="ts">

import type { ComparatorOption, SearchRule } from '~/types/search'
import { fieldOptionsECHR } from '~/mock/search'

const q = ref('')
const queryName = ref('')

const AdvancedSearch = resolveComponent('AdvancedSearch')
const ResultFilter = resolveComponent('ResultFilter')
const ResultTable = resolveComponent('ResultTable')

const comparatorOptions: ComparatorOption[] = [
  { label: 'violated', value: 'violated' },
  { label: 'applied', value: 'applied' },
  { label: 'not violated', value: '!violated' },
  { label: 'is not', value: 'is_not' },
  { label: 'starts with', value: 'starts_with' },
  { label: 'ends with', value: 'ends_with' },
]

const { results, loading, error, handleSearch, fetchInitialData } = useSearch()

const advancedRules = ref<SearchRule[]>([
  { id: '1', operator: 'AND', field: Object.keys(fieldOptionsECHR)[0]!, comparator: fieldOptionsECHR[Object.keys(fieldOptionsECHR)[0]!]?.comparators[0]?.value!, value: '' },
])

const handleMainSearch = () => {
  const combinedRules: SearchRule[] = []

  // Add main search rule if q has value
  if (q.value) {
    combinedRules.push({
      id: 'main-search',
      operator: 'AND',
      field: 'all',
      comparator: 'contains',
      value: q.value
    })
  }

  // Filter out empty advanced rules and add them
  const validAdvancedRules = advancedRules.value.filter(rule => rule.value.trim() !== '')

  // If we have both main and advanced, we need to decide on the operator
  // For now, let's just append them. useSearch logic will handle AND/OR based on rule.operator
  combinedRules.push(...validAdvancedRules)

  handleSearch(combinedRules)
}

const open = ref(false)

onMounted(async () => {
  await fetchInitialData()
})
</script>

<template>
  <div class="w-full p-4 flex flex-col gap-4">
    <!-- Advanced Search Builder -->
    <UCard>
      <div class="flex flex-row gap-2">
        <UInput v-model="queryName" icon="i-ic:round-drive-file-rename-outline" size="xl" placeholder="Query Name (Optional)" class="basis-2xs">
        </UInput>
        <UInput v-model="q" icon="i-heroicons-magnifying-glass" size="xl" placeholder="Search for cases, articles, or ECLIs..." class="flex-auto" @keydown.enter="handleMainSearch">
        </UInput>
        <UButton class="flex-initial" size="xl" color="primary" @click="handleMainSearch" :loading="loading">Search</UButton>
      </div>
      <UCollapsible v-model:open="open">
        <UButton class="group my-2" color="primary" variant="ghost" trailing-icon="i-lucide-chevron-down" :ui="{
          trailingIcon:
            'group-data-[state=open]:rotate-180 transition-transform duration-200',
        }">
          Advanced Search
        </UButton>
        <template #content>
          <AdvancedSearch v-model:rules="advancedRules" :fields="fieldOptionsECHR" @search="handleMainSearch" />
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
        <ResultTable :data="results" :loading="loading" />
      </div>
    </div>
  </div>
</template>
