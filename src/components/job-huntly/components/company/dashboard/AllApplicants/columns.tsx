import {Avatar, Box, Button, Group, Rating, rem, Text} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {get} from 'lodash-es'
import type {DataTableColumn} from 'mantine-datatable'

import {applicationStatusMap} from '@/components/job-huntly/components/applicant/dashboard/Applications/components/ApplicationsList/components'

import type {Company} from './AllApplicants'

const renderFullName = (record: Company) => {
  return (
    <Group wrap='nowrap'>
      <Avatar size={rem(40)} />
      <Text lineClamp={1}>{record.fullName}</Text>
    </Group>
  )
}

const renderScore = (record: Company) => {
  return (
    <Group gap='xs'>
      <Rating count={1} mt='xxs' value={record.score} readOnly />
      <Text>{record.score}</Text>
    </Group>
  )
}

const renderHiringStage = (record: Company) => {
  const badge = get(applicationStatusMap, record.hiringStage)
  return badge
}

const renderAction = () => {
  return (
    <Group wrap='nowrap'>
      <Button size='md' variant='outline'>
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

export const columns: DataTableColumn<Company>[] = [
  {
    accessor: 'fullName',
    width: 'fit-content',
    sortable: true,
    render: renderFullName,
  },
  {accessor: 'score', sortable: true, render: renderScore},
  {accessor: 'hiringStage', sortable: true, render: renderHiringStage},
  {accessor: 'appliedDate', sortable: true},
  {accessor: 'jobRole', sortable: true},
  {
    accessor: 'action',
    width: '0%', // 👈 use minimal width
    render: renderAction,
  },
]
