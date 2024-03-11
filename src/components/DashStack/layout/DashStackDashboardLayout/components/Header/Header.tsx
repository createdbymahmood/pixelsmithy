import {
  Avatar,
  Group,
  Input,
  Popover,
  rem,
  Stack,
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
  CaretCircleDown,
  CaretDown,
  List,
  MagnifyingGlass,
} from '@phosphor-icons/react/dist/ssr'
import clsx from 'clsx'
import {useRouter} from 'next/navigation'
import {Fragment} from 'react'

import {urls} from '@/constants'

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
          onClick: () => router.push(urls.Modernize.dashboard.index),
        },
        {
          id: 'orders',
          label: 'Orders',
          description: 'List of orders',
          onClick: () => router.push(urls.Modernize.dashboard.orders),
        },
        {
          id: 'products',
          label: 'Products',
          description: 'List of Products',
          onClick: () => router.push(urls.Modernize.dashboard.products.index),
        },
        {
          id: 'customers',
          label: 'customers',
          description: 'List of customers',
          onClick: () => router.push(urls.Modernize.dashboard.customers.index),
        },
        {
          id: 'reports',
          label: 'Reports',
          description: 'List of Reports',
          onClick: () => router.push(urls.Modernize.dashboard.reports.index),
        },
        {
          id: 'coupons',
          label: 'Coupons',
          description: 'List of Coupons',
          onClick: () => router.push(urls.Modernize.dashboard.coupons.index),
        },
        {
          id: 'settings',
          label: 'Settings',
          description: 'List of Settings',
          onClick: () => router.push(urls.Modernize.dashboard.settings.index),
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
          onClick: () =>
            router.push(urls.Modernize.dashboard.knowledgeBase.index),
        },
        {
          id: 'pricing',
          label: 'Pricing',
          description: 'See our plans',
          onClick: () => router.push(urls.Modernize.dashboard.pricing),
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
        radius='lg'
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
          <Stack gap={0}>
            <Text fw='700' size='sm'>
              Mony Roy
            </Text>
            <Text size='xs'>Admin</Text>
          </Stack>
          <CaretCircleDown className='icon-size-md' weight='thin' />
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

function LanguageSettings() {
  return (
    <Group gap='xs'>
      <Avatar h={rem(27)} radius='md' w={rem(40)} />
      <Text size='md'>English</Text>
      <CaretDown />
    </Group>
  )
}

export function Header() {
  return (
    <Group bg='white' className={styles.header} gap={0} wrap='nowrap'>
      <Group className={styles.logo} gap={rem(4)} justify='center'>
        <Title c='primary.4' order={6}>
          Dash
        </Title>
        <Title order={6}>Stack</Title>
      </Group>

      <Group gap='md'>
        <List className={clsx('cursor-pointer', 'icon-size-md')} />
        <SearchInput />
      </Group>

      <Group c='general.5' ml='auto'>
        <Bell className={clsx('icon-size-md', 'cursor-pointer')} />
        <LanguageSettings />
        <Profile />
      </Group>
    </Group>
  )
}
