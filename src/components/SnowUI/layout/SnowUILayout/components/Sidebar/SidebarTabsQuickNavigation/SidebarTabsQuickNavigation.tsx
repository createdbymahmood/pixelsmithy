import {Group, List, Tabs} from '@mantine/core'
import {head} from 'lodash-es'

import styles from './SidebarTabsQuickNavigation.module.scss'

const tabs = [
  {
    key: 'favorites',
    title: 'Favorites',
    items: [
      {key: '1', title: 'Microsoft', href: '/'},
      {key: '2', title: 'Google', href: '/'},
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

export function SidebarTabsQuickNavigation() {
  const tabsList = tabs.map((tab) => (
    <Tabs.Tab key={tab.key} value={tab.key}>
      {tab.title}
    </Tabs.Tab>
  ))

  const tabsContent = tabs.map((tab) => {
    const itemsList = tab.items.map((tabItem) => {
      return <List.Item key={tabItem.key}>{tabItem.title}</List.Item>
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
      <Tabs.List>
        <Group>{tabsList}</Group>
      </Tabs.List>

      {tabsContent}
    </Tabs>
  )
}
