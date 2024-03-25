import type {
  ListItemProps,
  ListItemStylesNames,
  MantineComponent,
} from '@mantine/core'
import {List, Tabs} from '@mantine/core'
import {head} from 'lodash-es'
import Link from 'next/link'

import {projectId} from '@/components/roscent/mocks/email'
import {urls} from '@/constants'

import styles from './SidebarTabsQuickNavigation.module.scss'

const tabs = [
  {
    key: 'favorites',
    title: 'Favorites',
    items: [
      {
        key: '1',
        title: 'Project Budget',
        href: urls.roscent.projects.budget(projectId),
      },
      {
        key: '2',
        title: 'Account Settings',
        href: urls.roscent.account.settings,
      },
    ],
  },

  {
    key: 'recently',
    title: 'Recently',
    items: [
      {key: '1', title: 'Netflix', href: '/'},
      {key: '2', title: 'Facebook', href: '/'},
    ],
  },
]

const initialOpenedTab = head(tabs)?.key
const ListItem = List.Item as MantineComponent<{
  props: ListItemProps & {href: string}
  ref: HTMLLIElement
  stylesNames: ListItemStylesNames
  compound: true
}>

export function SidebarTabsQuickNavigation() {
  const tabsList = tabs.map((tab) => (
    <Tabs.Tab key={tab.key} className={styles.tab} value={tab.key}>
      {tab.title}
    </Tabs.Tab>
  ))

  const tabsContent = tabs.map((tab) => {
    const itemsList = tab.items.map((tabItem) => {
      return (
        <ListItem key={tabItem.key} component={Link} href={tabItem.href}>
          {tabItem.title}
        </ListItem>
      )
    })

    return (
      <Tabs.Panel
        key={tab.key}
        classNames={{panel: styles.panel}}
        mt='lg'
        pl='lg'
        value={tab.key}
      >
        <List
          classNames={{item: styles.item}}
          listStyleType='none'
          spacing='md'
        >
          {itemsList}
        </List>
      </Tabs.Panel>
    )
  })

  return (
    <Tabs
      classNames={{
        tab: styles.tab,
        tabSection: styles.tabSection,
      }}
      defaultValue={initialOpenedTab}
      unstyled
    >
      <Tabs.List>{tabsList}</Tabs.List>

      {tabsContent}
    </Tabs>
  )
}
