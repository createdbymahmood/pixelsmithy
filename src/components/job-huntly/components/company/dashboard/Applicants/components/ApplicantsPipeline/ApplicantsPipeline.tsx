import type {MantineColor} from '@mantine/core'
import {Box, Group, Indicator, Paper, rem, Text} from '@mantine/core'
import {DotsThree} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

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
    return <PipelineColumn key={column.label} column={column} />
  })

  return (
    <Box>
      <PerfectScrollbar>
        <Group h='100%' wrap='nowrap'>
          {content}
        </Group>
      </PerfectScrollbar>
    </Box>
  )
}
