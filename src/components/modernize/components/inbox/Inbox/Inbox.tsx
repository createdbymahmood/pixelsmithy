'use client'

import {Button, Card, Group, rem, Stack, Title} from '@mantine/core'
import {Plus} from '@phosphor-icons/react/dist/ssr'
import type {ReactNode} from 'react'

import {Chat, ChatSidebar} from './components'

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

function Layout(props: {children: ReactNode}) {
  return (
    <Card h='100%' p={0}>
      <Stack className='shrink-0' h='100%'>
        <Group align='flex-start' gap={0} h='100%' p={0} wrap='nowrap'>
          <ChatSidebar />
          {props.children}
        </Group>
      </Stack>
    </Card>
  )
}

export function Inbox() {
  return (
    <Stack gap={rem(30)} h='100%'>
      <PageHeader />
      <Layout>
        <Chat />
      </Layout>
    </Stack>
  )
}
