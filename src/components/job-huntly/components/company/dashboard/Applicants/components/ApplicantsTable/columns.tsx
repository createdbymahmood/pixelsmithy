import {applicationStatusMap} from '@job-huntly/components/applicant/dashboard/Applications/components/ApplicationsList/components'
import {Avatar, Box, Button, Group, Rating, rem, Text} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import type {DataTableColumn} from 'mantine-datatable'
import Link from 'next/link'

import type {Applicant} from '@/components/job-huntly/mock/applicants'
import {JobhuntlyCompanyDashboardApplicantsApplicantId} from '@/lib/declarative-routing'

const renderFullName = (record: Applicant) => {
  return (
    <Group wrap='nowrap'>
      <Avatar size={rem(40)} />
      <Text lineClamp={1}>{record.fullName}</Text>
    </Group>
  )
}

const renderScore = (record: Applicant) => {
  return (
    <Group gap='xs'>
      <Rating count={1} mt='xxs' value={record.score} readOnly />
      <Text>{record.score}</Text>
    </Group>
  )
}

const renderHiringStage = (record: Applicant) => {
  const badge = get(applicationStatusMap, record.hiringStage)
  return badge
}

const renderAction = (record: Applicant) => {
  const href = JobhuntlyCompanyDashboardApplicantsApplicantId({
    applicantId: record.id,
  })
  return (
    <Group wrap='nowrap'>
      <Button component={Link} href={href} size='md' variant='outline'>
        See Application
      </Button>

      <Box
        className={clsx('icon-size-lg', 'cursor-pointer')}
        component={DotsThree}
        weight='bold'
      />
    </Group>
  )
}

export const columns: DataTableColumn<Applicant>[] = [
  {
    accessor: 'fullName',
    width: 'fit-content',
    sortable: true,
    render: renderFullName,
    title: 'Full Name',
  },
  {accessor: 'score', sortable: true, render: renderScore},
  {
    accessor: 'hiringStage',
    sortable: true,
    render: renderHiringStage,
    title: 'Hiring Stage',
  },
  {accessor: 'appliedDate', sortable: true, title: 'Applied Date'},
  {accessor: 'jobRole', sortable: true, title: 'Job Role'},
  {
    accessor: 'action',
    width: '0%', // 👈 use minimal width
    render: renderAction,
  },
]
