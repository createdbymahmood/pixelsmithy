import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {Earnings, Invoices, Statements} from './components'

export function AccountStatements() {
  return (
    <Stack gap='xl'>
      <SimpleGrid cols={{xs: 1, md: 2}}>
        <Earnings />
        <Invoices />
      </SimpleGrid>

      <Statements />
    </Stack>
  )
}
