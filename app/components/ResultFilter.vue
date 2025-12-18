<script setup lang="ts">
import { CalendarDate } from '@internationalized/date'
import type { CheckboxGroupItem } from '@nuxt/ui'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')

const emit = defineEmits(['filter'])

const inputDateStart = useTemplateRef('inputDateStart')
const inputDateEnd = useTemplateRef('inputDateEnd')

const startDate = shallowRef(new CalendarDate(2021, 1, 10))
const endDate = shallowRef(new CalendarDate(2022, 1, 10))

const selectedDomains = ref<any>([])
const keywords = ref<string[]>([])
const keywordInput = ref('')

const domains = ref<CheckboxGroupItem[]>([
  {
    label: 'Administrative',
    id: 'administrative',
  },
  {
    label: 'Civil',
    id: 'civil',
  },
  {
    label: 'Commercial',
    id: 'commercial',
  },
  {
    label: 'Constitutional',
    id: 'constitutional',
  },
  {
    label: 'Criminal',
    id: 'criminal',
  },
  {
    label: 'Family',
    id: 'family',
  },
  {
    label: 'International',
    id: 'international',
  },
  {
    label: 'Labor',
    id: 'labor',
  },
  {
    label: 'Tax',
    id: 'tax',
  },
])

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
watch([startDate, endDate, selectedDomains, keywords], () => {
  emit('filter', {
    startDate: startDate.value,
    endDate: endDate.value,
    domains: selectedDomains.value,
    keywords: keywords.value
  })
}, { deep: true })
</script>

<template>
  <UCard class="h-full">
    <template #header>
      <h2 class="font-semibold">Filters</h2>
    </template>

    <div class="space-y-6">
      <!-- Date Range -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Date Range</label>
        <div class="space-y-2"></div>
        <label class="text-xs font-medium text-gray-700 dark:text-gray-200">From:</label><br />
        <UInputDate ref="inputDateStart" v-model="startDate">
          <template #trailing>
            <UPopover :reference="inputDateStart?.inputsRef[3]?.$el">
              <UButton color="neutral" variant="link" size="sm" icon="i-lucide-calendar" aria-label="Select a date" class="px-0" />

              <template #content>
                <UCalendar v-model="startDate" class="p-2" />
              </template>
            </UPopover>
          </template>
        </UInputDate>
        <br />
        <label class="text-xs font-medium text-gray-700 dark:text-gray-200">To:</label><br />
        <UInputDate ref="inputDateEnd" v-model="endDate">
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

      <!-- Keywords -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Keywords</label>
        <UInput v-model="keywordInput" icon="i-heroicons-tag" placeholder="Type & Enter..." @keydown.enter="addKeyword" />
        <div class="flex flex-wrap gap-1 mt-2">
          <UBadge v-for="word in keywords" :key="word" color="primary" variant="subtle" class="cursor-pointer" @click="removeKeyword(word)">
            {{ word }}
            <UIcon name="i-heroicons-x-mark" class="ml-1 w-3 h-3" />
          </UBadge>
        </div>
      </div>

      <!-- Domains -->
      <div class="space-y-2">
        <label class="text-sm font-medium text-gray-700 dark:text-gray-200">Domains</label>
        <div class="space-y-1">
          <UCheckboxGroup v-model="selectedDomains" :items="domains" value-key="id" />
        </div>
      </div>
    </div>
  </UCard>
</template>
