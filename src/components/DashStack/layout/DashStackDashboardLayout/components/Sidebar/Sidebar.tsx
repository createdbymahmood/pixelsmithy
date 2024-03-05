import {Badge, Box, rem, Stack, Text} from '@mantine/core'
import {
  ChartBar,
  ChatText,
  FolderSimple,
  Gauge,
  House,
  ListDashes,
  Money,
  Question,
  Star,
  Tag,
  User,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {intersection, isEmpty, isEqual} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import type {SidebarSection} from '@/components/SnowUI'
import {SidebarItem} from '@/components/SnowUI'
import {urls} from '@/constants'

import styles from './Sidebar.module.scss'

function SidebarItem(props: SidebarItem) {
  const segment = useSelectedLayoutSegments()
  const isEqualToSegment = isEqual(segment, props.activeSegment)
  const isActive =
    !isEmpty(intersection(segment, props.activeSegment)) || isEqualToSegment

  const Icon = props.icon ?? Fragment

  return (
    <GroupLink
      className={clsx(styles.sidebarItem, 'cursor-pointer', {
        [styles.active]: isActive,
      })}
      component={Link}
      gap='xs'
      href={props.href}
      pl='sm'
      pr='xs'
      py={rem(8)}
      wrap='nowrap'
    >
      <Icon
        className='icon-size-lg'
        color='currentColor'
        style={{padding: rem(2)}}
      />
      <Text size='sm'>{props.title}</Text>
      {props.unread ? (
        <Badge color='black' fw='bold' ml='auto' radius='xl' size='sm'>
          {props.unread}
        </Badge>
      ) : null}
    </GroupLink>
  )
}

const sections: SidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: Gauge,
        href: urls.Modernize.dashboard.index,
        activeSegment: [],
      },
    ],
  },
  {
    title: 'Other Information',
    items: [
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: Question,
        href: urls.Modernize.dashboard.knowledgeBase.index,
        activeSegment: ['knowledge-base'],
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: Money,
        href: urls.Modernize.dashboard.pricing,
        activeSegment: ['pricing'],
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        id: 'settings',
        title: 'Personal Settings',
        icon: User,
        href: urls.Modernize.dashboard.settings.profile,
        activeSegment: ['settings'],
      },
    ],
  },
]

function SidebarItems() {
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItem key={item.id} {...item} />
    })

    return (
      <Stack key={section.title} gap='xs'>
        {!isEmpty(section.title) ? (
          <Text c='general.4' px='sm' size='sm'>
            {section.title}
          </Text>
        ) : null}
        <Stack gap={rem(2)}>{sidebarItems}</Stack>
      </Stack>
    )
  })

  return (
    <Stack gap='sm' pb='xs'>
      {content}
    </Stack>
  )
}

export function Sidebar() {
  return (
    <PerfectScrollbar>
      <Box className={styles.sidebar} miw={rem(250)} p='xs'>
        <SidebarItems />
      </Box>
    </PerfectScrollbar>
  )
}
