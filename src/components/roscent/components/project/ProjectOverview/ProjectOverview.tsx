'use client'

import {SimpleGrid, Stack} from '@mantine/core'

import {
  ProjectOverviewFilesList,
  ProjectOverviewHeader,
  ProjectOverviewTimeline,
  ProjectSpendingsTable,
} from './components'

export function ProjectOverview() {
  return (
    <Stack gap='xl'>
      <ProjectOverviewHeader />
      <SimpleGrid cols={{md: 1, lg: 2}}>
        <ProjectOverviewTimeline />
        <ProjectOverviewFilesList />
      </SimpleGrid>
      <ProjectSpendingsTable />
    </Stack>
  )
}
