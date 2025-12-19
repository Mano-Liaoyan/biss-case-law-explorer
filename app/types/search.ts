export type SearchRule = {
  id: string
  operator: 'AND' | 'OR'
  field: string
  comparator: string
  value: string
}

export type FieldOptionMap = Record<string, FieldOption>

export type FieldOption = {
  label: string
  value: string
  comparators: ComparatorOption[]
}

export type ComparatorOption = {
  label: string
  value: string
}

export interface SearchResult {
  id: string
  ecli: string
  date: string
  summary: string
  domain: string
  citations: number
}
