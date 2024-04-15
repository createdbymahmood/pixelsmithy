import type {MantineColor} from '@mantine/core'
import {
  Anchor,
  Avatar,
  Box,
  Group,
  Indicator,
  Paper,
  Rating,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {filter} from 'lodash-es'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import type {Applicant} from '@/components/job-huntly/mock/applicants'
import {applicants} from '@/components/job-huntly/mock/applicants'

import styles from './ApplicantsPipeline.module.scss'

interface Column {
  key: string
  label: string
  color: MantineColor
  count: number
}

const columns: Column[] = [
  {
    key: 'in-review',
    color: 'yellow',
    label: 'In Review',
    count: 10,
  },
  {
    key: 'shortlisted',
    color: 'primary',
    label: 'Shortlisted',
    count: 8,
  },

  {
    key: 'interview',
    color: 'blue',
    label: 'Interview',
    count: 11,
  },

  {
    key: 'hired',
    color: 'green',
    label: 'Hired',
    count: 3,
  },
  {
    key: 'rejected',
    color: 'red',
    label: 'Rejected',
    count: 10,
  },
]

interface ApplicantsColumnProps {
  columnKey: string
}

interface ApplicantCardProps {
  applicant: Applicant
}

function ApplicantCard({applicant}: ApplicantCardProps) {
  return (
    <Paper p='xl' withBorder>
      <Stack gap='xl'>
        <Group>
          <Avatar size={rem(56)} />
          <Stack gap={0}>
            <Text fw='700'>{applicant.fullName}</Text>
            <Anchor size='sm' underline='never'>
              View Profile
            </Anchor>
          </Stack>
        </Group>

        <Group className={styles.applicantCardContent}>
          <Stack gap={0}>
            <Text c='neutrals.4' lineClamp={1}>
              Applied on
            </Text>
            <Text fw='600' lineClamp={1} size='md'>
              {applicant.appliedDate}
            </Text>
          </Stack>

          <Stack gap={0} ml='xl'>
            <Text c='neutrals.4' lineClamp={1}>
              Score
            </Text>

            <Group gap='xs'>
              <Rating count={1} value={applicant.score} />
              <Text fw='600' size='md'>
                {applicant.score}
              </Text>
            </Group>
          </Stack>
        </Group>
      </Stack>
    </Paper>
  )
}

function ApplicantsColumn({columnKey}: ApplicantsColumnProps) {
  const _applicants = filter(applicants, {hiringStage: columnKey})
  const content = _applicants.map((applicant) => {
    return <ApplicantCard key={applicant.id} applicant={applicant} />
  })

  return <Stack gap='xs'>{content}</Stack>
}

interface PipelineColumnProps {
  column: Column
}

function PipelineColumn({column}: PipelineColumnProps) {
  return (
    <Paper
      c={column.color}
      className={clsx(styles.column, 'shrink-0')}
      px='xl'
      py='md'
      w={rem(266)}
      withBorder
    >
      <Group w='100%'>
        <Indicator color={column.color} />

        <Text c='neutrals.6' fw='500'>
          {column.label}
        </Text>

        <Text bg='secondary.0' c='neutrals.6' px={rem(6.5)} py={rem(2)}>
          {column.count}
        </Text>

        <Box
          c='neutrals.6'
          className={clsx('icon-size-lg', 'cursor-pointer')}
          component={DotsThree}
          ml='auto'
          weight='bold'
        />
      </Group>
    </Paper>
  )
}

export function ApplicantsPipeline() {
  const content = columns.map((column) => {
    return (
      <Paper key={column.label} p='xs' withBorder>
        <Stack gap='xl'>
          <PipelineColumn column={column} />
          <ApplicantsColumn columnKey={column.key} />
        </Stack>
      </Paper>
    )
  })

  return (
    <Box>
      <PerfectScrollbar>
        <Group align='flex-start' h='100%' wrap='nowrap'>
          {content}
        </Group>
      </PerfectScrollbar>
    </Box>
  )
}
