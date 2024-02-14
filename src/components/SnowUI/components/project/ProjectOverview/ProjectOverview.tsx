import {SimpleGrid, Stack} from '@mantine/core'

import {
  ProjectOverviewFilesList,
  ProjectOverviewTimeline,
} from '@/components/SnowUI/components/project/ProjectOverview/components'
import {ProjectSpendingsTable} from '@/components/SnowUI/components/project/ProjectOverview/components/ProjectSpendingsTable'

export function ProjectOverview() {
  return (
    <Stack>
      <SimpleGrid cols={{md: 1, lg: 2}}>
        <ProjectOverviewTimeline />
        <ProjectOverviewFilesList />
      </SimpleGrid>

      <ProjectSpendingsTable />
    </Stack>
  )
}
