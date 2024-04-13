import {Box, Group, Paper, Stack, Title} from '@mantine/core'
import type {ReactNode} from 'react'
import React from 'react'

interface CompanyProfileSectionProps {
  title: string
  children: ReactNode
  action: ReactNode
}

export function CompanyProfileSection({
  action,
  children,
  title,
}: CompanyProfileSectionProps) {
  return (
    <Paper>
      <Stack>
        <Group justify='space-between'>
          <Title fw='600' lineClamp={1} order={3}>
            {title}
          </Title>

          {action}
        </Group>

        <Box>{children}</Box>
      </Stack>
    </Paper>
  )
}
