import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {Box, Group as MantineGroup, rem, Stack, Text} from '@mantine/core'
import type {IconProps, IconWeight} from '@phosphor-icons/react'
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
import {useSelectedLayoutSegment} from 'next/navigation'
import type {ReactNode} from 'react'
import React, {Fragment} from 'react'

import {emailId} from '@roscent/mocks/email'
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
  const layoutSegment = useSelectedLayoutSegment()

  const isActive = layoutSegment === 'compose'
  const iconWeight: IconWeight = isActive ? 'fill' : 'light'

  return (
    <Group
      className={clsx('cursor-pointer', styles.item, styles.compose)}
      component={Link}
      gap='sm'
      href={urls.roscent.email.compose}
    >
      <PencilSimpleLine className='icon-size-lg' weight={iconWeight} />
      <Text size='sm'>Compose</Text>
    </Group>
  )
}

interface SidebarItemProps {
  title: string
  href: string
  icon: React.FC<IconProps>
  segment: string | null
}

function SidebarItem({href, title, icon: Icon, segment}: SidebarItemProps) {
  const layoutSegment = useSelectedLayoutSegment()
  const isActive = layoutSegment === segment
  const iconWeight: IconWeight = isActive ? 'fill' : 'light'
  return (
    <Group
      className={clsx('cursor-pointer', styles.item, {
        [styles.itemActive]: isActive,
      })}
      component={Link}
      gap='sm'
      href={href}
    >
      <Icon className='icon-size-lg' weight={iconWeight} />
      <Text size='sm'>{title}</Text>
    </Group>
  )
}

const sidebarItems = [
  {
    title: 'Inbox',
    icon: Tray,
    href: urls.roscent.email.inbox(emailId),
    segment: 'inbox',
  },
  {
    title: 'Sent',
    icon: PaperPlaneRight,
    href: urls.roscent.email.sent,
    segment: 'sent',
  },
  {
    title: 'Draft',
    icon: FileText,
    href: urls.roscent.email.draft,
    segment: 'draft',
  },
  {
    title: 'Spam',
    icon: WarningOctagon,
    href: urls.roscent.email.spam,
    segment: 'spam',
  },
  {
    title: 'Trash',
    icon: Trash,
    href: urls.roscent.email.trash,
    segment: 'trash',
  },
  {
    title: 'Archive',
    icon: Archive,
    href: urls.roscent.email.archive,
    segment: 'archive',
  },
]

function SidebarItems() {
  const content = sidebarItems.map((sidebarItem) => {
    return (
      <SidebarItem
        key={sidebarItem.title}
        href={sidebarItem.href}
        icon={sidebarItem.icon}
        segment={sidebarItem.segment}
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
    <Group align='flex-start' gap='lg' h='100%' wrap='nowrap'>
      <Stack className='shrink-0' gap={rem(5)} w={rem(124)}>
        <SidebarItems />
      </Stack>

      <Box h='100%' w='100%'>
        {children}
      </Box>
    </Group>
  )
}
