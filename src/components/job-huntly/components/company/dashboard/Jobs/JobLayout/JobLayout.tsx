'use client'

import {
  Box,
  Button,
  Group,
  Indicator,
  rem,
  Stack,
  Tabs,
  Text,
  Title,
} from '@mantine/core'
import {CaretDown} from '@phosphor-icons/react'
import {ArrowLeft} from '@phosphor-icons/react/dist/ssr'
import {capitalize, find, head} from 'lodash-es'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'

import {GroupLink, TabLink} from '@/components/common'
import type {Job} from '@/components/job-huntly/mock/jobs'
import {jobs} from '@/components/job-huntly/mock/jobs'
import {
  JobhuntlyCompanyDashboardJobs,
  JobhuntlyCompanyDashboardJobsJobIdAnalytics,
  JobhuntlyCompanyDashboardJobsJobIdApplicants,
  JobhuntlyCompanyDashboardJobsJobIdDetails,
} from '@/lib/declarative-routing'
import {useParams} from '@/lib/declarative-routing/hooks'

function Action() {
  const leftSection = (
    <Box className='icon-size-md' component={CaretDown} weight='bold' />
  )
  return (
    <Button leftSection={leftSection} ml='auto' size='md' variant='outline'>
      More Action
    </Button>
  )
}

function BackButton() {
  return (
    <GroupLink
      c='general.5'
      className='cursor-pointer'
      component={Link}
      gap={rem(4)}
      h={rem(40)}
      href={JobhuntlyCompanyDashboardJobs()}
      p='xxs'
      w={rem(40)}
    >
      <Box component={ArrowLeft} h='100%' w='100%' weight='bold' />
    </GroupLink>
  )
}

interface HeaderInfoProps {
  job: Job
}

function HeaderInfo({job}: HeaderInfoProps) {
  return (
    <Stack gap='xs'>
      <Title order={4}>{job.role}</Title>
      <Group gap='xs'>
        <Text size='xl'>{capitalize(head(job.categories)?.label)}</Text>
        <Indicator color='neutrals.6' size={rem(4)} />
        <Text size='xl'>{capitalize(job.type)}</Text>
        <Indicator color='neutrals.6' size={rem(4)} />

        <Text size='xl'>{job.needsInfo.hired}</Text>
        <Text size='xl'>/</Text>
        <Text c='neutrals.4' size='xl'>
          {job.needsInfo.needs} Hired
        </Text>
      </Group>
    </Stack>
  )
}

interface HeaderProps {
  job: Job
}

function Header({job}: HeaderProps) {
  return (
    <Group pb='xl'>
      <BackButton />
      <HeaderInfo job={job} />
      <Box ml='auto'>
        <Action />
      </Box>
    </Group>
  )
}
interface JobLayoutProps {
  children: ReactNode
}

function useJobLayoutState() {
  const params = useParams(JobhuntlyCompanyDashboardJobsJobIdApplicants)
  const id = params.jobId

  const job = find(jobs, {id})!
  return {job}
}
interface LayoutProps {
  children: ReactNode
}

function LayoutTabs({children}: LayoutProps) {
  const params = useParams(JobhuntlyCompanyDashboardJobsJobIdApplicants)
  const applicantProfileSections = [
    {
      key: 'applicants',
      label: 'Applicants',
      href: JobhuntlyCompanyDashboardJobsJobIdApplicants({jobId: params.jobId}),
    },
    {
      key: 'details',
      label: 'Details',
      href: JobhuntlyCompanyDashboardJobsJobIdDetails({jobId: params.jobId}),
    },
    {
      key: 'analytics',
      label: 'Analytics',
      href: JobhuntlyCompanyDashboardJobsJobIdAnalytics({jobId: params.jobId}),
    },
  ]

  const segment = useSelectedLayoutSegment()

  const content = applicantProfileSections.map((tab) => {
    return (
      <TabLink key={tab.key} component={Link} href={tab.href} value={tab.key}>
        {tab.label}
      </TabLink>
    )
  })

  return (
    <Tabs key={segment} defaultValue={segment}>
      <Tabs.List>{content}</Tabs.List>
      <Box>{children}</Box>
    </Tabs>
  )
}

export default function JobLayout({children}: JobLayoutProps) {
  const state = useJobLayoutState()
  return (
    <Stack gap={0}>
      <Header job={state.job} />
      <LayoutTabs>{children}</LayoutTabs>
    </Stack>
  )
}
