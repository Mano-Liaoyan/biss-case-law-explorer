import { ref } from 'vue'
import type { SearchResult } from '~/types/search'
import { allResults } from '~/mock/search'

export const fetchData = () => {
  const results = ref<SearchResult[]>([...allResults])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetch = async () => {
    loading.value = true
    error.value = null

    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 3000))
      return results.value
    } catch (e: any) {
      error.value = e.message || 'An error occurred during search'
      return []
    } finally {
      loading.value = false
    }
  }

  return {
    results,
    loading,
    error,
    fetch
  }
}
