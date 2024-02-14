import {
  Avatar,
  AvatarGroup,
  Card,
  Group,
  Progress,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import dayjs from 'dayjs'

import styles from './ProjectOverviewHeader.module.scss'

function Status() {
  return (
    <Stack className={styles.headerSection} miw={rem(160)}>
      <Text size='sm'>Status</Text>

      <Progress.Root classNames={{root: styles.progress}} size={rem(24)}>
        <Progress.Section color='indigo.2' value={80}>
          <Progress.Label c='black' style={{width: '100%'}}>
            In Progress
          </Progress.Label>
        </Progress.Section>
      </Progress.Root>
    </Stack>
  )
}

function TotalTasks() {
  return (
    <Stack className={styles.headerSection}>
      <Text size='sm'>Total Tasks</Text>
      <Group gap='sm'>
        <Title order={4}>15</Title>
        <Title c='gray.4' order={4}>
          /
        </Title>
        <Title order={4}>48</Title>
      </Group>
    </Stack>
  )
}

function DueDate() {
  return (
    <Stack className={styles.headerSection}>
      <Text size='sm'>Due Date</Text>
      <Title order={4}>{dayjs().format('DD MMM, YYYY')}</Title>
    </Stack>
  )
}

function Budget() {
  return (
    <Stack className={styles.headerSection}>
      <Text size='sm'>Budget Spent</Text>
      <Title order={4}>$15,000</Title>
    </Stack>
  )
}

export function ProjectOverviewHeader() {
  return (
    <Card>
      <Group justify='space-between'>
        <Stack>
          <Title order={4}>Snow UI</Title>

          <Group gap={0}>
            <Status />
            <TotalTasks />
            <DueDate />
            <Budget />
          </Group>
        </Stack>

        <Stack>
          <Avatar size={rem(48)} />
          <AvatarGroup>
            <Avatar size={rem(24)} />
            <Avatar size={rem(24)} />
            <Avatar size={rem(24)}>+3</Avatar>
          </AvatarGroup>
        </Stack>
      </Group>
    </Card>
  )
}
