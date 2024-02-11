import {Anchor, Breadcrumbs, Group, Input} from '@mantine/core'
import type {IconWeight} from '@phosphor-icons/react'
import {
  Bell,
  ClockCounterClockwise,
  Command,
  MagnifyingGlass,
  Sidebar,
  Star,
  Sun,
} from '@phosphor-icons/react'
import {Fragment} from 'react'

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

function HeaderSearchInput() {
  const rightSection = (
    <Fragment>
      <Command />/
    </Fragment>
  )

  return (
    <Input
      classNames={{
        input: styles.searchInput,
        section: styles.searchInputRightSection,
        wrapper: styles.searchInputWrapper,
      }}
      leftSection={<MagnifyingGlass />}
      placeholder='Search'
      rightSection={rightSection}
      size='xs'
    />
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
