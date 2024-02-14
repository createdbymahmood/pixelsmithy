import {Anchor, Breadcrumbs, Group} from '@mantine/core'
import type {IconWeight} from '@phosphor-icons/react'
import {
  Bell,
  ClockCounterClockwise,
  Command,
  Sidebar,
  Star,
  Sun,
} from '@phosphor-icons/react/dist/ssr'
import {Fragment} from 'react'

import {SearchInput} from '@/components/SnowUI'

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

  return <SearchInput ml='auto' rightSection={rightSection} />
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
