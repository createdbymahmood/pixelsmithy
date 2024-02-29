'use client'

import {Avatar, Badge, Box, Group, Input, rem, Stack, Text} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {isUndefined} from 'lodash-es'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {toSidebarInboxTime} from '@/components/SnowUI/utils/date'

import styles from './ChatSidebar.module.scss'

function ChatPreview({date, name, preview, unread, isOnline}: ChatItem) {
  const hasUnreadMessages = !isUndefined(unread)

  return (
    <Box className={clsx(styles.chatPreview)} p={rem(28)}>
      <Group
        align='center'
        className={clsx(styles.listItem, 'cursor-pointer')}
        wrap='nowrap'
      >
        <Box pos='relative'>
          <Avatar size={rem(48)} />
          {isOnline ? (
            <Badge
              bg='green.5'
              bottom={0}
              className={styles.onlineBadge}
              h={rem(12)}
              pos='absolute'
              radius='xl'
              right={-6}
              w={rem(12)}
            />
          ) : null}
        </Box>
        <Stack gap={rem(4)} w='100%'>
          <Group gap={rem(9)}>
            <Text
              fw={hasUnreadMessages ? 'bold' : 'normal'}
              lineClamp={1}
              size='sm'
            >
              {name}
            </Text>

            {hasUnreadMessages ? (
              <Badge color='primary' fw='bold' radius='xl'>
                {unread}
              </Badge>
            ) : null}

            <Text
              c='general.3'
              className='white-space-no-wrap'
              ml='auto'
              size='xs'
            >
              {toSidebarInboxTime(date)}
            </Text>
          </Group>

          <Text c='general.5' lineClamp={1} size='sm'>
            {preview}
          </Text>
        </Stack>
      </Group>
    </Box>
  )
}

interface ChatItem {
  name: string
  preview: string
  date: Dayjs
  unread?: number
  isOnline: boolean
}

const chats: ChatItem[] = [
  {
    name: 'Tom Anderson',
    preview: 'Hello, I’m interested in this item and it will susprise everyone',
    date: dayJS(),
    isOnline: true,
    unread: 8,
  },
  {
    name: 'Luis Pittman',
    preview: 'Hi, can I ask if there is anything...',
    date: dayJS(),
    isOnline: true,
    unread: 5,
  },
  {
    name: 'Barry George',
    preview: 'Is there any chance to get a refu...',
    date: dayJS(),
    isOnline: false,
  },
  {
    name: 'Alisson Mack',
    preview: 'I want to complain about item',
    date: dayJS(),
    isOnline: false,
  },
  {
    name: 'Jenny Lloyd',
    preview: 'I’m not sure if this is what I want',
    date: dayJS(),
    isOnline: false,
  },
  {
    name: 'Andrew Larson',
    preview: 'Can you help me choose from t',
    date: dayJS(),
    isOnline: false,
  },
]

function SidebarHeader() {
  return (
    <Stack gap={rem(48)} pb={rem(4)} pt={rem(28)} px={rem(28)}>
      <Text fw='bold'>Conversations</Text>
      <Input
        leftSection={<MagnifyingGlass className='icon-size-md' weight='bold' />}
        placeholder='Search...'
      />
    </Stack>
  )
}

export function ChatSidebar() {
  const content = chats.map((chat) => {
    return <ChatPreview {...chat} key={chat.name} />
  })

  return (
    <Box
      className={clsx(styles.sidebar, 'shrink-0')}
      h='100%'
      p={0}
      w={rem(350)}
    >
      <SidebarHeader />

      <Stack gap={0} h='100%' pb={rem(48)}>
        <PerfectScrollbar>{content}</PerfectScrollbar>
      </Stack>
    </Box>
  )
}
