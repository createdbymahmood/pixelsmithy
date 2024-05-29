import {Box, Group, rem, Stack, Text, Tooltip} from '@mantine/core'
import {
  Champagne,
  ChatsTeardrop,
  Gauge,
  Gear,
  Gift,
  Heart,
  ListChecks,
  Note,
  Scan,
  SignIn,
  StackSimple,
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
import {useLayoutStore} from '@/components/dash-stack/layout/DashStackDashboardLayout/store/layout'
import {
  DashstackAuthenticationSignin,
  DashstackAuthenticationSignup,
  DashstackDashboard,
  DashstackDashboardContacts,
  DashstackDashboardFavorites,
  DashstackDashboardInbox,
  DashstackDashboardOrders,
  DashstackDashboardPricing,
  DashstackDashboardProducts,
  DashstackDashboardProductstock,
  DashstackDashboardSettings,
  DashstackDashboardTeam,
  DashstackDashboardTodo,
} from '@/lib/declarative-routing'

import styles from './Sidebar.module.scss'

function SidebarItemImpl(props: SidebarItem) {
  const segment = useSelectedLayoutSegments()
  const isEqualToSegment = isEqual(segment, props.activeSegment)
  const isActive =
    !isEmpty(intersection(segment, props.activeSegment)) || isEqualToSegment

  const Icon = props.icon ?? Fragment
  const sidebarOpen = useLayoutStore((s) => s.sidebarOpen)

  return (
    <GroupLink
      className={clsx('cursor-pointer', {
        [styles.activeSidebarItemWrapper]: isActive,
      })}
      component={Link}
      href={props.href}
      py={rem(2)}
      target={props.target}
      wrap='nowrap'
    >
      <Tooltip
        label={props.title}
        position='right'
        style={{display: sidebarOpen ? 'none' : 'normal'}}
      >
        <Group
          className={clsx(styles.sidebarItem, {[styles.active]: isActive})}
          gap='sm'
          mx={sidebarOpen ? 'md' : 'xs'}
          px='sm'
          py='xs'
          w={sidebarOpen ? '100%' : 'auto'}
        >
          <Icon
            className='icon-size-lg'
            color='currentColor'
            style={{padding: rem(2)}}
          />
          {sidebarOpen ? <Text size='sm'>{props.title}</Text> : null}
        </Group>
      </Tooltip>
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
        href: DashstackDashboard(),
        activeSegment: [],
      },
      {
        id: 'products',
        title: 'Products',
        icon: Scan,
        href: DashstackDashboardProducts(),
        activeSegment: ['products'],
      },
      {
        id: 'favorites',
        title: 'Favorites',
        icon: Heart,
        href: DashstackDashboardFavorites(),
        activeSegment: ['favorites'],
      },
      {
        id: 'inbox',
        title: 'Inbox',
        icon: ChatsTeardrop,
        href: DashstackDashboardInbox(),
        activeSegment: ['inbox'],
      },
      {
        id: 'orders',
        title: 'Orders List',
        icon: ListChecks,
        href: DashstackDashboardOrders(),
        activeSegment: ['orders'],
      },
      {
        id: 'product-stock',
        title: 'Product Stock',
        icon: StackSimple,
        href: DashstackDashboardProductstock(),
        activeSegment: ['product-stock'],
      },
    ],
  },
  {
    title: 'Pages',
    items: [
      {
        id: 'pricing',
        title: 'Pricing',
        icon: Gift,
        href: DashstackDashboardPricing(),
        activeSegment: ['pricing'],
      },
      {
        id: 'to-do',
        title: 'To-Do',
        icon: Note,
        href: DashstackDashboardTodo(),
        activeSegment: ['to-do'],
      },
      {
        id: 'contacts',
        title: 'Contacts',
        icon: UsersThree,
        href: DashstackDashboardContacts(),
        activeSegment: ['contacts'],
      },
      {
        id: 'team',
        title: 'Team',
        icon: User,
        href: DashstackDashboardTeam(),
        activeSegment: ['team'],
      },
      {
        id: 'settings',
        title: 'Settings',
        icon: Gear,
        href: DashstackDashboardSettings(),
        activeSegment: ['settings'],
      },
    ],
  },
  {
    title: 'Authentication',
    items: [
      {
        id: 'sign-in',
        title: 'Sign In',
        icon: SignIn,
        href: DashstackAuthenticationSignin(),
        target: '_blank',
        activeSegment: ['sign-in'],
      },
      {
        id: 'sign-up',
        title: 'Sign Up',
        icon: Champagne,
        href: DashstackAuthenticationSignup(),
        target: '_blank',
        activeSegment: ['sign-up'],
      },
    ],
  },
]

function SidebarItems() {
  const sidebarOpen = useLayoutStore((s) => s.sidebarOpen)
  const content = sections.map((section) => {
    const sidebarItems = section.items.map((item) => {
      return <SidebarItemImpl key={item.id} {...item} />
    })

    return (
      <Stack key={section.title} gap='xs'>
        {!isEmpty(section.title) ? (
          <Text
            c='dimmed'
            className={styles.sectionTitle}
            mx={sidebarOpen ? 0 : 'auto'}
            pt='sm'
            px={sidebarOpen ? 'xl' : 0}
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
  const sidebarOpen = useLayoutStore((s) => s.sidebarOpen)
  const sidebarWidth = sidebarOpen ? rem(240) : 'fit-content'
  return (
    <PerfectScrollbar>
      <Box className={styles.sidebar} miw={sidebarWidth}>
        <SidebarItems />
      </Box>
    </PerfectScrollbar>
  )
}
