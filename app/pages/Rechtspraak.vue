<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { SearchRule, SearchResult, ComparatorOption } from '~/types/search'
import { fieldOptionsRechtspraak } from '~/mock/search'

const q = ref('')
const queryName = ref('')

const AdvancedSearch = resolveComponent('AdvancedSearch')
const ResultFilter = resolveComponent('ResultFilter')
const ResultTable = resolveComponent('ResultTable')

const { results, loading, error, handleSearch, fetchInitialData } = useSearch()

const open = ref(false)

const activeFilters = ref({
  startDate: new CalendarDate(2000, 1, 1),
  endDate: new CalendarDate(2030, 1, 1),
  instances: [] as string[],
  domains: [] as string[],
  keywords: [] as string[]
})

const filteredResults = computed(() => {
  return results.value.filter(result => {
    // Keyword filter
    if (activeFilters.value.keywords.length > 0) {
      const searchStr = `${result.summary} ${result.ecli} ${result.domain}`.toLowerCase()
      const matchesAllKeywords = activeFilters.value.keywords.every(kw =>
        searchStr.includes(kw.toLowerCase())
      )
      if (!matchesAllKeywords) return false
    }

    // Date range filter
    const resultDate = result.date // "YYYY-MM-DD"
    const startStr = activeFilters.value.startDate.toString()
    const endStr = activeFilters.value.endDate.toString()
    if (resultDate < startStr || resultDate > endStr) return false

    // Instances filter
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

    // Domains filter
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
        // Match if the selected ID is the mapped parent or if it's a child (we assume children match their parents for this mock)
        // In a real app, we'd have more granular domain data.
        return id === mappedDomain || id.includes(mappedDomain)
      })

      if (!matchDomain) return false
    }

    return true
  })
})

const advancedRules = ref<SearchRule[]>([
  { id: '1', operator: 'AND', field: Object.keys(fieldOptionsRechtspraak)[0]!, comparator: fieldOptionsRechtspraak[Object.keys(fieldOptionsRechtspraak)[0]!]?.comparators[0]?.value!, value: '' },
])

