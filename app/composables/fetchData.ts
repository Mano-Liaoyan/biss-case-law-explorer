/**
 * @deprecated Use useSearch.ts instead.
 * Unified fetch and search logic now resides in useSearch composable.
 */
export const fetchData = () => {
  return {
    results: ref([]),
    loading: ref(false),
    error: ref(null),
    fetch: async () => []
  }
}
