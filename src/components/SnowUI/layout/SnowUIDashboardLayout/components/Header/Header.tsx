import {Anchor, Breadcrumbs, Group} from '@mantine/core'
import type {SpotlightActionData} from '@mantine/spotlight'
import {Spotlight, spotlight} from '@mantine/spotlight'
import type {IconWeight} from '@phosphor-icons/react'
import {
  Bell,
  ClockCounterClockwise,
  Command,
  Folder,
  IdentificationCard,
  MagnifyingGlass,
  Sidebar,
  Star,
  Sun,
} from '@phosphor-icons/react/dist/ssr'
import {useRouter} from 'next/navigation'
import {Fragment} from 'react'

import {SearchInput} from '@/components/SnowUI'
import {projectId} from '@/components/SnowUI/mocks/email'
import {urls} from '@/constants'

import styles from './Header.module.scss'

const breadcrumbs = [
  {title: 'Dashboards', href: '/'},
  {title: 'Default', href: '/'},
].map((item, index) => (
  <Anchor key={index} href={item.href} underline='never'>
    {item.title}
  </Anchor>
))

const HeaderBreadcrumbs = () => {
  return (
    <Breadcrumbs
      classNames={{
        breadcrumb: styles.breadcrumb,
        separator: styles.breadcrumbSeparator,
      }}
    >
      {breadcrumbs}
    </Breadcrumbs>
  )
}

const iconSize = 20
const iconWeight: IconWeight = 'duotone'

function SpotlightImpl() {
  const router = useRouter()
  const actions: SpotlightActionData[] = [
    {
      id: 'projects',
      label: 'Projects',
      description: 'Go to projects page',
      onClick: () => router.push(urls.SnowUI.projects.overview(projectId)),
      leftSection: <Folder size={iconSize} weight={iconWeight} />,
    },
    {
      id: 'account',
      label: 'Account',
      description: 'Go to account page',
      onClick: () => router.push(urls.SnowUI.account.index),
      leftSection: <IdentificationCard size={iconSize} weight={iconWeight} />,
    },
  ]

  return (
    <Spotlight
      actions={actions}
      nothingFound='Nothing found...'
      searchProps={{
        leftSection: <MagnifyingGlass size={iconSize} />,
        placeholder: 'Search...',
      }}
      shortcut={['mod + /']}
      highlightQuery
    />
  )
}

function HeaderSearchInput() {
  const rightSection = (
    <Fragment>
      <Command />/
    </Fragment>
  )

  return (
    <Fragment>
      <SearchInput
        ml='auto'
        rightSection={rightSection}
        styles={{input: {cursor: 'pointer'}}}
        onClick={spotlight.open}
        onFocus={(e) => e.preventDefault()}
      />
      <SpotlightImpl />
    </Fragment>
  )
}

export function Header() {
  return (
    <Group className={styles.header}>
      <Sidebar className={styles.icon} size={iconSize} weight={iconWeight} />
      <Star className={styles.icon} size={iconSize} weight={iconWeight} />
      <HeaderBreadcrumbs />
      <HeaderSearchInput />
      <Sun className={styles.icon} size={iconSize} weight={iconWeight} />
      <ClockCounterClockwise
        className={styles.icon}
        size={iconSize}
        weight={iconWeight}
      />
      <Bell className={styles.icon} size={iconSize} weight={iconWeight} />
      <Sidebar className={styles.icon} size={iconSize} weight={iconWeight} />
    </Group>
  )
}
