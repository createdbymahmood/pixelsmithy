'use client'

import type {
  MantineComponent,
  TabsTabProps,
  TabsTabStylesNames,
} from '@mantine/core'
import {Box, Group, Stack, Tabs, Text} from '@mantine/core'
import {isEqual, startCase} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'
import React from 'react'

import {urls} from '@/constants'

import {Banner, Header} from '../components'
import styles from './ApplicationsLayout.module.scss'

interface ApplicationsLayoutProps {
  children: ReactNode
}

const applications = [
  {
    key: 'all',
    label: 'All',
    href: urls.JobHuntly.applicant.dashboard.applications.all,
    count: 4,
  },
  {
    key: 'in-review',
    label: 'In Review',
    href: urls.JobHuntly.applicant.dashboard.applications.inReview,
    count: 34,
  },
  {
    key: 'interviewing',
    label: 'Interviewing',
    href: urls.JobHuntly.applicant.dashboard.applications.interviewing,
    count: 18,
  },
  {
    key: 'assessment',
    label: 'Assessment',
    href: urls.JobHuntly.applicant.dashboard.applications.assessment,
    count: 5,
  },
  {
    key: 'offered',
    label: 'offered',
    href: urls.JobHuntly.applicant.dashboard.applications.offered,
    count: 2,
  },
  {
    key: 'hired',
    label: 'hired',
    href: urls.JobHuntly.applicant.dashboard.applications.hired,
    count: 1,
  },
] as const

const Tab = Tabs.Tab as MantineComponent<{
  props: TabsTabProps & {href: string}
  ref: HTMLButtonElement
  stylesNames: TabsTabStylesNames
  compound: true
}>

export function ApplicationsLayout({children}: ApplicationsLayoutProps) {
  const segment = useSelectedLayoutSegment()

  const content = applications.map((tab) => {
    const label = <Text fw='600'>{startCase(tab.label)}</Text>
    const isActive = isEqual(segment, tab.key)
    const c = isActive ? 'primary' : 'neutrals.5'
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
      <Tab key={tab.key} component={Link} href={tab.href} value={tab.key}>
        <Group c='neutrals.4' gap='xxs' wrap='nowrap'>
          {label}
          {count}
        </Group>
      </Tab>
    )
  })

  return (
    <Stack gap='xxxl'>
      <Header />
      <Banner />

      <Tabs key={segment} classNames={{tab: styles.tab}} defaultValue={segment}>
        <Tabs.List>{content}</Tabs.List>
        <Box mt='xl'>{children}</Box>
      </Tabs>
    </Stack>
  )
}
