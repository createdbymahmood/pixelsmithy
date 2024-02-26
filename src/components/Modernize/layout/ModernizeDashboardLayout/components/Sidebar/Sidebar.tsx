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
import {UsersThree} from '@phosphor-icons/react'
import {
  ChartBar,
  ChatText,
  FolderSimple,
  Gear,
  House,
  ListDashes,
  Medal,
  Question,
  Star,
  Sticker,
  User,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {isEqual} from 'lodash-es'
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

  console.log({segment})
  const isActive = isEqual(segment, props.activeSegment)
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
        <Badge color='black' ml='auto'>
          {props.unread}
        </Badge>
      ) : null}
    </Group>
  )
}

const sections: SidebarSection[] = [
  {
    title: 'Home',
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
        icon: Sticker,
        href: '',
        activeSegment: ['products'],
      },
      {
        id: 'categories',
        title: 'Categories',
        icon: FolderSimple,
        href: '',
        activeSegment: ['categories'],
      },
      {
        id: 'customers',
        title: 'Customers',
        icon: UsersThree,
        href: '',
        activeSegment: ['customers'],
      },
      {
        id: 'reports',
        title: 'Reports',
        icon: ChartBar,
        href: '',
        activeSegment: ['reports'],
      },
      {
        id: 'coupons',
        title: 'Coupons',
        icon: Star,
        href: '',
        activeSegment: ['coupons'],
      },
      {
        id: 'inbox',
        title: 'Inbox',
        icon: ChatText,
        href: '',
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
        href: '/',
        activeSegment: ['knowledge-base'],
      },
      {
        id: 'productUpdates',
        title: 'Product Updates',
        icon: Medal,
        href: '/',
        activeSegment: ['product-updates'],
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        id: 'personalSettings',
        title: 'Personal Settings',
        icon: User,
        href: '/',
        activeSegment: ['personal-settings'],
      },
      {
        id: 'globalSettings',
        title: 'Global Settings',
        icon: Gear,
        href: '/',
        activeSegment: ['global-settings'],
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
        <Text c='general.4' px='sm' size='sm'>
          {section.title}
        </Text>
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
