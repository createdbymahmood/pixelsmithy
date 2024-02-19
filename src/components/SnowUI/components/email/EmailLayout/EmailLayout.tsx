import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {Box, Group as MantineGroup, rem, Stack, Text} from '@mantine/core'
import type {IconProps} from '@phosphor-icons/react'
import {
  Archive,
  FileText,
  PaperPlaneRight,
  PencilSimpleLine,
  Trash,
  Tray,
  WarningOctagon,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Link from 'next/link'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'

import {urls} from '@/constants'

import styles from './EmailLayout.module.scss'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

function Compose() {
  return (
    <Group
      className={clsx('cursor-pointer', styles.item, styles.compose)}
      component={Link}
      gap='sm'
      href={urls.SnowUI.email.compose}
    >
      <PencilSimpleLine className='icon-size-md' />
      <Text size='sm'>Compose</Text>
    </Group>
  )
}

interface SidebarItemProps {
  title: string
  href: string
  icon: React.FC<IconProps>
}

function SidebarItem({href, title, icon: Icon}: SidebarItemProps) {
  return (
    <Group
      className={clsx('cursor-pointer', styles.item)}
      component={Link}
      gap='sm'
      href={href}
    >
      <Icon className='icon-size-md' />
      <Text size='sm'>{title}</Text>
    </Group>
  )
}

const sidebarItems = [
  {
    title: 'Inbox',
    icon: Tray,
    href: urls.SnowUI.email.inbox,
    segment: null,
  },
  {
    title: 'Sent',
    icon: PaperPlaneRight,
    href: urls.SnowUI.email.sent,
  },
  {
    title: 'Draft',
    icon: FileText,
    href: urls.SnowUI.email.draft,
  },
  {
    title: 'Spam',
    icon: WarningOctagon,
    href: urls.SnowUI.email.spam,
  },
  {
    title: 'Trash',
    icon: Trash,
    href: urls.SnowUI.email.trash,
  },
  {
    title: 'Archive',
    icon: Archive,
    href: urls.SnowUI.email.trash,
  },
]

function SidebarItems() {
  const content = sidebarItems.map((sidebarItem) => {
    return (
      <SidebarItem
        key={sidebarItem.title}
        href={sidebarItem.href}
        icon={sidebarItem.icon}
        title={sidebarItem.title}
      />
    )
  })
  content.unshift(<Compose key='Compose' />)
  return <Fragment>{content}</Fragment>
}

interface EmailLayoutProps {
  children?: ReactNode
}

export function EmailLayout({children}: EmailLayoutProps) {
  return (
    <Group align='flex-start' gap='lg' h='100%'>
      <Stack gap={rem(5)}>
        <SidebarItems />
      </Stack>

      <Box>{children}</Box>
    </Group>
  )
}
