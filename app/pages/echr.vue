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
  startDate: new CalendarDate(2000, 1, 1),
  endDate: new CalendarDate(2030, 1, 1),
  instances: [] as string[],
  domains: [] as string[],
  keywords: [] as string[],
  languages: [] as string[],
  importanceLevels: [] as string[],
  documentTypes: [] as string[]
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

    // 5. Languages filter
    if (activeFilters.value.languages.length > 0) {
      const resultLang = (result as any).language || 'ENG' // Default to ENG for mock
      if (!activeFilters.value.languages.includes(resultLang)) return false
    }

    // 6. Importance Levels filter
    if (activeFilters.value.importanceLevels.length > 0) {
      const resultImportance = String((result as any).importanceLevel || '1') // Default to 1 for mock
      if (!activeFilters.value.importanceLevels.includes(resultImportance)) return false
    }

    // 7. Document Types filter
    if (activeFilters.value.documentTypes.length > 0) {
      const resultDocType = (result as any).documentType || 'HEJUD' // Default for mock
      if (!activeFilters.value.documentTypes.includes(resultDocType)) return false
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

const echrSections = ref([
  {
    id: 'languages',
    name: 'Language',
    type: 'search-list' as const,
    isOpen: false,
    placeholder: '(e.g., ENG, FRE)',
    options: [
      { id: 'ENG', label: 'English (ENG)' },
      { id: 'FRE', label: 'French (FRE)' },
    ]
  },
  {
    id: 'importanceLevels',
    name: 'Importance Level (1-4)',
    type: 'checkbox-group' as const,
    isOpen: false,
    options: [
      { id: '1', label: 'Importance 1 (highest)' },
      { id: '2', label: 'Importance 2' },
      { id: '3', label: 'Importance 3' },
      { id: '4', label: 'Importance 4 (lowest)' },
    ]
  },
  {
    id: 'documentTypes',
    name: 'Document Types',
    type: 'checkbox-group' as const,
    isOpen: false,
    gridCols: 2,
    options: [
      { id: 'HEJUD', label: 'HEJUD' },
      { id: 'HEDEC', label: 'HEDEC' },
      { id: 'HECOM', label: 'HECOM' },
      { id: 'HEINF', label: 'HEINF' },
      { id: 'HECJUD', label: 'HECJUD' },
      { id: 'HECDEC', label: 'HECDEC' },
      { id: 'HECCOM', label: 'HECCOM' },
      { id: 'HECINF', label: 'HECINF' },
    ]
  }
])

const handleFilterChange = (f: any) => {
  activeFilters.value = {
    ...activeFilters.value,
    ...f
  }
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
        <ResultFilter :sections="echrSections" @filter="handleFilterChange" />
      </div>

      <!-- Results List (Right Side) -->
      <div class="lg:col-span-10 space-y-4">
        <ResultTable :data="filteredResults" :loading="loading" />
      </div>
    </div>
  </div>
</template>
