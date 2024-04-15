'use client'

import {Paper, Stack} from '@mantine/core'
import {DataTable as MantineDataTable} from 'mantine-datatable'
import React from 'react'

import {jobs} from '@/components/job-huntly/mock/jobs'

import {columns} from './columns'
import {Header} from './Header'

export function DataTable() {
  return (
    <Stack gap={0}>
      <Paper withBorder>
        <Header />
        <MantineDataTable columns={columns} records={jobs} striped />
      </Paper>
    </Stack>
  )
}
