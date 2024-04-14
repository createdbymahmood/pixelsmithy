'use client'

import {Box, Button, Group, Stack, Text} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

function HeaderAction() {
  const leftSection = (
    <Box className='icon-size-md' component={Plus} weight='bold' />
  )
  return (
    <Button
      leftSection={leftSection}
      ml='auto'
      pr={0}
      size='md'
      variant='transparent'
    >
      Add Schedule Interview
    </Button>
  )
}

function Header() {
  return (
    <Group justify='space-between'>
      <Text fw='600'>Interview List</Text>
      <HeaderAction />
    </Group>
  )
}

export function InterviewSchedule() {
  return (
    <Stack>
      <Header />
    </Stack>
  )
}
