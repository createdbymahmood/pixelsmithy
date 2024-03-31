import {Avatar, Group, rem, Stack, Text} from '@mantine/core'
import React from 'react'

export function UserProfile() {
  return (
    <Group>
      <Avatar size={rem(48)} />
      <Stack gap={0}>
        <Text fw='600' size='lg'>
          Jake Gyll
        </Text>
        <Text size='sm'>jakegyll@email.com</Text>
      </Stack>
    </Group>
  )
}
