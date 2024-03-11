import {
  Avatar,
  Card as OriginalCard,
  Group,
  Progress,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {Butterfly} from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import {
  CompleationStatus,
  getCompleationStatusByIndex,
} from '@/components/Roscent/components/project/Projects/components/Status/Status'
import {projectId} from '@/components/Roscent/mocks/email'
import {urls} from '@/constants'

import styles from './ProjectCard.module.scss'

function ProjectCardHeader() {
  return (
    <Group justify='space-between'>
      <Stack gap={0}>
        <Title order={5}>Roscent</Title>
        <Text className={styles.dueDate} size='xs'>
          Due Date: Nov 10, 2022
        </Text>
      </Stack>
      <Butterfly size={40} weight='thin' />
    </Group>
  )
}

interface ProjectCardStatusProps {
  index: number
}

function ProjectCardStatus({index}: ProjectCardStatusProps) {
  const {status} = getCompleationStatusByIndex(index)

  return (
    <Stack>
      <Group justify='space-between'>
        <Avatar.Group>
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24}>+5</Avatar>
        </Avatar.Group>
        <CompleationStatus index={index} />
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

const Card = OriginalCard

export function ProjectCard({index}: ProjectCardProps) {
  return (
    <Card
      component={Link}
      href={urls.roscent.projects.overview(projectId)}
      scroll
    >
      <Stack className={styles.card}>
        <ProjectCardHeader />
        <ProjectCardStatus index={index} />
      </Stack>
    </Card>
  )
}