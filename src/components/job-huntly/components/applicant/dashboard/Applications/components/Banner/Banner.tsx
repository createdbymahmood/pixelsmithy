'use client'

import {
  ActionIcon,
  Avatar,
  Box,
  Card,
  Group,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {X} from '@phosphor-icons/react/dist/ssr'
import React from 'react'

export function Banner() {
  return (
    <Card bg='neutrals.0' p='xl' pos='relative'>
      <Group align='flex-start' wrap='nowrap'>
        <Avatar size={rem(56)} />
        <Stack gap={rem(2)}>
          <Text c='primary' fw='600' size='lg'>
            New Feature
          </Text>
          <Text c='neutrals.4' className='white-space-pre-line'>
            You can request a follow-up 7 days after applying for a job if the
            application status is in review.{'\n'}Only one follow-up is allowed
            per job.
          </Text>
        </Stack>
      </Group>

      <ActionIcon
        c='neutrals.6'
        pos='absolute'
        right='var(--mantine-spacing-md)'
        top='var(--mantine-spacing-md)'
        variant='transparent'
      >
        <Box className='icon-size-lg' component={X} weight='bold' />
      </ActionIcon>
    </Card>
  )
}
