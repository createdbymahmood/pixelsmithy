import {Badge, Box, Group, rem, Text} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import {get} from 'lodash-es'
import type {DataTableColumn} from 'mantine-datatable'
import Link from 'next/link'

import type {Job, JobStatus, JobType} from '@/components/job-huntly/mock/jobs'
import {urls} from '@/constants'

function renderRole(record: Job) {
  return (
    <Text
      component={Link}
      fw='500'
      href={urls.JobHuntly.company.dashboard.jobApplicants(record.id)}
      lineClamp={1}
    >
      {record.role}
    </Text>
  )
}

const statusBadgeMap: Record<JobStatus, JSX.Element> = {
  closed: (
    <Badge color='red' py='md' size='lg' variant='outline' w={rem(79)}>
      Closed
    </Badge>
  ),
  live: (
    <Badge color='green' py='md' size='lg' variant='outline' w={rem(79)}>
      Live
    </Badge>
  ),
}

const jobTypeBadgeMap: Record<JobType, JSX.Element> = {
  'full-time': (
    <Badge color='primary' py='md' size='lg' variant='outline' w={rem(100)}>
      Full-Time
    </Badge>
  ),
  'part-time': (
    <Badge color='yellow' py='md' size='lg' variant='outline' w={rem(100)}>
      Part-Time
    </Badge>
  ),
  freelance: (
    <Badge color='green' py='md' size='lg' variant='outline' w={rem(100)}>
      Freelance
    </Badge>
  ),
}

function renderStatus(record: Job) {
  const badge = get(statusBadgeMap, record.status)
  return badge
}

function renderJobType(record: Job) {
  const badge = get(jobTypeBadgeMap, record.type)
  return badge
}

function renderNeeds(record: Job) {
  return (
    <Group gap='xxs'>
      <Text>{record.needsInfo.needs}</Text>
      <Text c='neutrals.3'>/</Text>
      <Text c='neutrals.3'>{record.needsInfo.capacity}</Text>
    </Group>
  )
}

function renderAction() {
  return <Box className='icon-size-xl' component={DotsThree} weight='bold' />
}

const PADDING_SIZE = 24
export const columns: DataTableColumn<Job>[] = [
  {
    accessor: 'role',
    title: 'Roles',
    render: renderRole,
    width: 217 + PADDING_SIZE,
  },
  {accessor: 'status', render: renderStatus, width: 117},
  {accessor: 'datePosted', title: 'Date Posted', width: 157},
  {accessor: 'dueDate', title: 'Due Date', width: 157},
  {accessor: 'jobType', title: 'Job Type', render: renderJobType, width: 135},
  {
    accessor: 'applicationsInfo.applicantsCount',
    title: 'Applicants',
    width: 120,
  },
  {
    accessor: 'needsInfo.needs',
    title: 'Needs',
    render: renderNeeds,
    width: 103,
  },
  {
    accessor: 'action',
    width: '0%', // 👈 use minimal width
    title: '',
    render: renderAction,
  },
]
