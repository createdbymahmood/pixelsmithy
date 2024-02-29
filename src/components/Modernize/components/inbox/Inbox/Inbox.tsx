'use client'

import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Group,
  Input,
  rem,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import {
  Gear,
  MagnifyingGlass,
  Paperclip,
  Plus,
  User,
  VideoCamera,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import type {Dayjs} from 'dayjs'
import dayJS from 'dayjs'
import {isUndefined} from 'lodash-es'
import type {ReactNode} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {toSidebarInboxTime} from '@/components/SnowUI/utils/date'

import styles from './Inbox.module.scss'

function ConversationPreview({
  date,
  name,
  preview,
  unread,
  isOnline,
}: Conversation) {
  const hasUnreadMessages = !isUndefined(unread)

  return (
    <Box className={clsx(styles.conversationPreview)} p={rem(28)}>
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

interface Conversation {
  name: string
  preview: string
  date: Dayjs
  unread?: number
  isOnline: boolean
}

const conversations: Conversation[] = [
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

function Sidebar() {
  const content = conversations.map((conversation) => {
    return <ConversationPreview {...conversation} key={conversation.name} />
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

function Layout(props: {children: ReactNode}) {
  return (
    <Card h='100%' p={0}>
      <Stack className='shrink-0' h='100%'>
        <Group align='flex-start' gap={0} h='100%' p={0} wrap='nowrap'>
          <Sidebar />
          {props.children}
        </Group>
      </Stack>
    </Card>
  )
}

function PageHeader() {
  return (
    <Group justify='space-between'>
      <Title order={5}>Inbox</Title>
      <Button leftSection={<Plus className='icon-size-md' weight='bold' />}>
        New Message
      </Button>
    </Group>
  )
}

function ConversationHeader() {
  return (
    <Box px={rem(28)}>
      <Group className={styles.conversationHeader} gap={0} py={rem(24)}>
        <Group gap={rem(4)}>
          <Text fw='bold'>Luis Pittman</Text>
          <Badge
            bg='green.5'
            className={styles.onlineBadge}
            h={rem(10)}
            radius='xl'
            w={rem(10)}
          />
        </Group>
        <Group c='general.5' gap={rem(20)} ml='auto'>
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={User}
            p={rem(3)}
            weight='bold'
          />
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={VideoCamera}
            p={rem(3)}
            weight='bold'
          />
          <Box
            className={clsx('icon-size-lg', 'cursor-pointer')}
            component={Gear}
            p={rem(3)}
            weight='bold'
          />
        </Group>
      </Group>
    </Box>
  )
}

function Conversation() {
  return (
    <Stack h='100%' w='100%'>
      <ConversationHeader />
      <Compose />
    </Stack>
  )
}

function Compose() {
  return (
    <Group
      className={styles.compose}
      gap={rem(24)}
      mt='auto'
      px={rem(14)}
      py={rem(12)}
      w='100%'
      wrap='nowrap'
    >
      <Input
        classNames={{input: styles.input}}
        placeholder='Your message…'
        size='sm'
        w='100%'
      />
      <Paperclip
        className={clsx('icon-size-md', 'cursor-pointer', 'shrink-0')}
      />
      <Button className='shrink-0'>Send</Button>
    </Group>
  )
}

export function Inbox() {
  return (
    <Stack gap={rem(30)} h='100%'>
      <PageHeader />
      <Layout>
        <Conversation />
      </Layout>
    </Stack>
  )
}
