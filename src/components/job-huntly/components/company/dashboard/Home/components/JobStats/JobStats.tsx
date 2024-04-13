import {Group, Paper, SegmentedControl, Stack, Text, Title} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Group justify='space-between'>
      <Stack>
        <Title order={5}>Job statistics</Title>
        <Text>Showing Jobstatistic Jul 19-25</Text>
      </Stack>

      <SegmentedControl data={['Week', 'Month', 'Year']} />
    </Group>
  )
}

export function JobStats() {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Header />
      </Stack>
    </Paper>
  )
}
