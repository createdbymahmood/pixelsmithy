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
    key: 'my-profile',
    label: 'My Profile',
    href: urls.JobHuntly.applicant.dashboard.settings.profile,
  },
  {
    key: 'login-details',
    label: 'Login Details',
    href: urls.JobHuntly.applicant.dashboard.settings.login,
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
      <Box mt='lg'>{children}</Box>
    </Tabs>
  )
}
