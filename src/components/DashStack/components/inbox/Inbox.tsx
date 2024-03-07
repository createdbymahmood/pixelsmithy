'use client'

import {PageHeader} from '@dash-stack/components'
import {Group, rem, Stack} from '@mantine/core'

import {Emails, EmailSidebar} from './components'

export function Inbox() {
  return (
    <Stack gap='md' h='100%'>
      <PageHeader>Inbox</PageHeader>

      <Group
        align='flex-start'
        h={`calc(100% - (${rem(44)} + var(--mantine-spacing-md)) )`}
        wrap='nowrap'
      >
        <EmailSidebar />
        <Emails />
      </Group>
    </Stack>
  )
}
