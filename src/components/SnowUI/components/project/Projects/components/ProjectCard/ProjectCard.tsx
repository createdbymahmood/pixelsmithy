import {Avatar, Group, Progress, rem, Stack, Text, Title} from '@mantine/core'
import {Butterfly} from '@phosphor-icons/react/dist/ssr'
import {get, startCase} from 'lodash-es'

import styles from './ProjectCard.module.scss'

const statusMap = {
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

function ProjectCardHeader() {
  return (
    <Group justify='space-between'>
      <Stack gap={0}>
        <Title order={5}>Snow UI</Title>
        <Text className={styles.dueDate} size='xs'>
          Due Date: Nov 10, 2022
        </Text>
      </Stack>
      <Butterfly size={40} weight='thin' />
    </Group>
  )
}

interface ProgressStateProps {
  index: number
}

function getStatusByIndex(index: number) {
  const projectIndex = index % Object.keys(statusMap).length
  const statusKey = get(
    Object.keys(statusMap),
    projectIndex,
  ) as keyof typeof statusMap
  const status = get(statusMap, statusKey)
  return {status, statusKey}
}

function ProgressState({index}: ProgressStateProps) {
  const {status, statusKey} = getStatusByIndex(index)

  return (
    <Stack>
      <Text c={status.color} className={styles.status} size='xs'>
        {startCase(statusKey)}
      </Text>
    </Stack>
  )
}

interface ProjectCardStatusProps {
  index: number
}

function ProjectCardStatus({index}: ProjectCardStatusProps) {
  const {status} = getStatusByIndex(index)

  return (
    <Stack>
      <Group justify='space-between'>
        <Avatar.Group>
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24}>+5</Avatar>
        </Avatar.Group>
        <ProgressState index={index} />
      </Group>

      <Progress color={status.color} value={status.percentage} />

      <Group justify='space-between'>
        <Group gap={rem(4)}>
          <Text size='xs'>20</Text>
          <Text c='gray.6' size='xs'>
            /
          </Text>
          <Text size='xs'>20</Text>
          <Text c='gray.6' size='xs'>
            Total Tasks
          </Text>
        </Group>
        <Text size='xs'>{status.percentage}%</Text>
      </Group>
    </Stack>
  )
}

interface ProjectCardProps {
  index: number
}

export function ProjectCard({index}: ProjectCardProps) {
  return (
    <Stack className={styles.card}>
      <ProjectCardHeader />
      <ProjectCardStatus index={index} />
    </Stack>
  )
}
