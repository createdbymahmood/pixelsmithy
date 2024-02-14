import {Stack, Text} from '@mantine/core'
import {get, startCase} from 'lodash-es'
import React from 'react'

import styles from './Status.module.scss'

export const statusMap = {
  complete: {
    color: 'var(--mantine-color-green-7)',
    percentage: 100,
  },
  inProgress: {
    color: 'var(--mantine-color-indigo-4)',
    percentage: 40,
  },
  rejected: {
    color: 'var(--mantine-color-gray-5)',
    percentage: 60,
  },
  pending: {
    color: 'var(--mantine-color-blue-4)',
    percentage: 10,
  },
  approved: {
    color: 'var(--mantine-color-yellow-6)',
    percentage: 12,
  },
} as const

interface ProgressStateProps {
  index: number
}

export function getStatusByIndex(index: number) {
  const projectIndex = index % Object.keys(statusMap).length
  const statusKey = get(
    Object.keys(statusMap),
    projectIndex,
  ) as keyof typeof statusMap
  const status = get(statusMap, statusKey)
  return {status, statusKey}
}

export function Status({index}: ProgressStateProps) {
  const {status, statusKey} = getStatusByIndex(index)

  return (
    <Stack>
      <Text c={status.color} className={styles.status} size='xs'>
        {startCase(statusKey)}
      </Text>
    </Stack>
  )
}
