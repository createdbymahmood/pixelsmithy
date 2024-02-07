import {
  Avatar,
  Box,
  Grid,
  Group,
  List,
  Popover,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {
  IconApps,
  IconBellBolt,
  IconChevronDown,
  IconSeparator,
} from '@tabler/icons-react'
import clsx from 'clsx'
import Image from 'next/image'

import styles from './JobLocationHeader.module.scss'

function JobLocationHeaderNavbar() {
  return (
    <Group
      align='center'
      className={styles.navbarItems}
      justify='space-between'
    >
      <Text className={clsx(styles.navbarItem, styles.active)} size='sm'>
        Find Jobs
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Company Reviews
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Find Salaries
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Find Resumes
      </Text>
      <Text className={styles.navbarItem} size='sm'>
        Employers / Post Job
      </Text>
    </Group>
  )
}

const avatar = 'https://randomuser.me/api/portraits/men/85.jpg'

const notifications = [
  {
    id: 1,
    title: 'New message from John',
    message: 'Hey, how are you doing?',
    avatar,
    time: 'Just now',
  },
  {
    id: 2,
    title: 'Meeting reminder',
    message: 'Your meeting with Sarah is in 15 minutes',
    avatar: '',
    time: '5 minutes ago',
    variant: 'warning',
  },
]

interface Notification {
  id: number
  title: string
  message: string
  avatar: string
  time: string
}

interface NotificationProps {
  notification: Notification
}

const Notification = ({notification}: NotificationProps) => (
  <Stack gap={0}>
    {notification.avatar ? (
      <Avatar radius='md' size={50} src={notification.avatar} />
    ) : null}

    <Text fw='bold' size='md'>
      {notification.title}
    </Text>

    <Text c='gray' size='xs'>
      {notification.time}
    </Text>
    <Text size='sm'>{notification.message}</Text>
  </Stack>
)

function JobLocationHeaderNotifications() {
  return (
    <Box className={styles.notifications}>
      <Popover position='bottom-end' shadow='md' withArrow>
        <Popover.Target>
          <IconBellBolt className={styles.notificationsTarget} />
        </Popover.Target>

        <Popover.Dropdown maw={rem(320)}>
          <List listStyleType='none' spacing='md'>
            {notifications.map((notification) => (
              <List.Item key={notification.id}>
                <Notification notification={notification} />
              </List.Item>
            ))}
          </List>
        </Popover.Dropdown>
      </Popover>
    </Box>
  )
}

function JobLocationHeaderProfileMenu() {
  return (
    <Group className={styles.profile}>
      <Image alt='Profile Image' height={30} src='/next.svg' width={30} />

      <Stack gap={0}>
        <Text className={styles.greeting} size='xs'>
          Hello!
        </Text>

        <Group align='center' gap='xs'>
          <Text fw='600' size='xs'>
            Mahmood Bagheri
          </Text>

          <IconChevronDown size={12} />
        </Group>
      </Stack>
    </Group>
  )
}

export function JobLocationHeader() {
  return (
    <Box className={styles.header}>
      <Grid align='center' justify='space-between' px='md' py='lg'>
        <Grid.Col pr='xl' span={{md: 'content', xl: 3}}>
          <IconApps className={styles.logo} />
        </Grid.Col>

        <Grid.Col maw={rem(rem(800))} mx='auto' p={0} span='content'>
          <JobLocationHeaderNavbar />
        </Grid.Col>

        <Grid.Col ml='auto' span={{md: 'content'}}>
          <Group className={styles.actions} gap={0}>
            <JobLocationHeaderNotifications />
            <IconSeparator className={styles.separator} />
            <JobLocationHeaderProfileMenu />
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  )
}
