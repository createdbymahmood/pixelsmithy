'use client'

import '@/lib/date/dayjs'

import {
  Avatar,
  Box,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Timeline,
} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {Broadcast, BugBeetle, Sun, Video} from '@phosphor-icons/react'
import {User} from '@phosphor-icons/react/dist/ssr'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {get} from 'lodash-es'
import {Fragment} from 'react'

import styles from './RightSidePanel.module.scss'

type NotificationType = 'bug' | 'register' | 'subscribe'

interface Notification {
  title: string
  date: Dayjs
  type: NotificationType
}

const notificationIconMap: Record<NotificationType, React.FC<IconProps>> = {
  bug: BugBeetle,
  register: User,
  subscribe: Broadcast,
}

const notifications: Notification[] = [
  {
    title: 'You fixed a bug.',
    date: dayJS(),
    type: 'bug',
  },
  {
    title: 'New user registered.',
    date: dayJS().subtract(59, 'minutes'),
    type: 'register',
  },
  {
    title: 'You fixed a bug',
    date: dayJS().subtract(12, 'hours'),
    type: 'bug',
  },
  {
    title: 'Andi Lane subscribed to you',
    date: dayJS().set('hour', 12).set('minutes', 59),
    type: 'subscribe',
  },
]

function Notifications() {
  const content = notifications.map((notification) => {
    const Icon = get(notificationIconMap, notification.type, Fragment)
    return (
      <Group key={notification.title} align='flex-start' gap='xs'>
        <Group align='center' className={styles.iconWrapper} justify='center'>
          <Icon size={16} />
        </Group>

        <Stack gap='0'>
          <Text size='sm'>{notification.title}</Text>
          <Text className={styles.time} size='xs'>
            {notification.date.fromNow()}
          </Text>
        </Stack>
      </Group>
    )
  })

  return (
    <Stack gap='lg'>
      <Text size='sm'>Notifications</Text>
      <Stack>{content}</Stack>
    </Stack>
  )
}

const activities = [
  {
    title: 'Changed the style.',
    date: dayJS(),
  },
  {
    title: 'Released a new version.',
    date: dayJS().subtract(59, 'minutes'),
  },
  {
    title: 'Submitted a bug.',
    date: dayJS().subtract(12, 'hours'),
  },
  {
    title: 'Modified A data in Page X.',
    date: dayJS().subtract(5, 'hours'),
  },
  {
    title: 'Deleted a page in Project X.',
    date: dayJS().subtract(5, 'hours'),
  },
]

function Activities() {
  const content = activities.map((activity) => {
    return (
      <Timeline.Item
        key={activity.title}
        bullet={<Avatar radius='xl' size={24} src='' />}
        classNames={{
          itemTitle: styles.timelineItemTitle,
          item: styles.timelineItem,
        }}
        title={activity.title}
      >
        <Text c='dimmed' size='xs'>
          {activity.date.fromNow()}
        </Text>
      </Timeline.Item>
    )
  })

  return (
    <Stack gap='lg'>
      <Text size='sm'>Activities</Text>

      <Timeline bulletSize={24} lineWidth={1}>
        {content}
      </Timeline>
    </Stack>
  )
}

const contacts = [
  {
    name: 'Natali Craig',
    avatar: '',
  },
  {
    name: 'Drew Cano',
    avatar: '',
  },
  {
    name: 'Andi Lane',
    avatar: '',
  },
  {
    name: 'Koray Okumus',
    avatar: '',
  },
  {
    name: 'Kate Morrison',
    avatar: '',
  },
  {
    name: 'Melody Macy',
    avatar: '',
  },
]

function Contacts() {
  const content = contacts.map((contact) => {
    return (
      <Group key={contact.name} gap='xs'>
        <Avatar radius='xl' size={24} src={contact.avatar} />
        <Text size='sm'>{contact.name}</Text>
      </Group>
    )
  })

  return (
    <Stack gap='lg'>
      <Text size='sm'>Contacts</Text>
      <Stack>{content}</Stack>
    </Stack>
  )
}

export function RightSidePanel() {
  return (
    <Stack gap='xl' miw={rem(280)} p='lg'>
      <Notifications />
      <Activities />
      <Contacts />
    </Stack>
  )
}
