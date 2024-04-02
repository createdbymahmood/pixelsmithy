'use client'

import {Avatar, Badge, Box, Group, Input, rem, Stack, Text} from '@mantine/core'
import {MagnifyingGlass} from '@phosphor-icons/react/dist/ssr'
import {toInboxSidebarTime} from '@roscent/utils/date'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import PerfectScrollbar from 'react-perfect-scrollbar'

import styles from './ChatSidebar.module.scss'

function ChatPreview({date, name, preview, isOnline}: ChatItem) {
  return (
    <Box className={clsx(styles.chatPreview)} p='md'>
      <Group
        align='center'
        className={clsx(styles.listItem, 'cursor-pointer')}
        wrap='nowrap'
      >
        <Box pos='relative'>
          <Avatar size={rem(48)} />
        </Box>

        <Stack gap='xxs' w='100%'>
          <Group gap={rem(9)}>
            <Text fw='600'>{name}</Text>

            {isOnline ? (
              <Badge bg='primary' h={rem(6)} radius='xl' w={rem(6)} circle />
            ) : null}

            <Text c='neutrals.5' className='white-space-no-wrap' ml='auto'>
              {toInboxSidebarTime(date)}
            </Text>
          </Group>

          <Text c='neutrals.4' size='sm'>
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
  isOnline: boolean
}

const chats: ChatItem[] = [
  {
    name: 'Tom Anderson',
    preview: 'Hello, I’m interested in this item and it will susprise everyone',
    date: dayJS().subtract(1, 'days'),
    isOnline: true,
  },
  {
    name: 'Luis Pittman',
    preview: 'Hi, can I ask if there is anything...',
    date: dayJS().subtract(1, 'days'),
    isOnline: true,
  },
  {
    name: 'Barry George',
    preview: 'Is there any chance to get a refu...',
    date: dayJS().subtract(1, 'days'),
    isOnline: false,
  },
  {
    name: 'Alisson Mack',
    preview: 'I want to complain about item',
    date: dayJS().subtract(1, 'days'),
    isOnline: false,
  },
  {
    name: 'Jenny Lloyd',
    preview: 'I’m not sure if this is what I want',
    date: dayJS().subtract(1, 'days'),
    isOnline: false,
  },
  {
    name: 'Andrew Larson',
    preview: 'Can you help me choose from t',
    date: dayJS().subtract(1, 'days'),
    isOnline: false,
  },
]

function SidebarHeader() {
  return (
    <Stack gap={rem(48)} pb={rem(4)}>
      <Input
        leftSection={<MagnifyingGlass className='icon-size-md' weight='bold' />}
        placeholder='Search messages'
        size='md'
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
      pt='xxxl'
      w={rem(416)}
    >
      <Box mb={rem(28)} pr='xxxl'>
        <SidebarHeader />
      </Box>

      <Stack gap={0} h='100%' pb={rem(48)}>
        <PerfectScrollbar>
          <Box pb='xxxl' pr='xxxl'>
            {content}
          </Box>
        </PerfectScrollbar>
      </Stack>
    </Box>
  )
}
