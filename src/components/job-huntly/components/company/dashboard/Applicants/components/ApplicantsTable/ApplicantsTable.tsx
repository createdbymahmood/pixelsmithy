'use client'

import './DefaultStyles.scss'

import {useAutoAnimate} from '@formkit/auto-animate/react'
import type {MantineThemeComponents} from '@mantine/core'
import {
  Box,
  createTheme,
  MantineProvider,
  Table as MantineTable,
} from '@mantine/core'
import {CaretUp, CaretUpDown} from '@phosphor-icons/react/dist/ssr'
import {sortBy} from 'lodash-es'
import type {DataTableSortStatus} from 'mantine-datatable'
import {DataTable as MantineDataTable} from 'mantine-datatable'
import {useState} from 'react'

import type {Applicant} from '@/components/job-huntly/mock/applicants'
import {applicants} from '@/components/job-huntly/mock/applicants'

import TableStyles from './ApplicantsTable.module.scss'
import {columns} from './columns'

function Table() {
  const [selectedRecords, setSelectedRecords] = useState<Applicant[]>([])
  const [sortStatus, setSortStatus] = useState<DataTableSortStatus<Applicant>>({
    columnAccessor: 'name',
    direction: 'asc',
  })
  const [records, setRecords] = useState<Applicant[]>(
    sortBy(applicants, 'firstName'),
  )
  const [bodyRef] = useAutoAnimate<HTMLTableSectionElement>()

  return (
    <MantineDataTable
      bodyRef={bodyRef}
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

        const data = sortBy(applicants, _sortStatus.columnAccessor)
        setRecords(_sortStatus.direction === 'desc' ? data.reverse() : data)
      }}
    />
  )
}

const components: MantineThemeComponents = {
  Table: MantineTable.extend({
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

export function ApplicantsTable() {
  return (
    <MantineProvider theme={createTheme({components})}>
      <Table />
    </MantineProvider>
  )
}
