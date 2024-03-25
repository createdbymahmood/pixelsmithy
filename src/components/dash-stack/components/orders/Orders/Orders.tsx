import {Stack} from '@mantine/core'
import React from 'react'

import {PageHeader} from '@dash-stack/components'

import {OrdersTable} from './components'

export function Orders() {
  return (
    <Stack gap='md' pb='md'>
      <PageHeader>Orders List</PageHeader>
      <OrdersTable />
    </Stack>
  )
}
