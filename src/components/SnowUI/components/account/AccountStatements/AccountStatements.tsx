import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {Earnings} from './components'

export function AccountStatements() {
  return (
    <Stack>
      <SimpleGrid cols={{xs: 1, md: 2}}>
        <Earnings />
      </SimpleGrid>
    </Stack>
  )
}
