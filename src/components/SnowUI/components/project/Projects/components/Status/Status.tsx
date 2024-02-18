import {Badge, Stack, Text} from '@mantine/core'
import {get, startCase} from 'lodash-es'

import styles from './Status.module.scss'

export type StatusType = 'approved' | 'complete' | 'in-progress' | 'pending'

export const statusBadgeMap: Record<StatusType, JSX.Element> = {
  'in-progress': <Badge color='indigo'>In Progress</Badge>,
  approved: <Badge color='yellow'>Approved</Badge>,
  complete: <Badge color='green'>Complete</Badge>,
  pending: <Badge color='blue'>Pending</Badge>,
}
export type CompleationStatus = keyof typeof compleationStatusMap

export const compleationStatusMap = {
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

export type OperationStatus = 'failure' | 'success'

export const operationStatusMap: Record<OperationStatus, {color: string}> = {
  failure: {
    color: 'var(--mantine-color-gray-6)',
  },
  success: {
    color: 'var(--mantine-color-green-7)',
  },
}

interface OperationStatusProps {
  status: OperationStatus
}

export const OperationStatus = ({status: statusKey}: OperationStatusProps) => {
  const status = get(operationStatusMap, statusKey)
  return (
    <Text c={status.color} className={styles.status} size='xs'>
      {startCase(statusKey)}
    </Text>
  )
}

interface ProgressStateProps {
  index: number
}

export function getCompleationStatusByIndex(index: number) {
  const projectIndex = index % Object.keys(compleationStatusMap).length
  const statusKey = get(
    Object.keys(compleationStatusMap),
    projectIndex,
  ) as keyof typeof compleationStatusMap
  const status = get(compleationStatusMap, statusKey)
  return {status, statusKey}
}

export function CompleationStatus({index}: ProgressStateProps) {
  const {status, statusKey} = getCompleationStatusByIndex(index)

  return (
    <Stack>
      <Text c={status.color} className={styles.status} size='xs'>
        {startCase(statusKey)}
      </Text>
    </Stack>
  )
}
