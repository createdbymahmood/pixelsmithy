import {Group, Paper, Stack, Text, Title} from '@mantine/core'
import React from 'react'

import {epilogue} from '@/lib/styles/font/epilogue'

export function OpenJobs() {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Title order={5}>Job Open</Title>
        <Group align='flex-end' gap='xs'>
          <Title ff={epilogue.style.fontFamily} order={1}>
            12
          </Title>

          <Text c='neutrals.5' mb='sm' size='xl'>
            Jobs Opened
          </Text>
        </Group>
      </Stack>
    </Paper>
  )
}
