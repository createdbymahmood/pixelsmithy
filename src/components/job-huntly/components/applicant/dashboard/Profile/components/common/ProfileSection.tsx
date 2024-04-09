import {Box, Group, Paper, Stack, Text} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

interface ProfileSectionProps {
  title: string
  children: ReactNode
  action: ReactNode
}

export function ProfileSection({action, children, title}: ProfileSectionProps) {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Group justify='space-between'>
          <Text fw='600' lineClamp={1} size='xl'>
            {title}
          </Text>

          {action}
        </Group>

        <Box>{children}</Box>
      </Stack>
    </Paper>
  )
}
