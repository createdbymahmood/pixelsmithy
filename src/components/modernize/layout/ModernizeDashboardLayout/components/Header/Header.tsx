import {
  Avatar,
  Box,
  Group,
  Input,
  Popover,
  rem,
  Text,
  Title,
} from '@mantine/core'
import type {
  SpotlightActionData,
  SpotlightActionGroupData,
} from '@mantine/spotlight'
import {Spotlight, spotlight} from '@mantine/spotlight'
import {
  Bell,
  CaretDown,
  ChatDots,
  MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import {Fragment} from 'react'

import {
  ModernizeDashboard,
  ModernizeDashboardCoupons,
  ModernizeDashboardCustomers,
  ModernizeDashboardKnowledgebase,
  ModernizeDashboardOrders,
  ModernizeDashboardPricing,
  ModernizeDashboardProducts,
  ModernizeDashboardReports,
  ModernizeDashboardSettings,
} from '@/lib/declarative-routing'

import styles from './Header.module.scss'

function SpotlightImpl() {
  const router = useRouter()
  const actions: (SpotlightActionData | SpotlightActionGroupData)[] = [
    {
      group: 'Pages',
      actions: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          description: 'The entry point',
          onClick: () => router.push(ModernizeDashboard()),
        },
        {
          id: 'orders',
          label: 'Orders',
          description: 'List of orders',
          onClick: () => router.push(ModernizeDashboardOrders()),
        },
        {
          id: 'products',
          label: 'Products',
          description: 'List of Products',
          onClick: () => router.push(ModernizeDashboardProducts()),
        },
        {
          id: 'customers',
          label: 'Customers',
          description: 'List of customers',
          onClick: () => router.push(ModernizeDashboardCustomers()),
        },
        {
          id: 'reports',
          label: 'Reports',
          description: 'List of Reports',
          onClick: () => router.push(ModernizeDashboardReports()),
        },
        {
          id: 'coupons',
          label: 'Coupons',
          description: 'List of Coupons',
          onClick: () => router.push(ModernizeDashboardCoupons()),
        },
        {
          id: 'settings',
          label: 'Settings',
          description: 'List of Settings',
          onClick: () => router.push(ModernizeDashboardSettings()),
        },
      ],
    },
    {
      group: 'Other',
      actions: [
        {
          id: 'knowledge-base',
          label: 'Knowledge Base',
          description: 'Maybe to learn something',
          onClick: () => router.push(ModernizeDashboardKnowledgebase()),
        },
        {
          id: 'pricing',
          label: 'Pricing',
          description: 'See our plans',
          onClick: () => router.push(ModernizeDashboardPricing()),
        },
      ],
    },
  ]

  return (
    <Spotlight
      actions={actions}
      classNames={{actionsGroup: styles.spotlightActionGroup}}
      maxHeight={350}
      nothingFound='Nothing found...'
      p={0}
      searchProps={{
        leftSection: <MagnifyingGlass />,
        placeholder: 'Search...',
      }}
      shortcut={['mod + /']}
      styles={{
        actionsGroup: {padding: 0, margin: 'var(--mantine-spacing-xs)'},
        action: {padding: '0 var(--mantine-spacing-xs)'},
      }}
      highlightQuery
      scrollable
    />
  )
}

function SearchInput() {
  const leftSection = <MagnifyingGlass className='icon-size-md' />
  return (
    <Fragment>
      <Input
        classNames={{input: styles.searchInput}}
        leftSection={leftSection}
        placeholder='Search...'
        size='sm'
        onClick={spotlight.open}
        onFocus={(e) => e.preventDefault()}
      />
      <SpotlightImpl />
    </Fragment>
  )
}

function Profile() {
  return (
    <Popover shadow='md' width={200}>
      <Popover.Target>
        <Group className='cursor-pointer' gap={rem(20)}>
          <Avatar size={rem(36)} />
          <Text>X’eriya Ponald</Text>
          <CaretDown weight='bold' />
        </Group>
      </Popover.Target>

      <Popover.Dropdown style={{padding: rem(12)}}>
        <Text c='general.5' size='sm'>
          This is uncontrolled popover, it is opened when button is clicked
        </Text>
      </Popover.Dropdown>
    </Popover>
  )
}

export function Header() {
  return (
    <Group bg='white' className={styles.header} gap={0} wrap='nowrap'>
      <Group className={styles.logo} gap='xs'>
        <Image
          alt='Logo'
          height={38}
          src='/assets/modernize/icons/logo.svg'
          width={41.3}
        />
        <Title order={6}>Modernize</Title>
      </Group>

      <Box px='sm'>
        <SearchInput />
      </Box>

      <Group c='general.5' ml='auto'>
        <ChatDots className={clsx('icon-size-md', 'cursor-pointer')} />
        <Bell className={clsx('icon-size-md', 'cursor-pointer')} />
        <Profile />
      </Group>
    </Group>
  )
}
