'use client'

import {Avatar, Badge, Box, Group, rem, Stack, Text} from '@mantine/core'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import {isUndefined} from 'lodash-es'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {toSidebarInboxTime} from '@/components/SnowUI/utils/date'

import styles from './SidebarInbox.module.scss'

export interface SidebarInboxPreviewItem {
  name: string
  preview: string
  date: Dayjs
  unread?: number
}

interface SidebarInboxListItemProps extends SidebarInboxPreviewItem {}

function ChatListItem({
  preview,
  name,
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
          <Text lineClamp={1} size='sm'>
            {name}
          </Text>

          <Text c='dimmed' lineClamp={1} size='xs'>
            {preview}
          </Text>
        </Stack>

        <Stack align='flex-end' gap={rem(6)} ml='auto'>
          <Text c='dimmed' size='xs' style={{whiteSpace: 'nowrap'}}>
            {toSidebarInboxTime(date)}
          </Text>

          {!isUndefined(unread) && (
            <Badge className={styles.unread} color='indigo.2'>
              {unread}
            </Badge>
          )}
        </Stack>
      </Group>
    </Box>
  )
}

interface ChatListProps {
  items: SidebarInboxPreviewItem[]
}

function ChatsList({items}: ChatListProps) {
  const content = items.map((item) => {
    return <ChatListItem key={`${item.name}-${item.preview}`} {...item} />
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
