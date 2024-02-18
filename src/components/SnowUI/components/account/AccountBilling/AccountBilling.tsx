'use client'

import {Stack} from '@mantine/core'
import React from 'react'

import {
  BillingAddress,
  BillingHistory,
  BillingOverview,
  PaymentMethods,
} from './components'

export function AccountBilling() {
  return (
    <Stack gap='lg'>
      <BillingOverview />
      <PaymentMethods />
      <BillingAddress />
      <BillingHistory />
    </Stack>
  )
}
