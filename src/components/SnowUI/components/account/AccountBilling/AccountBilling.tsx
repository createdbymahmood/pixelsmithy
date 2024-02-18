import {Stack} from '@mantine/core'
import React from 'react'

import {BillingOverview} from './components'

export function AccountBilling() {
  return (
    <Stack gap='lg'>
      <BillingOverview />
    </Stack>
  )
}
