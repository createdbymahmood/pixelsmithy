'use client'

import {
  Grid,
  Group,
  Paper,
  rem,
  SegmentedControl,
  Skeleton,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core'
import React from 'react'

function Header() {
  return (
    <Group justify='space-between'>
      <Stack gap='xxs'>
        <Title order={5}>Job statistics</Title>
        <Text c='neutrals.5'>Showing Jobstatistic Jul 19-25</Text>
      </Stack>

      <SegmentedControl data={['Week', 'Month', 'Year']} size='md' />
    </Group>
  )
}

function StatsHeader() {
  return (
    <Tabs.List>
      <Tabs.Tab value='overview'>Overview</Tabs.Tab>
      <Tabs.Tab value='jobs-view'>Jobs View</Tabs.Tab>
      <Tabs.Tab value='jobs-applied'>Jobs Applied</Tabs.Tab>
    </Tabs.List>
  )
}

function Stats() {
  return (
    <Tabs defaultValue='overview'>
      <StatsHeader />

      <Grid mt='xl'>
        <Grid.Col span={8}>
          <Skeleton h={rem(298)} />
        </Grid.Col>

        <Grid.Col span={4}>
          <Stack h='100%'>
            <Skeleton h='100%' />
            <Skeleton h='100%' />
          </Stack>
        </Grid.Col>
      </Grid>
    </Tabs>
  )
}

export function JobStats() {
  return (
    <Paper p='xl' withBorder>
      <Stack>
        <Header />
        <Stats />
      </Stack>
    </Paper>
  )
}
