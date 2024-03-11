'use client'

import {Stack} from '@mantine/core'
import React from 'react'

import {ReferralProgram, ReferredUsers} from './components'

export function AccountReferrals() {
  return (
    <Stack gap='xl'>
      <ReferralProgram />
      <ReferredUsers />
    </Stack>
  )
}
