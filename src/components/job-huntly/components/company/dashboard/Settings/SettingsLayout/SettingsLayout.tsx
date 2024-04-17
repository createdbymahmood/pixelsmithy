'use client'

import {Box, Tabs} from '@mantine/core'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {TabLink} from '@/components/common'
import {urls} from '@/constants'

interface ProjectOverviewProps {
  children: ReactNode
}

const settingsSections = [
  {
    key: 'overview',
    label: 'Overview',
    href: urls.JobHuntly.company.dashboard.settings.overview,
  },
  {
    key: 'social-links',
    label: 'Social Links',
    href: urls.JobHuntly.company.dashboard.settings.socialLinks,
  },
  {
    key: 'team',
    label: 'Team',
    href: urls.JobHuntly.company.dashboard.settings.team,
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
