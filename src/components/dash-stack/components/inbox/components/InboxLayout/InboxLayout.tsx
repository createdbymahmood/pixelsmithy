'use client'

import {PageHeader} from '@/components/dash-stack/components'
import {Group, rem, Stack} from '@mantine/core'
import type {ReactNode} from 'react'

import {EmailSidebar} from '..'

interface InboxLayoutProps {
  children: ReactNode
}

export function InboxLayout({children}: InboxLayoutProps) {
  return (
    <Stack gap='md' h='100%'>
      <PageHeader>Inbox</PageHeader>

      <Group
        align='flex-start'
        h={`calc(100% - (${rem(44)} + var(--mantine-spacing-md)) )`}
        wrap='nowrap'
      >
        <EmailSidebar />
        {children}
      </Group>
    </Stack>
  )
}
