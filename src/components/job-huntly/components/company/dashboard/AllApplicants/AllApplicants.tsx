'use client'

import type {MantineThemeComponents} from '@mantine/core'
import {Box, createTheme, MantineProvider, Table} from '@mantine/core'
import {CaretUp, CaretUpDown} from '@phosphor-icons/react/dist/ssr'
import {sortBy} from 'lodash-es'
import type {DataTableSortStatus} from 'mantine-datatable'
import {DataTable} from 'mantine-datatable'
import {useState} from 'react'

import TableStyles from './AllApplicants.module.scss'
import companies from './applicants.json'
import {columns} from './columns'

export type Company = (typeof companies)[0]

export function BasicUsageExample() {
  const [selectedRecords, setSelectedRecords] = useState<Company[]>([])
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Company>>({
    columnAccessor: 'name',
    direction: 'asc',
  })
  const [records, setRecords] = useState(sortBy(companies, 'name'))

  return (
    <DataTable
      columns={columns}
      records={records}
      selectedRecords={selectedRecords}
      shadow='none'
      sortIcons={{
        sorted: <Box className='icon-size-sm' component={CaretUp} />,
        unsorted: <Box className='icon-size-md' component={CaretUpDown} />,
      }}
      sortStatus={sortStatus}
      withColumnBorders={false}
      striped
      withRowBorders
      withTableBorder
      onSelectedRecordsChange={setSelectedRecords}
      onSortStatusChange={(_sortStatus) => {
        setSortStatus(_sortStatus)

        const data = sortBy(companies, _sortStatus.columnAccessor)
        setRecords(_sortStatus.direction === 'desc' ? data.reverse() : data)
      }}
    />
  )
}

const components: MantineThemeComponents = {
  Table: Table.extend({
    defaultProps: {
      striped: 'even',
      withRowBorders: false,
      verticalSpacing: 'var(--mantine-spacing-xs)',
      horizontalSpacing: 'var(--mantine-spacing-xs)',
    },

    classNames() {
      return TableStyles
    },
  }),
}

export function AllApplicants() {
  return (
    <MantineProvider theme={createTheme({components})}>
      <BasicUsageExample />
    </MantineProvider>
  )
}
