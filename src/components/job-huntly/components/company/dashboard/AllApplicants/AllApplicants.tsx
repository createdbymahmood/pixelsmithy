import {Stack} from '@mantine/core'
import React from 'react'

import {DataTable, Header} from './components'

export function AllApplicants() {
  return (
    <Stack gap='xl'>
      <Header />
      <DataTable />
    </Stack>
  )
}
