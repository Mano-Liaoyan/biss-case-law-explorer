<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { ComparatorOption, SearchRule } from '~/types/search'
import { fieldOptionsECHR } from '~/mock/search'

const q = ref('')
const queryName = ref('')

const AdvancedSearch = resolveComponent('AdvancedSearch')
const ResultFilter = resolveComponent('ResultFilter')
const ResultTable = resolveComponent('ResultTable')

const { results, loading, error, handleSearch, fetchInitialData } = useSearch()

const activeFilters = ref({
  startDate: new CalendarDate(2020, 1, 1),
  endDate: new CalendarDate(2024, 12, 31),
  instances: [] as string[],
  domains: [] as string[],
  keywords: [] as string[]
})

const filteredResults = computed(() => {
  return results.value.filter(result => {
    // 1. Keyword filter
    if (activeFilters.value.keywords.length > 0) {
      const searchStr = `${result.summary} ${result.ecli} ${result.domain}`.toLowerCase()
      const matchesAllKeywords = activeFilters.value.keywords.every(kw => 
        searchStr.includes(kw.toLowerCase())
      )
      if (!matchesAllKeywords) return false
    }

    // 2. Date range filter
    const resultDate = result.date // "YYYY-MM-DD"
    const startStr = activeFilters.value.startDate.toString()
    const endStr = activeFilters.value.endDate.toString()
    if (resultDate < startStr || resultDate > endStr) return false

    // 3. Instances filter
    if (activeFilters.value.instances.length > 0) {
      const ecli = result.ecli.toUpperCase()
      let matchInstance = false
      
      for (const id of activeFilters.value.instances) {
        if (id === 'hoge-raad' && ecli.includes(':HR:')) matchInstance = true
        else if (id === 'raad-van-state' && ecli.includes(':RVS:')) matchInstance = true
        else if (id === 'centrale-raad' && ecli.includes(':CRVB:')) matchInstance = true
        else if (id === 'college-v-beroep' && ecli.includes(':CBB:')) matchInstance = true
        else if ((id === 'gerechtshoven' || id.startsWith('hof-')) && ecli.includes(':GH')) matchInstance = true
        else if ((id === 'rechtbanken' || id.startsWith('rb-')) && ecli.includes(':RB')) matchInstance = true
        
        if (matchInstance) break
      }
      if (!matchInstance) return false
    }

    // 4. Domains filter
    if (activeFilters.value.domains.length > 0) {
      const domainMapping: Record<string, string> = {
        'International': 'int-publiekrecht',
        'Criminal': 'strafrecht',
        'Administrative': 'bestuursrecht',
        'Constitutional': 'bestuursrecht',
        'Civil': 'civiel-recht',
        'Familial': 'civiel-recht',
      }
      
      const mappedDomain = domainMapping[result.domain]
      if (!mappedDomain) return false

      const matchDomain = activeFilters.value.domains.some(id => {
        return id === mappedDomain || id.includes(mappedDomain)
      })
      
      if (!matchDomain) return false
    }

    return true
  })
})

const comparatorOptions: ComparatorOption[] = [
  { label: 'violated', value: 'violated' },
  { label: 'applied', value: 'applied' },
  { label: 'not violated', value: '!violated' },
  { label: 'is not', value: 'is_not' },
  { label: 'starts with', value: 'starts_with' },
  { label: 'ends with', value: 'ends_with' },
]

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
        <ResultFilter @filter="(f: any) => activeFilters = f" />
      </div>

      <!-- Results List (Right Side) -->
      <div class="lg:col-span-10 space-y-4">
        <ResultTable :data="filteredResults" :loading="loading" />
      </div>
    </div>
  </div>
</template>
