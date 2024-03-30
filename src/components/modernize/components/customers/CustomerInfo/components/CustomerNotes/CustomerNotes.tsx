'use client'

import {
  Avatar,
  Card,
  Divider,
  Group,
  Rating,
  rem,
  Stack,
  Text,
  Textarea,
} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Group align='flex-start' gap={rem(18)}>
      <Avatar size={rem(56)} variant='light'>
        L
      </Avatar>

      <Stack gap={rem(8)}>
        <Text fw='bold'>Lenora Robinson</Text>
        <Text
          c='general.5'
          className='white-space-pre-line'
          size='sm'
        >{`Ireland\n5 Orders\nCustomer for 2 years`}</Text>
      </Stack>
      <Rating defaultValue={2} ml='auto' size='md' />
    </Group>
  )
}

function Notes() {
  return (
    <Stack gap={rem(24)}>
      <Text fw='bold'>Customer Notes</Text>
      <Textarea label='Notes' placeholder='Add notes about customer' />
    </Stack>
  )
}

export function CustomerNotes() {
  return (
    <Card>
      <Stack gap={rem(28)}>
        <Header />
        <Divider />
        <Notes />
      </Stack>
    </Card>
  )
}
