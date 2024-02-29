import type {
  GroupCssVariables,
  GroupProps,
  GroupStylesCtx,
  MantineComponent,
} from '@mantine/core'
import {
  Badge,
  Box,
  Group as MantineGroup,
  rem,
  Stack,
  Text,
} from '@mantine/core'
import {
  ChartBar,
  ChatText,
  FolderSimple,
  Gear,
  House,
  ListDashes,
  Medal,
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

import type {SidebarSection} from '@/components/SnowUI'
import {SidebarItem} from '@/components/SnowUI'
import {urls} from '@/constants'

import styles from './Sidebar.module.scss'

const Group = MantineGroup as MantineComponent<{
  props: GroupProps & {href?: string}
  ref: HTMLDivElement
  stylesNames: 'root'
  vars: GroupCssVariables
  ctx: GroupStylesCtx
}>

function SidebarItem(props: SidebarItem) {
  const segment = useSelectedLayoutSegments()
  const isEqualToSegment = isEqual(segment, props.activeSegment)
  const isActive =
    !isEmpty(intersection(segment, props.activeSegment)) || isEqualToSegment

  const Icon = props.icon ?? Fragment

  return (
    <Group
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
    </Group>
  )
}

const sections: SidebarSection[] = [
  {
    title: '',
    items: [
      {
        id: 'dashboard',
        title: 'Dashboard',
        icon: House,
        href: urls.Modernize.dashboard.index,
        activeSegment: [],
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: ListDashes,
        href: urls.Modernize.dashboard.orders,
        activeSegment: ['orders'],
        unread: 16,
      },
      {
        id: 'products',
        title: 'Products',
        icon: Tag,
        href: urls.Modernize.dashboard.products.index,
        activeSegment: ['products', 'add-product'],
      },
      {
        id: 'categories',
        title: 'Categories',
        icon: FolderSimple,
        href: urls.Modernize.dashboard.categories.index,
        activeSegment: ['categories', 'add-category'],
      },
      {
        id: 'customers',
        title: 'Customers',
        icon: UsersThree,
        href: urls.Modernize.dashboard.customers.index,
        activeSegment: ['customers'],
      },
      {
        id: 'reports',
        title: 'Reports',
        icon: ChartBar,
        href: urls.Modernize.dashboard.reports.index,
        activeSegment: ['reports'],
      },
      {
        id: 'coupons',
        title: 'Coupons',
        icon: Star,
        href: urls.Modernize.dashboard.coupons.index,
        activeSegment: ['coupons'],
      },
      {
        id: 'inbox',
        title: 'Inbox',
        icon: ChatText,
        href: urls.Modernize.dashboard.inbox,
        activeSegment: ['inbox'],
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
        href: urls.Modernize.dashboard.settings.index,
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
