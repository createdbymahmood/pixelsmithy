import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Indicator,
  Paper,
  Popover,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {useCallbackRef} from '@mantine/hooks'
import {ArrowLeft, Bell} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEmpty} from 'lodash-es'
import Link from 'next/link'
import React, {useState} from 'react'

import styles from './Header.module.scss'

export const JOB_HUNTLY_HEADER_HEIGHT = rem(107)
const notifications = [
  {
    sender: 'Jan Mayer',
    message: ' invited you to interview with Nomad',
    badge: {
      color: 'yellow',
      content: 'New',
    },
    time: '12 mins ago',
  },

  {
    sender: 'Jana Alicia',
    message: 'from Udacity updated your job applications status',
    badge: {
      color: 'green',
      content: 'Shortlisted',
    },
    time: '3 days ago',
  },
]

function NotificationsHeader() {
  return (
    <Group justify='space-between' px='xxl' py='xl'>
      <Text fw='600' size='xl'>
        Notifications
      </Text>
      <Anchor fw='400' underline='never' variant='transparent'>
        Mark all as read
      </Anchor>
    </Group>
  )
}
interface Notification {
  sender: string
  message: string
  badge: {
    color: string
    content: string
  }
  time: string
}

function NotificationCard(notification: Notification) {
  return (
    <Group
      key={notification.message}
      align='flex-start'
      className={styles.notification}
      p='xl'
      wrap='nowrap'
    >
      <Avatar size={rem(48)} />

      <Stack gap='xxs'>
        <Group gap='xxs'>
          <Text fw='600'>{notification.sender}</Text>
          <Text c='neutrals.5'>{notification.message}</Text>
        </Group>

        <Badge
          color={notification.badge.color}
          px='lg'
          py='md'
          size='lg'
          variant='outline'
        >
          {notification.badge.content}
        </Badge>
        <Text c='neutrals.3'>{notification.time}</Text>
      </Stack>
    </Group>
  )
}

function Notifications() {
  const content = notifications.map((notification) => {
    return <NotificationCard {...notification} key={notification.message} />
  })
  return (
    <Paper p={0} w={rem(514)}>
      <Stack gap={0}>
        <NotificationsHeader />
        <Divider />
        {content}
      </Stack>
    </Paper>
  )
}

function Notification() {
  const [opened, setOpened] = useState(false)

  const toggle = useCallbackRef(() => {
    setOpened((o) => !o)
  })

  return (
    <Popover
      opened={opened}
      position='bottom-end'
      shadow='md'
      withArrow
      onChange={setOpened}
    >
      <Popover.Target>
        <ActionIcon
          radius='xl'
          size={rem(40)}
          variant={opened ? 'outline' : 'transparent'}
          onClick={toggle}
        >
          <Indicator
            color='orange'
            offset={7}
            position='top-end'
            size={12}
            inline
            withBorder
          >
            <Box
              className={clsx('icon-size-lg', 'cursor-pointer')}
              component={Bell}
              mt='xxs'
            />
          </Indicator>
        </ActionIcon>
      </Popover.Target>

      <Popover.Dropdown p={0}>
        <Notifications />
      </Popover.Dropdown>
    </Popover>
  )
}
interface HeaderProps {
  title: string
  callbackURL?: string
}

export function Header({callbackURL, title}: HeaderProps) {
  const withCallbackURL = !isEmpty(callbackURL)

  const backArrow = withCallbackURL ? (
    <Link href={callbackURL!}>
      <Box
        className='cursor-pointer'
        component={ArrowLeft}
        h={rem(40)}
        w={rem(40)}
        weight='bold'
      />
    </Link>
  ) : null

  return (
    <Group bg='white' className={clsx(styles.header)} gap='xxxl' p='xxxl'>
      <Group gap='xs'>
        {backArrow}
        <Title order={3}>{title}</Title>
      </Group>

      <Button
        c='primary'
        color='primary.1'
        ml='auto'
        size='md'
        variant='outline'
      >
        Back to homepage
      </Button>

      <Notification />
    </Group>
  )
}
