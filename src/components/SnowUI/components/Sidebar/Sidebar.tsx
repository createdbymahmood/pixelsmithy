'use client'

import {Accordion, Box, Group, rem, Text} from '@mantine/core'
import {
  IconBook,
  IconBook2,
  IconChartPie,
  IconFolder,
  IconShoppingBag,
} from '@tabler/icons-react'
import {useSelections} from 'ahooks'
import clsx from 'clsx'
import {isArray, isEmpty} from 'lodash-es'
import type {ComponentPropsWithoutRef} from 'react'
import React, {Fragment} from 'react'

import styles from './Sidebar.module.scss'

interface SidebarItem {
  id: string
  title: string
  icon?: React.FC<ComponentPropsWithoutRef<'svg'>>
  filledIcon?: React.FC<ComponentPropsWithoutRef<'svg'>>
  href: string
  children?: SidebarItem[]
}

interface SidebarSection {
  title: string
  items: SidebarItem[]
}

interface SidebarSectionsProps {
  sections: SidebarSection[]
}

interface SidebarItemsProps {
  items: SidebarItem[]
  selections: ReturnType<typeof useSelections<string>>
}

const SidebarItems = ({items, selections}: SidebarItemsProps) => {
  const content = items.map((item) => {
    const withChildren = isArray(item.children)

    const toggle = (title: string) => () => {
      if (!withChildren) return
      selections.toggle(title)
    }

    const children = (() => {
      // if (!opened) return null
      return withChildren ? (
        <SidebarItems items={item.children!} selections={selections} />
      ) : null
    })()

    const opened = selections.isSelected(item.id)
    const withIcon = !isEmpty(item.icon)
    const Icon = (() => {
      if (!opened) return item.icon ?? Fragment
      return item.filledIcon ?? item.icon ?? Fragment
    })()

    return (
      <Accordion.Item key={item.id} value={item.id} onClick={toggle(item.id)}>
        <Accordion.Control
          // eslint-disable-next-line react/jsx-no-useless-fragment
          chevron={withChildren ? null : <Fragment />}
          className={clsx({[styles.activeSidebarItem]: opened})}
          mb='5px'
        >
          <Group gap='xs'>
            <Icon
              className={clsx(styles.icon, {
                [styles.childlessSidebarItem]: !withChildren,
              })}
            />

            <Text
              className={clsx({[styles.withoutIconSidebarItem]: !withIcon})}
              size='sm'
            >
              {item.title}
            </Text>
          </Group>
        </Accordion.Control>

        <Accordion.Panel>{children}</Accordion.Panel>
      </Accordion.Item>
    )
  })

  return content
}

const SidebarSections = ({sections}: SidebarSectionsProps) => {
  const selections = useSelections<string>([])
  const content = sections.map((section) => {
    return (
      <Fragment key={section.title}>
        <Text className={styles.section} mb={rem(10)} ml='lg' size='sm'>
          {section.title}
        </Text>

        <SidebarItems items={section.items} selections={selections} />
      </Fragment>
    )
  })

  return (
    <Accordion
      classNames={{control: styles.sidebarItem, chevron: styles.chevron}}
      mb='sm'
      value={selections.selected}
      multiple
      unstyled
    >
      {content}
    </Accordion>
  )
}

export function Sidebar() {
  const sidebarSections: SidebarSection[] = [
    {
      title: 'Dashboards',
      items: [
        {
          id: 'Dashboards',
          icon: IconChartPie,
          href: '/',
          title: 'overview',
          children: [
            {
              id: 'Overview',
              href: '/',
              title: 'Icon360',
            },
          ],
        },
        {
          id: 'eCommerce',
          title: 'eCommerce',
          icon: IconShoppingBag,
          href: '/',
        },
        {
          id: 'projects',
          title: 'Projects',
          icon: IconFolder,
          href: '/',
        },
        {
          id: 'onlineCourses',
          title: 'Online Courses',
          icon: IconBook,
          href: '/',
        },
        {
          id: 'allInOne',
          title: 'All in one',
          icon: IconBook2,
          href: '/',
          children: [
            {
              id: 'allInOne-overview',
              href: '/',
              title: 'Overview',
            },
            {
              title: 'eCommerce',
              id: 'allInOne-ecommerce',
              href: '/',
            },
            {
              id: 'allInOne-projects',
              title: 'Projects',
              href: '/',
            },
            {
              id: 'allInOne-online-courses',
              title: 'Online Courses',
              href: '/',
            },
          ],
        },
      ],
    },
  ]

  return (
    <Box maw={220} p='lg'>
      <SidebarSections sections={sidebarSections} />
    </Box>
  )
}
