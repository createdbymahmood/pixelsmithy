'use client'

import {SimpleGrid, Stack} from '@mantine/core'
import React from 'react'

import {RecentAlerts, SecurityGuidelines, SignInTimes} from './components'

export function AccountSecurity() {
  return (
    <Stack gap='lg'>
      <SimpleGrid cols={2}>
        <SignInTimes />
        <Stack>
          <RecentAlerts />
          <SecurityGuidelines />
        </Stack>
      </SimpleGrid>
    </Stack>
  )
}
