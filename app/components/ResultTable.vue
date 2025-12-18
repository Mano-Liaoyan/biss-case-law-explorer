<script setup lang="ts">
import { getPaginationRowModel } from '@tanstack/vue-table'
import type { TableColumn } from '@nuxt/ui'
import type { Column } from '@tanstack/vue-table'

const UBadge = resolveComponent('UBadge')
const UButton = resolveComponent('UButton')

interface Result {
  id: string
  ecli: string
  date: string
  summary: string
  domain: string
  citations: number
}

const props = defineProps<{
  data: Result[]
}>()

function getHeader(column: Column<Result>, label: string) {
  const isSorted = column?.getIsSorted()

  return h(UButton, {
    color: 'neutral',
    variant: 'ghost',
    label,
    icon: isSorted
      ? isSorted === 'asc'
        ? 'i-lucide-arrow-up-narrow-wide'
        : 'i-lucide-arrow-down-wide-narrow'
      : 'i-lucide-arrow-up-down',
    class: '-mx-2.5',
    onclick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
  })
}

const columns: TableColumn<Result>[] = [
  {
    accessorKey: 'id',
    header: ({ column }) => getHeader(column, 'ID'),
    cell: ({ row }) => `${row.getValue('id')}`,
    enableHiding: true,
  },
  {
    accessorKey: 'ecli',
    header: 'ECLI',
    cell: ({ row }) => `${row.getValue('ecli')}`,
  },
  {
    accessorKey: 'date',
    header: ({ column }) => getHeader(column, 'date'),
    cell: ({ row }) => {
      return new Date(row.getValue('date')).toLocaleString('en-US', {
        day: 'numeric',
        month: 'short',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      })
    },
  },
  {
    accessorKey: 'summary',
    header: 'summary',
  },
  {
    accessorKey: 'domain',
    header: 'domain',
  },
  {
    accessorKey: 'citations',
    header: ({ column }) => getHeader(column, 'citations'),
  },
]

const table = useTemplateRef('table')
const sorting = ref([])
</script>

<template>
  <UCard :ui="{ body: { padding: 'p-0 sm:p-0' } } as any">
    <UTable ref="table" :columns="columns" v-model:sorting="sorting" :data="data" class="w-full" :pagination-options="{ getPaginationRowModel: getPaginationRowModel() }">
      <template #ecli-data="{ row }">
        <span class="text-primary font-bold hover:underline cursor-pointer">{{ (row as any).ecli }}</span>
      </template>
      <template #domain-data="{ row }">
        <UBadge color="secondary" variant="soft" size="xs">{{
          (row as any).domain
        }}</UBadge>
      </template>
      <template #citations-data="{ row }">
        <div class="font-bold">{{ (row as any).citations }}</div>
      </template>
    </UTable>

    <template #footer>
      <div class="flex justify-between">
        <div class="flex items-center justify-between">
          <p class="text-md font-medium text-gray-900 dark:text-white">
            {{ data.length }} results
          </p>
        </div>
        <UPagination :page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1" :items-per-page="table?.tableApi?.getState().pagination.pageSize"
          :total="table?.tableApi?.getFilteredRowModel().rows.length" @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)" />
      </div>
    </template>
  </UCard>
</template>
