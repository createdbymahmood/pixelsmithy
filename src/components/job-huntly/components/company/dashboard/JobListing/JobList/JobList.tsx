'use client'
import {Stack} from '@mantine/core'
import React from 'react'

import {DataTable, Header} from './components'

export function JobList() {
  return (
    <Stack className='overflow-hidden' gap='xxxl'>
      <Header />
      <DataTable />
    </Stack>
  )
}
