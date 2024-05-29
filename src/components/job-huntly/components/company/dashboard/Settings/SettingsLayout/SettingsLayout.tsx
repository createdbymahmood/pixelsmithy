'use client'

import {Box, Tabs} from '@mantine/core'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {
  JobhuntlyCompanyDashboardSettingsOverview,
  JobhuntlyCompanyDashboardSettingsSociallinks,
  JobhuntlyCompanyDashboardSettingsTeam,
} from '@/lib/declarative-routing'

interface ProjectOverviewProps {
  children: ReactNode
}

const settingsSections = [
  {
    key: 'overview',
    label: 'Overview',
    href: JobhuntlyCompanyDashboardSettingsOverview(),
  },
  {
    key: 'social-links',
    label: 'Social Links',
    href: JobhuntlyCompanyDashboardSettingsSociallinks(),
  },
  {
    key: 'team',
    label: 'Team',
    href: JobhuntlyCompanyDashboardSettingsTeam(),
  },
]

export default function SettingsLayout({children}: ProjectOverviewProps) {
  const segment = useSelectedLayoutSegment()

  const content = settingsSections.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {tab.label}
      </TabLink>
    )
  })

  return (
    <Tabs key={segment} defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box mt='xxl'>{children}</Box>
    </Tabs>
  )
}
