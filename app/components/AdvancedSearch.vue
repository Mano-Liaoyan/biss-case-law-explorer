<script setup lang="ts">
import type { SearchRule, FieldOption, ComparatorOption, FieldOptionMap } from '~/types/search'

const props = defineProps<{
  fields: FieldOptionMap
}>()

const emit = defineEmits<{
  (e: 'search', rules: SearchRule[]): void
}>()

const searchRules = defineModel<SearchRule[]>('rules', {
  required: true
})

// Watch for changes in the field of each search rule to reset the comparator
watch(
  () => searchRules.value.map(rule => rule.field),
  (newFields, oldFields) => {
    newFields.forEach((newField, index) => {
      if (oldFields && newField !== oldFields[index]) {
        const rule = searchRules.value[index]
        if (rule) {
          const firstComparator = props.fields[newField]?.comparators[0]?.value
          rule.comparator = firstComparator || ''
        }
      }
    })
  },
  { deep: true }
)

const addRule = () => {
  searchRules.value.push({
    id: Math.random().toString(36).substr(2, 9),
    operator: 'AND',
    field: Object.keys(props.fields)[0] || '',
    comparator: (props.fields && Object.keys(props.fields)[0] && props.fields[Object.keys(props.fields)[0]!]?.comparators[0]?.value) || '',
    value: '',
  })
}

const removeRule = (index: number) => {
  if (searchRules.value.length > 1) {
    searchRules.value.splice(index, 1)
  } else if (searchRules.value[0]) {
    // If it's the last rule, just clear the value
    searchRules.value[0].value = ''
  }
}

const clearRules = () => {
  searchRules.value = [
    {
      id: Math.random().toString(36).substr(2, 9),
      operator: 'AND',
      field: Object.keys(props.fields)[0] || '',
      comparator: (props.fields && Object.keys(props.fields)[0] && props.fields[Object.keys(props.fields)[0]!]?.comparators[0]?.value) || '',
      value: '',
    },
  ]
}
</script>

<template>
  <div class="flex flex-col space-y-2">
    <div>
      <USeparator />
    </div>

    <div>
      <!-- <span class="text-sm font-medium text-gray-500 pl-2">When incoming requests match…</span> -->
      <div class="flex flex-col gap-4">
        <div class="flex flex-row gap-4">
          <span class="basis-30 shrink-0 pl-1">Field</span>
          <span class="basis-30 shrink-0 pl-0.5">Condition</span>
          <span class="flex-auto grow pl-0.5">Value</span>
          <div class="basis-20 shrink-0"></div>
          <span class="flex-none"></span>
        </div>
        <div v-for="(rule, index) in searchRules" :key="rule.id" class="flex flex-row gap-4">
          <!-- Operator (AND/OR) - Visible from 2nd item -->

          <!-- Field Selector -->
          <USelect class="basis-30 shrink-0 overflow-auto" size="md" v-model="rule.field" :items="Object.values(props.fields)" option-attribute="label" value-attribute="value"
            :ui="{ content: 'min-w-fit' }" placeholder="Field" />

          <!-- Comparator Selector -->
          <USelect class="basis-30 shrink-0 overflow-auto" size="md" v-model="rule.comparator" :items="props.fields[rule.field]?.comparators || []" value-attribute="value"
            option-attribute="label" :ui="{ content: 'min-w-fit' }" placeholder="Condition" />

          <!-- Value Input -->
          <UInput class=" flex-auto grow" size="md" v-model="rule.value" placeholder="Value..." @keydown.enter="emit('search', searchRules)" />


          <USelect class="basis-20 shrink-0" size="md" v-model="rule.operator" color="secondary" variant="none" :items="['AND', 'OR']" placeholder="Operator" />

          <!-- Delete Rule -->
          <UButton class="flex-none" color="error" variant="ghost" icon="i-heroicons-trash" size="sm" @click="removeRule(index)"
            :disabled="searchRules.length === 1 && !rule.value" />
        </div>
      </div>


      <!-- Add Rule Button -->
      <div class="mt-6 flex flex-row gap-4 justify-end">
        <UButton color="neutral" variant="soft" icon="i-heroicons-plus" size="sm" label="Add Rule" @click="addRule" />
        <UButton color="error" variant="ghost" size="sm" icon="i-heroicons-trash" @click="clearRules" v-if="searchRules.length > 0">Clear All</UButton>
      </div>
    </div>
  </div>
</template>
