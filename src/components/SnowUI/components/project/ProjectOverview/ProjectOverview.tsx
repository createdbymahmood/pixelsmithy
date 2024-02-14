import {SimpleGrid} from '@mantine/core'

import {
  ProjectOverviewFilesList,
  ProjectOverviewTimeline,
} from '@/components/SnowUI/components/project/ProjectOverview/components'

export function ProjectOverview() {
  return (
    <SimpleGrid cols={{md: 1, lg: 2}}>
      <ProjectOverviewTimeline />
      <ProjectOverviewFilesList />
    </SimpleGrid>
  )
}
