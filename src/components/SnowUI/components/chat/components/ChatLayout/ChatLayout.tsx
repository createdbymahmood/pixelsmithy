'use client'

import {Box, Card, Group} from '@mantine/core'
import {Gear, NotePencil} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import dayJS from 'dayjs'
import type {ReactNode} from 'react'

import type {SidebarInboxPreviewItem} from '@/components/SnowUI'
import {SearchInput, SidebarInbox} from '@/components/SnowUI'

import styles from './ChatLayout.module.scss'

interface ChatLayoutProps {
  children: ReactNode
}

function Header() {
  return (
    <Card className='shrink-0' p='xs'>
      <Group>
        <NotePencil className={clsx('icon-size-md', 'cursor-pointer')} />
        <Gear className={clsx('icon-size-md', 'cursor-pointer')} />
        <SearchInput classNames={{input: styles.searchInput}} ml='auto' />
      </Group>
    </Card>
  )
}

function ChatInboxSidebar() {
  const chats: SidebarInboxPreviewItem[] = [
    {
      name: 'William Johnson',
      preview: 'What about the second plan',
      date: dayJS().set('hours', 18).set('minutes', 30),
    },
    {
      name: 'ByeWind',
      preview: 'Are you free tonight?',
      date: dayJS().set('hours', 19).set('minutes', 28),
      unread: 12,
    },
    {
      name: 'Natali Craig',
      preview: 'Hi',
      date: dayJS().set('hours', 17).set('minutes', 52),
      unread: 5,
    },
    {
      name: 'Drew Cano',
      preview:
        "Let's go fishing! – Hey, You wanna join me and Fred at the lake tomorrow? It'll be awesome.",
      date: dayJS().set('hours', 10).set('minutes', 12),
    },
    {
      name: 'Bruce Wayne, James Davis',
      preview: 'You have a new follower',
      date: dayJS().set('hours', 6).set('minutes', 30),
    },
    {
      name: 'Orlando Diggs',
      preview: "Hey man – Nah man sorry i don't. Should i get it?",
      date: dayJS().set('month', 2).set('date', 12),
    },
    {
      name: 'Sarah Jackson, Michael Brown, Christopher Lee',
      preview: 'Welcome to ChatGPT',
      date: dayJS().set('month', 2).set('date', 12),
    },
    {
      name: 'Andi Lane',
      preview: 'Re: New mail settings – Will you answer him asap?',
      date: dayJS().set('month', 2).set('date', 11),
    },
    {
      name: 'Group',
      preview: 'You have a new follower',
      date: dayJS().set('month', 2).set('date', 10),
    },
    {
      name: 'John Smith',
      preview: "There's a bug you need to deal with.",
      date: dayJS().set('month', 2).set('date', 9),
    },
    {
      name: 'Kate Morrison',
      preview: 'I think we should use the first version.',
      date: dayJS().set('month', 2).set('date', 9),
    },
    {
      name: 'Threads',
      preview: 'I think we should use the first version.',
      date: dayJS().set('month', 2).set('date', 8),
    },
    {
      name: 'Koray Okumus',
      preview: "Let's talk about the search box interaction again",
      date: dayJS().set('month', 2).set('date', 7),
    },
  ]
  return <SidebarInbox header={<Header />} items={chats} />
}

export function ChatLayout({children}: ChatLayoutProps) {
  return (
    <Group align='flex-start' h='100%' w='100%' wrap='nowrap'>
      <ChatInboxSidebar />

      <Box h='100%' style={{alignSelf: 'stretch'}} w='100%'>
        {children}
      </Box>
    </Group>
  )
}
