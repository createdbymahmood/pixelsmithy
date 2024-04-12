import {Avatar, Group, rem, Stack, Text} from '@mantine/core'
import React from 'react'

export function UserProfile() {
  return (
    <Group>
      <Avatar size={rem(48)}>JG</Avatar>
      <Stack gap={0}>
        <Text fw='600' size='lg'>
          Jake Gyll
        </Text>
        <Text c='neutrals.4' size='sm'>
          jakegyll@email.com
        </Text>
      </Stack>
    </Group>
  )
}
