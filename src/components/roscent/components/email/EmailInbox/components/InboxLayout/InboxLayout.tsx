'use client'

import {Box, Card, Checkbox, Group} from '@mantine/core'
import {FunnelSimple} from '@phosphor-icons/react/dist/ssr'
import type {InboxSidebarPreviewItem} from '@roscent/components'
import {InboxSidebar} from '@roscent/components'
import clsx from 'clsx'
import dayJS from 'dayjs'
import type {ReactNode} from 'react'

import {GroupLink} from '@/components/common'

function InboxSidebarHeader() {
  return (
    <Card className='shrink-0' p='sm'>
      <GroupLink>
        <Checkbox />
        <FunnelSimple className={clsx('icon-size-md', 'cursor-pointer')} />
      </GroupLink>
    </Card>
  )
}

export function EmailInboxSidebar() {
  const emails: InboxSidebarPreviewItem[] = [
    {
      name: 'ByeWind',
      preview: 'Are you free tonight?',
      date: dayJS().set('hours', 19).set('minutes', 28),
    },
    {
      name: 'Slack',
      preview: 'Invite your team to Slack',
      date: dayJS().set('hours', 18).set('minutes', 30),
    },
    {
      name: 'Natali Craig',
      preview: 'Hi',
      date: dayJS().set('hours', 17).set('minutes', 52),
    },
    {
      name: 'Drew Cano',
      preview:
        "Let's go fishing! – Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      date: dayJS().set('hours', 10).set('minutes', 12),
    },
    {
      name: 'Behance',
      preview: 'You have a new follower',
      date: dayJS().set('hours', 6).set('minutes', 30),
    },
    {
      name: 'Orlando Diggs',
      preview: "Hey man – Nah man sorry i don't. Should i get it?",
      date: dayJS().set('month', 2).set('date', 12),
    },
    {
      name: 'ChatGPT',
      preview: 'Welcome to ChatGPT',
      date: dayJS().set('month', 2).set('date', 12),
    },
    {
      name: 'Andi Lane',
      preview: 'Re: New mail settings – Will you answer him asap?',
      date: dayJS().set('month', 2).set('date', 11),
    },
    {
      name: 'Facebook',
      preview: 'You have a new follower',
      date: dayJS().set('month', 2).set('date', 10),
    },
    {
      name: 'YouTube',
      preview: 'The most popular videos of 2024',
      date: dayJS().set('month', 2).set('date', 9),
    },
    {
      name: 'Kate Morrison',
      preview: 'I think we should use the first version.',
      date: dayJS().set('month', 2).set('date', 9),
    },
    {
      name: 'Threads',
      preview: 'You have a new follower',
      date: dayJS().set('month', 2).set('date', 8),
    },
    {
      name: 'Koray Okumus',
      preview: "Let's talk about the search box interaction again",
      date: dayJS().set('month', 2).set('date', 7),
    },
  ]

  return <InboxSidebar header={<InboxSidebarHeader />} items={emails} />
}

interface EmailInboxLayoutProps {
  children: ReactNode
}

export function EmailInboxLayout({children}: EmailInboxLayoutProps) {
  return (
    <Group align='flex-start' h='100%' w='100%' wrap='nowrap'>
      <EmailInboxSidebar />

      <Box h='100%' w='100%'>
        {children}
      </Box>
    </Group>
  )
}
