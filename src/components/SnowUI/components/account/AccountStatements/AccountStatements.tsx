import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {Earnings, Invoices} from './components'

export function AccountStatements() {
  return (
    <Stack>
      <SimpleGrid cols={{xs: 1, md: 2}}>
        <Earnings />
        <Invoices />
      </SimpleGrid>
    </Stack>
  )
}
