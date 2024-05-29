import {Badge, Box, rem, Stack, Text} from '@mantine/core'
import {
  ChartBar,
  ChatText,
  FolderSimple,
  House,
  ListDashes,
  Money,
  Question,
  Star,
  Tag,
  User,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr'
import type {
  SidebarItem,
  SidebarSection,
} from '@roscent/layout/RoscentLayout/components/Sidebar/Sidebar'
import clsx from 'clsx'
import {intersection, isEmpty, isEqual} from 'lodash-es'
import Link from 'next/link'
import {useSelectedLayoutSegments} from 'next/navigation'
import {Fragment} from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'

import {GroupLink} from '@/components/common'
import {
  ModernizeDashboard,
  ModernizeDashboardCategories,
  ModernizeDashboardCoupons,
  ModernizeDashboardCustomers,
  ModernizeDashboardInbox,
  ModernizeDashboardKnowledgebase,
  ModernizeDashboardOrders,
  ModernizeDashboardPricing,
  ModernizeDashboardProducts,
  ModernizeDashboardReports,
  ModernizeDashboardSettingsProfile,
} from '@/lib/declarative-routing'

import styles from './Sidebar.module.scss'

function SidebarItemImpl(props: SidebarItem) {
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
        icon: House,
        href: ModernizeDashboard(),
        activeSegment: [],
      },
      {
        id: 'orders',
        title: 'Orders',
        icon: ListDashes,
        href: ModernizeDashboardOrders(),
        activeSegment: ['orders'],
        unread: 16,
      },
      {
        id: 'products',
        title: 'Products',
        icon: Tag,
        href: ModernizeDashboardProducts(),
        activeSegment: ['products', 'add-product'],
      },
      {
        id: 'categories',
        title: 'Categories',
        icon: FolderSimple,
        href: ModernizeDashboardCategories(),
        activeSegment: ['categories', 'add-category'],
      },
      {
        id: 'customers',
        title: 'Customers',
        icon: UsersThree,
        href: ModernizeDashboardCustomers(),
        activeSegment: ['customers'],
      },
      {
        id: 'reports',
        title: 'Reports',
        icon: ChartBar,
        href: ModernizeDashboardReports(),
        activeSegment: ['reports'],
      },
      {
        id: 'coupons',
        title: 'Coupons',
        icon: Star,
        href: ModernizeDashboardCoupons(),
        activeSegment: ['coupons'],
      },
      {
        id: 'inbox',
        title: 'Inbox',
        icon: ChatText,
        href: ModernizeDashboardInbox(),
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
        href: ModernizeDashboardKnowledgebase(),
        activeSegment: ['knowledge-base'],
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: Money,
        href: ModernizeDashboardPricing(),
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
        href: ModernizeDashboardSettingsProfile(),
        activeSegment: ['settings'],
      },
    ],
  },
]

function SidebarItems() {
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItemImpl key={item.id} {...item} />
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
