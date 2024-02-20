'use client'

import {Avatar, Box, Group, rem, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {toSidebarInboxTime} from '@/components/SnowUI/utils/date'

import styles from './SidebarInbox.module.scss'

export interface SidebarInboxPreviewItem {
  sender: string
  preview: string
  date: Dayjs
  unread?: number
}

interface SidebarInboxListItemProps extends SidebarInboxPreviewItem {}

function ChatListItem({
  preview,
  sender,
  date,
  unread,
}: SidebarInboxListItemProps) {
  return (
    <Box className={clsx(styles.bordered)}>
      <Group
        align='flex-start'
        className={clsx(styles.listItem, 'cursor-pointer')}
        gap='xs'
        px='sm'
        py={rem(7)}
        wrap='nowrap'
      >
        <Avatar size={rem(24)} />
        <Stack gap={0}>
          <Text className={styles.sender} size='sm'>
            {sender}
          </Text>
          <Text c='dimmed' className={styles.preview} size='xs'>
            {preview}
          </Text>
        </Stack>

        <Text c='dimmed' ml='auto' size='xs' style={{whiteSpace: 'nowrap'}}>
          {toSidebarInboxTime(date)}
        </Text>
      </Group>
    </Box>
  )
}

interface ChatListProps {
  items: SidebarInboxPreviewItem[]
}

function ChatsList({items}: ChatListProps) {
  const content = items.map((item) => {
    return <ChatListItem key={`${item.sender}-${item.preview}`} {...item} />
  })

  return <Stack gap={rem(2)}>{content}</Stack>
}

interface SidebarInboxProps extends ChatListProps {
  header: ReactNode
}

export function SidebarInbox({header, items}: SidebarInboxProps) {
  return (
    <Stack h='100%' style={{flexShrink: 0, width: rem(304)}}>
      {header}
      <PerfectScrollbar>
        <ChatsList items={items} />
      </PerfectScrollbar>
    </Stack>
  )
}
