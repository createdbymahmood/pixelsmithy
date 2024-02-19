import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Divider,
  Group,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {FunnelSimple} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import type {ReactNode} from 'react'

import {toEmailTime} from '@/components/SnowUI/utils/date'

import styles from './InboxLayout.module.scss'

function InboxSidebarHeader() {
  return (
    <Card p='sm'>
      <Group>
        <Checkbox />
        <FunnelSimple className={clsx('icon-size-md', 'cursor-pointer')} />
      </Group>
    </Card>
  )
}

interface EmailPreviewItem {
  sender: string
  preview: string
  date: Dayjs
}

interface InboxLayoutEmailsListItemProps extends EmailPreviewItem {}

function InboxLayoutEmailsListItem({
  preview,
  sender,
  date,
}: InboxLayoutEmailsListItemProps) {
  return (
    <Box className={styles.bordered}>
      <Group
        className={clsx(styles.listItem, 'cursor-pointer')}
        px='sm'
        py={rem(7)}
        wrap='nowrap'
      >
        <Avatar size={rem(24)} />
        <Stack gap={0}>
          <Text size='sm'>{sender}</Text>
          <Text c='dimmed' className={styles.preview} size='xs'>
            {preview}
          </Text>
        </Stack>

        <Text c='dimmed' ml='auto' size='xs' style={{whiteSpace: 'nowrap'}}>
          {toEmailTime(date)}
        </Text>
      </Group>
    </Box>
  )
}

const emails: EmailPreviewItem[] = [
  {
    sender: 'ByeWind',
    preview: 'Are you free tonight?',
    date: dayJS().set('hours', 19).set('minutes', 28),
  },
  {
    sender: 'Slack',
    preview: 'Invite your team to Slack',
    date: dayJS().set('hours', 18).set('minutes', 30),
  },
  {
    sender: 'Natali Craig',
    preview: 'Hi',
    date: dayJS().set('hours', 17).set('minutes', 52),
  },
  {
    sender: 'Drew Cano',
    preview:
      "Let's go fishing! – Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
    date: dayJS().set('hours', 10).set('minutes', 12),
  },
  {
    sender: 'Behance',
    preview: 'You have a new follower',
    date: dayJS().set('hours', 6).set('minutes', 30),
  },
  {
    sender: 'Orlando Diggs',
    preview: "Hey man – Nah man sorry i don't. Should i get it?",
    date: dayJS().set('month', 2).set('date', 12),
  },
  {
    sender: 'ChatGPT',
    preview: 'Welcome to ChatGPT',
    date: dayJS().set('month', 2).set('date', 12),
  },
  {
    sender: 'Andi Lane',
    preview: 'Re: New mail settings – Will you answer him asap?',
    date: dayJS().set('month', 2).set('date', 11),
  },
  {
    sender: 'Facebook',
    preview: 'You have a new follower',
    date: dayJS().set('month', 2).set('date', 10),
  },
  {
    sender: 'YouTube',
    preview: 'The most popular videos of 2024',
    date: dayJS().set('month', 2).set('date', 9),
  },
  {
    sender: 'Kate Morrison',
    preview: 'I think we should use the first version.',
    date: dayJS().set('month', 2).set('date', 9),
  },
  {
    sender: 'Threads',
    preview: 'You have a new follower',
    date: dayJS().set('month', 2).set('date', 8),
  },
  {
    sender: 'Koray Okumus',
    preview: "Let's talk about the search box interaction again",
    date: dayJS().set('month', 2).set('date', 7),
  },
]

function InboxLayoutEmailsList() {
  const content = emails.map((email, index) => {
    return <InboxLayoutEmailsListItem key={email.preview} {...email} />
  })

  return <Stack gap={0}>{content}</Stack>
}

function InboxSidebar() {
  return (
    <Stack maw={rem(320)}>
      <InboxSidebarHeader />
      <InboxLayoutEmailsList />
    </Stack>
  )
}

interface EmailInboxLayoutProps {
  children: ReactNode
}

export function EmailInboxLayout({children}: EmailInboxLayoutProps) {
  return (
    <Group align='flex-start' h='100%'>
      <InboxSidebar />

      {children}
    </Group>
  )
}
