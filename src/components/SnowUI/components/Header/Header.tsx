import {Anchor, Breadcrumbs, Group} from '@mantine/core'

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

export function Header() {
  return (
    <Group className={styles.header}>
      <HeaderBreadcrumbs />
    </Group>
  )
}
