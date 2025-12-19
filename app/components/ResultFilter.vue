<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { CheckboxGroupItem } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const USeparator = resolveComponent('USeparator')

const emit = defineEmits(['filter'])

const inputDateStart = useTemplateRef('inputDateStart')
const inputDateEnd = useTemplateRef('inputDateEnd')

const startDate = shallowRef(new CalendarDate(2021, 1, 10))
const endDate = shallowRef(new CalendarDate(2022, 1, 10))

const selectedInstances = ref<string[]>([])
const selectedDomains = ref<string[]>([])
const keywords = ref<string[]>([])
const keywordInput = ref('')
const isAdvancedSettingOpen = ref(false)

interface Filter {
  name: string,
  iconId: string,
  collection: 'instances' | 'domains',
  filterChildren?: FilterItem[],
  isOpen?: boolean
}

interface FilterItem {
  id: string
  label: string
  children?: FilterItem[]
  isOpen?: boolean
}

const filterInstances = ref<Filter[]>([
  {
    name: "Instances",
    collection: 'instances',
    iconId: "i-ri:instance-line",
    filterChildren: [
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

    name: "Domains",
    collection: 'domains',
    iconId: "i-ic:round-domain",
    filterChildren: [
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

const handleToggle = (item: FilterItem, checked: boolean | 'indeterminate', collection: 'instances' | 'domains') => {
  if (checked === 'indeterminate') return

  const selected = collection === 'instances' ? selectedInstances : selectedDomains
  const idsToToggle = [item.id]
  if (item.children) {
    idsToToggle.push(...item.children.map(c => c.id))
  }

  if (checked) {
    idsToToggle.forEach(id => {
      if (!selected.value.includes(id)) {
        selected.value.push(id)
      }
    })
  } else {
    selected.value = selected.value.filter(id => !idsToToggle.includes(id))
  }
}

const isSelected = (id: string, collection: 'instances' | 'domains'): boolean => {
  const selected = collection === 'instances' ? selectedInstances.value : selectedDomains.value
  return selected.includes(id)
}

const addKeyword = () => {
  if (
    keywordInput.value.trim() &&
    !keywords.value.includes(keywordInput.value.trim())
  ) {
    keywords.value.push(keywordInput.value.trim())
    keywordInput.value = ''
  }
}

const removeKeyword = (word: string) => {
  keywords.value = keywords.value.filter((k) => k !== word)
}

// Watch for changes and emit filter event
watch([startDate, endDate, selectedInstances, selectedDomains, keywords], () => {
  emit('filter', {
    startDate: startDate.value,
    endDate: endDate.value,
    instances: selectedInstances.value,
    domains: selectedDomains.value,
    keywords: keywords.value
  })
}, { deep: true })
</script>

<template>
  <UCard class="h-full" :ui="{ body: 'p-0 sm:p-4' }">
    <template #header>
      <span class="font-semibold text-md p-0">Apply filters on results</span>
    </template>

    <div class="space-y-3">
      <!-- Keywords -->
      <div class="space-y-4 px-4 sm:px-0">
        <label class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
          <UIcon name="i-lucide-tag" class="w-4 h-4" />
          Keywords
        </label>
        <UInput v-model="keywordInput" icon="i-lucide-plus" placeholder="Add keyword..." @keydown.enter="addKeyword" />
        <div class="flex flex-wrap gap-1.5">
          <UBadge v-for="word in keywords" :key="word" color="primary" variant="subtle" class="pl-2 pr-1 py-0.5 rounded-full flex items-center gap-1">
            {{ word }}
            <UButton icon="i-lucide-x" variant="ghost" color="neutral" size="xs" class="p-0 hover:bg-transparent" @click="removeKeyword(word)" />
          </UBadge>
        </div>
      </div>

      <USeparator />

      <!-- Instances -->
      <div v-for="filter in filterInstances" :key="filter.name" class="px-4 sm:px-0">
        <UCollapsible v-model:open="filter.isOpen">
          <div class="flex items-center justify-between mb-2">
            <label class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <UIcon :name="filter.iconId" class="w-4 h-4" />
              {{ filter.name }}
            </label>
            <UIcon v-if="!filter.isOpen" name="i-lucide-chevron-right" class="w-4 h-4 text-gray-400" />
            <UIcon v-else name="i-lucide-chevron-down" class="w-4 h-4 text-gray-400" />
          </div>
          <template #content>
            <div v-for="filterChildren in filter.filterChildren" :key="filterChildren.id">
              <template v-if="filterChildren.children">
                <UCollapsible v-model:open="filterChildren.isOpen">
                  <div class="flex items-center gap-2 py-1 group">
                    <UButton :icon="filterChildren.isOpen ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" variant="ghost" color="neutral" size="xs"
                      class="p-0.5 text-gray-400 group-hover:text-gray-600" />
                    <UCheckbox :model-value="isSelected(filterChildren.id, filter.collection)" :label="filterChildren.label"
                      @update:model-value="(val) => handleToggle(filterChildren, val, filter.collection)" />
                  </div>
                  <template #content>
                    <div class="ml-9 space-y-1 mb-2">
                      <UCheckboxGroup :model-value="filter.collection === 'instances' ? selectedInstances : selectedDomains" value-key="id" :items="filterChildren.children"
                        class="py-0.5" @update:model-value="(val) => {
                          if (filter.collection === 'instances') selectedInstances = val as any
                          else selectedDomains = val as any
                        }" />
                    </div>
                  </template>
                </UCollapsible>
              </template>
              <template v-else>
                <div class="flex items-center gap-2 py-1">
                  <UButton :icon="filterChildren.isOpen ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" variant="ghost" color="neutral" size="xs"
                    class="invisible p-0.5 text-gray-400 group-hover:text-gray-600" />
                  <UCheckbox :model-value="isSelected(filterChildren.id, filter.collection)" :label="filterChildren.label"
                    @update:model-value="(val) => handleToggle(filterChildren, val, filter.collection)" />
                </div>
              </template>
            </div>
          </template>
        </UCollapsible>
        <USeparator class="pt-2" />
      </div>

      <div class="px-4 sm:px-0">
        <UCollapsible v-model:open="isAdvancedSettingOpen">
          <div class="flex items-center justify-between mb-2">
            <label class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
              <UIcon name="i-lucide-settings-2" class="w-4 h-4" />
              Advanced Settings
            </label>
            <UIcon v-if="!isAdvancedSettingOpen" name="i-lucide-chevron-right" class="w-4 h-4 text-gray-400" />
            <UIcon v-else name="i-lucide-chevron-down" class="w-4 h-4 text-gray-400" />
          </div>

          <template #content>
            <!-- Date Range -->
            <div class="mt-2 space-y-1 pl-4 sm:pl-6">
              <label class="text-sm text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <UIcon name="i-lucide-calendar" size="sm" class="w-4 h-4" />
                Dates
              </label>
              <div class="flex flex-col gap-1">
                <div class="flex flex-col space-y-1">
                  <span class="text-xs font-medium text-gray-500">From</span>
                  <UInputDate ref="inputDateStart" v-model="startDate">
                    <template #trailing>
                      <UPopover :reference="inputDateStart?.inputsRef[3]?.$el">
                        <UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar" aria-label="Select a date" class="px-0" />
                        <template #content>
                          <UCalendar v-model="startDate" class="p-1" />
                        </template>
                      </UPopover>
                    </template>
                  </UInputDate>
                </div>
                <div class="space-y-1">
                  <span class="text-xs font-medium text-gray-500">To</span>
                  <UInputDate ref="inputDateEnd" v-model="endDate" class="w-full">
                    <template #trailing>
                      <UPopover :reference="inputDateEnd?.inputsRef[3]?.$el">
                        <UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar" aria-label="Select a date" class="px-0" />
                        <template #content>
                          <UCalendar v-model="endDate" class="p-2" />
                        </template>
                      </UPopover>
                    </template>
                  </UInputDate>
                </div>
              </div>
            </div>
          </template>
        </UCollapsible>
      </div>
    </div>
  </UCard>
</template>
