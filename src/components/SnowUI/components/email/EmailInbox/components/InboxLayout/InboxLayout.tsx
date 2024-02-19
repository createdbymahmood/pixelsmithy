'use client'

import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Group as MantineGroup,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {FunnelSimple} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import type {Params} from 'next/dist/shared/lib/router/utils/route-matcher'
import Link from 'next/link'
import {useParams, useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'
import {useMemo} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'
import {v4 as uuid} from 'uuid'

import {toEmailTime} from '@/components/SnowUI/utils/date'
import {urls} from '@/constants'

import styles from './InboxLayout.module.scss'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

function InboxSidebarHeader() {
  return (
    <Card p='sm' style={{flexShrink: 0}}>
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
  id: string
}

interface InboxLayoutEmailsListItemProps extends EmailPreviewItem {}

interface QueryParams extends Params {
  id: string
}

function InboxLayoutEmailsListItem({
  preview,
  sender,
  date,
  id,
}: InboxLayoutEmailsListItemProps) {
  const href = urls.SnowUI.email.inbox(id)
  const params = useParams<QueryParams>()
  const isActive = params.id === id

  return (
    <Box className={clsx(styles.bordered, {[styles.activeListItem]: isActive})}>
      <Group
        className={clsx(styles.listItem, 'cursor-pointer')}
        component={Link}
        href={href}
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

function InboxLayoutEmailsList() {
  const emails: EmailPreviewItem[] = [
    {
      sender: 'ByeWind',
      preview: 'Are you free tonight?',
      date: dayJS().set('hours', 19).set('minutes', 28),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Slack',
      preview: 'Invite your team to Slack',
      date: dayJS().set('hours', 18).set('minutes', 30),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Natali Craig',
      preview: 'Hi',
      date: dayJS().set('hours', 17).set('minutes', 52),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Drew Cano',
      preview:
        "Let's go fishing! – Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      date: dayJS().set('hours', 10).set('minutes', 12),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Behance',
      preview: 'You have a new follower',
      date: dayJS().set('hours', 6).set('minutes', 30),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Orlando Diggs',
      preview: "Hey man – Nah man sorry i don't. Should i get it?",
      date: dayJS().set('month', 2).set('date', 12),
      id: useMemo(uuid, []),
    },
    {
      sender: 'ChatGPT',
      preview: 'Welcome to ChatGPT',
      date: dayJS().set('month', 2).set('date', 12),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Andi Lane',
      preview: 'Re: New mail settings – Will you answer him asap?',
      date: dayJS().set('month', 2).set('date', 11),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Facebook',
      preview: 'You have a new follower',
      date: dayJS().set('month', 2).set('date', 10),
      id: useMemo(uuid, []),
    },
    {
      sender: 'YouTube',
      preview: 'The most popular videos of 2024',
      date: dayJS().set('month', 2).set('date', 9),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Kate Morrison',
      preview: 'I think we should use the first version.',
      date: dayJS().set('month', 2).set('date', 9),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Threads',
      preview: 'You have a new follower',
      date: dayJS().set('month', 2).set('date', 8),
      id: useMemo(uuid, []),
    },
    {
      sender: 'Koray Okumus',
      preview: "Let's talk about the search box interaction again",
      date: dayJS().set('month', 2).set('date', 7),
      id: useMemo(uuid, []),
    },
  ]

  const content = emails.map((email) => {
    return (
      <InboxLayoutEmailsListItem
        key={`${email.sender}-${email.preview}`}
        {...email}
      />
    )
  })

  return <Stack gap={rem(2)}>{content}</Stack>
}

export function InboxSidebar() {
  return (
    <Stack h='100%' style={{flexShrink: 0, width: rem(304)}}>
      <InboxSidebarHeader />

      <PerfectScrollbar>
        <InboxLayoutEmailsList />
      </PerfectScrollbar>
    </Stack>
  )
}

interface EmailInboxLayoutProps {
  children: ReactNode
}

export function EmailInboxLayout({children}: EmailInboxLayoutProps) {
  return (
    <Group align='flex-start' h='100%' w='100%' wrap='nowrap'>
      <InboxSidebar />

      <Box h='100%' w='100%'>
        {children}
      </Box>
    </Group>
  )
}
