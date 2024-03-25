'use client'

import {Stack} from '@mantine/core'
import {SignInSessions} from '@roscent/components/account/AccountSecurity/components'
import React from 'react'

import {Logs} from './components'

export function AccountLogs() {
  return (
    <Stack gap='xl'>
      <SignInSessions />
      <Logs />
    </Stack>
  )
}