const rechtspraakSections = ref([
  {
    id: 'instances',
    name: "Instances",
    icon: "i-ri:instance-line",
    type: 'tree' as const,
    isOpen: false,
    options: [
      { id: 'hoge-raad', label: 'Hoge Raad' },
      { id: 'raad-van-state', label: 'Raad van State' },
      { id: 'centrale-raad', label: 'Centrale Raad van Beroep' },
      { id: 'college-v-beroep', label: 'College van Beroep voor het bedrijfsleven' },
      {
        id: 'gerechtshoven',
        label: 'Gerechtshoven',
        isOpen: false,
        children: [
          { id: 'hof-amsterdam', label: 'Gerechtshof Amsterdam' },
          { id: 'hof-arnhem', label: 'Gerechtshof Arnhem-Leeuwarden' },
          { id: 'hof-den-haag', label: 'Gerechtshof Den Haag' },
          { id: 'hof-hertogenbosch', label: "Gerechtshof 's Hertogenbosch" },
        ],
      },
      {
        id: 'rechtbanken',
        label: 'Rechtbanken',
        isOpen: false,
        children: [
          { id: 'rb-amsterdam', label: 'Rechtbank Amsterdam' },
          { id: 'rb-den-haag', label: 'Rechtbank Den Haag' },
          { id: 'rb-gelderland', label: 'Rechtbank Gelderland' },
          { id: 'rb-limburg', label: 'Rechtbank Limburg' },
          { id: 'rb-midden-nl', label: 'Rechtbank Midden-Nederland' },
          { id: 'rb-noord-holland', label: 'Rechtbank Noord-Holland' },
          { id: 'rb-noord-nl', label: 'Rechtbank Noord-Nederland' },
          { id: 'rb-oost-brabant', label: 'Rechtbank Oost-Brabant' },
          { id: 'rb-overijssel', label: 'Rechtbank Overijssel' },
          { id: 'rb-rotterdam', label: 'Rechtbank Rotterdam' },
          { id: 'rb-z-w-brabant', label: 'Rechtbank Zeeland-West-Brabant' },
        ],
      },
      {
        id: 'andere-inst',
        label: 'Andere instanties binnen het Koninkrijk',
        isOpen: false,
        children: [
          { id: 'hof-st-maarten', label: 'Constitutioneel Hof Sint Maarten' },
          { id: 'gem-hof-justitie', label: 'Gemeenschappelijk Hof van Justitie van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba' },
          { id: 'ger-ambtenaren', label: 'Gerecht in Ambtenarenzaken van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba' },
          { id: 'raad-ber-ambt', label: 'Raad van Beroep in Ambtenarenzaken van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba' },
          { id: 'raad-ber-belast', label: 'Raad van Beroep voor Belastingzaken van Aruba, Curacao, Sint Maarten en van Bonaire, Sint Eustatius en Saba' },
          { id: 'ger-eerste-aruba', label: 'Gerecht in Eerste Aanleg van Aruba' },
          { id: 'ger-eerste-bonaire', label: 'Gerecht in eerste aanleg van Bonaire, Sint Eustatius en Saba' },
          { id: 'ger-eerste-curacao', label: 'Gerecht in eerste aanleg van Curaçao' },
          { id: 'ger-eerste-st-maarten', label: 'Gerecht in eerste aanleg van Sint Maarten' },
        ],
      },
    ]
  },
  {
    id: 'domains',
    name: "Domains",
    icon: "i-ic:round-domain",
    type: 'tree' as const,
    isOpen: false,
    options: [
      {
        id: 'bestuursrecht',
        label: 'Bestuursrecht',
        isOpen: false,
        children: [
          { id: 'ambtenarenrecht', label: 'Ambtenarenrecht' },
          { id: 'belastingrecht', label: 'Belastingrecht' },
          { id: 'bestuursprocesrecht', label: 'Bestuursprocesrecht' },
          { id: 'bestuursstrafrecht', label: 'Bestuursstrafrecht' },
          { id: 'eu-bestuursrecht', label: 'Europees bestuursrecht' },
          { id: 'mededingingsrecht-b', label: 'Mededingingsrecht' },
          { id: 'omgevingsrecht', label: 'Omgevingsrecht' },
          { id: 'soc-zekerheid', label: 'Socialezekerheidsrecht' },
          { id: 'vreemdelingenrecht', label: 'Vreemdelingenrecht' },
        ],
      },
      {
        id: 'civiel-recht',
        label: 'Civiel recht',
        isOpen: false,
        children: [
          { id: 'aanbestedingsrecht', label: 'Aanbestedingsrecht' },
          { id: 'arbeidsrecht', label: 'Arbeidsrecht' },
          { id: 'burgerlijk-procesrecht', label: 'Burgerlijk procesrecht' },
          { id: 'eu-civiel-recht', label: 'Europees civiel recht' },
          { id: 'goederenrecht', label: 'Goederenrecht' },
          { id: 'insolventierecht', label: 'Insolventierecht' },
          { id: 'intellectueel-eigendom', label: 'Intellectueel-eigendomsrecht' },
          { id: 'int-privaat-recht', label: 'Internationaal privaatrecht' },
          { id: 'mededingingsrecht-c', label: 'Mededingingsrecht' },
          { id: 'ondernemingsrecht', label: 'Ondernemingsrecht' },
          { id: 'personen-familie', label: 'Personen- en familierecht' },
          { id: 'verbintenissenrecht', label: 'Verbintenissenrecht' },
        ],
      },
      {
        id: 'int-publiekrecht',
        label: 'Internationaal publiekrecht',
        isOpen: false,
        children: [
          { id: 'mensenrechten', label: 'Mensenrechten' },
          { id: 'volkenrecht', label: 'Volkenrecht' },
        ],
      },
      {
        id: 'strafrecht',
        label: 'Strafrecht',
        isOpen: false,
        children: [
          { id: 'eu-strafrecht', label: 'Europees strafrecht' },
          { id: 'int-strafrecht', label: 'Internationaal strafrecht' },
          { id: 'materieel-strafrecht', label: 'Materieel strafrecht' },
          { id: 'penitentiair-strafrecht', label: 'Penitentiair strafrecht' },
          { id: 'strafprocesrecht', label: 'Strafprocesrecht' },
        ],
      },
    ]
  }
])

onMounted(async () => {
  await fetchInitialData()
})

const handleFilterChange = (f: any) => {
  activeFilters.value = {
    ...activeFilters.value,
    ...f
  }
}

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
          <AdvancedSearch v-model:rules="advancedRules" :fields="fieldOptionsRechtspraak" @search="handleMainSearch" />
        </template>
      </UCollapsible>
    </UCard>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 bg-gray-50/50 dark:bg-gray-900/50 rounded-lg">
      <!-- Filters Panel (Left Side) -->
      <div class="lg:col-span-2">
        <ResultFilter :sections="rechtspraakSections" @filter="handleFilterChange" />
      </div>

      <!-- Results List (Right Side) -->
      <div class="lg:col-span-10 space-y-4">
        <ResultTable :loading="loading" :data="filteredResults" />
      </div>
    </div>
  </div>
</template>
