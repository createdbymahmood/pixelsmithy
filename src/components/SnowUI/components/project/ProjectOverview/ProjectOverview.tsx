import {SimpleGrid} from '@mantine/core'

import {ProjectOverviewTimeline} from '@/components/SnowUI/components/project/ProjectOverview/components'

export function ProjectOverview() {
  return (
    <SimpleGrid cols={{xs: 1, sm: 2, md: 2}}>
      <ProjectOverviewTimeline />
    </SimpleGrid>
  )
}
