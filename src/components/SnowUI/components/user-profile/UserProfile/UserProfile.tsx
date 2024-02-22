import {Stack} from '@mantine/core'
import React from 'react'

import {UserProfileHeader, UserProfileSchedule} from './components'

export function UserProfile() {
  return (
    <Stack flex={1} w='100%'>
      <UserProfileHeader />
      <UserProfileSchedule />
    </Stack>
  )
}
