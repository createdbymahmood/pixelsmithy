import {Avatar, Group, Progress, rem, Stack, Text, Title} from '@mantine/core'
import {Butterfly} from '@phosphor-icons/react/dist/ssr'
import {get, head, shuffle, startCase} from 'lodash-es'

import styles from './ProjectCard.module.scss'

const status = ['complete', 'inProgress', 'rejected', 'pending', 'approved']

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

function ProgressState() {
  const s = head(shuffle(shuffle(status)))!

  return (
    <Stack>
      <Text className={get(styles, s)} size='xs'>
        {startCase(s)}
      </Text>
    </Stack>
  )
}

function ProjectCardStatus() {
  return (
    <Stack>
      <Group justify='space-between'>
        <Avatar.Group>
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24} />
          <Avatar size={24}>+5</Avatar>
        </Avatar.Group>
        <ProgressState />
      </Group>

      <Progress color='blue' value={100} />

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
        <Text size='xs'>100%</Text>
      </Group>
    </Stack>
  )
}

export function ProjectCard() {
  return (
    <Stack className={styles.card}>
      <ProjectCardHeader />
      <ProjectCardStatus />
    </Stack>
  )
}
