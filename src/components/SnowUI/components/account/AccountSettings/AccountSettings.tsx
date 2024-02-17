'use client'
import {Stack} from '@mantine/core'
import React from 'react'

import {
  ConnectedAccounts,
  EmailPreferences,
  NotificationSettings,
  ProfileDetailsSettings,
  SignInMethod,
} from './components'

export function AccountSettings() {
  return (
    <Stack gap='xl'>
      <ProfileDetailsSettings />
      <SignInMethod />
      <ConnectedAccounts />
      <EmailPreferences />
      <NotificationSettings />
    </Stack>
  )
}
