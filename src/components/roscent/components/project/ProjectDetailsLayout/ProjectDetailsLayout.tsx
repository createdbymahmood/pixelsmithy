import {Box, Tabs} from '@mantine/core'
import {projectId} from '@roscent/mocks/email'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {urls} from '@/constants'

interface ProjectOverviewProps {
  children: ReactNode
}

export const projectDetailsSections = [
  {key: 'overview', href: urls.roscent.projects.overview(projectId)},
  {key: 'targets', href: urls.roscent.projects.targets(projectId)},
  {key: 'budget', href: urls.roscent.projects.budget(projectId)},
  {key: 'users', href: urls.roscent.projects.users(projectId)},
  {key: 'files', href: urls.roscent.projects.files(projectId)},
  {key: 'activity', href: urls.roscent.projects.activity(projectId)},
  {key: 'settings', href: urls.roscent.projects.settings(projectId)},
] as const

export function ProjectDetailsLayout({children}: ProjectOverviewProps) {
  const segment = useSelectedLayoutSegment()
  const content = projectDetailsSections.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {startCase(tab.key)}
      </TabLink>
    )
  })

  return (
    <Tabs key={segment} defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box mt='lg'>{children}</Box>
    </Tabs>
  )
}
