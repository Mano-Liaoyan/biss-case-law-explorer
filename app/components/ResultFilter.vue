<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { CheckboxGroupItem } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')
const USeparator = resolveComponent('USeparator')

export type FilterType = 'tree' | 'search-list' | 'checkbox-group'

export interface FilterOption {
  id: string
  label: string
  children?: FilterOption[]
  isOpen?: boolean
}

export interface FilterSection {
  id: string
  name: string
  icon?: string
  type: FilterType
  options: FilterOption[]
  gridCols?: number
  placeholder?: string
  isOpen?: boolean
}

const props = defineProps<{
  sections: FilterSection[]
}>()

const emit = defineEmits(['filter'])

const inputDateStart = useTemplateRef('inputDateStart')
const inputDateEnd = useTemplateRef('inputDateEnd')

const startDate = shallowRef(new CalendarDate(2021, 1, 10))
const endDate = shallowRef(new CalendarDate(2022, 1, 10))

const selectedValues = ref<Record<string, string[]>>({})
const searchInputs = ref<Record<string, string>>({})

const keywords = ref<string[]>([])
const keywordInput = ref('')
const isAdvancedSettingOpen = ref(false)

// Initialize selectedValues and searchInputs
watch(() => props.sections, (newSections) => {
  newSections.forEach(section => {
    if (selectedValues.value[section.id] === undefined) {
      selectedValues.value[section.id] = []
    }
    if (section.type === 'search-list' && searchInputs.value[section.id] === undefined) {
      searchInputs.value[section.id] = ''
    }
  })
}, { immediate: true })

const getFilteredOptions = (section: FilterSection) => {
  const search = searchInputs.value[section.id] || ''
  if (!search) return []
  return section.options.filter(opt =>
    opt.label.toLowerCase().includes(search.toLowerCase()) ||
    opt.id.toLowerCase().includes(search.toLowerCase())
  )
}

const handleToggle = (sectionId: string, item: FilterOption, checked: boolean | 'indeterminate') => {
  if (checked === 'indeterminate') return

  const selected = selectedValues.value[sectionId] || []
  const idsToToggle = [item.id]
  if (item.children) {
    const getAllChildIds = (children: FilterOption[]): string[] => {
      let ids: string[] = []
      children.forEach(child => {
        ids.push(child.id)
        if (child.children) {
          ids.push(...getAllChildIds(child.children))
        }
      })
      return ids
    }
    idsToToggle.push(...getAllChildIds(item.children))
  }

  if (checked) {
    idsToToggle.forEach(id => {
      if (!selected.includes(id)) {
        selected.push(id)
      }
    })
  } else {
    selectedValues.value[sectionId] = selected.filter(id => !idsToToggle.includes(id))
  }
}

const isSelected = (sectionId: string, id: string): boolean => {
  return (selectedValues.value[sectionId] || []).includes(id)
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
watch([startDate, endDate, selectedValues, keywords], () => {
  emit('filter', {
    startDate: startDate.value,
    endDate: endDate.value,
    keywords: keywords.value,
    ...selectedValues.value
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

      <!-- Dynamic Multi-Selection Sections -->
      <template v-for="section in props.sections" :key="section.id">
        <div class="px-4 sm:px-0">
          <UCollapsible v-model:open="section.isOpen">
            <div class="flex items-center justify-between mb-2 cursor-pointer">
              <label class="text-sm font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                <UIcon v-if="section.icon" :name="section.icon" class="w-4 h-4" />
                {{ section.name }}
              </label>
              <UIcon :name="section.isOpen ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" class="w-4 h-4 text-gray-400" />
            </div>

            <template #content>
              <!-- Tree Type -->
              <div v-if="section.type === 'tree'" class="space-y-1">
                <div v-for="option in section.options" :key="option.id">
                  <template v-if="option.children">
                    <UCollapsible v-model:open="option.isOpen">
                      <div class="flex items-center gap-2 py-1 group">
                        <UButton :icon="option.isOpen ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'" variant="ghost" color="neutral" size="xs"
                          class="p-0.5 text-gray-400 group-hover:text-gray-600" />
                        <UCheckbox :model-value="isSelected(section.id, option.id)" :label="option.label" @update:model-value="(val) => handleToggle(section.id, option, val)" />
                      </div>
                      <template #content>
                        <div class="ml-9 space-y-1 mb-2">
                          <UCheckboxGroup v-model="selectedValues[section.id]" value-key="id" :items="option.children" class="py-0.5" />
                        </div>
                      </template>
                    </UCollapsible>
                  </template>
                  <template v-else>
                    <div class="flex items-center gap-2 py-1">
                      <UButton icon="i-lucide-dot" variant="ghost" color="neutral" size="xs" class="invisible p-0.5" />
                      <UCheckbox :model-value="isSelected(section.id, option.id)" :label="option.label" @update:model-value="(val) => handleToggle(section.id, option, val)" />
                    </div>
                  </template>
                </div>
              </div>

              <!-- Search List Type -->
              <div v-else-if="section.type === 'search-list'" class="space-y-2 pb-2">
                <UInput v-model="searchInputs[section.id]" icon="i-heroicons-magnifying-glass" :placeholder="section.placeholder || 'Search...'" />
                <div class="mt-2 text-xs font-medium text-gray-500">Options</div>
                <div v-if="getFilteredOptions(section).length > 0" class="space-y-1 mt-1">
                  <UCheckboxGroup v-model="selectedValues[section.id]" :items="getFilteredOptions(section)" value-key="id" />
                </div>
                <div v-else class="text-xs text-gray-400 mt-1">
                  {{ searchInputs[section.id] ? 'No results found' : 'Type to search' }}
                </div>
              </div>

              <!-- Checkbox Group Type -->
              <div v-else-if="section.type === 'checkbox-group'" class="pb-2">
                <UCheckboxGroup v-model="selectedValues[section.id]" :items="section.options" value-key="id"
                  :class="[section.gridCols ? `grid grid-cols-${section.gridCols} gap-2` : 'space-y-2']" />
              </div>
            </template>
          </UCollapsible>
          <USeparator class="pt-2" />
        </div>
      </template>

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
