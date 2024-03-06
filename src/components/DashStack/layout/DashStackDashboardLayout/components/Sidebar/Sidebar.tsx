import {Badge, Box, Group, rem, Stack, Text} from '@mantine/core'
import {
  Calendar,
  ChatsTeardrop,
  Gauge,
  Gift,
  Heart,
  ListChecks,
  Money,
  Note,
  Scan,
  StackSimple,
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
      className={clsx('cursor-pointer', {[styles.activeWrapper]: isActive})}
      component={Link}
      href={props.href}
      py={rem(2)}
      wrap='nowrap'
    >
      <Group
        className={clsx(styles.sidebarItem, {[styles.active]: isActive})}
        gap='sm'
        mx='md'
        px='sm'
        py='xs'
        w='100%'
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
      </Group>
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
        href: urls.DashStack.dashboard.index,
        activeSegment: [],
      },
      // {
      //   id: 'products',
      //   title: 'Products',
      //   icon: Scan,
      //   href: urls.DashStack.products.index,
      //   activeSegment: ['products'],
      // },
      // {
      //   id: 'favorites',
      //   title: 'Favorites',
      //   icon: Heart,
      //   href: '/',
      //   activeSegment: ['favorites'],
      // },
      // {
      //   id: 'inbox',
      //   title: 'Inbox',
      //   icon: ChatsTeardrop,
      //   href: '/',
      //   activeSegment: ['inbox'],
      // },
      // {
      //   id: 'orders-list',
      //   title: 'Orders',
      //   icon: ListChecks,
      //   href: '/',
      //   activeSegment: ['orders'],
      // },
      // {
      //   id: 'product-stock',
      //   title: 'Product Stock',
      //   icon: StackSimple,
      //   href: '/',
      //   activeSegment: ['products'],
      // },
    ],
  },
  // {
  //   title: 'Pages',
  //   items: [
  //     {
  //       id: 'pricing',
  //       title: 'Pricing',
  //       icon: Gift,
  //       href: '/',
  //       activeSegment: ['pricing'],
  //     },
  //     {
  //       id: 'calendar',
  //       title: 'Pricing',
  //       icon: Calendar,
  //       href: '/',
  //       activeSegment: ['pricing'],
  //     },
  //     {
  //       id: 'to-do',
  //       title: 'To-Do',
  //       icon: Note,
  //       href: '/',
  //       activeSegment: ['pricing'],
  //     },
  //     {
  //       id: 'invoice',
  //       title: 'Invoice',
  //       icon: Money,
  //       href: '/',
  //       activeSegment: ['pricing'],
  //     },
  //   ],
  // },
]

function SidebarItems() {
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItem key={item.id} {...item} />
    })

    return (
      <Stack key={section.title} gap='xs'>
        {!isEmpty(section.title) ? (
          <Text
            c='dimmed'
            className={styles.sectionTitle}
            pt='sm'
            px='xl'
            size='xs'
          >
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
      <Box className={styles.sidebar} miw={rem(240)}>
        <SidebarItems />
      </Box>
    </PerfectScrollbar>
  )
}
