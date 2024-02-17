'use client'
import {Stack} from '@mantine/core'
import React from 'react'

import {ProfileDetailsSettings, SignInMethod} from './components'

export function AccountSettings() {
  return (
    <Stack>
      <ProfileDetailsSettings />
      <SignInMethod />
    </Stack>
  )
}
