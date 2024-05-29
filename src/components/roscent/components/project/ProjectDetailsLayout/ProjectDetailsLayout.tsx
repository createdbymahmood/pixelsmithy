'use client'
import {Box, Tabs} from '@mantine/core'
import {projectId} from '@roscent/mocks/email'
import {startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {
  RoscentDashboardProjectsIdActivity,
  RoscentDashboardProjectsIdBudget,
  RoscentDashboardProjectsIdFiles,
  RoscentDashboardProjectsIdOverview,
  RoscentDashboardProjectsIdSettings,
  RoscentDashboardProjectsIdTargets,
  RoscentDashboardProjectsIdUsers,
} from '@/lib/declarative-routing'

interface ProjectOverviewProps {
  children: ReactNode
}

export const projectDetailsSections = [
  {
    key: 'overview',

    href: RoscentDashboardProjectsIdOverview({id: projectId}),
  },
  {
    key: 'targets',
    href: RoscentDashboardProjectsIdTargets({id: projectId}),
  },
  {
    key: 'budget',
    href: RoscentDashboardProjectsIdBudget({id: projectId}),
  },
  {
    key: 'users',
    href: RoscentDashboardProjectsIdUsers({id: projectId}),
  },
  {
    key: 'files',
    href: RoscentDashboardProjectsIdFiles({id: projectId}),
  },
  {
    key: 'activity',
    href: RoscentDashboardProjectsIdActivity({id: projectId}),
  },
  {
    key: 'settings',
    href: RoscentDashboardProjectsIdSettings({id: projectId}),
  },
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
