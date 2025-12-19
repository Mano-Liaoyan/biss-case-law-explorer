import { ref } from 'vue'
import type { SearchRule, SearchResult } from '~/types/search'
import { allResults } from '~/mock/search'

export const useSearch = () => {
  const results = ref<SearchResult[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchInitialData = async () => {
    loading.value = true
    error.value = null
    try {
      // Simulate initial API delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      results.value = [...allResults]
    } catch (e: any) {
      error.value = e.message || 'An error occurred during initial fetch'
    } finally {
      loading.value = false
    }
  }

  const handleSearch = async (rules: SearchRule[]) => {
    loading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500))

      if (rules.length === 0 || (rules.length === 1 && !rules[0]!.value)) {
        results.value = [...allResults]
        return
      }

      const firstRule = rules[0]
      if (!firstRule) return

      results.value = allResults.filter((item) => {
        let match = false

        // Evaluate the first rule
        match = evaluateRule(item, firstRule)

        // Evaluate subsequent rules
        for (let i = 1; i < rules.length; i++) {
          const rule = rules[i]
          if (!rule) continue

          const ruleMatch = evaluateRule(item, rule)

          if (rule.operator === 'AND') {
            match = match && ruleMatch
          } else if (rule.operator === 'OR') {
            match = match || ruleMatch
          }
        }

        return match
      })
    } catch (e: any) {
      error.value = e.message || 'An error occurred during search'
    } finally {
      loading.value = false
    }
  }

  const evaluateRule = (item: any, rule: SearchRule) => {
    if (!rule.value) return true

    const itemValue =
      rule.field === 'all'
        ? Object.values(item).join(' ').toLowerCase()
        : String(item[rule.field as keyof typeof item] || '').toLowerCase()

    const ruleValue = rule.value.toLowerCase()

    switch (rule.comparator) {
      case 'contains':
        return itemValue.includes(ruleValue)
      case '!contains':
        return !itemValue.includes(ruleValue)
      case 'is':
        return itemValue === ruleValue
      case 'is_not':
        return itemValue !== ruleValue
      case 'starts_with':
        return itemValue.startsWith(ruleValue)
      case 'ends_with':
        return itemValue.endsWith(ruleValue)
      default:
        return true
    }
  }

  return {
    results,
    loading,
    error,
    handleSearch,
    fetchInitialData
  }
}
