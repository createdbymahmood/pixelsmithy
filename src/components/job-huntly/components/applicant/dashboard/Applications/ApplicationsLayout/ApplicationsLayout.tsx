'use client'

import {Box, Group, Stack, Tabs, Text} from '@mantine/core'
import {isEqual, startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'
import React from 'react'

import {TabLink} from '@/components/common'
import {
  JobhuntlyApplicantDashboardApplicationsAll,
  JobhuntlyApplicantDashboardApplicationsAssessment,
  JobhuntlyApplicantDashboardApplicationsHired,
  JobhuntlyApplicantDashboardApplicationsInreview,
  JobhuntlyApplicantDashboardApplicationsInterviewing,
  JobhuntlyApplicantDashboardApplicationsOffered,
} from '@/lib/declarative-routing'

import {Banner, Header} from '../components'

interface ApplicationsLayoutProps {
  children: ReactNode
}

const applications = [
  {
    key: 'all',
    label: 'All',
    href: JobhuntlyApplicantDashboardApplicationsAll(),
    count: 4,
  },
  {
    key: 'in-review',
    label: 'In Review',
    href: JobhuntlyApplicantDashboardApplicationsInreview(),
    count: 34,
  },
  {
    key: 'interviewing',
    label: 'Interviewing',
    href: JobhuntlyApplicantDashboardApplicationsInterviewing(),
    count: 18,
  },
  {
    key: 'assessment',
    label: 'Assessment',
    href: JobhuntlyApplicantDashboardApplicationsAssessment(),
    count: 5,
  },
  {
    key: 'offered',
    label: 'offered',
    href: JobhuntlyApplicantDashboardApplicationsOffered(),
    count: 2,
  },
  {
    key: 'hired',
    label: 'hired',
    href: JobhuntlyApplicantDashboardApplicationsHired(),
    count: 1,
  },
] as const

export function ApplicationsLayout({children}: ApplicationsLayoutProps) {
  const segment = useSelectedLayoutSegment()

  const content = applications.map((tab) => {
    const isActive = isEqual(segment, tab.key)
    const c = isActive ? 'primary' : 'neutrals.5'
    const labelColor = isActive ? 'neutrals.6' : 'neutrals.5'
    const label = (
      <Text c={labelColor} fw='600'>
        {startCase(tab.label)}
      </Text>
    )
    const count = (
      <Group fw='600' gap={0}>
        {'('}
        <Text c={c} fw='600'>
          {tab.count}
        </Text>
        {')'}
      </Group>
    )
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        <Group c='neutrals.4' gap='xxs' wrap='nowrap'>
          {label}
          {count}
        </Group>
      </TabLink>
    )
  })

  return (
    <Stack gap='xxxl'>
      <Header />
      <Banner />

      <Tabs key={segment} defaultValue={segment}>
        <Tabs.List>{content}</Tabs.List>
        <Box mt='xl'>{children}</Box>
      </Tabs>
    </Stack>
  )
}
