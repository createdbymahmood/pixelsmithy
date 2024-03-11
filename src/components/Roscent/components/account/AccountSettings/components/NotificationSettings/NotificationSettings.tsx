import {Card, Checkbox, Group, Stack, Text, Title} from '@mantine/core'
import React from 'react'

import {SaveActions} from '../common'
import styles from './NotificationSettings.module.scss'

function Header() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Notifications</Title>
      <SaveActions />
    </Group>
  )
}

const notificationSettings = [
  {
    title: 'Notifications',
    defaultChecked: {
      email: true,
      phone: true,
    },
  },
  {
    title: 'Billing Updates',
    defaultChecked: {
      email: true,
      phone: true,
    },
  },
  {
    title: 'New Team Members',
    defaultChecked: {
      email: true,
      phone: true,
    },
  },
  {
    title: 'Completed Projects',
    defaultChecked: {
      email: false,
      phone: true,
    },
  },
  {
    title: 'Newsletters',
    defaultChecked: {
      email: true,
      phone: false,
    },
  },
]

interface NotificationSettingProps {
  title: string
  defaultChecked: {
    email: boolean
    phone: boolean
  }
}

function NotificationSetting({
  defaultChecked,
  title,
}: NotificationSettingProps) {
  return (
    <Group className={styles.col} justify='space-between'>
      <Text size='sm'>{title}</Text>
      <Group gap='lg'>
        <Checkbox defaultChecked={defaultChecked.email} label='Email' />
        <Checkbox defaultChecked={defaultChecked.phone} label='Phone' />
      </Group>
    </Group>
  )
}

function NotificationsSettings() {
  const content = notificationSettings.map((ns) => {
    return <NotificationSetting {...ns} key={ns.title} />
  })
  return <Stack className={styles.stack}>{content}</Stack>
}

export function NotificationSettings() {
  return (
    <Card>
      <Stack gap='lg'>
        <Header />
        <NotificationsSettings />
      </Stack>
    </Card>
  )
}
