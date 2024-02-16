'use client'
import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {ProductDelivery, ProfileDetails, StockReport} from './components'

export function AccountOverview() {
  return (
    <Stack gap='xl'>
      <ProfileDetails />
      <SimpleGrid cols={{xs: 1, md: 2}}>
        <ProductDelivery />
        <StockReport />
      </SimpleGrid>
    </Stack>
  )
}
