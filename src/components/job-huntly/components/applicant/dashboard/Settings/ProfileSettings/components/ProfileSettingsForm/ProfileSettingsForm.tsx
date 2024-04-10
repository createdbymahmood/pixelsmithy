import {Divider, Stack, Text} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Stack gap='xxs'>
      <Text fw='600'>Basic Information</Text>
      <Text c='neutrals.5'>
        This is your personal information that you can update anytime.
      </Text>
    </Stack>
  )
}

export function ProfileSettingsForm() {
  return (
    <Stack gap='xl'>
      <Header />
      <Divider />
    </Stack>
  )
}
