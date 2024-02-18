'use client'

import {Stack} from '@mantine/core'
import React from 'react'

import {SignInSessions} from '@/components/SnowUI/components/account/AccountSecurity/components'

import {Logs} from './components'

export function AccountLogs() {
  return (
    <Stack gap='xl'>
      <SignInSessions />
      <Logs />
    </Stack>
  )
}
