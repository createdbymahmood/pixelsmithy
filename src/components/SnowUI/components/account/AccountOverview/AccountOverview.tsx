'use client'
import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {ProductDelivery, ProfileDetails} from './components'

export function AccountOverview() {
  return (
    <Stack gap='xl'>
      <ProfileDetails />
      <SimpleGrid cols={2}>
        <ProductDelivery />
      </SimpleGrid>
    </Stack>
  )
}
