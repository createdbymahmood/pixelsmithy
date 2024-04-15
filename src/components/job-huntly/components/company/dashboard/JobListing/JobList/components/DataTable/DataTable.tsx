'use client'

import {DataTable as MantineDataTable} from 'mantine-datatable'
import React from 'react'

import {jobs} from '@/components/job-huntly/mock/jobs'

import {columns} from './columns'

export function DataTable() {
  return (
    <MantineDataTable
      columns={columns}
      records={jobs}
      striped
      withTableBorder
    />
  )
}
