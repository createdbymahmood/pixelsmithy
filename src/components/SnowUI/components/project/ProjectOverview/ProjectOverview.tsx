import {SimpleGrid, Stack} from '@mantine/core'

import {
  ProjectOverviewFilesList,
  ProjectOverviewHeader,
  ProjectOverviewTimeline,
  ProjectSpendingsTable,
} from './components'

export function ProjectOverview() {
  return (
    <Stack>
      <ProjectOverviewHeader />
      <SimpleGrid cols={{md: 1, lg: 2}}>
        <ProjectOverviewTimeline />
        <ProjectOverviewFilesList />
      </SimpleGrid>
      <ProjectSpendingsTable />
    </Stack>
  )
}
